const input = document.getElementById('input-text');
const bold = document.getElementById('turn-text-bold');
const italic = document.getElementById('turn-text-italic');
const clear = document.getElementById('clear-text');

const textDisplayer = document.getElementById('text-displayer');

function myDisplayText(){
    textDisplayer.innerHTML = input.value;
}

function myTurnBold(){
    textDisplayer.style.fontWeight ='bold';
}

function myTurnItalic(){
    textDisplayer.style.fontStyle ='italic';
}

function myClearText(){
    textDisplayer.removeAttribute("style");
    textDisplayer.removeAttribute("style");
}

input.addEventListener('keyup', myDisplayText);
bold.addEventListener('click', myTurnBold);
italic.addEventListener('click', myTurnItalic);
clear.addEventListener('click', myClearText);