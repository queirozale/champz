import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import RotatingCarousel from "components/Carousel/RotatingCarousel.js";
import SectionCarousel from "components/Carousel/SectionCarousel.js";
import MyForm from "components/Forms/SubForms.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionForms() {
  const classes = useStyles();

  return (
    <div className={classes.sections} id="simulator_section">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Quero participar</h2>
        </div>
        <div className={classes.space40} />
        <div id="inputs">
          <div className={classes.title}>
            <h3>Se inscreva agora mesmo e saiba mais</h3>
          </div>
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={5}>
              <MyForm />
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
