import random from '../utils/supportFunc';
import { ROOT_INDEX } from '../constants/root';
class LocalStorageUtil{
    constructor() {
        this.keyName = 'notes'
    }

    getNotes() {
        const notesLocalStorage = localStorage.getItem(this.keyName)
        if(notesLocalStorage) {
            return JSON.parse(notesLocalStorage)
        } else{
            return []
        }
    }

    putNotes(id,value){
        let notes = this.getNotes()
        const index = notes.indexOf(id)
        let pushProduct = false
        if(index === -1) {
            notes.push([id,value])
            pushProduct = true
        } else {
            notes.splice(index, 1)
        }
        localStorage.setItem(this.keyName, JSON.stringify(notes))

        return {pushProduct, notes}
    }
    renderNotes(elem,value) {
        let htmlContent = `
            <div class="card__container">
            <div class="scale">
                <div class="card__item" id="${elem}" style="transform: rotate(${random(-15,15)}deg); 
                background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
                    <p class="card__note">
                        ${value}
                    </p>
                </div>
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
    renderShortNotes(elem,value) {
        let htmlContent = `
        <div class="scale">
            <div class="card__item" id="${elem}" style="transform: rotate(${random(-15,+15)}deg); 
            background-color: rgb(${random(0,255)},${random(0,255)},${random(0,255)})">
                <p class="card__note">
                    ${value}
                </p>
            </div>
        </div>
            
        `;
        document.querySelector('.card__container').innerHTML += htmlContent
    }
}

export default new LocalStorageUtil()
