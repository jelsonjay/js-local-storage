'use strict';
let user = (document.querySelector('#app').innerHTML = 'name');

if (typeof Storage != 'undefined') {
	if (localStorage.users) {
		localStorage.users = Number(localStorage.users) + 1;
	} else {
		// localStorage.users
		localStorage.setItem('users', 1);
	}
	let saved = 'Number of visitors:' + localStorage.users;
	let b = document.querySelector('#app');
	b.innerHTML = saved;
} else {
	document.write('This browser do not support!');
}
