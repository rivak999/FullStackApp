import React from "react";
import { useState } from "react";
import { useField } from "formik";
import {StyledTextInput,StyledLabel, StyledIcon, ErrorMsg} from "./Styles";
// Eye for password
import {FiEyeOff, FiEye} from 'react-icons/fi';
export const TextInput=({icon,...props})=>{
    const[field,meta]=useField(props);
    const[show, setShow]= useState(false);
    return(
      <div style={{position: "relative"}}>
        <StyledLabel htmlForm={props.name}>
        {props.label}
        </StyledLabel>
        {props.type !=="password" && <StyledTextInput
        invalid={meta.touched && meta.error}
        {...field}
        {...props}
        
        />}
        {
            props.type ==="password" && (
                <StyledTextInput
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
                type={show ?"text" : "password"}
                />
            )
        }
            <StyledIcon style={{left: "10px"}}>
                {icon}
            </StyledIcon>
{
            
    props.type==="password" && (
    <StyledIcon style={{margin: "4px 220px"}} onClick={()=> setShow(!show)} left>
       {show && <FiEye />}
       {!show && <FiEyeOff />}
    </StyledIcon>)
}
{
    meta.touched && meta.error ?(
        <ErrorMsg>
            {meta.error}
        </ErrorMsg>
    ):(
        <ErrorMsg style={{visibility:"hidden"}}>.</ErrorMsg>
    )
    
}
      
      </div>
    );
};