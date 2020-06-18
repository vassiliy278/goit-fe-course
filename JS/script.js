// // const message = 'Lorem ipsum dolor';
// // console.log(message);
// // const words = message.split(' ');
// // console.log(words);
// // const snakeCaseMessage = words.join('_*_');
// // console.log(snakeCaseMessage);
// // const fruits1 = ['apple', 'grape', 'banana', 'plum'];
// // const indexOfPlum = fruits1.indexOf('plum');
// // console.log('index No:', indexOfPlum);
// // const includeOfPlum = fruits.includes('plum');
// // console.log(includeOfPlum);
// // const fruits = ['01', '02', '03'];
// // console.log(fruits);
// // fruits.push('04');
// // console.log(fruits);
// // fruits.pop();
// // fruits.pop();
// // console.log(fruits);
// // fruits.unshift('00');
// // console.log(fruits)
// // const cards = ['card-01', 'card-02', 'card-03', 'card-04', 'card-05'];
// // console.log(cards);
// // const selected = cards.indexOf('card-04');
// // console.log(selected);
// // const card = cards.splice(selected, 1)[0];
// // console.log(cards);
// // cards.splice(1,0,card)
// // console.log(cards);
// const images = ['image-1', 'image-2', 'image-3', 'image-4', 'image-5'];
// let currentImageIdx = 0;
// console.log(images[currentImageIdx]);
// currentImageIdx += 1;
// console.log(images[currentImageIdx]);
'use strict'
let show;
do {
	let show = prompt('Fill form');
	console.log(show);
	console.log('I am DO while...')
	show += 1;
}
while (show === null);

