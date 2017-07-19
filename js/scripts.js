function Space(spot) {
  this.spot = spot;
  this.value = " ";
};

function Board() {
  var spacesArr = [];

  for (var i = 1; i <= 9; i++) {
    spacesArr[i] = new Space(i);
  }
  this.spaces = spacesArr;
};

var thisBoard1 = new Board();

$(function() {

  $(".spaceOne").click(function(){
    $(".spaceOne").append("<img src='img/X.png'>")
  });

  $(".spaceTwo").click(function(){

  });

  $(".spaceThree").click(function(){

  });

  $(".spaceFour").click(function(){

  });

  $(".spaceFive").click(function(){

  });

  $(".spaceSix").click(function(){

  });

  $(".spaceSeven").click(function(){

  });

  $(".spaceEight").click(function(){

  });

  $(".spaceNine").click(function(){

  });

});
