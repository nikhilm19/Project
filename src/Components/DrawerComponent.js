import React from 'react';
import {Link} from 'react-router-dom';
//Material UI 
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//Imported 
import Home from './Home';

const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#3CB9AA',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    // necessary for content to be below app bar
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
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius, 
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(122),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } 
});

class DrawerComponent extends React.Component {
 
    // const classes = useStyles();
    // const theme = useTheme();
    //const [open, setOpen] = React.useState(false);
  
    state={
      open : false
    }

    handleDrawerOpen = () => {
      this.setState({ open: true})
    };
  
    handleDrawerClose = () => {
      this.setState({ open: false})
    };
    render(){
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label=" drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Guddan-Yogu Project
              </Typography>
              <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button variant="contained" size="medium" color="primary" >
                LOGIN
            </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>             
                <Link to="/">
                  <ListItem>
                    <ListItemIcon><HomeIcon  color={"primary"}/></ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItem>
                </Link>
                <Link to="/HospitalLocator">
                  <ListItem>
                    <ListItemIcon><LocalHospitalTwoToneIcon color={"primary"}/></ListItemIcon>
                    <ListItemText primary={"Hospital Finder"} />
                  </ListItem>
                </Link>
                <Link to="/PharmacyFinder">
                  <ListItem>
                    <ListItemIcon><LocationOnTwoToneIcon color={"primary"} /></ListItemIcon>
                    <ListItemText primary={"Pharmacy Locator"} />
                  </ListItem>
                </Link>
                <Link to="/feedback">
                  <ListItem>
                    <ListItemIcon><HomeIcon color={"primary"}/></ListItemIcon>
                    <ListItemText primary={"Feedback"} />
                  </ListItem>
                </Link>
                <Link to="/AboutUs">
                  <ListItem>
                    <ListItemIcon><GroupTwoToneIcon color={"primary"} /></ListItemIcon>
                    <ListItemText primary={"About Us"} />
                  </ListItem>
                </Link>
                <Link to="/Diseases">
                  <ListItem>
                    <ListItemIcon><GroupTwoToneIcon color={"primary"} /></ListItemIcon>
                    <ListItemText primary={"Diseases"} />
                  </ListItem>
                </Link>
            </List>
          
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: this.state.open,
            })}
          >
          <div className={classes.drawerHeader} />
            <div>
              <Home/>
            </div>
            
          </main>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(DrawerComponent); 
