const request = require('request');

const forecast = (lat,long,callback) => {

    const url_forecast = `https://api.darksky.net/forecast/4db5b1aea736eefaa3d80e30cc0169df/${long},${lat}?units=si`
    request({url : url_forecast, json : true}, (err,response) => {

        if (err) {
        
            callback("No Network Connection",undefined);    
        }
        else if (response.body.code == 400) {
        
            callback(undefined,response.body.error)
        }

        else{
         
            const data = {
                timezone : response.body.timezone,
                temperature : response.body.currently.temperature,
                cloud : response.body.currently.summary
            }
            callback(undefined,`In ${data.timezone} Current Temperature Is ${data.temperature} degree celsius And Area Is In ${data.cloud}`)
        }


    
    })

}

module.exports = forecast