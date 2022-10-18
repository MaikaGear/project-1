const btn = document.querySelector('.color_btn');
let isButtonClicked = true;

function setColor(){
    const rgbColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    document.body.style.backgroundColor = rgbColor;
    parentElement.appendChild(newPara);
    newPara.innerHTML = rgbColor;
}
const newPara = document.createElement('p');
const parentElement = document.querySelector('.parent_container');

btn.addEventListener('click', function buttonClicked(){
    if (isButtonClicked){
        setColor()
    }
})

/*    if (isButtonClicked){
    setColor()
} */