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


function divSeven(num){
	if (num % 7 === 0){
		return true;
	}else{
		return false;
	}
}

function divEleven(num){
	if (num % 11 === 0){
		return true;
	}else{
		return false;
	}
}

function game(target, playerNum) {

	var player = playerArr(playerNum); //--> returns an array of [1, ..., playerNum]
	var direction = 1;
	var index = -1;

	for (var i = 1; i <= target; i++) {

		if (divSeven(i)){
			direction = (direction * -1);
			console.log("direction = " + direction);
		}

		if (i > 1) {
			if (index < 0) {
				if (index === -1){
					// console.log("index = player.length  --> " + index);
					index = (player.length - 1);
				} else if (index === -2){
					// console.log("index = player.length  --> " + index);
					index = (player.length - 2);
				}
			} else if (index >= (player.length)) {
				if (index === (player.length)) {
					// console.log("index = player.length  --> " + index);
					index = 0;
					console.log("index flip");
				}else if (index === (player.length + 1)) {
					// console.log("index = player.length + 1 --> " + index);
					index = 1;
					console.log("mega flip");
				}
			}
		}
		index += direction;

		if (divEleven(i)) {
			index += direction;
			console.log("skip" + " | " + direction);
		}

	console.log(player[index] + " | " + direction);

	}

	return "player " + index + " says " + target;
}

game(100,10);








