const button = document.querySelectorAll("button");
const output = document.querySelector(".output");

console.log(button);
button[0].addEventListener('click',onclick,false);
function onclick(){
    const cost = document.querySelector("input");
    console.log(cost.value);
    let tip = (cost.value*0.15).toFixed(2);
    let temp = `<h1>you should tip $${tip} on total cost of $${cost.value}</h1>`
    output.innerHTML = temp;
}
