//cree una clase CEODepartament
import Departament from "./Ejercicio2";
class CEODepartament extends Departament{
    adnmins:Array<string>;
    constructor(){
        super();
        this.adnmins=new Array();
    }
    addCEODepartament(rol:string){
        this.adnmins.push(rol);
    }
    Mostrar():void{
        for(let i=0;i<this.adnmins.length;i++){
            console.log(this.adnmins[i]);
        }
   }

}
let  ObjetoCEO=new CEODepartament();
//cree una instancia CEO y agregue
ObjetoCEO.addCEODepartament('author'); 
ObjetoCEO.addCEODepartament('Gerente'); 
ObjetoCEO.addCEODepartament('EmpleadoNormal'); 
ObjetoCEO.Mostrar();
