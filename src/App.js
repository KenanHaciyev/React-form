import React from 'react';
import { Col, Row } from 'antd';

import FormComponent from './components/Form';
import './App.css';

const App = () => {
	return (
		<div style={{ height: '100vh' }}>
			<Row justify={'center'} align={'middle'} style={{ height: 'inherit' }}>
				<Col>
					<FormComponent/>
				</Col>
			</Row>
		</div>
	);
};

export default App;
