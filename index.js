var level = 1;
var gameStart = false;

var listOfButtons = $(".btn");

var gameList = [];

document.addEventListener("keypress", function(){
    $("h1").text("Level " + level);
    if(!gameStart){
        var randIndex = Math.floor(Math.random() * listOfButtons.length);
        var ele = listOfButtons[randIndex];

        $(ele).addClass("pressed");
        setTimeout(function(){
            $(ele).removeClass("pressed");
        }, 100);

        var destAudio = "./sounds/" + ele.id + ".mp3";
        var audio = new Audio(destAudio);
        audio.play();

        gameList.push(ele);

        gameStart = true;
    }
})

var i = 0;
gameOver = false;
$(".btn").on("click", function(){
    var CurrentBtn = this;
    
    $(CurrentBtn).addClass("pressed");
    setTimeout(function(){
        $(CurrentBtn).removeClass("pressed");
    }, 100);

    if(gameList[i].id == CurrentBtn.id && !gameOver){
        var destAudio = "./sounds/" + CurrentBtn.id + ".mp3";
        var audio = new Audio(destAudio);
        audio.play();

        i++;
        if(i == gameList.length){
            i = 0;

            level++;
            $("h1").text("Level " + level);

            var randIndex = Math.floor(Math.random() * listOfButtons.length);
            var ele = listOfButtons[randIndex];

            $(ele).addClass("pressed");
            setTimeout(function(){
                $(ele).removeClass("pressed");
            }, 100);

            var destAudio = "./sounds/" + ele.id + ".mp3";
            var audio = new Audio(destAudio);
            audio.play();

            gameList.push(ele);
        }
    }else{
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 100);

        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();

        gameOver = true;
    }
});
