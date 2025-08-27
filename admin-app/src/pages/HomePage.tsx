import { ManagementSection } from '@/features/home';
import { useValidateTokenQuery } from '@/features/login/query/queries';
import { BottomNav } from '@/shared/components/BottomNav';
import { TopNav } from '@/shared/components/TopNav';
import { Navigate } from 'react-router-dom';

export const HomePage = () => {

  const validateQuery = useValidateTokenQuery();

  if (!validateQuery.isLoading && !validateQuery.data) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[url('https://maxartkiller.com/website/gomobileux2/HTML/assets/img/bgshapes.png')]">
      <TopNav />
      <main className="flex-1 overflow-y-auto px-3 pt-3 sm:px-4">
        <ManagementSection/>
      </main>
      <BottomNav />
    </div>
  );
};
