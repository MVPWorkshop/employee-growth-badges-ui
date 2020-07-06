import {DropdownProps as BootstrapDropdownProps} from "react-bootstrap"

export interface IDropdownProps {
    bootstrapDropdownProps?:BootstrapDropdownProps;
    // options: string[];
    options:{
        label:string,
         value:string
    }[];
    toggleLabel:string;
}