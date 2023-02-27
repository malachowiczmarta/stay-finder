import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import BaseLayout, { mainLoader } from './components/BaseLayout';
import HotelsPage from './pages/HotelsList/HotelsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'hotels',
        element: <HotelsPage />,
        loader: mainLoader
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
