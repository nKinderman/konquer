$(function(){
  // Parallax.js
  $("#home").parallax({imageSrc:"images/bg-image1.jpg", speed:.4});
  $("#services").parallax({imageSrc:"images/bg-image2.jpg", speed:.4});
  $("#contact").parallax({imageSrc:"images/bg-image3.jpg", speed:.4});

  // singlePageNav #nav and #toggle links
  $(document).ready(function () {
    $('#desktop-nav').singlePageNav({
    	offset: $('#navbar').outerHeight(),
    	speed: 1500,
    	filter: ':not(.external)',
    	updateHash: true,
      currentClass: 'active'
    });
    $('#mobile-nav').singlePageNav({
    	offset: $('#navbar').outerHeight(),
    	speed: 1500,
    	filter: ':not(.external)',
    	updateHash: true,
      currentClass: 'active'
    });
  });

  // Toggle #hamburger Menu Button
  $(document).ready(function(){
    $('#hamburger').click(function(){
      $('#mobile-nav').slideToggle(800);
    });
    
    $('#mobile-nav a').click(function(){
      $('#mobile-nav').slideToggle(400);
    });
  });
});
