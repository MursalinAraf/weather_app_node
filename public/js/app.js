console.log('Client side javascript file is loaded!')


const weatherform = document.querySelector('form');

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const weatherinput = document.getElementById('searchinp').value;
    const weatherurl = `/weather?address=${weatherinput}`
    const address = document.getElementById('address')
    const temperature = document.getElementById('temperature')
    const cloud = document.getElementById('cloud')
    const humidity = document.getElementById('humidity')
    const pressure = document.getElementById('pressure')
    const windspeed = document.getElementById('windspeed')
    const ozone = document.getElementById('ozone')
    const icon = document.getElementById('icon')
    const dailycloud = document.getElementById('dailycloud')
    const highesttemp = document.getElementById('highesttemp')
    const lowesttemp = document.getElementById('lowesttemp')
    const dailyhumidity = document.getElementById('dailyhumidity')
    const dailypressure = document.getElementById('dailypressure')
    const dailywindspeed = document.getElementById('dailyozone')
    const dailyozone = document.getElementById('dailyozone')

    address.textContent = 'Loading...'
    // second.textContent = 'Loading...'

fetch(weatherurl).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            address.textContent = data.error
            temperature.textContent = ''
        }
        else{
            console.log(data)
            address.textContent = data.address.toUpperCase();
            temperature.textContent = data.forecast.temperature
            cloud.textContent = data.forecast.cloud
            pressure.textContent = data.forecast.pressure
            windspeed.textContent = data.forecast.windspeed
            humidity.textContent = data.forecast.humidity
            ozone.textContent = data.forecast.ozone
            icon.textContent = data.forecast.icon
            dailycloud.textContent = data.forecast.dailycloud
            highesttemp.textContent = data.forecast.highesttemp
            lowesttemp.textContent = data.forecast.lowesttemp
            dailyhumidity.textContent = data.forecast.dailyhumidity
            dailypressure.textContent = data.forecast.dailypressure
            dailywindspeed.textContent = data.forecast.dailywindspeed
            dailyozone.textContent = data.forecast.dailyozone

            if (data.forecast.temperature > 27) {
                document.body.style.backgroundImage = "url('/img/sunny.jpg')"
            }
            if (data.forecast.temperature < 27) {
                document.body.style.backgroundImage = "url('/img/rainy.jpg')"
            }
        }

    })
})


})