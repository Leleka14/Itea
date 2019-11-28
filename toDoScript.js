const inputOfTask = document.querySelector('#inputOfTask')
const saveTaskButton = document.querySelector('#saveTaskButton')
const listOfTasks = document.querySelector('#listOfTasks')
const importantTaskConfirm = document.querySelector('#importantTaskConfirm')

const clickFunction = () =>{
	inputOfTask.addEventListener('keyup', function(event){
		if(event.keyCode == 13){
			saveTaskButton.click()
		}
	})
	const addingTaskFunction = (button) => {
		button.addEventListener('click', clickOnButtonFunction)
	}
	const clickOnButtonFunction = () =>{
		const valueOfInput = inputOfTask.value
		if(valueOfInput){
			const newTask = document.createElement('li')
			newTask.textContent = valueOfInput
			if(importantTaskConfirm.checked === true){
				newTask.style.cssText = `
				color: red;`
				listOfTasks.insertBefore(newTask, listOfTasks.firstElementChild)
			}
			else{
				listOfTasks.appendChild(newTask)
			}
			inputOfTask.value = ''
		}
		else{
			alert(`You've entered nothing! Please enter task...`)
		}
	}
	addingTaskFunction(saveTaskButton)
}

const deleteElementFunction = () => {
	const removingElementFunction = (element) => {
		element.addEventListener('dblclick', doubleClickOnElement)
	}
	const doubleClickOnElement = () => {

	}
}



clickFunction()



