/* import React from 'react';


class FrstHello extends React.Component{

    render(){
      return(
        <div>
          <h1>HEllo</h1>
          <button>mmdbsjhv</button>

        </div>
        
        
      ); 
    }
  
  }

export default FrstHello;
 */
import React  /* {Component} */ from 'react';

class FrstHello extends React.Component {
  state = { 
    age:34,
    nama:'Mana',
    address:{city:'Slovenia',location:"lJubjana"},
   } 
  render() { 
    return (
      <div>
        <hr/>
        <p>Age = {this.state.age}   </p>
        <p>Name = {this.state.nama} </p>
        <address>
          City - {this.state.address.city}
          Location - {this.state.address.location}
        </address>
      </div>
    );
  }
}
 
export default FrstHello;







