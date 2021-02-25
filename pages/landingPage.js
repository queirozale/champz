import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionInfo from "pages-sections/Components-Sections/SectionInfo.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);
const page_data = {
    "investor": {
        "image": require('assets/img/dana_white.jpg'),
        "title": "Investidor",
        "description": "Impulsione os melhores atletas"
    },
    "athlete": {
        "image": require('assets/img/mcgregor.png'),
        "title": "Atleta",
        "description": "Desperte o campeão em você"
    }
}

export default function LandingPage(props) {
  const classes = useStyles();
  const user_type = props.user_type;
  const data = page_data[user_type];

  return (
    <div>
      <Header
        brand="Champz"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax image={data.image}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{data.title}</h1>
                <h3 className={classes.subtitle}>
                  {data.description}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionInfo user_type={user_type} />
      </div>
      <Footer />
    </div>
  );
}
