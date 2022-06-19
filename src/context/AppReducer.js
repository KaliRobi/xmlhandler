const AppReducer = (state, action) => {
    switch(action.type){
        // handles the file itself
        case 'FORMATDOCUMENT':
            return {
                ...state,
                data: action.playload
            }
        case 'GETXMLTEXT':
            return {
                ...state,
                xmltext: action.playload
            }
        case 'SETXMLTEXT':
            return {
                ...state,
                xmltext: action.payload
            }
    }
}

export default AppReducer