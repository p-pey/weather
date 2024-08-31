import { WeatherProxy } from 'proxies/weather/weather.proxy';
import { IWeatherService } from './weather.service.types';
import { IWeatherProxy } from 'proxies/weather/weather.proxy.types';
import { LocationType, WeatherResultType } from 'types/weather.types';

export class WeatherService implements IWeatherService {
  private _proxy: IWeatherProxy;
  constructor(geo: LocationType) {
    console.log(WeatherProxy);
    this._proxy = new WeatherProxy(geo);
  }
  async getToday(): Promise<WeatherResultType> {
    return await this._proxy.getDay();
  }
  async getTomorrow(): Promise<{}> {
    return {};
  }
  async getCurrentWeek(): Promise<{}> {
    return {};
  }
  async getNextWeek(): Promise<{}> {
    return {};
  }
}
