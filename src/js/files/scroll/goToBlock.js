export let goToBlock = (
	targetBlock,
	noHeader = false,
	speed = 500,
	offsetTop = 0
) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = '';
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = 'header.header';
			const headerElement = document.querySelector(headerItem);
			if (!headerElement.classList.contains('_header-scroll')) {
				headerElement.style.cssText = `transition-duration: 0s;`;
				headerElement.classList.add('_header-scroll');
				headerItemHeight = headerElement.offsetHeight;
				headerElement.classList.remove('_header-scroll');
				setTimeout(() => {
					headerElement.style.cssText = ``;
				}, 0);
			} else {
				headerItemHeight = headerElement.offsetHeight;
			}
		}

		let targetBlockElementPosition =
			targetBlockElement.getBoundingClientRect().top + scrollY;
		targetBlockElementPosition = headerItemHeight
			? targetBlockElementPosition - headerItemHeight
			: targetBlockElementPosition;
		targetBlockElementPosition = offsetTop
			? targetBlockElementPosition - offsetTop
			: targetBlockElementPosition;
		window.scrollTo({
			top: targetBlockElementPosition,
			behavior: 'smooth',
		});
	}
};
