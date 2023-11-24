let click = document.querySelector("button");
let info = document.querySelector(".tempinfo");
let Humidity = document.querySelector(".Humidity");
let cloud = document.querySelector(".cloud");
let icon = document.querySelector("img");
let feellike = document.querySelector(".feeltemp");
let wind = document.querySelector(".wind");
let pressure = document.querySelector(".Pressure");
let uvindex = document.querySelector(".maxuv");
let uv  = document.querySelector(".uv");
let time = document.querySelector(".time");
let city = document.querySelector(".city");
let region = document.querySelector(".region");
let country = document.querySelector(".country");
let cloudper = document.querySelector(".Cloudper");
let Visibility = document.querySelector(".Visibility");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
let sunrise = document.querySelector(".Sunrise");
let sunset = document.querySelector(".Sunset");
let output = document.querySelector(".output");
let input1 = document.querySelector("input");
let load = document.querySelector(".load")
let cityandcountry = document.querySelector(".cityandcountry");
function result(){
    output.style.display = "none";
    cityandcountry.style.display = "none";
    load.style.display = "flex";
    let input = input1.value
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=daca23b2b490462c850105618230511&q=${input}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        if (input = data.location.name) {
                output.style.display = "flex";
                cityandcountry.style.display = "block";
                load.style.display = "none";
            info.innerHTML = data.current.temp_c + `&degC`;
            Humidity.innerHTML = data.current.humidity;
            cloud.innerHTML = data.current.condition.text;
            icon.src = data.current.condition.icon;
            feellike.innerHTML = data.current.feelslike_c + `&degC`;
            wind.innerHTML =  data.current.wind_dir + " " + data.current.wind_kph + " km/h";
            pressure.innerHTML = data.current.pressure_mb + "mb";
            uvindex.innerHTML = data.current.uv + " ";
            time.innerHTML = data.location.localtime;
            city.innerHTML = data.location.name;
            region.innerHTML = data.location.region;
            country.innerHTML = data.location.country;
            cloudper.innerHTML = data.current.cloud + '%';
            Visibility.innerHTML = data.current.vis_km + "km/h";
            min.innerHTML = data.forecast.forecastday[0].day.mintemp_c + `&degC`;
            max.innerHTML = data.forecast.forecastday[0].day.maxtemp_c + `&degC`;
            sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise;
            sunset.innerHTML = data.forecast.forecastday[0].astro.sunset;
            if (0 < data.current.uv && data.current.uv < 3) {
                uv.innerHTML = " " + "(Low)";
            }
            else if (3 <= data.current.uv && data.current.uv < 6) {
                uv.innerHTML = " " + "(Moderate)";
            }
            else if (6 <= data.current.uv && data.current.uv < 8) {
                uv.innerHTML = " " + "(High)";
            }
            else if (8 <= data.current.uv && data.current.uv < 11) {
                uv.innerHTML = " " + "(Very High)";
            }
            else if (11 <= data.current.uv) {
                uv.innerHTML = " " + "(Extreme)";
            }
        }
    })
    .catch(function(Error){
        alert("Please enter a valid location")
    })
}
click.addEventListener("click", result)
input1.addEventListener("change", result)
