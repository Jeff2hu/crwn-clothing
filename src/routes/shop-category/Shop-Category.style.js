import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin-top: 50px;

  @media(max-width:992px){
    grid-template-columns: repeat(2,1fr);
    row-gap: 40px;
  }

  @media(max-width:576px){
    grid-template-columns: repeat(1,1fr);
  }
`

export const Title = styled.h2`
  font-size: 36px;
  text-align: center;
`