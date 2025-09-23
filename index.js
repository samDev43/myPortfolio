const section1img = document.querySelector('.section1-img');
 let navDisplay1 = document.querySelector(".nav-display1");
let navDisplay2 = document.querySelector(".nav-display2");
let smNav = document.querySelector(".sm-nav");
let navItems = document.querySelector(".nav-items");

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
    
    projectPage.classList.remove("opacity-0", "translate-y-10", "translate-x-10")
        projectPage.classList.add("opacity-100", "translate-y-0", "translate-x-0")
section1img
  })
})


// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  // Create the observer with a 30% threshold
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-20');
      } else {
        entry.target.classList.remove('opacity-100', 'translate-y-0');
        entry.target.classList.add('opacity-0', 'translate-y-20');
      }
    });
  }, {
    threshold: 0.3   // ← 0.3 = 30% of the element’s area is visible
  });

  let homeProject = document.querySelectorAll('.home-project');
  homeProject.forEach(projectPage => {
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
       section1img.classList.remove('opacity-0', 'translate-x-[20rem]');
  section1img.classList.add('opacity-100', 'translate-x-0');
      } else {
         section1img.classList.add('opacity-0', 'translate-x-[20rem]');
  section1img.classList.remove('opacity-100', 'translate-x-0');
      }
    });
  }, {
    threshold: 0.3   // ← 0.3 = 30% of the element’s area is visible
  });
      observer.observe(document.querySelector('.section1-img'));
});