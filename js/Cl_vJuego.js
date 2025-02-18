export default class Cl_vJuego {
    constructor () {
        this.inResultado = document.getElementById("juegoForm_inResultado");
        this.btProcesar = document.getElementById("juegoForm_btProcesar");
    }
get resultado () {
    return +this.inResultado.value;
}
    }