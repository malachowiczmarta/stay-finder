import { Link } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';

function App() {
  return (
    <BaseLayout>
      <div className="App">
        Home page
        <Link to="/hotels">See all stay</Link>
      </div>
    </BaseLayout>
  );
}

export default App;
