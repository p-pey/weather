import { Toolbar } from './toolbar/toolbar';
import { useWeather } from './useWeather';

export function Weather() {
  const weatherHook = useWeather();
  return (
    <div className="rounded-lg w-full h-full shadow-lg">
      <Toolbar selectDateHandler={weatherHook.selectDateHandler} />
    </div>
  );
}
