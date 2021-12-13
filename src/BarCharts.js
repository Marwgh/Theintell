export default function BarCharts (props) {
    return(
        <div className="homeData">
        <div className="homeDataHeader">
          <h1>Don’t trust us?</h1>
          <h1>Trust the <span>community</span></h1>
          <p>Karma charging was built  by EV enthusiasts for  EV users, to ensure they will never have to wait for a charging spot again. Here is some data from EV users.</p>
        </div>
        <div className="homeDataInfo">
          <div className="column1">
            <div className="chart1">
              <div className="datachart1"></div>
              <p>75%</p>
            </div>
            <div className="text1">
              <h1>Move</h1>
              <p>Willing to move their car when not fully charged to allow one car with low battery.</p>
            </div>
          </div>
          <div className="column2">
            <div className="chart2">
              <div className="datachart2"></div>
              <p>67.6%</p>
            </div>
            <div className="text2">
              <h1>Points</h1>
              <p>Would move their car for another in need if they could get points.</p>
            </div>
          </div>
          <div className="column3">
            <div className="chart3">
              <div className="datachart3"></div>
              <p>77.9%</p>
            </div>
            <div className="text3">
              <h1>Notification</h1>
              <p>Willing to get notified if someone wants to use the charging spot.</p>
            </div>
          </div>
          <div className="column4">
            <div className="chart4">
              <div className="datachart4"></div>
              <p>55.9%</p>
            </div>
            <div className="text4">
              <h1>100% Charged</h1>
              <p>Move car right after finished charging.</p>
            </div>
          </div>
        </div>
      </div>
      )
}