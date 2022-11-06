$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

});

const sr = ScrollReveal ({
	distance: '60px',
	duration: 2500,
	reset: true
});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});