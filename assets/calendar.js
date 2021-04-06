let play = Object.keys(shows);
let months = new Array("ΙΑΝΟΥΑΡΙΟΣ","ΦΕΒΡΟΥΑΡΙΟΣ", "ΜΑΡΤΙΟΣ", "ΑΠΡΙΛΙΟΣ", "ΜΑΙΟΣ", "ΙΟΥΝΙΟΣ","ΙΟΥΛΙΟΣ","ΑΥΓΟΥΣΤΟΣ","ΣΕΠΤΕΜΒΡΙΟΣ","ΟΚΤΟΒΡΙΟΣ","ΝΟΕΜΒΡΙΟΣ","ΔΕΚΕΜΒΡΙΟΣ");

function currentMonth() {
  let date = new Date();
  let thisMonth = date.getMonth();
  let thisYear = date.getFullYear();

  //η πρώτη μέρα τoy μήνα σε μέρα 
  let firstDay = new Date(thisYear, thisMonth, 1).getDay();

  // ο αριθμός των μερών που έχει ο μήνας
    let daysM = function(month,year) {
      return new Date(year, month, 0).getDate();
  };
  let daysInMonth = daysM(thisMonth+1, thisYear);
  console.log(daysInMonth);
  return { thisMonth, firstDay, daysInMonth };
}

function createCalendar() {
  let month = currentMonth();
  //κτησιμο html calendar

  //εκτύπωσε τον τιτλο του ημερολογίου
  let h2 = document.querySelector("h2").innerHTML = months[month.thisMonth];

  let body = document.querySelector("#squares");
  let mCounter = 1;
  let col = Math.ceil((month.daysInMonth+month.firstDay)/7);
  console.log (col);
  for (z=0; z<col; z++){
    let tr = document.createElement('tr');
    body.appendChild(tr);
    for (i=0; i<7; i++){
          if ((i < month.firstDay -1) && (z===0)) {
            let td = document.createElement('td');
            td.classList.add('empty', 'calendarDate');
            tr.appendChild(td);
          } else if (mCounter <= month.daysInMonth){
            let td = document.createElement('td');
            td.classList.add( mCounter, 'calendarDate');
            td.textContent= mCounter;
            tr.appendChild(td);
            mCounter++
          } else {
            let td = document.createElement('td');
            td.classList.add('empty', 'calendarDate');
            tr.appendChild(td);
          }
  
        } 
    }
  }

  createCalendar();