const featureFeed = document.querySelector("#row");

let titles = Object.keys(shows);

titles.forEach(function(titles){
    //console.log(shows[titles].name);
    let feature = document.createElement('div');
    feature.classList.add('feature');
    featureFeed.appendChild(feature);

    let div = document.createElement('div');
    div.classList.add('dates');
    div.innerHTML =  shows[titles].mounth;
    feature.appendChild(div);
    console.log(div);

    div = document.createElement('div');
    div.classList.add('feature-photo');
    div.style.backgroundImage = "url("+shows[titles].photo+")";
    feature.appendChild(div);
    console.log(div);

    div = document.createElement('div');
    div.classList.add('room');
    div.innerHTML =  shows[titles].room;
    feature.appendChild(div);
    console.log(div);

    div = document.createElement('div');
    div.classList.add('title');
    div.innerHTML =  shows[titles].name;
    feature.appendChild(div);
    console.log(div);

    div = document.createElement('div');
    div.classList.add('composer');
    div.innerHTML =  shows[titles].composer;
    feature.appendChild(div);
    console.log(div);

  
});




/*
for(key of shows)
let  dates =  '<div class="dates" >'+ shows[key].mounth +'</div>';
//.style.backgroundImage = 'url('+ shows[key].photo +')';
// photo.className = 'feature-photo';
// let photo =  document.createElement('div'); //.classList.add('feature-photo');
//feature.appendChild(photo);
let photo =  '<div class="feature-photo"></div>';
console.log(photo);
photo = document.querySelector(".feature-photo");
console.log(photo);
test = 'url('+ shows[key].photo +')';
console.log(photo);
photo.style.backgroundImage = test;
console.log(photo);
let room =  '<div class="room">'+ shows[key].room +'</div>';
let title =  '<div class="title" >'+ shows[key].name +'</div>';
let  composer = '<div class="composer">'+ shows[key].composer + '</div>';
output = dates + photo + room + title + composer;
feature[i].innerHTML = output;
//document.querySelectorAll()
console.log(photo);
console.log(composer);
i++;

*/




/*

let photo = document.querySelector(".feature-photo");
photo.setAttribute("background",shows["don-giovanni"].photo);
<div class="feature">
<div class="dates">Απρίλιος 2021</div>
<div class="feature-photo"></div>
<div class="room">Κεντρική σκηνή</div>
<div class="title" >Μανταμ Μπατερφαιλ</div>
<div class="composser">Τζάκομο Πουτσίνι</div>

</div> 

let div = document.createElement('div');
div.classList.add('test');
let text = document.createTextNode('Test');
div.appendChild(text);
document.body.appendChild(div)



`${key}: ${value}`

Object.keys(shows)


let div = document.createElement('div');
div.className = 'test';
*/