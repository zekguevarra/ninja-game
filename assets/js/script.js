window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//game
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

function cave(){
    game.turn++;
    $("#turn").html(game.turn);
    game.gold+=5;
    $("#gold").html(game.gold);
    game.log.push("win 5");
    $("#last").html("Win 5 🧈");
    ninjaCave();
    stop();
    gold();
}

function house(){
    game.turn++;
    $("#turn").html(game.turn);
    randomizer=Math.floor(Math.random() * 101);
    console.log(randomizer);
    if(randomizer< 81 ){
        game.gold+=10;
        $("#last").html("Win 10 🧈");
        $("#gold").html(game.gold);
    }else{
        $("#last").html("No Gain");
    }
    ninjaHouse();
    stop();
    gold();
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
        $("#last").html("Win " + randomGold + " 🧈");
        $("#gold").html(game.gold);
    }else{
        $("#last").html("No Gain");
    }
    ninjaGoldmine();
    stop();
    gold();
}

function casino(){
    game.turn++;
    $("#turn").html(game.turn);
    randomizer=Math.floor(Math.random() * 101);
    randomGold=Math.floor(Math.random()*(51-40))+40;
    if(randomizer< 51 ){
        game.gold+=randomGold;
        $("#last").html("Win " + randomGold + " 🧈");
        $("#gold").html(game.gold);
    }else{
        game.gold-=randomGold;
        $("#last").html("Lose " + randomGold + " 🧈");
        $("#gold").html(game.gold);
    }
    ninjaCasino();
    stop();
    gold();
}
function gold(){
    if(game.gold>=0){
        $("#gold").css("color","green");
    }else{
        $("#gold").css("color","red");
    }
}

function stop(){
    if (game.turn >= 20){
        if(game.gold >= 250){
            $("#exampleModal1").modal("show");
        }else{
            $("#exampleModal").modal("show");
        }
            game.turn=0;
            $("#turn").html(game.turn);
            game.gold=0;
            $("#gold").html(game.gold); 
            $("#last").html(" ");     
    }
}
 function ninjaCasino(){
    $("#ninja").animate({marginLeft: "-300px", marginTop: "150px"}, 500, function(){
        // Reset the position of the image after the animation is complete
        $(this).animate({marginLeft: "-50px", marginTop: "0px"},500);
        // $(this).css({marginLeft: '-50px', marginTop: '0px'},1000);
      });
 }
 function ninjaHouse(){
    $("#ninja").animate({marginLeft: "200px", marginTop: "-150px"}, 500, function(){
        // Reset the position of the image after the animation is complete
        $(this).animate({marginLeft: "-50px", marginTop: "0px"},500);
        // $(this).css({marginLeft: '-50px', marginTop: '0px'},1000);
      });
 }
 function ninjaCave(){
    $("#ninja").animate({marginLeft: "-300px", marginTop: "-150px"}, 500, function(){
        // Reset the position of the image after the animation is complete
        $(this).animate({marginLeft: "-50px", marginTop: "0px"},500);
        // $(this).css({marginLeft: '-50px', marginTop: '0px'},1000);
      });
 }
 function ninjaGoldmine(){
    $("#ninja").animate({marginLeft: "220px", marginTop: "150px"}, 500, function(){
        // Reset the position of the image after the animation is complete
        $(this).animate({marginLeft: "-50px", marginTop: "0px"},500);
        // $(this).css({marginLeft: '-50px', marginTop: '0px'},1000);
      });
 }