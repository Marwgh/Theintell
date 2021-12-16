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


function treateData () {
  const form = document.querySelector("form");
  console.log(form.checkValidity());
  if (form.checkValidity() === true) {
    console.log("i am here ");
    post( {
      car_brand: form.elements.car_brand.value,
      full_name: form.elements.first_name.value + form.elements.last_name.value,
      Email_address: form.elements.e_mail.value,
      phoneNum: form.elements.phonenumber.value,
      CompanyName: form.elements.c_name.value,
      address: form.elements.address.value,
      zipcode: form.elements.zipcode.value,
      city: form.elements.city.value
      
    });
    
  }
  

}


function post(data) {
    const postData = JSON.stringify(data);
            fetch("https://karma-7414.restdb.io/rest/karma", {
              method: "post",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "61b8c70d86e3467b41d8e082",
                "cache-control": "no-cache",
              },
              body: postData,
            })
              .then((res) => res.json())
              .then((data) => {console.log(data);});
      }
    

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
    document.querySelector("#menuToggle > input").click();
  } else if (destination === "HowTo") {
    setPage(2);
    window.scrollTo(0,0);
    document.querySelector("#menuToggle > input").click();
  } else if (destination === "Contact") {
    setPage(3);
    window.scrollTo(0,0);
    document.querySelector("#menuToggle > input").click();
  } else if (destination === "Order") {
    setPage(4);
    window.scrollTo(0,0);
    document.querySelector("#menuToggle > input").click();
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
        <Order treateData={treateData}/>
        
        <Footer changePage={changePage}/> 
  
      </div>
    );
  }
  
}

export default App;
