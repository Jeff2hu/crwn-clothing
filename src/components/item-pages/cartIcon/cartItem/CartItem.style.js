import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width:30%;
  }
`

export const Details = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Name = styled.span`
  font-size: 14px;  
  font-weight: 600;
  margin-bottom: 5px;
`