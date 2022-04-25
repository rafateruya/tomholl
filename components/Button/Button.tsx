import React from 'react'
import MuiButton from '@mui/material/Button'

export enum ButtonVariant {
  text = 'text',
  contained = 'contained',
  outlined = 'outlined',
}

interface ButtonProps {
  label: string
  variant?: ButtonVariant // TODO: change by enum with correct variants
}

export const Button: React.FC<ButtonProps> = ({ variant, label }) => {
  return <MuiButton variant={variant}> {label}</MuiButton>
}
