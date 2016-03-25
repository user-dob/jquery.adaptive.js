$(function() {

    var $win = $(window)

    var state = rangeToState()

    function rangeToState(width) {
        width = width || $win.width()

        if(width <= 480) return 480
        if(width <= 768) return 768
        if(width <= 992) return 992
        if(width <= 1200) return 1200

        return Infinity
    }

    $win.trigger('adaptive', state)

    $win.on('resize', function() {
        var tempState = rangeToState()
        if(state !== tempState) {
            state = tempState
            $win.trigger('adaptive', state)
        }
    })
})
