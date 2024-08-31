import '../assets/styles/index.css';
import { Container } from './weather/container';

function Root() {
  return (
    <div className="bg-gray-300 h-full w-full flex items-center justify-center p-24">
      <Container />
    </div>
  );
}

export default Root;
