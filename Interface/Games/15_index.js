//15: Eye Test-
// You are an eye speciallist and coding is your hobby. Whenever, you check eyes of anybody through the same alphabets, patients can also learn it and by saying the remembered word he/she could say that his/her eyes is good. But this may harm himself/herself.So being a doctor and care about the patient health write a javascript programm to bring random alphabates from A-Z with size __px and then smaller ones like an eye text chart have.
let pre1 = document.querySelector("body")
let pre2 = document.querySelector(".alphabox")
let pre3 = document.querySelector("button")
let pre4 = document.querySelector(".i")
let sel = document.querySelectorAll(".alpha")
let currentIndex = 0;
letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const fontSizes = [87.0, 52.5, 35.0, 26.2, 17.5, 13.1, 8.7, 7.0];
const vision = ["6/60", "6/36", "6/24", "6/18", "6/12", "6/9", "6/6", "6/5"]
// dark mode
let checkbox = document.querySelector(".checkbox")
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            pre1.style.backgroundColor = "black";
            document.body.style.filter = 'invert(1)'; 
        }
        else {
            pre1.style.backgroundColor = "white";
            document.body.style.filter = 'invert(0)';
        }
})
// Random alphabets for first round
sel.forEach(element => {
    let randalpha = Math.ceil(Math.random() * 26)
    element.innerHTML = letter[(randalpha - 1)]
});
// on click
pre3.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % fontSizes.length;
    pre4.innerHTML = vision[currentIndex]
    pre2.style.fontSize = fontSizes[currentIndex] + 'pt';

    sel.forEach(element => {
        let randalpha = Math.ceil(Math.random() * 26)
        element.innerHTML = letter[(randalpha - 1)]
    });
})