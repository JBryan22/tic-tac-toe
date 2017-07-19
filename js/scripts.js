function Player(number, symbol) {
  this.number = number;
  this.symbol = symbol;
}

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

  var thisBoard;
  var Player1;
  var Player2;

$(function() {

  $("#begin").click(function() {
    thisBoard = new Board();
    Player1 = new Player(1, 'X');
    Player2 = new Player(2, 'O');
  });

  $(".spaceOne").click(function(){
    if (thisBoard.spaces[1].value === ' ') {
      $(".spaceOne").append("<img src='img/X.png'>")
      thisBoard.spaces[1].value = 'X';
    }
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
