let loc = document.getElementById('location');
let tempicon = document.getElementById('temp-icon');
let tempvalue = document.getElementById('temp-value');
let climate = document.getElementById('climate');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');





// const weatherType =(data)=>{
//         if(data.weather[0].main == "Clouds"){
//         tempicon.src = "./icons/clouds.png";
//     }
//     else if(data.weather[0].main == "Clear"){
//         tempicon.src = "./icons/sun.png";
//     }
//     else if(data.weather[0].main == "Rain"){
//         tempicon.src = "./icons/rain.png";
//     }
//     else if(data.weather[0].main == "Snow"){
//         tempicon.src = "./icons/snow.png";
//     }
//     else if(data.weather[0].main == "Thunderstorm"){
//         tempicon.src = "./icons/thunderstorm.png";
//     }
//     else if(data.weather[0].main == "Haze"){
//         tempicon.src = "./icons/haze.png";
//     }
// }
// . ask the user to allow the location to the browser and do some tasks.........



window.addEventListener("load", function(){
    if(true){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            // console.log(lat, long);

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a49ae2889d81c91dbffe5cf2e02809f8`

            fetch(
                api
            ).then(
                (response)=>{
                    return response.json()
                }
            ).then(data=>{
                // console.log(data);

                const {name} = data;
                const {temp} = data.main;
                const {id, main} = data.weather[0];

                loc.textContent = name;
                climate.textContent = main;
                tempvalue.textContent = Math.round(temp-273);
            })

                // console.log(response.json(data));
        })
    }
})




// .type the city name and get the weather details


searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const city = searchInput.value;
    getWeather(city);    
}
)

const getWeather = async (location)=>{
    try{
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a49ae2889d81c91dbffe5cf2e02809f8`

        const response = await fetch(api);
        const data = await response.json();
        console.log(data);

    locat= document.getElementById('location').innerHTML = data.name;
    tempe= document.getElementById('temp-value').innerHTML = Math.round(data.main.temp-273);
    weatherClimage= document.getElementById('climate').innerHTML = data.weather[0].main;


    if(data.weather[0].main == "Clouds"){
        tempicon.src = "./icons/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        tempicon.src = "./icons/sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        tempicon.src = "./icons/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        tempicon.src = "./icons/snow.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
        tempicon.src = "./icons/thunderstorm.png";
    }
    else if(data.weather[0].main == "Haze"){
        tempicon.src = "./icons/haze.png";
    }
    else if(data.weather[0].main == '*'){
        tempicon.src = "./icons/sun.png";
    }
    // weatherType((data.weather[0].main));




    }catch(error){
        console.log(error);
    }
}