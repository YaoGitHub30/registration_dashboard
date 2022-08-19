import React, {useContext} from "react";
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
import {LanguageContext} from './contexts/LanguageContext'
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
function Navbar(props){
    const {isDarkMode,toggleTheme}=useContext(ThemeContext);    
    const { classes } = props;
    const {language} = useContext(LanguageContext);
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

export default withStyles(styles)(Navbar);
