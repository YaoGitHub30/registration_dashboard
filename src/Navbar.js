import React, { Component } from 'react'
import { AppBar,Toolbar,IconButton,Typography,InputBase,Switch} from "@mui/material";
import { Search } from "@mui/icons-material";
import { ClassNames } from "@emotion/react";
import { withStyles } from "@material-ui/core/styles";
// import { createStyles, makeStyles } from '@mui/styles';
import styles from "./styles/NavBarStyles";


class Navbar extends Component {
    render(){
    const {classes}= this.props;
  return (
    <div className={classes.root}>
      <AppBar postion="static" color="primary">
        <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
                <span role='img' aria-label='English'>🇦🇺</span>
            </IconButton>
            <Typography className={classes.title} color="inherit" variant="h6">
                App title
            </Typography>
            <Switch />
            <div className={classes.grow} >
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <Search />
                </div>
                <InputBase placeholder='search...' classes={{
                    root:classes.inputRoot,
                    input:classes.inputInput
                }}>
                </InputBase>
            </div>
            </div>
        </Toolbar>

      </AppBar>
    </div>
  );
}
}
export default withStyles(styles)(Navbar)