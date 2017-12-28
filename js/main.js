var menuActivated = false;
var imageFolder = "images/";
var imageMenuIconContracted = imageFolder + "menu-icon-contracted.png";
var carouselFadeEnabled = true;
var carouselImageDuration = 600;
var carouselTickRate = 10;
var carouselNoFadeImageDuration = 5000;
var carouselOpacityCatalystRate = 0.01;

$(document).ready(function() {

  //Vertical navbar button
  $("#menu-icon").click(function() {

    if (!menuActivated) {
      this.src = imageFolder + "menu-icon-expanded.png";
      $("#nav-bar-list").show("fast");
      menuActivated = true;
    } else {
      this.src = imageMenuIconContracted;
      $("#nav-bar-list").hide("fast");
      menuActivated = false;
    }

  });

  //Navbar interaction
  var pageDestination = "";
  $("#vertical-nav-bar ul li").click(function() {

    //Hiding and showing pages
    pageDestination = "#content-" + $(this).attr("id");
    if ($(pageDestination).is(":hidden")) {
      $(".content-data").hide();
      $(pageDestination).show("fast");
    }

    //Project carousels
    var projectCarouselsActivated = false;
    if (pageDestination == "#content-projects" && !projectCarouselsActivated) {
      projectCarouselsActivated = false;
      Carousel("carousel-zombie-thing", [imageFolder + "zombie-thing-menu.jpg", imageFolder + "zombie-thing-armory.jpg", imageFolder + "zombie-thing-shipyard.jpg"]);
      Carousel("carousel-galactic-defenders", [imageFolder + "galactic-defenders-1.jpg", imageFolder + "galactic-defenders-2.jpg", imageFolder + "galactic-defenders-3.jpg", imageFolder + "galactic-defenders-4.jpg"]);
    }

  });

  $("#vertical-nav-bar li").click(function() {

    if (menuActivated) {
      $("#menu-icon").attr("src", imageMenuIconContracted);
      $("#nav-bar-list").hide("fast");
      menuActivated = false;
    }

  });

  //Home page carousel
  Carousel("carousel-image", [imageFolder + "zombie-thing-shipyard.jpg", imageFolder + "16_9_dark_elf.jpg", imageFolder + "galactic-defenders-2.jpg"]);

  //Carousel implementation for an element
  function Carousel(element, images) {

    var imageElement = document.getElementById(element);

    var currentImageIndex = {
      item: 0
    };

    imageElement.src = images[currentImageIndex.item];
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
          imageElement.src = NextImage(currentImageIndex, images);
          opacityCatalyst = 0;
          fadeTimer = 0;
        }
      }, carouselTickRate);

    } else {
      imageElement.style.opacity = 1;
      setInterval(function() {
        imageElement.src = NextImage(currentImageIndex, images);
      }, carouselNoFadeImageDuration);

    }

  }

  //Cycle through image array by reference
  function NextImage(index, images) {
    index.item = index.item < images.length - 1 ? ++index.item : 0;
    return images[index.item];
  }

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

});
