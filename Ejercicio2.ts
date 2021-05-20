//CLASES Y INTERFACES
class Departament{
    owner:Array<string>;
    id:Array<number>;
    constructor(){
        this.owner=new Array();
        this.id=new Array();
    }
    workers():void{
        for(let i=0;i<this.owner.length;i++){
            console.log(this.owner[i]);
        }
   }
   createWorker(Nombre:string,id:number):void{
    this.owner.push(Nombre);
    this.id.push(id);
   }
   showemployesInfo(){
    console.log("La cantidad de Empleados son: "+this.owner.length);
    console.log("La lista de los Empleados:");
    this.workers();
   }
};
export default Departament;
 let Departamento1=new Departament(); 
 //Muestre la informacion de los trabajadores
 Departamento1.createWorker('graciela',1);
 Departamento1.createWorker('Mabel',2);
 Departamento1.createWorker('Severina',3);
 //console.log(Departamento1.workers());
 Departamento1.showemployesInfo();



