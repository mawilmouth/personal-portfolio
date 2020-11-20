import React from 'react';
import { BasicInputProps } from '../types/modules/InputTypes';

export interface TextInputProps extends BasicInputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
}

export interface TextAreaProps extends BasicInputProps {
  inputRef?: React.RefObject<HTMLTextAreaElement>;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const { className, label, inputRef, name, placeholder, defaultValue } = props;
  const containerClass: string = className ? ` ${className}` : '';

  return (
    <div className={`input-container${containerClass}`}>
      <label>
        <span>{label}</span>
        <input
          type="text"
          className="input"
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}

export const TextAreaInput: React.FC<TextAreaProps> = (props) => {
  const { className, label, inputRef, name, placeholder, defaultValue } = props;
  const containerClass: string = className ? ` ${className}` : '';

  return (
    <div className={`input-container${containerClass}`}>
      <label>
        <span>{label}</span>
        <textarea
          ref={inputRef}
          name={name}
          className="textarea"
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}