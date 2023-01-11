import LocalStorageUtil from "../../utils/localStorageUtil"
import Card from "../Card/Card"
import Note from "../Note"
import './App.css'
class App{
    render() {
        if(LocalStorageUtil.getNotes().length != 0) {
            LocalStorageUtil.getNotes().forEach((element, index) => {
                if(index == 0) {
                    LocalStorageUtil.renderNotes(index, element[1])
                } else {
                    LocalStorageUtil.renderShortNotes(index, element[1])
                }
            });
        } 

        Note.render()

        document.addEventListener('click', (event) => {
            let target = event.target.closest('#btn');
            if(!target) return
            Note.render()
        })
    }
}

export default new App()