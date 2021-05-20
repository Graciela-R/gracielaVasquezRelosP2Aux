"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//cree una clase CEODepartament
var Ejercicio2_1 = require("./Ejercicio2");
var CEODepartament = /** @class */ (function (_super) {
    __extends(CEODepartament, _super);
    function CEODepartament() {
        var _this = _super.call(this) || this;
        _this.adnmins = new Array();
        return _this;
    }
    CEODepartament.prototype.addCEODepartament = function (rol) {
        this.adnmins.push(rol);
    };
    CEODepartament.prototype.Mostrar = function () {
        for (var i = 0; i < this.adnmins.length; i++) {
            console.log(this.adnmins[i]);
        }
    };
    return CEODepartament;
}(Ejercicio2_1["default"]));
var ObjetoCEO = new CEODepartament();
//cree una instancia CEO y agregue
ObjetoCEO.addCEODepartament('author');
ObjetoCEO.addCEODepartament('Gerente');
ObjetoCEO.addCEODepartament('EmpleadoNormal');
ObjetoCEO.Mostrar();
