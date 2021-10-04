export const Plus = (a,b) => {
    return {
        type: "PLUS",
        payloada: a,
        payloadb: b,
    }
}

export const Minus = (a, b)  => {
    return {
        type: "MINUS",
        payloada: a,
        payloadb: b,
    }
}

export const Multiplication = (a, b) => {
    return {
        type: "MULTIPLICATION",
	    payloada: a,
        payloadb: b,
    }
}

export const Division = (a, b) => {
    return {
        type: "DIVISION",
        payloada: a,
        payloadb: b,
    }
}