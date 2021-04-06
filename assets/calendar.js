let play = Object.keys(shows);

let calendar = document.querySelector("#calendar");

function thisMonth() {
    let months = new Array("ΙΑΝΟΥΑΡΙΟΣ","ΦΕΒΡΟΥΑΡΙΟΣ", "ΜΑΡΤΙΟΣ", "ΑΠΡΙΛΙΟΣ", "ΜΑΙΟΣ", "ΙΟΥΝΙΟΣ","ΙΟΥΛΙΟΣ","ΑΥΓΟΥΣΤΟΣ","ΣΕΠΤΕΜΒΡΙΟΣ","ΟΚΤΟΒΡΙΟΣ","ΝΟΕΜΒΡΙΟΣ","ΔΕΚΕΜΒΡΙΟΣ");
    let date = new Date();
    let thisMonth = date.getMonth();
    let thisYear = date.getFullYear();

     //εκτύπωσε τον τιτλο του ημερολογίου
    let h2 = calendar.querySelector("h2").innerHTML = months[thisMonth];

    //η πρώτη μέρα τoy μήνα σε μέρα 
    let firstDay = new Date(thisYear, thisMonth, 1).getDay();

    // ο αριθμός των μερών που έχει ο μήνας
      let daysM = function(month,year) {
        return new Date(year, month, 0).getDate();
    };
    thisMonth++;
    let daysInMonth = daysM(thisMonth, thisYear);

    //κτησιμο html calendar
    let body = document.querySelector("#squares");
    let mCounter = 1;
    let col = Math.ceil(daysInMonth/7);
    for (z=0; z<col; z++){
      let tr = document.createElement('tr');
      body.appendChild(tr);
      for (i=0; i<7; i++){
            if ((i<firstDay-1)&&(z===0)) {
              let td = document.createElement('td');
              td.classList.add('empty', 'calendarDate');
              tr.appendChild(td);
            }else if (mCounter<daysInMonth){
              let td = document.createElement('td');
              td.classList.add( mCounter, 'calendarDate');
              td.textContent= mCounter;
              tr.appendChild(td);
              mCounter++
            }else {
              let td = document.createElement('td');
              td.classList.add('empty', 'calendarDate');
              tr.appendChild(td);
            }
    
          } 
     }
  }

  thisMonth();

  

/* play.forEach(function(play){
    let dates = shows[play].dates;
    // console.log(dates); 

});*/