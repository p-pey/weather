import '../assets/styles/index.css';
import { LocationProvider } from './LocationProvider';
import { Weather } from './weather/weather';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'lib/axios';
import 'lib/firebase';
const queryClient = new QueryClient();

function Root() {
  return (
    <LocationProvider>
      <QueryClientProvider client={queryClient}>
        <div className="bg-gray-300 h-full w-full flex items-center justify-center p-24">
          <Weather />
        </div>
      </QueryClientProvider>
    </LocationProvider>
  );
}

export default Root;
