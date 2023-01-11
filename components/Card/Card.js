import './Card.css';
import {ROOT_INDEX} from '../../constants/root';
import random from '../../utils/supportFunc';
import LocalStorageUtil from '../../utils/localStorageUtil';
class Card{
    constructor() {
        this.id = 0
    }
    render() {
        let htmlContent = `
            <div class="card__container">
                <div class="card__item" id="${this.id++}"style="transform: rotate(${random(-15,15)}deg); 
                background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
                    <p class="card__note">
                        ${textarea.value}
                    </p>
                </div>
            </div>
        `;
        const htmlWrapper = `
            <div class="card__wrapper">
                ${htmlContent}
            </div>
        `;

        ROOT_INDEX.innerHTML += htmlWrapper
        LocalStorageUtil.putNotes(this.id - 1, textarea.value)
    }
    shortRender() {
        let htmlContent = `
            <div class="card__item" id="${this.id++}" style="transform: rotate(${random(-15,+15)}deg); 
            background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
                <p class="card__note">
                    ${textarea.value}
                </p>
            </div>
        `;
        document.querySelector('.card__container').innerHTML += htmlContent
        LocalStorageUtil.putNotes(this.id - 1, textarea.value)
    }
}

export default new Card()