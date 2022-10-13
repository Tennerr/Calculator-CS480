let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));


let TYPE_OP = 'o';
let TYPE_CONST = 'c';
let TYPE_FUNC = 'f';
let TYPE_ELSE = 'e';
let TYPE_LPAREN = '(';
let TYPE_RPAREN = ')';

function genFunc(evaluate, type = TYPE_FUNC, prec = 0, left = true) {
	return {
		evaluate: evaluate,
		t: type,
		prec: prec,
		left: left
	};
}

function genNode(val, func = true, unary = true) {
	return {
		val: val,
		func: func,
		unary: unary,
		right: null,
		left: null,
		name: ''
	};
}