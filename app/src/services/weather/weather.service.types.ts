
export type WeatherLike = {
       countryName: string,
       cityName: string,
       sunrise: string,
       population: number;
       forecast: string[]
};

export interface IWeatherService {
       getToday(): Promise<WeatherLike>;
       // getTomorrow():Promise<WeatherLike>;
       // getCurrentWeek(): Promise<WeatherLike>;
       // getNextWeek(): Promise<WeatherLike>;
}