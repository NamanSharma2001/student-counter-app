let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveEl2 = document.getElementById("save-el2")



let count = 0;
let sum = 0;


function increment() {

    count += 1
    countEL.textContent = count


}

function summation() {
    sum += count;
}


let temp = 0
function save() {

    let var1 = count + " , "
    saveEl.textContent += var1
    summation()
    count = 0;
    countEL.textContent = 0;
    temp += 1
    fun2()


}


function fun2() {
    if (temp % 7 == 0) {

        let var2 = sum + " , "
        saveEl2.textContent += var2
        sum = 0

    }
}