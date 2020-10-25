function addTarea(pTitulo, pPrioridad) {
    var nuevaTarea = { 'idTarea': contador, 'titulo': pTitulo, 'prioridad': pPrioridad }

    listaTareas.push(nuevaTarea)

    contador++

}

function borrarTarea(pId) {
    for (var i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].idTarea == pId) {
            var registroBorrar = i
        }
    }

    listaTareas.splice(registroBorrar, 1)// metodo .splice eleimina elementos del array(incluido a si mismo en el numero)

    pintarTareas(listaTareas)
}