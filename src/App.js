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
      <div className="homeCarjourney">
        <div className="homeCarjourneyText">
          <h1>WE MAKE CHARGING EASIER THAN EVER</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="homeCarjourneyPath">
        {/* <svg height="500vw" width="100%"><path d="M 0 500 L 500 500 L 850 400 L 1200 460 L 1600 350" fill="white"stroke="black"></path></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="1947.492" height="214.311" viewBox="0 0 1947.492 214.311">
          <g id="lines" transform="translate(0 -1757.461)">
            <path id="Line_12" data-name="Line 12" d="M671,5H0V-5H671Z" transform="translate(0 1951.233)" fill="#00044f"/>
            <path id="Line_19" data-name="Line 19" d="M1.948,191.539l-3.9-9.21,442-186.934,3.9,9.21Z" transform="translate(659 1780.233)" fill="#00044f"/>
            <path id="Line_20" data-name="Line 20" d="M413.665,119.818l-415-115,2.67-9.637,415,115Z" transform="translate(1077.865 1775.601)" fill="#00044f"/>
            <path id="Line_21" data-name="Line 21" d="M1.492,140.772l-2.984-9.544,435-136,2.984,9.544Z" transform="translate(1511 1762.233)" fill="#00044f"/>
          </g>
        </svg>
        </div>
      </div>
      <div className="homeKIP"></div>
      <div className="homeSection"></div>
      <Footer/>

    </div>
  );
}

export default App;
