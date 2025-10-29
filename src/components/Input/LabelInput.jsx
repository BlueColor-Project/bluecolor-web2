import React from 'react'
import styled from 'styled-components'

const LabelInput = ({label, type, placeholder}) => {
  return (
    <>
          <Label>{label}</Label>
          <Input type={type} placeholder={placeholder}/>
    </>
  )
}

export default LabelInput



const Label = styled.p`
    font-size: 16px;
    font-weight: 700;
`

const Input = styled.input`
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #00468e;
    background-color: #fff;
    padding: 5px;
    &:focus {
        outline: none;
    }
`