// Home Scores
let homeScore = 0
let Score = document.getElementById("home-score")
function addonescore(){
    homeScore += 1
    Score.textContent = homeScore
}

function addtwoscore(){
    homeScore += 2
    Score.textContent = homeScore
}

function addthreescore(){
    homeScore += 3
    Score.textContent = homeScore
}

// Guest Scores
let guestScore = 0
let GuestScore = document.getElementById("guest-score")
function guestaddonescore(){
    guestScore += 1
    GuestScore.textContent = guestScore
}

function guestaddtwoscore(){
    guestScore += 2
    GuestScore.textContent = guestScore
}

function guestaddthreescore(){
    guestScore += 3
    GuestScore.textContent = guestScore
}

// New Game
 function newgame(){
     guestScore = 0
     homeScore = 0
     GuestScore.textContent = guestScore
     Score.textContent = homeScore
 }