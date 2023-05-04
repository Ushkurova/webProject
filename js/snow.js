var slideIndex = 0;
showSlides();
var st;

function plusSlides(n){
    clearTimeout(st);
    slideIndex+=n;
    show();
}

function currentSlide(n){
    clearTimeout(st);
    slideIndex=n;
    show();
}

function showSlides(){
    console.log(slideIndex);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex = 1}
    for(i = 0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +=" active";
    st=setTimeout(showSlides,5000);
    
        
}


function show(){
    console.log(slideIndex);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    if(slideIndex>slides.length)
    {slideIndex = 1;}
    if(slideIndex<1){
        slideIndex=4;
    }
    for(i = 0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +=" active";
    st=setTimeout(showSlides,5000);
    
        
}