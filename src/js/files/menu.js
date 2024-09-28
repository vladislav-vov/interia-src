const bodyLockToggle = () => {
	if (!document.documentElement.classList.contains('lock')) {
		document.documentElement.classList.add('lock');
	} else {
		document.documentElement.classList.remove('lock');
	}
};

export function menuInit() {
	if (document.querySelector('.icon-menu')) {
		document.addEventListener('click', function (e) {
			if (e.target.closest('.icon-menu')) {
				bodyLockToggle();
				document.documentElement.classList.toggle('menu-open');
			}
		});
	}
}
