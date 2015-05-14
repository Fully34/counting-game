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

	var player = [];

	for (var i = 0; i<num; i++){
		player.push(i+1);
	}
	return player;
}

// playerNum(10);

function game(num, playerNum){

	var player = playerArr(playerNum); //--> returns an array of [1, ..., playerNum]
	var count = num

	for (var i=1; i<=count; i++){
		console.log("player " + player[(i-1)%player.length] + " says " + i + " " + count)
	}
	console.log(player);
}