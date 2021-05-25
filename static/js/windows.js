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
    //get program name (taskbar)
    program_name = windowToClose.parentNode.parentNode.nextElementSibling.id + "-program-container";
    //close window and remove program from taskbar
    windowToClose.parentNode.parentNode.parentNode.remove();
    $( "#" + program_name).remove();
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
        case "logan-icon":
          if($('#logan').length == 0){
            draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/logan_small.png'>" +
            "<div class='title-bar-text'>Logan.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='logan'> " + 
            "<div style='display: flex; justify-content: space-between;'><img style='transform: scaleX(-1);' class='purp' src='/static/images/purp.gif'><h2 style='text-decoration: underline;'>About Me</h2><img class='purp' src='/static/images/purp.gif'></div><p>Born in December 1997, grew up in Atlanta, Georgia. Graduated high school in 2016 and started coding towards the end of my first year of college in 2017 after first learning about Bitcoin (true story). Switched my major to computer science the following year and graduated from the University of Georgia in spring 2021.</p>" + 
            "<p><b>Work Interests:</b> Full stack web development but preferably front end work. Would love to do frontend work for any DeFi project utilizing the web3 framework. Would also love to work in game development and currently using Unity to hone my skills in this area in my freetime.</p>" +
            "<p><b>Skills:</b> Experience in java, c++, c#, python, js, html, css, and solidity. More specifically experience within web frameworks such as django and spring.</p>" +
            "<p><b>Personal Interests/Hobbies:</b> Coding (obviously), Crypto/DeFi/Web3, watching atlanta sports teams (sadly), cooking/grilling, traveling, playing/developing video games</p>" +
            "<p><b>Favorite Food: </b>Pizza <img style='height:25px;'src='/static/images/pizza.gif'></p>" +
            "<p><b>Favorite Movie:</b> Star Wars: The Phantom Menace (JK...but not really) &nbsp&nbsp<img style='height:30px;'src='/static/images/favicon.ico'></p>" +
            "<p><b>Favorite Game:</b> If you know, you know... <img style='height:50px;' src='/static/images/chief.gif'></p>" +
            "</div></div>";
            resizable = false;
            //create program
            if($('#logan-program-container').length == 0){
              $("#start-program-container").append($(document.createElement('div'))
                .attr({ id: 'logan-program-container' })
                .addClass("program-container"));
              $("#logan-program-container").append($(document.createElement('span'))
                .addClass("program"));
              $("#logan-program-container span").append($(document.createElement('div')));
              $("#logan-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/logan_small.png'}));
              $("#logan-program-container span div").append($(document.createElement('p')).text("Logan.exe"));
              //add event listener dblclick
            }
          }
          break;
        case "projects-icon":
          if($('#projects').length == 0){
            draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/projects_small.png'>" +
            "<div class='title-bar-text'>Projects.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='projects'> " + 
            "<p>There's so much room for activities!</p> </div></div>";
            resizable = false;
            //create program
            if($('#projects-program-container').length == 0){
              $("#start-program-container").append($(document.createElement('div'))
                .attr({ id: 'projects-program-container' })
                .addClass("program-container"));
              $("#projects-program-container").append($(document.createElement('span'))
                .attr({ id: 'projects-icon' })
                .addClass("program"));
              $("#projects-program-container span").append($(document.createElement('div')));
              $("#projects-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/projects_small.png'}));
              $("#projects-program-container span div").append($(document.createElement('p')).text("Projects.exe"));
              //add event listener dblclick          
            }
          }
          break;
        case "my-resume-icon":
          if($('#my-resume').length == 0){
            draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/resume_small.png'>" +
            "<div class='title-bar-text'>My_Resume.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='my-resume'> " + 
            "<p>There's so much room for activities!</p> <a target='_blank'href='/static/assets/documents/scheid_resume.pdf'>PDF</a> </div></div>";
            resizable = false;
            //create program
            if($('#my-resume-program-container').length == 0){
              $("#start-program-container").append($(document.createElement('div'))
                .attr({ id: 'my-resume-program-container' })
                .addClass("program-container"));
              $("#my-resume-program-container").append($(document.createElement('span'))
                .attr({ id: 'my-resume-icon' })
                .addClass("program"));
              $("#my-resume-program-container span").append($(document.createElement('div')));
              $("#my-resume-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/resume_small.png'}));
              $("#my-resume-program-container span div").append($(document.createElement('p')).text("My_Resume.exe"));
              //add event listener dblclick          
            }
          }
          break;
        case "contact-me-icon":
          if($('#contact-me').length == 0){
            draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/contactme_small.png'>" +
            "<div class='title-bar-text'>Contact_Me.exe</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='contact-me'> " + 
            "<div class='field-row'> <label for='text17'>Email</label> <input id='text17' type='text' /> </div> " +
            "<div class='field-row'><label for='text17'>Reason</label><select> <option>Personal</option>" +
            "<option>Work-related</option> <option>Question</option><option>Other</option></select></div>" +
            "<div class='field-row-stacked' style='width: 200px'> <label for='text20'>Message</label> <textarea id='text20' rows='8' style='resize: none;'></textarea> </div>" +
            "<button>Submit</button>" + 
            "</div></div>";
            resizable = false;
            //create program
            if($('#contact-me-program-container').length == 0){
              $("#start-program-container").append($(document.createElement('div'))
                .attr({ id: 'contact-me-program-container' })
                .addClass("program-container"));
              $("#contact-me-program-container").append($(document.createElement('span'))
                .attr({ id: 'contact-me-icon' })
                .addClass("program"));
              $("#contact-me-program-container span").append($(document.createElement('div')));
              $("#contact-me-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/contactme_small.png'}));
              $("#contact-me-program-container span div").append($(document.createElement('p')).text("Contact_Me.exe"));
              //add event listener dblclick          
            }
          }
          break;
        case "steam-help-icon":
          if($('#steam-help').length == 0){
            draggable_window = "<div class='window' id='draggable-window' style='width: 400px;'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/steam.png'>" +
            "<div class='title-bar-text'>Steam98Help</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='steam-help'> " +  
            "<ul class='tree-view'><li><strong style='color: #55468e'>👾 Steam98 👾</strong></li><li>What is Steam98?<ul><li>Steam98 is my implementation of <a style='text-decoration: underline; color: #7b468e;'href='https://js-dos.com/'>js-dos</a>, a javascript library that allows you to run DOS programs in a browser. Simply pick a game from the Games folder in the start menu and start playing. You can only load one game at a time, but you can exit a game whenever you wish. Below are some various faqs and tips for each game. Contact me if you have any game requests!</li></ul></li><li><details open><summary>Games</summary> " +
            "<ul><li><details><summary>Solitaire</summary><ul><li>Release Date:</li><li>Genre:</li><li>Description:</li></ul></ul>" +
            "<ul><li><details><summary>Ms. Pacman</summary><ul><li>Release Date:</li><li>Genre:</li><li>Description:</li></ul></ul>" +
            "<ul><li><details><summary>DOOM</summary><ul><li>Release Date:</li><li>Genre:</li><li>Description:</li></ul>" +
            "</details></li></ul></details></li></ul>" +
            "</div></div>";
            resizable = false;
            //create program
            if($('#steam-help-program-container').length == 0){
              $("#start-program-container").append($(document.createElement('div'))
                .attr({ id: 'steam-help-program-container' })
                .addClass("program-container"));
              $("#steam-help-program-container").append($(document.createElement('span'))
                .attr({ id: 'steam-help-icon' })
                .addClass("program"));
              $("#steam-help-program-container span").append($(document.createElement('div')));
              $("#steam-help-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/steam.png'}));
              $("#steam-help-program-container span div").append($(document.createElement('p')).text("Steam98Help"));
              //add event listener dblclick          
            }
          }
          break;
        case "themes-icon":
          if($('#themes').length == 0){
            draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
            "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/themes_small.png'>" +
            "<div class='title-bar-text'>Themes</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
            "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='themes'>" + 
            "<p>Desktop</p> <div class='field-row'><label for='range22'>R:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='0' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>G:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='128' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>B:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='128' /><label for='range24'>256</label></div>" +
            "<p>Taskbar</p> <div class='field-row'><label for='range22'>R:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='192' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>G:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='192' /><label for='range24'>256</label></div>" +
            "<div class='field-row'><label for='range22'>B:</label><label for='range23'>0</label><input id='range23' type='range' min='0' max='256' value='192' /><label for='range24'>256</label></div>" +
            "</div></div>";
            resizable = false;
            //create program
            if($('#themes-program-container').length == 0){
              $("#start-program-container").append($(document.createElement('div'))
                .attr({ id: 'themes-program-container' })
                .addClass("program-container"));
              $("#themes-program-container").append($(document.createElement('span'))
                .attr({ id: 'themes-icon' })
                .addClass("program"));
              $("#themes-program-container span").append($(document.createElement('div')));
              $("#themes-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/themes_small.png'}));
              $("#themes-program-container span div").append($(document.createElement('p')).text("Themes"));
              //add event listener dblclick          
            }
          }
          break;
            case "aim-icon":
              if($('#aim').length == 0){
                draggable_window = "<div class='window' id='draggable-window'> <div class='title-bar'> " + 
                "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/aim_small.png'>" +
                "<div class='title-bar-text'>Sign On</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
                "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div> <div class='window-body' id='aim'> <img src='/static/images/aim_header.jpg'> <hr> " +  
                "<div class='field-row'><label for='text17'>Screen Name</label><select> <option>&lt;New User&gt;</option>" +
                "<option>loganator97</option></select></div>" +
                "<div class='field-row'> <label for='text17'>Password</label> <input id='text17' disabled type='text' /> </div> " +
                "<div class='field-row'><input disabled type='checkbox' id='aim-save-password'><label for='aim-save-password' style='margin-right: 16%;'>Save password</label><input disabled type='checkbox' id='aim-auto-login'><label for='aim-auto-login'>Auto-login</label></div>" + 
                "<div class='field-row' id='aim-button-row'><div style='display: flex;'><div><img src= '/static/images/icons/aim_help.png'><p>Help</p></div><div style='margin-left: 50%;'><img src= '/static/images/icons/aim_setup.png'><p>Setup</p></div></div><div><img src= '/static/images/icons/aim_signon.png'><p><b>Sign On</b></p></div></div>" +
                "<div class='field-row'><p style='margin-top: 0; margin-bottom: 0; margin-left: 30%;'>Version 3.0.1464</div>" +
                "</div></div>";
                resizable = false;
                //create program
                if($('#aim-program-container').length == 0){
                  $("#start-program-container").append($(document.createElement('div'))
                    .attr({ id: 'aim-program-container' })
                    .addClass("program-container"));
                  $("#aim-program-container").append($(document.createElement('span'))
                    .attr({ id: 'aim-icon' })
                    .addClass("program"));
                  $("#aim-program-container span").append($(document.createElement('div')));
                  $("#aim-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/aim_small.png'}));
                  $("#aim-program-container span div").append($(document.createElement('p')).text("AOL Instant Messenger"));
                  //add event listener dblclick          
                }
              }
              break;  
                  
            case "rating-icon":
              if($('#rating').length == 0){
                draggable_window = "<div class='window' id='draggable-window'><div class='title-bar' id='rating-title-bar'>" +
                "<div style='display: flex; align-items: center;'><img src= '/static/images/icons/rating.png'>" +
                "<div class='title-bar-text'>Rating</div></div> <div class='title-bar-controls'> <button aria-label='Minimize'>" + 
                "</button> <button aria-label='Maximize'></button> <button aria-label='Close' onclick='closeWindow(this)'></button> </div> </div>" +
                "<div class='window-body' id='rating'> <p id='rating-text'>Leave a rating!</p> <div class='field-row' id='rating-bar'> <label for='range22'>Rating:</label> <label for='range23'>0</label> <input id='range23' type='range' min='0' max='10' value='5' />" +
                "<label for='range24'>10</label> </div> <button id='submit-rating' onclick='submitRating()'>Submit Rating</button> </div></div>";
                resizable = false;
                //create program
                if($('#rating-program-container').length == 0){
                  $("#start-program-container").append($(document.createElement('div'))
                    .attr({ id: 'rating-program-container' })
                    .addClass("program-container"));
                  $("#rating-program-container").append($(document.createElement('span'))
                    .attr({ id: 'rating-icon' })
                    .addClass("program"));
                  $("#rating-program-container span").append($(document.createElement('div')));
                  $("#rating-program-container span div").append($(document.createElement('img')).attr({ src: '/static/images/icons/rating.png'}));
                  $("#rating-program-container span div").append($(document.createElement('p')).text("Rating"));
                  //add event listener dblclick          
                }
              }
              resizable = false;
              break;
      }
    if(draggable_window != ""){
      $(".desktop").prepend(draggable_window);
      //append program to star-program-container
      $( "#draggable-window" ).draggable();
      if(resizable){
        $( "#draggable-window" ).resizable();
      }
    }
}