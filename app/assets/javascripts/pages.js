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