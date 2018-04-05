$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  console.log(x + "," + y);
  
  $("#cross").css("left",x+"px");
  $("#cross").css("top",y+"px");
  
  if (x < $(window).width()/2 -50){
    $("#human").attr("src","https://i.gyazo.com/643a95fc58bfc754339118b44b261cf2.png")
  };
  
  if (x > $(window).width()/2 +50){
    $("#human").attr("src","https://i.gyazo.com/6731ea16dd2f3158b1d8dbe9198c1224.png")
  };
  
  if ( Math.abs(x - $(window).width()/2) <50){
    $("#human").attr("src","https://i.gyazo.com/048d416429495f2e2dce9010831351f3.png")
  };
  
  if (x < $(window).width()/2 -50 && y <$(window).height()/2){
    $("#human").attr("src","https://i.gyazo.com/152d227d1cb11fdef57722a5aeeeda0d.png")
  }
  
  if (x > $(window).width()/2 +50 && y <$(window).height()/2){
    $("#human").attr("src","https://i.gyazo.com/709f08378a1dccf18e6f27dc8ebed33a.png")
  }
  
  if ( Math.abs(x - $(window).width()/2) <50 && y >$(window).height() -100){
    $("#human").attr("src","https://i.gyazo.com/4d3b5f145549aaaf5e23cfa2ef9e067f.png")
  };

});