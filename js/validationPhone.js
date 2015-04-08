jQuery.validator.addMethod([
    ['validate-telephone-rus', function(v) {
        if(v != '' && v) {

            return /^\+79\d{9}$/.test(v);
        }
        return true;
    }]
]);
