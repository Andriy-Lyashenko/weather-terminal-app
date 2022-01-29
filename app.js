const geoCode = require('./utils/geocode');
const getWeather = require('./utils/getWeather');

geoCode('Boston', (err, data)=> {
    if(err){
        return console.log(err)
    }
    const {lon, lat} = data;

    getWeather(lon, lat, (err, data)=> {
        if (err){
            return console.log(err)
        }
        const { temperature, feelslike, weather_descriptions } = data;
        console.log(`${weather_descriptions}. It's ${temperature} temperature and feels like ${feelslike}`)
    })
})
