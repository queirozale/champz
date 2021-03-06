import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green, yellow, 
        orange, pink, purple, teal } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

import SportsMmaIcon from '@material-ui/icons/SportsMma';
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import Button from "components/CustomButtons/Button.js";

import InvestorImage1 from "assets/img/muay-thai.png";
import InvestorImage2 from "assets/img/investor.png";
import InvestorImage3 from "assets/img/winner.png";
import AthleteImage1 from "assets/img/sponsorship.png";
import AthleteImage2 from "assets/img/benefits.png";
import AthleteImage3 from "assets/img/networking.png";

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
        "image": AthleteImage1,
        "title": "Bolsa Champz",
        "subtitle": "Acesse investimentos para a evolução da sua carreira"
      },
      "slide2": {
        "image": AthleteImage2,
        "title": "Benefícios exclusivos",
        "subtitle": "Esteja um passo a frente dos seus adversários com nossos benefícios"
      },
      "slide3": {
        "image": AthleteImage3,
        "title": "Comunidade",
        "subtitle": "Mais do que uma plataforma, somos uma rede de conexões"
      }
    }
  }

const AutoRotatingCarouselModal = (props) => {
  const handleOpen = props.handleOpen;
  const setHandleOpen = props.setHandleOpen;
  const isMobile = props.isMobile;
  const user_type = props.user_type;
  const href = user_type+"#forms_section";
  const data = page_data[user_type];

  const handleScroll = () => {
    const hash = "#aboutus_section";
    const element = document.getElementById(hash.replace("#", ""));
    
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
        block: "center"
      });
    }, 100);

    setHandleOpen({ open: false })
  };

  return (
    // <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Quero participar"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
        onStart={handleScroll}
      >
        <Slide
          media={
            <img src={data.slide1.image} />
          }
          mediaBackgroundStyle={{ backgroundColor: orange[200] }}
          style={{ backgroundColor: orange[600] }}
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
          mediaBackgroundStyle={{ backgroundColor: teal[200] }}
          style={{ backgroundColor: teal[800] }}
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
