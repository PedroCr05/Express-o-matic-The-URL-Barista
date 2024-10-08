const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.get(`/greetings/:username`, (req, res) => {
  res.send(`Well, hello there ${req.params.username}!`);
});

app.get(`/roll/:diceNum`, (req, res) => {
  const diceRoll = parseInt(req.params.diceNum);
  if (diceRoll) {
    // Keep this for knowing how to randomize a number
    res.send(`You rolled a ${diceRoll} Dice and got ${Math.floor(Math.random() * diceRoll)}!`);
  } else {
    res.send(`Please specify a number.`);
  }
})

app.get(`/inventions/:itemId`, (req, res) => {
  const collectibles = [
    { name: `Rubix cube`, released: 1974, creator: `Erno Rubik`, price: 100 },
    { name: `Phonograph`, released: 1877, creator: `Thomas Edison`, price: 500000 },
    { name: `Guernica`, released: 1937, creator: `Pablo Picasso`, price: 200000},
    { name: `Wright Flyer`, released: 1903, creator: [`Orville Wright`, `Wilbur Wright`], price: 900000},
    { name: `The Last Supper`, released: 1495, creator: `Leonardo Da Vinci`, price: 89},
  ]

  const num = (req.params.itemId);
  if (collectibles[req.params.itemId]) {
    res.send(
      `Would you like this ${collectibles[num].name}? It'll cost you ${collectibles[num].price}!`
    );
  } else {
    res.send(`We aren't selling this item. Please, Check back later!`);
  }
})

app.get(`/*`, (req, res) => {
  res.send(``);
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});