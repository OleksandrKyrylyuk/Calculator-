import React from 'react';

const App = () => {
	let num1, num2, symbol;
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
				<input className="form-control" type="text" placeholder="" readOnly="" />
				<button type="button" 
					    className="text-center btn btn-success"
						onClick={ () => {console.log(num1, symbol, num2)}}>
							Success
				</button>
    		</div>
			
		</div>
	)
}

export default App;