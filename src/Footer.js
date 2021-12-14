    export default function Footer(props) {
  return(
    <div className="footer">
      
      <div className="fstFContainer">
        <div>
          <img alt="Monta logo" className="footerMonta" src="./image/karmapink.png"></img>
          <select>
            <option>English</option>
            <option>Danish</option>
            <option>French</option>
          </select>
        

        
        
          <p>Download:</p>
          <div>
            <img src="./svg/AppStoreWhite.svg" alt="APP Store"></img>
            <img src="./svg/GooglePlayWhite.svg" alt="Google Play"></img>
          </div>
        </div>
      </div>
      <div className="scdFContainer">
        <div>
        <div onClick={  () => props.changePage("Home")} >Home</div>
        <span></span>
        <div onClick={  () => props.changePage("About")} >About</div>
        <span></span>
        <div onClick={  () => props.changePage("HowTo")} >How It Works</div>
        <span></span>
        <div onClick={  () => props.changePage("Order")} >Get Your QR</div>
        <span></span>
        <div onClick={  () => props.changePage("Contact")} >Contact</div>
        <span></span>
        </div>
        
        <p>2021@ Copyright Karma</p>
      </div>
      <div className="trdFContainer">
        <div>
          <p>Find Us On:</p>
          <a href="/" >Facebook</a>
          <a href="/" >Instagram</a>
          <a href="/" >LinkedIn</a>
        </div>
        <div>
        <p>Contact:</p>
          <p>Dalslandgade 6th,<br></br>
          2300 <br></br>
          Kobenhavn S</p>
          <p className="phoneNum">+45 96 09 54 68</p>
        </div>

        
  
      </div>
    
    </div>
  );
}