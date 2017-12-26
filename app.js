// Carousel


$(document).ready(function() {

$("#myCarousel").carousel();

  // Cycles to the previous item

  $(".prev-slide").click(function() {
    $("#myCarousel").carousel('prev');
  });

  // Cycles to the next item

  $(".next-slide").click(function() {
    $("#myCarousel").carousel('next');
  });

  // Cycles the carousel to a particular frame

  $(".slide-one").click(function() {
    $("#myCarousel").carousel(0);
  });

  $(".slide-two").click(function() {
    $("#myCarousel").carousel(1);
  });

  $(".slide-three").click(function() {
    $("#myCarousel").carousel(2);
  });

  $(".slide-four").click(function() {
    $("#myCarousel").carousel(3);
  });

  $(".slide-five").click(function() {
    $("#myCarousel").carousel(4);
  });

  $(".slide-six").click(function() {
    $("#myCarousel").carousel(5);
  });

  $(".slide-seven").click(function() {
    $("#myCarousel").carousel(6);
  });

  $(".slide-eight").click(function() {
    $("#myCarousel").carousel(7);
  });
});
