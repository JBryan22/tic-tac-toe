var thisBoard;
var player1;
var player2;
var winningLines = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function Player(myTurn, symbol) {
  this.myTurn = myTurn;
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

var checkWinCondition = function(board, symbol) {
  winningLines.forEach(function(winningArray) {
    if (board.spaces[winningArray[0]].value === symbol &&
        board.spaces[winningArray[1]].value === symbol &&
        board.spaces[winningArray[2]].value === symbol)
        {
          alert('You win!');
        };
  });


  // console.log(winningLines[board.spaces[1].value]);
  //  return winningLines[board.spaces[1].value];
  // for (var i = 1; i <= 9; i++) {
  //   winningLines(board.spaces[i].value)
  // }
};

$(function() {

  $("#begin").click(function() {
    thisBoard = new Board();
    player1 = new Player(true, 'X');
    player2 = new Player(false, 'O');
  });

  $(".spaceOne").click(function(){
    if (thisBoard.spaces[1].value === ' ') {
      if (player1.myTurn) {
        $(".spaceOne").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[1].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceOne").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[1].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

  $(".spaceTwo").click(function(){
    if (thisBoard.spaces[2].value === ' ') {
      if (player1.myTurn) {
        $(".spaceTwo").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[2].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceTwo").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[2].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;

    }
  });

  $(".spaceThree").click(function(){
    if (thisBoard.spaces[3].value === ' ') {
      if (player1.myTurn) {
        $(".spaceThree").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[3].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceThree").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[3].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

  $(".spaceFour").click(function(){
    if (thisBoard.spaces[4].value === ' ') {
      if (player1.myTurn) {
        $(".spaceFour").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[4].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceFour").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[4].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

  $(".spaceFive").click(function(){
    if (thisBoard.spaces[5].value === ' ') {
      if (player1.myTurn) {
        $(".spaceFive").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[5].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceFive").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[5].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

  $(".spaceSix").click(function(){
    if (thisBoard.spaces[6].value === ' ') {
      if (player1.myTurn) {
        $(".spaceSix").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[6].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceSix").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[6].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

  $(".spaceSeven").click(function(){
    if (thisBoard.spaces[7].value === ' ') {
      if (player1.myTurn) {
        $(".spaceSeven").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[7].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceSeven").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[7].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

  $(".spaceEight").click(function(){
    if (thisBoard.spaces[8].value === ' ') {
      if (player1.myTurn) {
        $(".spaceEight").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[8].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceEight").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[8].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

  $(".spaceNine").click(function(){
    if (thisBoard.spaces[9].value === ' ') {
      if (player1.myTurn) {
        $(".spaceNine").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[9].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".spaceNine").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[9].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
    }
  });

});
