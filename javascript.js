/*Hentet fra: https://www.youtube.com/channel/UC2Xd-TjJByJyK2w1zNwY0zQ
*/

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const artikler = document.querySelectorAll('.artikler');

artikler.forEach((el) => observer.observe(el))