import React, {FC} from 'react';
import './textInput.scss';
import {ITextInputProps} from "./textInput.types";


const TextInput: FC<ITextInputProps> = (props) => {
    const {
        onChange,
        label,
        ...otherProps
    } = props;
    return (
        <div className="app-input">
            <label>{label}</label>
            <input {...otherProps} onChange={(e) => onChange(e.target.value, otherProps.name)}/>
        </div>
    );
};

export default TextInput;