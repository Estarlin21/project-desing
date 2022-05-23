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
    var options = document.querySelectorAll('.option-3 p');
    
    options.forEach(option => {
        option.addEventListener('click', function(){
            searchHtml(option, options, 'active-1')
        })
    });

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

function searchHtml(option, options, classM){
    options.forEach(optio => {
        lateralChange(true, optio, 'active-1')
        let item = document.querySelector('.' + optio.innerHTML)
        lateralChange(false, item, 'dnone')
    });

    
    item = document.querySelector('.' + option.innerHTML)
    lateralChange(true, item, 'dnone')
    lateralChange(false, option, 'active-1')
}


