import chai from 'chai';
import data from '../data/surveys.js'
import Game from '../src/Game';
// import Round from '../src/Round';
import DominationRound from '../src/DominationRound';
const expect = chai.expect;

let dominationRound, game;
beforeEach(() => {
  game = new Game(data)
  dominationRound = new DominationRound(game, 3);
});

describe('DominationRound', () => {
  
  it.only('should be a function', () => {
    expect(DominationRound).to.be.a('function');
  });

  it.only('should be an instance of DominationRound', () => {
    expect(dominationRound).to.be.an.instanceOf(DominationRound);
  });

  // it.only('should instantiate a new Domination Round', () => {
  //   dominationRound.startDominationRound()

  // })

  


}); // <------ end of describe block