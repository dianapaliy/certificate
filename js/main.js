/*global $:false, jQuery:false */
jQuery(function ($) {
    "use strict";
    var require;

    require = {
        init: function() {
            this.clearForm();
            this.countdown();
        },
        clearForm: function() {
            var
                $btnClear = $('#clear');

            $btnClear.on('click', function (e) {
                e.preventDefault();

                $('#require')[0].reset();
            });
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
        }
    };

    $(document).ready(function() {
        require.init();
    });

});