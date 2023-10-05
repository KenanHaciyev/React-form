import React from 'react';
import { Form, Input } from 'antd';

const InputComponent = React.forwardRef(
	({ errorMessage, label, isIconsVisible, placeholder = label, ...field }, ref) => {
		return (
			<Form.Item
				hasFeedback
				validateStatus={errorMessage ? 'error' : !errorMessage && isIconsVisible ? 'success' : ''}
				label={label}
				style={{ height: '60px' }}
			>
				<div>
					<Input
						ref={ref}
						{...field}
						placeholder={placeholder}
						allowClear
						style={{
							width: '290px',
							border: !errorMessage && isIconsVisible ? ' 1px solid #3bd23b' : '',
						}}
					/>
					<small style={{ color: 'crimson' }}>{errorMessage}</small>
				</div>
			</Form.Item>
		);
	},
);

export default InputComponent;
