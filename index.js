let portfolioWork = [
  {
    title: "E-commerce Website",
    description: "A fully responsive online store with product listings, shopping cart functionality, and a modern UI built with Tailwind CSS.",
    img: "./imgs/image-copy.png",
    tech: ["JS", "HTML", "Tailwindcss"],
    liveLink: "https://samdev43.github.io/my-E-_commerse-project/",
    gitLink: "https://github.com/samDev43/my-E-_commerse-project"
  },
  {
    title: "food-ninja",
    description: "A responsive food delivery app UI designed with HTML and Tailwind CSS for clean layouts and mobile-first design.",
    img: "./imgs/Screenshot From 2025-10-01 11-34-19.png",
    tech: ["HTML", "Tailwindcss"],
    liveLink: "https://samdev43.github.io/food-ninja/",
    gitLink: "https://github.com/samDev43/food-ninja"
  },
  {
    title: "Youtube clone",
    description: "A responsive YouTube clone UI built with HTML and Tailwind CSS, featuring a clean layout and mobile-first design.",
    img: "./imgs/Screenshot From 2025-10-01 12-11-39.png",
    tech: ["HTML", "Tailwindcss"],
    liveLink: "https://samdev43.github.io/Youtube-Clone/",
    gitLink: "https://github.com/samDev43/Youtube-Clone/"
  },
  {
    title: "BURGER WEB",
    description: "A responsive YouTube clone UI built with HTML and Tailwind CSS, featuring a clean layout and mobile-first design.",
    img: "./imgs/Screenshot From 2025-10-01 13-46-49.png",
    tech: ["HTML", "Tailwindcss"],
    liveLink: "https://samdev43.github.io/BURGER/",
    gitLink: "https://github.com/samDev43/BURGER/"
  }
];
let testProjects = [
  {
    title: "Currency Converter",
    description: "This is a test project description.",
    img: "./imgs/image.png",
    tech: ["HTML", "tailwindcss", "JavaScript"],
    liveLink: "https://samdev43.github.io/fist_curency-converter/",
    gitLink: "#"
  },
   {
    title: "Recharge Card Generator",
    description: "",
    img: "./imgs/Screenshot From 2025-10-01 11-39-15.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://samdev43.github.io/second_rechargeCard_generator2-/",
    gitLink: "https://github.com/samDev43/second_rechargeCard_generator2-"
  }, 
  {
    title: "Calculator",
    description: "",
    img: "./imgs/Screenshot From 2025-10-01 14-16-04.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: " https://samdev43.github.io/first-calculator/",
    gitLink: "https://github.com/samDev43/first-calculator"
  }
];
let cybersecurityPorject = [
  {
    title: "Vulnerability Assessment of a Web Application",
    description: "Conducted a comprehensive vulnerability assessment of a web application using tools like OWASP ZAP and Burp Suite. Identified and documented security flaws, provided remediation recommendations, and improved the overall security posture of the application.",
    img: "./imgs/cybersecurity1.png",
    tech: ["OWASP ZAP", "Burp Suite", "Web Security"],
    liveLink: "#",
    gitLink: "#"
  },
];
let observer;
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
if(document.querySelector('.section1-txt')){
  window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.section1-txt').classList.remove('opacity-0', 'translate-y-20')
  })
}
 if( document.querySelector('.section1-img')){
   document.addEventListener('DOMContentLoaded', function () {
   
     section1img.classList.remove('opacity-0', 'translate-x-[20rem]');
     section1img.classList.add('opacity-100', 'translate-x-0'); // fade in + slide back
   });
 }


document.addEventListener('DOMContentLoaded', () => {
  let homeProject = document.querySelectorAll('.home-project');
  homeProject.forEach(projectPage => {
    projectPage.classList.remove("opacity-0", "translate-x-[10rem]");
    projectPage.classList.add("opacity-100", "translate-x-0");
  });
});

if(document.querySelector('.section1-txt')){
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
      
      observer.observe(projectPage);
    });
        observer.observe(document.querySelector('.section1-txt'));
  
  });
}

