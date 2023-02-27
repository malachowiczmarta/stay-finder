import { useNavigate } from 'react-router';
import BaseLayout from 'src/components/BaseLayout';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <BaseLayout>
      <div className="flex-grow flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-lg mb-8">Something went wrong.</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleClick}
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ErrorPage;
