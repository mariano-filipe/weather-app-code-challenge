export interface IWeatherCity {
  locationKey: string;
  LocalizedName: string;
}

export interface IWeatherForecast {
  date: string;
  temperature: number;
  shortPhrase: string;
}
