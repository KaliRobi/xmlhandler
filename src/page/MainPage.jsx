import {useContext, useEffect} from 'react';
import NavBar from '../components/header';
import TextArea from '../components/textarea';
import Buttonspanel from '../components/buttonpanel';


//TODO
//Instal wingcss meg a masikat
//kiszinezni
//xml beuitifer


function MainPage() {


    return(
        <div className=" h-screen bg-gray-300">
    <div className=' flex flex-row  justify-center'>
        <div className='basis-1/3 m-6 justify-center'>
        <TextArea />
        </div>
        <div className='basis-1/3 m-6 justify-end'>
        <Buttonspanel />
        </div>
        <div className='basis-1/3 m-6 justify-center'>
        <TextArea />
        </div>
    
    </div>
    </div>
    )



}

export default MainPage;