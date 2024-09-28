import './libs/dynamicAdapt.js';

import { isWebp } from './helpers/isWebp.js';
import { menuInit } from './files/menu.js';
import './files/rating.js';
import { formFieldsInit, formSubmit } from './files/forms.js';

import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
	isWebp();
	menuInit();
	formFieldsInit();
	formSubmit();
});
