import React from'react';
import { useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Switch, Route, Link} from 'react-router-dom';
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
export default function Offre2()
{  


 
  const [name, setName] = useState('');
  const handleInput1 = event => {
  setName(event.target.value);
  }
  const [id, setId] = useState('');
  const handleInput4 = event => {
  setId(event.target.value);
  }
  const [debut, setDebut] = useState('');
  const handleInput2 = event => {
  setDebut(event.target.value);
  }
  const [fin, setFin] = useState('');
  const handleInput3 = event => {
  setFin(event.target.value);
  }

  const[stage,setStage]=useState([]);
  const[stage3,setStage3]=useState([]);



  function deleteDataById() {

    const stage1={id,name,debut,fin}
    console.log(stage1)
    
    fetch("http://localhost:8081/App/DeleteStage",{
      method:"Delete",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(stage1)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
   

  }

  function Edit() {
    
    const stage1={id,name,debut,fin}
    console.log(stage1)
    
    fetch("http://localhost:8081/App/updatestg",{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(stage1)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
   

  }
  function SaveChamps() {
    
    const stage={name,debut,fin}
    console.log(stage)
    
    fetch("http://localhost:8081/App/SaveStage",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(stage)
    }).then(()=>{
      console.log("New stage added")
    })
   

  }
 
  function ViderChamps() {
    
    setName("");
    setDebut("");
    setFin("");
    setId("");
  
  }
  function GetChamps() {
    const getstage=async()=>{
        const res=await fetch("http://localhost:8081/App/getAllStages");
        const getstg=await res.json();
         console.log(getstg);
        setStage(await getstg);
      }
      getstage();
  
  
  }
  
  const classes=useStyles();
    const paperStyle={padding:'50px 20px', width:850, height:550, margin:"20px auto"}
    return(
    <Container>
         
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Gestion des stages</h1><br/>
    <h3 style={{color:"blue"}}>Veuillez entrer les informations concernant les stages</h3><br/>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField  label="Id"  inputProps={{ style: {color: 'blue'}}} InputLabelProps={{style : {margin:"-5px",color : 'blue',"font-weight":"bold"}}} value={id} onChange={handleInput4} />
    <TextField  label="Nom de l'offre"  inputProps={{ style: {color: 'blue'}}} InputLabelProps={{style : {margin:"-5px",color : 'blue',"font-weight":"bold"}}} value={name} onChange={handleInput1} /><br/>
    <TextField type="date" label="Debut"  inputProps={{ style: {color: 'blue',"text-align":"center"}}} InputLabelProps={{style : {margin:"-5px",color : 'blue',"font-weight":"bold"}}} value={debut} onChange={handleInput2}  />
    <TextField type="date" label="Fin"  inputProps={{ style: {color: 'blue',"text-align":"center"}}} InputLabelProps={{style : {margin:"-5px",color : 'blue',"font-weight":"bold"}}} value={fin} onChange={handleInput3} /><br/>
   <br/><br/>
          <Button variant="contained" size="large" style={{color:"white","font-weight":"bold",maxWidth: "200px",maxHeight: "55px",minWidth: "200px",minHeight: "55px",backgroundColor:"#4169E1"}} onClick={() => Edit()}>Modifier</Button>
          <Button variant="contained" size="large" style={{color:"white","font-weight":"bold",maxWidth: "200px",backgroundColor:"#4169E1",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => deleteDataById()}>Supprimer</Button>
          <Button variant="contained" size="large" style={{color:"white","font-weight":"bold",maxWidth: "200px",backgroundColor:"#4169E1",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => ViderChamps()}>Vider les Champs</Button>
          <Link to={"/dashboard"}><Button variant="contained" size="large" style={{color:"white","font-weight":"bold",maxWidth: "200px",backgroundColor:"#4169E1",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}}>Quitter</Button></Link>
          <Button variant="contained" size="large" style={{color:"white","font-weight":"bold",maxWidth: "200px",backgroundColor:"#4169E1",
          maxHeight: "55px",minWidth: "200px",
          minHeight: "55px"}} onClick={() => GetChamps()}>Afficher les champs</Button>
           <Button variant="contained" size="large" style={{color:"white","font-weight":"bold",maxWidth: "200px",backgroundColor:"#4169E1",maxHeight: "55px",minWidth: "200px",minHeight: "55px"}} onClick={() => SaveChamps()}>Ajouter</Button><br/>
           <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
         
        </Switch>
</form>
  </Paper>
 
  
   {
              
  stage.map(stageget=>(
    
       <Paper elevation={6} style={{padding:"10px",margin:"10px","text-align":"left"}}  key={stageget.id}>
       <b> <h3 style={{color:"blue"}}>Stage {stageget.id}</h3></b>
        <br/><b style={{color:"blue"}}>Id:&nbsp;&nbsp;{stageget.id}</b><br/>
        <b style={{color:"blue"}}>Nom:&nbsp;&nbsp;{stageget.name}</b><br/>
        <b style={{color:"blue"}}>Début:&nbsp;&nbsp;{stageget.debut}</b><br/>
        <b style={{color:"blue"}}>Fin:&nbsp;&nbsp;{stageget.fin}</b><br/>
       
       </Paper>
   ))}
    
   



   </Container>
 
    );
}