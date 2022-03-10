import React, {useState} from "react";

const FrstCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter +1)
    }

    const decrement = () =>{
        setCounter(counter -1)
    }

     
   return(
       <p>
           <button onClick = {increment}>Increment</button> <br/>
           {counter} <br/>
           <button onClick = {decrement}>Decrement</button>





       </p>
   );






}

export default FrstCounter;















































