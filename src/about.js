import './About.css';
export default function About() {
  return (
    <div className="about">

      <div> 
        <div className="aboutHeader">
          <img alt="two person hight fiving" src="./image/aboutHightfive.jpg"></img>
          <h1>About KARMA</h1>
          <p> Here when you need it the most, Karma will not only help you charge your car it will save you time as well!</p>
        </div>
        <div className="aboutMonta">
          <div className="aboutMText">
            <h1>Monta</h1>
            <p>“Monta’s platform embraces the entire EV charging experience: from helping EV drivers charge seamlessly at home and on the go to supporting companies with easy charge point management. ” - Monta</p>
            <p>Karma is a product created by Monta, to help users get more better experience in charging. We want to help users get more access to the chargers  even when taken.   </p>
            <div>Get to know Monta</div>
          </div>
          <div>
            <div className="aboutMlogoMonta boxShadower">
              <img alt="" src="./svg/Monta_Logo_Secondary_White.svg"></img>
            </div>
            <div className="aboutMPeoples">
              <img alt="" src="./svg/standing1.svg"></img>
              <img alt="" src="./svg/standing2.svg"></img>
            </div>
            <div className="aboutMlogoKarma boxShadower">
              <img alt="" src="./svg/icon_blue_0pad.svg"></img>
            </div>
          </div>
        </div>
        <div className="aboutClimate">
          <div>
            <img alt="" src="./svg/green-energy.svg"></img>
            <img alt="" src="./svg/car.svg"></img>
          </div>
          <div>
            <h1>Climate Friendly</h1>
            <p>Driving an EV is more ecologically friendly using approximately 45% less Co2 than other vehicles. The goals is to produce 0grams Co2 in Denmark by 2030.  </p>
            <a href="">More information</a>
          </div>
          
        </div>
        <div className="aboutDigital">
          <div>
            <h1>Why digital</h1>
            <p>Going digital is becoming more and more important . Helping everyone connect and help each other. </p> 
            <p>We’ve created the QR code, so that all EV users  with a phone can get access and help each other  get a better  parking experience.</p>
          </div>
          <div>
            <img alt="" src="./svg/plug.svg"></img>
            <img alt="" src="./svg/phone.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

