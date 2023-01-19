import checkMark from '../Note/img/checkMark.png';
import iconClose from '../Note/img/close.png';
import { ROOT_MODAL} from "../../constants/root";
class Modal{
    constructor() {
        this.ANIMATION_SPEED = 200;
        this.closing = false;
        this.destroyed = false;
    }
    render(content) {
        let htmlContent = ` 
                <div class="modal__container">
                    <div class="checkMark">
                        <span class="imgContain" onclick="modal.innerHTML = ''"><img src="${iconClose}"></span>
                        <span class="imgContain" id="confirmer"><img src="${checkMark}"></span>
                    </div>
                    <textarea placeholder="Write Note..." class="textarea" id="textarea" maxlength="140">${content}</textarea>
                </div>
                `;
                const htmlWrapper = `
                <div class="modal__wrapper">
                    ${htmlContent}
                </div>
            `;
    
            ROOT_MODAL.innerHTML = htmlWrapper;
     
    }
    
    open(content) {
        this.render(content);
        document.querySelector('.modal__container').classList.add('open');
    }

    close() {   
        let modal = document.querySelector('.modal__container');
        this.closing = true;
        modal.classList.remove('open');
        modal.classList.add('disappearance');
        setTimeout(() => {
            modal.classList.remove('disappearance');
            modal.classList.add('hidden');
            this.closing = false;
        },this.ANIMATION_SPEED);
    };
    // destroy() {
    //     modalWindow.parentElement.removeChild(modalWindow)
    //     closeIcon.removeEventListener('click', listenerForCloseICon)
    //     document.removeEventListener('click', listenerForCloseOverlay)
    //     destroyed = true
    // } 
}

export default new Modal();