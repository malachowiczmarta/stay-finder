import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { mainLoader } from './components/BaseLayout';
import ErrorPage from './pages/ErrorPage';
import HotelsPage from './pages/HotelsPage/HotelsPage';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <ErrorPage />
      },
      {
        path: 'hotels',
        element: <HotelsPage />,
        errorElement: <ErrorPage />,
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
