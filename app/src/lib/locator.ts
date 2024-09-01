class Locator {
  private _geoLocation: typeof navigator.geolocation | undefined;

  async grant() {
    return new Promise<void>((resolve, reject) => {
      if (window.navigator) {
        this._geoLocation = window.navigator.geolocation
       resolve();
      } else {
        reject('Browser Denied')
      } 

    });
  }

  async getLocation(): Promise<{ lat: number; lon: number }> {
    return new Promise((resolve, reject) => {
      if (this._geoLocation) {
        this._geoLocation.getCurrentPosition((position) => {
          const latLon = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          resolve(latLon);
        });
      } else {
        reject('Access Denied');
      }
    });
  }
}

const LocatorClass = new Locator();

export { LocatorClass as Locator };
