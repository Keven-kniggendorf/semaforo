let redBtn = document.getElementById('red')
let yellowBtn = document.getElementById('yellow')
let greenBtn = document.getElementById('green')
let autoBtn = document.getElementById('automatic')
let offBtn = document.getElementById('off')
let trafficlight = document.getElementById('traffic')

redBtn.addEventListener('click', function(){
    trafficlight.src = 'red.png' 
    
})


yellowBtn.addEventListener('click', function(){
    trafficlight.src = 'yellow.png'
    
})

greenBtn.addEventListener('click', function(){
    trafficlight.src = 'green.png'
    
})

offBtn.addEventListener('click', function(){
    trafficlight.src = 'off.png'
    clearInterval(lightInterval)
})


let arr = ['red.png', 'yellow.png', 'green.png']

let count = 0


function counter(){
    trafficlight.src = arr[count]
    if(count >= 2){
        count = 0
    } else {
        count++
    }
}

autoBtn.addEventListener('click', function(){
    lightInterval = setInterval(() => {
        counter()
    }, 1500);
})