import Cl_vJuego from "./Cl_vJuego.js";
import Cl_mJuego from "./Cl_mJuego.js";

export default class Cl_vEquipo {
    constructor () {
      this.controlador = null;
      this.mJuego = null;
      this.vJuego = new Cl_vJuego ();
      this.btProcesar = document.getElementById("juegoForm_btProcesar");
      this.salida = document.getElementById("mainForm_salida");
      this.btProcesar.onclick = () => this.controlador.procesarJuegos();
    }

    procesarJuegos() {
        this.mJuego = new Cl_mJuego ({
            resultado: this.vJuego.resultado,
        });
        return this.mJuego;
    }
    reportarJuegos(Totaljuegos, CantJuegosPerdidos, CantJuegosGanados,PorcentajeGanados) {
        this.salida.innerHTML = `
         Total de juegos: ${Totaljuegos} <br>
         Juegos perdidos: ${CantJuegosPerdidos} <br>
         Juegos ganados: ${CantJuegosGanados} <br>
         Porcentaje de juegos ganados: ${PorcentajeGanados}% <br>`
    }   
}


