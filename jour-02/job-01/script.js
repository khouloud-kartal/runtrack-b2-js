function myChangeBackgroundColor() {

    const background = document.querySelector("html");
    const screen = window.innerWidth;

    if(screen >= 1337){
        background.style.backgroundColor = "#ffb703";
    }else if(screen <= 1336 && screen >= 505){
        background.style.backgroundColor = "#d90429";
    }else if(screen <= 504){
        background.style.backgroundColor = "#003049";
    }

}

myChangeBackgroundColor();

window.addEventListener("resize", myChangeBackgroundColor);