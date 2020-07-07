export interface INavigationBarProps {
    title:string;
    btntext:string;
    options:{
        label:string,
        value:string
    }[];
    toggleLabel:string;
}