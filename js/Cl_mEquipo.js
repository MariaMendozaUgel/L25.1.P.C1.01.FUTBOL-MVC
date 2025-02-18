/*/ Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es 
perder, hacer un programa que indique el porcentaje de juegos que ganaste. 
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1,  /*/
import Cl_mJuego from "./Cl_mJuego.js";
export default class Cl_mEquipo {
    constructor () {
        this.contjuegosgan = 0
        this.contjuegosper = 0 }

    procesarJuegos (j) {
        if (j.resultado == 1) {
            this.contjuegosgan++
        } else {
            this.contjuegosper++
        }
    }
    Totaljuegos() {
        return this.contjuegosgan + this.contjuegosper;
    }
    CantJuegosPerdidos() {
        return this.contjuegosper;
    }
    CantJuegosGanados() {
        return this.contjuegosgan;
    }
    PorcentajeGanados() {
        return (this.contjuegosgan / this.Totaljuegos()) * 100
}
}