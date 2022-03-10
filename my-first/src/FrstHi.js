/* import React from "react";

 function FrstHi(){
    return <div>Hello fro  fucntional component</div>
}

export default FrstHi;
 */

import React, { useState } from "react";

//sfc cmd
 const FrstHi = () => {
     const [name,setName] = useState('Akash');
     const [age,setAge] = useState('5');

     const changeName = () => setName('Mira');
     const changeAge = () => setAge('1000000');

    return (
        <div>
            Welcome to functional component

            <p>
                Name - {name} <br/>
                Age  - {age}
            </p>
            <button onClick={changeName}>Click to chnage Name</button>
            <button onClick={changeAge}>Click to chnage Age</button>
        </div>
      );
}
 
export default FrstHi;