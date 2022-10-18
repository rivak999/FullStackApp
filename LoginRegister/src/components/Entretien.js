import React from'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useState,useEffect } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
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
 
export default function Entretien()
{ 

  const [appointment, setAppointment] = useState('');
  const handleInput1 = event => {
  setAppointment(event.target.value);
  }
  const [interviewer, setInterviewer] = useState('');
  const handleInput2 = event => {
  setInterviewer(event.target.value);
  }
  const [candidate, setCandidate] = useState('');
  const handleInput3 = event => {
  setCandidate(event.target.value);
  }
  const [id, setId] = useState('');
  const handleInput4 = event => {
  setId(event.target.value);
  }
  function ViderChamps() {

    setCandidat("");
    setAppointment("");
    setInterviewer("");
    setId("");
  }

  
 
 
 const[candidat,setCandidat]=useState([]);
  useEffect(()=>{
    const getcandidat=async()=>{
      const res=await fetch("http://localhost:8081/App/getAllCandidats");
      const getcan=await res.json();
       console.log(getcan);
      setCandidat(await getcan);
    }
    getcandidat();
  },[]);
 
  function deleteDataById() {

    const entretien={id,appointment,candidate,interviewer}
    console.log(entretien)
    
    fetch("http://localhost:8081/App/deleteEntretien",{
      method:"Delete",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(entretien)
    })
    .then(res => res.json())
   .then(data => console.log(data))
    .catch(err => console.log(err));
   

  }
  function updateEntretien() {
    
    const entretien={id,appointment,candidate,interviewer}
    console.log(entretien)
    
    fetch("http://localhost:8081/App/UpdateEntretien",{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(entretien)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
   
  
  }

  const[entretien,setEntretien]=useState([]);
  function GetChamps() {
 
    const getentretien=async()=>{
      const res=await fetch("http://localhost:8081/App/getAllEntretiens");
      const getent=await res.json();
       console.log(getent);
      setEntretien(await getent);
    }
    getentretien();
  
  }

  function SaveChamps() {
    
    const entretien={appointment,interviewer,candidate}
    console.log(entretien)
    
    fetch("http://localhost:8081/App/SaveEntretien",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(entretien)
    }).then(()=>{
      console.log("New entretien added")
    })
   

  }
 

  const classes=useStyles();
  const paperStyle={padding:'50px 20px', width:880, height:600, margin:"20px auto"}
    
    return(

      
    <Container>
        <Paper elevation={3} style={paperStyle}>

    <h2 style={{color:"blue"}}>Veuillez entrer les informations concernant les entretiens</h2><br/>
    <form className={classes.root} noValidate autoComplete="off">

    <TextField  label="Id"  inputProps={{ style: {color: 'blue'}}} InputLabelProps={{style : {color : 'blue',"font-weight":"bold",margin:"-5px"}}} value={id} onChange={handleInput4} />
    <TextField type="date" inputProps={{ style: {color: 'blue',textAlign:"right"}}} label="Interviewer" InputLabelProps={{style : {color : 'blue',"font-weight":"bold",margin:"-5px"} }} value={interviewer} onChange={handleInput2} />
   <br/><br/> <TextField  type="appointment" label="appointment"  inputProps={{ style: {color: 'blue',"text-align":"right"}}} InputLabelProps={{style : {margin:"-5px",color : 'blue',"font-weight":"bold"}}} value={appointment} onChange={handleInput1} />
   <FormControl fullWidth>
  <select name="candidat"  label="candidat"  style={{"padding-bottom":"10px","font-size":14,"padding-top":"10px",color:"blue","font-weight":"bold",fontSize:"50"}} value={candidate} onChange={handleInput3}  >
  <option style={{color:"blue","font-weight":"bold"}}>Username du candidat</option>
  {
    
    candidat.map((candidatget)=>(
      <option key={candidatget.id}  style={{color:"blue","font-weight":"bold"}}>{candidatget.username}</option>
    )
   

    )
  }

</select>
</FormControl>
    <br/><br/><br/><br/>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",fontSize:16,maxWidth: "200px",maxHeight: "55px",minWidth: "200px",minHeight: "55px"}} onClick={() => updateEntretien()}>Modifier</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",fontSize:16,maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => deleteDataById()}>Supprimer</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",fontSize:16,maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}}  onClick={() => ViderChamps()} >Vider les Champs</Button>
        <Link to={"/dashboard"}><Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",fontSize:16,maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}}>Quitter</Button></Link>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",fontSize:16,maxWidth: "200px",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => GetChamps()}>Afficher les champs</Button>
          <Button variant="contained" size="large" style={{color:"white",backgroundColor:"#4169E1","font-weight":"bold",fontSize:16,maxWidth: "200px",maxHeight: "55px",minWidth: "200px",minHeight: "55px"}} onClick={() => SaveChamps()}>Ajouter</Button><br/>
          <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
         
        </Switch>
      
   </form>
   </Paper>
   
                
      {entretien.map(entretienget=>(
    
       <Paper elevation={6} style={{padding:"10px",margin:"10px","text-align":"left"}} key={entretienget.id}>
       <b><h3 style={{color:"blue"}}>Entretien {entretienget.id}</h3></b><br/>
        <b style={{color:"blue"}}>Id:&nbsp;&nbsp;{entretienget.id}</b><br/>
        <b style={{color:"blue"}}>Appointment:&nbsp;&nbsp;{entretienget.appointment}</b><br/>
        <b style={{color:"blue"}}>Interviewé:&nbsp;&nbsp;{entretienget.candidate}</b><br/>
        <b style={{color:"blue"}}>Interviewer:&nbsp;&nbsp;{entretienget.interviewer}</b><br/>
       
       </Paper>
   ))}
  </Container>

    );
}