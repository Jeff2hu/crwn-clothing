import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  margin: 10px;
  padding: 10px;
  color: black;
  transition: all .2s ease-in;
  cursor: pointer;
  &:hover{
    background-color: #333;
    color:white;
    border-radius: 30px;
  }
  &:hover:nth-child(5){
    color:black;
    background-color: #ccc;
  }
`