import { Navbar } from "@/features/customer-management/components/Navbar"
import { Container } from "@/features/customer-management/containers/Container"

export const CustomerManagementPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[url('https://maxartkiller.com/website/gomobileux2/HTML/assets/img/bgshapes.png')]">
            <Navbar />
            <main
                className="flex-1 overflow-y-auto px-3 pt-4 pb-24 sm:px-4"
            >
                <Container/>
            </main>
        </div>
    )
}