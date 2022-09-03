import React from 'react';
import { BaseButton,GoogleSignInButton,InvertedButton } from './Button.style';

export const button_class_type = {
  base:"base",
  google:"google_sign_in",
  inverted:"inverted"
}

const getButton = (buttonType) => 
  ({
    [button_class_type.base]:BaseButton,
    [button_class_type.google]:GoogleSignInButton,
    [button_class_type.inverted]:InvertedButton,
  }[buttonType])

const Button = ({children,buttonType,buttonOptions}) => {
  
  const CustomButton = getButton(buttonType)

  return (
    <CustomButton {...buttonOptions}  >
      {children}
    </CustomButton>
  )
}

export default Button