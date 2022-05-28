import Button from "./button";

function Buttonspanel(){
    return  (
        <div >
            <div className="flex-rows justify-between my-60">
            <div className="flex justify-center my-10  ">
            <Button name={'>> Style >>'} />           
               </div>
                <div className="flex justify-center my-10">             
            <Button name={'<< Compare >>'} />
            </div>
        </div>
            
        </div>




    )
}

export default Buttonspanel;