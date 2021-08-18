//selecting DOM elements
const menuBTN=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menunav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');
const navItems=document.querySelectorAll('.nav-items');


//initial state of menu
let showmenu=false;
menuBTN.addEventListener('click',toggleMenu);
function toggleMenu()
{
    if (!showmenu)
    {
        menuBTN.classList.add('close');
        menu.classList.add('show');
        menunav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item=>item.classList.add('show'));
        showmenu=true;
    }
    else{
        menuBTN.classList.remove('close');
        menu.classList.remove('show');
        menunav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item=>item.classList.remove('show'));
        showmenu=false;
    }
}




