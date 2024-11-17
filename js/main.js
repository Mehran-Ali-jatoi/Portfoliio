let navbar = document.querySelectorAll(".nav_toggle");
let navs = document.getElementsByClassName("navs")[0];
navbar.forEach(element => {
    element.addEventListener("click", () => {
        console.log("asd");
        if (navs.style.display == "none") {
            navs.style.display = "flex";
        } else {
            navs.style.display = "none";
        }
    });
});



window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); // Header ka element select karo
    if (window.scrollY > 100) {
        header.style.position = 'fixed';
        header.style.zIndex = '11111111';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.transition="0.5s";

    } else {
        header.style.position = 'relative';
        header.style.backgroundColor="#202026";

    }
});

