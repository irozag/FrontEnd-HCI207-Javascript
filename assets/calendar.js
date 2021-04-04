let play = Object.keys(shows);

let calendar = document.querySelector("#calendar");

function thisMonth() {
    let month = new Array("ΙΑΝΟΥΑΡΙΟΣ","ΦΕΒΡΟΥΑΡΙΟΣ", "ΜΑΡΤΙΟΣ", "ΑΠΡΙΛΙΟΣ", "ΜΑΙΟΣ", "ΙΟΥΝΙΟΣ","ΙΟΥΛΙΟΣ","ΑΥΓΟΥΣΤΟΣ","ΣΕΠΤΕΜΒΡΙΟΣ","ΟΚΤΟΒΡΙΟΣ","ΝΟΕΜΒΡΙΟΣ","ΔΕΚΕΜΒΡΙΟΣ");
    let d = new Date();
    let n = d.getMonth();
    let h2 = calendar.querySelector("h2").innerHTML = month[d.getMonth()];
   // console.log(n);

//    let daysNumber = daysInMonth(n, 2021);
//        console.log(daysNumber);
  }

  thisMonth();

play.forEach(function(play){
    let dates = shows[play].dates;
    // console.log(dates);

});