'use strict';
let user = (document.querySelector('#app').innerHTML = 'name');

if (typeof Storage != 'undefined') {
	if (localStorage.users) {
	} else {
		// localStorage.users
		localStorage.setItem('users', 1);
	}
	document.write('users:' + localStorage.users);
} else {
	document.write('This browser do not support local storage!');
}
