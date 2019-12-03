const main = () => {
    const inputOfTask = document.querySelector('#inputOfTask')
    const saveTaskButton = document.querySelector('#saveTaskButton')
    const listOfTasks = document.querySelector('#listOfTasks')
    const importantTaskConfirm = document.querySelector('#importantTaskConfirm')
    const contextMenu = document.querySelector('.contextMenu')
    let currentBox = null;

    const clickOnButtonFunction = () => {
        const valueOfInput = inputOfTask.value.trim()
        if (valueOfInput) {
            const newTask = document.createElement('li')
            newTask.textContent = valueOfInput
            if (importantTaskConfirm.checked === true) {
                newTask.style.cssText = `
				color: red;`
                listOfTasks.insertBefore(newTask, listOfTasks.firstElementChild)
            } else {
                listOfTasks.appendChild(newTask)
            }
            inputOfTask.value = ''
        } else {
            alert(`You've entered nothing! Please enter task...`)
        }
    }

    inputOfTask.addEventListener('keyup', function(event) {
        if (event.keyCode == 13) {
            saveTaskButton.click()
        }
    })

    addingTaskFunction = (function() {
        saveTaskButton.addEventListener('click', clickOnButtonFunction)
    })()

    listOfTasks.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        currentBox = e.target
        if (e.target.tagName.toLowerCase() === 'li') {
            showContextMenuWindow(e.clientX, e.clientY)
        }
    })
    contextMenu.addEventListener('click', (el) => {
        if (el.target && el.target.textContent.toLowerCase() === 'edit') {
            currentBox.textContent = prompt('Change task to:');
            contextMenu.style.display = 'none'

        }
        if (el.target && el.target.textContent.toLowerCase() === 'delete') {
            currentBox.remove()
            contextMenu.style.display = 'none'
        }
    })

    const showContextMenuWindow = (leftPosition, topPosition) => {
        contextMenu.style.cssText = `
		display: inline-block;
		position: absolute;
		top: ${topPosition}px;
		left: ${leftPosition}px;`
    }

    toDoListWindow.addEventListener('click', (e) => {
        if (e.target && e.target.tagName != 'li') {
            currentBox = e.target
            contextMenu.style.display = 'none'
        }
    })
}

main()

