var btnGuardar = document.getElementById('guardar')

var selectorPrioridad = document.getElementById('prioridadSelect')

var busqueda = document.getElementById('search')

btnGuardar.addEventListener('click', recogerTarea)
selectorPrioridad.addEventListener('change', recogerPrioridad)
busqueda.addEventListener('keyup', recogerBusqueda)



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

function recogerPrioridad(event) {

    var prioridad = event.target.value

    if (prioridad == "") {

        pintarTareas(listaTareas)

    } else {

        var listaFiltrada = filtrarTareas(prioridad)

        pintarTareas(listaFiltrada)
    }


}

function recogerBusqueda(event) {

    var palabraBuscar = event.target.value

    var listaBusqueda = busqueda(palabraBuscar)

    if (listaBusqueda.length != 0) {



        pintarTareas(listaBusqueda)

    } else {

        document.getElementById('tareas').innerHTML = ""

        document.getElementById('notareas').innerHTML = "<article>No hay tareas con esos parametros</article>"
    }



    console.log(palabraBuscar)
}

