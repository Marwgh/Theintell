export default function HowToExplainationSection(props) {

  console.log(props);
  if (props.status === true) {
    return(
      <div>
         <img className="hiwTimeline" src="./svg/Timeline2.svg" alt=""></img>
   <div className="getAPP">
            <div className="appImage">
              <img src="./image/getappx1.png" alt="getapp"></img>
            </div>
            <div className="getAppText boxShadower">
              <h1>Get the App</h1>
              <p>The first thing you will need to do is look for a QR code located on the charging lid. This QR code indicates that this car is owned by a Karma code Owner.</p>
            </div>
          </div>

        <div className="charger">
            <div className="chargerText boxShadower">
              <h1>Find a QR code</h1>
              <p>The first thing you will need to do is look for a QR code located on the charging lid. This QR code indicates that this car is owned by a Karma code Owner.</p>
            </div>
            <div className="chargerImg">
              <img src="./image/scanCodex1.png" alt="charger"></img>
            </div>
          </div>
          
          <div className="phone">
            <div className="phoneText boxShadower">
              <h1>Wait for the notification</h1>
              <p>When you have found the QR code scan it with the app. you will then be able to send a notification to the car owner telling him that you would like to take this spot.</p>
            </div>
            <div className="plugImg">
              <img src="./image/notificationx1.png" alt="plug"></img>
            </div>
          </div>
          
          <div className="reward">
            <div className="rewardText boxShadower">
              <h1>Charging access</h1>
              <p>The Code Owner has come and moved his car you now can charge your car at this spot, enjoy!</p>
            </div>
            <div className="carImg">
              <img src="./svg/car.svg" alt="car"></img>
            </div>
            <div className="chargingImg">
              <img src="./svg/charger.svg" alt="reward"></img>
            </div>
          </div>
      </div>
    )
  } else if (props.status === false) {
    return(
      <div>
          <img className="hiwTimeline" src="./svg/Timeline.svg" alt=""></img>
  <div className="getAPP">
  <div className="appImage">
              <img src="./image/getappx1.png" alt="getapp"></img>
            </div>
            <div className="getAppText boxShadower">
              <h1>Get the App</h1>
              <p>The first thing you will need to do is look for a QR code located on the charging lid. This QR code indicates that this car is owned by a Karma code Owner.</p>
            </div>
          </div>

        <div className="charger">
            <div className="chargerText boxShadower">
              <h1>Get a notification</h1>
              <p>The first thing that will happen is that you will get a notification. If you want and can move your car then you accept the demande. </p>
            </div>
            <div className="ownerNotification">
              <img src="./image/notification.png" alt="ownernotification"></img>
            </div>
            
          </div>
          
          <div className="phone">
            <div className="phoneText boxShadower">
              <h1>Confirm and Go</h1>
              <p>Go to your car and meet the scanner. Unplug your car then confirm with the scanner that you are moving your car. Finally move your car. </p>
            </div>
            <div className="confirmImg">
              <img src="./image/acceptORdecline.png" alt="acceptnot"></img>
            </div>
          </div>
          
          <div className="reward">
            <div className="rewardText boxShadower">
              <h1>Karma Points</h1>
              <p>After helping another EV driver get access to the charger you will receive points. The lower the battery you have left th higher Karma Points you receive. </p>
            </div>
            <div className="rewardImg">
              <img src="./image/getPoints.png" alt="reward"></img>
            </div>
          </div>
          <div className="pointExplain">
            <div className="imgExplain">
              <img src="./image/pointUse.png" alt="reward"></img>
            </div>
            <div className="textExplain boxShadower">
              <h1>How to use Karma Points?</h1>
              <p>After you have helped your fellow EV driver and revived your points you will probably wonder what to do with them. Well you can get free changing which you can use through Monta app or get discounts.</p>
            </div>
          </div>
      </div>
    )
  }
 
}