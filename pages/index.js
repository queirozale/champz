import React, { Component } from "react";
import Router from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";

import image from "assets/img/balboa-background.jpg";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

// export default class Index extends Component {
//   componentDidMount = () => {
//     Router.push("/components");
//   };

//   render() {
//     return <div />;
//   }
// }

const Home = () => {
  const classes = useStyles();
  return (
    <div id="navbar" className={classes.navbar}>
      <div
        className={classes.navigation}
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <SectionTabs />
      </div>
    </div>
  );
};

export default Home;