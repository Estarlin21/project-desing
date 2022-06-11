
const pageReadyI = setInterval(pageReady, 1000)

function pageReady(){
    if(document.readyState == 'complete'){
        main()
        clearInterval(pageReadyI)
    }
}


var currentVideo
var videoStatus1
function main(){


    // video player
    var sections = document.querySelectorAll('.sections')
    sections.forEach((section) => {
        if(section.childElementCount > 0){
            section.addEventListener('click', () => {
                currentVideo = videoPlayer(section, sections)
            })
        }
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

function removeEventVideo(){
    currentVideo.play.removeEventListener('click', pause)
    currentVideo.fullScreen.removeEventListener('click', fullScreen)
}

// video player
function videoPlayer(item, items){
    
    changeWidth(item, items)
    changeClass(item, items, 'play', 'paused')
    var newCurrent = new video(item)

    if(currentVideo == undefined){
        currentVideo = newCurrent
        pause()
        addEventVideo()
    }
    
    if(currentVideo.audio != newCurrent.audio){
        removeEventVideo()
        
        currentVideo.video.pause()
        currentVideo = newCurrent
        pause()
        addEventVideo()
    }
    
    function addEventVideo(){
        currentVideo.play.addEventListener('click', pause)
        currentVideo.video.addEventListener('ended', pause)
        currentVideo.fullScreen.addEventListener('click', fullScreen)
        videoStatus1 = setInterval(videoStatus, 100)
    }

    function removeEventVideo(){
        currentVideo.play.removeEventListener('click', pause)
        currentVideo.video.removeEventListener('ended', pause)
        currentVideo.fullScreen.removeEventListener('click', fullScreen)
        clearInterval(videoStatus1)
    }

    return currentVideo
}
    
// PlayPausa
function pause(){
    videoStatus1 = setTimeout(videoStatus, 10)
    var items = document.querySelectorAll('.sections')
    
    if(currentVideo.video.paused){
        currentVideo.video.play()
        currentVideo.play.classList.remove('PlayB')
    }else{
        currentVideo.play.classList.add('PlayB')
        currentVideo.video.pause()
    }
}

function videoStatus(){
    let status = currentVideo.video.currentTime
    let duration = currentVideo.video.duration
    let playStatus = status * 100 / duration + '%'
    currentVideo.status.firstElementChild.style.width = playStatus
}

function fullScreen(){
    if(currentVideo.video.requestFullscreen){
        currentVideo.video.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
}




class video{
    constructor(item){

        this.fullScreen = this.search(item, 'fullScreen')
        this.audio = this.search(item, 'muted')
        this.status = this.search(item, 'videoStatus')
        this.play = this.search(item, 'PauseB')
        this.item = item
        this.video = item.firstElementChild
    }

    search(item, classN){

        var videoMenus = document.querySelectorAll('.videoMenu')
        videoMenus.forEach(videoMenu => {
            if(videoMenu.parentElement.parentElement == item){
                for (let elementN = 0; elementN < videoMenu.children.length; elementN++) {
                    if(videoMenu.children[elementN].classList.contains(classN)){
                        this.returnItem = videoMenu.children[elementN]
                    }
                }
            }
        })

        return this.returnItem
    }
}
