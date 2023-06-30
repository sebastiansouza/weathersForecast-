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

document.addEventListener('keypress', function(event){

        if (event.key === 'Enter') {

            clickButton ()
        }
 


}) 






// Função para obter a previsão do tempo.

const key = `f5bf7dba1710e8f7558a1ffeae020016`



function putDataScreen(data) {


    document.querySelector(".title-city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperature-max").innerHTML = "Temperatura atual " +  Math.floor(data.main.temp_max) + "°C"
    document.querySelector(".weather-description").innerHTML = data.weather[0].description
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    document.querySelector(".humidity").innerHTML = "Umidade do ar: " + data.main.humidity + "%"
   


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


   putDataScreen(data)

        }

        
}

function clickButton() {
    const city = document.querySelector(".input-city").value

    if (city === "" ){
        document.querySelector(".alert").innerHTML = "Você não digitou nenhuma cidade"

    } else {



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


