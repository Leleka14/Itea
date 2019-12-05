const main = () => {
    const inputOfTask = document.querySelector('#inputOfTask')
    const saveTaskButton = document.querySelector('#saveTaskButton')
    const listOfTasks = document.querySelector('#listOfTasks')
    const importantTaskConfirm = document.querySelector('#importantTaskConfirm')
    const contextMenu = document.querySelector('.contextMenu')
    let currentBox = null;
    const user = localStorage.getItem('userData');
    const inputs = document.querySelectorAll('input');
    let array = []

    if(user){
        array = JSON.parse(user)
        for(let i = 0; i < array.length; i++){
            const task = document.createElement('li')
            task.textContent = array[i].text
            if(array[i].color === `red`){
                task.style.color = array[i].color
                listOfTasks.insertBefore(task, listOfTasks.firstElementChild)
            }
            else{
                listOfTasks.appendChild(task)
            }
        }
    }

    const clickOnButtonFunction = () => {
        const valueOfInput = inputOfTask.value.trim()
        if (valueOfInput) {
            const newTask = document.createElement('li')
            newTask.textContent = valueOfInput
            const refreshLi = {}
            if (importantTaskConfirm.checked === true) {
                newTask.style.cssText = `
				color: red;`
                listOfTasks.insertBefore(newTask, listOfTasks.firstElementChild)
                refreshLi.text = newTask.textContent
                refreshLi.color = `red`
                array.push(refreshLi)
                
            } else {
                listOfTasks.appendChild(newTask)
                refreshLi.text = newTask.textContent
                refreshLi.color = `black`
                array.push(refreshLi)  
            }
            localStorage.setItem('userData', JSON.stringify(array))
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
            let editStr = prompt('Change task to:');
            if(editStr){
                editStr.trim()
            }
            if(editStr){
                for(let i = 0; i < array.length; i++){
                    if(array[i].text === currentBox.textContent){
                        array[i].text = editStr
                    }
                }
                localStorage.setItem('userData', JSON.stringify(array))
                currentBox.textContent = editStr
            }
            else{
                alert(`You've entered nothing! Please enter task...`)
            }
            contextMenu.style.display = 'none'

        }
        if (el.target && el.target.textContent.toLowerCase() === 'delete'){
            for(let i = 0; i < array.length; i++){
                if(array[i].text === currentBox.textContent){
                    array.splice(i, 1)
                }
            }
            localStorage.setItem('userData', JSON.stringify(array))
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

