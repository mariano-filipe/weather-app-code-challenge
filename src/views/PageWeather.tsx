import React from "react";
import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Status from "../components/Status";
import WeatherCard from "../components/WeatherCard";
import { IWeatherCity, IWeatherForecast } from "../types/weather";
import { convertToCelsius } from "../functions/Index";
import NewHeader from "../components/NewHeader";

const PageWeather = () => {
  const apiKey = "4oBnf4JDnnXsCa74kvwxd4SRq36lGUo0";
  // const apiKey = "Er2lGDs6rcMDPVU9ffZPoTucbbG9rlxv";
  const [searchCity, setSearchCity] = useState("");
  const [locationKey, setLocationKey] = useState("");
  const [location, setLocation] = useState<IWeatherCity>();
  const [forecast, setForecast] = useState<IWeatherForecast | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // const [locationData, setLocationData] = useState<IWeatherCity>({
  //   locationKey: "",p
  //   location: { LocalizedName: "" },
  // });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(event?.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // if (!searchCity) return;
    const apiWeatherURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${searchCity}&language=pt-br&details=true`;
    try {
      let response = await fetch(apiWeatherURL);
      const data = await response.json();
      if (!data || data.length === 0) {
        setError(true);
        // abre a snackbar
        setOpenSnackbar(true);
        return;
      }
      setLocation(data[0]);
      setLocationKey(data[0]?.Key);
      setSearchCity("");
      setError(false);
      setLoading(false);

      return data[0];
    } catch (error) {
      setError(true);
      setOpenSnackbar(true);
      console.log(error);
    }
  };

  useEffect(() => {
    setForecast(null);
    setLoading(true);
    const getlocationForecasts = async () => {
      const apiWeatherURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=pt-br&details=true`;
      if (!locationKey) return null;
      try {
        const response = await fetch(apiWeatherURL);
        const data = await response.json();
        setForecast(data.DailyForecasts);
        setLoading(false);
        return data.DailyForecasts;
      } catch (error) {
        setError(true);
        setOpenSnackbar(true);
        console.log("error", error);
      }
    };
    getlocationForecasts();
  }, [locationKey]);

  return (
    <>
      <NewHeader />
      <Box
        id="content"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
        gap={5}
      >
        <SearchBar
          onSubmit={onSubmit}
          onChange={onChange}
          searchCity={searchCity}
        />
        <Typography sx={{ fontWeight: "light" }}>
          {location?.LocalizedName}
        </Typography>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-evenly"
          flexWrap="wrap"
          gap="30px"
        >
          {forecast &&
            Object.entries(forecast).map(([index, item]) => {
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
        {error && (
          <Status
            title="Tente novamente"
            message="Cidade não encontrada. Tente Novamente"
            severity="warning"
            onClose={() => setOpenSnackbar(false)}
            setOpenSnackbar={setOpenSnackbar}
            openSnackbar={openSnackbar}
          />
        )}
      </Box>
    </>
  );
};

export default PageWeather;
