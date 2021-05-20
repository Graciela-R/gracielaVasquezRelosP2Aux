import Departament from "./Ejercicio2";
class ReportDepartament extends Departament{
    reports:Array<string>;
    constructor(){
        super();
        this.reports=new Array();
    }
    addReports(newReport:string){
        this.reports.push(newReport);
    }
    Mostrar():void{
        for(let i=0;i<this.reports.length;i++){
            console.log(this.reports[i]);
        }
   }

}
let  ObjetoReportes=new ReportDepartament();
ObjetoReportes.addReports("task 004 Faild");
ObjetoReportes.addReports("task 005 Faild");
ObjetoReportes.addReports("task 006 Faild");
//Agregue un reporte sin usar el metodo addReport
ObjetoReportes.reports.push("task 007 Faild");
ObjetoReportes.Mostrar();
//Impide que se agreguen mas reportes salvo utilizando el metodo creado(use modificadores)

