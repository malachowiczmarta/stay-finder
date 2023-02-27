import { Outlet } from 'react-router';
import BaseLayout from 'src/components/BaseLayout';

export default function MainPage() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}
