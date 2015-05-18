/*

PSEUDO-CODE:

Have an array with numbers 1-10 (represent players);

to start, players[0] will be count = 1

increment up to 7, then decrement until we get to count = 14 --> (if count% 7, switch directions)



*/

function playerArr(num) {

	var player = [];

	for (var i = 0; i < num; i++) {
		player.push(i + 1);
	}
	return player;
}


// playerNum(10);

function game(target, playerNum) {

	var player = playerArr(playerNum); //--> returns an array of [1, ..., playerNum]
	var direction = 1;
	var index = 0;

	for (var i = 1; i <= target; i++) {

		if ((i % 7 === 0) && (i !== 0)) {
			direction = (-1 * direction);
			// console.log(i);
			// console.log("skip = " +skip+ ", direction = "+direction);
		}

		if (index < 0) {
			console.log("index less than zero" + index);
			if (index === -1){
				console.log(index);
				index = (player.length - 1);
				console.log("index flip");
				console.log(index);
			} else if (index === -2){
				console.log(index);
				index = (player.length - 2);
				console.log("mega flip");
				console.log(index);
			}
		} else if (index > (player.length)) {
			console.log("index greater than length" + index);
			if (index === (player.length)) {
				console.log(index);
				index = 0;
				console.log("index flip");
				console.log(index);
			}else if (index === (player.length + 1)) {
				console.log(index);
				index = 1;
				console.log("mega flip");
				console.log(index);
			}
		} 

		if (((i - 1) % 11 === 0) && ( (i - 1) > 0)) {
			index += direction;
			console.log("skip");
			if (index === -1){
				console.log("index flip");
				index = (player.length - 1);
			} else if (index === -2){
				console.log("mega flip");
				index = (player.length - 2);
			}
		}

		console.log("player %d says %d | index = %s", player[(index)%player.length], i, index);

		index += direction;
		if (i % 7 === 0){
			console.log("switch" + " | " + direction);
		}
	}
}

game(147,3);








