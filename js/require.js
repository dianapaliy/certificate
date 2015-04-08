jQuery(function ($) {
    "use strict";
    var require;

    require = {
        init: function() {
            this.validation();
            this.validateCardNumber();
        },
        validation: function() {
            var $form = $('#require');
            window.initializeFormValidation('require');
        },
        validateCardNumber: function() {
            var
                $number = $(".numeric");

            $number.keydown(function(e){
                var keyPressed;
                if (!e) var e = window.event;
                if (e.keyCode) keyPressed = e.keyCode;
                else if (e.which) keyPressed = e.which;
                var hasDecimalPoint = (($(this).val().split('.').length-1)>0);
                if ( keyPressed == 46 || keyPressed == 8 ||((keyPressed == 190||keyPressed == 110)&&(!hasDecimalPoint)) || keyPressed == 9 || keyPressed == 27 || keyPressed == 13 ||
                        // Allow: Ctrl+A
                    (keyPressed == 65 && e.ctrlKey === true) ||
                        // Allow: home, end, left, right
                    (keyPressed >= 35 && keyPressed <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                else {
                    // Ensure that it is a number and stop the keypress
                    if (e.shiftKey || (keyPressed < 48 || keyPressed > 57) && (keyPressed < 96 || keyPressed > 105 )) {
                        e.preventDefault();
                    }
                }

            });
        }
    };

    $(document).ready(function() {
        require.init();
    });

});
