import { IDisplayProps } from '../display';

export default function DisplayHeader(props: IDisplayProps['weatherInformation']) {
  return (
    <header>
      <div className="flex items-center gap-2 text-sm text-black">
        <span data-cy="country">{`Country: ${props.countryName}`}</span>
        <span data-cy="city">{`City: ${props.cityName}`}</span>
        <span data-cy="population">{`Population: ${props.population}`}</span>
        <span data-cy="sunrise">{`Sunrise: ${props.sunrise}`}</span>
      </div>
    </header>
  );
}
