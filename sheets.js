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

const scriptURL="https://script.google.com/macros/s/AKfycbz5tfnUj1zNLZ1B1MsX6IogmDy0E3UwWHLfnSxV2Cvm7dYwPS6XjExfDiDrqJgAMVqWVw/exec"
const form=document.forms['contact-form']

form.addEventListener("submit",e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(response=>alert("Thank you for visiting !"))
    .then(()=>{window.location.reload();})
    .catch(error=>console.error("Error!",error.message))
})