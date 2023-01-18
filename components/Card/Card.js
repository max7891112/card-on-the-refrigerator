import './Card.css';
import {ROOT_INDEX} from '../../constants/root';
import {random} from '../../utils/supportFunc';
import iconClose from '../Note/img/close.png';
import {setTextColor} from '../../utils/supportFunc';

class Card{
    constructor() {
        this.id = 0
    }
    countId() {
        let cards = document.querySelectorAll('.card__item')
        return cards.length
    }

    render(elem,value) {
        let color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
        let htmlContent = `
            <div class="card__container">
                <div class="scale">
                    <div class="card__item " id="${elem}"style="transform: rotate(${random(-10,10)}deg); 
                    background-color: ${color}">
                    <span class="imgContain close"><img src="${iconClose}" ></span>
                        <p class="card__note">
                            ${value}
                        </p>
                    </div>
                </div> 
            </div>
        `;
        const htmlWrapper = `
            <div class="card__wrapper">
                ${htmlContent}
            </div>
        `;

        ROOT_INDEX.innerHTML += htmlWrapper
        let card = document.querySelector('.card__item'); // получаем родительский элемент
        let text = card.lastElementChild // находим нужный элемент
        setTextColor(text, color)
        if(text.style.color == 'white') {
            card.firstElementChild.lastElementChild.classList.add('white')
        }
        // LocalStorageUtil.putNotes(this.countId(), textarea.value.replace(/(\n|\r)+/g, '<br>'))
    }
    shortRender(elem,value) {
        let color = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
        let htmlContent = `
        <div class="scale">
            <div class="card__item " id="${elem}"style="transform: rotate(${random(-10,10)}deg); 
            background-color: ${color}">
            <span class="imgContain close"><img src="${iconClose}"></span>
                <p class="card__note">
                    ${value}
                </p>
            </div>
        </div> 
        `;
        document.querySelector('.card__container').innerHTML += htmlContent
        let cards = document.querySelectorAll('.card__item');
        let card = cards[cards.length - 1];
        let text = card.lastElementChild;
        setTextColor(text, color)
        if(text.style.color == 'white') {
            card.firstElementChild.lastElementChild.classList.add('white')
        }
    }
}

export default new Card()