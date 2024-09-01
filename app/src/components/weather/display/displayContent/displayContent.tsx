import { CiCloudDrizzle } from 'react-icons/ci';
import { IDisplayProps } from '../display';

export function DisplayContent(props: { forecast: IDisplayProps['weatherContent'] }) {
  return (
    <div className="flex items-center flex-wrap text-sm gap-5 my-auto">
      {props.forecast?.map((item) => {
        return <span key={item}>{item}</span>;
      })}
    </div>
  );
}
