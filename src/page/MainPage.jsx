import {useContext, useEffect} from 'react';
import TextArea from '../components/textarea';
import Button from  '../components/button'
import AppContext from '../context/AppContext';
import Alerting from '../components/alert';

// TODO
// main fuction, press the button keep counter then set it read only then format the thing.
// if the button is pressed the basic function switches off

function MainPage() {

    const  { clearXmlText, changeCounter, changeFastTrackCounter, runFastTrack,  fastTrackCounter,  setNotReadOnly, notReadOnlyElement,  counter, xmltext,  formatXml} = useContext(AppContext)
// what if we set up the thing on button level.

const handlesubmit = (e) => {
    e.preventDefault()
    formatXml('left');
    changeCounter()
    setNotReadOnly()
    console.log(notReadOnlyElement)
}

const switchToFastTrack = (e) => {
    e.preventDefault()
    clearXmlText()
    //workflow    
    //disable input
    setNotReadOnly()
    // disable primary button untill the needed    
    changeFastTrackCounter()
    // check input
    

   
}
const fastFormat = (e) => {
    e.preventDefault()
    runFastTrack('left')
    console.log('it is changed')
   
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
       
        
        {fastTrackCounter > 0 ? <TextArea id='left' doOnChange={fastFormat} /> : <TextArea id='left' /> }
        </div>
        
        <div className='basis-1/7 m-0 justify-end'>
       
        
        
        <div className="flex justify-center my-5 mt-10  ">
            <form onSubmit={counter == 1 ? handlesubmit : cleatText}>              
            <div className="flex justify-center ">
           
            { fastTrackCounter == 1 ? <Button isDisabled={1} name={'Style' }  /> : <Button name={counter == 1  ? ' Style ' : ' Reset ' } />}
           </div>  
            </form>  
        </div>  
        
        <div className="flex justify-center my-5  ">
            <form onSubmit={switchToFastTrack}>              
            <div className="flex justify-center ">
            { fastTrackCounter == 1 ? <Button name={'Fast Track ON'}  /> : <Button name={'Fast Track Off'}  />  }
           </div>   
            </form>  
        </div>  
        </div>
        <div className='basis-3/5 m-6 h-5/6 justify-center'> 
        {notReadOnlyElement == 1 ? <TextArea  id ='right' value={xmltext} /> : <TextArea id ='right' value={xmltext} ro={notReadOnlyElement} /> }
        {/* onChange={fastTrackCounter== -1 ? (e) => handlesubmitFastTrack : null} */}
        </div>
       
        
     </div>
    
     </div>
    )



}

export default MainPage;