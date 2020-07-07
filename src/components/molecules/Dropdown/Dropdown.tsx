import React, {FC, Fragment} from "react";
import {Dropdown as BootstrapDropdown} from "react-bootstrap";
import {IDropdownProps} from "./dropdown.types";
import "./Dropdown.scss"
const Dropdown: FC<IDropdownProps> = (props) => {
    return(
        <BootstrapDropdown {...props.bootstrapDropdownProps}>
            <BootstrapDropdown.Toggle variant="success" id="dropdown-basic">
                {props.toggleLabel}
            </BootstrapDropdown.Toggle>
            <BootstrapDropdown.Menu>
                {props.options.map(option=>{
                    return(
                    <Fragment>
                        <BootstrapDropdown.Header>
                            {option.label}
                        </BootstrapDropdown.Header>
                        <BootstrapDropdown.Item>
                            {option.value}
                        </BootstrapDropdown.Item>
                    </Fragment>
                    )
                })}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">+ Add new organization</a>
            </BootstrapDropdown.Menu>
        </BootstrapDropdown>

    )
}

export default Dropdown;