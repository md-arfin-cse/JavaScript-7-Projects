//Images = 4 (0,1,2,3)

let flag = 0;

function controller(x){
    flag = flag + x;
    //left

    // flag = 2 + (-1) = 1;

    //right
    // flag = 2 +1 = 3;
    slideshow(flag)
}
slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('slide');
    // console.log(slides);
    if(num == slides.length){
        flag = 0;
        num = 0;

    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    
    for(let y of slides){
        y.style.display = "none"
    }
    // console.log(num);
    slides[num].style.display = "block";

}
