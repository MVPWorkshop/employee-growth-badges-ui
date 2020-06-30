import React from 'react';
import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}
