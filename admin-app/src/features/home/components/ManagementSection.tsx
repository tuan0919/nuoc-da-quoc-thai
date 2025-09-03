import { Link } from "react-router-dom";
import { FiUsers, FiUserPlus, FiTrendingUp, FiTerminal } from "react-icons/fi";
import { ReceiptIcon } from "lucide-react";

const managementItems = [
  {
    icon: FiUsers,
    text: "Quản lý Khách hàng",
    key: "customer",
    gradient: "from-blue-500 to-teal-400",
    to: "/customers",
  },
  {
    icon: FiUserPlus,
    text: "Quản lý nhân viên",
    key: "employee",
    gradient: "from-orange-400 to-pink-500",
    to: "/employee-management",
  },
  {
    icon: FiTrendingUp,
    text: "Thống kê",
    key: "stats",
    gradient: "from-purple-500 to-indigo-600",
    to: "/dashboard",
  },
  {
    icon: FiTerminal,
    text: "Xem logs hệ thống",
    key: "logs",
    gradient: "from-green-400 to-cyan-500",
    to: "/logs",
  },
  {
    icon: ReceiptIcon,
    text: "Quản lý hóa đơn",
    key: "order",
    gradient: "from-yellow-400 to-orange-500",
    to: "/orders",
  },
];

const ManagementButton = ({
  icon: Icon,
  text,
  gradient,
}: {
  icon: React.ElementType;
  text: string;
  gradient: string;
}) => (
  <button
    className={`relative w-full h-28 bg-gradient-to-br ${gradient} text-white font-bold rounded-2xl shadow-lg p-3 text-center text-base flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all duration-300`}
  >
    <Icon className="text-3xl drop-shadow-sm" />
    <span className="drop-shadow-sm text-sm font-semibold z-10">{text}</span>
  </button>
);

export function ManagementSection() {
  return (
    <section
      className="mb-6"
    >
      <h3 className="text-lg font-bold mb-3 text-gray-700 dark:text-gray-300">
        Mục quản lý:
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {managementItems.map((item, index) => (
          <div
            key={item.key}
          >
            <Link to={item.to}>
              <ManagementButton
                icon={item.icon}
                text={item.text}
                gradient={item.gradient}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
