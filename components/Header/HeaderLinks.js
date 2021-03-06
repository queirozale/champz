/*eslint-disable*/
import React from "react";
// import Link from "next/link";
import {Link} from 'react-scroll';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link to="info_section" spy={true} smooth={true} className={classes.navLink}>
            Como funciona
          </Link>
        </Button>
        {/* <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link to="simulator_section" spy={true} smooth={true} className={classes.navLink}>
            Simulador
          </Link>
        </Button> */}
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link to="forms_section" spy={true} smooth={true} className={classes.navLink}>
            Quero participar
          </Link>
        </Button>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link to="aboutus_section" spy={true} smooth={true} className={classes.navLink}>
            Sobre nós
          </Link>
        </Button>
      </ListItem>
    </List>
  );
}
