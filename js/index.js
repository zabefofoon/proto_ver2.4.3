$(document).ready(function(){
  var c = $('html').scrollTop();
  $(window).on("click",function(e){
    function thumbnail_slide(num){
      if(e.target == $(".thumbnail li")[num]){
        $(".fullsolid").css({"opacity":"0.8","pointer-events":"auto"});
        $(".detail").css({"display":"block","z-index":99}).delay(300).animate({"opacity":1});
        $(".detail").scrollTop(0).load("./data/"+parseInt(num+1)+".html");
        $(".fa-times").css({"display":"block","z-index":"99"});
        $("html").addClass('modal-open');
      }
    }
    for(var i=0;i<$(".thumbnail li").length;i++){
      thumbnail_slide(i)
    };

    if(e.target == $(".fullsolid")[0]||e.target == $(".fa-times")[0]||e.target==$("nav i")[0]){
      $(".navwrap").stop().animate({"left":"-100%"},500);
      $(".fullsolid").css({"opacity":"0","pointer-events":"none"});
      $(".detail").css({"display":"none","z-index":-1,"opacity":0});
      $(".fa-times").css({"display":"none","z-index":"-1"});
      $("html").removeClass('modal-open');
    }
    if(e.target == $("nav i")[0]){
      $(".navwrap").stop().animate({"left":0},500);
      $(".fullsolid").css({"opacity":"0.8","pointer-events":"auto"});
    }
    else if(e.target == $(".navwrap")[0] || e.target == $(".navwrap a")[0] || e.target == $(".navwrap a")[1] || e.target == $(".navwrap a")[2]){
      $(".navwrap").stop().animate({"left":"-100%"},500);
      $(".fullsolid").css({"opacity":"0","pointer-events":"none"});
    }
  })

  $(window).keydown(function(e){
    if(e.keyCode == 27 || 13){
      $(".navwrap").stop().animate({"left":"-100%"},500);
      $(".fullsolid").css({"opacity":"0","pointer-events":"none"});
      $(".detail").css({"display":"none","z-index":-1,"opacity":0});
      $(".fa-times").css({"display":"none","z-index":"-1"});
      $("html").removeClass('modal-open')
    }
  })
  var x = $(".slide ul li").width();
  var y = 1;
  $("header .right").click(function(){
    y++;
    $("header .slide ul").stop().animate({"margin-left":-x*y},function(){
      $("header .slide ul li").first().appendTo(".slide ul")
      $("header .slide ul").css({"left":x*(y-1)})
    })
  })
  $(".left").click(function(){
    y--;
    $("header .slide ul").stop().animate({"margin-left":-x*y},function(){
      $("header .slide ul li").last().prependTo(".slide ul")
      $("header .slide ul").css({"left":x*(y-1)})
    })
  })
  $(".button li").click(function(e){
    $(".button li").css({"background":"#ddddde","color":"black"});
    $(this).css({"background":"#097c25","color":"white"});
    $(".thumbnail li").css({"display":"none","opacity":0}).animate({"opacity":1});

    function s(num){
      if(e.target.value == num){
        for(var i=0;i<$(".thumbnail li").length;i++){
          if($(".thumbnail li")[i].value == num){
            $(".thumbnail li")[i].style.display = "inline-block";
          }
        }
      }
    }
    if(e.target.value == 0){
      $(".thumbnail li").css({"display":"inline-block"});
    }
    for(var i=1;i<6;i++){
        s(i)
    }
  })
})
