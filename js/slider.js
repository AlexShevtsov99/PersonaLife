
let timer = 5000 //время//
let nodes = [...document.querySelector('.slider_buttons').children];
const last = nodes.length - 1; //последний слайд//
let i = 0
    function currentSlide(curIndex){
    nodes[i].classList.remove('active0')
    nodes[curIndex].classList.add('active0')   
    }

    function swipe(){
        document.querySelector('.slider_img img').classList.add('swipe')
        setTimeout(() => document.querySelector('.slider_img img').classList.remove('swipe'), 500)
    }

 function Next(){  
    if (i != nodes.length - 1) {
    currentSlide(i+1)
    document.querySelector('.slider_img img').setAttribute('src', `images/${i+2}.jpg`)
    swipe()
    i = i + 1
}   

else {
    
    swipe()
    currentSlide(0)
    i = 0
    document.querySelector('.slider_img img').setAttribute('src', `images/1.jpg`)
}     
}

function Prev(){
    if (i != 0) {
    document.querySelector('.slider_img img').setAttribute('src', `images/${i}.jpg`)
    swipe()
    currentSlide(i-1)
    i = i - 1
}   

else  {
    document.querySelector('.slider_img img').setAttribute('src', `images/${last+1}.jpg`)
    swipe()
    currentSlide(last)
    i = last
}     
}

let timerId = setInterval(Next, timer)   

function reset() {
clearInterval(timerId)
timerId = setInterval(Next, timer)
}

document.querySelector('.right').addEventListener('click', Next)
document.querySelector('.right').addEventListener('click', reset)
document.querySelector('.left').addEventListener('click', Prev)
document.querySelector('.left').addEventListener('click', reset)
