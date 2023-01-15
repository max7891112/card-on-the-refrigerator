import './Card.css';
import {ROOT_INDEX} from '../../constants/root';
import random from '../../utils/supportFunc';
import LocalStorageUtil from '../../utils/localStorageUtil';
import iconClose from '../Note/img/close.png'
class Card{
    constructor() {
        this.id = 0
    }
    countId() {
        let cards = document.querySelectorAll('.card__item')
        return cards.length
    }

    render() {
        let htmlContent = `
            <div class="card__container">
                <div class="scale">
                    <div class="card__item " id="${this.countId()}"style="transform: rotate(${random(-15,15)}deg); 
                    background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
                    <span class="imgContain close"><img src="${iconClose}"></span>
                        <p class="card__note">
                            ${textarea.value.replace(/(\n|\r)+/g, '<br>')}
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
        LocalStorageUtil.putNotes(this.countId(), textarea.value.replace(/(\n|\r)+/g, '<br>'))
        
    }
    shortRender() {
        let htmlContent = `
        <div class="scale">
            <div class="card__item " id="${this.countId()}"style="transform: rotate(${random(-15,15)}deg); 
            background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
            <span class="imgContain close"><img src="${iconClose}"></span>
                <p class="card__note">
                    ${textarea.value.replace(/(\n|\r)+/g, '<br>')}
                </p>
            </div>
        </div> 
        `;
        document.querySelector('.card__container').innerHTML += htmlContent
        LocalStorageUtil.putNotes(this.countId(), textarea.value.replace(/(\n|\r)+/g, '<br>'))
    }
}

export default new Card()