
const APIKey = '9af3af65b3228592f592ccbe93f8720e';

const fetchData =  async(p)=>{
    const {latitude, longitude} = p.coords;
    try{
        const datos = await axios(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKey}`)
        const data =  datos.data;
        const weather = await setWeatherData(data)
        return weather
          
    }catch(e){
        console.log(e)

    }

}


const setWeatherData = async (data)=>{
    try{
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


    }catch(e){
        console.log(e)

    }
    }

   

    
   
    


const getDate = ()=>{
    let date = new Date();
    return `${date.getDate()}-${+ (date.getMonth() + 1)}-${date.getFullYear()}`
}


const onload =  ()=>{
       return navigator.geolocation.getCurrentPosition(fetchData)    
}