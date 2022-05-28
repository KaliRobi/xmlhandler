function TextArea (){
return(
    <div >
        <textarea 
        wrap="off" 
        autoCorrect="off" 
        autoCapitalize="off"
        rows={32}
        cols={70}
        
        className="border-4 resize-none bg-neutral-100"
        
        
        ></textarea>
    </div>

)

}
export default TextArea;