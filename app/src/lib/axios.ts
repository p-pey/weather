import axios from 'axios';
import { WeatherConstants } from '../config/constants';

axios.defaults.baseURL = WeatherConstants.WEATHER_BASE_URL;

axios.interceptors.request.use((config) => {
  config.url = config.url
    ?.concat('&APPID=', WeatherConstants.WEATHER_API_KEY)
    .concat('&lang=', WeatherConstants.WEATHER_API_LANG)
    .concat('&units=', WeatherConstants.WEATHER_API_UNIT);
  return config;
});

export default axios;
