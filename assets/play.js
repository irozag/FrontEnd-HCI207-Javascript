const item = window.location.href.split("?")[1];
const play = shows[item];
console.log(item);


document.querySelector(".room").innerHTML = play.room;
document.querySelector(".title").innerHTML = play.name;
document.querySelector(".composer").innerHTML = play.composer;
document.querySelector(".month").innerHTML = play.mounth;
document.querySelector(".production").innerHTML = play.production;
document.querySelector(".description").innerHTML = play.description;
document.querySelector(".feature-photo").style.backgroundImage = "url(" + play.photo + ")";


let dates = play.dates;
dates.forEach(date => {
    document.querySelector(".dates").innerHTML += date+", ";
});



const crew = play['crew']
for (person in crew) {
    //     if(crew.person != undefined) 
    // console.log(details[i]);
    switch (person) {
        case "conductor":
            text = "Μαέστρος";
            break;
        case "director":
            text = "Σκηνοθέτης";
            break;
        case "sets":
            text = "Σετς";
            break;
        case "costumes":
            text = "Κοστούμια";
            break;
        case "lighting designer":
            text = "Σχεδιασμός φωτισμού";
            break;
        case "chorus master":
            text = "Χωροδός";
            break;
        case "associate-director":
            text = "Βοηθός Σκηνοθέτη";
            break;
        case "choreographer":
            text = "Χορογράφος";
            break;
        case "programmer video":
            text = "Προγραμματισμός βίντεο";
            break;
        case "video designer":
            text = "Σχεδιασμός βίντεο";
            break;
        case "video projection designer":
            text = "Σχεδιασμός βιντεοπροβολών";
            break;
        default:
            text = " ";
    }
    let div = document.createElement("div");
    div.classList.add("details");
    div.innerHTML = text;
    let span = document.createElement("span");
    span.id = person;
    span.innerHTML = crew[person];
    div.appendChild(span);
    let crewdiv = document.querySelector(".crew");
    crewdiv.appendChild(div);

}

function goToReservations(item) {
    let link = "/reservation.html?" + item;
    document.querySelector("#reserve").setAttribute("href", link);
}

goToReservations(item);


//εκτυπωσε τους ηθοποιούς 
function printActors (play) {
    let roles = play.roles;
    for (role in roles) {
        for(actor in roles[role]) {
            document.querySelector("#actors").innerHTML += actor+ ", ";
        }
    }
}

printActors(play);