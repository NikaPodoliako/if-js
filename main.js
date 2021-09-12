let user = "John Doe";
console.log(user);
let student = "Veranika";
console.log(student);
user = student; // Veranika
console.log(user);

let test = 1;
test++;
test += '1'; // '21'
console.log(test);
test -= 1; // 20
console.log(test);
test = true; // true
console.log(test);

const arr = [2, 3, 5, 8];
let res = 1;
for (let i = 0; i < arr.length; i++) {
	res *= arr[i] 
}
console.log(res);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] > 5 && arr2[i] < 10) { 
			console.log(arr2[i]);
			}
	}

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
	for (let i = 0; i < arr3.length; i++) {
		if (arr3[i] % 2 === 0) {
			console.log(arr3[i]);
		}
	}	

	//lesson-3

let palindromeWord = 'kok';
const newPal = palindromeWord.split('').reverse().join('');
function palidrome() {
	(newPal === palindromeWord) ? console.log(true) : console.log(false); 
}
palidrome();


function min(a, b) {
		if (a < b) {
			console.log('Min number', a);
	} 	else {
			console.log('Min number', b);
	}
}
min(9, 8);

function max(a, y) {
	(a > y) ? console.log('Max number', a) : console.log('max number', y)
}
max(5, 2);

let arr = [58, 96, 12, 73, 28, 35, 5, 88, 0, 41, 100]; // данное дз показала Марта, сама сделать его не смогла, до сих немного не понимаю его
function changeNumber(a) {
	const num = a.join('-');
	if (num.includes('0')){
		return num.replaceAll('0', 'zero');
	}
	return num;
}
console.log([arr].map(changeNumber)); 