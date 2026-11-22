import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Programs from "./components/Programs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

    return (

        <>

            <Navbar />

            <main>

                <Hero />

                <Stats />

                <Services />

                <Gallery />

                <Programs />

                <Pricing />

                <Contact />

            </main>

            <Footer />

        </>

    );

}

export default App;
