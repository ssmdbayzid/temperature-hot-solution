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

const cityInnerText = (id, text, isAdd) => {
    if(isAdd == true){
      document.getElementById(id).innerText = text;  
    }
    else{
        document.getElementById(id).innerText = text;
    }
    

}

const displayTempareture = tempareture => {
    console.log(tempareture);
    cityInnerText('cityName', tempareture.name, true);
    cityInnerText('temp', tempareture.main.temp, false);
    
    /* const city = document.getElementById('cityName'); this is type 1
    city.innerText = tempareture.name;
    */
}