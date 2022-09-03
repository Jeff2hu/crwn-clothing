import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from '../../../../assests/shopping-bag.svg'

export const Container = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 30px;
  height: 30px;
`

export const Count = styled.span`
  position: absolute;
  top: 12px;
  font-size: 10px;
  font-weight: bold;
`