/*global $:false, jQuery:false */
jQuery(function ($) {
    "use strict";
    var certificate;
    window.currentDate = 1;
    window.fullMinutesSlider = 0;

    certificate = {
        init: function() {
            this.initializeCalendar();
            this.showCalendar();
        },
        showCalendar: function() {
            var $$chooseTimeControls = $('.js-certificate-choose-time'),
                $chooseInTimeControl = $('#certificateSendInTime'),
                $calendar = $('#certificateCalendar');

            $$chooseTimeControls.on('change', function() {
                if ($chooseInTimeControl.prop('checked')) {
                    $calendar.show();
                } else {
                    $calendar.hide();
                }
            });
        },
        initializeCalendar: function() {
            var $calendar = $('#datetimepicker');
            $.datepicker.regional['ru'] = {
                closeText: 'Закрыть',
                prevText: 'Назад',
                nextText: 'Вперёд',
                currentText: 'Сегодня',
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль', 'Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 'Июл', 'Авг', 'Сен','Окт','Ноя','Дек'],
                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                weekHeader: 'Не',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['ru']);

            $.timepicker.regional['ru'] = {
                timeOnlyTitle: 'Выберите время',
                timeText: 'Время',
                hourText: 'Часы',
                minuteText: 'Минуты',
                secondText: 'Секунды',
                millisecText: 'Миллисекунды',
                timezoneText: 'Часовой пояс',
                currentText: 'Сейчас',
                closeText: 'Закрыть',
                timeFormat: 'HH:mm',
                amNames: ['AM', 'A'],
                pmNames: ['PM', 'P'],
                isRTL: false
            };
            $.timepicker.setDefaults($.timepicker.regional['ru']);
            var date = new Date();
            $calendar.datetimepicker({
                showButtonPanel: false,
                minDateTime: date,
                altFieldTimeOnly: false,
                altFormat: 'yy-mm-dd',
                altTimeFormat: 'HH:mm',
                altField: '#date_send',
                onSelect: function(dateText) {
                    var dates = dateText.split(' ')[0].split('.'),
                        currentDay = dates[0],
                        currentMonth = dates[1],
                        currentYear = dates[2],
                        date = new Date();
                    if ((date.getDate() == +currentDay) && (date.getMonth() + 1 == +currentMonth) && (date.getFullYear() == +currentYear)) {
                        $calendar.removeClass('not-current-date');
                        window.currentDate = 1;
                    } else {
                        if (window.currentDate) {
                            window.currentDate = 0;
                            $calendar.addClass('not-current-date');
                        }

                    }
                }
            });
        }
    };

    $(document).ready(function() {
        certificate.init();
    });

});