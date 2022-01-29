const request = require('request');

const getWeather = (lon, lat, callback ) => {
    const url = `http://api.weatherstack.com/current?access_key=a4fa2b4ee39878f346f98eafa1b7d9b1&query=${lat},${lon}&units=m`

    request({
        url,
        json: true
    }, (err, resp)=> {
        if(err){
            callback('Unable to connect to web service', undefined)
        }else if (resp.body.error) {
            callback('Enable to find loccation', undefined)

        } else {
            const { temperature, feelslike, weather_descriptions } = resp.body.current;
            callback(undefined, {
                temperature,
                feelslike,
                weather_descriptions
            })
        }
    })
}


module.exports = getWeather;