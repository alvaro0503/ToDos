function addTarea(pTitulo, pPrioridad) {
    var nuevaTarea = { 'idTarea': contador, 'titulo': pTitulo, 'prioridad': pPrioridad }

    listaTareas.push(nuevaTarea)

    contador++

}

function borrarTarea(pId) {
    for (var i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].idTarea == pId) {
            var borrar = i
        }
    }

    listaTareas.splice(borrar, 1)

    pintarTareas(listaTareas)
}


function filtrarTareas(pPrioridad) {

    var listaTemporal = new Array()

    for (var i = 0; i < listaTareas.length; i++) {

        if (listaTareas[i].prioridad == pPrioridad) {

            listaTemporal.push(listaTareas[i])
        }
    }

    return (listaTemporal)
}

function busqueda(pPalabraBuscar) {

    var listaTemporal = new Array()

    var busqueda = pPalabraBuscar.toLowerCase()

    for (var i = 0; i < listaTareas.length; i++) {

        if (listaTareas[i].titulo.toLowerCase().indexOf(busqueda) != -1) {

            listaTemporal.push(listaTareas[i])
        }

    }

    return listaTemporal
}
