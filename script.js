var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

//funçao tempo que pega as horas, minutos, segundos
var relogio = setInterval(function time() {
    var data = new Date()
    var hrs = data.getHours() //pega horas
    var min = data.getMinutes() //pega minutos
    var seg = data.getSeconds() //pega segundos

    horas.textContent = fixTime(hrs)
    minutos.textContent = fixTime(min)
    segundos.textContent = fixTime(seg)
    //textContent para mudar o texto

    function fixTime(time){
        return time < 10 ? '0' + time : time
    }

})