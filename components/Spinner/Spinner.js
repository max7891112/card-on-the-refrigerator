import './Spinner.css';
import { ROOT_SPINNER } from '../../constants/root';
import spinner from './img/spinner.svg'
class Spinner{
    handleClear() {
        ROOT_SPINNER.innerHTML = ''
    }

    render() {
        const html = `
            <div class ="spinner-container">
                <img src="${spinner}" class="spinner__img"></img>
            </div>
        `

        ROOT_SPINNER.innerHTML = html
    }
}

export default new Spinner()