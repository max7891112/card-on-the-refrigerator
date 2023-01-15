import LocalStorageUtil from "../../utils/localStorageUtil";
import Note from "../Note";
import Error from '../Error';
import Card from '../Card'
import { ROOT_MODAL,ROOT_INDEX } from "../../constants/root";
import './App.css';
import checkMark from '../Note/img/checkMark.png'
import iconClose from '../Note/img/close.png'
class App{
    render() {
        try{
            if(LocalStorageUtil.getNotes().length != 0) {
                LocalStorageUtil.getNotes().forEach((element, index) => {
                    if(index == 0) {
                        LocalStorageUtil.renderNotes(Card.countId(), element[1]) // если элемент первый то создаем первичный контейнер для него
                    } else {
                        LocalStorageUtil.renderShortNotes(Card.countId(), element[1]) // добавляем новые карточки в уже созданный контейнер
                    };
                });
            } ;
    
            Note.render();
            
            document.addEventListener('click', (event) => {
                let target = event.target.closest('#btn');
                if(!target) return;
                Note.render();
            })


            document.addEventListener('click', (event) =>{
                let target = event.target.closest('.card__item')
                if(!target) return
                let content = target.lastElementChild.textContent.trim() // доработать отображение
                let htmlContent = `
                <div class="modal__container">
                    <div class="checkMark">
                        <span class="imgContain" onclick="modal.innerHTML = ''"><img src="${iconClose}"></span>
                        <span class="imgContain" id="confirm"><img src="${checkMark}"></span>
                    </div>
                    <textarea class="textarea" id="textarea">${content}</textarea>
                </div>
                `;
                const htmlWrapper = `
                <div class="modal__wrapper">
                    ${htmlContent}
                </div>
            `;
    
            ROOT_MODAL.innerHTML = htmlWrapper

            document.querySelector('#confirm').addEventListener('click', function() {
                target.lastElementChild.textContent = textarea.value;
                let localStorageData = LocalStorageUtil.getNotes()
                for(let elem of localStorageData) {
                    if(+elem[0] == +target.id + 1) {
                        elem[1] = textarea.value 
                        localStorage.clear()
                        localStorage.setItem('notes', JSON.stringify(localStorageData))
                    }
                }
                modal.innerHTML = '';
                
            })
            
            })

            document.addEventListener('click', (event) => {
                let target = event.target.closest('.close');
                if(!target) return;
                target.parentNode.parentNode.innerHTML = '';
                ROOT_MODAL.innerHTML = '';
            })
        
        } 
        catch(error) {
            ROOT_INDEX.innerHTML = '';
            Error.render()
            console.log(error.message, error.fileName, error.lineNumber)
        }; 
    }; 
};

export default new App();

// ,[2,"add spinner\n"],