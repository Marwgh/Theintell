export default function Howto(props) {
  return (
    <div className="Howto">
      <div className="">
        <div className="">
          <h1>How It Works</h1>
          <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here.</p>
        </div>
      </div>

      <div className="">
        <h1>How It Works</h1>
        <p>If you have any inquiries about Karma Charging, or want to discuss a solution for your business, write to us here.</p>
        <div className="" onClick={ () => props.changePage("Order")}>Get your code</div>
      </div>

      <div className="">
        <div className="row1">
          <div className="">
            <h1>Title here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
        <div className="row2">
          <div className="">
            <h1>Title here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
        <div className="row3">
          <div className="">
            <h1>Title here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
      </div>
      <div className="pinkrow"></div>
      <div className="imgrow"></div>
    </div>
  );
}


