const d = new Date();
console.log(d);

const activePage = window.location.pathname;
console.log(window);
console.log(window.location);
console.log(activePage);

const navLinks = document.querySelectorAll('nav a').forEach(element => {
    if (element.href.includes(`${activePage}`)) {
        element.classList.add('active');
    }
});

