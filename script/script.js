/*function change() {
	let theme = document.getElementById('theme-change');
	let current = theme.getAttribute('data-bs-theme');
	if (current === 'light'){
		theme.setAttribute('data-bs-theme','dark');
		console.log('oscuro');
	} else {
		theme.setAttribute('data-bs-theme','light');
		console.log('cambiado a claro');
	}
}*/
function change() {
    let themes = document.querySelectorAll('.theme-change');
    themes.forEach(theme => {
        let current = theme.getAttribute('data-bs-theme');
        if (current === 'light') {
            theme.setAttribute('data-bs-theme', 'dark');
            console.log('oscuro');
        } else {
            theme.setAttribute('data-bs-theme', 'light');
            console.log('cambiado a claro');
        }
    });
}