const arr = [4, 5, 6, 7];
const itr = arr[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

const obj = {
	name: 'Code Witcher',
	age: 40,
	occupation: 'Software Engineer',
	location: 'East Coast',
	[Symbol.iterator]() {
		let i = 0;
		return {
			next() {
				if (i < Object.keys(obj).length) return {value: Object.entries(obj)[i++], done: false}
				else return {done: true}
			}
		}
	}
};

for (let item of obj) {
	console.log(item);
}