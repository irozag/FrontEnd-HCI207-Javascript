var plays = Object.keys(shows);

const fromOtherPage = window.location.href.split("?")[1];

//δημιουργησε τoν επιλογέα των παραστασων
plays.forEach(function (play) {
    let option = document.createElement('option');
    option.value = play;
    if (play == fromOtherPage) {
        option.setAttribute('selected', true);
    }
    option.innerHTML = shows[play].name;
    document.querySelector('#plays').appendChild(option);
    // if (fromOtherPage != null) {

});



function userTitleSelection() {

    //Αν ο χρηστης επιλέξει κάποιο τίτλο απο τις εικόνες
    const elements = document.querySelectorAll('.title');
    let playSelect = elements.forEach((el) => {
        el.addEventListener('click', (e) => {
            let playSelect = e.target.className;

            //  επιλεξε τη μία κλάση απο τις δύο 
            playSelect = playSelect.split(' ')[1];
            document.querySelector('#plays').value = playSelect;

            // σβήσε τις προηγουμενες επιλογές
            let previous = document.querySelector('#dates');
            previous.innerHTML = " ";
            previous.classList.remove("dateSelected");
            let print = document.querySelector("#userSelection");
            print.innerHTML = " ";
            hideMap();

            printSelection(playSelect);
            displayAllPlays(playSelect);

            //βάλε μπορτερ στην φωτογραφία για να φαίνεται επιλεγμένη   
            document.querySelectorAll(".feature").forEach((element) => element.classList.remove("selected"));
            e.target.parentElement.classList.add("selected");

        });
    });

}

function userOptionSelecton() {
        // Αν ο χρηστης επιλέξει κάποια επιλογή απο τον επιλογέα
        const selectElement = document.querySelector('#plays');
        selectElement.addEventListener('change', (e) => {
            let playSelect = e.target.value;
    
            // σβήσε τις προηγουμενες επιλογές
            let previous = document.querySelector('#dates');
            previous.innerHTML = " ";
            previous.classList.remove("dateSelected");
            let print = document.querySelector("#userSelection");
            print.innerHTML = " ";
            hideMap();
    
            //εμφανισε την επιλογή και τις διαθέσημες ημερομινίες
            printSelection(playSelect);
            displayAllPlays(playSelect);
    
            //βάλε μπορντερ στην φωτογραφία για να φαίνεται επιλεγμένη
            let selected = document.querySelectorAll(".feature")
            selected.forEach((element) => element.classList.remove("selected"));
            // .parentElement.classList.toggle("selected");
    
        });
    
}

function printSelection(userSelection) {
    let print = document.querySelector("#userSelection");
    let play = shows[userSelection];

    let div = document.createElement("div");
    div.classList.add("namePlay");
    div.innerHTML = play.name;

    let div2 = document.createElement("div");
    div2.classList.add("roomPlay");
    div2.innerHTML = play.room

    print.appendChild(div);
    print.appendChild(div2);

}


function displayAllPlays(userSelection) {
    const datesDiv = document.querySelector("#dates");
    let wrapper = document.createElement("div");
    wrapper.classList.add('rWrapper');

    let play = shows[userSelection];
    let datesAr = play.dates;

    // για κάθε παρασταση
    datesAr.forEach(function (date) {
        // φτιαξε ενα radio button
        let div = document.createElement('div');
        div.classList.add('date');
        let dateId = "dateId" + date.replaceAll("-", "");

        // φτιαξε ενα radio button
        let input = document.createElement('input');
        input.classList.add('radio');
        input.setAttribute("type", "radio");
        input.setAttribute("id", dateId);
        input.setAttribute("name", "date");
        input.addEventListener("click", (e) => selectSeat(e.target.id));

        input.value = date;
        div.appendChild(input);
        // φτιάξε ενα label
        let label = document.createElement('label');
        label.setAttribute("for", dateId);
        label.innerHTML = date;
        div.appendChild(label);

        for (role in play.roles) {
            let divRole = document.createElement('div');
            divRole.classList.add('role');
            divRole.innerHTML = role + ": <br/>";
            div.appendChild(divRole);
            let span = document.createElement('span');
            span.classList.add('actor');
            divRole.appendChild(span);
            // console.log(role);  //return strings with the names of roles    
            let dateAr = play.roles[role];
            // console.log(actors);   // return object of actors

            // print the roles of the actors for each date
            for (actor in dateAr) {
                let exist = dateAr[actor].some(arrVal => date === arrVal);
                if (exist) {
                    span.innerHTML = actor;
                } else if (dateAr[actor].length === 0) {
                    span.innerHTML = actor;
                }
            }

        }

        wrapper.appendChild(div);
        datesDiv.appendChild(wrapper);

    });


}

