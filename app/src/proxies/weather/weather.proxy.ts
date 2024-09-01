import axios, { AxiosResponse } from "axios";
import { ForecastResponse, IWeatherProxy, LocationType } from "./weather.proxy.types";



export class WeatherProxy implements IWeatherProxy {
       private _geo: LocationType;

       constructor(geo: LocationType) {
              this._geo = geo;
       };
       async getDay(): Promise<AxiosResponse<ForecastResponse>> {
        return axios.get(`/forecast?lat=${ this._geo.lat }&lon=${ this._geo.lon }&exclude=daily,minutely,current,alerts`);
       };
     
}