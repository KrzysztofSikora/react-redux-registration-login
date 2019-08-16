import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ErrorMsg = styled.div`
  color: red;
`

export const SubmitButton = styled.button`
  display: block;
  border-radius: 10px;
  padding: 5px;
  color: #fff;
  margin-bottom: 10px;
  background: #232632;
`

export const TextInput = styled.input`
  padding: 5px;
  background: #232632;
  color: #d3d4d6;
  width: 100%;
  margin-right: 7px;
  border: 0px;
  -webkit-appearance: none;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

export const Select = styled.select`
  color: #d3d4d6;
  padding: 5px;
  background: #232632;
  border: 0px;
  height: 25px;
`


export const Button = styled.button`
    background: #232632;
    color: #00a7fa;
    width: 80px;
    height: 32px;
    font-size: 1.7em;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center
`;



export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border:2px solid #343744;
    background: #232632;
    border-radius: 10px;
    padding: 5px;
`;



export const Menu = styled.div`
   
    margin-top: 20px;
    border:2px solid #343744;
    background: #232632;
    border-radius: 10px;
    padding: 5px;
    width: 400px;
`

// export const Link = styled.a `
//     text-decoration: none;
//     color: #992299
//     margin-left: 5px;
// `

export const NavA = styled.a `
    text-decoration: none;
    color: #992299
    margin-left: 5px;
`;

export const StyledLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
  margin-left: 5px;
  
  font: bold 11px Arial;
  text-decoration: none;
  background-color: #EEEEEE;
  color: #333333;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #CCCCCC;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #CCCCCC;
  
  
  
  &:hover {
    color: #fff;
  }
`

export const StyledEditLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    color: #fff;
  }
`

export const Header = styled.h3`
    color: #fffff;

`;


export const DestroyButton = styled.button `
       border-radius: 10px;
       background: red;
       padding: 5px;
       color: #fff;
       margin-bottom: 10px;
`