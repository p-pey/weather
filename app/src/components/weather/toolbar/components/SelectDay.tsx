import { selectDateHandlerType } from 'components/weather/_types';
import { useSelectDay } from './useSelectDay';

export function SelectDate(props: {
  selectDateHandler: selectDateHandlerType;
}) {
  const selectDayHook = useSelectDay(props);
  return (
    <select
      onChange={console.log}
      value={selectDayHook.selected}
      className="h-full rounded-lg p-2 min-w-48"
    >
      {selectDayHook.OPTIONS.map((option) => {
        return (
          <option
            selected={selectDayHook.selected === option.value}
            key={option.value}
          >
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
