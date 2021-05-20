function ejectGame(){
    alert("Whoops! The eject game button doesn't work currently. Sorry about that, to exit the game simply refresh the page.")
    // to be implemented
    //disable buttons
}

function updateGame(game){
    //close start menu
    if($('#game').hasClass('no-game') == false){
        alert("Sorry, you need to eject the current game before you can start another one.");
        return;
    }
    $("#game").attr("class", game);
    $("#game-title").text(game);
    var dosbox = new Dosbox({
        id: "dosbox",
        onload: function (dosbox) {
        dosbox.run('/static/assets/games/' + game + '.zip', "./" + game + ".EXE");
        /*dosbox.run("{% static '/assets/games/DOOM.zip' %}", "./DOOM.EXE");*/
        /*dosbox.run("{% static '/assets/games/MK3.zip' %}", "./MK3.EXE");*/
        /*dosbox.run("{% static '/assets/games/DARKFORCES.zip' %}", "./DF.EXE");*/
        /*dosbox.run("{% static '/assets/games/DUKE3D.zip' %}", "./DUKE3D.EXE");*/
        /*dosbox.run("{% static '/assets/games/SUPERSTREETFIGHTER2T.zip' %}", "./SF2TURBO.EXE");*/
        /*dosbox.run("{% static '/assets/games/SYSTEMSHOCK.zip' %}", "./SSHOCK.EXE");*/
        /*dosbox.run("{% static '/assets/games/TETRIS.zip' %}", "./SABA.EXE");*/
        /*dosbox.run("{% static '/assets/games/WOLF3D.zip' %}", "./WOLF3D.EXE");*/
        /*dosbox.run("{% static '/assets/games/PACMAN.zip' %}", "./MSPAC.EXE");*/
        /*dosbox.run("{% static '/assets/games/SOLITAIRE.zip' %}", "./SOLSUITE.EXE");*/
        /*dosbox.run("{% static '/assets/games/MARIO.zip' %}", "./MARIO.EXE");*/
        },
        onrun: function (dosbox, app) {
        console.log("App '" + app + "' is being ran");
        }
    });

    $(".dosbox-start").text("Click to start " + game)
    $(".dosbox-powered a").text("Powered by js-dos.com")
    $(".dosbox-start").css('display', 'block');
    $(".dosbox-powered a").css('display', 'block');
    //un disable buttons
    $('.dosbox-button').prop('disabled', false);
}

