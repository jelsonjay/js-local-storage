'use strict';

if (typeof Storage != 'undefined') {
	if (localStorage.users) {
		localStorage.users = Number(localStorage.users) + 1;
	} else {
		// localStorage.users
		localStorage.setItem('users', 1);
	}
	// show number of visitors
	let saved =
		'Number of visitors: ' + localStorage.users + ' visitors views this page';
	let users = document.querySelector('#app');
	users.innerHTML = saved;
	users.style.color = 'orange';
	users.style.fontSize = '32px';
} else {
	document.write('This browser do not support!');
}
