var imageFolder = "images/";
var resumeLink = "https://drive.google.com/open?id=1gsN9ra1N2oJRT_R4IpMlm5aFyJgtPHvC";
var particleContainerMobileOffset = 320;
var particleContainerDesktopOffset = 150;
var techonologies = [
  "c#",
  "c++",
  "javascript",
  "jQuery",
  "html5",
  "css3",
  "sass",
  "php",
  "sql",
  "atom",
  "visual studio",
  "unity 3d",
  "windows",
  "linux",
  "osx",
  "bash",
  "cmd",
  "git",
  "github",
  "bitbucket"
];
var navToMobile = true;

$('#mobile-menu-active').hide();

function SetMobileNavigation(enable){
  if($(window).width() < 930){
    if(enable){
      $('#mobile-menu').hide();
      $('#mobile-menu-active').show();
      $("#nav-bar").show();
      $("#introduction").css("top", "70vh");
    } else{
      $('#mobile-menu').show();
      $('#mobile-menu-active').hide();
      $("#nav-bar").hide();
      $("#introduction").css("top", "40vh");
    }
  }
}

//mobile nav bar
$("#mobile-menu").click(function() {
  SetMobileNavigation(true);
});

$("#mobile-menu-active").click(function() {
  SetMobileNavigation(false);
});

$( window ).resize(function() {

  if($(window).width() > 930){
    $("#particle-container").css("top", particleContainerDesktopOffset);
    $("#nav-bar").show();
  }

  if($(window).width() > 930){
    if(!navToMobile){
      SetMobileNavigation(true);
      $('#mobile-menu').hide();
      $('#mobile-menu-active').hide();
      navToMobile = true;
      $("#introduction").css("top", "40vh");
    }
  } else{
    if(navToMobile){
      SetMobileNavigation(false);
      navToMobile = false;
    }
  }

});

// reveals elements when scrolling
$(window).scroll(function(){
    if($(this).scrollTop() > 20){
      $('#zombie-thing-image').css("visibility", "visible");
      $('#zombie-thing-image').addClass("animated fadeInLeft");
    }

    if($(this).scrollTop() > 50){
      $(".navbar").addClass("fixed-top");
      $(".navbar").css("background", "RGBA(255,255,255,.9)");
    } else{
      $(".navbar").removeClass("fixed-top");
      $(".navbar").css("background", "RGBA(255,255,255,1)");
    }

    if($(this).scrollTop() > 1100){
      $('#img-potrait').css("visibility", "visible");
      $('#img-potrait').addClass("animated fadeIn");
    }

    if($(this).scrollTop() > 1600){
      $(".tech-list li").css("visibility", "visible");
      $(".tech-list li").addClass("animated fadeIn");

    }

});

// scroll to destination
$('#project-link').click(function(){
  $('html, body').animate({
    scrollTop: $('#zombie-thing-image').offset().top - 190
  }, 1000);
});

$('#about').click(function(){
  $('html, body').animate({
    scrollTop: $("#about-section").offset().top
  }), 1000;
});

$('#contact').click(function(){
  $('html, body').animate({
    scrollTop: $("#contact-section").offset().top
  }), 1000;
});



$(document).ready(function() {

  for(var i = 0; i < techonologies.length; i++)
    $(".tech-list ul").append("<li>" + techonologies[i] + "</li>");

  particlesJS.load('particles-js', 'js/particles.js-master/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  //set resume link to element
  $(".resume-links").attr("href", resumeLink);
  $(".resume-links").css("visibility", "visible");
  $(".resume-links").addClass('animated fadeIn');

});
