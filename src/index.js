'use strict'

let inputNum = Number(prompt('Enter a number from 0 to 7: '))

if (Number.isNaN(inputNum)) {
	console.log('Entered wrong data');
} else {
	switch (inputNum) {
		case 0:
			console.log('Level of rights: ---');
			break
		case 1:
			console.log('Level of rights: --x');
			break
		case 2:
			console.log('Level of rights: -w-');
			break
		case 3:
			console.log('Level of rights: -wx');
			break
		case 4:
			console.log('Level of rights: r--');
			break
		case 5:
			console.log('Level of rights: r-x');
			break
		case 6:
			console.log('Level of rights: rw-');
			break
		case 7:
			console.log('Level of rights: rwx');
			break
		default:
			console.log('Entered wrong number. Enter a number from 0 to 7');
	}
}