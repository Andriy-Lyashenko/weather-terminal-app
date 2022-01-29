const request = require('request');

const geoCode = (address, callback ) => {
    const meUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW5kcmlpLWxpYXNoZW5rbzE5OTQiLCJhIjoiY2t5eWQ2NXUzMGp6NzJycGc0a2owOWtlNiJ9.9DiUO_mfCk5v2M3u29OvXw&limit=1`;

    request({
        url: meUrl,
        json: true
    }, (err, resp)=> {
        if(err){
            callback('Unable to connect to web service', undefined)
        }else if (resp.body.features.length === 0) {
            callback('Unable to connect to web service', undefined)

        } else {
            callback(undefined, {
                lat: resp.body.features[0].center[1],
                lon: resp.body.features[0].center[0],
                location: resp.body.features[0].place_name
            })
        }
    })
}


module.exports = geoCode;