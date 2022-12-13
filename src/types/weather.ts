import { AlertProps } from "@mui/material";

export type IWeatherCity = {
  LocalizedName: string;
  Key: string;
  AdministrativeArea: {
    ID: string;
  };
};

export interface IWeatherForecast {
  date: string;
  temperature: number;
  shortPhrase: string;
}

export interface IError extends AlertProps {
  error: boolean;
}
