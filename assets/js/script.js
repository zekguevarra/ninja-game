let randomizer=0;
let randomGold=0;
$("#cave").click(cave); // $("dito lagay yung name. # for id tas id name").[operation](tas function)
$("#house").click(house);
$("#goldmine").click(goldmine);
$("#casino").click(casino);

var game={
    turn:0,
    gold:0,
    log:[],
}

function gold(){
    if(game.gold>0){
        $("#gold").css("color","yellow");
    }else{
        $("#gold").css("color","red");
    }
}
function cave(){
    game.turn++;
    $("#turn").html(game.turn);
    game.gold+=5;
    $("#gold").html(game.gold);
    game.log.push("win 5");
    console.log(game.log);
    ninja();
    gold();
    stop();
}

function house(){
    game.turn++;
    $("#turn").html(game.turn);
    randomizer=Math.floor(Math.random() * 101);
    console.log(randomizer);
    if(randomizer< 81 ){
        game.gold+=10;
        $("#last").html("win 10");
        $("#gold").html(game.gold);
    }else{
        $("#last").html("No Gain");
    }
    gold();
    stop();
}

function goldmine(){
    game.turn++;
    $("#turn").html(game.turn);
    randomizer=Math.floor(Math.random() * 101);
    console.log(randomizer);
    if(randomizer< 81 ){
        randomGold=Math.floor(Math.random()*26)
        console.log(randomGold);
        game.gold+=randomGold;
        $("#last").html("win" + randomGold);
        $("#gold").html(game.gold);
    }else{
        $("#last").html("Lose" + randomGold);
    }
    gold();
    stop();
}

function casino(){
    game.turn++;
    $("#turn").html(game.turn);
    randomizer=Math.floor(Math.random() * 101);
    console.log(randomizer);
    randomGold=Math.floor(Math.random()*(51-40))+40;
    console.log(randomGold);
    if(randomizer< 51 ){
        game.gold+=randomGold;
        $("#last").html("win" + randomGold);
        $("#gold").html(game.gold);
    }else{
        game.gold-=randomGold;
        $("#last").html("Lose" + randomGold);
        $("#gold").html(game.gold);
    }
    ninja();
    gold();
    stop();
}


function stop(){
    if (game.turn === 20){
        if(game.gold >= 250){
            alert("win");
        }else{
            alert("lose");
        }
    }
    turn=0;
    gold=0;
}
 function ninja(){
    $("#nin").animate({width:"toggle", left:'+=150px'});
 }