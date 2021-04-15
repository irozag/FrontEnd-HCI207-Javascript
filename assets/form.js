var plays = Object.keys(shows);


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
            displayAllPlays(playSelect);
        });
    });


    const selectElement = document.querySelector('#plays');
    selectElement.addEventListener('change', (e) => {
        playSelect = e.target.value;
        displayAllPlays(playSelect);
        // return playSelect;
    });

}

function displayAllPlays (userSelection) {
    console.log(userSelection);
}

userSelection();


