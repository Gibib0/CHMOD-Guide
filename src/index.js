'use strict'

let inputNum = Number(prompt('Enter a number from 0 to 7: '))

if (Number.isNaN(inputNum)) {
	console.log('Entered wrong data');
}