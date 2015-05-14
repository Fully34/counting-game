/*

PSEUDO-CODE:

Have an array with numbers 1-10 (represent players);

[|1|, 2, 3, 4, ...] --> use pipe chars to show where the count is.

to start, players[0] will be count = 1

increment = 1

for (var i = 0; i < target; i++){
	if(count%7 === 0){
		increment = - increment;
	}else if(count%11 === 0){
		increment = (increment * 2);
	}else {
		
	}
}


*/





function playerArr(num){

	var players = [];

	for (var i = 0; i<num; i++){
		players.push(i+1);
	}
	return players;
}

// playerNum(10);

function game(num, playerNum){

	var players = playerArr(playerNum); //--> returns array 1 through playerNum

	for (var i=0; i<players.length; i++){

	}

}