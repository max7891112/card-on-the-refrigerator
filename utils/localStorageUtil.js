import Card from '../components/Card'
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

    renderLoading() {
        if(this.getNotes().length != 0) {
            this.getNotes().forEach((element, index) => {
                if(index == 0) {
                    Card.render(Card.countId(), element[1]) // если элемент первый то создаем первичный контейнер для него
                } else {
                    Card.shortRender(Card.countId(), element[1]) // добавляем новые карточки в уже созданный контейнер
                };
            });
        } ;
    }

    clear() {
        localStorage.clear()
    }
}

export default new LocalStorageUtil()
