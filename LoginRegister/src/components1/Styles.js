import React from 'react';
import styled from "styled-components";
//background
//import background from './../assets/bg.jpg';
//react router
import {Link} from 'react-router-dom';
export const Colors ={
primary:"#fff",
theme:"#0000FF",
light1:"#F3F4F6",
light2:"#ESE7EB",
dark1:"#1F2937",
dark2:"#4B5563",
dark3:"#9CA3AF",
red:"#DC2626" ,
midnightBlue:"#191970"
};

//styled components  background:url(${background}); background:url(${background});
export const StyledContainer = styled.div`
margin:0;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-size:cover;
background-attachment:fixed;
`
;
export const StyledTitle= styled.h2`
font-size:${(props)=>props.size}px;
color:${(props)=>props.color ? props.color:Colors.primary};

`;
export const StyledTitle2= styled.h1`
font-size:${(props)=>props.size}px;
color:${(props)=>props.color ? props.color:Colors.primary};

`;

export const StyledSubTitle= styled.p`
font-size:${(props)=>props.size}px;
text-align:center;
color:${(props)=>props.color ? props.color:Colors.primary};
padding:5px;
margin:25px;
`;
export const Avatar= styled.div`
border-radius: 50px;
width:85px;
height:85px;
background-image:url(${props=> props.image});
background-size:cover;
background-position:center;
margin:auto;
`;
export const StyledButton= styled(Link)`
padding:10px;
width:150px;
background-color: transparent;
font-size:16px;
border:3px solid ${Colors.primary};
border-radius:25px;
color:${Colors.primary};
text-decoration:none;
text-align:center;
transition:ease-in-out 0.3s;
&:hover{
    background-color:${Colors.primary};
    color:${Colors.primary};
    cursor:pointer;
}
`;

export const StyledButton2= styled(Link)`
padding:10px;

background-color: transparent;
font-size:25px;
border:3px solid ${Colors.primary};
border-radius:10px;
color:${Colors.theme};
text-decoration:none;
text-align:center;
transition:ease-in-out 0.3s;
&:hover{
    background-color:${Colors.theme};
    color:${Colors.theme};
    cursor:pointer;
}
`;
export const ButtonGroup = styled.div`
display:felx;
justify-content:space-around;
flex-direction:row;
margin-top:25px;
`;
//Input
export const StyledTextInput=styled.input`
width:200px;
padding:15px;
padding-left:50px;
font-size:17px;
letter-spacing:1px;
color: ${Colors.theme};
background-color: ${Colors.primary};
border: 0;
outline: 0;
display: block;
margin: 5px auto 10px auto;
transition: ease-in-out 0.3s;
${(props)=> props.onInvalid && `background-color:${Colors.theme};color:${Colors.theme};`}

&:focus{
    background-color: ${Colors.primary};
    color: ${Colors.theme};
}
`;
export const StyledLabel =styled.p`
text-align:left;
font-size:13px;
font-weight:bold;
`;
export const ErrorMsg=styled.div`
font-size:11px;
color:${Colors.theme};
margin-top: -5px;
margin-bottom:10px;
text-align:left;
`;
export const ExtraText = styled.p`
font-size:${(props)=>props.size}px;
text-align:center;
color:${(props)=>(props.color? props.color:Colors.theme)}
padding:2px;
margin-top:10px;
`;
export const TextLink = styled(Link)`
text-decoration: none;
color: ${Colors.theme};
transition: ease-in-out 0.3s;

&:hover{
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
}
`;
export const StyledFormArea=styled.div`
background-color: ${props=>props.bg || Colors.light1};
text-align-center;
padding: 45px 55px;
`;
export const StyledFormButton=styled.button` 
padding:10px;
margin-left:50px;
width:150px;
background-color: transparent;
font-size:16px;
border:2px solid ${Colors.theme};
border-radius:25px;
color:${Colors.theme};
transition:ease-in-out 0.3s;
outline: 0;
&:hover{
    background-color:${Colors.theme};
    color:${Colors.primary};
    cursor:pointer;
}
`;

//Icons
export const StyledIcon = styled.p`

color: ${Colors.theme};
position: absolute;
font-size: 20px;
top: 35px;

${(props)=>props.right && `right: 15px;`}
${(props)=>props.right && `left: 15px;`}
`;

//copyright
/*export const CopyrightText = styled.p`
padding: 5px;
margin: 20px;
text-align: center;
color: ${Colors.light2};
`;*/


