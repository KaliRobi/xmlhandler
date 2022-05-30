import {useContext, useEffect} from 'react';
import TextArea from '../components/textarea';
import Button from  '../components/button'
import AppContext from '../context/AppContext';
// import { formatXml , logit} from '../context/Actions';
// usereducer and the reducers are only in the context



function MainPage() {

    const  {xmltext, xmlsender} = useContext(AppContext)
// what if we set up the thing on button level.

const handleclick = (e) => {
    e.preventDefault()
    xmlsender(xmltext)
    
    console.log(xmltext)
}

// const ttt = (e) => {e.preventdefault; 
//     const t = 3;
//     }


    return(
    //     <div className=" h-screen bg-gray-300">
    // <div className=' flex flex-row  justify-center'>
       
    //     <div className='basis-1/3 m-6 justify-center'>
    //     <TextArea  xmltext={xmltext}/>
    //     </div>
    //     <div className='basis-1/3 m-6 justify-end'>
    //     <div className="flex justify-center my-10  ">
    //         <form onSubmit={handleclick}>                
    //             <div form-control="true">
    //         <Button name={'>> Style >>'}   />  
    //         </div>  
    //         </form>       
    //            </div>               
    //             <div className="flex justify-center my-10">             
    //         <Button name={'<< Compare >>'} />
    //         </div>
    //         <div className="flex justify-center my-10">             
    //         <Button name={'<< Merge >>'} />
    //         </div>
    //     </div>
    //     <div className='basis-1/3 m-6 justify-center'>
    //     <TextArea />
    //     </div>
        
    // </div>
    // </div>
    <div>
        <form onSubmit={handleclick}>                
                <div form-control="true">
             <Button name={'>> Style >>'}   />  
           </div>  
                <div>
                <TextArea  xmltext={xmltext}/>
                </div>
            </form>     
    </div>
    )



}

export default MainPage;