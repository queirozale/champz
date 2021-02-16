import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel/carousel";
import InfoSection from "../components/info_section/info_section";
import Simulator from "../components/simulator/simulator";
import MyForm from "../components/forms/forms";
import AboutUs from "../components/about_us/about_us";
import Footer from "../components/footer/footer";
import { Typography } from '@material-ui/core';
import Header from "../components/signin/testin";
import SignInSide from "../components/signin/signin";
import Grid from '@material-ui/core/Grid';


function InvestorPage() {
    return (
        <div>
            {/* <ResponsiveDrawer /> */}
            <Navbar />
            <Carousel/>
            <InfoSection/>
            <Typography variant="h4" component="h4" align="center">Simule seu investimento</Typography>
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
                <Typography variant="h4" component="h4" align="center">Se inscreva agora mesmo!</Typography>
                <Grid item xs={3}>
                    <MyForm/>
                </Grid>   
            </Grid>
            {/* <AboutUs/> */}
            <Footer />
        </div>
    )
}

export default InvestorPage;