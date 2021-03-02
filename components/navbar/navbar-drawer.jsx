import React from "react"
import clsx from 'clsx'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SportsMmaIcon from '@material-ui/icons/SportsMma'
import AssessmentIcon from '@material-ui/icons/Assessment'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'black',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    color: 'black'
  }
}));

export default function NavbarDrawer(props) {
  const classes = useStyles();
  const navLink = [{title: 'Atletas'}, {title:'Investidor'}]
  const navButton = 'entrar'
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () =>{setOpen(true)}
  const handleDrawerClose = () =>{setOpen(false)}

  return (
    <div>
    <AppBar position="static" className={clsx(classes.appBar, {[classes.appBarShift]: open })}>
      <Toolbar>
        <div className={classes.root}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {
            navLink.map((navLink, i) => <NavLink key={i} navLink={navLink} /> )
          }
        </div>
        <Button variant="contained" color="inherit" className={classes.navButton}>{navButton}</Button>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography variant="h5" >minimizar...</Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />

    </Drawer>
    <main className={clsx(classes.content, {[classes.contentShift]: open})}>
      <div className={classes.drawerHeader} />
      <Content/> 
    </main>
</div>
  )
}

function NavLink(props){
  const classes = useStyles()
  return (
    <section>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          {props.navLink.title === 'Investidor' ? <AssessmentIcon /> : <SportsMmaIcon/>}
          <Typography variant="h6" className={classes.title}>
            {props.navLink.title}
          </Typography>
        </IconButton>
    </section>
 )
}

function Content(props){
  const classes = useStyles()
  return (
    <section>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography>
    </section>
 )
}
