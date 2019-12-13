const Letter = require('./letter');

function Word(word){
    this.wordArr = [];
    for(let i = 0; i<word.length; i++){
        this.wordArr.push(new Letter(word[i]));
    }
    this.returnWord = function(){
        var wordStr = '';
        this.wordArr.forEach(letter => {
            wordStr += letter.returnCharacter();
        });
        return wordStr;
    }
    this.guessLetter = function(char){
        this.wordArr.forEach(letter => {
            letter.isCharacter(char);
        });
    }
}

module.exports = Word;