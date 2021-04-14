const item =  window.location.href.split("?")[1];
const play = shows[item];

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

// const crew = play['crew'];
    console.log(item);
document.querySelector("#conductor").innerHTML = crew.conductor;
document.querySelector("#director").innerHTML = crew.director;
document.querySelector("#associate").innerHTML = crew['associate director'];
document.querySelector("#sets").innerHTML = crew.sets;
document.querySelector("#costumes").innerHTML = crew.costumes;
document.querySelector("#choreographer").innerHTML = crew.choreographer;
document.querySelector("#lighting").innerHTML = crew['lighting designer'];
//  document.querySelector("#video").innerHTML = crew[/(video)*(designer)/];
document.querySelector("#programmer").innerHTML = crew['programmer video'];
document.querySelector("#chorus").innerHTML = crew['chorus master'];
document.querySelector("#chorus").innerHTML = crew['chorus master'];


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

console.log(shows['crew']);
console.log(item);
