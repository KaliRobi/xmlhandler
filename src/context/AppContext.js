import {createContext, useReducer} from "react"
import AppReducer from "./AppReducer";


export const GithubProvider = ({children}) => {
    const initialState ={
        xmlText: [],
     
    }
    // userReducer takes the  reducer function we mae and the inital state
    const [state, dispatch] = useReducer(AppReducer, initialState)

// TODO
// add it to the react
// create a compare function which takes all the headers DONE
// do some test
// set decent regex
// xml, tags should be highlighted somehow
// differences should be displayed somehow

function to()
{  
    const text = document.getElementById('xml').value;
    console.log(text.match('/<.[^(><.)]+>)/'))
    if(text.match('/(<.[^(><.)]+>)/')){  ///this needs to be chnaged to test for tags
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
    var resultXml = new XMLSerializer().serializeToString(resultDoc);
   

   
    if(!document.getElementById('xmlout').innerHTML == ""){
       
        document.getElementById('xmlout').innerHTML = " ";
    }

    document.getElementById('xmlout').innerHTML = resultXml;
    }
    document.getElementById('xmlout').innerHTML = "Does not seem to be a complete XML file [test for < /> tags failed]"

};



 function kon(){
    // take the values from the second textbox
    const text = document.getElementById('xmlout').value;
    const xmlNode  =  new DOMParser().parseFromString(text, 'application/xml');
    const firstTagNodelist = xmlNode.querySelectorAll('*')
   
    // console.log(text.match(pat));
    //take the values from the second textbox
    const textB = document.getElementById('xml').value;
    const xmlNodeB  =  new DOMParser().parseFromString(textB, 'application/xml');
    const secondtTagNodelist = xmlNodeB.querySelectorAll('*')
   
    const firstTagArray = Array.from(firstTagNodelist);
    const secondTagArray = Array.from(secondtTagNodelist);
    let diffNotInFirst = firstTagArray.filter(el => !secondTagArray.includes(el));
    let diffNotInsecond = secondTagArray.filter(el => !firstTagArray.includes(el));

}

   
document.getElementById('test').addEventListener("click", kon)

document.getElementById('button').addEventListener("click", to)


}