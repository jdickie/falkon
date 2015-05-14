(function($) {
    var interval = 3000,
        addAMessage = function(message) {
            var $message;
            $message = $('<div class="message"><h3>' + message.title + '</h3><p>' + message.body + '</p></div>');
            $('#messages').append($message);
        };
    setInterval(function() {
        $.ajax({
            url : 'http://localhost:3020/falkon',
            success : function(json) {
                $.each(json, function(message, index) {
                   addAMessage(message);
                });
            }
        });
    },interval);

})(jQuery);