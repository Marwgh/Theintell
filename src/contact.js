import './Contact.css';
export default function Contact() {
  
function expandFAQ (faqSelector) {

        console.log(faqSelector);
        document.querySelector(faqSelector).classList.toggle("active");
     
        var body = window.getComputedStyle( document.querySelector(faqSelector), "::after");
        console.log(body.getPropertyValue("display"));
        if (body.getPropertyValue("display") === "inline") {
            body.setProperty("display", "none");
        } else {
            body.setProperty("display", "inline");
        }
    };


  return (
    <div className="contact">
      <div className="contactIntro">
        <div className="contactIntroText">
          <h1>How can we help you?</h1>
          <p>Learn about Karma and how you can help your fellow electric cars owners to charge their car. Come and discover the amazing opportunity's and get your own QR code! </p>
        </div>
        <div className="customers">
          <img src="./svg/customers.svg" alt="customers"></img>
        </div>
        <div className="envelopeLeft">
          <img src="./svg/EnvelopePink2.svg" alt="envelope"></img>
        </div>
        <div className="envelopeRight">
          <img src="./svg/EnvelopePink1.svg" alt="envelope"></img>
        </div>
        <div className="textboxLeft">
          <p>How do I make an account?</p>
        </div>
        <div className="textboxRight">
          <p>How do I use my Karma points?</p>
        </div>
        <div className="lineLeft">
          <svg> 
            <path d="M5 20 l150 0" stroke-dasharray="16, 16" fill="none" stroke="#3f51b5" stroke-width="2"/>
          </svg>
        </div>
        <div className="lineRight">
          <svg> 
            <path d="M5 20 l120 0" stroke-dasharray="16, 16" fill="none" stroke="#3f51b5" stroke-width="2"/>
          </svg>
        </div>
      </div>

      <section id="formsec">

<div className="contactForm">

  <form>
    <fieldset>
      <div id="fullname">
      <div id="firstname" className="arrange">
        <label for="firstName">First Name</label>
        <input type="text" id="first_name" placeholder="John"></input>
      </div>
      <div id="lastname" className="arrange">
      <label for="lastName">First Name</label>
        <input type="text" id="last_name" placeholder="Doe"></input>
      </div>
      </div>
      <div id="companyName" className="arrange">
      <label for="cName">Company Name</label>
        <input type="text" id="c_name" placeholder="Karma ApS"></input>
        </div>
      <div id="userinfo">
      <div id="email" className="arrange">
        <label for="email">Email</label>
        <input type="email" id="e_mail" placeholder="John.doe@gmail.com"></input>
      </div>
      <div id="phonenr" className="arrange">
      <label for="phonenumber">Phone Number</label>
        <input type="text" id="phonenumber" placeholder="+45 19 44 45 04"></input>
      </div>
        </div>
        <div id="messageBox" className="arrange">
        <label for="messagebox">Message Here</label>
        <input type="text" id="messagebox" placeholder="Type your message here"></input>
        </div>
      <div id="contact"></div>
      <div></div>
    </fieldset>
  </form>
 
  <div className="formTitle">

    <h1>We couldn't answer your questions?</h1>
    <div id="divider"></div>
    <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here. One of our colleagues will reply to you shortly.</p>

  </div>
</div>
</section>


<section id="faqsection">
      <div className="FAQ">
        <h1>Frequently Asked Questions</h1>
        <div id="divider"></div>
        <p>Many people in the EV community end up facing similar problems in their day to day life. We tried answering some of the most popular questions here.</p>
      </div>

      <div className="questions">
        <div id="questioncontainer">
        <div id= "faq1">
          <h1 className='quest' onClick={()=> {expandFAQ("#faq1 .faqBody")}}>How can I use my points?<span>+</span></h1>
          <div className='faqBody'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.</p>
          </div>
        </div>
        <hr className='hrLine'></hr>

        <div id= "faq2">
          <h1 className='quest'>Can I have two codes on the same account?<span >+</span></h1>
          <div className='faqBody' onClick={()=> {expandFAQ("faqu")}}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.</p>
          </div>
        </div>
        <hr className='hrLine'></hr>

        <div id= "faq3">
          <h1 className='quest'>How do I activate the QR code?<span>+</span></h1>
          <div className='faqBody'onClick={()=> {expandFAQ("faqu")}}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.</p>
          </div>
        </div>
        <hr className='hrLine'></hr>

        <div id= "faq4">
          <h1 className='quest'>Can I refuse a moving request?<span>+</span></h1>
          <div className='faqBody'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.</p>
          </div>
        </div>
        <hr className='hrLine'></hr>
        </div>

      </div>
      </section>
    </div>
  );
}

