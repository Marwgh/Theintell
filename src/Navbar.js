export default function NavBar(props) {
  console.log(props);

  return(
    <div className="navBar">
        <div className="homeButton" onClick={ () => props.changePage("Home")} ><img className="logo" src="./image/logoblue2.png" alt="logo"></img></div>
        <div className="navB">
          <div className="navButton" onClick={  () => props.changePage("About")} >About</div>
          <div className="navButton" onClick={  () => props.changePage("Howto")} >How It Works</div>
          <div className="navButton" onClick={  () => props.changePage("Contact")} >Contact</div>
          <div className="navButton qr" onMouseDown={  () => props.changePage("Order")} >Get Your QR</div>
        </div>
      </div>

      
  );
}