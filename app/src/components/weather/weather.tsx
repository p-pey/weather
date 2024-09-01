import { Display } from './display/display';
import { useWeather } from './useWeather';

export function Weather() {
  const weatherHook = useWeather();

  if (!weatherHook.isReady) {
    return <h4 data-cy="weather">Getting your Location</h4>;
  }

  return (
    <div data-cy="weather" className="rounded-2xl w-full h-full shadow-lg relative bg-inherit p-5">
      {weatherHook.isLoading ? (
        'Getting Weather Data ...'
      ) : (
        <Display
          weatherInformation={{
            countryName: weatherHook.data?.countryName,
            cityName: weatherHook.data?.cityName,
            population: weatherHook.data?.population,
            sunrise: weatherHook.data?.sunrise,
          }}
          weatherContent={weatherHook.data?.forecast}
        />
      )}
    </div>
  );
}
