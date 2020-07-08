import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { ISelectTagProps, FormControlElement } from './selectTag.types';


const SelectTag: FC<ISelectTagProps> = (props) => {
  const onChangeHandler: React.ChangeEventHandler<FormControlElement> = (e) => {
    props.onChange(e.target.value, props.name);
  };

  return (
    <Form.Group controlId="exampleForm.SelectCustom" key={`${Math.random()}`}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control onChange={onChangeHandler} as="select" custom value={props.value}>
        {props.options.map((option, index) => {
          return (
            <option key={index}>{option}</option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};
export default SelectTag;
