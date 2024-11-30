import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function AppLayout({ children }) {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:px-25 px-5 pt-7 space-y-32">
                <Header />
                <main className="flex-grow">{children}</main>
            </div>

            <Footer />
        </>
    );
}
