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
  game.startDominationTurn();
  dominationRound = new DominationRound(game, 3);
  dominationTurn = new DominationTurn(dominationRound)

});

describe('DominationTurn', () => {

  it.only('should be a function', () => {
    expect(DominationTurn).to.be.a('function');

  });

  it.only('should be an instance of DominationRound', () => {
    expect(dominationTurn).to.be.an.instanceOf(DominationTurn);
  });

  it.only('should be asked a question', () => {
    expect(dominationTurn.getQuestion()).to.equal(dominationRound.survey[0].question)
  });

  it.only('should capitalize guesses', () => {
    expect(dominationTurn.capitalizeGuess('bOwLiNg BaLL')).to.equal('BOWLING BALL')
  });

  it.only('should check to see if guess was incorrect', () => {
    expect(dominationTurn.checkGuess('Wrong Answer')).to.equal(false);
  });

  it.only('should give points for correct answers', () => {
    dominationTurn.getQuestion()
    dominationTurn.saveRespondents()
    dominationTurn.checkGuess(dominationRound.survey[2].answer)
    expect(dominationTurn.getScore(dominationRound.survey[2].answer)).to.equal(dominationRound.survey[2].respondents)
  });

  // it.skip('should save respondents', () => {
  //   dominationTurn.getQuestion()
  //   dominationTurn.saveRespondents()
  //   // console.log(dominationRound.respondentsInfo)
  //   expect(dominationRound.respondentsInfo).to.eql([{},{}])
  // });
  //method IS WORKING, unsure best way to test

  // it.only('should save guess', () => {
  //   dominationTurn.getQuestion()
  //   dominationTurn.saveRespondents()
  //   dominationTurn.saveGuess('wrong')
  //   expect(dominationRound.dominationGuesses).to.eql(['wrong'])
  // });

  // it.only('should save all guesses', () => {
  //   dominationTurn.getQuestion()
  //   dominationTurn.saveRespondents()
  //   dominationTurn.saveGuess('wrong1')
  //   dominationTurn.saveGuess('wrong2')
  //   expect(dominationRound.dominationGuesses).to.eql(['wrong1', 'wrong2'])
  // });



  // it('should ask another question after only one guess', () => {
  //   expect(dominationTurn.getQuestion()).to.equal('string')
  // });

  // it.only('should multiply scores based on users multiplier', () => {
  //   expect(dominationTurn.calculateScores())
  // });

  // it('should send total respondents to be multiplied', () => {
  //   const newPlayer = new Player('Fernice');
  //   newPlayer.multiplier = 2;
  //   dominationTurn.countRespondents('Beer')
  //   dominationTurn.multiplyScores();
  //   expect(newPlayer.score).to.equal(6)

  // })





}); // <------ end of describe block