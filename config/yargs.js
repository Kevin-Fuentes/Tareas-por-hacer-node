const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea por hacer",
};

const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado la tarea",
};

const argv = require("yargs")
  .command("crear", "crear un elemento por hacer", { descripcion })
  .command("actualizar", "Actualizar el estado commpletado de una tarea",{descripcion,completado})
  .command("borrar", "crear un elemento por hacer", {descripcion})
  .help().argv;

module.exports = {
  argv,
};
