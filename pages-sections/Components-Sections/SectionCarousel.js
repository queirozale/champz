import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import InvestorImage1 from "assets/img/boxe.jpg";
import InvestorImage2 from "assets/img/jiu.jpg";
import InvestorImage3 from "assets/img/judo.jpg";
import AthleteImage1 from "assets/img/bg.jpg";
import AthleteImage2 from "assets/img/bg2.jpg";
import AthleteImage3 from "assets/img/bg3.jpg";

import RotatingCarousel from "components/RotatingCarousel/RotatingCarousel.js"

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);
const page_data = {
  "investor": {
    "slide1": {
      "image": InvestorImage1,
      "description": "Os atletas brasileiros possuem um enorme potencial"
    },
    "slide2": {
      "image": InvestorImage2,
      "description": "Mas precisam de apoio para seu crescimento"
    },
    "slide3": {
      "image": InvestorImage3,
      "description": "Você pode ser fundamental nesse processo"
    }
  },
  "athlete": {
    "slide1": {
      "image": InvestorImage1,
      "description": "Atletas de alto desempenho precisam de um suporte financeiro"
    },
    "slide2": {
      "image": InvestorImage2,
      "description": "Nós auxiliamos você nessa jornada"
    },
    "slide3": {
      "image": InvestorImage3,
      "description": "Para que você possa virar o jogo"
    }
  }
}

export default function SectionCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  const user_type = props.user_type;
  const data = page_data[user_type];
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={data.slide1.image} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      {data.slide1.description}
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={data.slide2.image}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      {data.slide2.description}
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={data.slide3.image} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      {data.slide3.description}
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <RotatingCarousel user_type={user_type} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
