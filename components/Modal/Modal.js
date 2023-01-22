import checkMark from '../Note/img/checkMark.png';
import iconClose from '../Note/img/close.png';
import { ROOT_MODAL} from "../../constants/root";
import './Modal.css'
class Modal{
    constructor() {
        this.ANIMATION_SPEED = 300;
    }
    render(content) {
        let htmlContent = ` 
                <div class="modal__container">
                    <div class="checkMark">
                        <span class="imgContain"><img src="${iconClose}" data-close="true"></span>
                        <span class="imgContain" id="confirmer"><img src="${checkMark}"></span>
                    </div>
                    <textarea placeholder="Write Note..." class="textarea" id="textarea" maxlength="140">${content}</textarea>
                </div>
                `;
                const htmlWrapper = `
                <div class="modal__wrapper" data-close="true">
                    ${htmlContent}
                </div>
            `;
    
            ROOT_MODAL.innerHTML = htmlWrapper;
    }
    
    open(content) {
        this.render(content);
        document.querySelector('.modal__container').classList.add('open'); // анимации появления окна
        document.querySelector('.modal__wrapper').classList.add('open');
    }

    close() {   
        let modal = document.querySelector('.modal__container');
        if(modal) {
            modal.classList.remove('open');
            // modal.parentElement.classList.remove('open');
            modal.classList.add('disappearance');
            // modal.parentElement.classList.add('disappearence');
            setTimeout(() => {
                modal.classList.remove('disappearance');
                // modal.parentElement.classList.remove('disappearence');
                ROOT_MODAL.innerHTML = ''
            },this.ANIMATION_SPEED);
        };
    }; 
};

export default new Modal();