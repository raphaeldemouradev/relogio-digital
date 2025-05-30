function mudahora() {
var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

    var data = new Data()
    var hrs = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    
    horas.innerHTML = hrs
    minutos.innerHTML = min 
    segundos.innerHTML = seg
}