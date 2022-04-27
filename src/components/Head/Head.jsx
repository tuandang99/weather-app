import React from "react";
import "./Head.css";
function Head(props) {
  function handleSubmit(e) {
    e.preventDefault();
    const val = document.querySelector("input").value;
    props.getData(val);
  }
  return (
    <div className="head">
      <form className="input" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" />
        <button type="submit" className="fa-solid fa-magnifying-glass seach search"></button>
      </form>
      <h3 className="city mb20px">
        {props.data.name}
      </h3>
      <p className="status mb20px">{props.data.weather[0].description}</p>
      <div className="status-img mb20px">
        { (props.data.weather[0].icon)?
          <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt=""
        />
        : <i className="fa-solid fa-cloud-sun clould"></i>
        }
      </div>
      <h1 className="temp">
        {(props.data.main.temp)?Math.floor(props.data.main.temp):'--'}
        <span>o</span>
      </h1>
    </div>
  );
}

export default Head;
