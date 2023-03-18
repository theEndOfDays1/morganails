// change nav styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('section').classList.toggle
    ('window-scroll' , window.scrollY > 0)
})

const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const header = document.getElementById("m-sec2");

openMenu.addEventListener("click", function(){
    header.style.transform = "translateX(0%)";
})
closeMenu.addEventListener("click", function(){
    header.style.transform = "translateX(-150%)"
})

/* box-shadow: 0 0 2px 2px black; */
