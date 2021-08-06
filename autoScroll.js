let scrollerId ;
let pause = true ;
function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0 , 2);
        if(window.scrollY > 80){
            stopScroll();
        }
    } , 10) ;
    return id ;
}

function stopScroll() {
    clearInterval(scrollerId);
}

if(pause === true){
    scrollerId = startScroll();
}
