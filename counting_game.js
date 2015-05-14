/*

PSEUDO-CODE:

Have an array with numbers 1-10 (represent players);

to start, players[0] will be count = 1

increment up to 7, then decrement until we get to count = 14 --> (if count% 7, switch directions)



*/

function playerArr(num){

	var player = [];

	for (var i = 0; i<num; i++){
		player.push(i+1);
	}
	return player;
}

// playerNum(10);

function game(target, playerNum){

	var player = playerArr(playerNum); //--> returns an array of [1, ..., playerNum]
	var direction = 1;
	var skip = null;
	var index = 0;

	for (var i=1; i<=target; i ++){
		// if((i%7 === 0)&&(i%11 === 0)){
		// 	direction = (-1 * direction);
		// 	skip = 2 * direction;
		// 	console.log(i);
		// 	console.log("skip = " +skip+ ", direction = "+direction);
		// }else if(i%11 === 0){
		// 	skip = (2 * direction)
		// 	console.log(i);
		// 	console.log("skip = " +skip+ ", direction = "+direction);
		if(i%7 === 0 ){
			direction = (-1 * direction);
			console.log(i);
			console.log("direction = " + direction);
		}
		console.log("player " + player[(index)%player.length] + " says " + i + " | target = " + target + " | index = "+index+" | increment = "+direction);
		index += direction;
	}
}