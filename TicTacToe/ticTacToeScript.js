const app = {}
app.elements = {}
app.methods = {}
app.elements.allBoxes = document.querySelector('.box')
app.elements.boxContainer = document.querySelector('#blocks')
app.elements.turnToGo = document.querySelector('#turnToGo')
app.elements.currentBox = null;
app.elements.player = {};
app.elements.player.first = `cross`;
app.elements.player.second = `circle`;
app.elements.image = null

firstGoes = () =>{
	const randomNumber = (Math.floor(Math.random() * 2))
	return randomNumber;
}

const rand = firstGoes()

if(rand <= 0.5){
	app.elements.turnToGo.textContent = `Player 1 goes first`;
	for(let i = 0; i < app.elements.boxContainer.children.length; i++){
		if(i % 2 != 0){
			app.elements.image = 'cross'
		}
		else{
			app.elements.image = 'circle'
		}
	}
}
else{
	app.elements.turnToGo.textContent = `Player 2 goes first`;
}

setImageFunction = (element) => {
	element.style.cssText = `
		background-image: url('Images/${app.elements.image}.png');
		background-repeat: no-repeat;
		background-size: 100%;`
}

app.methods.setCross = (function() {
	app.elements.boxContainer.addEventListener('click', (e) =>{
		currentBox = e.target;
		if(currentBox.tagName.toLowerCase() === 'div'){
			setImageFunction(currentBox)
		}
	})
})()
