const pasosLavadoVajilla = [
	'1. Tazas y vasos',
	'2. Tenedores, cucharas y cuchillos',
	'3. Platos y tuppers',
	'4. Negación',
	'5. Ira',
	'6. Negociación',
	'7. Depresión',
	'8. Aceptación',
	'9. Cacerolas',
	'10. Sartenes'
];

const lavar = pasosLavadoVajilla[Symbol.iterator]();
// console.log(lavar.next());
// console.log(lavar.next());
// console.log(lavar.next());
// console.log(lavar.next());

// for (let p of lavar) {
// 	console.log(p);
// }


console.log(...lavar);