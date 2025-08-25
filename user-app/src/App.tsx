import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<div>
            <h1>Chào mừng đến với User App</h1>
            <p>Đây là trang chủ của ứng dụng người dùng.</p>
          </div>} />
          <Route path="/user-profile" element={<div>Trang người dùng</div>} />
          <Route path="/payments" element={<div>Quản lý thu tiền</div>} />
          <Route path="/orders" element={<div>Quản lý đơn hàng</div>} />
          <Route path="*" element={<div>404 - Trang không tìm thấy</div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
