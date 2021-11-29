
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
      </div>
      <div className="homeHAW">
        <div className="hawText">
          <h1>Who are we?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="getQrBtnHAW" onClick={ () => props.changePage("Order")}>Get your code</div>
        </div>
        <div>  <img src="/svg/hawPhones.svg" alt="app show case"></img> </div>

      </div>
      <div className="homeTrust">
        <h1>Trusted by:</h1>
      </div>
      <div className="homeSection">
        <div> <img src="/svg/phonedisplay.svg" alt="app show case"></img> </div>
        <div className="homeSectionText">
        <h1>Title here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="homeSectionQRButton" onClick={ () => props.changePage("Order")}>Get your code</div>
        </div>
      </div>
      <div className="homeHIW">
        <div className="homeHIWinfo">
          <h1>How It Works</h1>
          <img src="/svg/3phonedisplay.svg" alt="apps displays"></img>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here. </p>
          <div className="HIWButton" onClick={ () => props.changePage("Howto")}>How to use Karma</div>
        </div>
      </div>
      <div className="homeContact">
        <div className="contactText">
          <h1>Contact Us</h1>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here. </p>
          <div className="contactButton" onClick={ () => props.changePage("Contact")}>Contact</div>
        </div>
        <img src="/svg/EnvelopeBlue.svg" alt="blue envelope"></img>
      </div>
    </div>
  );
}

