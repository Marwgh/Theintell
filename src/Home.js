import BarCharts from './BarCharts.js';
export default function Home(props) {
  return (
    <div className="home">

      <div className="homeTitle">
        <div className="homeText">
          <h1>WE MAKE CHARGING EASIER THAN EVER</h1>
          <p>Learn about Karma and how you can help your fellow electric cars owners to charge their car.
            Come and discover the amazing opportunity's and get your own Qr code! 
          </p>
          <div className="getQrBtnDescription" onClick={ () => props.changePage("Howto")}>Get your code</div>
        </div>
        <div className="homeBackgroundImg">
          <img src="./image/homecarchargeQR.jpg" alt="Car charger with QR"></img>
        </div>
        <div className="standingHome">
          <img src="./svg/standingblue.svg" alt="Blue person standing"></img>
        </div>
        <div id="scrollMorepls">
            <div>
              <p>Scroll</p>
              <div>
                <span></span>
                <span></span>
              </div>
            <span id="longBarPls"></span>
            </div>
        </div>
      </div>

      <div className="homeCarjourney">
        <div className="homeCarjourneyText">
          <h1>A JOURNEY BASED ON KARMA</h1>
          <p>A simple journey designed for you to find a charging spot even when the situation seems desperate!
          </p>
        </div>
        <div className="homeCarjourneyTL">
          <img className="car1" src="./svg/car.svg" alt="car"></img>
          <img className="car2" src="./svg/car2.0.svg" alt="car"></img>
          <img className="chargerRed" src="./svg/chargerRed.svg" alt="car"></img>
          <img className="phone1" src="./svg/phone.svg" alt="car"></img>
          <img className="chargerGreen" src="./svg/chargerGreen.svg" alt="car"></img>
          <img className="reward1" src="./svg/reward.svg" alt="car"></img>
          <div className="dot11"></div>
          <div className="dot21"></div>
          <div className="dot31"></div>
          <div className="dot4"></div>
          <img className="timeline" src="./svg/timelineLong.svg" alt="timeline"></img>
        </div>
        <div className="textboxPopUp">
          <div className="step11">
            <p>Find a charger</p>
          </div>
          <div className="step21">
            <p>Scan the code</p>
          </div>
          <div className="step31">
            <p>Get the charger</p>
          </div>
          <div className="step4">
            <p>Get the points</p>
          </div>
        </div>
      </div>

      <div className="homeHIW">
        <div> <img src="./svg/carscanning.svg" alt="app show case"></img> </div>
        <div className="homeHIWText">
          <h1>How it works</h1>
          <p>We explain to you where can you use Karma, what do you need  and the journey you will be taking.
          </p>
          <p>As well you can find some explanations on what is the QR code for and what king of sweet deals you can get by using it. 
          </p>
          <div className="homeHIWButton" onClick={ () => props.changePage("HowTo")}>Read more</div>
        </div>
      </div>
      

      <BarCharts/>

      <div className="homeTrust">
        <h1>Trusted by:</h1>
        {/* <img className="arrowLeft" src="/svg/arrowleft.svg" alt="arrow left"></img> */}
        <div className="arrowLeft">
          <span></span>
          <span></span>
        </div>
        {/* <img className="arrowRight" src="/svg/arrowRight.svg" alt="arrow Right"></img> */}
        <div className="arrowRight">
          <span></span>
          <span></span>
        </div>
        <img className="review1" src="./svg/review1.svg" alt="review"></img>
        <img className="review2" src="./svg/review2.svg" alt="review"></img>
        <img className="review3" src="./svg/review3.svg" alt="review"></img>
      </div>

      <div className="homeWAW">
        <div className="WAWapps">
            <img className="WAWgooglePlay" src="./svg/googlePlay.svg" alt="Google Play"></img>
            <img className="WAWappStore" src="./svg/appStore.svg" alt="App Store"></img>
        </div>
        <div className="wawText">
          <h1>Who are we?</h1>
          <p>Karma charging was built  by EV enthusiasts for  EV users, to ensure they will never have to wait for a charging spot again.
          </p>
          <p>As a part of the Month Group, we are familiar to the community needs and problems and we embarked on a  journey to ease the life of EV owners.
          </p>
          <div className="getQrBtnWAW" onClick={ () => props.changePage("About")}>Read more about us</div>
        </div>
        <div className="wawPhones">  <img src="./svg/hawPhones.svg" alt="app show case"></img> </div>

      </div>

      <div className="homeGetCode">
        <div className="homeGetCodeText">
          <h1>Order your Code!</h1>
          <p>We wanted to make the process as simple and fast as possible so all you have to do to start helping the  EV community is to order your QR code!</p>
          <p>Once you have it, you activate it in the app and wait for your Karma points.</p>
          <div className="getCodeButton" onClick={ () => props.changePage("Order")}>Read more</div>
        </div>
        <div className="getCodeEnvelope"><img src="./svg/Envelopeblueopen.svg" alt="envelope"></img></div>
        <div className="getCodeQR"><img src="./svg/pinkqr.svg" alt="qr"></img></div>
      </div>

      <div className="homeGetApp">
        <div className="homeGetAppinfo">
          <h1>Get the App</h1>
          <img src="./svg/3phonedisplay.svg" alt="apps displays"></img>
          <p>Karma was designed as an integration in the Monta app, but no worries! No matter that you are scanner or the owner of the code we made the flow easy for you!</p>
        </div>
        <div className="Getapps">
            <img className="GetgooglePlay" src="./svg/googlePlay.svg" alt="Google Play"></img>
            <img className="GetappStore" src="./svg/appStore.svg" alt="App Store"></img>
        </div>
      </div>

      <div className="homeContact">
        <div className="contactText">
          <h1>Contact Us</h1>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here. </p>
          <div className="contactButton" onClick={ () => props.changePage("Contact")}>Contact</div>
        </div>
        <img src="./svg/EnvelopeBlue.svg" alt="blue envelope"></img>
        <div className="contactBGimg">
          <img src="./image/homecharge.jpg" alt="charge with blur"></img>
        </div>
      </div>
    </div>
  );
}

