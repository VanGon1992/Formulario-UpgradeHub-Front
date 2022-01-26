'use strict'

window.onload = () => {

    let btnEnviar = document.querySelector('#submit')
    btnEnviar.addEventListener('click', () => {
        let inputNombre = document.querySelector('#nombre')
        let inputApe = document.querySelector('#apellidos')
        let inputEdad = document.querySelector('#edad')
        let inputDire = document.querySelector('#direccion')
        let inputTele = document.querySelector('#telefono')
        let ulDatos = document.querySelector('#datos')
        ulDatos.innerHTML += `<li>Nombre: ${inputNombre.value}</li><br>
        <li>Apellidos: ${inputApe.value}</li><br>
        <li>Edad: ${inputEdad.value}</li><br>
        <li>Direccion: ${inputDire.value}</li><br>
        <li>Apellidos: ${inputTele.value}</li>`

        // ulDatos2.innerHTML += `<li>Direccion: ${inputDire.value}</li><br>
        // <li>Apellidos: ${inputTele.value}</li>`

        inputNombre.value = ''
        inputApe.value = ''
        inputEdad.value = ''
        inputDire.value = ''
        inputTele.value = ''
    })
}