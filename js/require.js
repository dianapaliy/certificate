jQuery(function ($) {
    "use strict";
    var require;

    require = {
        init: function() {
            this.validation();
            this.validateCardNumber();
            this.countdown();
            this.clearForm();
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
            //$(".year").mask("yy");
        },
        countdown: function() {

            $('#noDaysSeconds').countdown({
                until: '+15m +00s',
                onExpiry: liftOff,
                format: 'MS',
                padZeroes: true,
                compact: true,
                timeSeparator: ':',
                description: ''
            });
            function liftOff() {
                location.href = "http://192.168.0.39:3000/payment.html";
            }
        },
        clearForm: function() {
            var
                $btnClear = $('#clear');

            $btnClear.on('click', function (e) {
                e.preventDefault();

                $('#require')[0].reset();
            });
        }
    };

    $(document).ready(function() {
        require.init();
    });

});
