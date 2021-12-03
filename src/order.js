import './Order.css';
export default function Order() {
  return (
    <div id="order">
    <div className="hero">
      <div id="herotext">
        <h1>
        How can we help you?
        </h1>
        <p>Learn about Karma and how you can help your fellow electric cars owners to charge their car.
Come and discover the amazing opportunity's and get your own Qr code!</p>
      </div>
      <div id="heroimage">
        <img src=""></img>
      </div>
    </div>

    <div id="orderForm">
        <form>
        <fieldset>
        <div id="fullname">
            <div id="firstname" className="arrange">
              <label for="first_name">First Name</label>
              <input type="text" id="first_name" placeholder="John"></input>
            </div>
            <div id="lastname" className="arrange">
            <label for="last_name">First Name</label>
              <input type="text" id="last_name" placeholder="Doe"></input>
            </div>
            </div>
            <div id="company_name" className="arrange">
            <label for="c_name">Company Name</label>
              <input type="text" id="c_name" placeholder="Karma ApS"></input>
              </div>
      
            <div id="email" className="arrange">
              <label for="email">Email</label>
              <input type="email" id="e_mail" placeholder="John.doe@gmail.com"></input>
            </div>
            <div id="phonenr" className="arrange">
            <label for="phonenumber">Phone Number</label>
              <input type="text" id="phonenumber" placeholder="+45 19 44 45 04"></input>
            </div>

            <div id="address" className="arrange">
            <label for="address">Address</label>
              <input type="text" id="address" placeholder="Dalslandgade 4, 2th"></input>
            </div>
    
              <div id="address2">
            <div id="zipcode" className="arrange">
              <label for="zipcode">Zip Code</label>
              <input type="text" id="zipcode" placeholder="2300"></input>
            </div>
            <div id="city" className="arrange">
            <label for="city">City</label>
              <input type="text" id="city" placeholder="Soborg"></input>
            </div>
            </div>
        </fieldset>
        </form>
    </div>


  </div>
  );
}


