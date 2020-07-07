import React, { FC } from 'react';
import { Button as BTButton } from 'react-bootstrap';
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
    <BTButton
      className={btnClassName}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {children}
    </BTButton>
  )
};

export default Button;
