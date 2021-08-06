const TypeWriter = function(txtElement , words , wait = 3000) {
    this.txtElement = txtElement ;
    this.words = words ;
    this.txt = '';
    this.WordIndex = 0 ;
    this.wait = parseInt(wait , 10); //base 10 number
    this.type();
    this.isDeleting = false ; //deleting or not
}

// Type Method
TypeWriter.prototype.type = function() {
    //current index
    const current = this.WordIndex % this.words.length ;
    //get full txt of current word
    const fullTxt = this.words[current] ;
    //deleting or not
    if(this.isDeleting){ //default false
        //delete char
        this.txt = fullTxt.substring(0 , this.txt.length - 1) ;
    }
    else{
        //add char
        this.txt = fullTxt.substring(0 , this.txt.length + 1) ;
    }

    //insert txt into element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

    //type Speed
    let typeSpeed = 300 ;
    if(this.isDeleting) {
        typeSpeed /= 3 ;
    }

    //if a word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = 3000 ; //3000 lil pause
        this.isDeleting = true ;
    }else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false ;
        //next word
        this.WordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }
    setTimeout(() => this.type() , typeSpeed)
}
// Init On DON Load
document.addEventListener('DOMContentLoaded' , init);

//Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse( txtElement.getAttribute('data-words') ); //get the data-words from html
    const wait = txtElement.getAttribute('data-wait') //get wait time
    //init TypeWriter
    new TypeWriter(txtElement , words , wait) ;

}