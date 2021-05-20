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
var Ejercicio2_1 = require("./Ejercicio2");
var ReportDepartament = /** @class */ (function (_super) {
    __extends(ReportDepartament, _super);
    function ReportDepartament() {
        var _this = _super.call(this) || this;
        _this.reports = new Array();
        return _this;
    }
    ReportDepartament.prototype.addReports = function (newReport) {
        this.reports.push(newReport);
    };
    ReportDepartament.prototype.Mostrar = function () {
        for (var i = 0; i < this.reports.length; i++) {
            console.log(this.reports[i]);
        }
    };
    return ReportDepartament;
}(Ejercicio2_1["default"]));
var ObjetoReportes = new ReportDepartament();
ObjetoReportes.addReports("task 004 Faild");
ObjetoReportes.addReports("task 005 Faild");
ObjetoReportes.addReports("task 006 Faild");
//Agregue un reporte sin usar el metodo addReport
ObjetoReportes.reports.push("task 007 Faild");
ObjetoReportes.Mostrar();
//Impide que se agreguen mas reportes salvo utilizando el metodo creado(use modificadores)
