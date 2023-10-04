import React from 'react';
import { Controller } from 'react-hook-form';

import InputComponent from '../Input';

const ControllerComponent = ({ data, control, isIconsVisible }) => {
	return (
		<Controller
			key={data.id}
			name={data.name}
			control={control}
			render={({ field }) => (
				<InputComponent
					{...field}
					label={data.label}
					placeholder={data.placeholder}
					isIconsVisible={isIconsVisible}
					errorMessage={data.errorMessage}
				/>
			)}
		/>
	);
};

export default ControllerComponent;
