export default function HowToExplainationSection(props) {

  console.log(props);
  if (props.status === true) {
    return(
      <div>
        <div className="charger">
            <div className="chargerText boxShadower">
              <h1>Find a QR code </h1>
              <p>The first thing  you will need to do is look for a QR code located on the charging  lid. This QR code indicates that this car is owned by a Karma code Owner.   </p>
            </div>
            <div className="chargerImg">
              <img src="./svg/charger.svg" alt="charger"></img>
            </div>
            <div className="qrcardImg">
              <img src="./svg/qrcard.svg" alt="qr card"></img>
            </div>
          </div>
          
          <div className="phone">
            <div className="phoneText boxShadower">
              <h1>Scan the Qr code</h1>
              <p>When you have found the QR code scan it with the app. you will then be able to send a notification to the car owner telling him that you would like to take this spot.</p>
            </div>
            <div className="plugImg">
              <img src="./svg/plug.svg" alt="plug"></img>
            </div>
            <div className="phoneImg">
              <img src="./svg/phone.svg" alt="phone"></img>
            </div>
          </div>
          
          <div className="reward">
            <div className="rewardText boxShadower">
              <h1>Charging access</h1>
              <p>The Code Owner has come and moved his car you   now can charge your car at this spot , enjoy!</p>
            </div>
            <div className="carImg">
              <img src="./svg/car.svg" alt="car"></img>
            </div>
            <div className="rewardImg">
              <img src="./svg/reward.svg" alt="reward"></img>
            </div>
          </div>
      </div>
    )
  } else if (props.status === false) {
    return(
      <div>
        <div className="charger">
            <div className="chargerText boxShadower">
              <h1>Find a QR code</h1>
              <p>The first thing  you will need to do is look for a QR code located on the charging  lid. This QR code indicates that this car is owned by a Karma code Owner.   </p>
            </div>
            <div className="chargerImg">
              <img src="./svg/handphonePurple.svg" alt="charger"></img>
            </div>
            <div className="qrcardImg">
              <img src="./svg/qrcard.svg" alt="qr card"></img>
            </div>
          </div>
          
          <div className="phone">
            <div className="phoneText boxShadower">
              <h1>Scan the Qr code</h1>
              <p>When you have found the QR code scan it with the app. you will then be able to send a notification to the car owner telling him that you would like to take this spot.</p>
            </div>
            <div className="plugImg">
              <img src="./svg/plug.svg" alt="plug"></img>
            </div>
            <div className="phoneImg">
              <img src="./svg/phone.svg" alt="phone"></img>
            </div>
          </div>
          
          <div className="reward">
            <div className="rewardText boxShadower">
              <h1>Charging access</h1>
              <p>The Code Owner has come and moved his car you   now can charge your car at this spot , enjoy!</p>
            </div>
            <div className="carImg">
              <img src="./svg/car.svg" alt="car"></img>
            </div>
            <div className="rewardImg">
              <img src="./svg/reward.svg" alt="reward"></img>
            </div>
          </div>
      </div>
    )
  }
 
}