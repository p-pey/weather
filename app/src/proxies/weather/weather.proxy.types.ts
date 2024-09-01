import { AxiosResponse } from "axios";

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastEntry[];
  city: City;
}

interface ForecastEntry {
  dt: number; 
  main: MainWeatherData;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  rain?: Rain;
  snow?: Snow;
  sys: Sys;
  dt_txt: string;
};
interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WeatherDescription {
  id: number;
  main: string; 
  description: string;
  icon: string;
}

interface Clouds {
  all: number; 
}

interface Wind {
  speed: number; 
  deg: number;
}

interface Rain {
  '3h': number;
}

interface Snow {
  '3h': number;
}

interface Sys {
  pod: string; 
}

interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coordinates {
  lat: number;
  lon: number;
}


export type LocationType = { lat: number; lon: number };

export interface IWeatherProxy {
  getDay(): Promise<AxiosResponse<ForecastResponse>>;
}
