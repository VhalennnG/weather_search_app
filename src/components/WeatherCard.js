import {
  FaWind,
  FaTemperatureFull,
  FaGaugeHigh,
  FaDroplet,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import TemperatureToggle from "./TemperatureToggle";

const WeatherCard = ({
  weatherData,
  units,
  setUnits,
  handleSearchSubmit,
  convertTimeStamp,
  convertCountryCode,
}) => {
  return (
    <div className='bg-neutral-900 text-white md:w-[700px] w-11/12 sm:p-8 p-4 mx-auto sm:mt-16 mt-6 rounded-xl'>
      <form className='relative' onSubmit={handleSearchSubmit}>
        <div className='flex flex-row gap-3 rounded border-none bg-neutral-800 p-2'>
          <button
            type='submit'
            className='text-md text-white bg-slate-500 p-2 rounded'>
            <FaMagnifyingGlass />
          </button>
          <input
            type='text'
            placeholder='Search for a city...'
            name='citySearch'
            className='outline-none bg-neutral-800 w-full'
            // value={selectCity}
          />
        </div>
      </form>

      {weatherData.main && (
        <div className='text-center mt-12'>
          <h1 className='font-bold mb-2 sm:text-3xl text-2xl'>
            {weatherData.name && weatherData.sys && (
              <div>
                {weatherData.name},{" "}
                {convertCountryCode(weatherData.sys.country)}
              </div>
            )}
          </h1>
          <div className='mb-8 text-sm'>
            {weatherData.dt &&
              weatherData.timezone &&
              (() => {
                try {
                  return convertTimeStamp(weatherData.dt, weatherData.timezone);
                } catch (error) {
                  return "Timezone is currently not supported.";
                }
              })()}
          </div>
          <div className='bg-[#1e1e1e] inline-block py-2 px-4 rounded-3xl'>
            {weatherData.weather && <p>{weatherData.weather[0].main}</p>}
          </div>
          <div className='flex justify-center mx-auto'>
            {weatherData.weather && (
              <img
                className='w-40'
                src={`/animated/${weatherData.weather[0].icon}.svg`}
                alt='weather icon'
              />
            )}
          </div>
          <TemperatureToggle units={units} setUnits={setUnits} />
          <p className='md:text-3xl text-2xl font-bold'>
            <div>
              {weatherData.main.temp.toFixed()}°{" "}
              {units !== "metric" ? "F" : "C"}
            </div>
          </p>

          <div className='flex flex-wrap gap-5 justify-center text-sm'>
            <span>
              Min: {weatherData.main.temp_min.toFixed()}&#176;
              {units !== "metric" ? "F" : "C"}
            </span>
            <span>
              Max: {weatherData.main.temp_max.toFixed()}&#176;
              {units !== "metric" ? "F" : "C"}
            </span>
          </div>
        </div>
      )}
      {weatherData.main && (
        <div className='grid md:grid-cols-2 grid-cols-none gap-4 md:mt-12 mt-4'>
          <div className='flex flex-row md:gap-4 gap-2 items-center bg-neutral-800 rounded-xl p-3'>
            <div className='text-2xl'>
              <FaTemperatureFull />
            </div>
            <div className='flex flex-col md:text-sm text-xs'>
              <p>Temperature</p>
              <p>
                {weatherData.main.feels_like.toFixed()}&#176;{" "}
                {units !== "metric" ? "F" : "C"}
              </p>
            </div>
          </div>
          <div className='flex flex-row md:gap-4 gap-2 items-center bg-neutral-800 rounded-xl p-3'>
            <div className='text-2xl'>
              <FaDroplet />
            </div>
            <div className='flex flex-col md:text-sm text-xs'>
              <p>Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
          </div>
          <div className='flex flex-row md:gap-4 gap-2 items-center bg-neutral-800 rounded-xl p-3'>
            <div className='text-2xl'>
              <FaWind />
            </div>
            <div className='flex flex-col md:text-sm text-xs'>
              <p>Wind Speed</p>
              <p>
                {weatherData.wind.speed} {units === "imperial" ? "mph" : "m/s"}
              </p>
            </div>
          </div>
          <div className='flex flex-row md:gap-4 gap-2 items-center bg-neutral-800 rounded-xl p-3'>
            <div className='text-2xl'>
              <FaGaugeHigh />
            </div>
            <div className='flex flex-col md:text-sm text-xs'>
              <p>Pressure</p>
              <p>{weatherData.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
