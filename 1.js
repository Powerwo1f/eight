let element = document.body.appendChild(document.createElement('div'))
let counterOfSeconds = document.body.appendChild(document.createElement('div'))

function printSeconds (seconds) {
    setTimeout(function recurs(){
        counterOfSeconds.innerText = seconds
        element.innerText = new Date().toLocaleTimeString()
        seconds--
        if (seconds !== 0) {
            setTimeout(recurs,1000)
        }
    })
}
printSeconds(100)