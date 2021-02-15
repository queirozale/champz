import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel/carousel";
import InfoSection from "../components/info_section/info_section";
import Simulator from "../components/simulator/simulator";
import Forms from "../components/forms/forms";
import AboutUs from "../components/about_us/about_us";
import Footer from "../components/footer/footer";
import { Typography } from '@material-ui/core';


function Home() {
    return (
        <div>
            <Navbar />
            <Carousel/>
            <InfoSection/>
            <Typography variant="h4" component="h4" align="center">Simule seu investimento</Typography>
            <br></br>
            <Simulator user_type="investor"/>
            {/* <Forms/> */}
            {/* <AboutUs/> */}
            <Footer />
        </div>
    )
}

export default Home;