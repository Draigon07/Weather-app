
const APIKey = '9af3af65b3228592f592ccbe93f8720e';

const fetchData = (p)=>{
    const {latitude, longitude} = p.coords;
      fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKey}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
}


const setWeatherData = (data)=>{
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp + 'º',
        date: getDate()
    }
    
    Object.keys(weatherData).forEach(key =>{
        document.getElementById(key).textContent = `${weatherData[key]}`
    })
    
}

const getDate = ()=>{
    let date = new Date();
    return `${date.getDate()}-${+ (date.getMonth() + 1)}-${date.getFullYear()}`
}


const onload = ()=>{
    navigator.geolocation.getCurrentPosition(fetchData)
}