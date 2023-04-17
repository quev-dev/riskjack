# Riskjack Instructions

## Introduction 📜

Riskjack plays just like blackjack, with a few modifications and one major difference. Each player draws cards from a deck numbered 1 through 11, trying to add up to 21. If they go over 21, they lose. Each player can choose to draw a card, or "stay", meaning that they won't receive one. When the cards are compared, whoever is the closest to 21 wins.

- At the start of the game, both players receive two cards at random.
- The cards are compared when both players choose to stay.
- Both players share the same deck, meaning there cannot be a second instance of a card between each player's set of cards. If the first player has the two card or seven card, then the second player cannot have the two or seven card.
- If both players are over 21, or have the same total, both players are considered to have lost.

Smaller modifications have been made to the game for Riskjack, such as:

- Each player begins with 5 HP, portrayed by cards at the bottom of the screen. Once one player runs out of HP, they've
- A player's _bet_ determines how much HP is at risk if they lose. Each player's bet begins at 1, which increases by 1 every round.

The major difference in question is the addition of _Risk Cards_.

## Risk Cards 🃏

Risk Cards are cards with various effects that change the rules of the game. At the start of the game, each player receives a risk card. Each player can use as many risk cards from their arsenal as they'd like, until they end their turn by drawing a card or staying.

- Upon ending their turn, the player gains one risk card.
- There can be duplicates of risk cards as they are drawn entirely randomly.

All of the various risk card effects and their corresponding names are listed below.

- **2-Card:** Draw the 2 card. If it is not in the deck, nothing happens.
- **3-Card:** Draw the 3 card. If it is not in the deck, nothing happens.
- **4-Card:** Draw the 4 card. If it is not in the deck, nothing happens.
- **5-Card:** Draw the 5 card. If it is not in the deck, nothing happens.
- **6-Card:** Draw the 6 card. If it is not in the deck, nothing happens.
- **7-Card:** Draw the 7 card. If it is not in the deck, nothing happens.
- **Risk-1:** Your opponent's bet increases by 1. It cannot go above 5.
- **Risk-2:** Your opponent's bet increases by 2. It cannot go above 5.
- **Protect-1:** Your bet is decreased by 1. It cannot go below 0.
- **Protect-2:** Your bet is decreased by 2 It cannot go below 0.
- **Remove-Card:** Return the last card your opponent drew to the deck.
- **Return-Card:** Return the last card you drew to the deck.
- **Exchange-Cards:** Swap the last card you drew with the last card your opponent drew.
- **Risk-Switch:** Return 2 of your risk cards at random, and gain 2 new risk cards at random.
- **Aim-for-17:** Changes the goal to 17.
- **Aim-for-24:** Changes the goal to 24.
- **Aim-for-27:** Changes the goal to 27.
- **Perfect-Draw:** Draw a card from the deck that puts you as close as possible to the goal.
- **True-Love:** Your opponent receives a card from the deck that puts them as close as possible to the goal.

## How the Programming Works ⌨️

If you view `game.js`, you can get an idea of how the game will be programmed. The section below will provide a step-by-step process detailing how a game will be executed.

_Side note: As we get further in development, logic will be created so that each player only has one minute to make a choice - this timer resets after each turn, or after a risk card is played. If the timer runs out, the player will be forced to stay. After more inactivity, say, 3 minutes, the match would be forfeited._

### Start

At the start of the game, a function within the `game` object called `StartGame` will be executed. In this function, each player's `DrawCard` function is executed, providing each player with 2 from the deck at random. `DrawRiskCard` is also ran, providing each player with 1 risk card. Finally, the `Player1` object representing Player 1's stats has their attribute `Turn` set to true. This signals that it is their turn.

```js
// within the "Game" object:
StartGame: () => {
  for (let i = 0; i < 2; i++) {
    Player1.DrawCard();
    Player2.DrawCard();
  }
  Player1.DrawRiskCard();
  Player2.DrawRiskCard();

  Player1.Turn = true;
},
```

### Turns

Then, each player is free to make decisions as they please - they can _hit_ (draw a random card from the deck), _stay_ (keep their current deck), or play a risk card. An interface will appear for selecting the option to play a risk card, showing each of their cards and providing a brief description on its effect.

If a player has _not_ played a risk card, and they have chosen to stay, an attribute from the `Game` object called `StayedCount` increases by one. At the end of every turn, a check is run - if `StayedCount` is 2 or more, a function from the `Game` object is executed, called `CompareTotals`. This will determine the winner of the round, applying HP loss accurate to the losing player's bet.
