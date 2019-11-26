const h1 = document.querySelector('#js');
const coordinates = h1.getBoundingClientRect();

const isTrue = document.createElement('span');
isTrue.textContent = 'Yes, this is true!';
document.body.appendChild(isTrue);
isTrue.style.display = 'none';
h1.addEventListener('mouseover', () => {
	let bottomStyle = coordinates.bottom + 10;
	let leftStyle = coordinates.left;
	isTrue.style.cssText = `
	display: block;
	position: absolute;
	left: ${leftStyle}px;
	top: ${bottomStyle}px;
	`;
})
h1.addEventListener('mouseleave', () => {
	isTrue.style.cssText = `
	display: none;`;
	})