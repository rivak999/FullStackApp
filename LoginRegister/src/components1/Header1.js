import * as React from "react";
  
// importing material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow:1,
  },
  title:{
    flexGrow:1,
  },
}

));
 
export default function Header1() {
  const classes= useStyles();
  return (
    <div className={classes.root}>
      <AppBar  position="absolute">
        
       <Toolbar>
       <Typography variant="h4" className={classes.title}
            component="div" sx={{ flexGrow: 1 }}>
             <b> Gestion des Candidats</b>
          </Typography>
       </Toolbar>
      </AppBar>
      </div>
  );
}