//1-cree una variable name y dele su nombre
let nombre:string|number='Graciela';
//2-intente cambiar el valor name por un numero
nombre=21;
//3-Por que typescript no le permite realizar la accion anterior?
//Es por que la variable nombre es declarado como una cadena, por lo que 
//es un error darle un numero ya que no esta declarado como un numero
//y typescript como es fuertemente tipado no deja esta accion.
//4-Cree una funcion llamado greet
const greet=function(n:string,age:number){
    return "hello "+n+ " ,your age is "+ age;
}
console.log(greet('Jossie',25));
//5-Que tipo de retorno le asigno a esta funcion?
//Se le asigno una funcion con devolucion, para retornan el nombre 
//y la edad, pero tambien se puede que una funcion que no devuelva nada
//porque hay mismo se mandaria los parametros y poner una imprimacion ahi mismo.
//6-Cree una funcion donde el tipo de retorno never sea util
function error():never{
    throw new Error("Esto no es posible");
}
const Validar=function(user:String){
    if(user!=="NaN"){
        return "correcto";
    }
    return error();
}
console.log(Validar("Graciela"));
//7-Cambie el tipo de retorno de la funcion greet a never
/*const greet2=function(n:string,age:number):never{
    return "hello "+n+ " ,your age is "+ age;
}*/
//8-La accion anterior le da un error?
//R-Si, Porque never significa algo imposible que no puede suceder
//osea que no puede devolver nada, no como una funcion void, solo que 
//no devolvera nada es como una funcion de escape.
//9- Modifique la funcion "greet" para poder implementar una funcion...
const greet3=function(n:string,age:number){
    return "hello "+n+ " ,your age is "+ age;
}
//10-Haga una llamada a la funcion para comprobar sus resultados
console.log(greet3('Graciela',21));
//11-
const greet4=function(n:string,age:number,nacimiento:number|string){
    return "hello "+n+ " ,your age is "+ age+" Fecha de nacimiento: "+nacimiento;

}
console.log(greet4("Graciela",21,"mil novecientos noventa nueve"));



