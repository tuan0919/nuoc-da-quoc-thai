import { FaIceCream, FaCube, FaMoneyBillWave } from "react-icons/fa6";
import { StatCard } from "./StatCard";
export function DailyStatsSection() {
  const statsData = [
    {
      gradient: "from-pink-500 via-pink-400 to-rose-500",
      icon: <FaIceCream className="text-white text-xl drop-shadow-sm" />,
      title: "Đá cây",
      value: `5 cây`,
    },
    {
      gradient: "from-blue-500 via-sky-400 to-cyan-500",
      icon: <FaCube className="text-white text-xl drop-shadow-sm" />,
      title: "Đá bi",
      value: `15 bịch`,
    },
    {
      gradient: "from-emerald-500 via-green-400 to-teal-500",
      icon: <FaMoneyBillWave className="text-white text-xl drop-shadow-sm" />,
      title: "Doanh thu",
      value: (150000).toLocaleString("vi-VN"),
    },
  ];

  return (
    <section
      className="grid grid-cols-3 gap-2 sm:gap-3 my-4"
    >
      {statsData.map((stat, i) => (
        <div key={i}>
          <StatCard {...stat} />
        </div>
      ))}
    </section>
  );
}
