


function TextArea ({id, value}){
return(
    <div >
        <textarea 
        wrap="off" 
        autoCorrect="off" 
        autoCapitalize="off"
        rows={32}
        cols={70}
        id={id}
        className="border-4 resize-none bg-neutral-100"
        defaultValue={value}
        
        
        ></textarea>
    </div>

)

}
export default TextArea;