import React from 'react';
import InputComponent from '../Input';
import { Form } from 'antd';
import ButtonComponent from '../Button';
import { Controller, useForm } from 'react-hook-form';

const FormComponent = () => {
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onFinish = args => console.log(args);

	return (
		<Form
			onFinish={handleSubmit(onFinish)}
			style={{
				maxWidth: 300,
			}}
			autoComplete="on"
		>
			<Controller
				name="firstname"
				control={control}
				render={({ field }) => <InputComponent {...field} label="First Name" />}
			/>
			<Controller
				name="secondname"
				control={control}
				render={({ field }) => <InputComponent {...field} label="Second Name" />}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field }) => <InputComponent {...field} label="Email" />}
			/>
			<Controller
				name="phonenumber"
				control={control}
				render={({ field }) => <InputComponent {...field} label="Phone Number" />}
			/>
			<ButtonComponent />
		</Form>
	);
};
export default FormComponent;
