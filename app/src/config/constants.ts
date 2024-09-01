import { BaseConstants } from './base.constants';

export class WeatherConstants extends BaseConstants {
  static readonly WEATHER_BASE_URL = this._getValue<string>('WEATHER_BASE_URL');
  static readonly WEATHER_API_KEY = this._getValue<string>('WEATHER_API_KEY');
  static readonly WEATHER_API_LANG = this._getValue<string>('WEATHER_APP_LANG');
  static readonly WEATHER_API_UNIT = this._getValue<string>('WEATHER_APP_UNIT');
}
