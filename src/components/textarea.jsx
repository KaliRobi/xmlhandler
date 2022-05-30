function TextArea ({xmltext}){
return(
    <div >
        <textarea 
        wrap="off" 
        autoCorrect="off" 
        autoCapitalize="off"
        rows={32}
        cols={70}
        
        className="border-4 resize-none bg-neutral-100"
        
        
        >{xmltext}</textarea>
    </div>

)

}
export default TextArea;