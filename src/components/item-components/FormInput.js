import React from 'react'

const FormInput = ({label,inputOptions}) => {
  return (
    <div className='form-input'>
      <input className='form-input__input' {...inputOptions}/>
      {label && (
        <label 
          className={`form-input__label ${inputOptions.value.length ? "shrink" : ""}`}
        >
          {label}
        </label>)
      }
    </div>
  )
}

export default FormInput