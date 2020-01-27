// All initial data will be put here (further parsed from input fields)

var possession1 = 56;
var possession2 = 100 - possession1; 

var shots1data = 10;
var shots2data = 14;
var shots1percentage = shots1data / (shots1data+shots2data) * 100;
var shots2percentage = shots2data / (shots1data+shots2data) * 100;
var shotstarget1 = 5;
var shotstarget2 = 9;
var shotstargetpercentage1 = shotstarget1 / (shotstarget1+shotstarget2) * 100;
var shotstargetpercentage2 = shotstarget2 / (shotstarget1+shotstarget2) * 100;


function calculateStats (){
    document.getElementsByClassName('possession-1')[0].style.width=(possession1+"%");
    document.getElementsByClassName('possession-2')[0].style.width=(possession2+"%");
    document.getElementsByClassName('shots-1')[0].style.width=(shots1percentage+"%");
    document.getElementsByClassName('shots-2')[0].style.width=(shots2percentage+"%");
    document.getElementsByClassName('shotsontarget-1')[0].style.width=(shotstargetpercentage1+"%");
    document.getElementsByClassName('shotsontarget-2')[0].style.width=(shotstargetpercentage2+"%");
}


//waiting till DOM conten is loaded\\
window.addEventListener('DOMContentLoaded', (event) => {

// DOM content is loaded
// From now on - our JS code is working here

// DOM content script closure
});


