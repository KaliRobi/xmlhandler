import {useContext, useEffect} from 'react';
import TextArea from '../components/textarea';
import Button from  '../components/button'
import AppContext from '../context/AppContext';
import Alerting from '../components/alert';
// import {setXmlText} from '../context/AppContext';
// import { formatXml , logit} from '../context/Actions';
// usereducer and the reducers are only in the context



function MainPage() {

    const  { clearXmlText, changeCounter, compareDocuments, setNotReadOnly, notReadOnlyElement,  counter, xmltext, text, formatXml} = useContext(AppContext)
// what if we set up the thing on button level.

const handlesubmit = (e) => {
    e.preventDefault()
    formatXml('left');
    changeCounter()
    setNotReadOnly()
    console.log(notReadOnlyElement)
}

const handlesubmitSecond = (e) => {
    e.preventDefault()
    changeCounter()
    compareDocuments()
    console.log('style')
}
const cleatText = (e) =>{
    e.preventDefault()
    clearXmlText()
    changeCounter()
    setNotReadOnly()
    console.log(notReadOnlyElement)

}
 

    return(
        <div className=" h-full bg-gray-300">
     <div className="flex justify-center m-0 ">
            <Alerting/>
        </div>
    <div className=' flex flex-row  justify-center'>
    
       
        <div className='basis-3/5 m-6 justify-center'>
       
        
        <TextArea id='left' />
        </div>
        
        <div className='basis-1/7 m-0 justify-end'>
       
        <div className="flex justify-center my-5 mt-10  ">
            <form onSubmit={counter == 1 ? handlesubmit : cleatText}>              
            <div className="flex justify-center ">
            <Button name={counter == 1  ? ' Style ' : ' Reset ' }  />  
           </div>   
            </form>  
        </div>  
        
        <div className="flex justify-center my-5  ">
            <form onSubmit={handlesubmitSecond}>              
            <div className="flex justify-center ">
            {/* <Button name={' Compare '}  />   */}
           </div>   
            </form>  
        </div>  
        <div className="flex justify-center my-5  ">
            <form onSubmit={handlesubmit}>              
            <div className="flex justify-center">
            {/* <Button name={' Merge '} onSubmit={handlesubmit} />   */}
           </div>   
            </form>  
        </div>  
        </div>
        <div className='basis-3/5 m-6 h-5/6 justify-center'>
            {/* /* TODO read only  {} the readonly ttibute needs to be get ? :  in on a new state value. and this is how I can reuse this field for the second seciton too*/ }
        {notReadOnlyElement == 1 ? <TextArea id ='right' value={xmltext} /> : <TextArea id ='right' value={xmltext} ro={notReadOnlyElement} /> }
        </div>
        
     </div>
    
     </div>
    )



}

export default MainPage;