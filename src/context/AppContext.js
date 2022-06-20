import {createContext, useReducer} from "react"
import AppReducer from "./AppReducer";


// TODO
// add it to the react
// create a compare function which takes all the headers DONE
// do some test
// set decent regex
// xml, tags should be highlighted somehow
// differences should be displayed somehow

// TODO ON REACT
// set up initial state
// when the buttons are clicker the context need to fire
const AppContext = createContext()

export const AppProvider = ({children}) => {
    const initialState ={
        xmltext: "", 
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
// TODO
// match with xml
// no match = > error


     const formatXml = (id) => {  
        const text = document.getElementById(`${id}`).value
        
        if(text.match(/<([^\/>]+)[\/]*>/)){  ///this needs to be chnaged to test for tags
        var xmlDoc = new DOMParser().parseFromString(text, 'application/xml');
         var xsltDoc = new DOMParser().parseFromString([
            // styleing of the xml, tags should be highlighted somehow
            '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
            '  <xsl:strip-space elements="*"/>',
            '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
            '    <xsl:value-of select="normalize-space(.)"/>',
            '  </xsl:template>',
            '  <xsl:template match="node()|@*">',
            '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
            '  </xsl:template>',
            '  <xsl:output indent="yes"/>',
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
        document.getElementById('input').value = ''
        dispatch({
            type: 'CLEARXMLTEXT'
        })


    }


 

  
    
return <AppContext.Provider value = {{
        xmltext: state.xmltext,
        counter: state.counter,
        originalText : state.text,
        alert: state.error,
        formatXml,
        clearXmlText,
        changeCounter,
        
        
}}>{children}</AppContext.Provider>



}

export default AppContext;