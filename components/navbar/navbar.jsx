import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
import {Link} from 'react-scroll'

// const styles = theme => ({
//   root: {
//       background: 'white',
//       position: '-webkit-sticky',
//       position: 'sticky',
//       top: 20,
//       bottom: 20, 
//       paddingTop: '40px',
//       paddingBottom: '40px',
//       zIndex: 5,
//   },
//   details: {
//       display: 'flex'
//   },
//   progressWrapper: {
//       marginTop: theme.spacing(2)
//   },
//   linearProgress: {
//       height: 20
//   },
// });
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    bottom: 20, 
    zIndex: 5,
},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#629be3"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <SportsMmaIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Atletas
          </Typography>
          <Button color="inherit" className={classes.menuButton}>Home</Button>
          <Button color="inherit" className={classes.menuButton}><Link  to="info_section" spy={true} smooth={true}>Como funciona</Link></Button>
          <Button color="inherit" className={classes.menuButton}><Link  to="simulator" spy={true} smooth={true}>Simulador</Link></Button>
          <Button color="inherit" className={classes.menuButton}><Link  to="subscription" spy={true} smooth={true}>Quero participar</Link></Button>
          <Button color="inherit" className={classes.menuButton}><Link  to="about_us" spy={true} smooth={true}>Sobre nós</Link></Button>
        </Toolbar>
      </AppBar>
    </div>

  )
};

export default Navbar;
