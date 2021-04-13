let item =  window.location.href.split("?")[1];
//let crew = shows[item].crew;
document.querySelector(".room").innerHTML = shows[item].room;
document.querySelector(".title").innerHTML = shows[item].name; 
document.querySelector(".composer").innerHTML = shows[item].composer;
document.querySelector(".dates").innerHTML = shows[item].mounth;
document.querySelector(".dates").innerHTML = shows[item].mounth;
document.querySelector(".production").innerHTML = shows[item].production;
document.querySelector(".description").innerHTML = shows[item].description;



document.querySelector("#conductor").innerHTML = shows[item].crew.conductor;
document.querySelector("#director").innerHTML = shows[item].crew.director;
document.querySelector("#associate").innerHTML = shows[item].crew['associate director'];
document.querySelector("#sets").innerHTML = shows[item].crew.sets;
document.querySelector("#costumes").innerHTML = shows[item].crew.costumes;
document.querySelector("#choreographer").innerHTML = shows[item].crew.choreographer;
document.querySelector("#lighting").innerHTML = shows[item].crew['lighting designer'];
let text = /video/;
document.querySelector("#video").innerHTML = shows[item].crew[text];
document.querySelector("#programmer").innerHTML = shows[item].crew['programmer video'];
document.querySelector("#chorus").innerHTML = shows[item].crew['chorus master'];
document.querySelector("#chorus").innerHTML = shows[item].crew['chorus master'];


// for ( var item in shows['crew']){
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
