function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPlayer() {
  return {
    HP: 0,
    Bet: 0,
    Turn: false,
    Total: 0,
    PlayedRiskCard: false,
    Cards: [],
    RiskCards: [],

    CalculateTotal: function () {
      let sum = 0;
      for (var i = 0; i < this.Cards.length; i++) {
        sum += this.Cards[i];
      }
      this.Total = sum;
    },
    SwitchTurns: function () {
      if (this === Player1) Player2.Turn = true;
      else Player1.Turn = true;
      this.Turn = false;
      this.PlayedRiskCard = false;
      this.DrawRiskCard();
    },
    ChangeHP: function (amount) {
      this.HP += amount;
    },
    ChangeBet: function (amount) {
      this.Bet += amount;
    },
    DrawRiskCard: function () {
      this.RiskCards.push(Game.RiskDeck[getRandomIndex(Game.RiskDeck)]);
    },
    PlayRiskCard: function (riskCard) {
      this.PlayedRiskCard = true;
      RiskMethods[riskCard](this);
      this.RiskCards.splice(this.RiskCards.indexOf(riskCard));
    },
    Stay: function () {
      if (this.PlayedRiskCard) Game.StayedCount = 0;
      else Game.StayedCount += 1;

      if (Game.StayedCount >= 2) Game.CompareTotals();

      this.SwitchTurns();
    },
    DrawCard: function (card = false) {
      if (Game.Deck.length <= 0) return;
      let drawnCard;
      if (!card) {
        const randomIndex = getRandomIndex(Game.Deck);
        drawnCard = Game.Deck.splice(randomIndex, 1)[0];
      } else {
        const cardIndex = Game.Deck.indexOf(card);
        if (cardIndex === -1) return;
        drawnCard = Game.Deck.splice(cardIndex, 1)[0];
      }
      if (drawnCard !== undefined) {
        this.Cards.push(drawnCard);
        this.CalculateTotal();
      }

      this.SwitchTurns();
    },
  };
}

let Player1 = createPlayer();
let Player2 = createPlayer();

const RiskMethods = {
  "Risk-1": (target) => {
    let newTarget = Player1;
    if (target === Player1) newTarget = Player2;

    newTarget.Bet += 1;
    if (newTarget.Bet > 5) newTarget.Bet = 5;
  },
  "Risk-2": (target) => {
    let newTarget = Player1;
    if (target === Player1) newTarget = Player2;

    newTarget.Bet += 2;
    if (newTarget.Bet > 5) newTarget.Bet = 5;
  },
  "2-Card": (target) => target.DrawCard(2),
  "3-Card": (target) => target.DrawCard(3),
  "4-Card": (target) => target.DrawCard(4),
  "5-Card": (target) => target.DrawCard(5),
  "6-Card": (target) => target.DrawCard(6),
  "7-Card": (target) => target.DrawCard(7),
  "Remove-Card": (target) => {
    if (target === Player1) Game.Deck.push(Player2.Cards.pop());
    else Game.Deck.push(Player1.Cards.pop());
  },
  "Return-Card": (target) => Game.Deck.push(target.Cards.pop()),
  "Exchange-Cards": () => {
    const Player1Card = Player1.Cards[Player1.Cards.length - 1];
    const Player2Card = Player2.Cards[Player2.Cards.length - 1];
    Player1.Cards[Player1.Cards.length - 1] = Player2Card;
    Player2.Cards[Player2.Cards.length - 1] = Player1Card;
  },
  "Risk-Switch": (target) => {
    for (var i = 0; i < 2; i++) {
      target.RiskCards.splice(getRandomIndex(target.RiskCards), 1)[0];
      target.DrawRiskCard();
    }
  },
  "Protect-1": (target) => {
    target.Bet -= 1;
    if (target.Bet < 0) target.Bet = 0;
  },
  "Protect-2": (target) => {
    target.Bet -= 2;
    if (target.Bet < 0) target.Bet = 0;
  },
  "Aim-for-17": () => (Game.Goal = 17),
  "Aim-for-24": () => (Game.Goal = 24),
  "Aim-for-27": () => (Game.Goal = 27),
  "Perfect-Draw": (target) => {
    let cardToDraw = Game.Deck[0];
    for (var i = 0; i < Game.Deck.length; i++) {
      if (Game.Deck[i] + target.Total > Game.Goal) break;
      cardToDraw = Game.Deck[i];
    }
    target.DrawCard(cardToDraw);
  },
  "True-Love": (target) => {
    let cardToDraw = Game.Deck[0];
    if (target === Player1) {
      for (var i = 0; i < Game.Deck.length; i++) {
        if (Game.Deck[i] + Player2.Total > Game.Goal) break;
        cardToDraw = Game.Deck[i];
      }
      Player2.DrawCard(cardToDraw);
    } else {
      for (var i = 0; i < Game.Deck.length; i++) {
        if (Game.Deck[i] + Player1.Total > Game.Goal) break;
        cardToDraw = Game.Deck[i];
      }
      Player1.DrawCard(cardToDraw);
    }
  },
};

