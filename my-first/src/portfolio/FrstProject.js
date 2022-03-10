/* import React, { Component } from 'react'

export default class FrstContact extends Component {
  render() {
    return (
      <div>FrstContact


      </div>
    )
  }
} */

import React from 'react';

const FrstProject = ({AboutProject}) => { 

   return (
     <div>
       {
      
                 AboutProject !== null &&
                  <>
                    <div>
                        <p>{AboutProject.title}</p>
                        <p>{AboutProject.domain}</p>
                        <p>{AboutProject.language}</p>
                        <p>{AboutProject.database}</p>
                    </div>          
                  </> 
        }
     </div>
   );

}

export default FrstProject;






