import { WeatherResultType } from "types/weather.types";


export type LocationType = { lat: number; lon: number };

export interface IWeatherProxy {
  getDay(): Promise<WeatherResultType>;
  getRange(): Promise<WeatherResultType[]>;
}
