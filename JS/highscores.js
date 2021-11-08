var highScore = document.querySelector(".highScore");
var clear = document.querySelector(".clear");
var goBack = document.querySelector(".goBack");

// Clear Data Listener
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retrieve's Local Storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// Return Event Listener
goBack.addEventListener("click", function () {
    window.location.replace("quiz.html");
});