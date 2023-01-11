function random(min, max) {// создание случайного числа в выбранном диапазоне 
    let rand =  (((min - 0.5) + Math.random() * (max - min + 0.5)).toFixed())
    return Math.round(rand)
}

export default random
