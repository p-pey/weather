import { Locator } from 'lib/locator';
import { PropsWithChildren, useEffect, useState } from 'react';

export type LocationContextType = {
  location: { lat: number; lon: number } | undefined;
};
export function LocationProvider(props: PropsWithChildren) {
  const [status, setStatus] = useState({
    loading: true,
    error: false,
  });
  const grantAccess = async () => {
    try {
      await Locator.grant();
      setStatus({
        error: false,
        loading: false,
      });
    } catch (e: any) {
      console.error(e);
      alert(e);
      setStatus({
        error: true,
        loading: false,
      });
    }
  };
  useEffect(() => {
    grantAccess();
  }, []);
  if (status.loading) {
    return <div className="w-full h-full text-center flex items-center justify-center text-2xl">Loading ...</div>;
  }
  if(status.error) {
       return (
              <div className="w-full h-full text-center flex items-center justify-center text-2xl">
                     There is an error While Getting Access your location
              </div>
       )
  }
  return props.children;
}
