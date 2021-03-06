const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn1, turn2;
  let card3;

  beforeEach(() => {
    card3 = new Card(12, 'What are the two ways you can access properties of an object?', ['bracket notation and dot notation', 'bracket notation and index-array notation', 'dot notation and literal notation'], 'bracket notation and dot notation');
    turn1 = new Turn('bracket notation and dot notation', card3);
    turn2 = new Turn('bracket notation and index-array notation', card3);
  })

  it('should be able take the user\'s guess as an argument', () => {
    expect(turn1.userGuess).to.equal('bracket notation and dot notation');
    expect(turn2.userGuess).to.equal('bracket notation and index-array notation');
  });

  it('should be able to take in an instance of Card', () => {
    expect(turn1).to.have.property('card');
  });

  it('should be able to return the user\'s guess', () => {
    expect(turn1.returnGuess()).to.equal('bracket notation and dot notation');
    expect(turn2.returnGuess()).to.equal('bracket notation and index-array notation');
  });

  it('should be able to return the Card instance', () => {
    expect(turn1.returnCard()).to.equal(turn1.card);
    expect(turn2.returnCard()).to.equal(turn2.card);
  });

  it('should return a value of true if the user\'s guess is correct', () => {
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should return a value of false if the user\'s guess is incorrect', () => {
    expect(turn2.evaluateGuess()).to.equal(false);
  })

  it('should give feedback of a string of "Correct!" if the user\'s guess is correct', () => {
    expect(turn1.giveFeedback()).to.equal("Correct!");
  });

  it('should give feedback of a string of "Incorrect!" if the user\'s guess is incorrect', () => {
    expect(turn2.giveFeedback()).to.equal("Incorrect!");
  })
});
