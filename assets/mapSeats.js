const map = document.querySelector("#map");
let seat = "<tbody>";
let counter = 0;

for (i=1; i<10; i++) {
    seat += "<tr>"
    counter++;
    for (z=0; z<50; z++) {
        seat += "<td class='seat' title=" + counter + "></td>"
        counter++;
    }
    seat += "</tr>"
}

seat += "</tbody>"

map.innerHTML = seat;
