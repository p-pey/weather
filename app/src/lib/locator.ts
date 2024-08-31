class Locator {
  private _geoLocation: typeof navigator.geolocation | undefined;

  private _brokenAccess() {}

  async grant() {
    return new Promise<void>((resolve, reject) => {
      const navigatorGeoLocation = navigator.geolocation;
      if (navigatorGeoLocation) {
        this._geoLocation = navigatorGeoLocation;
        navigatorGeoLocation.getCurrentPosition(
          () => {
            resolve();
          },
          (error) => {
            reject(error.message);
          }
        );
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
