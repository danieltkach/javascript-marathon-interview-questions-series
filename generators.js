const genFunction = function* () {
	function multiply(a, b) {
		return a * b;
	}

	console.log('Hey');
	yield ('Hey');
	console.log('Code Witcher');
	yield;
	console.log('Let\'s');
	yield (multiply);
};

const genObj = genFunction();
console.log(genObj.next());
// console.log(genObj.return());
console.log(genObj.next());
const secretFunction = genObj.next().value;
console.log(secretFunction(2000, 1.9));
console.log(genObj.next());

