### __Tic Tac Toe__

This is a classic Tic Tac Toe game made in my spare time. 

### __Libraries__

* jQuery
* sweetalert

### __Features__

The game is played on a 3x3 grid.
The players play with the traditional 'X' and 'O'.
Players take turns putting their marks in empty squares on the grid.
The first player to get 3 of their marks in a row (vertical/horizontal/diagonal) wins.

### __Approach__

The game is structured using the analogy - 
-- HTML(Bones) 
-- CSS(Skin)  
-- JavaScript(Brain) 

Steps for to make JavaScript connect to HTML and CSS: 

1. make click event
2. make all winning sequence arrays
3. make two empty arrays for pushing the values of clicks - one for playerOne and one for playerTwo.
4. make function for winning
5. Function to find the winner.
6. Function for the elementPressed in the table. Following were included in the function:
    1. check if its player one or player two.
    2. push value in the respective empty player arrays. - push command.
    3. called function () "findWinner in the if statement and sort it in ascending order by using sort() method for comparison"
7. Function for resetting the board & new game. the main difference between the two is when new game is clicked it resets games won counter.


### __Helpful Resources__

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* http://blog.idojo.co/the-best-alternative-for-javascript-alert/
* http://api.jquery.com/jquery.each/

