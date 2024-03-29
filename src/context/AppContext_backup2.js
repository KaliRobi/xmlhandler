import {createContext, useReducer} from "react"
import AppReducer from "./AppReducer";


// TODO
// add it to the react
// create a compare function which takes all the headers DONE
// set decent regex
// xml, tags should be highlighted somehow
// differences should be displayed somehow

// TODO problems 
// when there is a change in outcome field with style, it does not reset the filed. 
// when the first button is used, set the read only flag.

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const initialState ={
        xmltext: "",
        xmltextright: '', 
        error: "",
        counter : 1
     
    }
    // userReducer takes the  reducer function we mae and the inital state
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const setAlert = (msg)=> {
        dispatch({
            type: 'SET_ALERT',
            payload: msg
        })
   
        setTimeout(() => dispatch({
            type: 'REMOVE_ALERT'
        }), 3000)
    }



     const formatXml = (id) => {  
        const text = document.getElementById(`${id}`).value
        
        if(text.match(/<([^\/>]+)[\/]*>/)){  ///this needs to be chnaged to test for tags
        var xmlDoc = new DOMParser().parseFromString(text, 'application/xml');
         var xsltDoc = new DOMParser().parseFromString([
            // styleing of the xml, tags should be highlighted somehow
            '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
            '  <xsl:strip-space elements="*"/>',
            '  <xsl:template match="para[content-style][not(text())]">', 
            '    <xsl:value-of select="normalize-space(.)"/>',
            '  </xsl:template>',
            '  <xsl:template match="node()|@*">',
            '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
            '  </xsl:template>',
            '  <xsl:output method="xml" indent="yes"/>',
            '</xsl:stylesheet>',
        ].join('\n'), 'application/xml');
    
        var xsltProcessor = new XSLTProcessor();    
        xsltProcessor.importStylesheet(xsltDoc);
        var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
        var xmltext = new XMLSerializer().serializeToString(resultDoc);
        
        dispatch({
            type: 'FORMATDOCUMENT',
            payload: xmltext
        }) 
       
        
    } else {
        setAlert('Does not seem like an XML file')
        changeCounter()
        console.log(state)
    }
    }


     const changeCounter = () =>{
        dispatch({
            type: 'CHANEGCOUNTER'
        })
     }

    
// the style should have a second function, to clear all the fields.
    const clearXmlText = () => {
        document.getElementById('left').value = ''
        dispatch({
            type: 'CLEARXMLTEXT'
        })


    }
// TODO



// but it needs to be cahnged later on, somehow figuring out how to change 
// the state witout .getelementbyid


// after the document is here, parsed, I need the values and the tags too.


// in the UI it needs to be selectable that we weant to compare only the tags or the value too.

function getXml(id) {
  return  document.getElementById(id).value

}



const compareDocuments = () => {
        state.xmltext = getXml('left')
        state.xmltextright = getXml('right')
       

        // Parse the documents

        let parserL = new DOMParser();
        let parserR = new DOMParser()
        let parsedRight = parserR.parseFromString(state.xmltext, 'application/xml')
        let parsedLeft = parserL.parseFromString(state.xmltextright , 'application/xml'); 
        const rightArr = []
        const leftArr = []
        const contentRight= []
        parsedRight.querySelectorAll("*").forEach(ite => contentRight.push(ite.textContent) )
        
        parsedRight.querySelectorAll("*").forEach(it => rightArr.push(it.tagName))
        parsedLeft.querySelectorAll("*").forEach(it => leftArr.push(it.tagName))
        
        const fullRightDoc = []
        parsedRight.querySelectorAll("*").forEach(it => fullRightDoc.push(it))
        
        const leftOnly =  leftArr.filter( it => !rightArr.includes(it))
        const rightOnly = rightArr.filter(it => !leftArr.includes(it))
        // console.log(leftOnly)
        // console.log(rightOnly)
        // try to cteate an object which maps the number of child items

        // each node gets a value of the child notes
        // multidimensiona array: the sub arrays should contacn the number of the sub nodes
        

        // a root elemebol kell kiindulni
        function loopNoods(node){
            const ttt = []  
            console.log(node.querySelectorAll('*').forEach(chi => console.log(chi.tagName)))    
            // if(node.childElementCount > 0){
            // for ( let i = 0; i <= node.childElementCount; i++ ){
            //     ttt.push(node[i])
            //     loopNoods(node[i])
            // } }
            // ttt.push(node)
            // return ttt
        }
            
        


         const kkk = loopNoods(fullRightDoc[0])

        const numberos = []    
        
        fullRightDoc.forEach( item => {
            numberos.push(item)
            numberos.push( item.childElementCount )})
        console.log(kkk)
        console.log(fullRightDoc[0].children)
        
       //each node value represents the distance between itself and the next parent node

// erteke csak annak van amelyik 0as 
// a prent 



       




}

  
    
return <AppContext.Provider value = {{
        xmltext: state.xmltext,
        counter: state.counter,
        originalText : state.text,
        alert: state.error,
        xmltextright : state.xmltextright,
        formatXml,
        clearXmlText,
        changeCounter,
        compareDocuments
        
}}>{children}</AppContext.Provider>



}

export default AppContext;