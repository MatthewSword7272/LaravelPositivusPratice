import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function AppLayout({children}) {
    return (
        <div className="min-h-screen flex flex-col px-24 py-9">
            <Header/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    )
}
