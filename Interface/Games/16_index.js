// Make a Random Schulte Table
let emp = []
function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}

for (let index = 1; emp.length < 25; index++) {
    let rnnum = Math.ceil(Math.random() * 25)
    if (emp.includes(rnnum)) {
        
    }
    else {
        if(rnnum == 1){
            let lastIndex = emp.length+1;
            let c = document.querySelector(`.d${lastIndex}`)
            c.style.backgroundColor = "rgb(9, 9, 9)";
        }
        emp.push(rnnum)
    }
}

for (let index2 = 0; index2 < emp.length; index2++) {
    let inht = document.querySelector(`.d${index2 + 1}`)
    let col = document.querySelector(`.d${index2 + 1}`)
    inht.innerHTML = emp[index2]
    col.style.color = getRandomColor()
}
document.querySelector('.but').addEventListener('click', () =>{
    location.reload();
});