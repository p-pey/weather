import { IDisplayProps } from '../display';

export default function DisplayHeader(props: IDisplayProps['weatherInformation']) {
  return (
    <header>
      <div className="flex items-center gap-2 text-sm text-black">
        <span>{`Country: ${props.countryName}`}</span>
        <span>{`City: ${props.cityName}`}</span>
        <span>{`Population: ${props.population}`}</span>
        <span>{`Sunrise: ${props.sunrise}`}</span>
      </div>
    </header>
  );
}
