const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (city, unit) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      if (data.cod === "401") {
        throw new Error("Invalid API key.");
      } else if (data.cod === "404") {
        throw new Error(`${city} city is not found.`);
      } else {
        throw new Error(data.message || "An unexpected error occurred.");
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
