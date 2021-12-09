import './HowTo.css';
import './HowToExplainationSection.js'
import HowToExplainationSection from './HowToExplainationSection.js';
import {useState} from "react";

export default function Howto(props) {


const [status , setStatus] = useState(true);
function togglerQrExpleation (valeu) {
  console.log(valeu);
  setStatus(valeu);
  if (valeu === false) {
  document.querySelector("#transitionScannertoOwner").classList.add("TogglingOwnertransition");
  document.querySelector("#transitionScannertoOwner").classList.remove("TogglingScannertransition");

  } else {
    document.querySelector("#transitionScannertoOwner").classList.remove("TogglingOwnertransition");
  document.querySelector("#transitionScannertoOwner").classList.add("TogglingScannertransition");

  }
} 

/**/

  return (
    <div className="howTo">
      <div className="hiwIntro">
        <div className="introText">
          <h1>How It Works</h1>
          <p>The smartest solutions for charging queens.</p>
          <span></span>
          <p>Learn how to use the code and the app feature and get access to easy solution for busy charging stations.</p>
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

      <div className="explain">
        <div className="explainToggleSection">
          <div id="transitionScannertoOwner"></div>
          <p onClick={() => {togglerQrExpleation(true)}}>QR Code Scanner</p>
          <p onClick={() => {togglerQrExpleation(false)}}>QR Code Owner</p>
        </div>
        <img src="./svg/HIWtimeline.svg" alt=""></img>
        

        <HowToExplainationSection status={status}/>
      </div>

      <div className="bluerow">
        <h1>Help the EV community</h1>
        <p>Karma charging was built  by EV enthusiasts
        for  EV users, to ensure they will never have to wait for a charging spot again. </p>
        <div>How to use Karma</div>
      </div>
      
    </div>
  )

}