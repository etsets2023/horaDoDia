function  carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        
        img.src = './img/manha.jpg'
        document.body.style.background = '#f4b16b'
        msg.innerHTML = 'Bom dia!! Agora são ' + hora + ' horas.'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = './img/tarde.jpg'
        document.body.style.background = '#fe6500'
        msg.innerHTML = 'Boa tarde! Agora são ' + hora + ' horas.'
    } else {
        //BOA NOITE!
        img.src = './img/noite.jpg'
        document.body.style.background = '#032d5f'
        msg.innerHTML = 'Boa noite! Agora são ' + hora + ' horas.'
    }
}
