const app = {}
app.elements = {}
app.methods = {}
app.elements.boxContainer = document.querySelector('#blocks')
app.elements.contextMenu = document.querySelector('.contextMenu')
app.elements.currentBox = null;
app.elements.resetButton = document.querySelector('#resetButton')
app.elements.allBoxes = document.querySelectorAll('.box')
app.colors = {}
app.colors.defaultColor = 'orange'

app.methods.showContextMenu = (function(){
	app.elements.boxContainer.addEventListener('contextmenu', (e) => {
		e.preventDefault()
		if(e.target.tagName.toLowerCase() === 'div'){
			app.elements.currentBox = e.target
			app.methods.showContextMenuWindow(e.clientX, e.clientY)
		}
	})
})()

app.methods.showContextMenuWindow = function(leftPosition, topPosition){
	app.elements.contextMenu.style.cssText = `
	display: inline-block;
	position: absolute;
	top: ${topPosition}px;
	left: ${leftPosition}px;`
}
app.methods.hideContextMenu = (function(){
	app.elements.boxContainer.addEventListener('click', (e) =>{
		if(e.target && e.target.id === 'blocks'){
			app.elements.contextMenu.style.display = 'none'
		}
	})
})()
app.methods.applyNewBackgroundColor = (function(){
	app.elements.contextMenu.addEventListener('click', (e) =>{
		if(e.target && e.target.tagName.toLowerCase() === 'li'){
			if(app.elements.currentBox){
				app.elements.currentBox.style.backgroundColor = e.target.textContent
			}
		}
	})
}())

app.methods.resetToDefaultColor = (function(){
	app.elements.resetButton.addEventListener('click', () =>{
		app.elements.allBoxes.forEach(element =>{
			element.style.backgroundColor = app.colors.defaultColor
		})
	})
}())

