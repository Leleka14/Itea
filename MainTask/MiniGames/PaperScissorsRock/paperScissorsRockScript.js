
const element = {}
element.info = {}
element.methods = {}
element.info.currentUser = sessionStorage.getItem('currentUser')
element.info.loginAndSignup = document.querySelector('#login-and-signup')
element.info.exitImage = document.querySelector('#exit')
element.info.allSection = document.querySelector('.allSection')

element.methods.getUser = (function(){
	if(element.info.currentUser){
		element.info.currentUser = JSON.parse(element.info.currentUser)
		element.info.loginAndSignup.style.display = 'none'
		element.info.exitImage.style.display = 'block'
	}
	else{
		element.info.loginAndSignup.style.display = 'block'
	}
})()

element.info.exitImage.addEventListener('click', () => {
	sessionStorage.clear()
	document.location.reload(true);
})

let userScore = 0
let computerScore = 0
const userScoreSpan = document.getElementById("userScore")
const computerScoreSpan = document.getElementById("computerScore")
const scoreBoardDiv = document.querySelector(".scoreBoard")
const resultDiv = document.querySelector(".result > p")
const paperDiv = document.getElementById("paper")
const rockDiv = document.getElementById("rock")
const scissorsDiv = document.getElementById("scissors")

getComputerChoice = () =>{
	const choices = ['rock', 'scissors', 'paper']
	const randomNumber = (Math.floor(Math.random() * 3))
	return choices[randomNumber]
}

toUpper = word =>{
	switch(word){
		case('rock'):
			return 'Rock'
			break
		case('paper'):
			return 'Paper'
			break
		case('scissors'):
			return 'Scissors'
			break
	}
}

win = (userChoice, computerChoice) =>{
	userScore++
	userScoreSpan.innerHTML = userScore
	const smallUserWord = 'User'.fontsize(3).sub()
	const smallComputerWord = 'Computer'.fontsize(3).sub()
	const resultText = `${toUpper(userChoice)}${smallUserWord} beats ${toUpper(computerChoice)}${smallComputerWord}. You won!`
	resultDiv.innerHTML = resultText
	const userChoiceDiv = document.getElementById(userChoice)
	userChoiceDiv.classList.add('greenBorder')
	setTimeout(() => {userChoiceDiv.classList.remove('greenBorder')}, 300)
}

draw = (userChoice, computerChoice) =>{
	const smallUserWord = 'User'.fontsize(3).sub()
	const smallComputerWord = 'Computer'.fontsize(3).sub()
	const resultText = `${toUpper(userChoice)}${smallUserWord} equals to ${toUpper(computerChoice)}${smallComputerWord}. It's a draw!`
	resultDiv.innerHTML = resultText
	const userChoiceDiv = document.getElementById(userChoice)
	userChoiceDiv.classList.add('grayBorder')
	setTimeout(() => {userChoiceDiv.classList.remove('grayBorder')}, 300)
}

lose = (userChoice, computerChoice) =>{
	computerScore++
	computerScoreSpan.innerHTML = computerScore
	const smallUserWord = 'User'.fontsize(3).sub()
	const smallComputerWord = 'Computer'.fontsize(3).sub()
	const resultText = `${toUpper(userChoice)}${smallUserWord} loses to ${toUpper(computerChoice)}${smallComputerWord}. You lost!`
	resultDiv.innerHTML = resultText
	const userChoiceDiv = document.getElementById(userChoice)
	userChoiceDiv.classList.add('redBorder')
	setTimeout(() => {userChoiceDiv.classList.remove('redBorder')}, 300)
}


game = userChoice =>{
	if(element.info.currentUser){
		const computerChoice = getComputerChoice()
		const userAndComputerChoice = `${userChoice} ${computerChoice}`
		switch(userAndComputerChoice){
			case('paper rock'):
			case('scissors paper'):
			case('rock scissors'):
				win(userChoice, computerChoice)
				break
			case('paper paper'):
			case('scissors scissors'):
			case('rock rock'):
				draw(userChoice, computerChoice)
				break
			case('paper scissors'):
			case('scissors rock'):
			case('rock paper'):
				lose(userChoice, computerChoice)
				break
		}	
	} else{
        element.info.allSection.textContent = `Please Log In to play this game`
        element.info.allSection.style.cssText = `text-align: center;
                                                font-size: 30px;
                                                font-weight: bold;
                                                color: red;`
	}
	
}

main = () => {
	rockDiv.addEventListener('click', function() {
		game("rock")
	})
	paperDiv.addEventListener('click', function() {
		game("paper")
	})
	scissorsDiv.addEventListener('click', function() {
		game("scissors")
	})

}

main()