import { useNavigate } from "react-router-dom";
import { FiSearch, FiLoader, FiUserPlus } from "react-icons/fi";
import { CustomerCard } from "../components/CustomerCard";
import { useFilterKeyword, useSetFilterKeyword } from "../stores/customer-management.ui.store";
import { getAllCustomersQueryOtpions } from "../query/query";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Customer } from "@/shared/types/customer";

const normalize = (s?: string) =>
  (s ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, ""); // bỏ dấu tiếng Việt để tìm “ko dấu”

export function Container() {
    const navigate = useNavigate();
    const [filterKeyWord, setFilterKeyWord] = [
        useFilterKeyword(),
        useSetFilterKeyword(),
    ]
    const { data, isPending, isError, refetch, error, isSuccess } = useQuery(
        getAllCustomersQueryOtpions
    );
    const customers = useMemo(() => {
        const kw = normalize(filterKeyWord);
        const matcher = (c : Customer) => c.customerName.toLowerCase().includes(kw);
        return (data?.result || []).filter(matcher)
    }, [data, filterKeyWord])
    return (
        <div
            className="max-w-7xl mx-auto"
        >
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Tìm kiếm khách hàng..."
                    value={filterKeyWord}
                    onChange={(e) => {
                        setFilterKeyWord(e.target.value)
                    }}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm"
                />
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <button
                    aria-label="Thêm khách hàng"
                    onClick={() => navigate("/admin/customer-management/new")}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-11 h-9 sm:w-12 sm:h-10 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                    <FiUserPlus className="text-lg" />
                </button>
            </div>

            {isPending && (
                <div className="flex justify-center items-center h-64">
                    <FiLoader className="animate-spin text-4xl text-blue-500" />
                </div>
            )}

            {!isPending && isError && (
                <div className="text-center text-red-500 bg-red-100/80 dark:bg-red-900/50 p-4 rounded-lg backdrop-blur-sm">
                    {error.message}
                    <button
                        onClick={() => refetch()}
                        className="ml-4 px-4 py-1 bg-red-500 text-white rounded-md"
                    >
                        Thử lại
                    </button>
                </div>
            )}

            {isSuccess && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {customers.map((customer) => (
                        <CustomerCard
                            key={customer.customerId}
                            customer={customer}
                            onDelete={undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}