let next = document.querySelectorAll('.next');
let back = document.querySelectorAll('.back');
let item = document.querySelectorAll('.item-2 .content-show-type-1');


function nextPage(next, classRemove){
    let items = document.querySelectorAll('.' + next + ' .child');
    let pag = document.querySelector('.' + next + ' .page');
    let pageCurrent = document.querySelectorAll('.' + next + ' .page-current');
    for (let index = items.length; index > 0; index--) {

        const item = items[index -1 ];
        
        if(!findClass(classRemove, item.classList)){
            pageCurrent.forEach(current => {
                updateClass('current-page-green', current, false);
            });
            updateClass(classRemove, item, true);
            
            updateClass(classRemove, item, true);
            
            if (index == items.length ) { 
                updateClass('current-page-green', pageCurrent[0], true);
                pag.textContent = 1;
                updateClass(classRemove, items[0], false);
                updateClass(classRemove + '-next', items[0], false);
                updateClass(classRemove + '-next', items[1], true);
                return null;
            }else if (index == items.length - 1 ){
                updateClass('current-page-green', pageCurrent[index], true);
                pag.textContent = index + 1;
                updateClass(classRemove, items[index], false);
                updateClass((classRemove + '-next'), items[0], true);
                updateClass(classRemove + '-next', items[items.length - 1], false);
            }else{
                updateClass('current-page-green', pageCurrent[index], true);
                pag.textContent = index + 1;
                updateClass(classRemove, items[index], false);
                updateClass(classRemove + '-next', items[index], false);
                updateClass(classRemove + '-next', items[index + 1], true);
            }
        }
    }
}

function backPage(next, classRemove){
    let items = document.querySelectorAll('.' + next + ' .child');
    let page = document.querySelectorAll('.' + next + ' .page');
    let pageCurrent = document.querySelectorAll('.' + next + ' .page-current');
    pag = page[0];
    
    for (let index = 0; index < items.length; index++) {
        
        
        const item = items[index];
        
        if(!findClass(classRemove, item.classList)){
            pageCurrent.forEach(current => {
                updateClass('current-page-green', current, false);
            });
            updateClass(classRemove, item, true);
            
            if (index == 0 ) {
                pag.textContent = items.length;
                updateClass('current-page-green', pageCurrent[items.length - 1], true);
                updateClass(classRemove, items[items.length -1], false);
                updateClass(classRemove + '-next', items[items.length - 1], false);
                updateClass(classRemove + '-next', items[1], true);
                return null;
            }else if(index == 1){
                updateClass('current-page-green', pageCurrent[index - 1], true);
                pag.textContent = index;
                updateClass(classRemove, items[index - 1], false);
                updateClass((classRemove + '-next'), items[1], true);
                updateClass(classRemove + '-next', items[0], false);
            }else{
                updateClass('current-page-green', pageCurrent[index - 1], true);
                pag.textContent = index;
                updateClass(classRemove, items[index - 1], false);
                updateClass(classRemove + '-next', items[index], true);
                updateClass(classRemove + '-next', items[index - 1], false);
            }
        }
    }
}

function updateClass(classes, item, add){
    if(Array.isArray(classes)){
        classes.forEach(clas => {
            if(add){
                item.classList.add(clas);
            }else{
                item.classList.remove(clas);
            }
        });
    }else{
        if(add){
            item.classList.add(classes);
        }else{
            item.classList.remove(classes);
        }
    }
}

function findClass(singleClass, classes){
    let value = false;
    classes.forEach(clas => {
        if(clas == singleClass){
            value = true;
        }
    });
    return value;
}



next.forEach(nextE => {
    nextE.onclick = function() {nextPage(nextE.name, 'content-dnone')};

});

back.forEach(nextE => {
    nextE.onclick = function() {backPage(nextE.name, 'content-dnone')};
});
