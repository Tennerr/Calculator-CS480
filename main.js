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

let constants = {
	e: Math.E
};
let constant_names = Object.keys(constants);

let unary_functions = {
	sin: genFunc((x) => Math.sin(x)),
	cos: genFunc((x) => Math.cos(x)),
	tan: genFunc((x) => Math.tan(x)),
	ln: genFunc((x) => Math.log(x)),
	'-': genFunc((x) => 0-x),
	log: genFunc((x) => Math.log10(x)),
	sqrt: genFunc((x) => Math.sqrt(x))
};

let binary_functions = {
	'+': genFunc((x, y) => x + y, TYPE_OP, 2),
	'−': genFunc((x, y) => x - y, TYPE_OP, 2),
	'*': genFunc((x, y) => x * y, TYPE_OP, 3),
	'/': genFunc((x, y) => x / y, TYPE_OP, 3),
	'%': genFunc((x, y) => x % y, TYPE_OP, 3),
	'^': genFunc((x, y) => Math.pow(x, y), TYPE_OP, 4, false),
};

let functions = Object.keys(unary_functions).concat(Object.keys(binary_functions));
let operators = '+−*/%^';

function isNumber(c) {
	if (typeof c === 'number') 
	{
		return true;
	}

	return !isNaN(c) || constant_names.includes(c) || c === '.';
}

function isFunction(c) 
{
	return functions.includes(c);
}

function findElement(i, eqn, list) 
{
	for (var j = 0; j < list.length; j++) 
	{
		var n = list[j].length;
		// if there is a substring in the expression that is = to a function. Helpful to find functions like sin that have more then 1 character
		if (eqn.substring(i, i + n) === list[j]) 
		{
			// returns true to indicate that the function has been found, the function itself, and the length of the function
			return [true, list[j], n];
		}
	}

	return [false, '', 1];
}

function getPrecedence(op) 
{
	if (Object.keys(binary_functions).includes(op)) 
	{
		return binary_functions[op].prec;
	}

	return 0;
}

function isLeftAssociative(op) {
	if (Object.keys(binary_functions).includes(op)) {
		return binary_functions[op].left;
	}

	return true;
}

function getNumVal(c) 
{
	if (typeof c === 'number') 
	{
		return c;
	} 
	else if (constant_names.includes(c)) 
	{
		return constants[c];
	} 
	else 
	{
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
	for (var i = 0, eq_len = eqn.length; i < eq_len; i++)  
	{
		let token = eqn[i];
		//ignores spaces and commas
		if (token === ' ' || token === ',') 
		{
			continue;
		}

		if (isNumber(t)) 
		{
			type = TYPE_CONST;

			obj = token;
			if (i < eq_len - 1) 
			{
				// get entire number
				while (isNumber(eqn[i + 1])) 
				{
					obj += eqn[i + 1];
					i++;
					if (i >= eq_len - 1) 
					{
						break;
					}
				}
			}
			obj = getNumVal(obj);
		}
		// if not a number
		else
		{
			let data = findElement(i, eqn, functions);
			let found = data[0];
			obj = data[1];
			let n = data[2];
			if (found) 
			{
				type = operators.includes(obj) ? TYPE_OP : TYPE_FUNC;
			} 
		}
	}
}

function parse(rpn)
{

}

function evaluate(tree)
{

}