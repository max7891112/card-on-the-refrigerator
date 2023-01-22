import {ROOT_MODAL} from '../../constants/root';
import './Note.css';
import checkMark from './img/checkMark.png';
import iconClose from './img/close.png';
import Card from '../Card';
import Modal from '../Modal'
class Note{
    render() {
        let htmlContent = `
            <div class="modal__container">
                <div class="checkMark">
                    <span class="imgContain"><img src="${iconClose}" data-close="true"></span>
                    <span class="imgContain" id="checker"><img src="${checkMark}"></span>
                </div>
                <textarea placeholder="Write Note..." class="textarea" id="textarea" maxlength="140"></textarea>
            </div>
        `;
        const htmlWrapper = `
            <div class="modal__wrapper" data-close="true">
                ${htmlContent}
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
        let card = document.querySelector('.modal__container'); // анимации появления окна
        let wrapper = card.parentNode;
        card.classList.add('open');
        wrapper.classList.add('open');

        checker.addEventListener('click', function listener() {
            if(document.querySelector('.card__container')) {
                Card.shortRender(Card.countId(), textarea.value.replace(/(\n|\r)+/g, '<br>'));
            } else {
                Card.render(Card.countId(), textarea.value.replace(/(\n|\r)+/g, '<br>'));
            };
            Modal.close();
        });
    };
};

export default new Note();