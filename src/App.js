import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="homeTitle">
        <div className="homeText">
          <h1>WE MAKE CHARGING EASIER THAN EVER</h1>
          <p>Learn about Karma and how you can help your fellow electric cars owners to charge their car.
            Come and discover the amazing opportunity's and get your own Qr code! 
          </p>
          <a className="getQrBtnDescription" href="./">Get your code</a>
        </div>
        <div className="buildings">
          <img src="./svg/bUILDINGS.svg" alt="buildings"></img>
        </div>
        <div className="phoneHome">
          <img src="./svg/phoneHome.svg" alt="phone on qr code page"></img>
        </div>
        <div className="charginCarHome">
        <img src="./svg/backcar.svg" alt="charging car"></img>
          
        </div>
      </div>
      <div className="homeCarjourney"></div>
      <div className="homeKIP"></div>
      <div className="homeSection"></div>
      <Footer/>

    </div>
  );
}

export default App;
