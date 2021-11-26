import './App.css';

import {useState} from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Order from './Order';
import About from './About';
import Howto from './HowTo';

function App() {

  const [page , setPage] = useState(0);

const changePage = (destination) => {
  console.log(destination);
  if (destination === "Home") {
    setPage(0);
    console.log("yes im home");
  } else if (destination === "About") {
    setPage(1);
  } else if (destination === "Howto") {
    setPage(2);
  } else if (destination === "Contact") {
    setPage(3);
  } else if (destination === "Order") {
    setPage(4);
  }
};

  if (page === 0) {
    return (
      <div className="App">
        <Navbar  changePage={changePage}/>
        <Home changePage={changePage}/>
        
        <Footer/> 
  
      </div>
    );
  } else if (page === 1) {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <About/>
        
        <Footer/> 
  
      </div>
    );
  } else if (page === 2) {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <Howto/>
        
        <Footer/> 
  
      </div>
    );
  } else if (page === 3) {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <Contact/>
        
        <Footer/> 
  
      </div>
    );
  } else  {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <Order/>
        
        <Footer/> 
  
      </div>
    );
  }
  
}

export default App;
