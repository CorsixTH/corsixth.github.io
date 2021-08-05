// SPDX-FileCopyrightText: 2021 Romain Vigier <contact AT romainvigier.fr>
//
// SPDX-License-Identifier: GPL-3.0-or-later

'use strict';

const site = document.body;
const header = document.getElementById('header');
const menu = document.getElementById('menu');


function buildHamburgerMenu() {
	const button = document.createElement('button');
	button.classList.add('menu-button');
	button.id = 'menu-button';
	button.textContent = 'Open menu';
	button.addEventListener('click', e => {
		e.preventDefault();
		button.blur();
		if (menu.classList.contains('hidden')) {
			button.textContent = 'Close menu';
			button.classList.add('close');
			showMenu();
		} else {
			button.textContent = 'Open menu';
			button.classList.remove('close');
			hideMenu();
		}
	});
	site.append(button);
	header.classList.add('hamburger');
	menu.classList.add('hamburger');
}

function removeHamburgerMenu() {
	document.getElementById('menu-button').remove();
	header.classList.remove('hamburger');
	menu.classList.remove('hamburger');
}

function showMenu() {
	menu.classList.remove('hidden');
}

function hideMenu() {
	menu.classList.add('hidden');
}


const style = getComputedStyle(site);
if (style.display === 'block') {
	hideMenu();
	buildHamburgerMenu();
}

addEventListener('resize', e => {
	const style = getComputedStyle(site);
	if (style.display === 'block' && !menu.classList.contains('hamburger')) {
		hideMenu();
		buildHamburgerMenu();
	} else if (style.display === 'grid' && menu.classList.contains('hamburger')) {
		showMenu();
		removeHamburgerMenu();
	}
});
