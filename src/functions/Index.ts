export const oneHourForecast = async (key: any, apiKey: any) => {
  const url = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${key}?apikey=${apiKey}&language=pt-br&details=true&metric=true`;
  let response = await fetch(url);
  const data = await response.json();
  console.log("hora", data);
};
