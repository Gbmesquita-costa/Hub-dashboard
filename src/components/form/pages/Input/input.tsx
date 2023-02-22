import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { StandardTextFieldProps, TextField } from '@mui/material'
import { FieldError } from 'react-hook-form';

interface InputProps extends StandardTextFieldProps {
  name:             string;
  label:            string;
  error?: FieldError | any;
}

const FormInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, error, ...rest}, ref) => {
  return (
    <TextField
    label={label}
    name={name}
    error={error && Boolean(error.message)}
    helperText={error && error.message}
    variant="standard"
    ref={ref}
    {...rest}
    />
  )
}

export const InputPropsElement = forwardRef(FormInput)