import React,{useEffect, useState} from "react";

const Counter =()=>{
    const [value,setValue] = useState(0);




    const commonFunc = (val)=>{

    if (val =="+"){
             if(value<10){
        setValue(value+1)}
             }

    
    if (val =="-"){
              if(value >0){
            setValue(value-1)
        }

    }


    }



    return (<div>
        Counter: {value}
        <br/>
        <button onClick={()=>commonFunc("+")} >Increment</button>
        <button onClick={()=>commonFunc("-")}>Decrement</button>
        
         

        </div>
        
        )
}

export default Counter;