//Importem les funcions de l'arxiu arc
import {instanciararc, pintaArc} from './arc.mjs';
import {instanciarcercle, pintaCercle, reportPerimeter, reportArea} from './cercle.mjs';

//ARC DE SANT MARTI
//Fem referencia al canvas del html
let canva1 = document.getElementById("myCanvas1");


//Fiquem els colors de l'arc de sant marti en un array per a que pugui ser iterats
let coloraines = ['#ee82ee', '#4b0082', '#0000ff', '#008000', '#ffff00', '#ffa500', '#ff0000'];
//Matriu on guardarem cadascun dels arcs
let arcs = [];
//Valor inicial de tamany
let valor = 100;

//Instanciem cada arc, incrementant el valor de tamany de cada arc, i canviant de color 
for (let i = 0; i<coloraines.length; i++){
    arcs[i]=instanciararc(valor, coloraines[i]);
    valor+=15;
}
//Iterem l'array d'arcs i els anem pintant un a un
for (let j = 0; j<arcs.length; j++){
    pintaArc(arcs[j], canva1);
}

//CERCLES
//Guardem la referencia al segon canvas a una variable
let canva2 = document.getElementById("myCanvas2");
//Fiquem 10 valors de grisos en una matriu
let grisos = ['#A9A9A9', '#808080', '#818589', '#D3D3D3', '#899499', '#E5E4E2', '#C0C0C0', '#848884', '#71797E', '#36454F'];
//Fem un bucle que iteri 10 cops...
for (let i=0; i<10; i++){
    //Creem un cercle que tingui un tamany aleatori (maxim 50 pero es podria canviar), i que de color agafi un aleatori de la matriu de grisos
    let cercle = instanciarcercle(Math.random()*50, grisos[parseInt(Math.random()*10)]);
    //Pintem aquest cercle al segon canvas
    pintaCercle(cercle, canva2);
    //Indiquem a consola les arees i perimetres dels cercles
    console.log("L'area del cercle "+(i+1)+ " és "+ reportArea(cercle));
    console.log("El perimetre del cercle "+(i+1)+ " és "+ reportPerimeter(cercle));
}