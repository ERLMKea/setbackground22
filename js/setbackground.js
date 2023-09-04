console.log("jeg er i setbackground")

const inpColor = document.querySelector(".inpColor")
console.log(inpColor)

const inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")

const pbSetColor = document.querySelector(".pbSetColor")
console.log(pbSetColor)
pbSetColor.textContent = "Tryk mig for set color";

const pbIncreaseFont = document.getElementById("pbIncreaseFont")
const pbDecreaseFont = document.getElementById("pbDecreaseFont")

const pTags = document.getElementsByTagName("p")

const pArray = Array.from(pTags)

let fontSize = 20

function increaseFont(element) {
    console.log(element)
    element.style.fontSize = fontSize + 'px'
}

function increaseFontAll() {
    fontSize++
    console.log('fontSize='+ fontSize)
    pArray.forEach(increaseFont)
}

pbIncreaseFont.addEventListener('click', increaseFontAll)

const bdy = document.querySelector("body");
console.log(bdy);

function increaseFontxx(element) {
    let fontSize = element.style.fontSize;
    console.log("fsize=" + fontSize)
    element.style.fontSize = 20 + 'px'
    fontSize = element.style.fontSize;
    console.log("fsize=" + fontSize)
}

pArray.forEach(increaseFont)

function setBackgroundColor() {
    let col = inpColor.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

pbSetColor.addEventListener('click', setBackgroundColor)
document.addEventListener('keyup', setBackgroundColor)
inpColorPicker.addEventListener('input', useColorPicker)



