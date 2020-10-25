
var listaTareas = new Array();

listaTareas = [{ 'idTarea': 0, 'titulo': 'Estudiar Javascript', 'prioridad': 'urgente' },
{ 'idTarea': 2, 'titulo': 'Dormir', 'prioridad': 'diaria' },
{ 'idTarea': 3, 'titulo': 'Salir a comer', 'prioridad': 'mensual' }
];



var contador = 4

function pintarTareas(pListaTareas) {

    document.getElementById('notareas').innerHTML = ""

    var contenedor = document.getElementById('tareas')

    contenedor.innerHTML = "";

    for (var i = 0; i < pListaTareas.length; i++) {
        var articulo = document.createElement('article')

        articulo.id = pListaTareas[i].idTarea

        articulo.className = pListaTareas[i].prioridad

        var tituloTarea = document.createElement('h2')

        var textoTarea = document.createTextNode(pListaTareas[i].titulo)

        var btnEliminar = document.createElement('a')

        btnEliminar.href = "#"

        btnEliminar.title = "Eliminar"

        btnEliminar.setAttribute("onclick", "borrarTarea(" + pListaTareas[i].idTarea + ")")

        var textoEliminar = document.createTextNode('Eliminar')

        tituloTarea.appendChild(textoTarea)

        articulo.appendChild(tituloTarea)

        btnEliminar.appendChild(textoEliminar)

        articulo.appendChild(btnEliminar)

        contenedor.appendChild(articulo)


    }
}

pintarTareas(listaTareas)
