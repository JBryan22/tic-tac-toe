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

var endGame = function(player) {
  if (player1.myTurn) {
    player1.score += 2;
  }
  else if (player2.myTurn) {
    player2.score += 2;
  }
  else {
    alert('Error');
  }
  board.resetBoard();
  resetHtmlBoard();
};

var checkWinCondition = function(board, symbol) {
  winningLines.forEach(function(winningArray) {
    if (board.spaces[winningArray[0]].value === symbol &&
        board.spaces[winningArray[1]].value === symbol &&
        board.spaces[winningArray[2]].value === symbol) {
        return true;
      }
  });
    return false;
    $(".playerOneScore").text(player1.name + " Score:" + player1.score);
    $(".playerTwoScore").text(player2.name + " Score:" + player2.score);
};

var changeGameBoard = function(turn, space) {
  if (thisBoard.spaces[space].value === ' ') {
    $(".space" + space).append("<img src='img/" + turn.symbol + ".png'>");
    thisBoard.spaces[space].value = turn.symbol;
  }
};

var checkTurn = function(player) {
  console.log(player1.turn)
  if (player1.turn) {
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

    $(".playerOneScore").text(player1.name + " Score: 0");
    $(".playerTwoScore").text(player2.name + " Score: 0");
    $(".nameTurn").text(player1.name + "'s Turn");
    $(".start-setup").hide();
  });

  $(".space1").click(function(){

    changeGameBoard(checkTurn(player1), this.className.replace(/[^0-9]/g, ''));

    checkWinCondition(thisBoard, player2.symbol);

      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      };
  });

  $(".space2").click(function(){
    if (thisBoard.spaces[2].value === ' ') {
      if (player1.myTurn) {
        $(".space2").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[2].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space2").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[2].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

  $(".space3").click(function(){
    if (thisBoard.spaces[3].value === ' ') {
      if (player1.myTurn) {
        $(".space3").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[3].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space3").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[3].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

  $(".space4").click(function(){
    if (thisBoard.spaces[4].value === ' ') {
      if (player1.myTurn) {
        $(".space4").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[4].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space4").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[4].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

  $(".space5").click(function(){
    if (thisBoard.spaces[5].value === ' ') {
      if (player1.myTurn) {
        $(".space5").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[5].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space5").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[5].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

  $(".space6").click(function(){
    if (thisBoard.spaces[6].value === ' ') {
      if (player1.myTurn) {
        $(".space6").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[6].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space6").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[6].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

  $(".space7").click(function(){
    if (thisBoard.spaces[7].value === ' ') {
      if (player1.myTurn) {
        $(".space7").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[7].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space7").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[7].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

  $(".space8").click(function(){
    if (thisBoard.spaces[8].value === ' ') {
      if (player1.myTurn) {
        $(".space8").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[8].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space8").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[8].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

  $(".space9").click(function(){
    if (thisBoard.spaces[9].value === ' ') {
      if (player1.myTurn) {
        $(".space9").append("<img src='img/" + player1.symbol + ".png'>");
        thisBoard.spaces[9].value = player1.symbol;
        checkWinCondition(thisBoard, player1.symbol);
      } else {
        $(".space9").append("<img src='img/" + player2.symbol + ".png'>");
        thisBoard.spaces[9].value = player2.symbol;
        checkWinCondition(thisBoard, player2.symbol);
      }
      player1.myTurn = !player1.myTurn;
      player2.myTurn = !player2.myTurn;
      if (player1.myTurn) {
        $(".nameTurn").text(player1.name + "'s Turn");
      } else {
        $(".nameTurn").text(player2.name + "'s Turn");
      }
    }
  });

});
