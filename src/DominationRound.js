class DominationRound extends Round {
  constructor(survey, answers, multiplier) {
    super(survey, answers);
    this.survey = survey;
    this.answers = answers;
    this.multiplier = multiplier;
  }

}

export default DominationRound;
import Round from './Round.js';