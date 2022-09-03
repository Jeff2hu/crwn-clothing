import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 10px;
  font-size: 18px;
`

export const Image = styled.div`
  width: 25%;
  padding-right: 15px;
    
  img {
    width: 100%;
    height: 100%;
  }
`

export const Name = styled.span`
  width: 20%;
`

export const Quantity = styled.span`
  width: 20%;
  padding-left: 15px;
  display: flex;
  
  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`

export const Price = styled.span`
  width: 20%;
`

export const RemoveButton = styled.div`
  width: 5%;
  padding-left: 6px;
  cursor: pointer;
`

