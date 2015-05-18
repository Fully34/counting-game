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

function game(target, players){

	var array = playerArr(players);
	var count = 0;
	var index = -1;
	var direction = 1


	for (var i = 0; i < target; i++){
		
		count += 1;

		if ((divSeven(count - 1)) && (i !== 0)) {
			direction = direction * (-1);
		}

		if ((divEleven(count - 1)) && (i !== 0)) {
			direction = (direction * 2);
		}

		index += direction;
		console.log("index: " + index + " | " + "direction: " + direction);

		if ((divEleven(count - 1)) && (i !== 0)) {
			direction = direction/2;
		}

		if(i > 0){
			if (index < 0) {
				if (index === -1) {
					index = (array.length - 1);
				}else if (index === -2){
					index = (array.length - 2)
				}
			}else if (index > (array.length - 1)) {
	            if (index === array.length) {
	            	index = 0;
	            }else if(index === (array.length + 1)){
	            	index = 1; 
	            }
			}
		}

		console.log("Player # %s says %d, %d", array[index], count, direction);
	}

	return "Player # " + array[index] + " says " + target;

}

game(150, 7);