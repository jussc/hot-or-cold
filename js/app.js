$(document).ready(function () {

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



  /* Global Variable Declarations */
  
    var answer = Math.floor((Math.random() * 100) + 1);
    console.log(answer);

    var count = 0;
    var guesses = [];
    guesses.length = 0;

    var distance = null;
    
  /* New Game */

    $('.new').click(function (e) {
        e.preventDefault();

        answer = Math.floor((Math.random() * 100) + 1);
        console.log(answer);

        guesses.length = 0;
        distance = null;

        $('#feedback').html('Make your Guess');
        $('#guessList').empty();
        $('#count').html('0');
        $('#userGuess').val('');

    });

  /* Button Click */
    $('form').submit( function(e) {
      e.preventDefault();
      game();

    });


    // function start() {
    //   $('#guessButton').click(game);
    //   $("#userGuess").keydown(function (enter) {
    //       if (enter.keyCode == 13) {
    //           game();
    //       }
    //   });
    //     // console.log('test');
    //     // randomNumber();
    //     // increment();
    //     // display();

    // }

    // start();
    $('#guessButton').click(function() {
      increment();
      display();
    });

  /* Game Functions */
    function game() {
      var guess = parseInt($('#userGuess').val());

      if (guess !== null && $.isNumeric(guess) && (guess < 101) && (guess > 0)) {
        if ($.inArray(guess,guesses) > -1) {
          $('#feedback').text('You\'ve guessed that number already!');
        }
        else
        {
          guesses.push(guess);
          distance = Math.abs(answer - guess);

          if (guess === answer) {
            $('#feedback').text('You won! Click "New Game" to play again!');
          }
          else if (distance >= 1 && distance <= 10)
          {
            $('#feedback').text('Very hot!');
          }
          else if (distance >= 11 && distance <= 25)
          {
            $('#feedback').text('Getting warmer!');
          }
          else if (distance >= 26 && distance <= 45)
          {
            $('#feedback').text('Cold!');
          }
          else 
          {
            $('#feedback').text('Super cold!');
          }
        }


      }
    }
    
    function increment() {

      count++;

      $('#count').text(count);
    }

    function display() {
      $('#guessList').append('<li>' +$('#userGuess').val()) + '</li>';
    }


});


