function ready(){
    if(document.readyState == 'complete'){
        main()
    }else{
        setTimeout(ready, 100)
    }
}
ready()


function time(){
    
    var hours = document.getElementById('hours')
    var minutes = document.getElementById('minutes')
    var seconds = document.getElementById('seconds')
    var hours1 = document.getElementById('hours1')
    var minutes1 = document.getElementById('minutes1')
    var seconds1 = document.getElementById('seconds1')

    var timers = new Date(4044, 5, 25, 12, 30, 01, 00)
    var time = new Date()
    var date1 = new Date(timers - time)

    setInterval(function() {
        let time = new Date()
        let date1 = new Date(timers - time)
        currentData(time, seconds, minutes, hours)
        currentData(date1, seconds1, minutes1, hours1)
    }, 1000)
 
    hours.innerHTML = time.getHours()
    minutes.innerHTML = time.getMinutes()
    hours1.innerHTML = date1.getHours()
    minutes1.innerHTML = date1.getMinutes()
    
    
    function currentData(time, seconds, minutes, hours){
        seconds.innerHTML = time.getSeconds().toString()
        if(seconds.innerHTML == 0 || seconds.innerHTML == 59 ){
            minutes.innerHTML = time.getMinutes()
            if(minutes.innerHTML == 0 || seconds.innerHTML == 59){
                hours.innerHTML = time.getHours(minutes)
            }
        }
    }
}



function main(){
    time()

    var ball = document.querySelector('.circle')
    var ball2 = document.querySelector('.ball')
    var addP = true;
    var addU = true;
    var addBL = true
    var addBU = true

    setInterval(function() {
        moveB(ball2, 15);
    }, 100)

    setInterval(function() {
        move(ball);
    }, 50)


    function move(object){
        if(addP){
            object.style.left = (parseFloat(object.style.left) + .5) + 'vw'
            if(parseFloat(object.style.left) > 85){
                addP = false
            }
        }else{
            object.style.left = (parseFloat(object.style.left) - .5) + 'vw'
            if(parseFloat(object.style.left) < 0){
                addP = true
            }
        }

        if(addU){
            object.style.top = (parseFloat(object.style.top) + 1) + 'vh'
            if(parseFloat(object.style.top) > 85){
                addU = false
            }
        }else{
            object.style.top = (parseFloat(object.style.top) - 1) + 'vh'
            if(parseFloat(object.style.top) < 0){
                addU = true
            }
        }
    }

    function moveB(object, max){

        if(addBU){
            if(parseFloat(object.style.left) > ( max/ 2)){
                if(parseFloat(object.style.top) > max - parseFloat(object.style.left) + (max / 2)){
                    addBU = false
                }else{
                    object.style.top = parseFloat(object.style.top) + 1 + 'rem'
                }
            }else{
                if(parseFloat(object.style.top) >  parseFloat(object.style.left) + (max / 2)){
                    addBU = false
                }else{
                    object.style.top = parseFloat(object.style.top) + 1 + 'rem'
                }
            }

        }else{
            if(parseFloat(object.style.left) > (max / 2)){
                if(parseFloat(object.style.top) < parseFloat(object.style.left) - (max / 2)){
                    addBU = true
                }else{
                    object.style.top = parseFloat(object.style.top) - 1.1 + 'rem'
                }
            }else{
                if(parseFloat(object.style.top) < max - parseFloat(object.style.top) - (max / 2)){
                    addBU = true
                }else{
                    object.style.top = parseFloat(object.style.top) - 1.1 + 'rem'
                }
            }
        }

        if(addBL){
            if(parseFloat(object.style.top) > (max / 2)){
                if(parseFloat(object.style.left) > (max - parseFloat(object.style.top) + (max / 2))){
                    addBL = false
                }else{
                    object.style.left = parseFloat(object.style.left) + 1.1 + 'rem'
                }
            }else{
                if(parseFloat(object.style.left) > parseFloat(object.style.top) + (max / 2)){
                    addBL = false
                }else{
                    object.style.left = parseFloat(object.style.left) + 1.1 + 'rem'
                }
            }
        }else{
            if(parseFloat(object.style.top) > 6){
                if(parseFloat(object.style.left) <  parseFloat(object.style.top) - (max / 2)){
                    addBL = true
                }else{
                    object.style.left = parseFloat(object.style.left) - 1 + 'rem'
                }
            }else{
                if(parseFloat(object.style.left) < (max /2) - parseFloat(object.style.top)){
                    addBL = true
                }else{
                    object.style.left = parseFloat(object.style.left) - 1 + 'rem'
                }
            }
            
        }

    }
}