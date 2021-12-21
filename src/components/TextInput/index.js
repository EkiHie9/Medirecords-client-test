import React from 'react';
import moment from 'moment';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormFeedback,
} from 'reactstrap';

import './style.scss';

function TextInput({
  name,
  type = 'text',
  placeholder,
  label,
  value,
  handleChange,
  disabled,
  isRequired,
  invalid,
  onFocus,
  maxLength,
}) {
  return (
    <>
      {label && (
        <small className="labelInput">
          {label} {isRequired && <span> *</span>}
        </small>
      )}
     <Input
            className="uppercase-value"
            onFocus={onFocus}
            type={type}
            name={name}
            id={label}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            invalid={invalid}
            maxLength={maxLength}
            autoComplete="new-password"
          />
    </>
  );
}

export default TextInput;
