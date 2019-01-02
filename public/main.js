$(function() {
    // socket iniciado
    const socket = io()

    // variables
    const message = $('#chat-message')
    const chat = $('#chat')
    const burbujabot = $('#burbbot')
    const burbujauser = $('#burbuser')
        //   const send_btn=$('#chat-message-btn')

    message.focus()


    $('#chat-message-btn').click(function(e) {
        dato = message.val()
            // console.log(dato);
        crearBurbujauser(dato)
        message.val('')
    })

    $('#message-box').submit(function(e) {
        e.preventDefault()
        dato = message.val()
            // console.log(dato);
        crearBurbujauser(dato)
        socket.emit('mensajeCliente', dato)
        message.val('')
    })



    function crearBurbujabot(dato) {
        chat.append(
            `<div class="received_withd_msg">
                  <p>${dato}</p>
              </div>
              <br/>`)
    }


    function crearBurbujauser(dato) {
        chat.append(
            `<div class="sent_msg">
                  <p>${dato}</p>
              </div>
              <br/>`)
    }


    socket.on('mensajeServidor', (data) => {
        console.log(data);
        crearBurbujabot(data)
    })
})