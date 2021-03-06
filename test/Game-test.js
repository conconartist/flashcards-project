const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  it('should be an instance of Game', () => {
    let game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  })
  it('should keep track of current round once game starts', () => {
    let game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })
})
