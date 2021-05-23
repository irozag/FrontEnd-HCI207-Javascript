
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
    let ctx = document.querySelector("#canvas").getContext("2d");
    class Rect {
        constructor(size = "", coordinates = "", seat = "") {
            this.size = size;
            this.coordinates = coordinates;
            this.seat = seat;
            // this.rect = [ this.size, this.coordinates,this.seat];
        }
        set setSize(size) {
            [this.width, this.height] = [this.size[0], this.size[1]];
            this.size = size;
            // this.rect[0]=coordinates;
        }
        get getSize() {
            return [this.width, this.height] = [this.size[0], this.size[1]];
        }
        set setCoordinates(coordinates) {
            this.coordinates = coordinates;
            // this.rect[1]=coordinates;
            [this.x, this.y] = [this.coordinates[0], this.coordinates[1]];
        }
        get getCoordinates() {
            return [this.x, this.y] = [this.coordinates[0], this.coordinates[1]];
        }
        set setSeat(seat) {
            this.seat = seat;
            // this.rect[2]=seat;
            [this.number, this.series, this.stage] = [this.seat[0], this.seat[1], this.seat[2]];
        }
        get getSeat() {
            return [this.number, this.series, this.stage] = [this.seat[0], this.seat[1], this.seat[2]];
        }

        get getRect() {
            return [this.size, this.coordinates, this.seat];
        }

        draw = function () {
            this.getSeat;
            if (this.stage == "platia") {
                ctx.fillStyle = "#7602ce";
            } else ctx.fillStyle = "#10bbc7";
            this.getCoordinates;
            this.getSize;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        hasClick = function (x, y) {
            // console.log(x);
            // console.log(y);
            this.getCoordinates;
            this.getSize;
            // console.log(this.x);
            if (x >= this.x && x <= this.width && y >= this.y && y <= this.height){
                return true;
            }else return false;
        }
    }

    const size = [10, 20];
    let nextDrawX = 0;
    let nextDrawY = 0;
    let coordinates = [nextDrawX, nextDrawY];
    let rects = [];
    for (i = 1; i <= 10; i++) {
        for (z = 1; z <= 50; z++) {
            let seat = [z, i, "platia"];
            var r = new Rect(size, coordinates, seat);
            r.draw();
            rects.push(r);
            nextDrawX = r.x + r.width + 1;
            coordinates = [nextDrawX, nextDrawY];
        }
        nextDrawY = r.y + r.height + 1;
        nextDrawX = 0;
        coordinates = [nextDrawX, nextDrawY];
    }

    // nextDrawY = nextDrawY+10;

    for (i = 1; i <= 5; i++) {
        for (z = 1; z <= 50; z++) {
            let seat = [z, i, "eksostis"];
            r = new Rect(size, coordinates, seat);
            r.draw();
            rects.push(r);
            nextDrawX = r.x + r.width + 1;
            coordinates = [nextDrawX, nextDrawY];
        }
        nextDrawY = r.y + r.height + 1;
        nextDrawX = 0;
        coordinates = [nextDrawX, nextDrawY];
    }
    return rects;
}

function getClickedRect(x, y, rects) {
    console.log("cord " + x + " and " + y);
    return rects.find((rect) => {
        // let test = rect.coordinates;
        // rect.getSize;
        // let test = rect.hasClick(x, y);
        // console.log(test);
        return rect.hasClick(x, y);
    });
       
}

let drawedRects = createSeatMap2();
// console.log(drawedRects);

let canvas = document.querySelector("#canvas");
canvas.addEventListener("mousedown", (event) => {
    const clickedX = event.offsetX;
    const clickedY = event.offsetY;
    // console.log(clickedX);
    const clickedRect = getClickedRect(clickedX, clickedY, drawedRects);
    // let seat = clickedRect.seat;
   
})

