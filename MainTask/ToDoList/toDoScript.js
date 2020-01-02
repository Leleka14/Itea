
const element = {}
element.info = {}
element.methods = {}
element.info.currentUser = sessionStorage.getItem('currentUser')
element.info.loginAndSignup = document.querySelector('#login-and-signup')
element.info.exitImage = document.querySelector('#exit')
element.info.inputOfTask = document.querySelector('#inputOfTask')
element.info.saveTaskButton = document.querySelector('#saveTaskButton')
element.info.listOfTasks = document.querySelector('#listOfTasks')
element.info.importantTaskConfirm = document.querySelector('#importantTaskConfirm')
element.info.contextMenu = document.querySelector('.contextMenu')
element.info.currentBox = null;
element.info.user = localStorage.getItem('userData');
element.info.inputs = document.querySelectorAll('input');
element.info.toDoListWindow = document.querySelector('#toDoListWindow')
element.info.array = []

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

element.methods.main = () => {
    if(element.info.user){
        if(element.info.currentUser)
        {
            element.info.array = JSON.parse(element.info.user)
            for(let i = 0; i < element.info.array.length; i++){
                element.info.task = document.createElement('li')
                element.info.task.textContent = element.info.array[i].text
                if(element.info.array[i].color === `red`){
                    element.info.task.style.color = element.info.array[i].color
                    element.info.listOfTasks.insertBefore(element.info.task, element.info.listOfTasks.firstElementChild)
                }
                else{
                    element.info.listOfTasks.appendChild(element.info.task)
                }
            }
        }  
    }

    element.methods.clickOnButtonFunction = () => {
        element.info.valueOfInput = element.info.inputOfTask.value.trim()
        if (element.info.valueOfInput) {
            if(element.info.currentUser)
            {
                element.info.newTask = document.createElement('li')
                element.info.newTask.textContent = element.info.valueOfInput
                element.info.refreshLi = {}
                if (element.info.importantTaskConfirm.checked === true) {
                    element.info.newTask.style.cssText = `
                    color: red;`
                    element.info.listOfTasks.insertBefore(element.info.newTask, element.info.listOfTasks.firstElementChild)
                    element.info.refreshLi.text = element.info.newTask.textContent
                    element.info.refreshLi.color = `red`
                    element.info.array.push(element.info.refreshLi)
                } else {
                    element.info.listOfTasks.appendChild(element.info.newTask)
                    element.info.refreshLi.text = element.info.newTask.textContent
                    element.info.refreshLi.color = `black`
                    element.info.array.push(element.info.refreshLi)  
                }
                localStorage.setItem('userData', JSON.stringify(element.info.array))
                element.info.inputOfTask.value = ''
            }
            else{
                element.info.listOfTasks.textContent = `Please Log In to save this task`
            }
        } else {
            alert(`You've entered nothing! Please enter task...`)
        }
    }

    element.info.inputOfTask.addEventListener('keyup', function(event) {
        if (event.keyCode == 13) {
            element.info.saveTaskButton.click()
        }
    })

    element.methods.addingTaskFunction = (function() {
        element.info.saveTaskButton.addEventListener('click', element.methods.clickOnButtonFunction)
    })()

    element.info.listOfTasks.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        element.info.currentBox = e.target
        if (e.target.tagName.toLowerCase() === 'li') {
            element.methods.showContextMenuWindow(e.clientX, e.clientY)
        }
    })
    element.info.contextMenu.addEventListener('click', (el) => {
        if (el.target && el.target.textContent.toLowerCase() === 'edit') {
            element.info.editStr = prompt('Change task to:');
            if(element.info.editStr){
                element.info.editStr.trim()
            }
            if(element.info.editStr){
                for(let i = 0; i < element.info.array.length; i++){
                    if(element.info.array[i].text === element.info.currentBox.textContent){
                        element.info.array[i].text = element.info.editStr
                    }
                }
                localStorage.setItem('userData', JSON.stringify(element.info.array))
                element.info.currentBox.textContent = element.info.editStr
            }
            else{
                alert(`You've entered nothing! Please enter task...`)
            }
            element.info.contextMenu.style.display = 'none'

        }
        if (el.target && el.target.textContent.toLowerCase() === 'delete'){
            for(let i = 0; i < element.info.array.length; i++){
                if(element.info.array[i].text === element.info.currentBox.textContent){
                    element.info.array.splice(i, 1)
                }
            }
            localStorage.setItem('userData', JSON.stringify(element.info.array))
            element.info.currentBox.remove()
            element.info.contextMenu.style.display = 'none'
        }
    })

    element.methods.showContextMenuWindow = (leftPosition, topPosition) => {
        element.info.contextMenu.style.cssText = `
        display: inline-block;
        position: absolute;
        top: ${topPosition}px;
        left: ${leftPosition}px;`
    }

    element.info.toDoListWindow.addEventListener('click', (e) => {
        if (e.target && e.target.tagName != 'li') {
            element.info.currentBox = e.target
            element.info.contextMenu.style.display = 'none'
        }
    })
}

element.methods.main()

