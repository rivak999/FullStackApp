import React from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import { StyledTitle , StyledSubTitle ,StyledTitle2, StyledButton,StyledButton2,Colors, ButtonGroup, StyledContainer } from '../components1/Styles';
import GestionCandidats from './GestionCandidats';
import GestionEntretiens from './GestionEntretiens';
import GestionOffres from './GestionOffres';
import Button from '@material-ui/core/Button';
const  Dashboard=()=>{

    return(
   
       <div>
            
            <h1 size={45} style={{height:150,fontSize:50}}>
            <b style={{color:"#4169E1"}}>Gestion et suivi des chercheurs d'emploi</b>
             </h1>
            <p align="center" style={{height:450}}>
          <Link to={"/GestionDesCandidats"}><Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "350px",
          maxHeight: "80px",minWidth: "350px",fontSize:20,
          minHeight: "80px"}} >Gestion des candidats</Button></Link><br/><br/>
        <Link to={"/GestionDesOffres"}><Button variant="contained" size="large" style={{fontSize:20,color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "350px",
          maxHeight: "80px",minWidth: "350px",
          minHeight: "80px"}}>Gestion des offres</Button></Link><br/><br/>
          <Link to={"/GestionDesEntretiens"}><Button variant="contained" size="large" style={{fontSize:20,color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "350px",
          maxHeight: "80px",minWidth: "350px",
          minHeight: "80px"}}>Gestion des entretiens</Button></Link><br/><br/>
          <Link to={"/"}><Button variant="contained" size="large" style={{fontSize:20,color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "350px",
          maxHeight: "80px",minWidth: "350px",
          minHeight: "80px"}}>Quitter</Button></Link>
     
        </p>
        <Switch>
        <Route exact path="/GestionDesCandidats" component={GestionCandidats} />
              <Route exact path="/GestionDesOffres" component={GestionOffres} />
              <Route exact path="/GestionDesEntretiens" component={GestionEntretiens} />
            </Switch>
        </div>
        
        
    );
            };
export default Dashboard;

