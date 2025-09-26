const section1img = document.querySelector('.section1-img');
 let navDisplay1 = document.querySelector(".nav-display1");
let navDisplay2 = document.querySelector(".nav-display2");
let smNav = document.querySelector(".sm-nav");
let navItems = document.querySelector(".nav-items");
let contactSection = document.querySelector(".contact-section");

navDisplay1.addEventListener('click', function(){
      navDisplay1.classList.add("hidden");
      navDisplay2.classList.remove("hidden");
      smNav.classList.remove("hidden");

      requestAnimationFrame(() => {
          smNav.classList.remove('opacity-0', 'scale-90');
          smNav.classList.add('opacity-100', 'scale-100');
      });
});
navDisplay2.addEventListener('click', function(){
  smNav.classList.remove('opacity-100', 'scale-100');
  smNav.classList.add('opacity-5', 'scale-90');

  setTimeout(() => {
    smNav.classList.remove('opacity-5', 'scale-90');
    navDisplay2.classList.add("hidden");
    smNav.classList.add('opacity-0', 'scale-90');
    navDisplay1.classList.remove("hidden");
    smNav.classList.add("hidden");
    console.log(smNav);
    
  }, 100)
});
window.addEventListener('load', ()=>{
  document.querySelector('.section1-txt').classList.remove('opacity-0', 'translate-y-20')
})
 
document.addEventListener('DOMContentLoaded', function () {

  section1img.classList.remove('opacity-0', 'translate-x-[20rem]');
  section1img.classList.add('opacity-100', 'translate-x-0'); // fade in + slide back
});


document.addEventListener('DOMContentLoaded', () => {
  let homeProject = document.querySelectorAll('.home-project');
  homeProject.forEach(projectPage =>{
    console.log(projectPage);
    
    projectPage.classList.remove("opacity-0", "translate-x-[10rem]")
        projectPage.classList.add("opacity-100", "translate-x-[10rem]")
section1img
  })
})


document.addEventListener('DOMContentLoaded', () => {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-x-[10rem]');
        entry.target.classList.add('opacity-100', 'translate-x-0');
      } else {
        entry.target.classList.remove('opacity-100', 'translate-x-0');
     entry.target.classList.add('opacity-0', 'translate-x-[10rem]');
      }
    });
  }, {
    threshold: 0.2
  });

  let homeProject = document.querySelectorAll('.home-project');
  homeProject.forEach(projectPage => {
    console.log(projectPage);
    
    observer.observe(projectPage);
  });
      observer.observe(document.querySelector('.section1-txt'));


});


document.addEventListener('DOMContentLoaded', () => {
  // Create the observer with a 30% threshold
  let observer = new IntersectionObserver((entries) => {
    console.log(entries);
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
       section1img.classList.remove('opacity-0', 'translate-x-[10rem]');
  section1img.classList.add('opacity-100', 'translate-x-0');
      } else {
         section1img.classList.add('opacity-0', 'translate-x-[10rem]');
  section1img.classList.remove('opacity-100', 'translate-x-0');
      }
    });
  }, {
    threshold: 0.4 
  });
      observer.observe(document.querySelector('.section1-img'));
});


document.addEventListener('DOMContentLoaded', () => {
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting){
      contactSection.classList.remove('translate-x-[-10rem]', 'opacity-0');
      contactSection.classList.add('translate-x-0', 'opacity-100');
    }else{
      contactSection.classList.add('translate-x-[-10rem]', 'opacity-0');
      contactSection.classList.remove('translate-x-0', 'opacity-100');
    }
  }, {
    threshold: 0.3
  });
   observer.observe(contactSection);
});