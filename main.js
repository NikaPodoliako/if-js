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