let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
window.addEventListener("load" ,()=>{

    let long;
    let lat;

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position)=>
        {

            long = position.coords.longitude;
            lat = position.coords.latitude;
            // const proxy ="https://cors-anywhere.herokuapp.com/";

            const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=935de5e74cb7a0fe1fa8215d420dcbd1`

            fetch(api).then((response)=>{
            
                return response.json();
            })
            .then (data =>{
                const{name} = data;
                const{feels_like} =data.main;
                const{id,main}= data.weather[0];

                loc.textContent = name;
                climate.textContent = main;
                tempvalue.textContent = Math.round(feels_like - 273);
                console.log(data);
                if(id<300 && id>200)
                {
                    tempicon.src = "https://i.ibb.co/dfrZsQ2/scattered-thunderstorms.png";
                }
                else if(id<400 && id>300)
                {
                    tempicon.src = "https://i.ibb.co/CVWc7Ht/drizzle.png";
                }
                else if(id<600 && id>500)
                {
                    tempicon.src = "https://i.ibb.co/K0pSHw8/rain.png";
                }
                else if(id<700 && id>600)
                {
                    tempicon.src = "https://i.ibb.co/h7z6mQw/snow.png";
                }
                else if(id<800 && id>700)
                {
                    tempicon.src = "https://i.ibb.co/34CFpw2/haze.png";
                }
                else if(id == 800)
                {
                    tempicon.src = "https://i.ibb.co/Sx5NftV/wind.png";
                }
                else(id<800 )
                {
                    tempicon.src = "https://i.ibb.co/MZxQhxV/cloudy.png";
                }
            })
        })
    }

})