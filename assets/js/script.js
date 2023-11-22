let containerDiv = document.createElement("div");
let rowDiv = document.createElement("div");

let colDiv = [];
let cardDiv = [];
let imgTag = [];
let cardBodyDiv = [];
let capitalTag = [];
let regionTag = [];
let countryTag = []
let weatherbtn = [];
let crdHeadDiv = [];
let hTag = [];



containerDiv.setAttribute("style","margin-top: 10vh")
containerDiv.classList.add("container");
rowDiv.classList.add("row");




document.body.appendChild(containerDiv);
containerDiv.appendChild(rowDiv);





//Implementation fuctions

const weatherurl = "https://api.openweathermap.org/data/2.5/weather?";
const apikey = "ce1f6d16c3cca51a85b5704c653581c3";
const restcountriesurl = "https://restcountries.com/v3.1/all";

const getcountryWeather = async (lat, lan) =>{
    const restcountriesurl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=${apikey}`;
    const res = await fetch(restcountriesurl);
    const data = await res.json();
    alert(`${data.weather[0].main},${data.weather[0].description}`);
}

let lats=[], lans=[];

let lengthdata;

fetch(restcountriesurl).then(res=>res.json()).then((data)=> {
    console.log(data.length)
});
//console.log(lengthdata);

fetch(restcountriesurl).then(res=>res.json()).then((data)=>data.map((element, ind)=>{
    
    colDiv = document.createElement("div");
    cardDiv = document.createElement("div");
    imgTag = document.createElement("img");
    cardBodyDiv = document.createElement("div");
    capitalTag = document.createElement("p");
    regionTag = document.createElement("p");
    countryTag= document.createElement("p");
    weatherbtn = document.createElement("button");
    crdHeadDiv = document.createElement("div");
    hTag = document.createElement("h4");

    //add properties
    colDiv.classList.add("col-lg-4", "mb-5", "col-sm-10");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("style","width: 18rem");
    cardBodyDiv.classList.add("card-body");
    cardBodyDiv.setAttribute("style","text-align:center")
    capitalTag.classList.add("card-text");
    regionTag.classList.add("card-text");
    countryTag.classList.add("card-text");
    weatherbtn.setAttribute("type", "Button");
    weatherbtn.setAttribute("onclick", `getcountryWeather(${element.latlng[0]},${element.latlng[1]})`);

    //weatherbtn.addEventListener("click", mySecondFunction(element.lanlat[0], element.lanlat[1]));
    weatherbtn.classList.add("btn", "btn-outline-success");
    weatherbtn.innerText = "Click for Weather";
    hTag.innerHTML = element.name.common;
    hTag.setAttribute("style","text-align:center")

    crdHeadDiv.classList.add("card-body");
    capitalTag.innerHTML ="Capital : " + element.capital;
    regionTag.innerHTML ="Region : " + element.region;
    countryTag.innerHTML ="Country: " + element.name.common;
    imgTag.classList.add("card-header");
    imgTag.src = element.flags.svg;


    //addchild
    rowDiv.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(crdHeadDiv);
    crdHeadDiv.appendChild(hTag);
    cardDiv.appendChild(imgTag);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(capitalTag);
    cardBodyDiv.appendChild(regionTag);
    cardBodyDiv.appendChild(countryTag);
    cardBodyDiv.appendChild(weatherbtn);
  
}))
