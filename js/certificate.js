jQuery(function ($) {
    "use strict";
    window.currentDate = 1;
    window.fullMinutesSlider = 0;

    var certificate = {
        init: function() {
            this.prepareDateTimePicker();
            this.initializeCalendar();
            this.initializeUpdater();
            this.showCalendar();
            this.validation();
            this.initSwipeMonths();
        },
        showCalendar: function() {
            var $chooseTimeControls = $('.js-certificate-choose-time'),
                $chooseInTimeControl = $('#certificateSendInTime'),
                $calendar = $('#certificateCalendar');

            $chooseTimeControls.on('change', function() {
                if ($chooseInTimeControl.prop('checked')) {
                    $calendar.show();
                } else {
                    $calendar.hide();
                }
            });

            if ($chooseInTimeControl.prop('checked')) {
                $calendar.show();
            }
        },
        prepareDateTimePicker: function () {
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
                timeText: 'Время:',
                hourText: 'Часы:',
                minuteText: 'Минуты:',
                secondText: 'Секунды:',
                millisecText: 'Миллисекунды:',
                timezoneText: 'Часовой пояс:',
                currentText: 'Сейчас',
                closeText: 'Закрыть',
                timeFormat: 'HH:mm',
                amNames: ['AM', 'A'],
                pmNames: ['PM', 'P'],
                isRTL: false
            };
            $.timepicker.setDefaults($.timepicker.regional['ru']);
        },
        initializeCalendar: function(current) {
            var self = this;
            var $calendar = $('#datetimepicker'),
                date = new Date();

            current = current || date;

            $calendar.datetimepicker('destroy');
            $calendar.datetimepicker({
                showButtonPanel: false,
                altFieldTimeOnly: false,
                altFormat: 'yy-mm-dd',
                altTimeFormat: 'HH:mm',
                altField: '#date_send',
                minDateTime: date,
                onSelect: function(dateText) {
                    var dates = dateText.split(' ')[0].split('.'),
                        currentDay = dates[0],
                        currentMonth = dates[1],
                        currentYear = dates[2],
                        date = new Date();
                    if ((date.getDate() == +currentDay) && (date.getMonth() + 1 == +currentMonth) && (date.getFullYear() == +currentYear)) {
                        $calendar.removeClass('not-current-date');
                        window.currentDate = 1;
                    } else if (window.currentDate) {
                        window.currentDate = 0;
                        $calendar.addClass('not-current-date');
                    }
                }
            });

            $calendar.datetimepicker('setDate', current);
        },
        initializeUpdater: function () {
            var that = this,
                $calendar = $('#datetimepicker');

            setInterval(function() {
                var current = $calendar.datepicker('getDate');
                if (current < new Date()) {
                    current = new Date();
                }
                that.initializeCalendar(current);
            }, 1000 * 60); //per minute
        },
        validation: function() {
            var $form = $('#certificate');
            window.initializeFormValidation('certificate');
            $('#certificateRecipientTelephone').mask("+7 (999) 999-99-99");
        },
        initSwipeMonths: function() {
            bind();
            function swipeleftHandler(){
                unbind();
                $('.ui-datepicker-next').click();
                bind();
                return true;
            }
            function swiperightHandler(){
                unbind();
                $('.ui-datepicker-prev').click();
                bind();
                return true;
            }
            function bind() {
                $('.ui-datepicker-calendar').on( "swipeleft", swipeleftHandler ).on( "swiperight", swiperightHandler );
            }
            function unbind() {
                $('.ui-datepicker-calendar').off( "swipeleft", swipeleftHandler ).off( "swiperight", swiperightHandler );
            }
        }
    };

    $(function() {
        certificate.init();
    })
});