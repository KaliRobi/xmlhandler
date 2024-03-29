const AppReducer = (state, action) => {
    switch(action.type){
        // handles the file itself
        case 'FORMATDOCUMENT':
            return {
                ...state,
                xmltext: action.payload
            }
        case 'CLEARXMLTEXT':
            return {
                ...state,
                xmltext: "",
                
            }
        case 'CHANEGCOUNTER':
            return{
                ...state,
                counter: (state.counter * -1)
            }
        case 'SET_ALERT':
            return {
                ...state,
                error: action.payload
            }
        case 'REMOVE_ALERT':
            return {
                ...state,
                error: null}
        case 'NOTREADONLY':
            return {
                ...state,
                notReadOnlyElement: (state.notReadOnlyElement * -1)
            }
        case 'CHANEGFASTTRACKCOUNTER':
            return{
            ...state,
            fastTrackCounter: (state.fastTrackCounter * -1)
            }

        default:
            return state
    }
        
}

export default AppReducer