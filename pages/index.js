import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel2/carousel";
import InfoSection from "../components/info_section/info_section";
import Simulator from "../components/simulator/simulator";
import Forms from "../components/forms2/forms";
import AboutUs from "../components/about_us/about_us";
import Footer from "../components/footer2/footer";
import { Typography } from '@material-ui/core';
import Header from "../components/signin/testin";
import SignInSide from "../components/signin/signin";


function Home() {
    return (
        <div>
            <SignInSide />
            {/* <ResponsiveDrawer /> */}
            {/* <Navbar />
            <Carousel/>
            <InfoSection/>
            <Typography variant="h4" component="h4" align="center">Simule seu investimento</Typography>
            <br></br>
            <Simulator user_type="investor"/>
            <Forms/>
            <AboutUs/>
            <Footer /> */}
        </div>
    )
}

export default Home;