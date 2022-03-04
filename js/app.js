/* API Link:  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */


const loadData = () => {
    const API_KEY = `8199be7fd98dce7bba176bc002888350`;
    const city = document.getElementById('city').value;

    const url   = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//  console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(city => displayTempareture(city))
}

const cityInnerText = (id, text) => {
      document.getElementById(id).innerText = text;  
}

const displayTempareture = tempareture => {
      /* const city = document.getElementById('cityName'); this is type 1
    city.innerText = tempareture.name;
    */
    console.log(tempareture);
    cityInnerText('cityName', tempareture.name);
    cityInnerText('temp', tempareture.main.temp);
    cityInnerText('weather', tempareture.weather[0].main);

    // set attribute for image icon
    const url = `http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`

    const imgIcon = document.getElementById('imageIcon');

    imgIcon.setAttribute('src', url);


}