const app = {}
app.elements = {}
app.methods = {}
app.elements.players = {};
app.elements.boxContainer = document.querySelector('#blocks')
app.elements.turnToGo = document.querySelector('#turnToGo')
app.elements.players.player1ScoreSpan = document.querySelector('#user1Score')
app.elements.players.player2ScoreSpan = document.querySelector('#user2Score')
app.elements.players.firstPlayerImage = `cross`;
app.elements.players.secondPlayerImage = `circle`;
app.elements.players.firstPlayerTurnToGo = `It's Player's 1 turn to go...`;
app.elements.players.secondPlayerTurnToGo = `Player 2, your move!`
app.elements.players.firstPlayerValue = 1;
app.elements.players.secondPlayerValue = 2;
app.elements.currentBox = null;
app.elements.image = null
for(let i = 0; i < app.elements.boxContainer.children.length; i++){
	app.elements.boxContainer.children[i].value = 0;
}


firstGoes = () =>{
	const randomNumber = (Math.floor(Math.random() * 2));
	return randomNumber;
}

const rand = firstGoes();

if(rand <= 0.5){
	app.elements.turnToGo.textContent = app.elements.players.firstPlayerTurnToGo;
}
else{
	app.elements.turnToGo.textContent = app.elements.players.secondPlayerTurnToGo;
}

setImageFunction = (element) => {
	if(app.elements.turnToGo.textContent === app.elements.players.firstPlayerTurnToGo){
		app.elements.image = app.elements.players.firstPlayerImage;
		app.elements.currentBox.value = app.elements.players.firstPlayerValue;
		app.elements.turnToGo.textContent = app.elements.players.secondPlayerTurnToGo;
	}
	else{
		app.elements.image = app.elements.players.secondPlayerImage;
		app.elements.currentBox.value = app.elements.players.secondPlayerValue;
		app.elements.turnToGo.textContent = app.elements.players.firstPlayerTurnToGo;
	}
	element.style.cssText = `
		background-image: url('Images/${app.elements.image}.png');
		background-repeat: no-repeat;
		background-size: 100%;`
}

app.methods.setBackgroundInClick = (function() {
	app.elements.boxContainer.addEventListener('click', (e) =>{
		app.elements.currentBox = e.target;
		if(app.elements.currentBox.tagName.toLowerCase() === 'div' && app.elements.currentBox.value === 0){
			setImageFunction(app.elements.currentBox)
		}
	})
})()

// app.methods.check = (function() {
// 	for(let i = 0; i < app.elements.allBoxes.length; i++){
// 		if()
// 	}
// })()



