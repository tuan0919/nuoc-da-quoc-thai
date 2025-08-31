import { motion } from 'framer-motion';

export const EmployeeListPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6"
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý nhân viên</h1>
        <p className="text-gray-600 mt-2">
          Danh sách và thông tin nhân viên
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Danh sách nhân viên</h2>
        {/* Employee list component sẽ được thêm vào đây */}
        <div className="text-gray-500">
          Chức năng quản lý nhân viên đang được phát triển...
        </div>
      </div>
    </motion.div>
  );
};
