import './Order.css';
export default function Order() {
  return (
    <div id="order">
    <div className="hero">
      <div id="herotext">
        <h1>
          Let's get your QR code
        </h1>
        <p>Learn about Karma and how you can help your fellow electric cars owners to charge their car.
            Come and discover the amazing opportunity's and get your own Qr code!</p>
      </div>
      <div id="heroimage">
        <img src="./svg/qrcard.svg" alt="qr card drawing"></img>
      </div>
    </div>

    <div id="orderForm">
        <form>
          <fieldset>
            <div id="car_brand_selection" className="arrangeOrder">
              <label for="car_brand">Select your car from the list</label>
              <select id="car_brand" required="required">
                <option>hhh</option>
              </select>
            </div>

            <div id="fullname">
              <div id="firstname" className="arrangeOrder">
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" placeholder="John" required="required"></input>
              </div>
              <div id="lastname" className="arrangeOrder">
                <label for="last_name">First Name</label>
                <input type="text" id="last_name" placeholder="Doe" required="required"></input>
              </div>
            </div>
            
            <div id="email" className="arrangeOrder">
              <label for="email">Email address</label>
              <input type="email" id="e_mail" placeholder="John.doe@gmail.com" required="required"></input>
            </div>
            <div id="phonenr" className="arrangeOrder">
              <label for="phonenumber">Phone Number</label>
              <input type="text" id="phonenumber" placeholder="+45 19 44 45 04" required="required"></input>
            </div>
            <div id="company_name" className="arrangeOrder">
              <label for="c_name">Company Name (Optional)</label>
              <input type="text" id="c_name" placeholder="Karma ApS"></input>
            </div>

            <div id="address" className="arrangeOrder">
              <label for="address">Address</label>
              <input type="text" id="address" placeholder="Dalslandgade 4, 2th" required="required"></input>
            </div>
    
            <div id="address2">
              <div id="zipcode" className="arrangeOrder">
                <label for="zipcode">Zip Code</label>
                <input type="text" id="zipcode" placeholder="2300"></input>
              </div>
              <div id="city" className="arrangeOrder">
                <label for="city">City</label>
                <input type="text" id="city" placeholder="Soborg"></input>
              </div>
            </div>

            <div id="termsncond">
              <p>Terms and Conditions</p>
              <div>
                <input id="termsCheck" type="checkbox" required="required" ></input>
                <label for="termsCheck"> Confirm Karma's "Terms and Conditions"*</label>
              </div>             
            </div>

            <button type="submit">Order QR Code</button>
          </fieldset>
        </form>
    </div>


  </div>
  );
}


