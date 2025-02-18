export default class Cl_controlador {
    constructor (modelo,vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarJuegos () {
        this.modelo.procesarJuegos(this.vista.procesarJuegos());
        this.vista.reportarJuegos(
            this.modelo.Totaljuegos(), 
            this.modelo.CantJuegosPerdidos(), 
            this.modelo.CantJuegosGanados(), 
            this.modelo.PorcentajeGanados()
        );        
    }
}