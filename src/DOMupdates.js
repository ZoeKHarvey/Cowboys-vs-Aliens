import $ from 'jquery';


const DOMupdates = {
  showWinner(player) {
    $('').text(player.name)
    $('').text(player.score)
  },

  appendQuestion(question) {
    $('#current-question').text(question)
  },

  appendAnswer(answer, number) {
    $('#answer-1').text(answer)
  }

  
 

}



export default DOMupdates;