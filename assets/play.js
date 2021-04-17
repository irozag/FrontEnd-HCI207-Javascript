const item = window.location.href.split("?")[1];
const play = shows[item];
console.log(item);

// let text = /(video)*(designer)/;

// function getMatchingPropertyNames(expression,object){
//     var result = [];
//    let express = new RegExp(expression, 'i');
//   console.log(express);
//     for (var property in object) {
//      console.log(express.test(property));
//             if (express.test(property)) {  
//                 result.push(property);
//             }
//     }
//     return result;
// };

document.querySelector(".room").innerHTML = play.room;
document.querySelector(".title").innerHTML = play.name;
document.querySelector(".composer").innerHTML = play.composer;
document.querySelector(".dates").innerHTML = play.mounth;
document.querySelector(".dates").innerHTML = play.mounth;
document.querySelector(".production").innerHTML = play.production;
document.querySelector(".description").innerHTML = play.description;
document.querySelector(".feature-photo").style.backgroundImage = "url(" + play.photo + ")";

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
    div.innerHTML= text;
    let span = document.createElement("span");
    span.id = person;
    span.innerHTML = crew[person];
    div.appendChild(span);
    let crewdiv = document.querySelector(".crew");
    crewdiv.appendChild(div);

}



var text;
let details = document.querySelectorAll(".details");
for (i = 0; i < details.length; i++) {

}







// document.querySelector("#conductor").innerHTML = crew.conductor;
// document.querySelector("#director").innerHTML = crew.director;
// document.querySelector("#associate").innerHTML = crew['associate director'];
// document.querySelector("#sets").innerHTML = crew.sets;
// document.querySelector("#costumes").innerHTML = crew.costumes;
// document.querySelector("#choreographer").innerHTML = crew.choreographer;
// document.querySelector("#lighting").innerHTML = crew['lighting designer'];
// //  document.querySelector("#video").innerHTML = crew[/(video)*(designer)/];
// document.querySelector("#programmer").innerHTML = crew['programmer video'];
// document.querySelector("#chorus").innerHTML = crew['chorus master'];
// document.querySelector("#chorus").innerHTML = crew['chorus master'];



    // <div class="details">Μαέστρος <span id="conductor"></span></div> 
    // <div class="details">Σκηνοθέτης <span id="director"></span></div> 
    // <div class="details">Βοηθός Σκηνοθέτη <span id="associate"></span></div> 
    // <div class="details">σετ <span id="sets"></span></div> 
    // <div class="details">Κοστούμια <span id="costumes"></span></div> 
    // <div class="details">Χορογράφος <span id="choreographer"></span></div> 
    // <div class="details">Σχεδιασμός φωτισμού <span id="lighting"></span></div> 
    // <div class="details">Σχεδιασμός βίντεο <span id="video"></span></div> 
    // <div class="details">Προγραμματισμός βίντεο <span id="programmer"></span></div> 
    // <div class="details">Χωροδός<span id="chorus"></span></div> 
    // console.log (element);
    // let div = document.createElement('div');
    // div.classList.add('details');
    // let span = document.createElement("span");
    // span.innerHTML = crew[element];
    // div.appendChild(span);
    // document.querySelector(".overlay").appendChild(div);



// document.querySelector("#conductor").innerHTML = crew.conductor;
// document.querySelector("#director").innerHTML = crew.director;
// document.querySelector("#associate").innerHTML = crew['associate director'];
// document.querySelector("#sets").innerHTML = crew.sets;
// document.querySelector("#costumes").innerHTML = crew.costumes;
// document.querySelector("#choreographer").innerHTML = crew.choreographer;
// document.querySelector("#lighting").innerHTML = crew['lighting designer'];
// //  document.querySelector("#video").innerHTML = crew[/(video)*(designer)/];
// document.querySelector("#programmer").innerHTML = crew['programmer video'];
// document.querySelector("#chorus").innerHTML = crew['chorus master'];
// document.querySelector("#chorus").innerHTML = crew['chorus master'];


// for ( var item in play['crew']){
//     var parentNode = document.querySelector('.crew');
//     var newElement = document.createElement("div");
//     newElement.innerHTML = theShow['crew'][item];
//     newElement.classList.add("role-name");
//     var type = document.createElement("SPAN");
//     type.innerHTML = getName(item);
//     type.classList.add("role");
//     newElement.appendChild(type);
//     parentNode.appendChild(newElement);
//   }


