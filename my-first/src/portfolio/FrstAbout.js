import React from 'react'; //{ useEffect, useState }
//import data from '../data';
//import './App.css';

const myStyle ={

    color: "white",
    backgroundColor: "CadetBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
};


const FrstAbout = ({AboutInfo}) => {
    /*  const [info , setInfo] = useState(null);
    
     useEffect(
        () => {
            setInfo(data.info);
        },[]
    );  
 */
    /* useEffect(() => {
        //function fetchData(){
            setInfo(data.info);
        //}
        //fetchData()
    },[]); */

      return(
          <div>
             {
                  AboutInfo !== null &&
                  <>
                    <div>
                        <h2 style={myStyle} >{AboutInfo.name}</h2>
                        <h2 style={myStyle} >{AboutInfo.short_description}</h2>
                        <h2 style={myStyle} >{AboutInfo.description}</h2>
                        <h2 style={myStyle} >{AboutInfo.phone_no}</h2>
                        <h2 style={myStyle} >{AboutInfo.email}</h2>
                    </div>     
                  </>  
             }           
          </div>         
      );
}

export default FrstAbout;


















