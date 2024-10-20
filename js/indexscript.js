$(function() { 
    $('#sun').click(function() {
        $(this).attr('src', 'images/sun2.webp') 
            .on('load', function() { 
                setTimeout(() => {
                    $(this).remove(); 
                    $('body').append('<img src="images/happy.gif" id="happy">');
                }, 1300);
            });
    });

    $('#mars').hover(
        function() {
            var $this = $(this);
            $this.addClass('zoom');     
            setTimeout(function() {
                if ($this.hasClass('zoom')) {
                    $('#dropbox').fadeIn();
                }
            }, 500); 
        },
        function() {
            $(this).removeClass('zoom');  
            $('#dropbox').fadeOut();
        }
    );
});