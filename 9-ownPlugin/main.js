$(document).ready(function() {

    $.fn.fancyButton = function() {
        this.css( {
            'display': 'inline-block',
            'height': '34px',
            'width': '150px',
            'vertical-align': 'middle',
            'text-align': 'center',
            'font-family': 'sans-serif',
            'background-color': 'chocolate',
            //'border': 'solid' '1px' 'chocolate',
            'opacity': '0.7',
            'color': 'pointer',
            'margin': '2px 0px',
            'line-height': '34px'
        });

        this.hover(function(e) {
            $(this).css({
                'opacity': e.type === 'mouseenter' ? '1.0': '0.2',
                'color': e.type === 'mouseenter' ? 'white': 'yellow' 
            });
        });
        return this;
    }

    $('.button1').fancyButton();
    $('.button2').fancyButton();
    $('.button3').fancyButton();

    $('.hallo').hover(function(e) {
        if(e.type === 'mouseenter') {
            console.log('mouse entered hello');
        }
    });
});