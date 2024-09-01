import axios from 'axios';
import { WeatherProxy } from './weather.proxy';

jest.mock('axios');

describe('WeatherProxy', () => {
  const mockGeo = { lat: 40.7128, lon: -74.006 };
  let weatherProxy;

  beforeEach(() => {
    weatherProxy = new WeatherProxy(mockGeo);
  });

  it('should make a correct API call and return weather data', async () => {
    const mockResponse = {
      data: {
        city: {
          name: 'New York',
          country: 'US',
          population: 8419600,
          sunrise: 1633072800,
        },
        list: [
          {
            dt: 1633080000,
            weather: [{ description: 'clear sky' }],
          },
          {
            dt: 1633083600,
            weather: [{ description: 'light rain' }],
          },
        ],
      },
    };

    axios.get.mockResolvedValueOnce(mockResponse);

    const response = await weatherProxy.getDay();

    expect(axios.get).toHaveBeenCalledWith(
      `/forecast?lat=${mockGeo.lat}&lon=${mockGeo.lon}`
    );
    expect(response.data.city.name).toBe('New York');
    expect(response.data.city.country).toBe('US');
    expect(response.data.city.population).toBe(8419600);
    expect(response.data.list.length).toBe(2);
    expect(response.data.list[0].weather[0].description).toBe('clear sky');
    expect(response.data.list[1].weather[0].description).toBe('light rain');
  });
});
