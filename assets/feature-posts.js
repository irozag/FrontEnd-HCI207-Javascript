const featureFeed = document.querySelector("#feature-feed");
let titles = Object.keys(shows);



let feature = document.querySelectorAll(".feature");
let output = '';
let i=0;
for (key in shows) {
    
    let  dates =  '<div class="dates" >'+ shows[key].mounth +'</div>';
   
     //.style.backgroundImage = 'url('+ shows[key].photo +')';
     // photo.className = 'feature-photo';
    //  let photo =  document.createElement('div'); //.classList.add('feature-photo');
     //feature.appendChild(photo);
     
     photo =  '<div class="feature-photo"></div>';
     let room =  '<div class="room">'+ shows[key].room +'</div>';
     let title =  '<div class="title" >'+ shows[key].name +'</div>';
     let  composer = '<div class="composer">'+ shows[key].composer + '</div>';
     output = dates + photo + room + title + composer;
     feature[i].innerHTML = output;
    // photo.style.backgroundImage = 'url('+ shows[key].photo +')';
     i++;
}
console.log(output);
console.log(photo);

let photo = document.querySelector(".feature-photo");
photo.setAttribute("background",shows["don-giovanni"].photo);
/*
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