const Game = {
  Goal: 21,
  Deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  RiskDeck: [
    "Risk-1",
    "Risk-2",
    "2-Card",
    "3-Card",
    "4-Card",
    "5-Card",
    "6-Card",
    "7-Card",
    "Remove-Card",
    "Exchange-Cards",
    "Risk-Switch",
    "Protect-1",
    "Protect-2",
    "Aim-for-17",
    "Aim-for-24",
    "Aim-for-27",
    "Perfect-Draw",
    "True-Love",
  ],
  State: "Active",
  StayedCount: 0,

  StartGame: () => {
    for (let i = 0; i < 2; i++) {
      Player1.DrawCard();
      Player2.DrawCard();
    }
    Player1.DrawRiskCard();
    Player2.DrawRiskCard();

    Player1.Turn = true;
  },
  CompareTotals: () => {
    let P1Status;
    let P2Status;

    if (Player1.Total > Game.Goal) P1Status = "Lost";
    if (Player2.Total > Game.Goal) P2Status = "Lost";

    // Both are not over - compare cards
    if (P1Status !== "Lost" && P2Status !== "Lost") {
      const P1Score = Math.abs(Player1.Total - Game.Goal);
      const P2Score = Math.abs(Player2.Total - Game.Goal);
      if (P1Score < P2Score) console.log("Player 1 wins.");
      else if (P2Score < P1Score) console.log("Player 2 wins.");
      else if (P1Score === P2Score)
        console.log("The score is the same - both players lost.");
    }

    // Player 1 wins; Player 2 is over
    else if (P1Status !== "Lost" && P2Status === "Lost") {
      console.log("Player 1 wins - Player 2 went over.");
    }

    // Player 2 wins; Player 1 is over
    else if (P2Status !== "Lost" && P1Status === "Lost") {
      console.log("Player 2 wins - Player 1 went over.");
    }

    // Both are over - both lost
    else {
      console.log("Both players are over - both lose.");
    }
  },
  EndGame: () => (Game.State = "End"),
};

// * Example game prep

function logGameState(round) {
  console.log(`--- ROUND ${round}`);
  console.log("P1 Score:", Player1.Cards, `${Player1.Total}/${Game.Goal}`);
  console.log("P2 Score:", Player2.Cards, `${Player2.Total}/${Game.Goal}`);
  console.log("P1 Risk Cards:", Player1.RiskCards, "P2 Risk Cards:", Player2.RiskCards);
}

// * Example game walkthrough:
// BEGIN | Each player draws 2 cards at the start; Receives 1 Risk Card each as well
Game.StartGame();
logGameState("0 (Begin)");

// ROUND 1 | Each player plays their risk card
Player1.PlayRiskCard(Player1.RiskCards[0]);
Player1.SwitchTurns();

Player2.PlayRiskCard(Player2.RiskCards[0]);
Player2.SwitchTurns();

logGameState(1);

// ROUND 2 | Player 1 Draws a card while Player 2 doesn't; Both players use their risk cards
Player1.PlayRiskCard(Player1.RiskCards[0]);
Player1.DrawCard();

Player2.PlayRiskCard(Player2.RiskCards[0]);
Player2.Stay();

console.log("StayedCount:", Game.StayedCount);

logGameState(2);

// ROUND 3 | Both Players Stay, and the cards are compared
Player1.Stay();

Player2.Stay();
