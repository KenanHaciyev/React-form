import * as yup from 'yup';

export const schema = yup.object({
	Name: yup.string().required('First Name is required').min(3, 'Minimum 3 letters').trim(),
	Surname: yup.string().required('Last Name is required').min(3, 'Minimum 3 characters').trim(),
	Email: yup
		.string()
		.required('Email is required')
		.min(6, 'Minimum 6 letters')
		.email('Email address must have symbol @')
		.trim(),
	Mobile: yup
		.string()
		.required('Phone number is required')
		.matches(/^[0-9]\d{9}$/, {
			message: 'Your mobile must have 10 numbers',
			excludeEmptyString: false,
		}),
});
