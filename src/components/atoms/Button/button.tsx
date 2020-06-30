import React, { FC } from 'react';
import { IButtonProps } from './button.types';
import styles from './button.module.scss';

const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    disabled,
    ...other
  } = props;

  const btnClassName = [
    styles.appButton,
    className,
    disabled ? 'disabledElement' : '',
  ].join(' ');

  return (
    <button
      className={btnClassName}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  )
};

export default Button;
