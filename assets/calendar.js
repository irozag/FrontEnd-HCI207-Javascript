let play = Object.keys(shows);

let calendar = document.querySelector("#calendar");

function thisMonth() {
    let months = new Array("ΙΑΝΟΥΑΡΙΟΣ","ΦΕΒΡΟΥΑΡΙΟΣ", "ΜΑΡΤΙΟΣ", "ΑΠΡΙΛΙΟΣ", "ΜΑΙΟΣ", "ΙΟΥΝΙΟΣ","ΙΟΥΛΙΟΣ","ΑΥΓΟΥΣΤΟΣ","ΣΕΠΤΕΜΒΡΙΟΣ","ΟΚΤΟΒΡΙΟΣ","ΝΟΕΜΒΡΙΟΣ","ΔΕΚΕΜΒΡΙΟΣ");
    let date = new Date();
    let thisDay = date.getDay();
    let thisMonth = date.getMonth();
    let thisYear = date.getFullYear();

    //print the title
    let h2 = calendar.querySelector("h2").innerHTML = months[thisMonth];

   // calculate the days of this month
    let daysM = function(month,year) {
      return new Date(year, month, 0).getDate();
   };
   thisMonth++;
   let daysInMonth = daysM(thisMonth, thisYear);


   
   console.log(thisDay);
   console.log("this month is : " + thisMonth);
   console.log("this month has : " + daysInMonth);
 

 
  }

  thisMonth();

  

/* play.forEach(function(play){
    let dates = shows[play].dates;
    // console.log(dates); 

});*/