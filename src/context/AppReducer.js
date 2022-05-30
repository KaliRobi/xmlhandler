const AppReducer = (state, action) => {
    switch(action.type){
        // handles the file itself
        case 'FORMATDOCUMENT':
            return {
                ...state,
                data: action.playload
            }

        //clears out the textfileds
        case 'REMOVECONTENT':
            return {
                ...state,
                xmltext: ""
            }

        case 'MERGECONTENT':
            return {
                ...state,
                xmltext: "logged"
            }
        case 'DIFFERCONTENT':
            return {
                ...state,
                xmltext: "logged"
            }
    }
}

export default AppReducer