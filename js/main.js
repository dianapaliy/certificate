/*global $:false, jQuery:false */
jQuery(function ($) {
    "use strict";
    var require;

    require = {
        init: function() {
            this.clearForm();
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