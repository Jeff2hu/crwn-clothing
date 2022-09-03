import styled from "styled-components";

export const Container = styled.form`
  width: 55%;
  
  input{
    width:90%;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Alert = styled.p`
  margin-top: 50px;
  line-height: 30px;
  color: red;
  font-weight: 600;
`