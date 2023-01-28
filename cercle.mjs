//Funcio instanciar amb una posicio, angle i gruix fixe, i determinem color i tamany de l'arc
function instanciarcercle(tamany, color) {
    return {
        x: Math.random()*700,
        y: Math.random()*700,
        //360º
        angle: 2*Math.PI,
        gruix: 15,
        tamany: tamany,
        color: color
    }
}
//Funcio que pinta un cercle indicat al canvas indicat
function pintaCercle(cerc, canv) {
    let ctx = canv.getContext("2d");
    ctx.beginPath();
    //S'indica gruix i color de la linia de traçat
    ctx.lineWidth = cerc.gruix;
    ctx.strokeStyle = cerc.color;
    //Es passen els valors del cercle
    ctx.arc(cerc.x, cerc.y, cerc.tamany, cerc.angle, 0);
    //Es dibuixa
    ctx.stroke();
    //I es fa return
    return ctx;
}
//Retorna el valor de l'area del cercle indicat
function reportArea(cerc){
    return (Math.PI*cerc.tamany*cerc.tamany);
}
//Retorna el valor del perimetre del cercle indicat
function reportPerimeter(cerc){
    return (Math.PI*cerc.tamany);
}
//S'exporten les funcions realitzades
export{instanciarcercle, pintaCercle, reportArea, reportPerimeter}