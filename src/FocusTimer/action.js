import state from "./state.js"
import * as sound from './sound.js'
import * as timer from './timer.js'
import * as el from './elements.js'


export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sound.buttonPressAudio.play()
}
export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sound.buttonPressAudio.play()

}
export function set(){
    el.minutes.setAttribute('contenteditable',true)
    el.minutes.focus()
}
export function plus(){
    state.minutes += 5
    if(state.minutes > 60){
        state.minutes = 60
        timer.updateDisplay()
        return
    }
    timer.updateDisplay()
}
export function minus(){
    state.minutes -= 5
    if(state.minutes < 0){
        state.minutes = 0
        timer.updateDisplay()
        return
    }
    timer.updateDisplay()
}

// x---sounds---x

export function forest(){
    selected(forest)
}
export function firePlace(){
    selected(firePlace)
}
export function coffeeShop(){
    selected(coffeeShop)
}
export function rain(){
    selected(rain)
}

function selected(btn){
    state[btn.name] = document.querySelector(`#${btn.name}`).classList.toggle('selected')
    if(state[btn.name]){
        sound[btn.name].play()
        return
    }
    sound[btn.name].pause()
}