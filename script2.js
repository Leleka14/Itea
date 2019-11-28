// const h1 = document.querySelector('#js');
// const coordinates = h1.getBoundingClientRect();

// const isTrue = document.createElement('span');
// isTrue.textContent = 'Yes, this is true!';
// document.body.appendChild(isTrue);
// isTrue.style.display = 'none';
// h1.addEventListener('mouseover', () => {
// 	let bottomStyle = coordinates.bottom + 10;
// 	let leftStyle = coordinates.left;
// 	isTrue.style.cssText = `
// 	display: block;
// 	position: fixed;
// 	left: ${leftStyle}px;
// 	top: ${bottomStyle}px;
// 	`;
// })
// h1.addEventListener('mouseleave', () => {
// 	isTrue.style.cssText = `
// 	display: none;`;
// 	})

// alerting = (arg) =>{
// 	alert(arg)
// }
// const btn = document.querySelector('button');
// const inpt = document.querySelector('input');
// const h1Tag = document.querySelector('h1');
// let txt = '';
// const config = {
//   once: false,
//   passive: false,
// };
// let count = 0;
// btn.addEventListener('click',handleCount, config);
// // inpt.addEventListener('keydown',handleCount);
// function handleCount(e){
//    setInterval(increaseCount, 2000)
// }

// function increaseCount(){
// 	count += 1;
// 	h1Tag.textContent = count
// }

// btn.addEventListener('transitionend', () =>{
// 	h1Tag.textContent = count
// 	btn.classList.toggle('scaleBin')
// 	count = 0;
// })

// function keyEnters(e){
//   if(e.code.toUpperCase() === 'BACKSPACE'){
//     let arr = txt.split('');
//     arr.pop();
//     let txt2 = arr.join().replace(',', '');
//     txt = txt2;
//     h1Tag.textContent = txt;
//     return;
//   }
//   txt+= e.key;
//   h1Tag.textContent = txt;
// }

// const pr = prompt('Enter value');
// console.log(pr)
// let timePr = pr * 1000;

// const timeOut = setTimeout(() => {
//     clearInterval(alive)
//     console.log('Boom!')
// }, 5000);
// let alive = setTimeout(() => {
//     clearInterval(timeOut)
//     console.log('You Alive')
// }, timePr)

// setInterval(() => {
// 	for(let i = 0; i < 1550; i++){
// 		console.log(i)
// 	}
// }, 1000)

// setTimeout(function loop(){
// 	for(let i = 0; i < 1550; i++){
// 		console.log(i)
// 	}
// 	const rec = setTimeout(loop, 1000)
// })

const sec = document.querySelector('section')
let currentTarget

sec.addEventListener('click', (e) =>{
	currentTarget = e.target
	currentTarget.classList.toggle('highLight')
})