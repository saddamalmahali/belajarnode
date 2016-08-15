$(document).ready(function () {
    $('#post-comment').hide();
    $('#btn-comment').on('click', function (event) {
        event.preventDefault();
        $('#post-comment').slideDown(500);
    });
    
    $('#btn-like').on("click", function(e){
        e.preventDefault();
        var imgId = $(this).data('id');
        
        $.post('/images/'+imgId+'/like').done(function(data){
            $('.likes-count').text(data.likes);
        });
    });
});