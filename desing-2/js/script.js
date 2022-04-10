console.log('js is conected');
let next = document.querySelectorAll('.next');
let item = document.querySelectorAll('.item-2 .content-show-type-1');


console.log(next);

function nextPage(){
    console.log('nextPage');
}

next.onclick = function(){
    console.log('click me');
};

next.addEventListener('click', nextPage);