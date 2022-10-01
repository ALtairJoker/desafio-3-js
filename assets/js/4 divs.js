const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const color3 = document.querySelector('#color3')

const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const div3 = document.querySelector('#div3')
const div4 = document.querySelector('#div4')


document.addEventListener('keydown', (event) => {

    if (event.key === 'a') {
        const a = color1.style.backgroundColor
        limpiar()
        text1 = document.querySelector('#text1')
        text1.innerHTML = 'Color seleccionado'
        div1.addEventListener('click', () => div1.style.backgroundColor = a)
        div2.addEventListener('click', () => div2.style.backgroundColor = a)
        div3.addEventListener('click', () => div3.style.backgroundColor = a)
        div4.addEventListener('click', () => div4.style.backgroundColor = a)
    }else if(event.key === 's'){
        const s = color2.style.backgroundColor
        limpiar()
        text2 = document.querySelector('#text2')
        text2.innerHTML = 'Color seleccionado'
        div1.addEventListener('click', () => div1.style.backgroundColor = s)
        div2.addEventListener('click', () => div2.style.backgroundColor = s)
        div3.addEventListener('click', () => div3.style.backgroundColor = s)
        div4.addEventListener('click', () => div4.style.backgroundColor = s)
    }else if(event.key === 'd'){
        const d = color3.style.backgroundColor
        limpiar()
        text3 = document.querySelector('#text3')
        text3.innerHTML = 'Color seleccionado'
        div1.addEventListener('click', () => div1.style.backgroundColor = d)
        div2.addEventListener('click', () => div2.style.backgroundColor = d)
        div3.addEventListener('click', () => div3.style.backgroundColor = d)
        div4.addEventListener('click', () => div4.style.backgroundColor = d)
    }
    
})

function limpiar() {
    text1.textContent = ''
    text2.textContent = ''
    text3.textContent = ''
}




