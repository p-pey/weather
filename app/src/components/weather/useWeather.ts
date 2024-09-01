import { Locator } from 'lib/locator';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { WeatherService } from 'services/weather/weather.service';

export function useWeather() {
  const service = useRef<WeatherService | undefined>(undefined);
  const [geoLocation, setGeoLocation] = useState<{ lat: number; lon: number } | undefined>(undefined);
 
  const { data, isLoading, error } = useQuery({
    queryFn: ()=>  service.current?.getToday(),
    enabled: !!geoLocation,
  });
  
  useEffect(() => {
    Locator.getLocation().then((locate) => {
      service.current = new WeatherService(locate);
      setGeoLocation(locate);
    });
  }, []);
  return {
    isReady: !!geoLocation,
    data,
    isLoading,
    error,
  };
}
