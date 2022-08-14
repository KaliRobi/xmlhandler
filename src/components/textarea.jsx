


function TextArea ({id, value, ro, doOnChange}){
    if(doOnChange != null) {
return(
    <div className="h-screen">
        <textarea 
        onChange={doOnChange}
        wrap="off" 
        autoCorrect="off" 
        autoCapitalize="off"
        // rows={38}
        // cols={100}
        id={id}
        className="border-4 w-full h-5/6 resize-none bg-neutral-100 font-mono text-xl"
        defaultValue={value}       
        ></textarea>
    </div>

) } else if (ro == -1) {
return(
    <div className="h-screen">
        <textarea 
        wrap="off" 
        autoCorrect="off" 
        autoCapitalize="off"
        // rows={38}
        // cols={100}
        id={id}
        className="border-4 w-full h-5/6 resize-none bg-neutral-100 text-xl font-mono"
        defaultValue={value}
        readOnly
        
        ></textarea>
    </div>

) }

 else if (ro != -1 ) {
    return(
        <div className="h-screen">
            <textarea 
            wrap="off" 
            autoCorrect="off" 
            autoCapitalize="off"
            // rows={38}
            // cols={100}
            id={id}
            className="border-4 w-full h-5/6 resize-none bg-neutral-100 text-xl font-mono"
            defaultValue={value}
            
            
            ></textarea>
        </div>)
 }


}
export default TextArea;