function getCanva(id){
    var c = document.getElementById(id);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(80, 0);
    ctx.lineTo(80, 40);
    ctx.bezierCurveTo(80, 40, 78, 70, 45, 85);
    ctx.bezierCurveTo(45, 85, 10, 100, 10, 120);
    ctx.lineTo(0, 120);
    ctx.fillStyle = "rgb(107, 88, 165)";
    ctx.fill();
}

getCanva("canv1");
getCanva("canv2");
