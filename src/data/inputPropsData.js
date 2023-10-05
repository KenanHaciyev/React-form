//I did this not static because it's required dynamic "errors" which located in useForm()
export const inputsDataGenerate = errors => {
	return [
		{
			id: 1,
			name: 'Name',
			label: 'First Name',
			errorMessage: errors.Name?.message,
		},
		{
			id: 2,
			name: 'Surname',
			label: 'Last Name',
			errorMessage: errors.Surname?.message,
		},
		{
			id: 3,
			name: 'Email',
			label: 'Email',
			errorMessage: errors.Email?.message,
		},
		{
			id: 4,
			name: 'Mobile',
			label: 'Phone Number',
			placeholder: '055 999 99 99',
			errorMessage: errors.Mobile?.message,
		},
	];
};
