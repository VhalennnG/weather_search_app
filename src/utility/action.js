import { DateTime } from "luxon";

export const convertTimeStamp = (timestamp, timezone) => {
  const convertTimezone = timezone / 3600;
  const date = new Date(timestamp * 1000);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`,
    hour12: true,
  };

  try {
    return date.toLocaleString("en-US", options);
  } catch (error) {
    const luxonDate = DateTime.fromSeconds(timestamp, { zone: "UTC" }).plus({
      seconds: timezone,
    });
    return luxonDate.toLocaleString(DateTime.DATETIME_FULL);
  }
};

export const convertCountryCode = (country) => {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(country);
};
