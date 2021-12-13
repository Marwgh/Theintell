    export default function Footer() {
  return(
    <div className="footer">
      
      <div className="fstFContainer">
        <div>
          <img alt="Karmalogo" className="footerMonta" src="./image/karmapink.png"></img>
          <select>
            <option>Dansk</option>
            <option>English</option>
            <option>French</option>
          </select>
        

        
        
          <p>Downlaod:</p>
          <div>
            <img></img>
            <img></img>
          </div>
        </div>
      </div>
      <div className="scdFContainer">
        <div>
        <a href="/" >Home</a>
        <span></span>
        <a href="/" >About</a>
        <span></span>
        <a href="/">How it works</a>
        <span></span>
        <a href="/" >Order the QR</a>
        <span></span>
        <a href="/" >Contact</a>
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