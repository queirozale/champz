import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image1 from "assets/img/carlos_avatar.jpg";
import image2 from "assets/img/helton_avatar.jpg";
import image3 from "assets/img/arthur_avatar.jpg";
import image4 from "assets/img/alessandro_avatar.jpg";
import Avatar from '@material-ui/core/Avatar';

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
}));
export default function SectionAboutUs() {
  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <div className={classes.section} id="aboutus_section">
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>Sobre Nós</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Carlos Gomes</h4>
              <Avatar alt={"carlos"} src={image1} className={classes2.large} />
              <h5>Diretor de Operações</h5>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Helton Kenji</h4>
              <Avatar alt={"helton"} src={image2} className={classes2.large} />
              <h5>Diretor de Esportes</h5>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Arthur Barcelos</h4>
              <Avatar alt={"arthur"} src={image3} className={classes2.large} />
              <h5>Diretor Administrativo</h5>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Alessandro Queiroz</h4>
              <Avatar alt={"carlos"} src={image4} className={classes2.large} />
              <h5>Diretor de Tecnologia</h5>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
