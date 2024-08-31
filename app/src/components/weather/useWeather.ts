import { Locator } from 'lib/locator';
import { OptionType } from './_types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { WeatherService } from 'services/weather/weather.service';

export function useWeather() {
  const service = useRef<WeatherService | undefined>(undefined);
  const [geoLocation, setGeoLocation] = useState<{ lat: number; lon: number } | undefined>(undefined);
 
  const { data, isLoading, error } = useQuery({
    queryFn: ()=>  service.current?.getToday(),
    enabled: !!geoLocation,
  });
  const selectDateHandler = async (date: OptionType['value']) => {
    switch (date) {
      case 'Today':
        {
        }
        break;
      case 'Tomorrow':
        {
        }
        break;
      case 'CurrentWeek':
        {
        }
        break;
      case 'NextWeek':
        {
        }
        break;
      default:
        Promise.reject();
    }
  };
  useEffect(() => {
    Locator.getLocation().then((locate) => {
      service.current = new WeatherService(locate);
      setGeoLocation(locate);
    });
  }, []);
  console.log(data, error, isLoading)
  return {
    selectDateHandler,
    data,
    isLoading,
    error,
  };
}
