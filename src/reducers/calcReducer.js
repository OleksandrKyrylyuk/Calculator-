const initState = {
	counter: 0
}
const CalcReducer = (state = initState, action) => {
	switch (action.type){
		case "PLUS":
			return {
				counter: Math.floor(action.payloada) + Math.floor(action.payloadb)
			};
		case "MINUS":
			return {
				counter: action.payloada - action.payloadb
			};
		case "MULTIPLICATION":
			return {
				counter: action.payloada * action.payloadb
			};
		case "DIVISION":
			return {
				counter: action.payloada / action.payloadb
			};
		default:
            return state;
	}		
}

export default CalcReducer;