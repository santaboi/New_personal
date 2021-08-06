function changeColor() {
    if(window.scrollY > 1000){
        document.getElementsByClassName('animation').classList.add('a_newstyle');
    }
    else if(document.getElementsByClassName('animation').classList.contains('a_newstyle')){
        document.getElementsByClassName('animation').classList.remove('a_newstyle');
    }
}

window.addEventListener('scroll' , changeColor());