import React from 'react';

const button_class_type = {
  "":"",
  google:"btn_google",
  inverted:"btn_inverted"
}

const Button = ({children,buttonType,buttonOptions}) => {
  return (
    <button className={`button-container ${button_class_type[buttonType]}`} {...buttonOptions}  >
      {children}
    </button>
  )
}

export default Button