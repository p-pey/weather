


export interface IWeatherService {
       getToday(): Promise<{}>;
       getTomorrow(): Promise<{}>;
       getCurrentWeek(): Promise<{}>;
       getNextWeek(): Promise<{}>;
}