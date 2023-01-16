class Modal{
    constructor() {
        this.ANIMATION_SPEED = 200
        this.closing = false
        this.destroyed = false
    }
    render() {
        
    }
    // open() {
    //     if(destroyed) {
    //         return console.log('modal window is destroyed')
    //     }
    //     if(!closing) {
    //         modalWindow.classList.remove('hidden')
    //         modalWindow.classList.add('open')
    //     }
    // }
    // close() {   
    //     closing = true
    //     modalWindow.classList.remove('open')
    //     modalWindow.classList.add('disappearance')
    //     setTimeout(() => {
    //         modalWindow.classList.remove('disappearance')
    //         modalWindow.classList.add('hidden')
    //         closing = false
    //     },ANIMATION_SPEED)
    // }
    // destroy() {
    //     modalWindow.parentElement.removeChild(modalWindow)
    //     closeIcon.removeEventListener('click', listenerForCloseICon)
    //     document.removeEventListener('click', listenerForCloseOverlay)
    //     destroyed = true
    // } 
}

export default new Modal()