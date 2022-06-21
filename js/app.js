// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.

// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const myNum = 10;
const myStr = "my name";
const myBool = true;
let myUndefined;
const myNull = null;

// console.log(myNum, myStr, myUndefined, myNull);
// 3. დამატებით შექმენით ცვლადები myName, myHobby,  yearOfBirth, currentYear და მიანიჭეთ თქვენი სახელი, ჰობი, დაბადების წელი, მიმდინარე წელი.
const myName = "alina",
	myHobby = "coding",
	yearOfBirth = 1996,
	currentYear = 2022;

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: My name is (აქ name ცვლადი), I am (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   ცვლადების გამოყენებით) old and my hobby is (აქ hobby ცვლადი), გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.

let aboutMe = `My name is ${myName}, I am ${
	currentYear - yearOfBirth
} old and my hobby is ${myHobby}`;

// console.log(aboutMe);

let aboutMe2 =
	"My name is " +
	myName +
	" , I am " +
	(currentYear - yearOfBirth) +
	" old and my hobby is " +
	myHobby;

// console.log(aboutMe2);

//მასივი, ობიექტი  array, object

let myArr = [
	10,
	3,
	5,
	"example text",
	true,
	false,
	null,
	myNum,
	myUndefined,
	30,
];

let firstEl = myArr[0];
let secondEl = myArr[1];
let myArrLength = myArr.length; //array length  property

let lastEl = myArr[myArrLength - 1];

// console.log(myArr);
// console.log(firstEl, "firstEl");
// console.log(secondEl, "secondEl");
// console.log(myArrLength, "myArrLength");
// console.log(lastEl, "lastEl");

let myArr2 = [20, 30, ["my name", "my email", 100], null];

// console.log(myArr2);

let innerArr = myArr2[2];

let zeroIndex = 0;

// console.log(innerArr, "innerArr");
// console.log(zeroIndex, innerArr[zeroIndex], myArr2[2][1]);
// myArr2 = 20;
// console.log(typeof myArr2);

let myArr3 = [{ name: "tea", age: "25" }, 2, 4, 8, 16];

myArr3[0] = "my name"; //ვცვლით პირველ ელემენტს

// myArr3[myArr3.length] = "last element";

// console.log(myArr3);
//method
let lastElPop = myArr3.pop(); //აშორებს ბოლო ელემენტს, გვიბრუნებს ელემენტს
// console.log(lastElPop, myArr3);

let lastElPush = myArr3.push(20); //ამატებს ბოლო ელემენტს, გვიბრუნებს სიგრძეს
// console.log(lastElPush, myArr3);

let firstElShift = myArr3.shift(); //აშორებს პირველ ელემენტს, აბრუნებს ელემენტს
// console.log(firstElShift, myArr3);

let lastElUnshift = myArr3.unshift(20); //ამატებს პირველ ელემენტს, გვიბრუნებს სიგრძეს
// console.log(lastElUnshift, myArr3);

let joinedArr = myArr3.join(":"); //შეერთება
// console.log(joinedArr);

let myString = 'shop\'s name: "name"';

const person = {
	age: myNum,
	email: "example@gmail.com",
	address: ["tbilisi", "batumi"],
	tel: {
		home: 123456789,
		work: 2334567899997979,
	},
	name: "Alina",
};

person.age = "text";

// console.log(person.age, person.email);
const userAddress = person.address;

// console.log(userAddress[0], person.address[0]);
// console.log(person.tel.work);

let nameKey = "name";

// console.log(person["name"], person.name, person[nameKey]);
person.surname = "bregvadze";
person.name = "ალინა";

// console.log(person);
const objKeysArr = Object.keys(person);
const objValArr = Object.values(person);
// console.log(objKeysArr); //returns array of keys
// console.log(objValArr); //returns array of values

let userMainAddress = "tbilisi";

let anotherUserAddress = userMainAddress;

// let anotherUserAddress = 'tbilisi';

// console.log(userMainAddress, "userMainAddress");
// console.log(anotherUserAddress, "anotherUserAddress");

userMainAddress = "batumi";

// console.log(userMainAddress, "userMainAddress update main");
// console.log(anotherUserAddress, "anotherUserAddress");

let addressObj1 = {
	main: "tbilisi",
	second: "batumi",
};

let addressObj2 = addressObj1;

// console.log(addressObj1, "addressObj1");
// console.log(addressObj2, "addressObj2");

addressObj1.main = "kutaisi";

// console.log(addressObj1, "addressObj1 update first");
// console.log(addressObj2, "addressObj2");

addressObj2.main = "tbilisi";

// console.log(addressObj1, "addressObj1 update second");
// console.log(addressObj2, "addressObj2");

let copyObj = { ...addressObj1 };
// console.log(addressObj1, "addressObj1 ");
// console.log(copyObj, "copyObj");

copyObj.main = "rustavi";

// console.log(addressObj1, "addressObj1 update with spread");
// console.log(copyObj, "copyObj");

let arrToCopy = [1, 2, 4];

let copiedArr = [...arrToCopy];
// let copiedArr =  [1, 2, 4];

// let name = prompt("what's your name?");
// let mainAddress = prompt("what's your address?");
// let mainTel = prompt("what's your tel?");

// console.log(name, mainAddress, mainTel);

// let userInfo = {
// 	name: name,
// 	userAddress: mainAddress,
// 	userTel: mainTel,
// };

// alert(`your name is ${userInfo.name}`);
// console.log(userInfo);
