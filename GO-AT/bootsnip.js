$(function() {
    $('#search').on('keyup', function() {
        var pattern = $(this).val();
        console.log(pattern);
        $('.searchable-container .items').hide();
        $('.searchable-container .items').filter(function() {
            return $(this).text().match(new RegExp(pattern, 'i'));
        }).show();
    });
});
