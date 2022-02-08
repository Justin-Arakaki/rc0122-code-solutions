console.log('Lodash is loaded:', typeof _ !== 'undefined');
const deck = [];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const faces = ['jack', 'queen', 'king'];
const players = [
  {
    name: 'Jay',
    hand: []
  },
  {
    name: 'Taylor',
    hand: []
  },
  {
    name: 'Justin',
    hand: []
  },
  {
    name: 'Danny',
    hand: []
  }
];

play(players, 2);

function play(players, sizeHand) {
  // Check if game has enough cards
  if (sizeHand > 52 / players.length) {
    console.log('Hand too big. Quitting.');
    return false;
  }
  reset();
  createDeck();
  shuffle();
  // Deal around like a dealer
  for (let i = 0; i < sizeHand; i++) {
    for (let j = 0; j < players.length; j++) {
      dealCard(players[j]);
    }
  }
  score(players);
}

function score(players) {
  const finalScores = [];
  // Add up card values for each player
  for (let i = 0; i < players.length; i++) {
    let score = 0;
    for (const x in players[i].hand) {
      score += players[i].hand[x].value;
    }
    finalScores.push(score);
  }
  // Create score message for each player
  for (let i = 0; i < finalScores.length; i++) {
    const msgScore = players[i].name + ' scored ' + finalScores[i] + '!';
    console.log(msgScore);
  }
  // Determine who won
  const winner = findMax(finalScores);
  if (winner !== -1) {
    const msgWinner = players[winner].name + ' wins!';
    console.log(msgWinner);
    return true;
  } else {
    console.log('A tie.');
    return false;
  }
}

function dealCard(player) {
  // Add card to hand and remove card from deck
  player.hand.push(deck.pop());
}

function shuffle() {
  // TY MR FISHER AND MR YATES
  for (let i = 0; i < deck.length; i++) {
    const randIndex = Math.floor(Math.random() * deck.length);
    const temp = deck[randIndex];
    deck[randIndex] = deck[i];
    deck[i] = temp;
  }
}

function createDeck() {
  // I don't want to write them all
  // Let's call it flexible
  for (const x of suits) {
    for (let i = 2; i <= 10; i++) {
      deck.push(createCard(i, x));
    }
    for (const y of faces) {
      deck.push(createCard(y, x));
    }
    deck.push(createCard('ace', x));
  }
}

function createCard(rank, suit) {
  const newCard = {
    rank: rank,
    suit: suit
  };
  let value;
  if (rank === 'ace') {
    value = 11;
  } else if (faces.includes(rank)) {
    value = 10;
  } else {
    value = rank;
  }
  newCard.value = value;
  return newCard;
}

function reset() {
  // deletes contents of the deck and hands
  deck.splice(0, deck.length);
  for (const x in players) {
    players[x].hand.splice(0, players[x].hand.length);
  }
}

function findMax(array) {
  // Algo that finds index of highest value in array
  let max = array[0];
  let maxIndex = 0;
  let tie = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      maxIndex = i;
      max = array[i];
    } else if (array[i] === max) {
      tie = array[i];
    }
  }
  // If a tie exists then returns -1
  // I could probably find and return the tied highest but I'm too tired
  if (tie === max) {
    return -1;
  }
  return maxIndex;
}
