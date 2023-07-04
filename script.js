// EVENTOS


document.addEventListener('keypress', function(event){

        if (event.key === 'Enter') {

            clickButton ()
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

    if (city === "" ){
        
        document.querySelector(".alert").innerHTML = "Você não digitou nenhuma cidade"

    } else {

        document.querySelector(".alert").innerHTML = ""
    searchCity(city)
    }

}


// função das horas


function timeLocal () {

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


setInterval (timeLocal, 1000)


// Função para obter a imagem de acordo com o tempo da cidade e definir como plano de fundo
function setBackground(data) {
    
    description = data.weather[0].icon


    if (description === "01d") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (description === "01n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3799176/pexels-photo-3799176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (description === "02d" || description === "02n" ) {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/ver-ninguem-luz-do-sol-natureza-linda_1232-4114.jpg?w=740&t=st=1688484322~exp=1688484922~hmac=0cb192ab5057ad2836b8d579185524ffc9a0007ed724922a47743121d6ed2f96')";
    }
    if (description === "03d" || description === "03n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/16697970/pexels-photo-16697970/free-photo-of-nuvens-tiro-com-drone-colina-monte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (description === "09d" || description === "09n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (description === "10d" || description === "10n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/chuva-fora-das-janelas-da-vila_1321-908.jpg?w=740&t=st=1688485781~exp=1688486381~hmac=1ec41c4011ba490ef799c705f366570ec407da2c0ac24603e19f6c97126968b4')";
    }
    if (description === "11d" || description === "11n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (description === "13d" || description === "13n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/953626/pexels-photo-953626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (description === "50d" || description === "50n") {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (description === "04d" || description === "04n" ) {
        document.body.classList.add("background-image");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2738221/pexels-photo-2738221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }

     
 }

 // Função para obter a imagem aleatória da API do Unsplash e definir como plano de fundo
 async function setRandomBackground() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
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
window.onload = setRandomBackground;