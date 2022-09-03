import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    transition: all .2s ease-in;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 40px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 8%;
  font-size: 18px;
  padding: 3px 10px;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media(max-width:992px){
    font-size: 20px;
  }

  @media(max-width:576px){
    font-size: 24px;
  }
`

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;

`

export const Price = styled.span`
  width: 10%;

`