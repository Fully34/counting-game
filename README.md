This is a programming problem that I got from: www.theodinproject.com

You are to make a game that takes two inputs: the target number and, the number of people counting.

Say, for instance, that you choose a target of 100 and want 10 people to count.  

Your game consists of 10 people counting up to 100 in order.  IE: person 1 says "1", person 2 says "2" etc...

Sounds pretty easy, right?

However, there are two conditions that alter the game in a big way.

1. If the number being stated is divisible by 7, the count order will reverse.
  - Person 6 says "6", person 7 says "7", person 6 says "8", person 5 says "9", etc...

2. If the number being stated is divisible by 11, the next player is skipped

The goal of the game is to tell the user which player says the final number when the dust settles.  



NOTES:

counting_game.js does not do it properly.  However, I did flesh out the logic while writing that particular file.  It was just too messed up to keep tinkering with, so I started from scratch with counting_game_2.js


counting_game_2.js solves correctly (I am pretty sure, please tell me if there is an issue!).  I had a little help from a developer friend of mine with condensing some of the more verbose logic/procedures I had originally implemented.