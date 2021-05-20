"use strict";
exports.__esModule = true;
//CLASES Y INTERFACES
var Departament = /** @class */ (function () {
    function Departament() {
        this.owner = new Array();
        this.id = new Array();
    }
    Departament.prototype.workers = function () {
        for (var i = 0; i < this.owner.length; i++) {
            console.log(this.owner[i]);
        }
    };
    Departament.prototype.createWorker = function (Nombre, id) {
        this.owner.push(Nombre);
        this.id.push(id);
    };
    Departament.prototype.showemployesInfo = function () {
        console.log("La cantidad de Empleados son: " + this.owner.length);
        console.log("La lista de los Empleados:");
        this.workers();
    };
    return Departament;
}());
;
exports["default"] = Departament;
var Departamento1 = new Departament();
//Muestre la informacion de los trabajadores
Departamento1.createWorker('graciela', 1);
Departamento1.createWorker('Mabel', 2);
Departamento1.createWorker('Severina', 3);
//console.log(Departamento1.workers());
Departamento1.showemployesInfo();
