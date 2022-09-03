import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 30px;
  color:black;
  text-align: center;
  cursor: pointer;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media(max-width:992px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  @media(max-width:596px){
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
`

export const FooterTitle = styled(Link)`
  font-size: 24px;
  color:#ccc;
  text-align: center;
  margin:30px auto 50px auto;
`