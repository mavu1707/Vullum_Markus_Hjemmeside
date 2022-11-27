/*Hentet fra: https://www.youtube.com/channel/UC2Xd-TjJByJyK2w1zNwY0zQ
*/
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const artikler = document.querySelectorAll('.artikler');

artikler.forEach((el) => observer.observe(el))

/* Hentet fra: https://www.youtube.com/watch?v=flItyHiDm7E&t=205s*/
const hamburger = document.querySelector('.hamburger')
const navbarLinks = document.querySelector('.navbar-links')

/*Dette er for hva som skal skje med klassen bar og selve navbar*/
hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active")
  navbarLinks.classList.toggle("active")
})

/*Dette skjuler selve navbar dersom jeg trykker på en av linkene mens jeg er i navbar*/
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
  hamburger.classList.remove("active")
  navbarLinks.classList.remove("active")
}))

/*Mørkt tema*/
/*Hentet fra: https://www.youtube.com/watch?v=9LZGB3OLXNQ*/
var icon = document.getElementById("moon-icon")

icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
}