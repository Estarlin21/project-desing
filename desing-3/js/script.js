dom();
function dom(){
    if(document.readyState == 'complete'){
        myProgram()
    }else{
        setTimeout(dom, 100);
    }
}

function myProgram(){
    var lateral_menu = document.querySelector('.lateral-menu-1')
    lateral_menu.addEventListener('mouseover', function(){
        lateralChange(true, lateral_menu, 'hidden-p')
    })
    lateral_menu.addEventListener('mouseleave', function(){
        lateralChange(false, lateral_menu, 'hidden-p')
    })
}


function lateralChange(action, item, classM){
    if(action){
        if(item.classList.contains(classM)){
            item.classList.remove(classM)
        }
    }else{
        if(!item.classList.contains(classM)){
            item.classList.add(classM)
        }
    }
}