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
    document.querySelector(".explain").style.height="140vw";
    if (window.matchMedia("(max-width: 768px)").matches){
      document.querySelector(".explain").style.height="370vw";
    } else {
      document.querySelector(".explain").style.height="140vw";
    }

  } else {
    document.querySelector("#transitionScannertoOwner").classList.remove("TogglingOwnertransition");
    document.querySelector("#transitionScannertoOwner").classList.add("TogglingScannertransition");
    document.querySelector(".explain").style.height="100vw";
    if (window.matchMedia("(max-width: 768px)").matches){
      document.querySelector(".explain").style.height="260vw";
    } else {
      document.querySelector(".explain").style.height="100vw";
    }
  }
} 

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

      <div className="whyKarmaSectionHIW">
        <h1>Why should you use Karma?</h1>
        <div className='kpsSection'>
          <div className='boxShadower'>
            <p>Easy to use</p>
            <img src="./svg/qrHalfCar.svg" alt=""></img>
          </div>
          <div className='boxShadower'>
            <p>Digital Solution</p>
            <img src="./svg/QRhandphonePink.svg" alt=""></img>
          </div>
          <div className='boxShadower'>
            <p>Reward points</p>
            <img src="./svg/rewardPink.svg" alt=""></img>
          </div> 
        </div>
        <div className='kpsGetYourCode'>
          <img src="./image/chargincarImage.jpg" alt=""></img>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here. </p>
          <div>Get you code now!</div>
        </div>

      </div>
      
    </div>
  )

}