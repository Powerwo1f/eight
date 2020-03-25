var typeMessage = ( function () {
    let container = document.body.appendChild (document.createElement ( "h3" ))
    container.style = `color: magenta;`
    container.id = "demo"
    var index = 0
    return function ( message ) {
        setTimeout(function recurs(){
            container.textContent += message[index]
            index++
            message[index] && setTimeout(recurs,1000)
        })
    }
})()

typeMessage ( `Welcome to the hell` )