const featureFeed = document.querySelector("#row");
const page =  window.location.href;


let titles = Object.keys(shows);

titles.forEach(function (title) {

    let feature = document.createElement('div');
    feature.classList.add('feature');
    feature.classList.add('col-12');
    feature.classList.add('col-lg-4');
    feature.classList.add('p-3');
    featureFeed.appendChild(feature);

    if (!page.includes('reservation')){
        let div = document.createElement('div');
        div.classList.add('dates');
        div.innerHTML = shows[title].mounth;
        feature.appendChild(div);
    }

    div = document.createElement('div');
    div.classList.add('feature-photo');
    div.style.backgroundImage = "url(" + shows[title].photo + ")";
    feature.appendChild(div);

    div = document.createElement('div');
    div.classList.add('room');
    div.innerHTML = shows[title].room;
    feature.appendChild(div);

    div = document.createElement('div');
    div.classList.add('title');
    if (!page.includes('reservation')){
    div.innerHTML = '<a href="play.html?'+title+'">'+shows[title].name+'</a>';
    }else {
        div.classList.add(title);
        div.innerHTML = shows[title].name;
    }
    feature.appendChild(div);
    console.log(shows[title]);

    div = document.createElement('div');
    div.classList.add('composer');
    div.innerHTML = shows[title].composer;
    feature.appendChild(div);

});

if (titles.length > 3) {
    button = document.createElement('button');
    button.classList.add('sticky');
    button.innerHTML = "Περισσότερα <span>> </span>"
    let featurefeed = document.querySelector("#feature-feed");
    featurefeed.appendChild(button);
}


