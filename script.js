$(function () {
  // 「#login-show」要素に対するclickイベントを作成してください
  $('#login-show').click(function () {
    $('#login-modal').fadeIn();

  });

  $('.close-modal').click(function () {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

});


$(function () {
  $("#nav-toggle").on("click", function () {
    $("nav ul").slideToggle();
    $(this).toggleClass("active");



  });


});



