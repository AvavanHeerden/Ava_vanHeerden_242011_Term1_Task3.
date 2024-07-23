function decreaseMars(){
    if (document.getElementById('ticketsMars').value != 0){
            if (document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) - 1);
    } else{
        document.getElementById('ticketsMars').value = 0;
    }
}

function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
}

let totalMarsCost = 0;

function totalMars(){
 totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 5000;
 document.getElementById('totalMars').innerHTML = "R " + totalMarsCost
}

function decreaseJupiter(){
    if (document.getElementById('ticketsJupiter').value != 0){
            if (document.getElementById('ticketsJupiter').value = parseInt(document.getElementById('ticketsJupiter').value) - 1);
    } else{
        document.getElementById('ticketsJupiter').value = 0;
    }
}

function increaseJupiter(){
    document.getElementById('ticketsJupiter').value = parseInt(document.getElementById('ticketsJupiter').value) + 1;
}

let totalJupiterCost = 0;

function totalJupiter(){
 totalJupiterCost = parseInt(document.getElementById('ticketsJupiter').value) * 5000;
 document.getElementById('totalJupiter').innerHTML = "R " + totalJupiterCost
}

function decreaseMoon(){
    if (document.getElementById('ticketsMoon').value != 0){
            if (document.getElementById('ticketsMoon').value = parseInt(document.getElementById('ticketsMoon').value) - 1);
    } else{
        document.getElementById('ticketsMoon').value = 0;
    }
}

function increaseMoon(){
    document.getElementById('ticketsMoon').value = parseInt(document.getElementById('ticketsMoon').value) + 1;
}

let totalMoonCost = 0;

function totalMoon(){
 totalMoonCost = parseInt(document.getElementById('ticketsMoon').value) * 5000;
 document.getElementById('totalMoon').innerHTML = "R " + totalMoonCost
}

function decreaseNeptune(){
    if (document.getElementById('ticketsNeptune').value != 0){
            if (document.getElementById('ticketsNeptune').value = parseInt(document.getElementById('ticketsNeptune').value) - 1);
    } else{
        document.getElementById('ticketsNeptune').value = 0;
    }
}

function increaseNeptune(){
    document.getElementById('ticketsNeptune').value = parseInt(document.getElementById('ticketsNeptune').value) + 1;
}

let totalNeptuneCost = 0;

function totalNeptune(){
 totalNeptuneCost = parseInt(document.getElementById('ticketsNeptune').value) * 5000;
 document.getElementById('totalNeptune').innerHTML = "R " + totalNeptuneCost
}

function decreaseSaturn(){
    if (document.getElementById('ticketsSaturn').value != 0){
            if (document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) - 1);
    } else{
        document.getElementById('ticketsSaturn').value = 0;
    }
}

function increaseSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}

let totalSaturnCost = 0;

function totalSaturn(){
 totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 5000;
 document.getElementById('totalSaturn').innerHTML = "R " + totalSaturnCost
}

function decreaseUranus(){
    if (document.getElementById('ticketsUranus').value != 0){
            if (document.getElementById('ticketsUranus').value = parseInt(document.getElementById('ticketsUranus').value) - 1);
    } else{
        document.getElementById('ticketsUranus').value = 0;
    }
}

function increaseUranus(){
    document.getElementById('ticketsUranus').value = parseInt(document.getElementById('ticketsUranus').value) + 1;
}

let totalUranusCost = 0;

function totalUranus(){
 totalUranusCost = parseInt(document.getElementById('ticketsUranus').value) * 5000;
 document.getElementById('totalUranus').innerHTML = "R " + totalUranusCost
}
