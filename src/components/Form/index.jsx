import React from 'react';
import InputComponent from "../Input";
import { Form} from 'antd';
import ButtonComponent from "../Button";

const FormComponent = () => (
    <Form
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 20,
        }}
        style={{
            maxWidth: 400,
        }}
        labelAlign="right"
        autoComplete="on"
    >

            <label>
                    First Name
                    <InputComponent/>
            </label>
            <label>
                    Last Name
                    <InputComponent/>
            </label>
            <label>
                    Email
                    <InputComponent/>
            </label>
            <label>
                    Phone number
                    <InputComponent/>
            </label>
            <ButtonComponent/>

    </Form>
);
export default FormComponent;
