function playerArr(num) {

	var player = [];

	for (var i = 0; i < num; i++) {
		player.push(i + 1);
	}
	return player;
}

//--> ROB HELPED CONDENSE THESE TWO FUNCTIONS
function divSeven(num){
	return num % 7 === 0; //--> RETURNS BOOLEAN
}

function divEleven(num){
	return num % 11 === 0; //--> RETURNS BOOLEAN
}

function game(target, players){

	var array = playerArr(players);
	var count = 0;
	var index = -1; //--> NEEDS TO BE NEGATIVE ONE FOR THE VERY FIRST ITERATION
	var direction = 1
	
	if (players < 3){
		console.log("That's boring, you need more players than that!");
	}else{
		for (var i = 0; i < target; i++){
			
			count += 1;

			if ((divSeven(count - 1)) && (i !== 0)) {
				direction = direction * (-1);
			}

			if ((divEleven(count - 1)) && (i !== 0)) {
				direction = (direction * 2);
			}

			index += direction;
			console.log("index: %s | direction: %d | count: %d", index, direction, count);

			if ((divEleven(count - 1)) && (i !== 0)) {
				direction = direction/2;
			} // --> Set the direction back to either +/- 1 AFTER incrementing the index


			// DEALING WITH SITUATION WHERE INDEX IS EITHER LESS THAN ZERO OR GREATER THAN THE ARRAY LENGTH//
			//===========================================// 
			if(i > 0){ // --> Had to do this to prevent modification of the index var on the very first iteration//
				//--> ROB HELPED WITH CONDENSING THIS AREA
				if (index < 0) {
					index = (array.length + index);
				}else if (index > (array.length - 1)) {
		        	index = (index % (array.length));
		        }
			}
			console.log("----Player # %s says %d, %s", array[index], count, direction + "----"); // --> USE THIS TO VISUALIZE PROCESS
		}
	}
	return "Player # " + array[index] + " says " + target; //--> Returns 'player' who says 'target'
}

game(150, 7);