import React from 'react';
import {Button, Form} from "antd";

const ButtonComponent = () => {
    return (
        <Form.Item
            wrapperCol={{
                offset: 0,
                span: 24,
            }}
        >
            <Button style={{width: '100%'}} type='primary' htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    );
};

export default ButtonComponent;
