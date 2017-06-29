# __Tic Tac Toe__

This is a Tic Tac Toe game that I made for my Project Zero, as part of my Web Development Immersive 16 with General Assembly.

### __Libraries__

* jQuery
* sweetalert

### __Features__

The game is played on a grid that has 3 squares by 3 squares.
The choice is between player one i.e.. "X" and second player "O".
Players take turns putting their marks in empty squares.
The first player to get 3 of her marks in a row
(up, down, across, or diagonally) is the winner.

### __How to view__

Play it [here](https://arpanbhalla.github.io/Tic-Tac-Toe/)

[Fork](https://github.com/Arpanbhalla/Tic-Tac-Toe)

### __Approach__

The game is structured keeping in mind the analogy , Html(Bones) and css(skin) and JavaScript(brain) :

Steps for making the brain and connecting it to bones and skin :

1. make click event
2. make win sequence array
3. make two empty arrays for pushing the values of clicks from playerOne and playerTwo.
4. make function for winning
5. Function to find the winner.
6. Function for the elementPressed in the table. Following were included in the function:
    1. check if its player one or player two (by using mod operator).
    2. push value in the respective empty player arrays. - push command.
    3. called function () "findWinner in the if statement and sort it in ascending order by using sort() method for comparison"
7. Function for resetting the board & new game. the main difference between the two is when new game is clicked it resets games won counter.


### __Helpful Resources__

* http://api.jquery.com/jquery.each/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* http://blog.idojo.co/the-best-alternative-for-javascript-alert/

Thanks for stopping by, and I hope you enjoy the game!
