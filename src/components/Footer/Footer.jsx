import "./Footer.css";
import React from "react";
import Moment from "react-moment";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="moc">
          <p>MT mọc</p>
          {props.data.sys.sunrise ? (
            <Moment unix format="H:mm">
              {props.data.sys.sunrise}
            </Moment>
          ) : (
            "--"
          )}
        </div>
        <div className="lan">
          <p>MT lặn</p>
          {props.data.sys.sunset ? (
            <Moment unix format="H:mm">
              {props.data.sys.sunset}
            </Moment>
          ) : (
            "--"
          )}
        </div>
        <div className="doam">
          <p>Độ ẩm</p>
          <p>{props.data.main.humidity}%</p>
        </div>
        <div className="gio">
          <p>Gió</p>
          <p>{props.data.wind.speed}m/s</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
