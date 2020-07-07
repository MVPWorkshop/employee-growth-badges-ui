import {InputHTMLAttributes} from 'react';

export interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name'>  {
    label: string;
    value: string;
    name: string;
    onChange: (value: string, name: string) => void;
}