/*global $:false, jQuery:false */
jQuery(function ($) {
    "use strict";
    var require;

    require = {
        init: function() {
            this.clearForm();
            this.validation();
        },
        clearForm: function() {
            var
                $btnClear = $('#clear');

            $btnClear.on('click', function (e) {
                e.preventDefault();

                $('#require')[0].reset();
            });
        },
        validation: function() {
            var $form = $('#certificate');
            window.initializeFormValidation('certificate');
            $('#certificateRecipientTelephone').mask("+7 (999) 999-99-99");
        }
    };

    $(document).ready(function() {
        require.init();
    });

});