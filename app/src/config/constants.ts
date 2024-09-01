import { BaseConstants } from './base.constants';

export class WeatherConstants extends BaseConstants {
  static readonly WEATHER_BASE_URL = this._getValue<string>('WEATHER_BASE_URL');
  static readonly WEATHER_API_KEY = this._getValue<string>('WEATHER_API_KEY');
  static readonly WEATHER_API_LANG = this._getValue<string>('WEATHER_APP_LANG');
  static readonly WEATHER_API_UNIT = this._getValue<string>('WEATHER_APP_UNIT');

  static readonly FIREBASE_API_KEY = this._getValue<string>('FIREBASE_API_KEY');
  static readonly FIREBASE_AUTH_DOMAIN = this._getValue<string>('FIREBASE_AUTH_DOMAIN');
  static readonly FIREBASE_PROJECT_ID = this._getValue<string>('FIREBASE_PROJECT_ID');
  static readonly FIREBASE_STORAGE_BUCKET = this._getValue<string>('FIREBASE_STORAGE_BUCKET');
  static readonly FIREBASE_MESSAGING_SENDER_ID = this._getValue<string>('FIREBASE_MESSAGING_SENDER_ID');
  static readonly FIREBASE_APP_ID = this._getValue<string>('FIREBASE_APP_ID');
  static readonly FIREBASE_MEASUREMENT_ID = this._getValue<string>('FIREBASE_MEASUREMENT_ID');
}
