function createSeatMap() {
    const map = document.querySelector("#map");

    let seat = "<tbody>";
    let counter = 0;
  
    for (i = 1; i <= 10; i++) {
        seat += "<tr>";
        seat += "<th scope='row'>σειρά: "+i+"</th>"
        counter++;
        for (z = 0; z < 50; z++) {
            seat += "<td class='seat' onclick='seatNumber("+counter+",1);' title=" + counter + "></td>"
            counter++;
        }
        seat += "</tr>"
    }
    seat += "</tbody>"
    map.innerHTML = seat;

    //second map 
    const map2 = document.querySelector("#map2");
    seat = "<tbody>";
    counter = 0;
 
    for (i = 1; i <= 5; i++) {
        seat += "<tr>";
        seat += "<th scope='row'>σειρά: "+i+"</th>"
        counter++;
        for (z = 0; z < 50; z++) {
            seat += "<td class='seat' onclick='seatNumber("+counter+",2);' title=" + counter + " ></td>"
            counter++;
        }
        seat += "</tr>"
    }
    seat += "</tbody>"
    map2.innerHTML = seat;
    
}

function seatNumber(number,stage) {
    let seat = document.querySelector("#seatSelection")
    // let input = document.createElement('input');
    // input.classList.add('seatNumber');
    // input.name = "seatNumber";
    // input.value = number; 

    if (stage==1) {
        seat.innerHTML = "Πλατεία: "+number
    }else {
        seat.innerHTML = "Eξώστης: "+number
    }

    view = document.querySelector(".personalDetails");
    view.style.display = "block";
    // seat.appendChild(input);

    console.log(number);
    console.log(stage);
}


function hideMap() {
    const map = document.querySelector("#map");
    const map2 = document.querySelector("#map2");

    map.style.display = "none";
    map2.style.display = "none";

}

function displayMap() {
    const map = document.querySelector("#map");
    const map2 = document.querySelector("#map2");

    map.style.display = "block";
    map2.style.display = "block";

}

createSeatMap();
// hideMap();