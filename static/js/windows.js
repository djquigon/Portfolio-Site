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

function exitFlight(){
    $('#rocket-container').css("display", "none")
    $('#rocket-container button').remove()
}

function startFlight(){
  //////////////////////////////////////////////////////////take as note of how to refactor
    $('#rocket-container').css("display", "block")
    $('#rocket-container').append("<button>Press to exit flight</button>");
    $('#rocket-container button').css({"color": "red", "background-color": "black", "left": "45vw", "bottom": "10px"})
    $('#rocket-container button').click(function() {
        exitFlight();
      });
}

function closeWindow(windowToClose){
    windowToClose.parentNode.parentNode.parentNode.remove();
}

function highlightIcon(icon){
    //implement
} 

function submitMessage(){
  // for contact me
}

function openDraggableWindow(windowToOpen){
    // make icon and name blue

    // create window prepend to dekstop with absolute position
    window_id = windowToOpen.getAttribute("id");
    draggable_window = ""
    resizable = true;
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
          "<div class='field-row-stacked' style='width: 200px'> <label for='text20'>Message</label> <textarea id='text20' rows='8' style='resize: none;'></textarea> </div>" +
          "<button>Submit</button>" + 
          "</div></div>";
          resizable = false;
          break;
        case "game-help":
        draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
        "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/steam.png'>" +
        "<div class='title-bar-text'>Steam98Help.txt</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
        "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='steam-help'> " +  
        "<ul class='tree-view'><li><strong style='color: purple'>✨ Whatever ✨</strong></li><li>Table of Contents</li><li>What is web development?</li><li>CSS<ul><li>Selectors</li><li>Specificity</li><li>Properties</li></ul></li><li><details open><summary>JavaScript</summary><ul><li>Avoid at all costs</li><li><details><summary>Unless</summary<ul><li>Avoid</li><li><details><summary>At</summary><ul><li>Avoid</li><li>At</li><li>All</li> <li>Cost</li></ul></details></li><li>All</li><li>Cost</li></ul></details></li></ul></details></li></ul>" +
        "</div></div>";
            break;
        case "themes":
            draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/themes_small.png'>" +
            "<div class='title-bar-text'>Themes</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body'> " + 
            "<p>Desktop</p> <div class='field-row'><label for='range22'>R:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='0' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>G:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='128' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>B:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='128' /><label for='range24'>256</label></div>" +
            "<p>Taskbar</p> <div class='field-row'><label for='range22'>R:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='192' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>G:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='192' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>B:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='192' /><label for='range24'>256</label></div>" +
            "</div></div>";
            break;
            case "aim":
              draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
              "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/aim_small.png'>" +
              "<div class='title-bar-text'>Sign On</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
              "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body'> <img src='/static/images/aim_header.jpg'> <hr> " +  
              "<div class='field-row'><label for='text17'>Screen Name</label><select> <option>&lt;New User&gt;</option>" +
              "<option>loganator97</option></select></div>" +
              "<div class='field-row'> <label for='text17'>Password</label> <input id='text17' disabled type='text' /> </div> " +
              "<div class='field-row'><input disabled type='checkbox' id='aim-save-password'><label for='aim-save-password' style='margin-right: 16%;'>Save password</label><input disabled type='checkbox' id='aim-auto-login'><label for='aim-auto-login'>Auto-login</label></div>" + 
              "<div class='field-row' id='aim-button-row'><div style='display: flex;'><div><img src= '/static/images/icons/aim_help.png'><p>Help</p></div><div style='margin-left: 50%;'><img src= '/static/images/icons/aim_setup.png'><p>Setup</p></div></div><div><img src= '/static/images/icons/aim_signon.png'><p><b>Sign On</b></p></div></div>" +
              "<div class='field-row'><p style='margin-top: 0; margin-bottom: 0; margin-left: 30%;'>Version 3.0.1464</div>" +
              "</div></div>";
              resizable = false;
                  break;  
                  
            case "rating-icon":
              draggable_window = "<div class='window' id='draggable-window'><div class='title-bar' id='rating-title-bar'>" +
              "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/rating.png'>" +
              "<div class='title-bar-text'>Rating</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
              "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div>" +
              "<div class='window-body'> <p id='rating-text'>Leave a rating!</p> <div class='field-row' id='rating-bar'> <label for='range22'>Rating:</label> <label for='range23'>0</label> <input id='range23' type='range' min='0' max='10' value='5' />" +
              "<label for='range24'>10</label> </div> <button id='submit-rating' onclick='submitRating()'>Submit Rating</button> </div></div>";
              resizable = false;
              break;
      }
    $(".desktop").prepend(draggable_window);
    $( "#draggable-window" ).draggable();
    if(resizable){
      $( "#draggable-window" ).resizable();
    }
}