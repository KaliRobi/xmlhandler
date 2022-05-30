import {createContext, useReducer} from "react"
import AppReducer from "./AppReducer";


// TODO
// add it to the react
// create a compare function which takes all the headers DONE
// do some test
// set decent regex
// xml, tags should be highlighted somehow
// differences should be displayed somehow

// TODO ON REACT
// set up initial state
// when the buttons are clicker the context need to fire
const AppContext = createContext()

export const AppProvider = ({children}) => {
    const initialState ={
        xmltext: ""
     
    }
    // userReducer takes the  reducer function we mae and the inital state
    const [state, dispatch] = useReducer(AppReducer, initialState)

return <AppContext.Provider value = {{
        xmltext: state.xmltext,
        dispatch
        
}}>{children}</AppContext.Provider>



}

export default AppContext;