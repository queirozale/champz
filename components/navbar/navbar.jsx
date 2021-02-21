import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SportsMmaIcon from '@material-ui/icons/SportsMma';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'black',
  },
  navButton: {
    color: 'black'
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  const navLink = [{title: 'Atletas'}, {title:'Investidor'}]
  const navButton = 'entrar'

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
      <div className={classes.root}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        {
          navLink.map((navLink, i) => <NavLink key={i} navLink={navLink} /> )
        }
      </div>
      <Button variant="contained" color="inherit" className={classes.navButton}>{navButton}</Button>
      </Toolbar>
    </AppBar>
  )
};

function NavLink(props){
  const classes = useStyles();
  return (
    <section>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <SportsMmaIcon />
        <Typography variant="h6" className={classes.title}>
          {props.navLink.title}
        </Typography>
      </IconButton>
    </section>
 )
}
