import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { mainLoader } from './components/BaseLayout';
import ErrorPage from './pages/ErrorPage';
import HotelsPage from './pages/HotelsList/HotelsPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
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
