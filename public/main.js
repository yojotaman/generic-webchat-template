$(function() {
    // socket iniciado
    var socket = io()

    // variables
    var message = $('#chat-message')
    var chat = $('#chat')

    message.focus()

    $('#message-box').submit(function(e) {
        e.preventDefault()
            // chat.append(message.val() + '<br/>');
        socket.emit('mensaje-del-cliente', message.val())
        message.val('')

    })

    socket.on('mensaje-del-servidor', (data) => {
        // console.log(data);
        chat.append(data + '<br/>')
    })
})