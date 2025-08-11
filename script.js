var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var relogio = setInterval(function time() {
    var data = new Date()
    var hrs = data.getHours() 
    var min = data.getMinutes() 
    var seg = data.getSeconds()

    horas.textContent = fixTime(hrs)
    minutos.textContent = fixTime(min)
    segundos.textContent = fixTime(seg)

    function fixTime(time){
        return time < 10 ? '0'+time : time
    }
})