$(document).ready(function(){
//array defining heros
    //defining ATTACK POWER to all heroes (all different)
    //defining HEALTH POINTS to all heroes (all differet)
    //defining COUNTER ATTACK POWER to all heroes (all different)
// var heroes = {
//     pacmanPlayer: {
//         name: "pacman",
//         health: 125,
//         attack: 9,
//         counterAttack: 20,
//         image: "<img src='../images/pac-man.gif' alt='Pac-man' />"
//     },
//     donkeykongPlayer: {
//         name: "donkey kong",
//         health: 155,
//         attack: 7,
//         counterAttack: 22,
//         image: "<img src='../images/donkey-kong.gif' alt='Donkey Kong' />"
//     },
//     oregontrailPlayer: {
//         name: "oregon trail",
//         health: 130,
//         attack: 12,
//         counterAttack: 3,
//         image: "<img src='../images/oregon-trail.gif' alt='Oregon Trail' />"
//     },
//     qbertPlayer: {
//         name: "q-bert",
//         health: 110,
//         attack: 10,
//         counterAttack: 16,
//         image: "<img src='../images/q-bert.gif' alt='Q-bert' />"
//     }
var pacmanHealth = 125;
console.log("Pacman's health is " + pacmanHealth);
var donkeykongHealth = 155;
console.log("Donkey Kong's health is " + donkeykongHealth);
var oregontrailHealth = 130;
console.log("Oregon Trail's health is " + oregontrailHealth);
var qbertHealth = 110;
console.log("Q-bert's health is " + qbertHealth);
// var pacmanImage = "<img src='../images/pac-man.gif' alt='Pacman' />";
// var donkeykongImage = "<img src='../images/donkey-kong.gif' alt='Donkey Kong' />";
// var oregontrailImage = "<img src='../images/oregon-trail.gif' alt='Oregon Trail' />";
// var qbertImage = "<img src='../images/q-bert.gif' alt='Q-bert' />";
var charImages = ["<img src='assets/images/pac-man.gif' />", "img src='assets/images/donkey-kong.gif' /", "src='assets/images/oregon-trail.gif' /", "src='assets/images/q-bert.gif' /"];
for (var i = 0; i < charImages.length; i++){
    var initialImage = $("<img>");
    initialImage.append(charImages[i]);
    $("#all-players").append(initialImage);
    console.log("characters here");
    } 



//show characters on html
// for (var i = 0; i < heroes.length; i++){
//     var initialImage = $("<img>");
//     initialImage.append(heroes[i].image);
//     $("#all-players").append(initial);
//     console.log("characters here" + initial);
// }

//move first hero to user's character section

//move opponent to defender area

//attack button value

//immediate counterattack value

//if user HEALTH POINTS 0 or less, game over

//if defender HEALTH POINTS 0 or less, defender disappears

    //note to choose another opponent

    //opponent moves to defender area
    
    //increase hero's ATTACK POWER only

    //loop through game until either the hero's HEALTH POINTS are 0 or less OR all opponents are defeated

});