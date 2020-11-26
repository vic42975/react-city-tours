import React from 'react';

function Screen(props) {
	return (
		<>
			<h1>{props.result}</h1>
			<h1>{props.equation}</h1>
		</>
	);
}

export default Screen;
