import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

export const CustomerDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6"
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Chi tiết khách hàng</h1>
        <p className="text-gray-600 mt-2">
          Thông tin chi tiết khách hàng ID: {id}
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
        {/* Customer detail component sẽ được thêm vào đây */}
        <div className="text-gray-500">
          Chi tiết khách hàng đang được phát triển...
        </div>
      </div>
    </motion.div>
  );
};
