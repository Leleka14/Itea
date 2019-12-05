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
app.elements.image = null;

for (let i = 0; i < app.elements.boxContainer.children.length; i++) {
    app.elements.boxContainer.children[i].value = 0;
}


const firstGoes = () => {
    const randomNumber = (Math.floor(Math.random() * 2));
    if (randomNumber <= 0.5) {
    	app.elements.turnToGo.textContent = app.elements.players.firstPlayerTurnToGo;
	} else {
    	app.elements.turnToGo.textContent = app.elements.players.secondPlayerTurnToGo;
	}
}

firstGoes();



setImageFunction = (element) => {
    if (app.elements.turnToGo.textContent === app.elements.players.firstPlayerTurnToGo) {
        app.elements.image = app.elements.players.firstPlayerImage;
        app.elements.currentBox.value = app.elements.players.firstPlayerValue;
        app.elements.turnToGo.textContent = app.elements.players.secondPlayerTurnToGo;
    } else {
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
    app.elements.boxContainer.addEventListener('click', (e) => {
        app.elements.currentBox = e.target;
        if (app.elements.currentBox.tagName.toLowerCase() === 'div' && app.elements.currentBox.value === 0) {
            setImageFunction(app.elements.currentBox)
            for(let i = 0; i < app.elements.boxContainer.children.length - 6; i++){
            	if(app.elements.boxContainer.children[i].value != 0 && app.elements.boxContainer.children[i].value === app.elements.boxContainer.children[i + 3].value){
            		if( app.elements.boxContainer.children[i + 3].value === app.elements.boxContainer.children[i + 6].value){
            			app.methods.displayWinner(i)
            		}
            	}
            }
            for(let i = 0; i < app.elements.boxContainer.children.length - 2; i++){
            	if(app.elements.boxContainer.children[i].value != 0 && app.elements.boxContainer.children[i].value === app.elements.boxContainer.children[i + 1].value){
            		if(app.elements.boxContainer.children[i + 1].value === app.elements.boxContainer.children[i + 2].value){
            			if(i === 0 || i === 3 || i === 6){
            				app.methods.displayWinner(i)
            			}
            		}
            	}
            }
            for(let i = 0; i < app.elements.boxContainer.children.length - 8; i++){
            	if(app.elements.boxContainer.children[i].value != 0 && app.elements.boxContainer.children[i].value === app.elements.boxContainer.children[i + 4].value){
            		if(app.elements.boxContainer.children[i + 4].value === app.elements.boxContainer.children[i + 8].value){
            			app.methods.displayWinner(i)
            		}
            	}
            }
            for(let i = 0; i < app.elements.boxContainer.children.length - 4; i++){
            	if(app.elements.boxContainer.children[i].value != 0 && app.elements.boxContainer.children[i].value === app.elements.boxContainer.children[i + 2].value){
            		if(app.elements.boxContainer.children[i + 2].value === app.elements.boxContainer.children[i + 4].value){
            			if(i === 2){
            				app.methods.displayWinner(i)
            			}
            		}
            	}
            }
            app.methods.resetIfDraw()
        }
    })
})()

app.methods.displayWinner = (i) =>{
    
	if(app.elements.boxContainer.children[i].value === app.elements.players.firstPlayerValue){
		app.elements.players.player1ScoreSpan.textContent++;
		app.elements.turnToGo.textContent = `Player 1 wins`
	}
	else{
		app.elements.players.player2ScoreSpan.textContent++;
		app.elements.turnToGo.textContent = `Player 2 wins`
	}
	for(let x = 0; x < app.elements.boxContainer.children.length; x++){
		app.elements.boxContainer.children[x].value = 0;
	}
	setTimeout(function() {
		for(let x = 0; x < app.elements.boxContainer.children.length; x++){
			app.elements.boxContainer.children[x].value = 0;
			app.elements.boxContainer.children[x].style.backgroundImage = 'none'
			firstGoes()
		}
	}, 2000)
	
}

app.methods.resetIfDraw = () =>{
	let drawConst = 0;
	for(let i = 0; i < app.elements.boxContainer.children.length; i++){
		if(app.elements.boxContainer.children[i].value != 0){
			drawConst++;
		}
	}
	if(drawConst === 9){
		app.elements.turnToGo.textContent = `It's a draw`;
		app.elements.players.player1ScoreSpan.textContent++;
		app.elements.players.player2ScoreSpan.textContent++;
		setTimeout(function() {
		for(let x = 0; x < app.elements.boxContainer.children.length; x++){
			app.elements.boxContainer.children[x].value = 0;
			app.elements.boxContainer.children[x].style.backgroundImage = 'none'
			firstGoes()
		}
	}, 2000)
	}
	else{
		drawConst = 0;
	}
}
