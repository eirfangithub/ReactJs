/* //import React from 'react';
import FrstAbout from './portfolio/FrstAbout';
import './App.css';
import React, { useEffect, useState } from 'react';
import data from '../data.js';

function App(){

  const {info , setInfo} = useState(null);
    
     useEffect(
        () => {
            setInfo(data.info);
        }
    ); 


  return(

    <div  className="App">
      
      <button>deger</button>
      <p>fdsjjd</p>
      <p>{info.phone_no}</p>
    </div>
    
  );



}

export default App; */


/* 
REACT NATIVE UI COMPONENT
-VIEW 
-TEXT
-IMAGE
-SCROLLVIEW
-TEXTINPUT
https://reactjs.org/docs/forms.html
https://nextjs.org/learn/foundations/from-javascript-to-react/getting-started-with-react
*/


//import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Switch ,Router, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Navbar from './Navbar';
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";

import FrstHi from './FrstHi'; 
import FrstAbout from './portfolio/FrstAbout';
import FrstHomePort from './portfolio/FrstHomePort';
import FrstEdu from './portfolio/FrstEdu';
import FrstProject from './portfolio/FrstProject';
import React, { useEffect, useState } from 'react';
import data from './data';

function App() {

  const [info , setInfo] = useState(null);
  const [edu , setEdu] = useState(null);
  const [fyp, setFyp] = useState(null);
  const [nama , setNama] = useState('malia');
  const [address , setAddress] =useState({city:"Vienna" , country:"Austria"})

  useEffect(
    () => {
        setInfo(data.info);
        setEdu(data.education);
        setFyp(data.fyp);
    },[]
);  

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FrstHomePort />} />
        <Route path="cats" element={<Cats/>} />
        <Route path="info" element={<FrstAbout AboutInfo={info}  />} />
        <Route path="edu" element={ <FrstEdu AboutEdu={edu}  />} />
        <Route path="project" element={ <FrstProject AboutProject={fyp} />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
       
  );
}

export default App;
 
/* const {a,b} =usestate();
 die blh buat value/bariable jadi prop for a componenent
 bende baru bljr yg utk spread  cth const {a,address,c}= props 
 means all properties can be stored by order lah
 pastu blh lagi const {city , street} = address

 kalau bnyk statement in a div blh curly braces kan

 <buttto  style={} >
 <p className= {}   >

 (age >=0) ?  a : b  OR
 { (age >=0) && <>  a  </> }

 task = [  {}  , {} ]
 task .map(
    (tasky , index)  => (
      {tasky.title}
    )

 ) 

 input for onChange mak sure remeber of a.target.value


 useEffcet utk init for functinal component
 compoennt in mount for class component

 additem to array
//  updatedTask = tasks.slice();
//  updatedTask.unshift(taskItem)
//  set*(updatedTask);

binding 
onClick = {() => this.handle()}

onClick = {this.handle.bind(this)}

// this.handle = this.handle.bind(this)
onCLick = {this.handle}

handle = () => {
  this.setState({
    m:""
  })
}
onClick={this.handle}


form - onSubmit
input, textarea - value={} onChange={} , type=



the general sequence of a class componenet
constructor - ade super , this.state ={} , maybe bind(this)
function for this.setState({}) , 
render() { return ( )}



filter method is the best way to modify the array without touching the state.
It returns a new array based on the condition.
In your case filter check the condition person.id !== id and create a new array excluding the item based on condition.

npm install react-icons --save  - install icons 

style  css
<h1 style={{...baseStyle, ...enhancedStyle}}>{props.title}</h1>

This shows how to combine 2 Style objects,
<Text style={[styles.base, styles.background]} >Test </Text>

this shows how to combine Style object and property,
<Text style={[styles.base, {color: 'red'}]} >Test </Text>

 return <div style={{ ...style1, ...style2 }}>This has 2 separate styles</div>

 const boxStyle = {
  width : "50px",
  height : "50px"
};
const redBackground = {
  ...boxStyle,
  background: "red",
};
const blueBackground = {
  ...boxStyle,
  background: "blue",
}

return <View style={{...styles.local, ...styles.fromProps}} /


const ChildComp = props => {
  return <div className={`box ${props.status}`}>This is an error message</div>
}

function App() {
  return <ChildComp status="error" />
}


Link/Route 
<Link to="/dashboard">Dashboard</Link>

 */

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

/* 

<BrowserRouter> 
    <Router>
      <navbar />
      <Switch>
        <Route path='/' exact component={Dogs} />
        <Route path='/cats' component={Cats} />
      </Switch>
    </Router>
    </BrowserRouter>
 
    <Router>
      <nav>
      <Navbar />
      </nav>
      <Switch>
        <Route path="/"  component={Dogs}>
          <Dogs />
        </Route>
        <Route path="/cats" component={Cats} >
          <Cats />
        </Route>
      </Switch>
    </Router>
    


import FrstHello  from './FrstHello';
import FrstCounter from './FrstCounter';
import FrstList from './FrstList';  
import FrstTask from './FrstTask';  
import FrstForm from './FrstForm.js';
import data from './data';

const [info , setInfo] = useState(null);
  const [edu , setEdu] = useState(null);
  const [fyp, setFyp] = useState(null);
  const [nama , setNama] = useState('malia');
  const [address , setAddress] =useState({city:"Vienna" , country:"Austria"})
    
  useEffect(
     () => {
         setInfo(data.info);
         setEdu(data.education);
         setFyp(data.fyp);
     },[]
 );  

<div className="App">
</div>

<Router>
      <Navbar />
        <Routes>
        <Route path="/" exact component={FrstHi} />
          <Route path="/about" component={FrstAbout} />
          <Route path="/edu" component={FrstEdu} />
          <Route path="/project" component={FrstProject} />
        </Routes>
      </Router>


<FrstHello />
      <FrstHi />
      <FrstCounter  />
      <FrstList  />  { anotherName={nama} alamat={address} setNama={setNama} }
      <br/>
      <FrstTask />
      <FrstAbout AboutInfo={info}  />
      <FrstEdu AboutEdu={edu}  />
      <FrstProject AboutProject={fyp} />
      <FrstForm />


*/











































