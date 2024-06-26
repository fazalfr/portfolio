const scriptURL = 'https://script.google.com/macros/s/AKfycbyrSpZXrqpjFjyjzbEU4sA24fcnMHVnJuPJ4DZH4P910ElVeWRXrC3Jiw6sYPq1Wnb1/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        if (response.ok) {
            alert("Thank you! your form is submitted successfully.");
            form.reset(); // Clear the form inputs
            window.location.reload();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => console.error('Error!', error.message));
});


// network connection //
document.getElementById("linkedin").onclick = function () {
    location.href = "https://www.linkedin.com/in/fasalfr/";
};

document.getElementById("github").onclick = function () {
    location.href = "https://github.com/fazalfr";
};

document.getElementById("email").onclick = function () {
    location.href = "mailto: fazalkarat@gmail.com";
    
};




$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Django Developer", "Data Analyst", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Django Developer", "Data Analyst", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
 
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});