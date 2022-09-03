import styled,{ css } from "styled-components";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`

export const Container = styled.div`
  position: relative;
  margin: 45px 0;
`

export const Label = styled.label`
  color: grey;
  opacity: .7;
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: 300ms ease all;
  ${({shrink})=>shrink && shrinkLabel}
`

export const Input = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`