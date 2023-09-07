
const countBtn = document.getElementById('add-count-btn');
const countDisplayer = document.getElementById('count-displayer');
let count = 0;

function myAddCount(){
    count += 1;
    countDisplayer.innerHTML = count;
}

countBtn.addEventListener('click', myAddCount);