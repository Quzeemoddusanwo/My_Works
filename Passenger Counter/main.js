let countEL = document.getElementById("count-el")
let count = 0 
function increment() {
    count = count + 1
    countEL.innerHTML =count
}

let saveEL = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    saveEL.innerText =+ countStr
}