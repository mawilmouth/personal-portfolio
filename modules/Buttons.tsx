import React from 'react';
import { BasicButtonProps } from '../types/modules/ButtonTypes';

export const BasicButton: React.FC<BasicButtonProps> = (props) => {
  const { text, className, onClick, submit, disabled, disabledText } = props;
  const buttonClass: string = className ? ` ${className}` : '';
  const buttonType = submit ? 'submit' : 'button';
  const buttonText: string = disabled ? disabledText : text;

  return (
    <button
      type={buttonType}
      className={`button basic-button${buttonClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}