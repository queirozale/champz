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

import SectionCarousel from "./SectionCarousel.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
const page_data = {
  "investor": {
    "description": "Investir na Champz é muito fácil"
  },
  "athlete": {
    "description": "Captar recursos na Champz é simples"
  }
}

export default function SectionBasics(props) {
  const classes = useStyles();
  const user_type = props.user_type;
  const data = page_data[user_type];
  return (
    <div className={classes.sections} id="info_section">
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Como Funciona</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              {data.description}
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <SectionCarousel user_type={user_type} />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
