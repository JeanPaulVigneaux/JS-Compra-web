const select1 = document.querySelector('#select1')
const select2 = document.querySelector('#select2')
const boton = document.querySelector('#boton')
const precio = document.querySelector('#precio')

const calculo1 = document.querySelector('#calculo1')
const calculo2 = document.querySelector('#calculo2')
const calculo3 = document.querySelector('#calculo3')

boton.addEventListener("click", () => {
    const cantidad = Number(select1.value)
    const color = select2.value
    const price = Number(precio.textContent)
    const total = cantidad * price 
    calculo1.textContent = total
    calculo2.textContent = cantidad
    calculo3.style.backgroundColor = color 
});

