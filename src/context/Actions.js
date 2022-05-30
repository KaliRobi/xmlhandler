


// export const formatXml = (text) => {  
    
//     if(text.match('/(<.[^(><.)]+>)/')){  ///this needs to be chnaged to test for tags
//     var xmlDoc = new DOMParser().parseFromString(text, 'application/xml');
//      var xsltDoc = new DOMParser().parseFromString([
//         // styleing of the xml, tags should be highlighted somehow
//         '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
//         '  <xsl:strip-space elements="*"/>',
//         '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
//         '    <xsl:value-of select="normalize-space(.)"/>',
//         '  </xsl:template>',
//         '  <xsl:template match="node()|@*">',
//         '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
//         '  </xsl:template>',
//         '  <xsl:output indent="yes"/>',
//         '</xsl:stylesheet>',
//     ].join('\n'), 'application/xml');

//     var xsltProcessor = new XSLTProcessor();    
//     xsltProcessor.importStylesheet(xsltDoc);
//     var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
//     var resultXml = new XMLSerializer().serializeToString(resultDoc);

//     return resultXml
   
    
// };
// }