import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}){
    return(
        <>
        <header>
        <Navbar/>
        </header>
        <main className="mt-32">
        {children}
        </main>
        <div>
        <Footer/>
        </div>
        </>
    )
}