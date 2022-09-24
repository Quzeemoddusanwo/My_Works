let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let gradient_box = document.getElementById("gradient_box");
let color_code = document.getElementById("color_box");

function changeGradient(){
    gradient_box.style.background = 'linear-gradient(45deg, ${color1.value}, ${color2,value});'
    color_code.innerText = 'Color code : ${gradient_box.style.background};'
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);