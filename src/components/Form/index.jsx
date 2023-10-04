import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'antd';

import ControllerComponent from '../ControllerComponent';
import { generateErrors } from '../../data/inputPropsData';
import { schema } from '../../data/validationSchemaData';
import ButtonComponent from '../Button';

import styles from './Form.module.css';

const FormComponent = () => {
	const [isIconsVisible, setIsIconsVisible] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const [isErrorWarning, setIsErrorWarning] = useState(false);

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const errorMessages = generateErrors(errors);

	const onSubmit = args => {
		console.log(args);
		setIsErrorWarning(false);
		setIsRegistered(true);
		setIsIconsVisible(false); //for hiding input's icons after reset fields
		reset();
		setTimeout(() => setIsRegistered(false), 2000);  //auto delete "success register" window
	};

	const showElements = () => {
		setIsIconsVisible(true);
		setIsErrorWarning(true); //show warning when we clicked but couldn't submit
	};

	return (
		<>
			{isErrorWarning && !isRegistered && <h2 className={styles.isError}>Error, Please, check all fields</h2>}
			{isRegistered && <h2 className={styles.isRegistered}>Registration done successfully</h2>}
			<Form
				layout="vertical"
				onFinish={handleSubmit(onSubmit)}
				style={{
					maxWidth: 300,
					padding: 5,
				}}
				autoComplete="on"
			>
				{errorMessages.map(errorData => (
					<ControllerComponent
						key={errorData.id}
						data={errorData}
						control={control}
						isIconsVisible={isIconsVisible}
					/>
				))}
				<ButtonComponent showElements={showElements} />
			</Form>
		</>
	);
};
export default FormComponent;
