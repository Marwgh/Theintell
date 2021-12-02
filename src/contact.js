import './Contact.css';
export default function Contact() {
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
            <path stroke-dasharray="16, 16" d="M5 20 l150 0" fill="none" stroke="#3f51b5" stroke-width="2"/>
          </svg>
        </div>
        <div className="lineRight">
          <svg> 
            <path stroke-dasharray="16, 16" d="M5 20 l120 0" fill="none" stroke="#3f51b5" stroke-width="2"/>
          </svg>
        </div>
      </div>

      <div className="FAQ">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="Questions">

      </div>

      <div className="contactForm">
        <div className="formTitle">
          <h1>We couldn't answer your questions?</h1>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here.</p>
        </div>
        <div className="form">
        <form>
          <fieldset>
            <div id="fullname"></div>
            <div></div>
            <div id="contact"></div>
            <div></div>
          </fieldset>
        </form>
        </div>
      </div>

    </div>
  );
}

