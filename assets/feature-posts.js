const featureFeed = document.querySelector("#row");

let titles = Object.keys(shows);

titles.forEach(function(titles){

    let feature = document.createElement('div');
    feature.classList.add('feature');
    featureFeed.appendChild(feature);

    let div = document.createElement('div');
    div.classList.add('dates');
    div.innerHTML =  shows[titles].mounth;
    feature.appendChild(div);
  
    div = document.createElement('div');
    div.classList.add('feature-photo');
    div.style.backgroundImage = "url("+shows[titles].photo+")";
    feature.appendChild(div);
   
    div = document.createElement('div');
    div.classList.add('room');
    div.innerHTML =  shows[titles].room;
    feature.appendChild(div);

    div = document.createElement('div');
    div.classList.add('title');
    div.innerHTML =  shows[titles].name;
    feature.appendChild(div);

    div = document.createElement('div');
    div.classList.add('composer');
    div.innerHTML =  shows[titles].composer;
    feature.appendChild(div);

});

if(titles.length >3) {
    button = document.createElement('button');
    button.classList.add('sticky');
    button.innerHTML = "Περισσότερα <span>> </span>"
    let featurefeed = document.querySelector("#feature-feed"); 
    featurefeed.appendChild(button);
 }

/* 

let dates = featureFeed.querySelectorAll('.dates');
let title = featureFeed.querySelectorAll('.title');
let photo = featureFeed.querySelectorAll('.feature-photo');
let room = featureFeed.querySelectorAll('.room');
let composer = featureFeed.querySelectorAll('.composer');
let i=0;

titles.forEach(function(titles){
    console.log(dates[i]);
    dates[i].innerHTML =  shows[titles].mounth ;
    title[i].innerHTML =  shows[titles].name ;
    room[i].innerHTML =  shows[titles].room ;
    photo[i].style.backgroundImage = "url("+shows[titles].photo+")";
    composer[i].innerHTML =  shows[titles].composer ;
    i++;

});

 */

