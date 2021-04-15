var plays = Object.keys(shows);
const datesDiv = document.querySelector("#dates");

plays.forEach(function (play) {
    let option = document.createElement('option');
    option.value = play;
    option.innerHTML = shows[play].name;
    document.querySelector('#plays').appendChild(option);
});

function userSelection() {

    const elements = document.querySelectorAll('.title');
    playSelect = elements.forEach((el) => {
        el.addEventListener('click', (e) => {
            let playSelect = e.target.className;
            playSelect = playSelect.split(' ')[1];
            document.querySelector('#plays').value = playSelect;
            
            let previous = document.querySelector('#dates');
            previous.innerHTML = " ";
            displayAllPlays(playSelect);

            document.querySelectorAll(".feature").forEach((element) => element.classList.remove("selected"));
            e.target.parentElement.classList.add("selected");
     
        });
    });

// get the option that a user selects in a selector 
    const selectElement = document.querySelector('#plays');
    selectElement.addEventListener('change', (e) => {
        playSelect = e.target.value;
        let previous = document.querySelector('#dates');
        previous.innerHTML = " ";
        displayAllPlays(playSelect);

        document.querySelectorAll(".feature").forEach((element) => element.classList.remove("selected"));
        e.target.parentElement.classList.toggle("selected");

    });

}

function displayAllPlays(userSelection) {

    let wrapper = document.createElement("div");
    wrapper.classList.add('wrapper');

    // let datesDiv = document.querySelector(".wrapper");

    let play = shows[userSelection];
    let datesAr = play.dates;

    // για κάθε παρασταση
    datesAr.forEach(function (date) {
        // φτιαξε ενα radio button
        let div = document.createElement('div');
        div.classList.add('date');

        // φτιαξε ενα radio button
        let input = document.createElement('input');
        input.classList.add('radio');
        input.setAttribute("type", "radio");
        input.setAttribute("id", date);
        input.value = date;
        div.appendChild(input);
        // ενα label
        let label = document.createElement('label');
        label.setAttribute("for", date);
        label.innerHTML = date;
        div.appendChild(label);

        for (role in play.roles) {
            let divRole = document.createElement('div');
            divRole.classList.add('role');
            divRole.innerHTML = role + ": ";
            div.appendChild(divRole);
            let span = document.createElement('span');
            span.classList.add('actor');
            divRole.appendChild(span);
            // console.log(role);  //return strings with the names of roles    
            let actors = play.roles[role];
            //  console.log(actors);   // return object of actors
            for (actor in actors) {
                let exist = actors[actor].some(arrVal => date === arrVal);
                // console.log(exist);
                if (exist) {
                    span.innerHTML = actor;
                }
            }

        }

        wrapper.appendChild(div);
        datesDiv.appendChild(wrapper);
        // datesDiv.appendChild(div);
        // console.log(wrapper);   
    });


}

userSelection();


