import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Slide from "react-swipeable-views";
// import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

import SportsMmaIcon from '@material-ui/icons/SportsMma';
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import Button from "components/CustomButtons/Button.js";

import InvestorImage1 from "assets/img/boxe.jpg";
import InvestorImage2 from "assets/img/jiu.jpg";
import InvestorImage3 from "assets/img/judo.jpg";
import AthleteImage1 from "assets/img/bg.jpg";
import AthleteImage2 from "assets/img/bg2.jpg";
import AthleteImage3 from "assets/img/bg3.jpg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
const page_data = {
    "investor": {
      "slide1": {
        "image": InvestorImage1,
        "title": "Escolha seu Champz",
        "subtitle": "Conheça todos os atletas da Champz"
      },
      "slide2": {
        "image": InvestorImage2,
        "title": "Invista na carreira",
        "subtitle": "Acelere a carreira do seu atleta para que ele chegue no topo"
      },
      "slide3": {
        "image": InvestorImage3,
        "title": "Ganhe com as conquistas",
        "subtitle": "Parte das premiações do seu atleta vai direto para você"
      }
    },
    "athlete": {
      "slide1": {
        "image": InvestorImage1,
        "title": "#",
        "subtitle": "#"
      },
      "slide2": {
        "image": InvestorImage2,
        "title": "#",
        "subtitle": "#"
      },
      "slide3": {
        "image": InvestorImage3,
        "title": "#",
        "subtitle": "#"
      }
    }
  }

const AutoRotatingCarouselModal = (props) => {
  const handleOpen = props.handleOpen;
  const setHandleOpen = props.setHandleOpen;
  const isMobile = props.isMobile;
  const user_type = props.user_type;
  const data = page_data[user_type];
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img src={InvestorImage1} />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title={data.slide1.title}
          subtitle={data.slide1.subtitle}
        />
        <Slide
          media={
            <img src={data.slide2.image} />
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title={data.slide2.title}
          subtitle={data.slide2.subtitle}
        />
        <Slide
          media={
            <img src={data.slide3.image} />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title={data.slide3.title}
          subtitle={data.slide3.subtitle}
        />
      </AutoRotatingCarousel>
    </div>
  );
};

function RotatingCarousel(props) {
  const classes = useStyles();
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  const user_type = props.user_type;
  return (
    <>
      <Button color="info" round onClick={handleClick}>
        <SportsMmaIcon className={classes.icons} /> Como funciona
      </Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
        user_type={user_type}
      />
    </>
  );
}

export default RotatingCarousel;
