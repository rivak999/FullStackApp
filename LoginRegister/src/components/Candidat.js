import React from'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useState,useEffect } from 'react';
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
  
export default function Candidat(){



const [id, setId] = useState('');
const handleInput6 = event => {
setId(event.target.value);
}

const [fname, setFname] = useState('');
const handleInput1 = event => {
setFname(event.target.value);
}
  const [lname, setLname] = useState('');
  const handleInput2 = event => {
  setLname(event.target.value);
  }
  const [nameOpt, setNameopt] = useState('');
  const handleInput3 = event => {
  setNameopt(event.target.value);
  }
  const [opt, setOpt] = useState('');
  const handleInput4 = event => {
  setOpt(event.target.value);
 
  }
  const [username, setUsername] = useState('');
  const handleInput5 = event => {
  setUsername(event.target.value);
  }

  function SaveChamps() {
    
    const candidat={fname,lname,nameOpt,opt,username}
    console.log(candidat)
    
    fetch("http://localhost:8081/App/SaveCandidat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(candidat)
    }).then(()=>{
      console.log("New candidat added")
    })
   

  }
  

  function ViderChamps() {
    setId("");
    setFname("");
    setLname("");
    setOpt("");
    setNameopt("");
    setUsername("");
  }
  
 

 
 const[stage,setStage]=useState([]);
  useEffect(()=>{
    const getstage=async()=>{
      const res=await fetch("http://localhost:8081/App/getAllStages");
      const getstg=await res.json();
       console.log(getstg);
      setStage(await getstg);
    }
    getstage();
  },[]);

  const[placement,setPlacement]=useState([]);
  useEffect(()=>{
    const getplacement=async()=>{
      const res=await fetch("http://localhost:8081/App/getAllPlacements");
      const getpl=await res.json();
       console.log(getpl);
      setPlacement(await getpl);
    }
    getplacement();
  },[]);

 
 
  const[candidat,setCandidat]=useState([]);
  function GetChamps() {
    let i=0;
    const getcandidat=async()=>{
      const res=await fetch("http://localhost:8081/App/getAllCandidats");
      const getcan=await res.json();
      setCandidat(await getcan);
      console.log(getcan.username);

     
    }
    getcandidat();
  
  }
    function DeleteCandidat(){
      const candidat={id,fname,lname,nameOpt,opt,username}
  console.log(candidat)
  
  fetch("http://localhost:8081/App/DeleteCandidat",{
    method:"Delete",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(candidat)
  })
  .then(res => res.json())
 .then(data => console.log(data))
  .catch(err => console.log(err));
}
function UpdateCandidat() {
    
  const candidat={id,fname,lname,nameOpt,opt,username}
  console.log(candidat)
  
  fetch("http://localhost:8081/App/updateCandidat",{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(candidat)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
 

}
  const classes=useStyles();
    const paperStyle={padding:'50px 20px', width:880, height:600, margin:"20px auto"}
    
    return(

    <Container>
    
        <Paper elevation={3} style={paperStyle}>

    <h2 style={{color:"blue"}}>Veuillez entrer les informations du candidat</h2><br/>
    <TextField  label="Id" inputProps={{ style: {color: 'blue'}}} InputLabelProps={{style : {color : 'blue',"font-weight":"bold",margin:"-5px"}}} value={id} onChange={handleInput6} />&nbsp;&nbsp;&nbsp;
   <TextField  inputProps={{ style: {color: 'blue'}}} label="Prénom" InputLabelProps={{style : {color : 'blue',"font-weight":"bold",margin:"-5px"} }} value={fname} onChange={handleInput1} />&nbsp;&nbsp;&nbsp;
   <TextField  inputProps={{ style: {color: 'blue'}}} label="Nom" InputLabelProps={{style : {color : 'blue',"font-weight":"bold",margin:"-5px"} }} value={lname}  onChange={handleInput2} />&nbsp;&nbsp;&nbsp;
   <TextField  inputProps={{ style: {color: 'blue'}}} label="Username" InputLabelProps={{style : {color : 'blue',"font-weight":"bold",margin:"-5px"} }} value={username}  onChange={handleInput5} />
  <br/><br/><br/>
  <form className={classes.root} noValidate autoComplete="off">
   <FormControl>
   <InputLabel style={{color:"blue","font-weight":"bold",margin:"-5px"}} id="demo-simple-select-label">Options désirées</InputLabel>
   <Select stylename="options" style={{color:"blue","font-weight":"bold","text-align":"left"}} labelId="demo-simple-select-label" label="options désirées" inputProps={{ style: {color: 'blue'}}}  InputLabelProps={{style : {color : 'blue',"font-weight":"bold"} }}  value={opt} onChange={handleInput4}>
   <MenuItem style={{color:"blue","font-weight":"bold"}} value="Stage">Stage</MenuItem>
   <MenuItem style={{color:"blue","font-weight":"bold"}} value="Placement">Placement</MenuItem>
   </Select>
   </FormControl>

<select name="placement"  label="Placement"  style={{"padding-bottom":"10px",border:"solid 1px blue","font-size":14,"padding-top":"10px",color:"blue","font-weight":"bold","text-align":"left"}} value={nameOpt} onChange={handleInput3}>
  <option style={{color:"blue","font-weight":"bold"}}>Nom de l'offre de travail</option>
  {
    
    placement.map((placementget)=>(
      <option key={placementget.id}  style={{color:"blue","font-weight":"bold"}}>{placementget.name}</option>
    )
    )
  }
</select>&nbsp;&nbsp;&nbsp;
<select name="stage" label="Stage"  style={{"padding-bottom":"10px",border:"solid 1px blue","font-size":14,"padding-top":"10px",color:"blue","font-weight":"bold","text-align":"left"}} value={nameOpt} onChange={handleInput3} >
  <option style={{color:"blue","font-weight":"bold"}}>Nom du stage</option>
  {
    stage.map((stageget)=>(
      <option key={stageget.id}  style={{color:"blue","font-weight":"bold"}}>{stageget.name}</option>
    )
   

    )
  }
</select><br/><br/><br/>
          
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",maxHeight: "55px",minWidth: "200px",minHeight: "55px"}}  onClick={() => UpdateCandidat()}>Modifier</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => DeleteCandidat()}>Supprimer</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}}  onClick={() => ViderChamps()} >Vider les Champs</Button><br/>
         <Link to={"/dashboard"}> <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}}>Quitter</Button></Link>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => GetChamps()}>Afficher les champs</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",maxWidth: "200px",maxHeight: "55px",minWidth: "200px",minHeight: "55px"}} onClick={() => SaveChamps()}>Ajouter</Button><br/>
          <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
         
        </Switch>
      
       
   
 
  </form>
</Paper>


  {
  candidat.map(candidatget=>(
    
       <Paper elevation={6} style={{padding:"10px",margin:"10px","text-align":"left"}}  key={candidatget.id}>
        <b><h3 style={{color:"blue"}}>Candidat {candidatget.id}</h3></b>
        <br/><b style={{color:"blue"}}>Id:&nbsp;&nbsp;{candidatget.id}</b><br/>
        <b style={{color:"blue"}}>Prénom:&nbsp;&nbsp;{candidatget.fname}</b><br/>
        <b style={{color:"blue"}}>Nom:&nbsp;&nbsp;{candidatget.lname}</b><br/>
        <b style={{color:"blue"}}>Option:&nbsp;&nbsp;{candidatget.opt}</b><br/>
        <b style={{color:"blue"}}>Nom de l'option:&nbsp;&nbsp;{candidatget.nameOpt}</b><br/>
        <b style={{color:"blue"}}>Username:&nbsp;&nbsp;{candidatget.username}</b>
       </Paper>
   ))}

  
 

  </Container>
 

 
    );
}