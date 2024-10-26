var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

ScrollReveal({ reset: true,
    distance:'60px',
    duratation:2500,
    delay:400
 });

 ScrollReveal().reveal('.image-section', { delay: 500,origin:'right'});
 ScrollReveal().reveal('.icons a', { delay: 800,origin:'bottom',interval:300});
//  ScrollReveal().reveal('.navbar a', { delay: 500,origin:'top',interval:300});
 ScrollReveal().reveal('.content h3', { delay: 500,origin:'left',});
 ScrollReveal().reveal('.content h2', { delay: 650,origin:'top',});
 ScrollReveal().reveal('.content h1', { delay: 850,origin:'right',});
 ScrollReveal().reveal('.content p', { delay: 950,origin:'bottom',});
 ScrollReveal().reveal('.image-container', { delay: 700,origin:'left',});
 ScrollReveal().reveal('.about h1', { delay: 500,origin:'top',});
 ScrollReveal().reveal('.about p', { delay: 500,origin:'right',});
 ScrollReveal().reveal('.section-3 .main-box .box1,.box2,.box3', { delay: 600,origin:'top',interval:360});
 ScrollReveal().reveal('.h3 ', { delay: 500,origin:'top',});
 ScrollReveal().reveal('.h3 span ', { delay: 600,origin:'top',});
 ScrollReveal().reveal('.section-skill h3', { delay: 500,origin:'top',});
 ScrollReveal().reveal('.technical-skill-container h2', { delay: 800,origin:'top'});
 ScrollReveal().reveal('.radial-bar h2', { delay: 1000,origin:'top',});
 ScrollReveal().reveal('.technical-skill-container', { delay: 100,origin:'left'});
 ScrollReveal().reveal('.radial-bars', { delay: 200,origin:'right',});

 killa = document.querySelector("#killa");

 killa.addEventListener("click",()=>{
   console.log(hello);
 })