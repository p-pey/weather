import { ERRORS_CODE } from './Weather.error';


declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    API_URL?: string;
  }
}
