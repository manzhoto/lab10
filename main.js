
let lab1 = [0, 0, 0, 0, 5, 0, 0]; 
let lab2 = [5, 5, 5, 4, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 4, 10, 10, 10, 10, 2];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5,10,10,10,5];
let quiz1 = [34];

let sum1 = 0;
for (let i = 0; i < lab1.length; i++) {
  sum1 += lab1[i];
}

let sum2 = 0;
for (let i = 0; i < lab2.length; i++) {
  sum2 += lab2[i];
}

let sum3 = 0;
for (let i = 0; i < lab3.length; i++) {
  sum3 += lab3[i];
}

let sum4_5 = 0;
for (let i = 0; i < lab4_5.length; i++) {
  sum4_5 += lab4_5[i];
}


let sum6 = 0;
for (let i = 0; i < lab6.length; i++) {
  sum6 += lab6[i];
}

let sum8 = 0;
for (let i = 0; i < lab8.length; i++) {
  sum8 += lab8[i];
}

let sumQuiz = quiz1[0];

let sums = [sum1, sum2, sum3, sum4_5, sum6, sum8, sumQuiz];

function sum(list) {
	let sum = 0;
	for (var i = list.length - 1; i >= 0; i--) {
		sum += list[i];
	}
	return sum;
}


let labs_total = ( (sum1/40 * 100) + (sum2/40 * 100) + (sum3/40 * 100) + (sum4_5/40 * 100) + (sum6/40 * 100) + (sum8/40 * 100)) / 6
let quiz_total = sumQuiz/40 * 100


let total_score = (labs_total * 0.60) + (quiz_total * 0.4)

const results = {
	lab1: lab1,
	lab2: lab2,
	lab3: lab3,
	lab4_5: lab4_5,
	lab6: lab6,
	lab8: lab8,
	quiz1: quiz_total,
	sums: sums,
	total_score: total_score 
}

console.log("Hello world")
console.log(results)



