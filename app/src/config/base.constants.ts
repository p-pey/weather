


export class BaseConstants {
       static _getValue<T>(key: string): string {
              const value = process.env[key];
              if(value) {
                     return value
              }
              throw new Error(`Constant ${ key } Not Found`);
       };

       static _getValueOrDefault<T>(key: string, defaultValue: T): T {
              return process.env[key] as any || defaultValue;
       }
}