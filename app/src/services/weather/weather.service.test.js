import { WeatherService } from './weather.service';
import { WeatherProxy } from '../../proxies/weather/weather.proxy';

jest.mock('../../proxies/weather/weather.proxy.ts');

describe('WeatherService', () => {
  const mockGeo = { lat: 40.7128, lon: -74.006 };
  let weatherService;

  beforeEach(() => {
    weatherService = new WeatherService(mockGeo);
  });

  it('should return formatted weather data for today', async () => {
    const mockResponse = {
      data: {
        cod: '200',
        message: 0,
        cnt: 40,
        list: [
          {
            dt: 1725202800,
            main: {
              temp: 33.5,
              feels_like: 32.19,
              temp_min: 33.5,
              temp_max: 33.5,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 901,
              humidity: 27,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 3.44,
              deg: 280,
              gust: 4.53,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-01 15:00:00',
          },
          {
            dt: 1725213600,
            main: {
              temp: 32.74,
              feels_like: 31.68,
              temp_min: 31.23,
              temp_max: 32.74,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 902,
              humidity: 30,
              temp_kf: 1.51,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.95,
              deg: 314,
              gust: 2.02,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-01 18:00:00',
          },
          {
            dt: 1725224400,
            main: {
              temp: 31.68,
              feels_like: 30.57,
              temp_min: 30.77,
              temp_max: 31.68,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 901,
              humidity: 31,
              temp_kf: 0.91,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.96,
              deg: 358,
              gust: 2.16,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-01 21:00:00',
          },
          {
            dt: 1725235200,
            main: {
              temp: 29.27,
              feels_like: 28.16,
              temp_min: 29.27,
              temp_max: 29.27,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 901,
              humidity: 31,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.25,
              deg: 24,
              gust: 1.35,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-02 00:00:00',
          },
          {
            dt: 1725246000,
            main: {
              temp: 29.76,
              feels_like: 28.15,
              temp_min: 29.76,
              temp_max: 29.76,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 903,
              humidity: 23,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.75,
              deg: 61,
              gust: 1.67,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-02 03:00:00',
          },
          {
            dt: 1725256800,
            main: {
              temp: 36.31,
              feels_like: 33.46,
              temp_min: 36.31,
              temp_max: 36.31,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 903,
              humidity: 9,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.1,
              deg: 75,
              gust: 3.74,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-02 06:00:00',
          },
          {
            dt: 1725267600,
            main: {
              temp: 40.49,
              feels_like: 36.7,
              temp_min: 40.49,
              temp_max: 40.49,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 901,
              humidity: 5,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 2.65,
              deg: 43,
              gust: 5.81,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-02 09:00:00',
          },
          {
            dt: 1725278400,
            main: {
              temp: 40.87,
              feels_like: 37.47,
              temp_min: 40.87,
              temp_max: 40.87,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 899,
              humidity: 8,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 4.21,
              deg: 299,
              gust: 6.56,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-02 12:00:00',
          },
          {
            dt: 1725289200,
            main: {
              temp: 34.79,
              feels_like: 32.71,
              temp_min: 34.79,
              temp_max: 34.79,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 900,
              humidity: 19,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 2.94,
              deg: 301,
              gust: 4.23,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-02 15:00:00',
          },
          {
            dt: 1725300000,
            main: {
              temp: 32.51,
              feels_like: 30.31,
              temp_min: 32.51,
              temp_max: 32.51,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 901,
              humidity: 17,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 2.24,
              deg: 45,
              gust: 1.42,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-02 18:00:00',
          },
          {
            dt: 1725310800,
            main: {
              temp: 30.68,
              feels_like: 28.7,
              temp_min: 30.68,
              temp_max: 30.68,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 901,
              humidity: 9,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 2.97,
              deg: 54,
              gust: 2.28,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-02 21:00:00',
          },
          {
            dt: 1725321600,
            main: {
              temp: 29.21,
              feels_like: 27.53,
              temp_min: 29.21,
              temp_max: 29.21,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 900,
              humidity: 10,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 3.44,
              deg: 69,
              gust: 3.03,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-03 00:00:00',
          },
          {
            dt: 1725332400,
            main: {
              temp: 28.89,
              feels_like: 27.28,
              temp_min: 28.89,
              temp_max: 28.89,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 902,
              humidity: 11,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 3.23,
              deg: 66,
              gust: 2.82,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-03 03:00:00',
          },
          {
            dt: 1725343200,
            main: {
              temp: 35.17,
              feels_like: 32.44,
              temp_min: 35.17,
              temp_max: 35.17,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 902,
              humidity: 6,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.68,
              deg: 77,
              gust: 2.41,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-03 06:00:00',
          },
          {
            dt: 1725354000,
            main: {
              temp: 38.62,
              feels_like: 35.17,
              temp_min: 38.62,
              temp_max: 38.62,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 901,
              humidity: 4,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.68,
              deg: 232,
              gust: 1.41,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-03 09:00:00',
          },
          {
            dt: 1725364800,
            main: {
              temp: 40.19,
              feels_like: 36.36,
              temp_min: 40.19,
              temp_max: 40.19,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 899,
              humidity: 4,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 2.71,
              deg: 255,
              gust: 3.94,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-03 12:00:00',
          },
          {
            dt: 1725375600,
            main: {
              temp: 32.87,
              feels_like: 31.58,
              temp_min: 32.87,
              temp_max: 32.87,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 901,
              humidity: 28,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 4.29,
              deg: 292,
              gust: 5.59,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-03 15:00:00',
          },
          {
            dt: 1725386400,
            main: {
              temp: 30.29,
              feels_like: 29.47,
              temp_min: 30.29,
              temp_max: 30.29,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 902,
              humidity: 35,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.93,
              deg: 324,
              gust: 2.14,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-03 18:00:00',
          },
          {
            dt: 1725397200,
            main: {
              temp: 29.12,
              feels_like: 28.1,
              temp_min: 29.12,
              temp_max: 29.12,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 901,
              humidity: 32,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.89,
              deg: 5,
              gust: 1.03,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-03 21:00:00',
          },
          {
            dt: 1725408000,
            main: {
              temp: 27.96,
              feels_like: 26.98,
              temp_min: 27.96,
              temp_max: 27.96,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 900,
              humidity: 28,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.16,
              deg: 71,
              gust: 1.23,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-04 00:00:00',
          },
          {
            dt: 1725418800,
            main: {
              temp: 28.69,
              feels_like: 27.23,
              temp_min: 28.69,
              temp_max: 28.69,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 901,
              humidity: 20,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.47,
              deg: 66,
              gust: 1.34,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-04 03:00:00',
          },
          {
            dt: 1725429600,
            main: {
              temp: 35.21,
              feels_like: 32.55,
              temp_min: 35.21,
              temp_max: 35.21,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 902,
              humidity: 11,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.24,
              deg: 264,
              gust: 0.5,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-04 06:00:00',
          },
          {
            dt: 1725440400,
            main: {
              temp: 38.81,
              feels_like: 35.72,
              temp_min: 38.81,
              temp_max: 38.81,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 900,
              humidity: 9,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 3.22,
              deg: 252,
              gust: 2.2,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-04 09:00:00',
          },
          {
            dt: 1725451200,
            main: {
              temp: 37.81,
              feels_like: 35.36,
              temp_min: 37.81,
              temp_max: 37.81,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 899,
              humidity: 14,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 5.43,
              deg: 268,
              gust: 4.63,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-04 12:00:00',
          },
          {
            dt: 1725462000,
            main: {
              temp: 31.87,
              feels_like: 30.67,
              temp_min: 31.87,
              temp_max: 31.87,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 900,
              humidity: 30,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 3.77,
              deg: 286,
              gust: 4.76,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-04 15:00:00',
          },
          {
            dt: 1725472800,
            main: {
              temp: 29.47,
              feels_like: 28.81,
              temp_min: 29.47,
              temp_max: 29.47,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 901,
              humidity: 37,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.39,
              deg: 338,
              gust: 1.38,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-04 18:00:00',
          },
          {
            dt: 1725483600,
            main: {
              temp: 28.74,
              feels_like: 28.11,
              temp_min: 28.74,
              temp_max: 28.74,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 900,
              humidity: 37,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.89,
              deg: 29,
              gust: 1.09,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-04 21:00:00',
          },
          {
            dt: 1725494400,
            main: {
              temp: 27.09,
              feels_like: 26.93,
              temp_min: 27.09,
              temp_max: 27.09,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 899,
              humidity: 40,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.14,
              deg: 124,
              gust: 0.4,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-05 00:00:00',
          },
          {
            dt: 1725505200,
            main: {
              temp: 27.79,
              feels_like: 27.36,
              temp_min: 27.79,
              temp_max: 27.79,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 900,
              humidity: 38,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.37,
              deg: 34,
              gust: 0.3,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-05 03:00:00',
          },
          {
            dt: 1725516000,
            main: {
              temp: 33.46,
              feels_like: 31.89,
              temp_min: 33.46,
              temp_max: 33.46,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 900,
              humidity: 25,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.33,
              deg: 261,
              gust: 0.58,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-05 06:00:00',
          },
          {
            dt: 1725526800,
            main: {
              temp: 37.28,
              feels_like: 35.38,
              temp_min: 37.28,
              temp_max: 37.28,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 899,
              humidity: 18,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 3.44,
              deg: 253,
              gust: 1.97,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-05 09:00:00',
          },
          {
            dt: 1725537600,
            main: {
              temp: 37.01,
              feels_like: 35.23,
              temp_min: 37.01,
              temp_max: 37.01,
              pressure: 1002,
              sea_level: 1002,
              grnd_level: 898,
              humidity: 19,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 4.69,
              deg: 264,
              gust: 4.19,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-05 12:00:00',
          },
          {
            dt: 1725548400,
            main: {
              temp: 32.29,
              feels_like: 31.55,
              temp_min: 32.29,
              temp_max: 32.29,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 899,
              humidity: 33,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 2.81,
              deg: 274,
              gust: 3.68,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-05 15:00:00',
          },
          {
            dt: 1725559200,
            main: {
              temp: 29.78,
              feels_like: 29.66,
              temp_min: 29.78,
              temp_max: 29.78,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 900,
              humidity: 42,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.87,
              deg: 320,
              gust: 0.9,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-05 18:00:00',
          },
          {
            dt: 1725570000,
            main: {
              temp: 29.11,
              feels_like: 28.91,
              temp_min: 29.11,
              temp_max: 29.11,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 899,
              humidity: 42,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.61,
              deg: 4,
              gust: 0.77,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-05 21:00:00',
          },
          {
            dt: 1725580800,
            main: {
              temp: 27.69,
              feels_like: 27.66,
              temp_min: 27.69,
              temp_max: 27.69,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 899,
              humidity: 44,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.28,
              deg: 297,
              gust: 0.34,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2024-09-06 00:00:00',
          },
          {
            dt: 1725591600,
            main: {
              temp: 28.75,
              feels_like: 28.28,
              temp_min: 28.75,
              temp_max: 28.75,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 899,
              humidity: 39,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 0.84,
              deg: 48,
              gust: 0.78,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-06 03:00:00',
          },
          {
            dt: 1725602400,
            main: {
              temp: 34.53,
              feels_like: 33.16,
              temp_min: 34.53,
              temp_max: 34.53,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 900,
              humidity: 25,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.71,
              deg: 242,
              gust: 0.74,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-06 06:00:00',
          },
          {
            dt: 1725613200,
            main: {
              temp: 38.26,
              feels_like: 37,
              temp_min: 38.26,
              temp_max: 38.26,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 899,
              humidity: 20,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 3.64,
              deg: 255,
              gust: 2.38,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-06 09:00:00',
          },
          {
            dt: 1725624000,
            main: {
              temp: 37.86,
              feels_like: 36.7,
              temp_min: 37.86,
              temp_max: 37.86,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 899,
              humidity: 21,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 4.6,
              deg: 269,
              gust: 3.82,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'd',
            },
            dt_txt: '2024-09-06 12:00:00',
          },
        ],
        city: {
          id: 128321,
          name: 'Kāzerūn',
          coord: {
            lat: 29.6344,
            lon: 51.6198,
          },
          country: 'IR',
          population: 94511,
          timezone: 12600,
          sunrise: 1725156664,
          sunset: 1725202580,
        },
      },
    };

    WeatherProxy.prototype.getDay.mockResolvedValueOnce(mockResponse);

    const result = await weatherService.getToday();

    expect(result.countryName).toBe('IR');
    expect(result.cityName).toBe('Kāzerūn');
    expect(result.population).toBe(94511);
    expect(result.sunrise).toBe('02:42 AM');
    expect(result.forecast).toEqual(['06:30 PM - Clear sky', '09:30 PM - Clear sky', '12:30 AM - Clear sky', '03:30 AM - Clear sky']);
  });
});
