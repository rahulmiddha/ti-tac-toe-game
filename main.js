// made html
//made css
// java script
// 1. make click event
// 2. make win probablities array
// 3. make two empty arrays for pushing the vlaues of clicks from playerOne and playerTwo.
// 4. make function for winning



$(document).ready(function() {
  var winSequences = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  var playerOne = [];


  var playerTwo = [];

  var numClick = 0;

  var playerOneWins = 1;

  var playerTwoWins = 1;

  var audio = $("#mysoundclip");

  var audio2 = $("#mysoundclip2");

  // Function to find the winner

  var findWinner = function(player) {
    for (var i = 0; i < winSequences.length; i++) {
      var currentCombo = winSequences[i];
      console.log(player);
      if (player.includes(currentCombo[0]) && player.includes(currentCombo[1]) && player.includes(currentCombo[2])) {
        return true;
      }
    }

  };

  // Function for the following :
  // check if its player one or player to (by using mod operator).
  // push value in the respective empty player arrays. - push command
  // called function () "findWinner in the if Statment and sort it in ascending order for comparision"
  //

  var elementPressed = function() {



    $(this).off("click");
    numClick++;
    if (numClick % 2 === 0) {
      audio[0].play();
      $(this).addClass("playerTwoWin");
      playerTwo.push(parseInt($(this).attr("id")));

      if (findWinner(playerTwo.sort())) {
        // to diaplay the name of player in the alert message
        var playerTwoName = $(".playerTwoName").val();
        // to stop click
        $('td').off('click');
        //counter to increase no of games won.
        $(".playerTwoWinnings").text(playerTwoWins++);
        sweetAlert({
          title: playerTwoName,
          text: "Won the game!",
          imageUrl: "http://www.reactiongifs.com/wp-content/uploads/2013/01/chuckle.gif"
        });
        return true;
      }
    } else if (numClick % 2 !== 0) {
      audio2[0].play();
      $(this).addClass("playerOneWin");
      $(this).addClass("clicked");
      playerOne.push(parseInt($(this).attr("id")));
      if (findWinner(playerOne.sort())) {
        var playerOneName = $(".playerOneName").val();
        $('td').off('click');
        $(".playerOneWinnings").text(playerOneWins++);
        sweetAlert({
          title: playerOneName,
          text: "Won the game!",
          imageUrl: "http://www.gifbin.com/bin/052009/1243418448_dwayne-the-rock-johnson.gif"
        });
        return true;
      }

      if (!findWinner(playerOne.sort()) && !findWinner(playerTwo.sort()) && numClick === 9) {
        sweetAlert({
          title: "Draw !!",
          text: "Its a draw !!",
          imageUrl: "http://www.drodd.com/images13/funny-gifs20.gif"
        });
      }

    }

  };
  $('td').on('click', elementPressed);

  // rules

  $(".rules").on("click", function() {
    //$("p").show("slow");
    // $(".rules").on("click"),function(){
    $(".tictacToeRules").toggle(1000);
    // });
  });
  // clickEvent();
  $(".resetBoard").on("click", function() {
    $("td").removeClass("playerOneWin");
    $("td").removeClass("playerTwoWin");
    $("td").removeClass("clicked");
    $(".block").hide();
    playerOne = [];
    playerTwo = [];
    numClick = 0;
    $('td').on('click', elementPressed);
    // Clear out the two player arrays
  });
  $(".newGame").on("click", function() {
    $("td").removeClass("playerOneWin");
    $("td").removeClass("playerTwoWin");
    $("td").removeClass("clicked");
    $(".block").hide();
    playerOne = [];
    playerTwo = [];
    numClick = 0;
    $('td').on('click', elementPressed);
    playerTwoName = [];
    playerOneName = [];

    playerOneWins = 0;
    playerTwoWins = 0;
    $(".playerOneWinnings").text(playerOneWins++);
    $(".playerTwoWinnings").text(playerTwoWins++);
  });
});
