'use strict';
let user = (document.querySelector('#app').innerHTML = 'name');

if (typeof Storage != 'undefined') {
	localStorage.setItem('name', 'Jay');
} else {
	document.write('This browser do not support local storage!');
}
