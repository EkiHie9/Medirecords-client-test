import React, { useState } from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import { Button } from 'reactstrap';
function DescriptionList(props) {
  const {
    title,
    isRequired,
    inputChange,
    inputNoActions,
    inputMaxLength,
    value,
    disabled,
    type
  } = props;
  const [textbox, setTextbox] = useState();
  const mandatoryValidation = () => {
    if (isRequired) {
      return <sup className="text-danger">*</sup>;
    }
  };
  return (
    <>
      <dl className="description-container">
        <dd className="description-title">
          {title} {mandatoryValidation()}
        </dd>
        <dt
          style={
            inputNoActions
              ? styles.descriptionLabelNoActions
              : styles.descriptionLabel
          }
          className="description-label">
          <TextInput
          type={type}
          value={value}
          maxLength={inputMaxLength}
          placeholder={`Silahkan masukan ${title} ...`}
          handleChange={(e) => inputChange(e)}
          disabled={disabled}
        />
        </dt>
      </dl>

    </>
  );
}
DescriptionList.propTypes = {
  inputChange: PropTypes.func,
};

DescriptionList.defaultProps = {
  inputChange: () => null,
};

export default DescriptionList;
