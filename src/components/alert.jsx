import {useContext} from 'react';
import AppContext from '../context/AppContext';



function Alerting (){
    const {alert} = useContext(AppContext)
    return(     
        
        <div className='bg-gray-200 rounded-lg'>
            <div>
            
            <strong className='text-gray-900' >{alert}</strong> 

            </div>        
        </div>
        
        
       
    )
    
    }
    export default Alerting;