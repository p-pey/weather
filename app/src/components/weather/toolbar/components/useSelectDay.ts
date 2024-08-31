import { OptionType, selectDateHandlerType } from 'components/weather/_types';
import { useState } from 'react';

type selectedType = OptionType['value'] | undefined

export function useSelectDay(args: {
  selectDateHandler: selectDateHandlerType;
}) {
  const OPTIONS: OptionType[] = [
    {
      label: 'Today',
      value: 'Today',
    },
    {
      label: 'Tomorrow',
      value: 'Tomorrow',
    },
    {
      label: 'Current Week',
      value: 'CurrentWeek',
    },
    {
      label: 'Next Week',
      value: 'NextWeek',
    },
  ];
  const [selected, setSelected] = useState<selectedType>(OPTIONS[0].value);

  const onSelectHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
       const value = (event.target.value || undefined) as selectedType;
    if (value) args.selectDateHandler(value);
    setSelected(value);
  };

  return {
    OPTIONS,
    selected,
    onSelectHandler,
  };
}
