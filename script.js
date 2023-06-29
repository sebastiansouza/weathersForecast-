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


// Função para obter a previsão do tempo.

const key = `f5bf7dba1710e8f7558a1ffeae020016`



function putDataScreen(data) {

    
    document.querySelector(".title-city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperature-max").innerHTML = "Max " +  Math.floor(data.main.temp_max) + "°C"
    document.querySelector(".weather-description").innerHTML = data.weather[0].description
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    document.querySelector(".humidity").innerHTML = "Umidade do ar: " + data.main.humidity + "%"
    document.querySelector(".temperature-min").innerHTML = "Min " +  Math.floor(data.main.temp_min) + "°C"


}

async function searchCity(city) {
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())



   putDataScreen(data)


}

function clickButton() {
    const city = document.querySelector(".input-city").value
    const code = document.querySelector(".state").value



    searchCity(city)

}