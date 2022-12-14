import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { IWeatherCity, IWeatherForecast, IError } from "../types/weather";
import { oneHourForecast } from "../functions/Index";
import SearchBar from "../components/SearchBar";
import Status from "../components/Status";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

const PageWeather = () => {
  const apiKey = "4oBnf4JDnnXsCa74kvwxd4SRq36lGUo0";
  // const apiKey = "Er2lGDs6rcMDPVU9ffZPoTucbbG9rlxv";
  const [searchCity, setSearchCity] = useState("");
  const [location, setLocation] = useState<IWeatherCity | null>();
  const [forecast, setForecast] = useState<IWeatherForecast | null>(null);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [hasError, setHasError] = useState<IError>({
    error: false,
    severity: "warning",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(event?.target.value);
  };

  const getlocationForecasts = async (key: string) => {
    setLoading(true);
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&language=pt-br&details=true&metric=true`;
    let response = await fetch(url);
    // data é um objeto com dois valores: Headline e DailyForecasts
    const data = await response.json();

    try {
      setForecast(data);
      setLoading(false);
    } catch (error) {
      setHasError({ error: true, severity: "error" });
      setOpenSnackbar(true);
      setLoading(false);
    }
  };

  const getCityApi = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${searchCity}&language=pt-br&details=true`;
    let response = await fetch(url);
    // data é um array de objetos
    const data = await response.json();

    try {
      if (!data || data.length === 0) {
        setHasError({ error: true, severity: "warning" });
        return setOpenSnackbar(true);
      }
      setLocation(data[0]);
      getlocationForecasts(data[0]?.Key);
      oneHourForecast(data[0]?.Key, apiKey);
      setSearchCity("");
      setHasError({ error: false });
    } catch (error) {
      setHasError({ error: true, severity: "error" });
      setOpenSnackbar(true);
    }
  };
  // const imgIcon = `https://vortex.accuweather.com/adc2010/images/slate/icons/${forecast?.DailyForecasts[0].Night.Icon}.svg`;
  return (
    <>
      <Header />
      <Box
        id="content"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
        gap={5}
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="space-evenly"
          flexWrap="wrap"
          flexDirection="column"
          alignItems="center"
          gap="20px"
        >
          <Typography variant="h3" sx={{ fontWeight: "light" }}>
            {location?.LocalizedName} - {location?.AdministrativeArea.ID}
          </Typography>
          <SearchBar
            onSubmit={getCityApi}
            onChange={onChange}
            searchCity={searchCity}
          />
        </Box>
        {/* <img src={imgIcon} alt="img" /> */}
        {loading && <CircularProgress />}
        <Box
          display="flex"
          width="100%"
          justifyContent="space-evenly"
          flexWrap="wrap"
          gap="30px"
          m="auto"
        >
          {forecast && (
            <>
              {Object.entries(forecast).map(([index, item]) => {
                if (index === "DailyForecasts") {
                  return item.map((data) => {
                    const date = new Date(data.Date).toLocaleDateString(
                      "pt-br",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    );

                    return (
                      <WeatherCard
                        degrees={`${Math.floor(
                          data.Temperature.Minimum.Value
                        )} °C`}
                        minimum={Math.floor(data.Temperature.Minimum.Value)}
                        maximum={Math.floor(data.Temperature.Maximum.Value)}
                        description={data.Day.ShortPhrase}
                        date={date}
                      />
                    );
                  });
                }
              })}
            </>
          )}
        </Box>
        {hasError.error && (
          <Status
            title="Tente novamente"
            onClose={() => setOpenSnackbar(false)}
            setOpenSnackbar={setOpenSnackbar}
            openSnackbar={openSnackbar}
            details={hasError}
          />
        )}
      </Box>
    </>
  );
};

export default PageWeather;
