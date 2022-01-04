$(document).ready(function(){
    $("#modal").modal('show');
});

var total_number_matches = 5;
var maches_played = 0;
var remaining_matches = total_number_matches - maches_played;
var player1won = 0;
var player2won = 0;
var p1progress = 100;
var p2progress = 100;
var p1progressbar = document.getElementById("p1-progressbar");
var p2progressbar = document.getElementById("p2-progressbar");
var p1won = document.getElementById("p1-won");
var p2won = document.getElementById("p2-won");
var matches = document.getElementById("matches");
var played = document.getElementById("played");
var reamaining = document.getElementById("remaining");
var p1_button = document.getElementById("p1-button");
var p2_button = document.getElementById("p2-button");
var winner = document.getElementById("winner");
var resetbutton = document.getElementById("reset-button");
var audio1 = new Audio('GunShotSnglShotEx PE1097508.mp3');
var audio2 = new Audio('GunShotSnglShotEx PE1097508.mp3');

matches.innerHTML = total_number_matches;
played.innerHTML = maches_played;
reamaining.innerHTML = remaining_matches;
p1won.innerHTML = player1won;
p2won.innerHTML = player2won;
p1progressbar.innerHTML = p1progress+"%";
p2progressbar.innerHTML = p2progress+"%";
winner.innerHTML = "Who"

function player1Turn(){
    audio1.play();
    p1_button.disabled=true;
    p2_button.disabled=false;
    var p1rand = Math.floor(Math.random() * 11);
    document.getElementById("p1-power").innerHTML = p1rand;
    p1progress = p1progress - p1rand;
    p2progressbar.innerHTML = p1progress + "%";
    p2progressbar.style.width = p1progress + "%";
    if(p1progress < 50){
        p2progressbar.classList.remove("bg-success");
        p2progressbar.classList.add("bg-warning");
    }
    if(p1progress < 30){
        p2progressbar.classList.remove("bg-warning");
        p2progressbar.classList.add("bg-danger");
    }
    if(p1progress <= 0){
        p1_button.disabled=true;
        p2_button.disabled=true;
        player2won++;
        p1won.innerHTML = player1won;
        p2won.innerHTML = player2won;
        maches_played++;
        remaining_matches--;
        played.innerHTML = maches_played;
        reamaining.innerHTML = remaining_matches;
        if(maches_played == 5 && player1won >player2won){
            winner.innerHTML = "Player 1"; 
        }
        
        if(maches_played == 5 && player2won >player1won){
            winner.innerHTML = "Player 2";
        }
    }
}

function player2Turn(){
    audio2.play();
    p2_button.disabled=true; 
    p1_button.disabled=false;
    var p2rand = Math.floor(Math.random() * 11);
    document.getElementById("p2-power").innerHTML = p2rand;
    p2progress = p1progress - p2rand;
    p1progressbar.innerHTML = p2progress + "%";
    p1progressbar.style.width = p2progress + "%";
    if(p2progress < 50){
        p1progressbar.classList.remove("bg-success");
        p1progressbar.classList.add("bg-warning");
    }
    if(p2progress < 30){
        p1progressbar.classList.remove("bg-warning");
        p1progressbar.classList.add("bg-danger");
    }
    if(p2progress <= 0){
        p1_button.disabled=true;
        p2_button.disabled=true;
        player1won++;
        p1won.innerHTML = player1won;
        p2won.innerHTML = player2won;
        maches_played++;
        remaining_matches--;
        played.innerHTML = maches_played;
        reamaining.innerHTML = remaining_matches;
        if(maches_played == 5 && player1won >player2won){
            winner.innerHTML = "Player 1";
        }
        
        if(maches_played == 5 && player2won >player1won){
            winner.innerHTML = "Player 2";
        }
    }
}



function reset(){
    if(maches_played < total_number_matches){
        p1progress = 100;
        p2progress = 100;
        p1progressbar.innerHTML = p1progress+"%";
        p1progressbar.style.width = p1progress + "%";
        p2progressbar.innerHTML = p2progress+"%";
        p2progressbar.style.width = p2progress + "%";
        p1_button.disabled=false;
        p2_button.disabled=true;
        p1progressbar.classList.remove("bg-danger", "bg-warning");
        p1progressbar.classList.add("bg-success");
        p2progressbar.classList.remove("bg-danger", "bg-warning");
        p2progressbar.classList.add("bg-success");
    }
}
