
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

      </div>

      <div className="homeCarjourney">
        <div className="homeCarjourneyText">
          <h1>A JOURNEY BASED ON KARMA</h1>
          <p>A simple journey designed for you to find a charging spot even when the situation seems desperate!
          </p>
        </div>
        <div className="homeCarjourneyTL">
          <img className="car" src="./svg/car.svg" alt="car"></img>
          <img className="charger" src="./svg/charger.svg" alt="car"></img>
          <img className="phone" src="./svg/phone.svg" alt="car"></img>
          <img className="reward" src="./svg/reward.svg" alt="car"></img>
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
          <img className="timeline" src="./svg/timeline.svg" alt="timeline"></img>
        </div>
        <div className="textboxPopUp">
          <div className="step1">
            <p>Find a charger</p>
          </div>
          <div className="step2">
            <p>Scan the code</p>
          </div>
          <div className="step3">
            <p>Get the charger</p>
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
        {/* <div className="textboxPopUp">
          <div className="step1">
            <p>Find a charger</p>
          </div>
          <div className="step2">
            <p>Scan the code</p>
          </div>
          <div className="step3">
            <p>Get the charger</p>
          </div>
        </div> */}
      </div>

      <div className="homeHAW">
        <div className="hawText">
          <h1>Who are we?</h1>
          <p>Karma charging was built  by EV enthusiasts for  EV users, to ensure they will never have to wait for a charging spot again.
          </p>
          <p>As a part of the Month Group, we are familiar to the community needs and problems and we embarked on a  journey to ease the life of EV owners.
          </p>
          <div className="getQrBtnHAW" onClick={ () => props.changePage("About")}>Read more about us</div>
        </div>
        <div className="apps">
            <img className="googleplay" src="./svg/googlePlay.svg" alt="Google Play"></img>
            <img className="appStore" src="./svg/appStore.svg" alt="App Store"></img>
          </div>
        <div>  <img src="./svg/hawPhones.svg" alt="app show case"></img> </div>

      </div>

      <div className="homeData">
        <div className="homeDataHeader">
          <h1>Don’t trust us?</h1>
          <h1>Trust the <span>community</span></h1>
          <p>Karma charging was built  by EV enthusiasts for  EV users, to ensure they will never have to wait for a charging spot again. </p>
        </div>
        <div className="homeDataInfo">
          <div className="column1">
            <img src="/svg/" alt="chart"></img>
            <div className="text1">
              <h1>EV owner's</h1>
              <p>We asked if you  would move your car even when not fully charged to allow one on low battery instead?</p>
            </div>
          </div>
          <div className="column2">
            <img src="/svg/" alt="chart"></img>
            <div className="text2">
              <h1>Lorem Ipsum</h1>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column3">
            <img src="/svg/" alt="chart"></img>
            <div className="text3">
              <h1>Lorem Ipsum</h1>
              <p>Karma charging was built by EV enthusiasts for EV users.</p>
            </div>
          </div>
          <div className="column4">
            <img src="/svg/" alt="chart"></img>
            <div className="text4">
              <h1>Lorem Ipsum</h1>
              <p>Lorem Ipsum</p>
            </div>
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

      <div className="homeGetCode">
        <div className="homeGetCodeinfo">
          <h1>Get your code</h1>
          <img src="./svg/3phonedisplay.svg" alt="apps displays"></img>
          <p>Becoming a part of the Karma community is a simple process that starts with a QR code.</p>
          <div className="GetCodeButton" onClick={ () => props.changePage("Howto")}>Get your code now</div>
        </div>
      </div>

      <div className="homeTrust">
        <h1>Trusted by:</h1>
        <img className="arrowLeft" src="/svg/arrowleft.svg" alt="arrow left"></img>
        <img className="arrowRight" src="/svg/arrowRight.svg" alt="arrow Right"></img>
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

