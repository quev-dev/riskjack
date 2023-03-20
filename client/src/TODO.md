# RiskJack TODO

## Game states to store in .store.js:

You will need to store the following objects in `.store.js`:

- Game State
  - Is the game **ongoing**, **paused**, or **done**?
  - Is the dealer passing cards?
  - Are the cards between each players now being compared (triggers on both players staying)?
  - Which player's turn is it?
  - What cards are left in the main deck?
  - Which round is it?
- Player State
  - HP
  - HP risk (bet)
  - Card deck
  - Riskcard deck
  - Chose **stay**
  - Chose **hit**
  - Chose to play a riskcard
    - Which riskcard was played?

## Assets to Prepare:

### BACKGROUNDS

- Create a background for the game to take place in. This will be used
  by 'Game.jsx' as the background image
  - Consider making it an SVG animation

### ICONS

- You'll need to create a custom icon for each risk card.
  - Create a separate file and plan out each risk card, and what
    you want them to do.
- Include animated icons for enabling/disabling sound effects.
- Obtain BGM icon
- Obtain SFX icon

### BACKGROUND MUSIC

- Create ambient tracks if the user wishes to play with BGM:
  - Website navigation (home, opponent search)
  - Practice
  - Real game

### SOUND EFFECTS

- All cards
  - Receive card
- Risk Cards
  - Play card
  - View card description
- HP Cards
  - HP card is now at risk
  - Lose HP card
  - Gain HP card
- Other actions
  - Hit
  - Stay
