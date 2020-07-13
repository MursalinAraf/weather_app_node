console.log('Client side javascript file is loaded!')

const url = 'http://puzzle.mead.io/puzzle'
// const weatherurl = 'http://localhost:3000/weather?address=dhaka'
// fetch(url).then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch(weatherurl).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         }
//         else{
//             console.log(data)
//         }

//     })
// })

const weatherform = document.querySelector('form');

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const weatherinput = document.getElementById('searchinp').value;
    const weatherurl = `/weather?address=${weatherinput}`
    const first = document.getElementById('first')
    const second = document.getElementById('second')

    first.textContent = 'Loading...'
    second.textContent = 'Loading...'

fetch(weatherurl).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            first.textContent = data.error
            second.textContent = ''
        }
        else{
            console.log(data)
            first.textContent = data.address
            second.textContent = data.forecast
        }

    })
})


})