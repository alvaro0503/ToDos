var btnGuardar = document.getElementById('guardar')

var selectorPrioridad = document.getElementById('prioridadSelect')

var busqueda = document.getElementById('search')

btnGuardar.addEventListener('click', recogerTarea)




function recogerTarea(event) {
    event.preventDefault()

    var titulo = document.getElementById('tituloTarea').value

    var prioridad = document.getElementById('prioridad').value


    if (prioridad != "" && titulo != "") {

        document.getElementById('mensaje').innerText = ""

        addTarea(titulo, prioridad)

        pintarTareas(listaTareas)



    } else {

        document.getElementById('mensaje').innerText = "Debes completar todos los campos correctamente"
    }
}

