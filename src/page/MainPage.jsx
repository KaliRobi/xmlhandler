import {useContext, useEffect} from 'react';
import TextArea from '../components/textarea';
import Button from  '../components/button'
import AppContext from '../context/AppContext';
// import {setXmlText} from '../context/AppContext';
// import { formatXml , logit} from '../context/Actions';
// usereducer and the reducers are only in the context



function MainPage() {

    const  { setXmlText, xmltext, formatXml} = useContext(AppContext)
// what if we set up the thing on button level.

const handlesubmit = (e) => {
    e.preventDefault()
    formatXml('input');
    
}
// const handleChange = (e) => setText(e.target.value)

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     if(text == ''){
    //         setAlert('Enter something', 'error')
    //     } else {
    //         searchUsers(text)

    //         setText('')
    //     }
    // }



    return(
        <div className=" h-screen bg-gray-300">
    <div className=' flex flex-row  justify-center'>
       
        <div className='basis-1/3 m-6 justify-center'>
        <TextArea id='input' />
        </div>
        <div className='basis-1/3 m-6 justify-end'>
        <div className="flex justify-center my-10  ">
            <form onSubmit={handlesubmit}>              
            <div className="flex justify-center my-10">
            <Button name={'>> Style >>'}  />  
           </div>          
                      
            <div className="flex justify-center my-10">             
            <Button name={'<< Compare >>'} />
            </div>
            <div className="flex justify-center my-10">             
            <Button name={'<< Merge >>'} />
            </div>
            </form>  
        </div>  
        </div>
        <div className='basis-1/3 m-6 justify-center'>
        <TextArea value={xmltext} />
        </div>
        
     </div>
     </div>
    )



}

export default MainPage;