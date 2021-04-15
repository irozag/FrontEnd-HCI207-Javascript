var plays = Object.keys(shows);


plays.forEach(function (play) {
    let option = document.createElement('option');
    option.value = play;
    option.innerHTML = shows[play].name;
    document.querySelector('#plays').appendChild(option);
});



function userSelection () {

const elements = document.querySelectorAll('.title');
    elements.forEach((el) => { 
       el.addEventListener('click',  (e) => {
         let playSelect = e.target.textContent;
        //  document.querySelector('#plays').value(playSelect);
        console.log(playSelect);
        });
    });



const selectElement = document.querySelector('#plays');
selectElement.addEventListener('change', (e) => {
      playSelect = e.target.value; 
      console.log(playSelect);
        return playSelect;
});




}

let playSelects = userSelection ();
console.log(playSelects);