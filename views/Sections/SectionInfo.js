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

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionInfo() {
  const classes = useStyles();

  return (
    <div className={classes.sections} id="info_section">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Entenda o processo</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Na Champz investir em atletas de alto desempenho é muito fácil
            </h3>
          </div>
          <SectionCarousel />
          <GridContainer justify="center">
          <RotatingCarousel />
          </GridContainer>
        </div>
        <div className={classes.space70} />
      </div>
    </div>
  );
}
