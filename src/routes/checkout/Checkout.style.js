import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto 0;
`

export const Title = styled.h2`
  width: 100%;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 30px;
  text-align: center;
  text-transform: capitalize;
  border-bottom: 1px solid darkgrey;
`

export const Block = styled.div`
  text-transform: capitalize;
`

export const Total = styled.div`
  margin: 30px 0 30px auto;
  font-size: 24px;
`