import React, {Fragment, useState, useEffect} from 'react';
import CountDownTimerComponent from '../components/CountDownTimerComponent';
import Preloader from '../components/Preloader';

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setIsLoading(false);
		}, 5000);
		return () => clearTimeout(timerId);

	}, []);

	return (
		<Fragment>
			{isLoading && <Preloader />}
			<CountDownTimerComponent />
		</Fragment>
	);
}