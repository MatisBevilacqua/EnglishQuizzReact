let paragraphe = document.querySelectorAll('p').addEventListener('click', changeColor);
const color = ['#ff0000', '#141400', '#ae1400', '#ae14cb', '#fd14cb', '#0b14cb'];

function changeColor(){
    for(let i = 0; i < color.length; i++){
        let rand = Math.floor(Math.random()*color.length);
        let rValue = color[rand];
        console.log(rValue);
        document.querySelector('p').style.color = rValue;
    }
}