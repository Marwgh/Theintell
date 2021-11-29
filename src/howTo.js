import './HowTo.css';
export default function Howto(props) {
  return (
    <div className="howTo">
      <div className="hiwIntro">
        <div className="introText">
          <h1>How It Works</h1>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here.</p>
        </div>
        <div className="car">
          <img src="./svg/car.svg" alt="car"></img>
        </div>
        <div className="buildings">
          <img src="./svg/darkbuildings.svg" alt="buildings"></img>
        </div>
        <div className="phoneDisplay">
          <img src="./svg/hawPhones.svg" alt="2 phones displayed"></img>
        </div>
      </div>

      <div className="howitworks">
        <div className="howitworksText">
          <h1>How It Works</h1>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here.</p>
          <div className="orderButton" onClick={ () => props.changePage("Order")}>Get your code</div>
        </div>
      </div>

      <div className="explain">
        <div className="charger">
          <div className="chargerText">
            <h1>Title here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className="chargerImg">
            <img src="./svg/charger.svg" alt="charger"></img>
          </div>
          <div className="qrcardImg">
            <img src="./svg/qrcard.svg" alt="qr card"></img>
          </div>
        </div>
        <span></span>
        <div className="phone">
          <div className="phoneText">
            <h1>Title here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className="plugImg">
            <img src="./svg/plug.svg" alt="plug"></img>
          </div>
          <div className="phoneImg">
            <img src="./svg/phone.svg" alt="phone"></img>
          </div>
        </div>
        <span></span>
        <div className="reward">
          <div className="rewardText">
            <h1>Title here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className="carImg">
            <img src="./svg/car.svg" alt="car"></img>
          </div>
          <div className="rewardImg">
            <img src="./svg/reward.svg" alt="reward"></img>
          </div>
        </div>
      </div>
      <div className="pinkrow"></div>
      <div className="imgrow">
        <img src="./image/" alt="backgroundimg"></img>
      </div>
    </div>
  );
}


