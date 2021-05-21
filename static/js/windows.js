function ejectGame(){
    //exit game
    ci.exit()
    //update ui
    $("#jsdos").css('display', 'none')
    $("#game").attr("class", "no-game");
    $("#game-title").text("Pick a game from the Games folder in the Start menu");
    $('.dosbox-button').prop('disabled', true);
}

function startGame(game){
    if($('#game').hasClass('no-game') == false){
        alert("You need to eject the current game before you can start another one.");
        return;
    }
    $("#game").attr("class", game);
    $("#game-title").text(game);
    $("#menu").css('display', 'none');
    $("#startbutton").attr("class", "startbutton-off");
    // fix start button toggle
    $("#jsdos").css('display', 'inline-block')
    Dos(document.getElementById("jsdos"), { 
        wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
        //maybe max?
        cycles: "auto",
        autolock: false,
      }).ready(function (fs, main) {
        fs.extract("/static/assets/games/" + game + ".zip").then(function () {
          main(["-c", "cd " + game, "-c", game + ".EXE"]).then(function (ci) {
            window.ci = ci;
          });
        });
      });
    //un disable buttons
    $('.dosbox-button').prop('disabled', false);
}