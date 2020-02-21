let isContentEditable = false

function switchEditMode(e) {
if (!!e.ctrlKey && !!e.altKey && e.key === 'd') 
	{
		e.preventDefault()
		isContentEditable = !isContentEditable
		document.body.contentEditable=isContentEditable.toString()
	}
}
document.onkeydown = switchEditMode;
