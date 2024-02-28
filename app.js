const faqs = document.querySelectorAll(".FAQItem");
console.log(faqs)

const openFAQ = (i) => {
    faqs.forEach((a, j) => {
        if (i == j) {
            a.classList.toggle("active")
        }
        else {
            a.classList.remove('active');
        }
    })
}

faqs.forEach((a, i) => {
    a.addEventListener("click", () => { openFAQ(i) })
})

document.getElementById('hamburger-menu').addEventListener('click', function () {
    var navLinks = document.getElementById('navLinks');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});


