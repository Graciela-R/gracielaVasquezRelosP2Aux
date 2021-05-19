//CLASES Y INTERFACES
class Departament{
    owner:string;
    id:number;
    vectorNombres=new Array();
    constructor(owner:string,id:number){
        this.owner=owner;
        this.id=id;
    }
    workers():void{
        for(let i=0;i<this.vectorNombres.length;i++){
            console.log(this.vectorNombres[i]);
        }
   }  
   createWorker(add:string):void{
    this.vectorNombres[this.vectorNombres.length-1]=add;
   }
   showemployesInfo(){
      return this.owner;
       
   }
 
}
 let Departamento1=new Departament("Luna",1); 
 let Departamento2=new Departament("Luna2",2); 
 let Departamento3=new Departament("Luna3",3); 
 //Muestre la informacion de los trabajadores
 Departamento1.createWorker('Graciela');
 console.log(Departamento1.workers());



