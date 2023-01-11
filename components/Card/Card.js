import './Card.css';
import {ROOT_INDEX} from '../../constants/root';
import random from '../../utils/supportFunc';
class Card{
    render() {
        let htmlContent = `
            <div class="card__container">
                <div class="card__item" style="transform: rotate(${random(-20,20)}deg); 
                background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
                    <p class="card__note">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro doloribus quibusdam? Provident sunt eveniet quaerat laboriosam officia debitis beatae.
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
    }
    shortRender() {
        let htmlContent = `
            <div class="card__item" style="transform: rotate(${random(-4,+4)}deg); 
            background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
                <p class="card__note">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro doloribus quibusdam? Provident sunt eveniet quaerat laboriosam officia debitis beatae.
                </p>
            </div>
    `;
    document.querySelector('.card__container').innerHTML += htmlContent
    }
}

export default new Card()