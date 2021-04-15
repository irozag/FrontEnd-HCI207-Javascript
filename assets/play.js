const item =  window.location.href.split("?")[1];
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
let details = document.querySelectorAll(".details");

// console.log(details);

// let elems = document.querySelectorAll('select option:checked')
// let values = Array.prototype.map.call(elems, function(obj) {
//   return obj.value
// });

for ( i=0; i<details.length; i++ ){
    for ( person in crew) {
        console.log(person);
    }
    // console.log (element);
    // let div = document.createElement('div');
    // div.classList.add('details');
    // let span = document.createElement("span");
    // span.innerHTML = crew[element];
    // div.appendChild(span);
    // document.querySelector(".overlay").appendChild(div);
  
  
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