userTitleSelection();
userOptionSelecton(); 
createSeatMap();

function selectSeat(id) {
    //κρύψε όλες τις επιλογές (radio buttons)
    let d = document.querySelectorAll(".date");
    for (i = 0; i < d.length; i++) {
        d[i].style.display = "none";
    }
    //εμφάνεσε μόνο την επιλεγμένη ημερομινία στο πλάι
    let dateSelected = document.querySelector("#" + id);
    dateSelected.parentElement.style.display = "block";

    //βάλε την κλαση dateSelected για να φτιάξει σωστά το grid στο πλάι
    let dates = document.querySelector("#dates");
    dates.classList.add("dateSelected");

    // εμφάνισε το χάρτη
    displayMap();

}

function createSeatMap() {
    const map = document.querySelector("#map");

    let seat = "<tbody>";
    let counter = 0;

    for (i = 1; i <= 10; i++) {
        seat += "<tr>";
        seat += "<th scope='row'>σειρά: " + i + "</th>"
        counter++;
        for (z = 0; z < 50; z++) {
            seat += "<td class='seat' onclick='seatNumber(" + counter + ",1);' id='S" + counter + "'></td>"
            counter++;
        }
        seat += "</tr>"
    }
    seat += "</tbody>"
    map.innerHTML = seat;

    //second map 
    const map2 = document.querySelector("#map2");
    seat = "<tbody>";
    counter = 0;

    for (i = 1; i <= 5; i++) {
        seat += "<tr>";
        seat += "<th scope='row'>σειρά: " + i + "</th>"
        counter++;
        for (z = 0; z < 50; z++) {
            seat += "<td class='seat' onclick='seatNumber(" + counter + ",2);' id='E" + counter + "' ></td>"
            counter++;
        }
        seat += "</tr>"
    }
    seat += "</tbody>"
    map2.innerHTML = seat;

}

function seatNumber(number, stage) {
    const seatInput = document.querySelector("#seatSelection")
    const input = document.querySelector('#stage');

    if (stage == 1) {
        seatInput.value = number;
        input.value = 'Πλατεία';
        idLetter = "S"
    } else {
        seatInput.value = number;
        input.value = 'Eξώστης';
        idLetter = "E"
    }

    //βάζω ένα selected class για την επιλεγμενη θέση
    let seatId = idLetter + number;
    const seat = document.querySelectorAll('.seat');

    for (i = 0; i < seat.length; i++) {
        console.log ( seat[i].id);
        if (seat[i].id == seatId) {
            seat[i].classList.add("selected");
        } else {
            seat[i].classList.remove("selected");
        }

    }

     //εμφανίζω τα υπολοιπα στοιχεία της φορμας
    const view = document.querySelector(".personalDetails");
    view.style.display = "block";

}


function hideMap() {
    const map = document.querySelector("#map");
    const map2 = document.querySelector("#map2");

    map.style.display = "none";
    map2.style.display = "none";

    //κρυψε τις θέσεις
    let view = document.querySelector(".positions");
    view.style.display = "none";

    view = document.querySelector(".personalDetails");
    view.style.display = "none";


}

function displayMap() {
    const map = document.querySelector("#map");
    const map2 = document.querySelector("#map2");
    map.style.display = "table";
    map2.style.display = "table";

    //εμφάνισε τις θέσεις
    const view = document.querySelector(".positions");
    view.style.display = "block";
}



// let seats = document.querySelectorAll(".seat");
// seats.forEach((element) => element.addEventListener("click", (element) => element.target.add("selected")));

