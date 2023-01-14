import LocalStorageUtil from "../../utils/localStorageUtil";
import Note from "../Note";
import Error from '../Error';
import { ROOT_INDEX } from "../../constants/root";
import './App.css';
class App{
    render() {
        try{
            if(LocalStorageUtil.getNotes().length != 0) {
                LocalStorageUtili.getNotes().forEach((element, index) => {
                    if(index == 0) {
                        LocalStorageUtil.renderNotes(index, element[1]) // если элемент первый то создаем первичный контейнер для него
                    } else {
                        LocalStorageUtil.renderShortNotes(index, element[1]) // добавляем новые карточки в уже созданный контейнер
                    };
                });
            } ;
    
            Note.render();
    
            document.addEventListener('click', (event) => {
                let target = event.target.closest('#btn');
                if(!target) return;
                Note.render();
            })

        } catch(error) {
            ROOT_INDEX.innerHTML = '';
            Error.render()
        }; 
    }; 
};

export default new App();