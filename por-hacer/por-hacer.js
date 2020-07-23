const fs = require("fs");
let listadoPorHacer = [];

//GUARDAR EN LA BASES DE DATOS
const guardarDB = () => {
  const data = JSON.stringify(listadoPorHacer);

  fs.writeFile("db/data.json", data, (err) => {
    if (err) console.log("No se pudo grabar", err);
  });
};

// CARGAR LA BASE DE DATOS
const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

//CREAR EN LA BASES DE DATOS
const crear = (descripcion) => {
  cargarDB();

  const porHacer = {
    descripcion,
    completado: false,
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

//LISTAR EN LA BASES DE DATOS
const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actualizar = (descripcion, completado) => {
  cargarDB();
  const index = listadoPorHacer.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrarTarea = (descripcion) => {
  cargarDB();
  const newListadoPorHacer = listadoPorHacer.filter(
    (tarea) => tarea.descripcion !== descripcion
  );

  if (JSON.stringify(newListadoPorHacer) !== JSON.stringify(listadoPorHacer)) {
    listadoPorHacer = newListadoPorHacer;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrarTarea,
};
