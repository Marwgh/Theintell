
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
        <div className="homeCarjourneyPath">
        
        </div>
      </div>
      <div className="homeHAW">
        <div className="hawText">
          <h1>How are we?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="getQrBtnHAW" onClick={ () => props.changePage("Howto")}>Get your code</div>
        </div>
        <div>  <img src="/svg/hawPhones.svg" alt="app show case "></img> </div>

      </div>
      <div className="homeSection"></div>


    </div>
  );
}

