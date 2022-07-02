


function TextArea ({id, value}){
return(
    <div className="h-full">
        <textarea 
        wrap="off" 
        autoCorrect="off" 
        autoCapitalize="off"
        // rows={38}
        // cols={100}
        id={id}
        className="border-4 w-full h-screen resize-none bg-neutral-100"
        defaultValue={value}
        
        
        ></textarea>
    </div>

)

}
export default TextArea;