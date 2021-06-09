import React from 'react';

function InfoLoading(Component) {
	return function InfoLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px', color: 'black' }}>
				We are waiting for the data to load!...
			</p>
		);
	};
}
export default InfoLoading;