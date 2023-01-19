import chroma from 'chroma-js';
function random(min, max) {// создание случайного числа в выбранном диапазоне 
    let rand =  (((min - 0.5) + Math.random() * (max - min + 0.5)).toFixed());
    return Math.round(rand);
}
function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.2 ? 'black' : 'white';
}
export {random, setTextColor};
