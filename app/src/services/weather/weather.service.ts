import { WeatherProxy } from 'proxies/weather/weather.proxy';
import { IWeatherService, WeatherLike } from './weather.service.types';
import { IWeatherProxy } from 'proxies/weather/weather.proxy.types';
import { LocationType } from 'types/weather.types';

export class WeatherService implements IWeatherService {
  private _proxy: IWeatherProxy;
  constructor(geo: LocationType) {
    this._proxy = new WeatherProxy(geo);
  }
  async getToday(): Promise<WeatherLike> {
    const response = await this._proxy.getDay();
    const data = response.data;
    
    const countryName = data.city.country;
    const cityName = data.city.name;
    const population = data.city.population;
  
    const sunriseTimestamp = data.city.sunrise;
    const sunriseDate = new Date(sunriseTimestamp * 1000);
  
    const sunrise = sunriseDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  
    const now = new Date();
    const currentHour = now.getHours();
    const hours = 24 - currentHour;
  
    const upcomingHours = data.list.filter(entry => {
      const forecastTime = new Date(entry.dt * 1000);
      const diffInHours = (forecastTime.getTime() - now.getTime()) / (1000 * 60 * 60);
      return diffInHours >= 0 && diffInHours <= hours;
    });
  
    const forecast = upcomingHours.map(entry => {
      const forecastTime = new Date(entry.dt * 1000).toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      const description = entry.weather[0].description;
      return `${forecastTime} - ${description.charAt(0).toUpperCase() + description.slice(1)}`;
    });
  
    return {
      countryName,
      cityName,
      sunrise,
      population,
      forecast
    };
  }
  
  
  // async getTomorrow(): Promise<WeatherLike> {
  //   const response = await this._proxy.getDay();
  //   const data = response.data;
  //   return {
  //     countryName : '',
  //     cityName : '',
  //     sunrise : '',
  //     population : 1,
  //     forecast: []
  //   };
  // }
  // async getCurrentWeek(): Promise<WeatherLike> {
  //   const response = await this._proxy.getDay();
  //   const data = response.data;
  //   return {
  //     countryName : '',
  //     cityName : '',
  //     sunrise : '',
  //     population : 1,
  //     forecast: []
  //   };
  // }
  // async getNextWeek(): Promise<WeatherLike> {
  //   const response = await this._proxy.getDay();
  //   const data = response.data;
  //   return {
  //     countryName : '',
  //     cityName : '',
  //     sunrise : '',
  //     population : 1,
  //     forecast: []
  //   };
  // }
}
