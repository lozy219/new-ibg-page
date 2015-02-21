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
}