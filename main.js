let user = "John Doe";
console.log(user);
let student = "Veranika";
console.log(student);
user = student; // Veranika
console.log(user);

let test = 1;
test++;
test += "1"; // '21'
console.log(test);
test -= 1; // 20
console.log(test);
test = true; // true
console.log(test);

const arr = [2, 3, 5, 8];
let res = 1;
for (let i = 0; i < arr.length; i++) {
  res *= arr[i];
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

function palidrome(str) {
   return str === str.split('').reverse().join('') ? true : false;
}
console.log(palidrome('dwfsfyjmwd'));



function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log("Min number - ", min(9, 8));

function max(x, y) {
  return x > y ? x : y;
}
console.log("Max number - ", max(5, 2));

const arr5 = [58, 96, 12, 73, 28, 35, 5, 88, 0, 41, 100]; // данное дз показала Марта, сама сделать его не смогла, до сих немного не понимаю его
function changeNumber(a) { // задали функцию с параметром а
  const num = a.join("-"); // создали переменную, которая превращает массив в строку разделенной  между значениями -
  if (num.includes("0")) { // метод includes  ищет в строке 0, если находит
    return num.replaceAll("0", "zero"); // то меняет все 0 на zero  
  }
  return num;
}
console.log([arr5].map(changeNumber));

// homework lesson-4

let sum = a => b => a + b;
console.log(sum(5)(2));

// click

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']; // дан массив
const changeText1 = document.getElementById('text1'); // выбираем объет по id
const changeText2 = document.getElementById('text2');
const changeText3 = document.getElementById('text3');

const changeColor = () => {  // создаем функцию смены цвета
	let j = 0;    // задаем j-элементу начальное значение, что бы выбирал первый цвет
	return function (event) {  // возвращаем значение функции
		event.target.style.color = colors[j];  // выбираем каждый цвет по массиву
		j++; 
		if (j >= colors.length) {
			j = 0;  // проверка, что бы при нажатии большее кол-во раз, чем элементов массива,
		}           // цвета повторились вновь
	}
}

const changeText1Color = changeColor();  // для смены цвета, независимо от нажатия любого объекта text
const changeText2Color = changeColor();
const changeText3Color = changeColor();

changeText1.addEventListener('click', changeText1Color);
changeText2.addEventListener('click', changeText2Color);  // вызываем нажатием смену текста
changeText3.addEventListener('click', changeText3Color);



//  lesson - 5

function reverseDate(date) {
	return date = date.split("-").reverse().join(".");
}
console.log(reverseDate('2020-11-26'));


const data = [
	{
	  country: 'Russia',
	  city: 'Saint Petersburg',
	  hotel: 'Hotel Leopold',
	},
	{
	  country: 'Spain',
	  city: 'Santa Cruz de Tenerife',
	  hotel: 'Apartment Sunshine',
	},
	{
	  country: 'Slowakia',
	  city: 'Vysokie Tatry',
	  hotel: 'Villa Kunerad',
	},
	{
	  country: 'Germany',
	  city: 'Berlin',
	  hotel: 'Hostel Friendship',
	},
	{
	  country: 'Indonesia',
	  city: 'Bali',
	  hotel: 'Ubud Bali Resort&SPA',
	},
	{
	  country: 'Netherlands',
	  city: 'Rotterdam',
	  hotel: 'King Kong Hostel',
	},
	{
	  country: 'Marocco',
	  city: 'Ourika',
	  hotel: 'Rokoko Hotel',
	},
	{
	  country: 'Germany',
	  city: 'Berlin',
	  hotel: 'Hotel Rehberge Berlin Mitte',
	},
  ];

  const searchValue = str => {  // создаем функцию с параметром str
	const result = []; // rпустой массив, в который будет происходить запись
	  for (let i=0; i< data.length; i++) {  // с помощью цикла перебираем элементы
		  const searchValueData = `${data[i].country} ${data[i].city} ${data[i].hotel}`.toLocaleLowerCase(); // сразу приводятся к нижнему регистру,
		  // что бы не выдало ошибку

		  if (searchValueData.includes(str)) { // находится с помощью метода введенный параметр
			  result.push(data[i]);// в массив добавляется найденный элемент
		  }
	  }
	return result;
  }
console.log(searchValue('germany'));