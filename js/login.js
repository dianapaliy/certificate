jQuery(function ($) {
    "use strict";
    var login;

    login = {
        init: function() {
            this.validation();
        },
        validation: function() {
            var $form = $('#loginForm');
            window.initializeFormValidation('loginForm');
        }
    };

    $(document).ready(function() {
        login.init();
    });

});

