import React from'react';
import { useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Switch, Route,Link} from 'react-router-dom';
import Dashboard from './Dashboard';



const useStyles=makeStyles((theme)=>({
    root:{
        '& > *':{
            margin:theme.spacing(1),
            width:'25ch'
           ,
        },
    },
}

));
export default function Offre1()
{  

 

  const [name, setName] = useState('');
  const handleInput1 = event => {
  setName(event.target.value);
  }
  const [delay, setDelay] = useState('');
  const handleInput2 = event => {
  setDelay(event.target.value);
  }
  const [id, setId] = useState('');
  const handleInput4 = event => {
  setId(event.target.value);
  }

  function SaveChamps() {
    
    const placement={id,name,delay}
    console.log(placement)
    
    fetch("http://localhost:8081/App/SavePlacement",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(placement)
    }).then(()=>{
      console.log("New placement added")
    })
   

  }
  const[placement,setPlacement]=useState([]);
  


  function ViderChamps() {
 
    setName("");
    setDelay("");
    setId("");
  
  }
  function GetChamps() {
 
    const getplacement=async()=>{
      const res=await fetch("http://localhost:8081/App/getAllPlacements");
      const getpl=await res.json();
       console.log(getpl);
      setPlacement(await getpl);
    }
    getplacement();
  
  }
 
  
   
  
 
  function Edit() {
    
    const placement1={id,name,delay}
    console.log(placement1)
    
    fetch("http://localhost:8081/App/UpdatePlacement",{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(placement1)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
   

  }
 
  function deleteDataById() {

    const placement1={id,name,delay}
    console.log(placement1)
    
    fetch("http://localhost:8081/App/DeletePlacement",{
      method:"Delete",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(placement1)
    })
    .then(res => res.json())
   .then(data => console.log(data))
    .catch(err => console.log(err));
   

  }
  
  const classes=useStyles();
    const paperStyle={padding:'50px 20px', width:850, height:550, margin:"20px auto"}
    return(
    <Container>
        <Paper elevation={3} style={paperStyle}>
    <h1 style={{color:"blue"}}>Gestion des offres de travail</h1><br/>
    <h3 style={{color:"blue"}}>Veuillez entrer les informations concernant les offres de travail</h3><br/>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField  label="Id"  inputProps={{ style: {color: 'blue'}}} InputLabelProps={{style : {margin:"-5px",color : 'blue',"font-weight":"bold"}}} value={id} onChange={handleInput4} />
    <TextField  label="Nom"  inputProps={{ style: {color: 'blue'}}} InputLabelProps={{style : {margin:"-5px",color : 'blue',"font-weight":"bold"}}} value={name} onChange={handleInput1} />
    <TextField type="date" label="Delay"  inputProps={{ style: {color: 'blue',"text-align":"center"}}} InputLabelProps={{style : {color : 'blue',margin:"-5px","font-weight":"bold"}}} value={delay} onChange={handleInput2}  /><br/><br/><br/>
        <br/><br/>
        
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",maxHeight: "55px",minWidth: "200px",minHeight: "55px"}}  onClick={() => Edit()}>Modifier</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}}  onClick={() => deleteDataById()}>Supprimer</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => ViderChamps()}>Vider les Champs</Button>
          <Link to={"/dashboard"}><Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}}>Quitter</Button></Link>
         <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => GetChamps()}>Afficher les champs</Button>
          <Button  variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",maxHeight: "55px",minWidth: "200px",minHeight: "55px"}} onClick={() => SaveChamps()}>Ajouter</Button><br/>
          <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
         
        </Switch>
</form>
  </Paper>
   
  {
  placement.map(placementget=>(
    
       <Paper elevation={6} style={{padding:"10px",margin:"10px","text-align":"left"}} width="850px" key={placementget.id}>
        <b><h3 style={{color:"blue"}}>Placement {placementget.id}</h3></b><br/>
        <b style={{color:"blue"}}>Id:&nbsp;&nbsp; {placementget.id}</b><br/>
        <b style={{color:"blue"}}>Nom:&nbsp;&nbsp; {placementget.name}</b><br/>
        <b style={{color:"blue"}}>Délai:&nbsp;&nbsp;{placementget.delay}</b><br/>
       </Paper>
   ))}
   </Container>
 
    );
}