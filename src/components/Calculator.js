import React, { useState } from 'react';
import Screen from './Screen';
import Key from './Key';

function Calculator() {
	const [result, setResult] = useState(0);
	const [equation, setEquation] = useState('0');

	function cancelButton() {
		setResult(0);
		setEquation('0');
	}

	function calculate() {
		try {
			let calc = eval(equation);
			setResult(calc);
			setEquation(calc);
		} catch (e) {
			setResult('Error');
			setEquation('0');
		}
	}

	function handleClick(event) {
		if (event !== '=') {
			if (event !== 'C') {
				equation === '0' ? setEquation(event) : setEquation(equation + event);
			} else {
				cancelButton();
			}
		} else {
			calculate();
		}
	}

	return (
		<>
			<Screen key={'screen'} equation={equation} result={result} />
			<Key key={'('} name={'('} onClick={(e) => handleClick(e.target.name)} />
			<Key key={')'} name={')'} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'C'} name={'C'} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'/'} name={'/'} onClick={(e) => handleClick(e.target.name)} />
			<br />
			<Key key={7} name={7} onClick={(e) => handleClick(e.target.name)} />
			<Key key={8} name={8} onClick={(e) => handleClick(e.target.name)} />
			<Key key={9} name={9} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'*'} name={'*'} onClick={(e) => handleClick(e.target.name)} />
			<br />
			<Key key={4} name={4} onClick={(e) => handleClick(e.target.name)} />
			<Key key={5} name={5} onClick={(e) => handleClick(e.target.name)} />
			<Key key={6} name={6} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'-'} name={'-'} onClick={(e) => handleClick(e.target.name)} />
			<br />
			<Key key={1} name={1} onClick={(e) => handleClick(e.target.name)} />
			<Key key={2} name={2} onClick={(e) => handleClick(e.target.name)} />
			<Key key={3} name={3} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'+'} name={'+'} onClick={(e) => handleClick(e.target.name)} />
			<br />
			<Key key={0} name={0} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'.'} name={'.'} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'P'} name={'+/-'} onClick={(e) => handleClick(e.target.name)} />
			<Key key={'='} name={'='} onClick={(e) => handleClick(e.target.name)} />
		</>
	);
}

export default Calculator;
