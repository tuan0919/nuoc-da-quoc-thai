import { AuthService } from '@/features/login';
import { useAuthenticateStore } from '@/shared/auth.store';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';

export const HomePage = () => {
  const features = [
    {
      title: 'Dashboard',
      description: 'Tổng quan về hoạt động kinh doanh',
      path: '/dashboard',
      icon: '📊',
      color: 'bg-blue-500'
    },
    {
      title: 'Quản lý khách hàng',
      description: 'Danh sách và thông tin khách hàng',
      path: '/customers',
      icon: '👥',
      color: 'bg-green-500'
    },
    {
      title: 'Quản lý nhân viên',
      description: 'Danh sách và thông tin nhân viên',
      path: '/employees',
      icon: '👨‍💼',
      color: 'bg-purple-500'
    },
    {
      title: 'Quản lý đơn hàng',
      description: 'Danh sách và trạng thái đơn hàng',
      path: '/orders',
      icon: '📦',
      color: 'bg-orange-500'
    }
  ];

  const token = useAuthenticateStore(s => s.token);
  if (!token) return <Navigate to="/login" replace />;

  const { data: isValid, isLoading, isError } = useQuery({
    queryKey: ["validateToken", token],
    queryFn: () => AuthService.validateToken(token),
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    retry: 0,
  });

  if (isLoading) {
    return <div className="p-6">Đang kiểm tra phiên đăng nhập…</div>;
  }
  
  if (isError || isValid === false) {
    return <Navigate to="/login" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chào mừng đến với Admin App
          </h1>
          <p className="text-xl text-gray-600">
            Hệ thống quản trị dành cho cửa hàng nước đá Quốc Thái
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={feature.path}
                className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Thống kê nhanh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">150</div>
              <div className="text-gray-600">Khách hàng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">25</div>
              <div className="text-gray-600">Nhân viên</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1,234</div>
              <div className="text-gray-600">Đơn hàng</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
