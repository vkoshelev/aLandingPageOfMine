$(document).ready(function () {
    $(".fancybox").fancybox();
});

$(document).ready(function () {

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(58, 42, 45, 0.95)'
                }
            }
        }
    });

    $('.image').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});