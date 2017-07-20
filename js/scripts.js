var thisBoard;
var player1;
var player2;
var winningLines = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function Game() {

}

function Player(myTurn, symbol) {
  this.myTurn = myTurn;
  this.symbol = symbol;
  this.score = 0;
  this.name = "Player";
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

var resetHtmlBoard = function(){
  for (var i = 1; i <= 9; i++) {
    $(".space" + i).text('');
  }
}

Board.prototype.resetBoard = function() {
  thisBoard.spaces.forEach(function(spaceObject) {
    spaceObject.value = " ";
  });
};

var gameWin = function(board) {
  if (player1.myTurn) {
    player1.score += 2;
  }
  else if (player2.myTurn) {
    player2.score += 2;
  }
  else {
    alert('Error');
  }
  checkMatchWin(player1, player2);
  board.resetBoard();
  resetHtmlBoard();
  playerScoreDisplay(player1, player2);
};

var gameTie = function(board) {
  player1.score += 1;
  player2.score += 1;
  checkMatchWin(player1, player2);
  board.resetBoard();
  resetHtmlBoard();
  playerScoreDisplay(player1, player2);
};

var playerScoreDisplay = function(player1, player2) {
  $(".playerOneScore").text(player1.name + " Score:  " + player1.score);
  $(".playerTwoScore").text(player2.name + " Score:  " + player2.score);
};

var endMatch = function(winner) {
    $(".display-board").hide();
    $(".matchEndDisplay").show();
    $(".matchEndDisplay").append("<h2>" + winner + " Wins!!!</h2>")
};

var checkMatchWin = function(player1, player2) {
  if (player1.score >= 5 && player2.score >= 5) {
    endMatch("tie");
  }
  else if (player1.score >= 5) {
    endMatch(player1.name);
  }
  else if (player2.score >= 5) {
    endMatch(player2.name);
  }
};

var checkWinCondition = function(board, symbol) {
  var win = false;

  winningLines.forEach(function(winningArray) {
    if (board.spaces[winningArray[0]].value === symbol &&
        board.spaces[winningArray[1]].value === symbol &&
        board.spaces[winningArray[2]].value === symbol) {
        win = true;
      }
  });
    return win;
};

var checkTie = function(spacesArr) {
  var tie = true;
  spacesArr.forEach(function(spaceObj) {
    if (spaceObj.value === ' ') {
      tie = false;
    }
  });
  return tie;
};

var changeGameBoard = function(turn, space) {
  if (thisBoard.spaces[space].value === ' ') {
    $(".space" + space).append("<img src='img/" + turn.symbol + ".png'>");
    thisBoard.spaces[space].value = turn.symbol;
  }
};

var switchTurn = function(player1, player2) {
  player1.myTurn = !player1.myTurn;
  player2.myTurn = !player2.myTurn;
  if (player1.myTurn) {
    $(".nameTurn").text(player1.name + "'s Turn");
  } else {
    $(".nameTurn").text(player2.name + "'s Turn");
  };
};

var checkTurn = function(player) {
  if (player1.myTurn) {
    return player1;
  } else {
    return player2;
  }
};

$(function() {

  $("#begin").click(function() {
    thisBoard = new Board();

    player1 = new Player(true, 'X');
    player2 = new Player(false, 'O');

    var player1Input = $("#player1Name").val();
    var player2Input = $("#player2Name").val();

    if (player1Input) {
      player1.name = player1Input;
    } else {
      player1.name = "Player One";
    }

    if (player2Input) {
      player2.name = player2Input;
    } else {
      player2.name = "Player Two";
    }

    playerScoreDisplay(player1, player2);
    $(".nameTurn").text(player1.name + "'s Turn");
    $(".start-setup").hide();
    $(".display-board").show();
  });

  $(".space1").click(function(){

    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space2").click(function(){

    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space3").click(function(){
    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space4").click(function(){
    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space5").click(function(){
    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space6").click(function(){
    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space7").click(function(){
    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space8").click(function(){
    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

  $(".space9").click(function(){
    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    if (checkWinCondition(thisBoard, checkTurn(player1).symbol)) {
      gameWin(thisBoard);
    } else if (checkTie(thisBoard.spaces)) {
      gameTie(thisBoard);
    }

    switchTurn(player1, player2);

  });

});
