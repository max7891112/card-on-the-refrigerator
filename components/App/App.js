import Card from "../Card/Card"
import Note from "../Note"
import './App.css'
class App{
    render() {
        Note.render()
        document.addEventListener('click', (event) => {
            let target = event.target.closest('#btn');
            if(!target) return
            Note.render()
        })
       
    }
}

export default new App()