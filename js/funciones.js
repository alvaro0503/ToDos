function addTarea(pTitulo, pPrioridad) {
    var nuevaTarea = { 'idTarea': contador, 'titulo': pTitulo, 'prioridad': pPrioridad }

    listaTareas.push(nuevaTarea)

    contador++

}

