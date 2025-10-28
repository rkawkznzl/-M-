$(document).ready(function () {
  var delayInterval = 0.4;

  $(".text").each(function (index) {
    var calculatedDelay = index * delayInterval + "s";

    $(this).css("animation-delay", calculatedDelay);
  });
});

// 나비 //
$(document).ready(function () {
  var butterfly_clicked = false;

  $(".butter").on("click", function () {
    if (butterfly_clicked == false) {
      butterfly_clicked = true;

      $(this).addClass("invisible");
      $(".mousebutter").addClass("visible");
    }
  });

  $(document).on("mousemove", function (come) {
    if (butterfly_clicked == true) {
      $(".mousebutter").css("left", come.pageX + "px");
      $(".mousebutter").css("top", come.pageY + "px");
    }
  });
});
