let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));


let TYPE_OP = 'o';
let TYPE_CONST = 'c';
let TYPE_FUNC = 'f';
let TYPE_ELSE = 'e';
let TYPE_LPAREN = '(';
let TYPE_RPAREN = ')';

function genFunc(evaluate, type = TYPE_FUNC, prec = 0, left = true) 
{
	return {
		evaluate: evaluate,
		t: type,
		prec: prec,
		left: left
	};
}

function genNode(val, func = true, unary = true) 
{
	return {
		val: val,
		func: func,
		unary: unary,
		right: null,
		left: null,
		name: ''
	};
}

let functions = Object.keys(unary_functions).concat(Object.keys(binary_functions));
let operators = '+−*/%^';

function isNumber(c) {
	if (typeof c === 'number') {
		return true;
	}

	return !isNaN(c) || constant_names.includes(c) || c === '.';
}

function getNumVal(c) {
	if (typeof c === 'number') {
		return c;
	} else if (constant_names.includes(c)) {
		return constants[c];
	} else {
		return parseFloat(c);
	}
}

function RPN(eqn) 
{
	let queue = [];
	let stack = [];

	let obj = '';
	let type = '';

	// for each token
	for (var i = 0; i < eq_len; i++) 
	{
		let token = eqn[i];
		//ignores spaces and commas
		if (t === ' ' || t === ',') {
			continue;
		}
	}
}

function parse(rpn)
{

}

function evaluate(tree)
{

}