// EVENTOS


document.addEventListener('keypress', function (event) {

    if (event.key === 'Enter') {

        clickButton()
    }

})

// Função para obter a previsão do tempo.

const key = `f5bf7dba1710e8f7558a1ffeae020016`
const apiCountryURL = `https://www.countryflagicons.com/SHINY/64/`



function putDataScreen(data) {


    document.querySelector("#city").innerHTML = data.name
    document.querySelector(".temperature-max").innerHTML = parseInt(data.main.temp_max) + "°C"
    document.querySelector(".weather-description").innerHTML = data.weather[0].description
    document.querySelector(".title-city img").src = "https://www.countryflagicons.com/SHINY/24/" + data.sys.country + ".png"
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    document.querySelector(".humidity span").innerHTML = data.main.humidity + "%"
    document.querySelector("#wind span").innerHTML = data.wind.speed + " km/h"
    document.querySelector("#box-middle").classList.remove("hide")

    setBackground(data)
}




async function searchCity(city) {
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city + ",BR" +
        "&appid=" +
        key +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())

    if (data.cod === "404") {

        data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=" +
            key +
            "&lang=pt_br" +
            "&units=metric"
        )
            .then(resposta => resposta.json())


    } if (data.cod === "404") {
        document.querySelector(".alert").innerHTML = "Cidade não encontrada!"
    }
    else {

        document.querySelector(".alert").innerHTML = ""
        putDataScreen(data)

    }


}

function clickButton() {
    const city = document.querySelector(".input-city").value

    if (city === "") {

        document.querySelector(".alert").innerHTML = "Você não digitou nenhuma cidade"

    } else {

        document.querySelector(".alert").innerHTML = ""
        searchCity(city)
    }

}


// função das horas


function timeLocal() {

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;


    document.querySelector(".hours").innerHTML = hr
    document.querySelector(".minutes").innerHTML = min
    document.querySelector(".seconds").innerHTML = s

}


setInterval(timeLocal, 1000)


// Função para obter a imagem de acordo com o tempo da cidade e definir como plano de fundo
function setBackground(data) {

    idBg = data.weather[0].id
    iconBg = data.weather[0].icon


    if (idBg == '800' && iconBg == "01d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/15639201/pexels-photo-15639201/free-photo-of-predios-edificios-crepusculo-cair-da-noite.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '800' && iconBg == "01n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1482777/pexels-photo-1482777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '200' || idBg == '201' || idBg == '202' && iconBg == "11d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2080964/pexels-photo-2080964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '200' || idBg == '201' || idBg == '202' && iconBg == "11n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/13520675/pexels-photo-13520675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '211' || idBg == '212' || idBg == '221' && iconBg == "11d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '211' || idBg == '212' || idBg == '221' && iconBg == "11n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '230' || idBg == '231' || idBg == '232' && iconBg == "11d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2290328/pexels-photo-2290328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '230' || idBg == '231' || idBg == '232' && iconBg == "11n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1906932/pexels-photo-1906932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '300' || idBg == '301' || idBg == '302' && iconBg == "09d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2080964/pexels-photo-2080964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '300' || idBg == '301' || idBg == '302' && iconBg == "09n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/13520675/pexels-photo-13520675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '310' || idBg == '311' || idBg == '312' || idBg == '321' && iconBg == "09d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '310' || idBg == '311' || idBg == '312' || idBg == '321' && iconBg == "09n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '500' || idBg == '501' || idBg == '520' || idBg == '521' && iconBg == "10d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2080964/pexels-photo-2080964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '500' || idBg == '501' || idBg == '520' || idBg == '521' && iconBg == "10n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/13520675/pexels-photo-13520675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '502' || idBg == '503' || idBg == '312' || idBg == '321' || idBg == '522' && iconBg == "09d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '502' || idBg == '503' || idBg == '312' || idBg == '321' || idBg == '522' && iconBg == "09d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '801' && iconBg == "02d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1450369/pexels-photo-1450369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '801' && iconBg === "02n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '802' && iconBg == "03d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '802' && iconBg == "03n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/7386650/pexels-photo-7386650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '804' && iconBg == "04d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/6398587/pexels-photo-6398587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '804' && iconBg == "04n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/16790142/pexels-photo-16790142/free-photo-of-istambul-construcao-predio-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    } 
    if (idBg == '701' && iconBg == "50d" || iconBg == "50n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/158672/fog-forest-mountain-world-clouds-158672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (idBg == '721' && iconBg == "50d" || iconBg == "50n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    } 
    
}

// Função para obter a imagem aleatória da API do Unsplash e definir como plano de fundo
async function setRandomBackground() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var imageUrl = response.urls.regular;
            document.body.classList.add("background-image");
            document.body.style.backgroundImage = "url('" + imageUrl + "')";
        }
    };
    xhttp.open("GET", "https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=32rPFNCK5Cr8gt5v6ro4c02N7NrxDnYWssB7VbTrfHY", true);
    xhttp.send();
}

// Chama a função ao carregar a página
window.onload = setRandomBackground(); 