const request = require('request');
const fs = require('fs');

const geocode = (address,callback) => {
    const url_geocode = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXJhZjQ4ODQiLCJhIjoiY2tjOWFjOWppMGppdTJ5cGZ3dG8zdjAxZCJ9.4VI9TOA8ZLk9_kT1v8xldg&limit=1`

    
    request({url : url_geocode, json : true}, (error,response) => {
        // console.log(response.body.features[0].center[0]);
        if (error) {
            callback("No NetWork Connection",undefined) 
        }

    else if (response.body.features.length === 0) {
        callback('No Data Found In This Search Criteria. Try Again',undefined) 
    }
    else{

        const response_to_str = JSON.stringify(response)
         fs.writeFileSync('apidata.json',response_to_str)

        const data = {
            latitude : response.body.features[0].geometry.coordinates[0],
            longitude : response.body.features[0].geometry.coordinates[1],
            location : response.body.features[0].place_name,
        }
            callback(undefined,data)
    }
    })
}

module.exports = geocode