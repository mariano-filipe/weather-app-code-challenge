import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { IWeatherCity, IWeatherForecast } from "../types/weather";
const PageWeather = () => {
  // const apiKey = "4oBnf4JDnnXsCa74kvwxd4SRq36lGUo0";
  const apiKey = "Er2lGDs6rcMDPVU9ffZPoTucbbG9rlxv";
  const [searchCity, setSearchCity] = useState("");
  // const [locationKey, setLocationKey] = useState("");
  // const [location, setLocation] = useState<string | []>([]);
  const [forecast, setForecast] = useState<IWeatherForecast | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [locationData, setLocationData] = useState<IWeatherCity>({
    locationKey: "",
    location: { LocalizedName: "" },
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(event?.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchCity) return;
    let response;
    const apiWeatherURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${searchCity}&language=pt-br&details=true`;
    try {
      response = await fetch(apiWeatherURL);
      const data = await response.json();
      if (!data || data.length === 0) {
        setError(true);
        setLoading(false);
      }
      // setLocation(data[0]);
      setLocationData({ locationKey: data[0]?.Key, location: data[0] });
      setSearchCity("");
      console.log("data", data);
      setLoading(false);
      return data[0];
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    setForecast(null);
    setLoading(true);
    const getlocationForecasts = async () => {
      const apiWeatherURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationData.locationKey}?apikey=${apiKey}&language=pt-br&details=true`;
      if (!locationData.locationKey) return null;
      try {
        const response = await fetch(apiWeatherURL);
        const data = await response.json();
        setForecast(data.DailyForecasts);
        setLoading(false);
      } catch (error: any) {
        setError(true);
        setLoading(false);
        console.log("er", error);
      }
    };
    getlocationForecasts();
  }, [locationData.locationKey]);

  const convertToCelsius = (fahrenheit: number) => {
    return Math.round((fahrenheit - 32) / 1.8);
  };

  return (
    <Box>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        gap={5}
        bgcolor="#DCDCDC"
      >
        {!forecast && loading && <CircularProgress />}

        <SearchBar
          onSubmit={onSubmit}
          onChange={onChange}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
        />
        <Typography sx={{ fontWeight: "light" }} variant="h4">
          {locationData.location?.LocalizedName}
        </Typography>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {forecast &&
            Object.entries(forecast).map(([index, item]: any) => {
              console.log("item", item, "index", index);
              const date = new Date(item.Date).toLocaleDateString("pt-br", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });
              return (
                <WeatherCard
                  degrees={`${convertToCelsius(
                    item.Temperature.Maximum.Value
                  )}°C`}
                  minimum={convertToCelsius(item.Temperature.Minimum.Value)}
                  maximum={convertToCelsius(item.Temperature.Maximum.Value)}
                  description={item.Day.ShortPhrase}
                  date={date}
                />
              );
            })}
        </Box>
      </Box>
      {error && (
        <Error
          severity="error"
          message="Opa, deu um erro aqui. Vamos resolver, beleza?"
        />
      )}
    </Box>
  );
};

export default PageWeather;
