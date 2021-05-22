
// function createSeatMap() {
//     const map = document.querySelector("#map");

//     let seat = "<tbody>";
//     let counter = 0;

//     for (i = 1; i <= 10; i++) {
//         seat += "<tr>";
//         seat += "<th scope='row'><span>σειρά:</span> " + i + "</th>"
//         // counter++;
//         for (z = 1; z <= 50; z++) {
//             seat += "<td class='seat' title=" + z + " onclick='seatNumber(" + z + ", " + i + ",1);' id='S" + z + "L" + i + "'></td>"
//             // counter++;
//         }
//         seat += "</tr>"
//     }
//     seat += "</tbody>"
//     map.innerHTML = seat;

//     //second map 
//     const map2 = document.querySelector("#map2");
//     seat = "<tbody>";
//     counter = 0;

//     for (i = 1; i <= 5; i++) {
//         seat += "<tr>";
//         seat += "<th scope='row'><span>σειρά:</span> " + i + "</th>"
//         // counter++;
//         for (z = 1; z <= 50; z++) {
//             seat += "<td class='seat' title=" + z + " onclick='seatNumber(" + z + ", " + i + ",2);' id='E" + z + "L" + i + "'></td>"
//             // counter++;
//         }
//         seat += "</tr>"
//     }
//     seat += "</tbody>"
//     map2.innerHTML = seat;

// }


function createSeatMap2() {

    class Rect {
        constructor(size="", coordinates="", seat="" ){
            this.size = size;
            this.coordinates = coordinates;
            this.seat = seat;
        }
        set setSize(size){
            [this.width, this.height] = [ this.size[0], this.size[1]];
            this.size = size;
        }
        get getSize() {
            return [this.width ,this.height] = [ this.size[0], this.size[1]];
        }
        set setCoordinates(coordinates){
            this.coordinates = coordinates;
            [this.x ,this.y] = [ this.coordinates[0], this.coordinates[1]];
        }
        get getCoordinates() {
            return [this.x ,this.y] = [ this.coordinates[0], this.coordinates[1]];
        }
        set setSeat(seat){
          this.seat = seat;
         [this.number,this.series,this.stage] = [this.seat[0],this.seat[1],this.seat[2]];
        }
        get getSeat(){
          return [this.number,this.series,this.stage] = [this.seat[0],this.seat[1],this.seat[2]];
        }
      
       draw = function(){
       this.getSeat;
       if (this.stage == "platia"){
           ctx.fillStyle = "#7602ce";
       }else ctx.fillStyle = "#10bbc7"; 
       this.getCoordinates;
       this.getSize;
       ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let ctx = document.querySelector("#canvas").getContext("2d");
let size = [10,20];
let nextDrawX = 0;
let nextDrawY = 0;
let coordinates = [nextDrawX,nextDrawY];
let r = new Rect(size,coordinates,"");
for (i = 1; i <= 10; i++) {
    for (z = 1; z <= 50; z++) {
        let seat = [z,i,"platia"];
        r.setSeat = seat;
        r.draw();
        r.getCoordinates;
        r.getSize;
        nextDrawX = r.x+r.width+1;
        r.setCoordinates = [nextDrawX, nextDrawY];
    }
    r.draw();
    nextDrawY = r.y+r.height+1;
    nextDrawX = 0;
    r.setCoordinates = [nextDrawX, nextDrawY]
}

for (i = 1; i <= 5; i++) {
    for (z = 1; z <= 50; z++) {
        let seat = [z,i,"eksostis"];
        r.setSeat = seat;
        r.draw();
        r.getCoordinates;
        r.getSize;
        nextDrawX = r.x+r.width+1;
        r.setCoordinates = [nextDrawX, nextDrawY];
    }
    r.draw();
    nextDrawY = r.y+r.height+1;
    nextDrawX = 0;
    r.setCoordinates = [nextDrawX, nextDrawY]
}


}
createSeatMap2();