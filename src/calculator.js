import React from 'react';
import { connect } from 'react-redux';

import { Plus, Minus, Multiplication, Division } from './actions/calcActions'

const Calculator = ( {counter, Plus, Minus, Multiplication, Division} ) => {

	let num1, num2, symbol;

	const changeAction = () => {
		switch (symbol) {
			case '+':
				return Plus(num1, num2);
			case '-':
				return Minus(num1, num2)
			case '*':
				return Multiplication(num1, num2)
			case '/':
				return Division(num1, num2)
			default:
				break;
		}
	};

	return (
		<div className="container">
			<h3 className="d-flex justify-content-center">Calculator</h3>
			<div className="form-group d-flex justify-content-center">
				<input type="text" 
					   className="form-control" 
					   placeholder="" 
					   onChange={e => num1 = e.target.value}/>
				<select className="form-select"
						onChange={ e => symbol = e.target.value}>
					<option>+</option>
					<option>-</option>
					<option>*</option>
					<option>/</option>
				</select>
				<input type="text" 
					   className="form-control" 
					   placeholder="" 
					   onChange={e => num2 = e.target.value}/>
				<input className="form-control" type="text" placeholder="=" disabled="" />
				<input className="form-control" type="text" placeholder={counter} readOnly=""/>
				<button type="button" 
					    className="text-center btn btn-success"
						onClick={ () =>  {changeAction()}}>
							Success
				</button>
    		</div>
			
		</div>
	)
}

const mapStateToProps = ( {CalcReducer} ) => {
	const { counter } = CalcReducer;
	return { counter }
}
const mapDispatchToProps = ( {Plus, Minus, Multiplication, Division} ) ;

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);