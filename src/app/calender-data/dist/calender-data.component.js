"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalenderDataComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var app_component_1 = require("../app.component");
var CalenderDataComponent = /** @class */ (function () {
    function CalenderDataComponent() {
    }
    // @Input() raja:string;
    CalenderDataComponent.prototype.ngOnInit = function () {
        var myap = new app_component_1.AppComponent();
        var b = myap.b;
        var ii = myap.i;
        console.log();
        var a = new Date();
        b[0].addEventListener('click', function (e) { e.preventDefault(); getdata(ii.val(), a.getMonth() + 1, a.getFullYear()); });
        var ok = function (e) {
            e.preventDefault();
            var curmonth = a.getMonth() + 1;
            var arr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",];
            do {
                getdata(ii.val(), curmonth++, a.getFullYear());
            } while (curmonth != 2);
        };
        document.getElementById('next').addEventListener('click', ok);
        var getdata = function (city, month, year) {
            $('.mon').find('tr').empty();
            $('.tue').find('tr').empty();
            $('.wed').find('tr').empty();
            $('.thurs').find('tr').empty();
            $('.fri').find('tr').empty();
            $('.sat').find('tr').empty();
            $('.sun').find('tr').empty();
            $('.ath').find('tr').empty();
            $('.thal').find('tr').empty();
            $('.arba').find('tr').empty();
            $('.khamees').find('tr').empty();
            $('.juma').find('tr').empty();
            $('.sabt').find('tr').empty();
            $('.ahad').find('tr').empty();
            $('.fajr').find('tr').empty();
            $('.sunr').find('tr').empty();
            $('.dhuhr').find('tr').empty();
            $('.asr').find('tr').empty();
            $('.suns').find('tr').empty();
            $('.maghrib').find('tr').empty();
            $('.isha').find('tr').empty();
            $('.midn').find('tr').empty();
            $('.imsak').find('tr').empty();
            $.getJSON('http://api.aladhan.com/v1/calendarByCity?city=' + city + '&country=pakistan&month=' + month + '&year=' + year, function (json) {
                console.log(json);
                for (var i = 0; i <= 29; i++) {
                    switch (json.data[i].date.gregorian.weekday.en) {
                        case "Monday":
                            {
                                $('.mon').append('<tr><td>' + json.data[i].date.gregorian.day + '</td></tr>');
                                break;
                            }
                        case "Tuesday":
                            {
                                $('.tue').append('<tr><td>' + json.data[i].date.gregorian.day + '</td></tr>');
                                break;
                            }
                        case "Wednesday":
                            {
                                $('.wed').append('<tr><td>' + json.data[i].date.gregorian.day + '</td></tr>');
                                break;
                            }
                        case "Thursday":
                            {
                                $('.thurs').append('<tr><td>' + json.data[i].date.gregorian.day + '</td></tr>');
                                break;
                            }
                        case "Friday":
                            {
                                $('.fri').append('<tr><td>' + json.data[i].date.gregorian.day + '</td></tr>');
                                break;
                            }
                        case "Saturday":
                            {
                                $('.sat').append('<tr><td>' + json.data[i].date.gregorian.day + '</td></tr>');
                                break;
                            }
                        case "Sunday":
                            {
                                $('.sun').append('<tr><td>' + json.data[i].date.gregorian.day + '</td></tr>');
                                break;
                            }
                    }
                }
                for (var i = 0; i <= 29; i++) {
                    switch (json.data[i].date.hijri.weekday.en) {
                        case "Al Athnayn":
                            {
                                $('.ath').append('<tr><td>' + json.data[i].date.hijri.day + '</td></tr>');
                                break;
                            }
                        case "Al Thalaata":
                            {
                                $('.thal').append('<tr><td>' + json.data[i].date.hijri.day + '</td></tr>');
                                break;
                            }
                        case "Al Arba'a":
                            {
                                $('.arba').append('<tr><td>' + json.data[i].date.hijri.day + '</td></tr>');
                                break;
                            }
                        case "Al Khamees":
                            {
                                $('.khamees').append('<tr><td>' + json.data[i].date.hijri.day + '</td></tr>');
                                break;
                            }
                        case "Al Juma'a":
                            {
                                $('.juma').append('<tr><td>' + json.data[i].date.hijri.day + '</td></tr>');
                                break;
                            }
                        case "Al Sabt":
                            {
                                $('.sabt').append('<tr><td>' + json.data[i].date.hijri.day + '</td></tr>');
                                break;
                            }
                        case "Al Ahad":
                            {
                                $('.ahad').append('<tr><td>' + json.data[i].date.hijri.day + '</td></tr>');
                                break;
                            }
                    }
                }
                for (var i = 0; i <= 29; i++) {
                    switch (json.data[i].date.hijri.day) {
                        case "01":
                            $('.fajr').append('<tr><td>' + json.data[i].timings.Fajr + '</td></tr>');
                            $('.sunr').append('<tr><td>' + json.data[i].timings.Sunrise + '</td></tr>');
                            $('.dhuhr').append('<tr><td>' + json.data[i].timings.Dhuhr + '</td></tr>');
                            $('.asr').append('<tr><td>' + json.data[i].timings.Asr + '</td></tr>');
                            $('.suns').append('<tr><td>' + json.data[i].timings.Sunset + '</td></tr>');
                            $('.maghrib').append('<tr><td>' + json.data[i].timings.Maghrib + '</td></tr>');
                            $('.isha').append('<tr><td>' + json.data[i].timings.Isha + '</td></tr>');
                            $('.midn').append('<tr><td>' + json.data[i].timings.Midnight + '</td></tr>');
                            $('.imsak').append('<tr><td>' + json.data[i].timings.Imsak + '</td></tr>');
                            break;
                    }
                }
            });
        };
    };
    CalenderDataComponent = __decorate([
        core_1.Component({
            selector: 'calender',
            templateUrl: './calender-data.component.html',
            styleUrls: ['./calender-data.component.css']
        })
    ], CalenderDataComponent);
    return CalenderDataComponent;
}());
exports.CalenderDataComponent = CalenderDataComponent;
