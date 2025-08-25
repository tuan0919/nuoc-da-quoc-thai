import { Layout } from '../components/Layout';
import { View } from '../components/View';

export const DashboardPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Tổng quan về hoạt động kinh doanh
          </p>
        </div>
        <View />
      </div>
    </Layout>
  );
};
