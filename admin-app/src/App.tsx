import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<div>
            <h1>Chào mừng đến với Admin App</h1>
            <p>Đây là trang chủ của ứng dụng quản trị.</p>
          </div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/customers" element={<div>Quản lý khách hàng</div>} />
          <Route path="/employees" element={<div>Quản lý nhân viên</div>} />
          <Route path="/orders" element={<div>Quản lý đơn hàng</div>} />
          <Route path="*" element={<div>404 - Trang không tìm thấy</div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
