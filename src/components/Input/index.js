import React from 'react';
import PropTypes from "prop-types";
import DescriptionList from '../DescriptionList';
import './styles.scss'
const Input = (props) =>{
    const {inputHandleChange,value,label,placeholder,title} = props;
    return (
       <div className="inputContainer">
           <h1>{title}</h1>
           <DescriptionList
           isRequired
           valueUppercase
           inputNoActions
           placeholder={placeholder}
           title={label}
             value={value}
             inputChange={(e) => inputHandleChange(e) }
         />
       </div>
    )
}

Input.propTypes = {
    inputHandleChange: PropTypes.func,
};

Input.defaultProps = {
    inputHandleChange: () => null,
};


export default Input; 