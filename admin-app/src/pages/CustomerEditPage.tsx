import { EditForm, getCustomerByIdQueryOptions, Navbar, useCustomerEditStore } from "@/features/customer-edit";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const CustomerEditPage = () => {
    const { id } = useParams<{ id: string }>();
    const {data, isLoading} = useQuery(getCustomerByIdQueryOptions(Number(id)));
    const setCustomer = useCustomerEditStore(s => s.setCustomer);
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>Customer not found</div>;
    setCustomer(data);
    return (
        <div className="min-h-screen flex flex-col bg-[url('https://maxartkiller.com/website/gomobileux2/HTML/assets/img/bgshapes.png')]">
            <Navbar />
            <main
                className="flex-1 overflow-y-auto px-3 pt-4 pb-24 sm:px-4"
            >
                <EditForm />
            </main>
        </div>
    );
};