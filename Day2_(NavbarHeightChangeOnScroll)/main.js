let navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 25) {
        navbar.style.height = "40px";
    } else {
        navbar.style.height = "100px";
    }
})