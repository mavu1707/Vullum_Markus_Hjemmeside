const hamMen = document.querySelector('.fa-solid.fa-bars')
const navLink = document.querySelector('.navbar-links')

hamMen.addEventListener("onclick", ()=>{
  navLink.classList.toggle('fa-solid.fa-bars')
})