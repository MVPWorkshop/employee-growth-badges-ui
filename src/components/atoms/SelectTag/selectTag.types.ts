export type FormControlElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;

export interface ISelectTagProps {
    label: string;
    value: string;
    name: string;
    options:string[];
    onChange: (value: string, name: string) => void;
}