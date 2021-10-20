//console.log("\n\njust run it but now it is ALL<===\n")
//require('./index-runALLGame.js')

//console.log("\n\n 13 cards FP still 2 players<-----------===\n");
//require('./myJS/cardC-FP-1-13cards.js');

console.log("\n\n runGameI()<-----------===\n");

console.log(runGameI());

console.log("\n\n game.playGameO()<-----------===\n");

game = new GameO();
console.log(game.playGameO());


console.log("\n\n 8 cards FP<-----------===\n");

//require('./myJS/cardC-FP-1-8cards.js');
console.log('explicitly ./myJS/cardC-FP-1-8cards.js'); // actually not run like this


console.log(report(runGameF(), turnMessage, endMessage));

// to run ```node index.js```