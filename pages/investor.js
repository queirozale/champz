import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel2/carousel";
import InfoSection from "../components/info_section/info_section";
import InfoSection2 from "../components/info_section/info_section2";
import Simulator from "../components/simulator/simulator";
import MyForm from "../components/forms2/forms";
import Footer from "../components/footer2/footer";
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AboutUs from "../components/about_us/about_us";
import AutoRotatingCarouselModal from "../components/Carousel/RotatingCarousel";
// import AutoRotatingCarouselModal from "../components/carousel/carousel2";

function InvestorPage() {
    return (
        <div>
            <Navbar />
            <Carousel/>
            <InfoSection />
            <br></br>
            <Simulator user_type="investor"/>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <MyForm/>
                </Grid>   
            </Grid>
            <AboutUs />
            <AutoRotatingCarouselModal />
            <Footer />
        </div>
    )
}

export default InvestorPage;