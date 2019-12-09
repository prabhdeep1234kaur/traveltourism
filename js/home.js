
/*
menu responsives
*/
var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}


/*
Carousel function - instagram : home
*/
function callCarousel(){
  $('.owl-carousel').owlCarousel({
    items: 3,
    //autoPlay: 3000,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
  });
}

function onInstaHover(){
  $(".owl-item").on("mouseover", function () {
      $(this).css('opacity','0.65');
      $(this).find('.item a').find('.hidden_insta').show();
  });
   $(".owl-item").on("mouseout", function () {
      $(this).css('opacity','1');
      $(this).find('.item a').find('.hidden_insta').hide();
      //$(this).find(".insta_images").hide();
  });
}


/*
on load
*/
$(function() {

  /*
  Instagram post on home page
  */
  $.ajax({
    url: 'https://www.instagram.com/traveltourismhumber/?__a=1',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $.each(data.graphql.user.edge_owner_to_timeline_media.edges, function(key, val) {
        $.each(val, function(key2, val2) {

          $(".owl-carousel").append( "<div class='item'><a href='https://www.instagram.com/p/"+val2.shortcode +"' target='_blank'><div class='hidden_insta'>View</div><img class='insta_images' src='"+val2.display_url+"' alt='Insta Post'></a></div>" );
          
        });
      });
      callCarousel(); //calling the carousek function
      onInstaHover();
    },
    statusCode: {
      404: function() {
        $(".owl-carousel").append( "There was a problem with the server.  Try again soon!" );
      }
    }
  });

  /*
  Home Offer js
  */
  $.ajax({
    url: 'js/json_file/home_offer.json',
    dataType: 'json',
    crossOrigin: null,
    type: "GET",
    success: function(data) {
      $.each(data, function(key, val) {
        $('.discount_section').append('<div class="display_offers"><a href="#"><img src="'
        +val.image+'" alt="'+val.country+'"></a><a href="#"><h2>'+val.country+'</h2></a><p>'+val.content+'</p><span class="book_now_home"><a href="tours.html">Book Now</a></span></div>');
      });
    },
    statusCode: {
      404: function() {
        //$(".owl-carousel").append( "There was a problem with the server.  Try again soon!" );
      }
    }
  });
});


/*
Gallery page
*/
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/*
Mailchimp
*/
(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);