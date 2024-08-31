import axios from "axios";
import { IWeatherProxy, LocationType } from "./weather.proxy.types";
import { WeatherResultType } from "types/weather.types";



export class WeatherProxy implements IWeatherProxy {
       private _geo: LocationType;

       constructor(geo: LocationType) {
              this._geo = geo;
       };

       async getDay(): Promise<WeatherResultType> {
        return axios.get(`/weather?lat=${ this._geo.lat }&lon=${ this._geo.lon }`);
        
       };
       async getRange(): Promise<WeatherResultType[]> {
           return axios.get('') as Promise<WeatherResultType[]>
       }
}