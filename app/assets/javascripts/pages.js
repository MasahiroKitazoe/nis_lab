$(document).on('ready page:load', function(){
  $("#ono-a").click(function(){
    var id = $("#ono + .portfolio-box-caption").attr("id");
    if(id == "ono-caption"){
      $("#ono + .portfolio-box-caption").removeAttr("id", "ono-caption");
    } else{
      $("#ono + .portfolio-box-caption").attr("id", "ono-caption");
    };
  });
});

$(document).on('ready page:load', function(){
  $("#otsu-a").click(function(){
    var id = $("#otsu + .portfolio-box-caption").attr("id");
    if(id == "otsu-caption"){
      $("#otsu + .portfolio-box-caption").removeAttr("id", "otsu-caption");
    } else{
      $("#otsu + .portfolio-box-caption").attr("id", "otsu-caption");
    };
  });
});

$(document).on('ready page:load', function(){
  $("#kitazoe-a").click(function(){
    var id = $("#kitazoe + .portfolio-box-caption").attr("id");
    if(id == "kitazoe-caption"){
      $("#kitazoe + .portfolio-box-caption").removeAttr("id", "kitazoe-caption");
    } else{
      $("#kitazoe + .portfolio-box-caption").attr("id", "kitazoe-caption");
    };
  });
});


$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});