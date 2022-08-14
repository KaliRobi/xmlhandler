function Button({name, action, isDisabled}){
    if(isDisabled == 1) {
    return(
        
        <button type="submit" disabled onClick={action}
        className="disabled inline-block px-6 py-2.5 bg-gray-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md">{name}</button>
        

    )} 
    return(
        
        <button type="submit" onClick={action}
        className="inline-block px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">{name}</button>
        

    )

}

export default Button;