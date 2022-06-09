
const pageReadyI = setInterval(pageReady, 1000)

function pageReady(){
    if(document.readyState == 'complete'){
        main()
        clearInterval(pageReadyI)
    }
}

function main(){


    // video player
    var sections = document.querySelectorAll('.sections')
    var playVideo
    sections.forEach((section) => {
        section.addEventListener('click', () => { 
            changeWidth(section, sections)
            changeClass(section, sections, 'play', 'paused')
            if(section.firstElementChild != null){
                if(section.firstElementChild.paused){
                    if(playVideo != undefined){
                        playVideo.firstElementChild.pause()
                        changeClass(playVideo.lastElementChild.firstElementChild.firstElementChild, null, 'PlayB', 'PauseB')
                    }
                    playVideo = section
                    screen = playVideo.lastElementChild.firstElementChild.lastElementChild
                    section.requestFullscreen()
                    section.firstElementChild.addEventListener('ended', () => {
                        changeClass(playVideo.lastElementChild.firstElementChild.firstElementChild, null, 'PlayB', 'PauseB')
                    })
                    changeClass(playVideo.lastElementChild.firstElementChild.firstElementChild, null, 'PauseB', 'PlayB')
                    section.firstElementChild.play()
                }else{
                    changeClass(playVideo.lastElementChild.firstElementChild.firstElementChild, null, 'PlayB', 'PauseB')
                    section.firstElementChild.pause()
                }
            }else if(playVideo != undefined){
                playVideo.firstElementChild.pause()
                changeClass(playVideo.lastElementChild.firstElementChild.firstElementChild, null, 'PlayB', 'PauseB')
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

    if(items != null){
        items.forEach(ite => {
            if(ite.classList.contains(classAdd)){
                ite.classList.replace(classAdd, classRemove)
            }
        })
    }

    if(item.classList.contains(classRemove)){
        item.classList.replace(classRemove, classAdd)
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