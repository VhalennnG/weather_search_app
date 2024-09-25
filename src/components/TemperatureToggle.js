import React from "react";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

const TemperatureToggle = ({ units, setUnits }) => {
  return (
    <div className='sm:text-xl text-base flex flex-row gap-8 mb-4 justify-center'>
      <button
        className={"cursor-pointer py-2 px-3 rounded-xl bg-blue-500"}
        onClick={() => units !== "metric" && setUnits("metric")}>
        <TbTemperatureCelsius />
      </button>
      <button
        className={"cursor-pointer py-2 px-3 rounded-xl bg-red-500"}
        onClick={() => units !== "imperial" && setUnits("imperial")}>
        <TbTemperatureFahrenheit />
      </button>
    </div>
  );
};

export default TemperatureToggle;