if(document.querySelector('.section1-img')){
  document.addEventListener('DOMContentLoaded', () => {
  // Create the observer with a 40% threshold
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const img = entry.target; // the image being observed

      if (entry.isIntersecting) {
        img.classList.remove('opacity-0', 'translate-x-[10rem]');
        img.classList.add('opacity-100', 'translate-x-0');
      } else {
        img.classList.add('opacity-0', 'translate-x-[10rem]');
        img.classList.remove('opacity-100', 'translate-x-0');
      }
    });
  }, {
    threshold: 0.2
  });

  // Select ALL .section1-img elements and observe them
  document.querySelectorAll('.section1-img').forEach(img => {
    observer.observe(img);
  });
});

}



if(contactSection){
  document.addEventListener('DOMContentLoaded', () => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry =>{
        console.log(entry);
        
        if (entry.isIntersecting){
          console.log(contactSection);
          
          contactSection.classList.remove('translate-x-[-10rem]', 'opacity-0');
          contactSection.classList.add('translate-x-0', 'opacity-100');
        }else{
          contactSection.classList.add('translate-x-[-10rem]', 'opacity-0');
          contactSection.classList.remove('translate-x-0', 'opacity-100');
        }
  
      })
    }, {
      threshold: 0.3
    });
     observer.observe(contactSection);
  });
}



function foragecertificate (){
  // location.href = ""
  window.open("https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_LdFfeaoWYK9c65tvP_1750413971968_completion_certificate.pdf", "_blank")
}



document.addEventListener('DOMContentLoaded', () => {
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const card = entry.target;
      if (entry.isIntersecting) {
        card.classList.remove('translate-x-[-10rem]', 'opacity-0');
        card.classList.add('translate-x-0', 'opacity-100');
      } else {
        card.classList.add('translate-x-[-10rem]', 'opacity-0');
        card.classList.remove('translate-x-0', 'opacity-100');
      }
    });
  }, { threshold: 0.3 });

  displayWork('portfolioWork'); 
});
let display;
function displayWork(type) {
  // let display = type === 'portfolioWork' ? portfolioWork : testProjects;
   if(type == 'portfolioWork'){
    display = portfolioWork;
   }else if(type == 'testProjects'){
    display = testProjects;
   }else{
    display = cybersecurityPorject;
   }
  const container = document.querySelector(".display");
  container.innerHTML = '';

  display.forEach(projectPage => {
     let techStack = projectPage.tech.map(t => 
    `<div class="py-1 px-2 text-center rounded-full">${t}</div>`
  ).join("");
    container.insertAdjacentHTML('beforeend', `
     <div class="home-project skill-card translate-x-[-10rem] opacity-0 transition-all duration-1000 bg-transparent border-[0.1px] border-gray-200 shadow-md hover:scale-95 transition-all duration-300">
        <div class="w-full">
          <img class="w-full h-[16rem] md:h-[15rem] lg:h-[19rem]" src="${projectPage.img}" alt="">
        </div>
        <div class="flex gap-2 mb-2 my-2 py-2 px-2 font-bold border-b-[0.1px] border-t-[0.1px] border-gray-200 text-gray-300 flex-wrap">
          ${techStack}
        </div>
        <div class="py-3 px-2 text-gray-300 flex flex-col gap-4">
          <h2 class="text-xl font-bold mb-2">${projectPage.title}</h2>
          <p class="text-[rgb(209,213,219)] text-lg">${projectPage.description}</p>
          <div class="flex justify-between items-center w-full gap-4">
            <button class="py-2 border-[0.1px] border-gray-200 w-[80%]" onclick="window.open('${projectPage.liveLink}', '_blank')">view</button>
            <button class="py-2 w-[20%] border-[0.1px] border-gray-200" onclick="window.open('${projectPage.gitLink}', '_blank')"><i class="bi bi-github text-2xl"></i></button>
          </div>
        </div>
      </div>
    `);
  });

  container.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });
}