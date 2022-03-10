/* import React, { Component } from 'react'
//rcc
export default class FrstEdu extends Component {
  render() {
    return (
     <div> 
        <h1> 

             
        </h1>
     </div>
    )
  }
}
 */
import React from 'react';
//nfn
const FrstEdu = ({AboutEdu}) => { 
    return(
        <div>
           {
                AboutEdu !== null &&
                <>
                  <div>
                      <p>{
                          AboutEdu.map( (edu) => 
                          <div style={{backgroundColor: "lightblue"}}>
                           {/*  {edu.course}  */}
                           <p>{edu.university}</p>
                           <p>{edu.year}</p>
                           <p>{edu.course}</p>
                           <p> {edu.cgpa}</p>
                           <p>{edu.desc}</p>
                           
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            
                            
                            
                            
                            </div>
                          
                          
                          )
                        }
                      </p>
                  </div>          
                </>  
           }           
        </div>         
    );
}
export default FrstEdu;