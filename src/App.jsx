import { useEffect, useState } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "72647a09d04b23b36182b480141a232c";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  console.log(weather)
  return (
    <main className="font-['Lato'] bg-gradient-radial from-D5F3FF via-51B4E8 to-transparent to-center h-screen">
      {weather === null ? (
        <div className="flex h-screen justify-center items-center">
          <div className="justify-center items-center grid">
            <svg
              className="opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              width="147"
              height="88"
              viewBox="0 0 147 88"
              fill="none"
            >
              <path
                d="M130.035 53.9722C129.948 53.9722 129.86 53.9722 129.86 53.9722C131.172 50.8231 131.959 47.4115 131.959 43.8251C131.959 29.6541 120.503 18.1948 106.337 18.1948C101.352 18.1948 96.63 19.6819 92.6948 22.1312C87.3605 9.09742 74.5931 0 59.6395 0C39.8763 0 23.9607 16.008 23.9607 35.6899C23.9607 37.1769 24.0482 38.664 24.2231 40.0636C24.1356 40.0636 24.0482 40.0636 23.9607 40.0636C10.7561 40.0636 0 50.8231 0 64.0318C0 77.2406 10.7561 88 23.9607 88H130.035C139.392 88 147 80.3897 147 71.0298C147 61.5825 139.392 53.9722 130.035 53.9722Z"
                fill="white"
              />
            </svg>
            <h1 className="text-white pl-8">Weather App</h1>
          </div>
        </div>
      ) : (
        <div className="h-screen grid grid-rows-3">
          <Header />
          <div className="flex justify-center items-center">
            <WeatherContainer weather={weather} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
