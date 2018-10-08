// initialize variables, arrays (globally)
    var wins = 0;
    var losses = 0;
    var remainingGuesses = 13;
    var lettersGuessed = [];
    var playersToBeGuessed = ["Woods", "Federer", "Phelps", "Armstrong", "Bolt", "Brady", "Bryant", "Manning", "Pujols", "Schumacher"];
    var singlePlayerToBeGuessed = [];

    // Randomly pick a string from playersToBeGuessed and to replace the characters with dashes
    var randomElement;
    function randomSelector () {
        var randomIndex = Math.floor(Math.random() * playersToBeGuessed.length);
        var randomElement = playersToBeGuessed[randomIndex];
        console.log(randomElement);

        for(var i=0 ; i < randomElement.length ; i++){
            randomElement = randomElement.replace(randomElement[i],"-");   
        }
        console.log(randomElement);
    }

    //function to take user input from the keyboard - starts the game
    document.onkeyup = function (event) {

        var userGuess = event.key;







    }

    


