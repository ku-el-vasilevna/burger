const btnBurger = document.querySelector("button.burger")
const mobileMenu = document.querySelector("#mobile-menu")
const btnClose = document.querySelector("button.close")

btnBurger.addEventListener("click",()=>{
    btnBurger.classList.add("hidden")
    mobileMenu.classList.add("open")
})
btnClose.addEventListener("click",()=>{
    btnBurger.classList.remove("hidden")
    mobileMenu.classList.remove("open")
})