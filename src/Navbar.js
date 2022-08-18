import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { ClassNames } from "@emotion/react";
import { withStyles } from "@material-ui/core/styles";
// import { createStyles, makeStyles } from '@mui/styles';
import styles from "./styles/NavBarStyles";
import { ThemeContext } from './contexts/ThemeContext';
import {withLanguageContext} from './contexts/LanguageContext'
const content = {
    english: {
      search: "Search",
      flag: "🇬🇧"
    },
    french: {
      search: "Chercher",
      flag: "🇫🇷"
    },
    spanish: {
      search: "Buscar",
      flag: "🇪🇸"
    }
  };
class Navbar extends Component {
    static contextType=ThemeContext;
    render() {
    const {isDarkMode,toggleTheme}=this.context;    
    const { classes } = this.props;
    const {language} = this.props.languageContext;
    const {flag,search}=content[language];
    
    return (
      <div className={classes.root}>
        <AppBar postion="static" color={isDarkMode?'default':'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="English">
                {flag}
              </span>
            </IconButton>
            <Typography className={classes.title} color="inherit" variant="h6">
              {language[0].toUpperCase()+language.substr(1)}
            </Typography>
            <Switch  onChange={toggleTheme} />
            <div className={classes.grow}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search />
                </div>
                <InputBase
                  placeholder={`${search}...`}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                ></InputBase>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));
