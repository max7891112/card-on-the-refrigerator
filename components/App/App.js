import LocalStorageUtil from "../../utils/localStorageUtil";
import Error from '../Error';
import { ROOT_MODAL,ROOT_INDEX } from "../../constants/root";
import './App.css';
import Modal from '../Modal';
import Note from '../Note';
import Spinner from '../Spinner'
class App{
    render() {
        try{
            Spinner.render()
            setTimeout(() => {
                LocalStorageUtil.renderLoading();
                Note.render();
                this.eventListener();
                Spinner.handleClear();
            },500)
        } 
        catch(error) { // обработчик ошибок
            ROOT_INDEX.innerHTML = '';
            Error.render();
            console.log(error.message, error.fileName, error.lineNumber);
        }; 
    }; 
    eventListener() {
        document.addEventListener('click', (event) => {
            let target = event.target.closest('#btn');
            if(!target) return;
            Note.render();
        })


        document.addEventListener('click', (event) =>{
            let target = event.target.closest('.card__item');
            if(!target) return;
            let content = target.lastElementChild.textContent.trim(); // доработать отображение
            // content = content.replaceAll('<br>', '')
            // console.log(content)
            Modal.open(content);

             document.querySelector('#confirmer').addEventListener('click', function() { // если была нажата галочка на модальном окне
                target.lastElementChild.textContent = textarea.value; // в параграф карточки заносятся данные из textarea
                let modal = document.querySelector('#modal');
                modal.innerHTML = '';
            })
        })

        document.addEventListener('click', (event) => {
            let target = event.target.closest('.close');
            if(!target) return;
            target.parentNode.parentNode.innerHTML = ''; // при закрытии закрывается карточка
            ROOT_MODAL.innerHTML = ''; // и закрывается модальное окно
        })

        window.onbeforeunload = () => { // в момент ухода пользователя все данные на странице уходят в localStorage
            let cards = document.querySelectorAll('.card__item'); // получаем все карточки
            LocalStorageUtil.clear(); // очищаем хранилище
            for(let card of cards) {
                LocalStorageUtil.putNotes(card.id, card.lastElementChild.textContent.trim()); // добавляем все актуальные данные в хранилище
            };
        };
    };
};

export default new App();

// адекватное отображение текста при переносах,добавить анимацию модальных окон