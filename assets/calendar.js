let monthsMap = new Array("ΙΑΝΟΥΑΡΙΟΣ", "ΦΕΒΡΟΥΑΡΙΟΣ", "ΜΑΡΤΙΟΣ", "ΑΠΡΙΛΙΟΣ", "ΜΑΙΟΣ", "ΙΟΥΝΙΟΣ", "ΙΟΥΛΙΟΣ", "ΑΥΓΟΥΣΤΟΣ", "ΣΕΠΤΕΜΒΡΙΟΣ", "ΟΚΤΟΒΡΙΟΣ", "ΝΟΕΜΒΡΙΟΣ", "ΔΕΚΕΜΒΡΙΟΣ");

function currentMonth() {
  let date = new Date();
  let thisMonth = date.getMonth();
  let thisYear = date.getFullYear();

  //η πρώτη μέρα τoy μήνα σε μέρα 
  let firstDay = new Date(thisYear, thisMonth, 1).getDay();

  // ο αριθμός των μερών που έχει ο μήνας
  let daysM = function (month, year) {
    return new Date(year, month, 0).getDate();
  };
  let daysInMonth = daysM(thisMonth + 1, thisYear);

  return { thisMonth, firstDay, daysInMonth };
}

function createCalendar(month) {
  //κτησιμο html calendar

  //εκτύπωσε τον τιτλο του ημερολογίου
  let h2 = document.querySelector("h2").innerHTML = monthsMap[month.thisMonth];

  let body = document.querySelector("#squares");
  let mCounter = 1;
  let col = Math.ceil((month.daysInMonth + month.firstDay) / 7);

  for (z = 0; z < col; z++) {
    let tr = document.createElement('tr');
    body.appendChild(tr);
    for (i = 0; i < 7; i++) {
      if ((i < month.firstDay - 1) && (z === 0)) {
        let td = document.createElement('td');
        td.classList.add('calendarDate', 'empty');
        tr.appendChild(td);
      } else if (mCounter <= month.daysInMonth) {
        let td = document.createElement('td');
        td.classList.add('calendarDate', "d" + mCounter);
        td.innerHTML = "<div>" + mCounter + "</div>";
        tr.appendChild(td);
        mCounter++
      } else {
        let td = document.createElement('td');
        td.classList.add('calendarDate', 'empty');
        tr.appendChild(td);
      }

    }
  }
}

function addplays(month, plays) {


  plays.forEach((play) => {
    // για κάθε μία παρασταση πάρε φτιαξε ενα πίνακα με τις ημερομινιες 
    let datesA = shows[play].dates;

    //φιλτραρε τις παραστασεις του μηνα  (δεν ελέγχω το χρόνο)
    let thisMonthPlays = datesA.filter((el) => el.split("-")[1] == month + 1);
    thisMonthPlays = thisMonthPlays.map((el) => el.split("-")[2]);

    thisMonthPlays.forEach((el) => {
      let td = document.querySelector(".d" + el);
      let div = document.createElement('div');
      div.classList.add('textlink');
      div.innerHTML = "<a href='/play.html?" + play + "'>" + shows[play].name + "</a>";
    //  div.innerHTML = "<a href='/reservation.html?" + play + "'>" + shows[play].name + "</a>";
      td.appendChild(div);
      let pop = document.createElement('div');
      pop.classList.add("pop");
      pop.innerHTML = "<a href='/play.html?" + play + "'>Δείτε λεπτομέρειες >> </a><a href='/reservation.html?" + play + "'>Κάντε κράτηση >></a>"

      div.appendChild(pop);

    });

  });


}

let plays = Object.keys(shows);
let month = currentMonth();
createCalendar(month);
addplays(month.thisMonth, plays);
