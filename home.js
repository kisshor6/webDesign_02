// let flag = 3;

// function main(y){
//     flag = flag + y;
//     slideshow(flag);
// }
// slideshow(flag);

// function slideshow(num){
//     let slides = document.getElementsByClassName('image');
//     let arr = document.getElementsByClassName('arrow');
//     arr.ondblclick=function(){
//         image.style.display = 'none';
//     }

//     if(num == slides.length){
//         flag = 0;
//         num = 0;
//     }
//     if(num <0){
//         flag = slides.length -1;
//         num = slides.length -1;
//     }
//     for (let x of slides) {
//         x.style.display = "none";   
//     }
//     slides[num].style.display = "block";
// }


let flag2 = 3;

function main(y){
    flag2 = flag2 + y;
    slideshow(flag2);
}
slideshow(flag2);

function slideshow(num){
    let slides = document.getElementsByClassName('opin_opin');
    let arr = document.getElementsByClassName('arrow');
    arr.ondblclick=function(){
        image.style.display = 'none';
    }

    if(num == slides.length){
        flag2 = 0;
        num = 0;
    }
    if(num <0){
        flag2 = slides.length -1;
        num = slides.length -1;
    }
    for (let x of slides) {
        x.style.display = "none";   
    }
    slides[num].style.display = "block";
}
CSS.registerProperty({
    name: "--p",
    syntax: "<integer>",
    initialValue: 0,
    inherits: true,
});

function first(){
    document.getElementById('one').style.display = "block";
    document.getElementById('two').style.display = "none";
    document.getElementById('three').style.display = "none";
    document.getElementById('four').style.display = "none";
}
function second(){
    document.getElementById('one').style.display = "none";
    document.getElementById('two').style.display = "block";
    document.getElementById('three').style.display = "none";
    document.getElementById('four').style.display = "none";
}
function third(){
    document.getElementById('one').style.display = "none";
    document.getElementById('two').style.display = "none";
    document.getElementById('three').style.display = "block";
    document.getElementById('four').style.display = "none";
}
function fourth(){
    document.getElementById('one').style.display = "none";
    document.getElementById('two').style.display = "none";
    document.getElementById('three').style.display = "none";
    document.getElementById('four').style.display = "block";
}

// $(document).ready(function(){
//     $(".counter").counterUp({
//       delay: 10,
//       time: 1200
//     });
//  }); 

const counters = document.querySelectorAll('.counter');
const speed = 400;

counters.forEach(counter => {
    const updateCount = () =>{
        const target =+ counter.getAttribute('data-target');
        const count =+ counter.innerText;

        const inc = target / speed;


        if (count<target) {
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }
        else{
            count.innerText = target;
        }
    }

    updateCount();
});

$(document).ready(function(){
    $('.company').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
    //   responsive: [{
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 4
    //     }
    //   }, {
    //     breakpoint: 520,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   }]
    });
});
