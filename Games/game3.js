colorname = ["Red", "blue", "Green", "Black", "Yellow", "Purple", "Skyblue", "orange"]
realcolor = ["#ff0000", "#0000ff", "#008000", "#000000", "#ffff00", "#800080", "#00ffff", "#ffa500"]
for (let index = 0; index < 25; index++) {
    let colin = document.querySelector(`.d${index + 1}`)
    let colcol = document.querySelector(`.d${index + 1}`)
    let rnnum = Math.ceil(Math.random() * 8)
    let rnnum2 = Math.ceil(Math.random() * 8)
    colin.innerHTML = colorname[rnnum - 1]
    colcol.style.color = realcolor[rnnum2 - 1]
}
