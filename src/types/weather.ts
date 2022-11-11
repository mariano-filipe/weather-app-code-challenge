export interface IWeatherCity {
  locationKey: string;
  location: { LocalizedName: string };
}

export interface IWeatherForecast {
  date: string;
  temperature: number;
  shortPhrase: string;
}
