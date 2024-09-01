import { WeatherProxy } from '../../proxies/weather/weather.proxy';
import { IWeatherService, WeatherLike } from './weather.service.types';
import { IWeatherProxy } from 'proxies/weather/weather.proxy.types';
import { LocationType } from 'types/weather.types';
import { format, fromUnixTime } from 'date-fns';
export class WeatherService implements IWeatherService {
  private _proxy: IWeatherProxy;
  constructor(geo: LocationType, proxy = new WeatherProxy(geo)) {
    this._proxy = proxy;
  }
  async getToday(): Promise<WeatherLike> {
    const response = await this._proxy.getDay();
    const data = response.data;
    const countryName = data.city.country;
    const cityName = data.city.name;
    const population = data.city.population;

    const sunriseTimestamp = data.city.sunrise;
    const sunriseDate = fromUnixTime(sunriseTimestamp / 1000);
    const sunrise = format(sunriseDate, 'hh:mm a');

    const now = new Date();
    const hours = 12;

    const upcomingHours = data.list.filter((entry) => {
      const forecastTime = fromUnixTime(entry.dt);
      const diffInHours = (forecastTime.getTime() - now.getTime()) / (1000 * 60 * 60);
      return diffInHours >= 0 && diffInHours <= hours;
    });

    const forecast = upcomingHours.map((entry) => {
      const forecastTime = fromUnixTime(entry.dt);
      const formattedTime = format(forecastTime, 'hh:mm a');
      const description = entry.weather[0].description;
      return `${formattedTime} - ${description.charAt(0).toUpperCase() + description.slice(1)}`;
    });

    return {
      countryName,
      cityName,
      sunrise,
      population,
      forecast,
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
