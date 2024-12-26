$(function () {
  //ボタンを押したら色が変わる
  $(document).ready(function () {
    $('#change-color').click(function () {
      $('#target').css('color', 'red');
    });
  });

  //ボタンを押したら文字が変わる
  $(document).ready(function () {
    $('#change-text').click(function () {
      $('#target').text('Hello');
    });
  });

  //ボタンを押したらフェードアウト
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

   //ボタンを押したらフェードイン
   $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
});