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
    window.scrollTo(0,0);
    console.log("yes im home");
  } else if (destination === "About") {
    setPage(1);
    window.scrollTo(0,0);
  } else if (destination === "Howto") {
    setPage(2);
    window.scrollTo(0,0);
  } else if (destination === "Contact") {
    setPage(3);
    window.scrollTo(0,0);
  } else if (destination === "Order") {
    setPage(4);
    window.scrollTo(0,0);
  }
};

  if (page === 0) {
    return (
      <div className="App">
        <Navbar  changePage={changePage}/>
        <Home changePage={changePage}/>
        
        <Footer changePage={changePage}/> 
  
      </div>
    );
  } else if (page === 1) {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <About/>
        
        <Footer changePage={changePage}/> 
  
      </div>
    );
  } else if (page === 2) {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <Howto changePage={changePage}/>
        
        <Footer changePage={changePage}/> 
  
      </div>
    );
  } else if (page === 3) {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <Contact/>
        
        <Footer changePage={changePage}/> 
  
      </div>
    );
  } else  {
    return (
      <div className="App">
        <Navbar changePage={changePage}/>
        <Order/>
        
        <Footer changePage={changePage}/> 
  
      </div>
    );
  }
  
}

export default App;
