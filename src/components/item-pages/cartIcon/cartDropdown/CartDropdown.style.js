import styled from "styled-components";

import { BaseButton,GoogleSignInButton,InvertedButton } from '../../../item-components/button/Button.style'

export const Container = styled.div`
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 90px;
  right: 40px;
  padding: 20px 10px 10px;
  border: 1px solid black;
  background-color: white;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}{
    margin-top:auto
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50% auto;
`

export const Items = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`