$.getJSON("data/message.json", function () {
    console.log("success");
}).done(function (data) {

    $('#last_message').text(data.message);

    $('form').on('submit', function () {
        const message = $('#message').val();
        console.log(message);
        $.post('/save', {message: message}).done(function () {
            location.reload();
        });
    });
});