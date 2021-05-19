//CLASES Y INTERFACES
var Departament = /** @class */ (function () {
    function Departament(owner, id) {
        this.vectorNombres = new Array();
        this.owner = owner;
        this.id = id;
    }
    Departament.prototype.workers = function () {
        for (var i = 0; i < this.vectorNombres.length; i++) {
            console.log(this.vectorNombres[i]);
        }
    };
    Departament.prototype.createWorker = function (add) {
        this.vectorNombres[this.vectorNombres.length - 1] = add;
    };
    Departament.prototype.showemployesInfo = function () {
        return this.owner;
    };
    return Departament;
}());
var Departamento1 = new Departament("Luna", 1);
var Departamento2 = new Departament("Luna2", 2);
var Departamento3 = new Departament("Luna3", 3);
//Muestre la informacion de los trabajadores
Departamento1.createWorker('Graciela');
console.log(Departamento1.workers());
