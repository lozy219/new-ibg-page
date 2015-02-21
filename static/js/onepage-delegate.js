function pageWillScrollTo(index) {
    if (index == 1) {
        $(".onepage-pagination").animate({
            'right': "-20px"
        }, 500)
    } else {
        $(".onepage-pagination").animate({
            'right': '30px'
        }, 500)
    }
};

$('#carousel-example-generic').on('slide.bs.carousel', function(e) {
    var active = $(e.target).find('.carousel-inner > .item.active');
    var from = active.index();
    var next = $(e.relatedTarget);
    var to = next.index();
    console.log(from + ' => ' + to);

    if (to != 0) {
        $("#title-carousel-slide").animate({
            'opacity': "0",
            'top': "100%"
        }, 300);

        $("#subtitle-carousel-slide").animate({
            'opacity': "0",
            'top': "113%"
        }, 300);

        $("#subtitle-carousel-button").animate({
            'opacity': "0",
            'top': "133%"
        }, 300);
    }
});

$('#carousel-example-generic').on('slid.bs.carousel', function(e) {
    var active = $(e.target).find('.carousel-inner > .item.active');
    var from = active.index();
    var next = $(e.relatedTarget);
    var to = next.index();
    console.log(from + ' => ' + to);

    if (to == 0) {
        $("#title-carousel-slide").animate({
            'opacity': "1",
            'top': "30%"
        }, 300);

        $("#subtitle-carousel-slide").animate({
            'opacity': "1",
            'top': "48%"
        }, 500);

        $("#subtitle-carousel-button").animate({
            'opacity': "1",
            'top': "76%"
        }, 900);
    }
});