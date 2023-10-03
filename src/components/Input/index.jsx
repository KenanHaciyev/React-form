import React from 'react';
import {Input} from "antd";
// import {Input} from "antd";

const InputComponent = React.forwardRef(({label,...field}, ref) => {
    return (
        <label>
            {label}
            <Input ref={ref} {...field}  />
        </label>
    );
});

export default InputComponent;
