// const API = 'https://www.thecolorapi.com'
const hexColor = document.getElementById('hex-color')
const headerColor = document.getElementById('header-color')
const colorButton = document.getElementById('color-button')
const opacityPercent = document.getElementById('opacity-percent')
let slider = document.getElementById('myRange')
const copyButton = document.getElementById('copy')

let r = 255;
let g = 255;
let b = 255;
let opacity = slider.value;

colorButton.addEventListener('click', function() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    // console.log(`color is R:${r},  G:${g}, B:${b}`);

    document.body.style.backgroundColor = `rgba(${r},${g},${b},${opacity})`
    hexColor.textContent = `Color is: R:${r}, G:${g}, B:${b}.`
    // headerColor.style.color = `rgba(${r},${g},${b},${opacity})`
})

slider.addEventListener('input', function() {
    opacity = this.value;
    document.body.style.backgroundColor = `rgba(${r},${g},${b},${opacity})`;
    opacityPercent.textContent = `Opacity is ${Math.round(opacity * 100)}%.`; 
});

copyButton.addEventListener('click', function() {
    const rgbaColor = `rgba(${r},${g},${b},${opacity})`
    navigator.clipboard.writeText(rgbaColor).then(() => {
        console.log(`color copied to clipboard: ${rgbaColor}`);
    }).catch(err => {
        console.error(`There was an error copying text: ${err}`)
    })
})