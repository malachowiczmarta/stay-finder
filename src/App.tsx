import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { mainLoader } from './components/BaseLayout';
import Spinner from './components/Spinner';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';

const MainPage = lazy(() => import('./pages/MainPage'));
const HotelsPage = lazy(() => import('./pages/HotelsPage/HotelsPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}>
        <MainPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <ErrorPage />
      },
      {
        path: 'hotels',
        element: (
          <Suspense fallback={<Spinner />}>
            <HotelsPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
        loader: mainLoader
      },
      {
        path: '*',
        element: <ErrorPage />
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
