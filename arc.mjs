//Funcio instanciar amb una posicio, angle i gruix fixe, i determinem color i tamany de l'arc
function instanciararc(tamany, color){
  return {
  x : 400,
  y: 400,
  //Altrament dit 180º
  angle: Math.PI,
  gruix : 15,
  tamany: tamany,
  color: color
  }

}

//Funcio que pinta a un canvas un objecte arc. 
function pintaArc(cerc, canv){
  let ctx = canv.getContext("2d");
  ctx.beginPath();
  //S'indica gruix i color de la linia de traçat
  ctx.lineWidth = cerc.gruix;
  ctx.strokeStyle = cerc.color;
  //Es passen els valors de l'arc 
  ctx.arc(cerc.x, cerc.y, cerc.tamany, cerc.angle, 0);
  //Es dibuixa
  ctx.stroke();
  //I es fa return
  return ctx;
}

//Exportem les funcions realitzades abans
export {instanciararc, pintaArc};
