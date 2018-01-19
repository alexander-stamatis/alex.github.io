var imageFolder = "images/";
var carouselFadeEnabled = true;
var carouselImageDuration = 600;
var carouselTickRate = 10;
var carouselNoFadeImageDuration = 5000;
var carouselOpacityCatalystRate = 0.01;
var resumeLink = "https://drive.google.com/open?id=1NQZ-bIqQANbjilaW1EN8XDfTbgm8DbDz";

$(document).ready(function() {

  $(".resume-links").attr("href", resumeLink);

  //mobile nav bar
  $("#menu-icon-contracted").click(function() {
      $("#nav-bar").css("display", "block");
      $("#menu-icon-expanded").css("display", "block");
      $(this).css("display", "none");
  });

  function DeactivateMobileNavigation(){
    $("#nav-bar").css("display", "none");
    $("#menu-icon-contracted").css("display", "block");
    $("#menu-icon-expanded").css("display", "none");
  }

  $("#menu-icon-expanded").click(function() {
    DeactivateMobileNavigation();
  });


  //Navbar interaction
  var pageDestination = "";
  $("#nav-bar ul li").click(function() {

    //Hiding and showing pages
    pageDestination = "#content-" + $(this).attr("id");
    if ($(pageDestination).is(":hidden")) {
      $(".content-data").hide();
      $(pageDestination).show();
    }

    DeactivateMobileNavigation();

    //Project carousels
    var projectCarouselsActivated = false;
    if (pageDestination == "#content-projects" && !projectCarouselsActivated) {
      projectCarouselsActivated = false;
    }
  });

  //Home page carousel
  Carousel("carousel-home-img", ["zombie-thing-shipyard-2.jpg", "mss-md.jpg", "darkness.jpg", "16_9_dark_elf.jpg"]);

  //Carousel implementation for an element
  function Carousel(element, images) {

    var imageElement = document.getElementById(element);

    var currentImageIndex = {
      item: 0
    };

    imageElement.style.backgroundImage = "url(" + imageFolder + images[currentImageIndex.item] + ")";
    imageElement.style.opacity = 0;

    //Fade in/out implementation
    if (carouselFadeEnabled) {

      var opacityCatalyst = 0;
      var fadeTimer = 0;

      setInterval(function() {

        fadeTimer++;

        if (fadeTimer > carouselImageDuration) {
          opacityCatalyst -= carouselOpacityCatalystRate;
          imageElement.style.opacity = opacityCatalyst;
        } else if (imageElement.style.opacity <= 1) {
          opacityCatalyst += carouselOpacityCatalystRate;
          imageElement.style.opacity = opacityCatalyst;
        }

        if (fadeTimer > carouselImageDuration && imageElement.style.opacity < 0.1) {
          imageElement.style.opacity = 0;
          imageElement.style.backgroundImage = "url(" + imageFolder + NextImage(currentImageIndex, images) + ")";
          opacityCatalyst = 0;
          fadeTimer = 0;
        }
      }, carouselTickRate);

    } else {
      imageElement.style.opacity = 1;
      setInterval(function() {
        imageElement.style.backgroundImage = "url(" + imageFolder + NextImage(currentImageIndex, images) + ")";
      }, carouselNoFadeImageDuration);

    }

  }

  //Cycle through image array by reference
  function NextImage(index, images) {
    index.item = index.item < images.length - 1 ? ++index.item : 0;
    console.log(index.item);
    return images[index.item];
  }

  //Enlarging and closing images
  $(".all-images").click(function() {
        $("#magic-box").show();
        var image_location = $(this).attr("src");
        $("#magic-box-image").attr({
            style: "content:url(" + image_location + ")"
        });
    });

    $("#magic-box-exit").click(function() {
        $(this).parent().hide();
    });


    // $("h2.intro-home").css("visibility")
    $("h2.intro-home").addClass('animated fadeInLeft');
    $("h2.intro-home").css("visibility", "visible");
    $("h2.intro-home").animate('fadeInLeft', function() {
      $("p.intro-home").css("visibility", "visible");
      $("p.intro-home").addClass('animated fadeInRight');
      $("p.intro-home").animate('animated fadeInRight', function() {
        $(".resume-links").css("visibility", "visible");
        $(".resume-links").addClass('animated bounceInDown');
      });
    });

});
