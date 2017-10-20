	var zIndex = 2;
	var zIndexBack = 1;
	var placeholder;
	var correctGuesses = 0;
	var guessesLeft = 6;
	var wrongLetter = true;
	var wins = 0;	
	var wrongLetters = [];
	var correctLetters = [];
	var wordChoices = ["TARGARYEN", "STARK", "LANNISTER", "TULLY", "BARATHEON", "MARTELL", "TYRELL", 'WHITEWALKERS', 'NIGHTSWATCH', 'GREYJOY'];
	
	var audioHangman = document.createElement("audio");
      audioHangman.setAttribute("src", "assets/audio/hangman.mp3");
	
	var audioTargaryen = document.createElement("audio");
      audioTargaryen.setAttribute("src", "assets/audio/targaryen.mp3");

	var audioStark = document.createElement("audio");
      audioStark.setAttribute("src", "assets/audio/stark.mp3");

    var audioLannister = document.createElement("audio");
      audioLannister.setAttribute("src", "assets/audio/lannister.mp3");

	var audioDothraki = document.createElement("audio");
      audioDothraki.setAttribute("src", "assets/audio/dothraki.mp3");

	var audioTully = document.createElement("audio");
      audioTully.setAttribute("src", "assets/audio/tully.mp3");

    var audioBaratheon = document.createElement("audio");
      audioBaratheon.setAttribute("src", "assets/audio/baratheon.mp3");

	var audioMartell = document.createElement("audio");
      audioMartell.setAttribute("src", "assets/audio/martell.mp3");

	var audioTyrell = document.createElement("audio");
      audioTyrell.setAttribute("src", "assets/audio/Tyrell.mp3");

	var audioWhitewalkers = document.createElement("audio");
      audioWhitewalkers.setAttribute("src", "assets/audio/whitewalker.mp3");    

	var audioNightswatch = document.createElement("audio");
      audioNightswatch.setAttribute("src", "assets/audio/nightswatch.mp3");

    var AudioGreyjoy = document.createElement("audio");
      AudioGreyjoy.setAttribute("src", "assets/audio/greyjoy.mp3");

    //Game resets, generates new random word
	function gameReset()
	{	
		document.getElementById("throne").style.zIndex = 99 + zIndex;
		audioHangman.pause();
		audioStark.pause();
		audioLannister.pause();
		audioTully.pause();
		audioTyrell.pause();
		audioMartell.pause();
		audioWhitewalkers.pause();
		audioNightswatch.pause();
		AudioGreyjoy.pause();
		audioBaratheon.pause();
		audioDothraki.pause();
		audioTargaryen.pause();	
		placeholder=[];
		wrongLetters = [];
		correctLetters = [];
		guessesLeft = 6;
		correctGuesses = 0;
		var html = document.querySelector("#incorrectLetters").innerHTML = "";
		var html1 = document.querySelector("#guessesLeft").innerHTML = guessesLeft;
		chosenWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
			console.log("choosen word is " + chosenWord);
		for (var j=0; j<chosenWord.length; j++)
		{	
			placeholder[j] = "_ ";		
			console.log(placeholder);
		}
		document.getElementById('letters').innerHTML = placeholder.join("");	
		startGame();
			console.log("chosen word length is " + chosenWord.length);	
		var html2 = document.querySelector("#space-bar").innerHTML = "";
			console.log("game has reset");
	}

	//if user wins, the corresponding picture and song plays for the word
	function gameWin()
	{	
		document.getElementById("throne").style.zIndex = zIndexBack;
		if (chosenWord == "TARGARYEN"){
			audioTargaryen.currentTime = 0;
			var currentSong = audioTargaryen.play();
			document.getElementById("targaryen").style.zIndex = zIndex;	
		}
		if (chosenWord == "STARK"){
			audioStark.currentTime = 0;
			audioStark.play();
			document.getElementById("stark").style.zIndex = zIndex;	
		}
		if (chosenWord == "LANNISTER"){
			audioLannister.currentTime = 0;
			audioLannister.play();	
			document.getElementById("lannister").style.zIndex = zIndex;	
		}

		if (chosenWord == "DOTHRAKI") {
			audioDothraki.currentTime = 0;
			audioLannister.play();
			document.getElementById("dothraki").style.zIndex = zIndex;		
		}
		if (chosenWord == "TULLY") {
			audioTully.currentTime = 0;
			audioTully.play();
			document.getElementById("tully").style.zIndex = zIndex;
		}
		if (chosenWord == "BARATHEON"){
			audioBaratheon.currentTime = 0;
			audioBaratheon.play();
			document.getElementById("baratheon").style.zIndex = zIndex;
		}
		if (chosenWord == "MARTELL"){
			audioMartell.currentTime = 0;
			audioMartell.play();
			document.getElementById("martell").style.zIndex = zIndex;
		}
		if (chosenWord == "TYRELL"){
			audioTyrell.currentTime = 0;
			audioTyrell.play();
			document.getElementById("tyrell").style.zIndex = zIndex;
		}
		if (chosenWord == "WHITEWALKERS"){
			audioWhitewalkers.currentTime = 0;
			audioWhitewalkers.play();
			document.getElementById("whitewalkers").style.zIndex = zIndex;
		}
		if (chosenWord == "NIGHTSWATCH"){
			audioNightswatch.currentTime = 0;
			audioNightswatch.play();
			document.getElementById("nightswatch").style.zIndex = zIndex;
		}
		if (chosenWord == "GREYJOY"){
			AudioGreyjoy.currentTime = 0;
			AudioGreyjoy.play();
			document.getElementById("greyjoy").style.zIndex = zIndex;
		}
		document.getElementById("throne").style.zIndex = zIndexBack;
		zIndex++;
		var html = document.querySelector("#wins").innerHTML = wins;
		spaceBarStart();
	}

	//if user loses, loads the corresponding picture and song
	function gameLoss()
	{
		audioHangman.currentTime = 0;
		audioHangman.play();		
		document.getElementById("throne").style.zIndex = zIndexBack;
		document.getElementById("hangman").style.zIndex = zIndex;
		zIndex++;
		spaceBarStart();
	}

	//prompts the user to press the space bar to start the game (gameReset)
	function spaceBarStart()
	{
		var html2 = document.querySelector("#space-bar").innerHTML = 
		"PRESS THE SPACE BAR TO START!";
		document.onkeyup = function (event)
		{	if (event.keyCode ==32)
			{
				gameReset();
			}
		}
	}

	spaceBarStart();

	//logic to play the game
	function startGame()
	{
		document.onkeyup = function (event)
		{
			var currentGuess = event.key;
			var currentGuessUpper = currentGuess.toUpperCase();
			console.log("current guess is " + currentGuessUpper);
			document.getElementById('letters').innerHTML = placeholder;	
			wrongLetter=true;
		console.log("test");

				if ((correctLetters.indexOf(currentGuessUpper)>=0) || 
					(wrongLetters.indexOf(currentGuessUpper)>=0))
				{
					console.log("duplicate correct letter or wrong letter");
				}

				else  
				{	for (var i=0; i<chosenWord.length;i++)
					{	
						if (chosenWord.charAt(i)===currentGuessUpper)
						{ console.log("chosen word at i is " + chosenWord[i]);
							placeholder[i] = currentGuessUpper;
							correctLetters.push(currentGuessUpper);
								console.log("correct letters are " + correctLetters);
								console.log("correct letters are " + placeholder);
							wrongLetter = false;			
								console.log("wrong letter is " + wrongLetter);
							correctGuesses++;
								console.log("Correct guesses is " + correctGuesses);
									
							if(correctGuesses === chosenWord.length)
							{	console.log("game finished");
								wins++;
								console.log("wins is " + wins);
								gameWin();	
							}
						}
					}
							if (wrongLetter == true)
							{	
								guessesLeft--;
								wrongLetters.push(currentGuessUpper);
								var html1 = document.querySelector("#guessesLeft").innerHTML = guessesLeft;
									console.log("The wrong letters are " + wrongLetters);
								document.getElementById('incorrectLetters').innerHTML = wrongLetters;
									console.log("wrong letter " + currentGuessUpper);
									console.log("wrong guesses total is " + guessesLeft);
									console.log("wrong letter value is " + wrongLetter);

								if (guessesLeft === 0)
								{
									console.log("game is over because this many wrong guesses " + guessesLeft);
									gameLoss();
								}

							}
				}	
			document.getElementById('letters').innerHTML = placeholder.join("")	;		
		}
	}