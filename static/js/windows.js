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

function submitRating(){
    $('#submit-rating').prop('disabled', true);
    $('#rating-text').text("Duly noted, thanks!");
    // submit
}

function closeWindow(windowToClose){
    windowToClose.parentNode.parentNode.parentNode.remove();
}

function openDraggableWindow(windowToOpen){
    // make icon and name blue
    // create window prepend to dekstop with absolute position
    window_id = windowToOpen.getAttribute("id");
    draggable_window = ""
    switch (window_id) {
        case "about-me-icon":
          draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
          "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/logan_small.png'>" +
          "<div class='title-bar-text'>Logan.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
          "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body'> " + 
          "<p>There's so much room for activities!</p> </div></div>";
          break;
        case "projects-icon":
          draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
          "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/projects_small.png'>" +
          "<div class='title-bar-text'>Projects.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
          "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body'> " + 
          "<p>There's so much room for activities!</p> </div></div>";          
          break;
        case "my-resume-icon":
           draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
           "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/resume_small.png'>" +
           "<div class='title-bar-text'>My_Resume.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
           "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body'> " + 
           "<p>There's so much room for activities!</p> </div></div>";
          break;
        case "contact-me-icon":
          draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
          "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/contactme_small.png'>" +
          "<div class='title-bar-text'>Contact_Me.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
          "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body'> " + 
          "<div class='field-row'> <label for='text17'>Email</label> <input id='text17' type='text' /> </div> " +
          "<div class='field-row'><label for='text17'>Reason</label><select> <option>Personal</option>" +
          "<option>Work-related</option> <option>Question</option><option>Other</option></select></div>" +
          "<div class='field-row-stacked' style='width: 200px'> <label for='text20'>Message</label> <textarea id='text20' rows='8'></textarea> </div>" +
          "<button>Submit</button>" + 
          "</div></div>";
          break;
          case "game-help":
            draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/steam.png'>" +
            "<div class='title-bar-text'>Steam98Help.txt</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body'> " +  
            "</div></div>";
            break;
      }
    $(".desktop").prepend(draggable_window);
    $( "#draggable-window" ).draggable();
    $( "#draggable-window" ).resizable();

}

function displayGameHelp(){
    // to be implemented
    window.alert("Game help");
}

function openAboutMe(){
    // make icon and name blue
    // create window prepend to dekstop with absolute position
    draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> <div style='display: flex; align-items: center;'><img src= '/static/images/icons/logan_small.png'><div class='title-bar-text'>About Me</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'></button> <button aria-label='Maximize'></button> <button aria-label='Close'></button> </div> </div> <div class='window-body'> <p>There's so much room for activities!</p> </div></div>";
    $(".desktop").prepend(draggable_window);
    $( "#draggable-window" ).draggable();

}

function openProjects(){
    window.alert("Projects");
}

function openResume(){
    window.alert("Resume");
}

function openContactMe(){
    window.alert("Contact Me");
}