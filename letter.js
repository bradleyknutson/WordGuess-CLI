function Letter(char){
    this.letter = char.toUpperCase();
    this.guessed = false;
    this.returnCharacter = function(){
        if(this.guessed){
            return this.letter;
        }else{
            return '_';
        }
    }
    this.isCharacter = function(char){
        if(char.toUpperCase() === this.letter){
            this.guessed = true;
        }
    }
}

module.exports = Letter;