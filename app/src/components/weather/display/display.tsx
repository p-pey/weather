import { DisplayContent } from './displayContent/displayContent';
import DisplayHeader from './displayHeader/displayHeader';
import { useDisplay } from './useDisplay';

export interface IDisplayProps {
  weatherInformation: {
    countryName?: string;
    cityName?: string;
    sunrise?: string;
    population?: number;
  };
  weatherContent?: string[]
}

export function Display(props: IDisplayProps) {
  const displayHook = useDisplay();
  const info = props.weatherInformation;
  return (
    <div className="flex flex-col h-full">
      <DisplayHeader
        cityName={info.cityName}
        countryName={info.countryName}
        population={info.population}
        sunrise={info.sunrise}
      />
      <DisplayContent forecast={props.weatherContent} />
    </div>
  );
}
