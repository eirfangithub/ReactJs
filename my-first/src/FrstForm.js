//import PropTypes from 'prop-types';
import React, {useState} from 'react';
import './App.css';

const merah = {
    color:'red'
}
const hijau = {
    color:'green',
    fontSize: 16,
}

 const FrstForm = () => {
  //static propTypes = {second: third}

  const [frstName,setFrstName] = useState(null);
  const [lastName,setLastName] = useState(null);
  const [age,setAge] = useState(null);

  const [toggle, setToggle] = useState(false);
  const toggleButton = () => setToggle(!toggle);
  const [togg, setTogg] = useState(true);
  const toggButton = () => setTogg(!togg);
 
    
 /*  handleFrstName(e){
      this.setState({
          frstName : e.target.value,    
      })
  }
  handleLastName(e){
      this.setState({
        lastName: e.target.value,
      })
  }
  handleAge(e){
      this.setState({
          age:e.target.value,   
      })
  } */
 const  handleSubmit = (e) => {
    e.preventDefault();
    //alert('You clicked submit.');
    alert(`The name you entered was: ${frstName}  ${lastName} ${age}`);
}
    return (
      <div>
          <form onSubmit = {handleSubmit}>
              <input type='text' value={frstName} placeholder='Enter your first name' onChange={(e) => setFrstName(e.target.value)} />
              <input type='text' value={lastName} placeholder='Enter your last name' onChange={(e) => setLastName(e.target.value)} />
              <input type='text' value={age} placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} />
            <button type='submit' value='Submit' >Submit</button>
          </form>
          <button style ={togg ? merah : hijau} onClick={toggButton}>Biru</button>
          <button style={{backgroundColor: toggle ? '#FFF' : '#000'}} onClick={toggleButton}>Click Me</button>
          <button className='butangceria'>hover</button>
      </div>
    )
}

export default FrstForm;












/*

  <button className='butangceria' onClick={}>butangceria</button>

 constructor(props) {
    super(props);
     this.state = {
        frstName:null,
        lastName:null,
        age:null,
    }; */
    /* // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

*/

























































