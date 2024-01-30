const xmenu = document.querySelector('#lines-menu');
const menuLinks = document.querySelector('.nav-menu');
const menuLinks2 = document.querySelector('#nav-menu-2');
const main_container = document.querySelector('.main');


xmenu.addEventListener('click', function() {
    xmenu.classList.toggle('active-1');
    menuLinks.classList.toggle('active-2');
    menuLinks2.classList.toggle('active-2');
    main_container.classList.toggle('active-3');
})
/*
Here both objects xmenu and menuLinks, are using the methond classList and toggle to change
the id in lines-menu and the class in .nav-menu for the new class is-active and active respectevely

How toogle works: When click happens toggle remove the class if it is already there
otherwise, it add it.

I added the main_container variable in order to execute the function active-3 in main
to move the whole page down and give space to the mobile menu
*/