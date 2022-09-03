import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 120px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  transition: all .25s ease-in;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #387ff3;
  color: white;

  &:hover {
    background-color: #d1e1fc;
    color:#164ea9;
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`