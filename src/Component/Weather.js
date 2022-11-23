import React, { useState } from "react";

function Weather() {
  const [input, setInput] = useState("");
  const [showText, setShowText] = useState("");
  const [name, setName] = useState("");

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=b2beb7d8c085a8d2195fbb5211c84a9f`;
    const response = await fetch(url);
    const rseJason = await response.json();
    console.log(rseJason);
    setShowText(rseJason.main);
  };

  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setName(input);
    fetchApi();
  };

  return (
    <div className="main">
      <div className="box">
        <div className="inputFeild">
          <input
            type="text"
            className="input"
            value={input}
            onChange={handleSearch}
          />
          <button onClick={handleClick}>Search</button>
        </div>
        <div className="content">
          <div className="col1">
            <h1>Feels Like: </h1>
            {showText?.feels_like ? (
              <span style={{ color: "#93e793" }}>
                <p>{showText.feels_like}°C</p>
              </span>
            ) : (
              "--"
            )}
            <h1>Temprature Level:</h1>
            {showText?.temp_min ? (
              <p>
                <span style={{ color: "#93e793" }}>
                  {" "}
                  Min : {showText.temp_min}°C{" "}
                </span>{" "}
                <br></br>
                <span style={{ color: "#ff7373" }}>
                  Max : {showText.temp_max}°C"
                </span>
              </p>
            ) : (
              "--"
            )}{" "}
          </div>
          <div className="col2">
            <h1 className="City">{name}</h1>
            {showText?.temp ? (
              <h3 className="temp"> {showText.temp}°C </h3>
            ) : (
              <h2 style={{ margin: "30px" }}>"No data found"</h2>
            )}
          </div>
          <div className="col3">
            <h3 style={{ margin: "15px" }}>Humidity: </h3>
            {showText?.humidity ? (
              <span style={{ color: "#93e793" }}>
                <p>{showText.humidity}°C</p>
              </span>
            ) : (
              "--"
            )}{" "}
            <h3 style={{ margin: "15px" }}>Pressure: </h3>
            {showText?.pressure ? (
              <span style={{ color: "#93e793" }}>
                <p>{showText.pressure}°C</p>
              </span>
            ) : (
              "--"
            )}{" "}
            <h3 style={{ margin: "15px" }}>Sea Level: </h3>
            {showText?.sea_level ? (
              <span style={{ color: "#93e793" }}>
                <p>{showText.sea_level}°C</p>
              </span>
            ) : (
              "--"
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
