let energy = document.querySelector("#energy");
let energyValue = parseInt(energy.innerHTML);
let cubes = document.querySelector("#cubes");
let cubesValue = parseInt(cubes.innerHTML);
let endTurn = 1;
let snap = 0;
let playerName = $("#playerIcon .name").text();
let newName = prompt("What's your name?", playerName);

if(newName !== null) {
    $("#playerIcon .name").text(newName);
}

document.querySelector("#endTurn").addEventListener("click", function() {
    endTurn++;
    energyValue++;

    $("#endTurn").css({
        "background-color": "#6D686E",
        "border-color": "#6D686E"
    }); 

    setTimeout(function() {
        $("#endTurn").css({
            "background-color": "white",
            "border-color": "white"
        });
    }, 90)

    
    if (energyValue >= 6){
        energyValue = 6;
    }

    if(endTurn == 6) {
        cubes.innerHTML = cubesValue * 2;
        cubesValue = parseInt(cubes.innerHTML);
    }

    energy.innerHTML = energyValue;
    
    return cubesValue;
})

document.querySelector("#cubes").addEventListener("click", function() {
    if(cubesValue == 4) {
        cubesValue = 2;
    }

    if(cubesValue == 2 && endTurn < 6) {
        cubesValue = 1;
    }
    
    cubesValue *= 2;
    cubes.innerHTML = cubesValue;

    snap = 1;

    if (endTurn > 6 && cubesValue == 2 && snap == 1) {
        cubesValue *= 2; 
        cubes.innerHTML = cubesValue;
    }
})