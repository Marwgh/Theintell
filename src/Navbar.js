export default function navBar() {
  return(
    <div className="navBar">
        <a className="homeButton" href="/home"><img className="logo" src="./image/logoblue2.png" alt="logo"></img></a>
        <div className="navB">
          <a className="navButton" href="/about">About</a>
          <a className="navButton" href="/howitworks">How It Works</a>
          <a className="navButton" href="/contact">Contact</a>
          <a className="navButton qr" href="/qr">Get Your QR</a>
        </div>
      </div>

      
  );
}