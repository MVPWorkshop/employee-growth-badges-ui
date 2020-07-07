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
    uppercase,
    ...other
  } = props;

  const btnClassName = [
    styles.appButton,
    className,
    disabled ? 'disabledElement' : '',
    uppercase ? styles.uppercase : '',
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

Button.defaultProps = {
  uppercase: true
};

export default Button;
