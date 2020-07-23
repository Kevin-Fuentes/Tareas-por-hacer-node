const { argv } = require("./config/yargs");
const { crear, getListado, actualizar,borrarTarea} = require("./por-hacer/por-hacer");
const color = require("colors");
const comando = argv._[0];

switch (comando) {
  case "crear":
    const tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    const listado = getListado();

    if (listado.length > 0) {
      for (let tarea of listado) {
        console.log("=========Por Hacer=========".green);
        console.log("Tarea: ", tarea.descripcion);
        console.log("Estado: ", tarea.completado);
        console.log("===========================".green);
      }
      return;
    }
    console.log("Tu lista esta vacia");
    break;

  case "actualizar":
    const actualizado = actualizar(argv.descripcion, argv.completado);

    if (actualizado) {
      return console.log("Tarea Actualizada".green);
    }
    console.log("Tarea No encontrada".green);
    break;


    case "borrar" :
         const borrar = borrarTarea(argv.descripcion)
         console.log(borrar)
if(borrar){
     return console.log('Se Elimino Corretamente');
}

console.log('No se encontro esta tarea')

    break
  default:
       console.log("Comando no encontrado")
    break;
}
