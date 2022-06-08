
const pageReadyI = setInterval(pageReady, 1000)

function pageReady(){
    if(document.readyState == 'complete'){
        main()
        clearInterval(pageReadyI)
    }
}

function main(){
    var sections = document.querySelectorAll('.sections')
    var playVideo
    // video player
    sections.forEach((section) => {
        section.addEventListener('click', () => { 
            changeWidth(section, sections)
            changeClass(section, sections, 'play', 'paused')
            if(playVideo != undefined){
                playVideo.pause()
            }
            if(section.firstElementChild != null){
                if(section.firstElementChild.paused){
                    playVideo = section.firstElementChild
                    section.firstElementChild.play()
                }else{
                    section.firstElementChild.pause()
                }
            }
        })
    })

    // menu drop

    var menu = document.querySelector('#menu')

    var menuTimeout
    menu.onmouseover = () => {
        menu.classList.remove('dashe-menu-1')
        if(menuTimeout != undefined){
            clearTimeout(menuTimeout)
        }
    }

    menu.onmouseout = () => {
        menuTimeout = setTimeout(() => {
            menu.classList.add('dashe-menu-1')
        }, 3000)
    }

    // user

    var user = document.querySelector('.user')
    var userOptions = document.querySelector('.options-user')

    user.onclick = () => {
        if(userOptions.classList.contains('dnone')){
            userOptions.classList.remove('dnone')
        }else{
            userOptions.classList.add('dnone')
        }
    }


}

// changeClass
function changeClass(item, items, classAdd, classRemove){
    items.forEach(ite => {
        if(ite.classList.contains(classAdd)){
            ite.classList.replace(classAdd, classRemove)
        }
    })

    if(item.classList.contains(classRemove)){
        item.classList.replace(classRemove, classAdd)
    }else{
        item.classList.replace(classAdd, classRemove)
        console.log('add')
    }
}

// change Width
function changeWidth(item, items){

    if(item.style.width != '95%'){

        items.forEach((section) =>{ 
            section.style.width = '26rem'
            section.style.height = '15.75rem'
        })

        item.style.width = '88vw'
        item.style.height = '49.5vw'
    }
}