$(document).ready(function () {

    var el = document.getElementById('c');
    var ctx = el.getContext('2d');
    var isDrawing;

    el.onmousedown = function (e) {
        isDrawing = true;
        ctx.lineWidth = 80;
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#fff";
        ctx.strokeStyle = "#fff";
        ctx.moveTo(e.clientX, e.clientY);
    };
    el.onmousemove = function (e) {
        if (isDrawing) {
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
        }
    };
    el.onmouseup = function () {
        isDrawing = false;
    };

});

