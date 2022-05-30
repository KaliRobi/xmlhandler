import {useContext, useEffect} from 'react';
import TextArea from '../components/textarea';
import Button from  '../components/button'
import AppContext from '../context/AppContext';
import { formatXml , logit} from '../context/Actions';



//TODO
//Instal wingcss meg a masikat
//kiszinezni
//xml beuitifer

// const  {xmltext, dispatch} = useContext(AppContext)

// add the form to a textarea button pair
// when we submit the form the function will trigger and return the formated xml
// this will be feeded into another function whihc put this to the second form 
// const handlesubmit = () => {
    
// }


function MainPage() {

    const  {xmltext, dispatch} = useContext(AppContext)
// what if we set up the thing on button level.

const handleclick = (e) => {
    e.preventDefault();
    dispatch({type: 'FORMATDOCUMENT', payload: xmltext}) 
    console.log("micsinalok")
}

// const ttt = (e) => {e.preventdefault; 
//     const t = 3;
//     }


    return(
        <div className=" h-screen bg-gray-300">
    <div className=' flex flex-row  justify-center'>
       
        <div className='basis-1/3 m-6 justify-center'>
        <TextArea />
        </div>
        <div className='basis-1/3 m-6 justify-end'>
        <div className="flex justify-center my-10  ">
            <form onSubmit={handleclick}>                
                <div form-control="true">
            <Button name={'>> Style >>'}  onSubmit />  
            </div>  
            </form>       
               </div>               
                <div className="flex justify-center my-10">             
            <Button name={'<< Compare >>'} />
            </div>
            <div className="flex justify-center my-10">             
            <Button name={'<< Merge >>'} />
            </div>
        </div>
        <div className='basis-1/3 m-6 justify-center'>
        <TextArea />
        </div>
        
    </div>
    </div>
    )



}

export default MainPage;