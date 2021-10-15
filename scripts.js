const api={
    key: "e2b3bdab149482200a7f578d623b0078",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.searchbox'); //querySelector("#id")


searchbox.addEventListener('keypress',setQuery);

function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
     .then(weather=>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);

    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;




}
/*
*/