import Cl_vEquipo from "./Cl_vEquipo.js";
import Cl_mEquipo from "./Cl_mEquipo.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
    constructor () {
        let vista = new Cl_vEquipo();
        let modelo = new Cl_mEquipo();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}


