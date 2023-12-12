let sliderBtn1 = document.querySelector('.slider_btn_1')
let sliderBtn2 = document.querySelector('.slider_btn_2')
let div = document.getElementsByClassName('disabled')

sliderBtn1.addEventListener('click', ()=>{
    for(let i = 0; i < div.length; i++){
        if(div[i].classList.contains('active')){
            div[i-1].classList.add('active');
            div[i].classList.remove('active');
            break;
        }else if(div[i].firstChild){
            sliderBtn1.setAttribute('disabled','')
        }
    }
})

sliderBtn2.addEventListener('click', ()=>{
    for(let i = 0; i < div.length; i++){
        if(div[i].classList.contains('active')){
            div[i+1].classList.add('active');
            div[i].classList.remove('active');
            break;
        }else if(div[i].lastChild){
            sliderBtn2.setAttribute('disabled','')
        }
    }
})

let submitBtn = document.querySelector('.send')
let input = document.getElementById('review')
let reviewContainer = document.querySelector('.review_container')

submitBtn.addEventListener('click', () => {
    if(input.value != ""){
        const NewDiv = document.createElement("div");
        NewDiv.classList.add('LABANOVEBIMENYAVPERDAK')
        const p = document.createElement("p");
        p.value = input.value;
        p.append(p.value)
        NewDiv.append(p);
        reviewContainer.append(NewDiv)
    }
})

const burgerButton = document.querySelector('.burger_btn');

const closeButton = document.querySelector('.x_button');

const backPannel = document.querySelector('.side_pannel_container');

burgerButton.addEventListener('click', () => {
    burgerButton.style.display = 'none'
    backPannel.style.width = '30%'
    backPannel.style.display = 'inline-block'
})

closeButton.addEventListener('click', () => {
    backPannel.style.width = '0'
    backPannel.style.transition = '0.5s'
    burgerButton.style.display = 'block'
})