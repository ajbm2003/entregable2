import React, { useState } from "react";

const WeatherContainer = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = (temp) => {
    if (isCelsius) {
      const celsiusTemp = (temp - 273.15).toFixed(1)+" °C";
      return celsiusTemp;
    } else {
      const fahrenheitTemp = (((temp -273.15)* 9/5)+32).toFixed(1)+" °F";
      return fahrenheitTemp;
    }
  }

  const handleChangeUnit = () =>{
    setIsCelsius(!isCelsius );
  };

  return (
    <div className="grid justify-center items-center">
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="345"
          height="235"
          viewBox="0 0 345 235"
          fill="none"
          className="absolute"
        >
          <g className="filter drop-shadow-lg">
            <path
              className="fill-current text-sky-100 "
              d="M4 22.975C4 9.04637 16.7799 -1.37654 30.4239 1.42433L323.424 61.5717C333.656 63.672 341 72.6772 341 83.1223V205C341 217.15 331.15 227 319 227H26C13.8497 227 4 217.15 4 205V22.975Z"
            />
          </g>
        </svg>
        <div className="grid grid-rows-[3fr,1fr] h-[235px] w-[345px] z-50">
          <div className="grid grid-cols-[1fr,1fr]">
            <div className="grid justify-center pl-5">
              <h3 className="h-[40px] text-[#026EED] text-[45px] pt-5  pb-0 mb-0">
                {changeUnitTemp(weather.main.temp)}
              </h3>
              <div className="grid leading-3 pt-0 mt-o">
                <span className="text-[#026EED] text-[10px] mt-0 pt-0">
                  Viento: {weather.wind.speed} m/s
                </span>
                <span className="text-[#026EED] text-[10px] mt-0 pt-0">
                  Humedad: {weather.main.humidity} %
                </span>
                <span className="text-[#026EED] text-[10px] mt-0 pt-0">
                  Presión: {weather.main.pressure} hPa
                </span>
              </div>
            </div>
            <picture className="justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt=""
              ></img>
            </picture>
          </div>
          <div className="grid grid-cols-2 pb-5 pl-7 ">
            <h2 className="text-[#026EED] text-[20px] font-bold">
              {weather.name}, {weather.sys.country}
            </h2>
            <span className="text-[#026EED] ms-16">
              {weather.weather[0].description}
            </span>
          </div>
        </div>
      </div>
      <div className="grid justify-center items-center mt-8 pt-5">
        {isCelsius ? (<button className="p-3 bg-[#38A0D8] rounded-lg" onClick={handleChangeUnit}>Cambiar a °F</button>):
        (<button className="p-3 bg-[#38A0D8] rounded-lg" onClick={handleChangeUnit}>Cambiar a °C</button>)
        }
      </div>
    </div>
  );
};

export default WeatherContainer;
