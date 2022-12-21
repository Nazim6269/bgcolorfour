let div = null;

const chButton = document.querySelector('#changeButton');
const cpButton = document.querySelector('#copyButton');
const input = document.querySelector('#inp');
const body = document.querySelector('.container');

chButton.addEventListener('click',function(){
    let hexColor = generateHexColor();
    input.value =hexColor;
    body.style.backgroundColor = hexColor;

})

cpButton.addEventListener('click',function(){
    navigator.clipboard.writeText(input.value);
    if (div != null) {
        div.remove();
        div = null;
    }
    generateToastMessage(input.value);
})

function generateHexColor(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function generateToastMessage(msg){
    div = document.createElement(`div`);
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in";
    
    div.addEventListener("click", function(){
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out")

    div.addEventListener("animationend", function(){
    div.remove();
    div = null;
}); 
});
    document.body.appendChild(div);
}