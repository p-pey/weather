
export type OptionValueType = 'Today' | 'Tomorrow' | 'CurrentWeek' | 'NextWeek'

export type OptionType = {
       label: string,
       value: OptionValueType
};

export type selectDateHandlerType = (option: OptionType['value'])=> void