import chai from 'chai';
import data from '../data/surveys.js'
import Game from '../src/Game';
// import Round from '../src/Round';
import DominationRound from '../src/DominationRound';
import DominationTurn from '../src/DominationTurn';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
const expect = chai.expect;

let game, dominationRound, dominationTurn;
beforeEach(() => {
  game = new Game(data, 'Erick', 'Jeannie');
  game.startDominationRound();
  dominationRound = new DominationRound(game, 3);
  dominationTurn = new DominationTurn(dominationRound)

});

describe('DominationTurn', () => {

  it('should be a function', () => {
    expect(DominationTurn).to.be.a('function');
  });

  it('should be an instance of DominationRound', () => {
    expect(dominationTurn).to.be.an.instanceOf(DominationTurn);
  });

  it('should multiply scores based on users multiplier', () => {
    expect(dominationTurn.calculateScores())
  });

  // it('should send total respondents to be multiplied', () => {
  //   const newPlayer = new Player('Fernice');
  //   newPlayer.multiplier = 2;
  //   dominationTurn.countRespondents('Beer')
  //   dominationTurn.multiplyScores();
  //   expect(newPlayer.score).to.equal(6)

  // })





}); // <------ end of describe block