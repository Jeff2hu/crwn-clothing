import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ImageUrl})=>`url(${ImageUrl})`}}
`

export const Body = styled.div`
  height: 90px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2{
    font-weight: bold;
    margin: 0 6px 5px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p{
    font-weight: lighter;
    font-size: 16px;
  }
`

export const Container = styled(Link)`
  min-width: 30%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;

  @media(max-width:768px){
    min-width: 33%;
  }

  @media(max-width:576px){
    min-width: 55%;
  }

  &:hover{
    cursor:pointer;

    ${BackgroundImage}{
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body}{
      opacity:0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`