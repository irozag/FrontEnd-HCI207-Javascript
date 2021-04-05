let play = Object.keys(shows);

let calendar = document.querySelector("#calendar");

function thisMonth() {
    let months = new Array("ΙΑΝΟΥΑΡΙΟΣ","ΦΕΒΡΟΥΑΡΙΟΣ", "ΜΑΡΤΙΟΣ", "ΑΠΡΙΛΙΟΣ", "ΜΑΙΟΣ", "ΙΟΥΝΙΟΣ","ΙΟΥΛΙΟΣ","ΑΥΓΟΥΣΤΟΣ","ΣΕΠΤΕΜΒΡΙΟΣ","ΟΚΤΟΒΡΙΟΣ","ΝΟΕΜΒΡΙΟΣ","ΔΕΚΕΜΒΡΙΟΣ");
    let date = new Date();
    let thisDay = date.getDay();
    let thisMonth = date.getMonth();
    let thisYear = date.getFullYear();
    let thisDate = date.getDate();

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

  //  let arrayCal = Array(firstDay);


    let tr = document.querySelector("#squares");
    let mCounter = 1;
    for (i=0; i<7; i++){
      if (i<firstDay-1) {
      let td = document.createElement('td');
      td.classList.add('empty', 'calendarDate');
      td.textContent= "0";
      tr.appendChild(td);
      }else{
        let td = document.createElement('td');
        td.classList.add( mCounter, 'calendarDate');
        td.textContent= mCounter;
        tr.appendChild(td);
        mCounter++
      }
}


   console.log("modulo ");
   console.log(firstDay);
   console.log(thisDate);
   console.log(arrayCal);
   console.log("this month is : " + thisMonth);
   console.log("this month has : " + daysInMonth);
 


 
  }

  thisMonth();

  

/* play.forEach(function(play){
    let dates = shows[play].dates;
    // console.log(dates); 

});*/