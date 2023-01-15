import {ROOT_MODAL} from '../../constants/root';
import './Note.css';
import checkMark from './img/checkMark.png';
import iconClose from './img/close.png';
import Card from '../Card';
class Note{
    render() {
        let htmlContent = `
            <div class="modal__container">
                <div class="checkMark">
                    <span class="imgContain" onclick="modal.innerHTML = ''"><img src="${iconClose}"></span>
                    <span class="imgContain" id="checker"><img src="${checkMark}"></span>
                </div>
                <textarea placeholder="Write Note..." class="textarea" id="textarea"></textarea>
            </div>
        `;
        const htmlWrapper = `
            <div class="modal__wrapper">
                ${htmlContent}
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper
        
        checker.addEventListener('click', function listener() {
            if(document.querySelector('.card__container')) {
                Card.shortRender()
            } else {
                Card.render()
            }
            modal.innerHTML = ''
        })
    }
}

export default new Note()