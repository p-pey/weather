import { WeatherConstants } from 'config/constants';
import { FirebaseApp, initializeApp } from 'firebase/app';

type FirebaseConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

class WeatherFirebase {
  constructor() {
    const config = {
      apiKey: WeatherConstants.FIREBASE_API_KEY,
      appId: WeatherConstants.FIREBASE_APP_ID,
      authDomain: WeatherConstants.FIREBASE_AUTH_DOMAIN,
      measurementId: WeatherConstants.FIREBASE_MEASUREMENT_ID,
      messagingSenderId: WeatherConstants.FIREBASE_MESSAGING_SENDER_ID,
      projectId: WeatherConstants.FIREBASE_PROJECT_ID,
      storageBucket: WeatherConstants.FIREBASE_STORAGE_BUCKET,
    };
    initializeApp(config);
  }
}

const FirebaseApp = new WeatherFirebase();

export { FirebaseApp };
