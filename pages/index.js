import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel/carousel";
import InfoSection from "../components/info_section/info_section";
import Simulator from "../components/simulator/simulator";
import Forms from "../components/forms/forms";
import AboutUs from "../components/about_us/about_us";
import Footer from "../components/footer/footer";


function Home() {
    return (
        <div>
            <Navbar />
            <Carousel/>
            <InfoSection/>
            {/* <Simulator/> */}
            <Forms/>
            {/* <AboutUs/> */}
            <Footer />
        </div>
    )
}

export default Home;