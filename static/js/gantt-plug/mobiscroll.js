!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).mobiscroll = {}));
})(this, function (e) {
    "use strict";
    var t = { apiKey: "1379bb58", apiUrl: "https://trial.mobiscroll.com/" },
        a =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>',
        n =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>',
        s =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>',
        i =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"/></svg>',
        r =
            '<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 17 17" width="17"><path d="M8.5 0a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3.364 5.005a.7.7 0 00-.99 0l-2.44 2.44-2.439-2.44-.087-.074a.7.7 0 00-.903 1.064l2.44 2.439-2.44 2.44-.074.087a.7.7 0 001.064.903l2.439-2.441 2.44 2.441.087.074a.7.7 0 00.903-1.064l-2.441-2.44 2.441-2.439.074-.087a.7.7 0 00-.074-.903z" fill="currentColor" fill-rule="evenodd"/></svg>',
        o = function (e, t) {
            return (
                (o =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    }),
                o(e, t)
            );
        };
    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function a() {
            this.constructor = e;
        }
        o(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
    }
    var c = function () {
        return (
            (c =
                Object.assign ||
                function (e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++) for (var s in (t = arguments[a])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e;
                }),
            c.apply(this, arguments)
        );
    };
    function d(e, t) {
        var a = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]]);
        }
        return a;
    }
    var h,
        u,
        m = (function () {
            function e() {
                (this.nr = 0), (this.keys = 1), (this.subscribers = {});
            }
            return (
                (e.prototype.subscribe = function (e) {
                    var t = this.keys++;
                    return (this.subscribers[t] = e), this.nr++, t;
                }),
                (e.prototype.unsubscribe = function (e) {
                    this.nr--, delete this.subscribers[e];
                }),
                (e.prototype.next = function (e) {
                    for (var t = this.subscribers, a = 0, n = Object.keys(t); a < n.length; a++) {
                        var s = n[a];
                        t[s] && t[s](e);
                    }
                }),
                e
            );
        })(),
        _ = [],
        p = !1,
        v = "undefined" != typeof window,
        f = v && window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)"),
        g = v ? navigator.userAgent : "",
        y = v ? navigator.platform : "",
        b = v ? navigator.maxTouchPoints : 0,
        x = g && g.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        D = g && /Safari/.test(g);
    /Android/i.test(x)
        ? ((h = "android"), (u = g.match(/Android\s+([\d.]+)/i)), (p = !0), u && (_ = u[0].replace("Android ", "").split(".")))
        : /iPhone|iPad|iPod/i.test(x) || /iPhone|iPad|iPod/i.test(y) || ("MacIntel" === y && b > 1)
        ? ((h = "ios"), (u = g.match(/OS\s+([\d_]+)/i)), (p = !0), u && (_ = u[0].replace(/_/g, ".").replace("OS ", "").split(".")))
        : /Windows Phone/i.test(x)
        ? ((h = "wp"), (p = !0))
        : /Windows|MSIE/i.test(x) && (h = "windows");
    var T = +_[0],
        S = +_[1],
        C = {},
        w = {},
        k = {},
        M = {},
        E = new m();
    function N() {
        var e = "",
            t = "",
            a = "";
        for (var n in ((t = "android" === h ? "material" : "wp" === h || "windows" === h ? "windows" : "ios"), k)) {
            if (k[n].baseTheme === t && !1 !== k[n].auto && n !== t + "-dark") {
                e = n;
                break;
            }
            n === t ? (e = n) : a || (a = n);
        }
        return e || a;
    }
    function I(e, t, a) {
        var n = k[t];
        (k[e] = c({}, n, { auto: a, baseTheme: t })), (M.theme = N());
    }
    var L = { majorVersion: T, minorVersion: S, name: h },
        H = { clearIcon: r, labelStyle: "inline" };
    (k.ios = {
        Calendar: { nextIconH: s, nextIconV: n, prevIconH: a, prevIconV: i },
        Checkbox: { position: "end" },
        Datepicker: { clearIcon: r, display: "bottom" },
        Dropdown: H,
        Eventcalendar: { chevronIconDown: n, nextIconH: s, nextIconV: n, prevIconH: a, prevIconV: i },
        Input: H,
        Radio: { position: "end" },
        Scroller: { display: "bottom", itemHeight: 34, minWheelWidth: 55, rows: 5, scroll3d: !0 },
        SegmentedGroup: { drag: !0 },
        Select: { clearIcon: r },
        Textarea: H,
    }),
        I("ios-dark", "ios");
    var O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        P = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z"/></svg>',
        F = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M15 9l-2.12 2.12L19.76 18l-6.88 6.88L15 27l9-9z"/></svg>',
        z =
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
        V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',
        R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        A = { clearIcon: z, dropdownIcon: O, inputStyle: "box", labelStyle: "floating", notch: !0, ripple: !0 },
        W = "material";
    (k.material = {
        Button: { ripple: !0 },
        Calendar: { downIcon: O, nextIconH: F, nextIconV: V, prevIconH: P, prevIconV: R, upIcon: Y },
        Datepicker: { clearIcon: z, display: "center" },
        Dropdown: A,
        Eventcalendar: { chevronIconDown: V, colorEventList: !0, downIcon: O, nextIconH: F, nextIconV: V, prevIconH: P, prevIconV: R, upIcon: Y },
        Input: A,
        ListItem: { ripple: !0 },
        Scroller: { display: "center", rows: 3 },
        Select: { clearIcon: z, rows: 3 },
        Textarea: A,
    }),
        I("material-dark", W);
    var U = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.03 4.28l-11 11-.686.72.687.72 11 11 1.44-1.44L10.187 16l10.28-10.28-1.437-1.44z"/></svg>',
        B = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.97 4.28l-1.44 1.44L21.814 16 11.53 26.28l1.44 1.44 11-11 .686-.72-.687-.72-11-11z"/></svg>',
        j = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15 4v20.063L8.22 17.28l-1.44 1.44 8.5 8.5.72.686.72-.687 8.5-8.5-1.44-1.44L17 24.063V4h-2z"/></svg>',
        K = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.094l-.72.687-8.5 8.5 1.44 1.44L15 7.936V28h2V7.937l6.78 6.782 1.44-1.44-8.5-8.5-.72-.686z"/></svg>',
        X =
            '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>',
        J = { clearIcon: X, inputStyle: "box", labelStyle: "stacked" },
        q = "windows";
    (k.windows = {
        Calendar: { nextIconH: B, nextIconV: j, prevIconH: U, prevIconV: K },
        Checkbox: { position: "start" },
        Datepicker: { clearIcon: X, display: "center" },
        Dropdown: J,
        Eventcalendar: {
            chevronIconDown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.22 10.78l-1.44 1.44 12.5 12.5.72.686.72-.687 12.5-12.5-1.44-1.44L16 22.564 4.22 10.78z"/></svg>',
            nextIconH: B,
            nextIconV: j,
            prevIconH: U,
            prevIconV: K,
        },
        Input: J,
        Scroller: { display: "center", itemHeight: 44, minWheelWidth: 88, rows: 6 },
        Select: { clearIcon: X, rows: 6 },
        Textarea: J,
    }),
        I("windows-dark", q),
        (M.theme = N());
    var G = {
            rtl: !0,
            setText: "تعيين",
            cancelText: "إلغاء",
            clearText: "مسح",
            closeText: "إغلاق",
            selectedText: "{count} المحدد",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD. D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            fromText: "يبدا",
            monthNames: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            amText: "ص",
            pmText: "م",
            timeFormat: "hh:mm A",
            timeWheels: "Ammhh",
            toText: "ينتهي",
            nowText: "الآن",
            firstDay: 0,
            dateText: "تاريخ",
            timeText: "وقت",
            todayText: "اليوم",
            allDayText: "اليوم كله",
            noEventsText: "لا توجد احداث",
            eventText: "الحدث",
            eventsText: "أحداث",
            moreEventsText: "واحد آخر",
            moreEventsPluralText: "اثنان آخران {count}",
            weekText: "أسبوع {count}",
            rangeEndHelp: "أختر",
            rangeEndLabel: "ينتهي",
            rangeStartHelp: "أختر",
            rangeStartLabel: "يبدا",
            filterEmptyText: "لا نتيجة",
            filterPlaceholderText: "بحث",
        },
        Z = {
            setText: "Задаване",
            cancelText: "Отмяна",
            clearText: "Изчистване",
            closeText: "затвори",
            selectedText: "{count} подбран",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMMM YYYY",
            dateWheelFormat: "|DDD MM.DD|",
            dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            fromText: "ОТ",
            monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            timeFormat: "H:mm",
            toText: "ДО",
            nowText: "Сега",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Дата",
            timeText: "път",
            todayText: "днес",
            eventText: "Събитие",
            eventsText: "Събития",
            allDayText: "Цял ден",
            noEventsText: "Няма събития",
            moreEventsText: "Още {count}",
            weekText: "Седмица {count}",
            rangeStartLabel: "ОТ",
            rangeEndLabel: "ДО",
            rangeStartHelp: "Избирам",
            rangeEndHelp: "Избирам",
            filterEmptyText: "Без резултат",
            filterPlaceholderText: "Търсене",
        },
        Q = {
            setText: "Acceptar",
            cancelText: "Cancel·lar",
            clearText: "Esborrar",
            closeText: "Tancar",
            selectedText: "{count} seleccionat",
            selectedPluralText: "{count} seleccionats",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
            dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            fromText: "Iniciar",
            monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ara",
            pmText: "pm",
            amText: "am",
            todayText: "Avui",
            firstDay: 1,
            dateText: "Data",
            timeText: "Temps",
            allDayText: "Tot el dia",
            noEventsText: "Cap esdeveniment",
            eventText: "Esdeveniments",
            eventsText: "Esdeveniments",
            moreEventsText: "{count} més",
            weekText: "Setmana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Cap resultat",
            filterPlaceholderText: "Buscar",
        },
        $ = {
            setText: "Zadej",
            cancelText: "Storno",
            clearText: "Vymazat",
            closeText: "Zavřít",
            selectedText: "Označený: {count}",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D.M.YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
            fromText: "Začátek",
            monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
            timeFormat: "H:mm",
            toText: "Konec",
            nowText: "Teď",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý den",
            noEventsText: "Žádné události",
            eventText: "Událostí",
            eventsText: "Události",
            moreEventsText: "{count} další",
            weekText: "{count}. týden",
            rangeStartLabel: "Začátek",
            rangeEndLabel: "Konec",
            rangeStartHelp: "Vybrat",
            rangeEndHelp: "Vybrat",
            filterEmptyText: "Žádné výsledky",
            filterPlaceholderText: "Hledat",
        },
        ee = {
            setText: "Sæt",
            cancelText: "Annuller",
            clearText: "Ryd",
            closeText: "Luk",
            selectedText: "{count} valgt",
            selectedPluralText: "{count} valgt",
            dateFormat: "DD/MM/YYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH.mm",
            toText: "Slut",
            nowText: "Nu",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen begivenheder",
            eventText: "Begivenheder",
            eventsText: "Begivenheder",
            moreEventsText: "{count} mere",
            weekText: "Uge {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Vælg",
            rangeEndHelp: "Vælg",
            filterEmptyText: "Ingen resultater",
            filterPlaceholderText: "Søg",
        },
        te = {
            setText: "OK",
            cancelText: "Abbrechen",
            clearText: "Löschen",
            closeText: "Schließen",
            selectedText: "{count} ausgewählt",
            dateFormat: "DD.MM.YYYY",
            dateFormatFull: "DDDD, D. MMMM YYYY",
            dateFormatLong: "DDD. D. MMM. YYYY",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
            fromText: "Von",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            timeFormat: "HH:mm",
            nowText: "Jetzt",
            pmText: "pm",
            amText: "am",
            todayText: "Heute",
            toText: "Bis",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Zeit",
            allDayText: "Ganztägig",
            noEventsText: "Keine Ereignisse",
            eventText: "Ereignis",
            eventsText: "Ereignisse",
            moreEventsText: "{count} weiteres Element",
            moreEventsPluralText: "{count} weitere Elemente",
            weekText: "Woche {count}",
            rangeStartLabel: "Von",
            rangeEndLabel: "Bis",
            rangeStartHelp: "Auswählen",
            rangeEndHelp: "Auswählen",
            filterEmptyText: "Keine Treffer",
            filterPlaceholderText: "Suchen",
        },
        ae = {
            setText: "Ορισμος",
            cancelText: "Ακυρωση",
            clearText: "Διαγραφη",
            closeText: "Κλείσιμο",
            selectedText: "{count} επιλεγμένα",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            fromText: "Αρχή",
            monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            timeFormat: "H:mm",
            toText: "Τέλος",
            nowText: "τώρα",
            pmText: "μμ",
            amText: "πμ",
            firstDay: 1,
            dateText: "Ημερομηνία",
            timeText: "φορά",
            todayText: "Σήμερα",
            eventText: "Γεγονότα",
            eventsText: "Γεγονότα",
            allDayText: "Ολοήμερο",
            noEventsText: "Δεν υπάρχουν γεγονότα",
            moreEventsText: "{count} ακόμη",
            weekText: "Εβδομάδα {count}",
            rangeStartLabel: "Αρχή",
            rangeEndLabel: "Τέλος",
            rangeStartHelp: "Επιλογή",
            rangeEndHelp: "Επιλογή",
            filterEmptyText: "Κανένα αποτέλεσμα",
            filterPlaceholderText: "Αναζήτηση",
        },
        ne = { dateFormat: "DD/MM/YYYY", dateFormatFull: "DDDD, D MMMM YYYY", dateWheelFormat: "|DDD D MMM|", timeFormat: "H:mm" },
        se = {
            setText: "Aceptar",
            cancelText: "Cancelar",
            clearText: "Borrar",
            closeText: "Cerrar",
            selectedText: "{count} seleccionado",
            selectedPluralText: "{count} seleccionados",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, MMM. D. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Iniciar",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ahora",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Fecha",
            timeText: "Tiempo",
            allDayText: "Todo el día",
            noEventsText: "No hay eventos",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "{count} más",
            weekText: "Semana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Sin resultados",
            filterPlaceholderText: "Buscar",
        },
        ie = void 0,
        re = ye(3),
        oe = ye(4),
        le = ye(7);
    function ce(e, t, a) {
        return Math.max(t, Math.min(e, a));
    }
    function de(e, t) {
        return c({}, e, t);
    }
    function he(e) {
        return Array.isArray(e);
    }
    function ue(e) {
        return e - parseFloat(e) >= 0;
    }
    function me(e) {
        return "number" == typeof e;
    }
    function _e(e) {
        return "string" == typeof e;
    }
    function pe(e) {
        return e === ie || null === e || "" === e;
    }
    function ve(e) {
        return void 0 === e;
    }
    function fe(e) {
        return "object" == typeof e;
    }
    function ge(e) {
        return null !== e && e !== ie && "" + e != "false";
    }
    function ye(e) {
        return Array.apply(0, Array(Math.max(0, e)));
    }
    function be(e) {
        return e !== ie ? e + (ue(e) ? "px" : "") : "";
    }
    function xe() {}
    function De(e, t) {
        void 0 === t && (t = 2);
        for (var a = e + ""; a.length < t; ) a = "0" + a;
        return a;
    }
    function Te(e) {
        return Math.round(e);
    }
    function Se(e, t) {
        return Ce(e / t) * t;
    }
    function Ce(e) {
        return Math.floor(e);
    }
    function we(e, t) {
        var a, n;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var s = [], i = 0; i < arguments.length; i++) s[i] = arguments[i];
                var r = +new Date();
                a && r < a + t
                    ? (clearTimeout(n),
                      (n = setTimeout(function () {
                          (a = r), e.apply(void 0, s);
                      }, t)))
                    : ((a = r), e.apply(void 0, s));
            }
        );
    }
    function ke(e, t) {
        var a;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                clearTimeout(a),
                    (a = setTimeout(function () {
                        e.apply(void 0, n);
                    }, t));
            }
        );
    }
    function Me(e, t) {
        if (e === t) return !0;
        if ((e && !t) || (t && !e)) return !1;
        if (e.length !== t.length) return !1;
        for (var a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
        return !0;
    }
    function Ee(e, t) {
        e._cdr ? setTimeout(t) : t();
    }
    function Ne(e, t) {
        return Le(e, t);
    }
    function Ie(e, t) {
        return Le(e, t, !0);
    }
    function Le(e, t, a) {
        for (var n = e.length, s = 0; s < n; s++) {
            var i = e[s];
            if (t(i, s)) return a ? s : i;
        }
        return a ? -1 : ie;
    }
    function He(e, t) {
        return he(e) ? e.map(t) : t(e, 0, [e]);
    }
    function Oe(e) {
        var t = [];
        if (e)
            for (var a = 0, n = Object.keys(e); a < n.length; a++) {
                var s = n[a];
                t.push(e[s]);
            }
        return t;
    }
    ye(24);
    var Ye = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Pe = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    function Fe(e, t, a) {
        var n,
            s = e - 1600,
            i = t - 1,
            r = a - 1,
            o = 365 * s + Ce((s + 3) / 4) - Ce((s + 99) / 100) + Ce((s + 399) / 400);
        for (n = 0; n < i; ++n) o += Ye[n];
        i > 1 && ((s % 4 == 0 && s % 100 != 0) || s % 400 == 0) && ++o;
        var l = (o += r) - 79,
            c = 979 + 33 * Ce(l / 12053) + 4 * Ce((l %= 12053) / 1461);
        for ((l %= 1461) >= 366 && ((c += Ce((l - 1) / 365)), (l = (l - 1) % 365)), n = 0; n < 11 && l >= Pe[n]; ++n) l -= Pe[n];
        return [c, n + 1, l + 1];
    }
    var ze = {
            getYear: function (e) {
                return Fe(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --Fe(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return Fe(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, a, n, s, i, r) {
                t < 0 && ((e += Ce(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Ce(t / 12)), (t %= 12));
                var o = (function (e, t, a) {
                    var n,
                        s = e - 979,
                        i = t - 1,
                        r = a - 1,
                        o = 365 * s + 8 * Ce(s / 33) + Ce(((s % 33) + 3) / 4);
                    for (n = 0; n < i; ++n) o += Pe[n];
                    var l = (o += r) + 79,
                        c = 1600 + 400 * Ce(l / 146097),
                        d = !0;
                    for (
                        (l %= 146097) >= 36525 && ((c += 100 * Ce(--l / 36524)), (l %= 36524) >= 365 ? l++ : (d = !1)), c += 4 * Ce(l / 1461), (l %= 1461) >= 366 && ((d = !1), (c += Ce(--l / 365)), (l %= 365)), n = 0;
                        l >= Ye[n] + (1 === n && d ? 1 : 0);
                        n++
                    )
                        l -= Ye[n] + (1 === n && d ? 1 : 0);
                    return [c, n + 1, l + 1];
                })(e, +t + 1, a);
                return new Date(o[0], o[1] - 1, o[2], n || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                var a,
                    n,
                    s,
                    i = 31;
                for (
                    t < 0 && ((e += Ce(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Ce(t / 12)), (t %= 12));
                    (n = t + 1), (s = i), ((a = e) < 0 || a > 32767 || n < 1 || n > 12 || s < 1 || s > Pe[n - 1] + (12 === n && ((a - 979) % 33) % 4 == 0 ? 1 : 0)) && i > 29;

                )
                    i--;
                return i;
            },
        },
        Ve = {
            setText: "تاييد",
            cancelText: "انصراف",
            clearText: "واضح ",
            closeText: "نزدیک",
            selectedText: "{count} منتخب",
            rtl: !0,
            calendarSystem: ze,
            dateFormat: "YYYY/MM/DD",
            dateFormatLong: "DDD D MMM YYYY",
            dateWheelFormat: "|DDDD MMM D|",
            dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            fromText: "شروع ",
            monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            timeFormat: "HH:mm",
            timeWheels: "mmHH",
            toText: "پایان",
            nowText: "اکنون",
            amText: "ب",
            pmText: "ص",
            todayText: "امروز",
            firstDay: 6,
            dateText: "تاریخ ",
            timeText: "زمان ",
            allDayText: "تمام روز",
            noEventsText: "هیچ رویداد",
            eventText: "رویداد",
            eventsText: "رویدادها",
            moreEventsText: "{count} مورد دیگر",
            weekText: "{count} هفته",
            rangeStartLabel: "شروع ",
            rangeEndLabel: "پایان",
            rangeStartHelp: "انتخاب کنید",
            rangeEndHelp: "انتخاب کنید",
            filterEmptyText: "نتیجه ای ندارد",
            filterPlaceholderText: "جستجو کردن",
        },
        Re = {
            setText: "Aseta",
            cancelText: "Peruuta",
            clearText: "Tyhjennä",
            closeText: "Sulje",
            selectedText: "{count} valita",
            dateFormat: "D. MMMM YYYY",
            dateFormatLong: "DDD, D. MMMM, YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
            fromText: "Alkaa",
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
            timeFormat: "H:mm",
            toText: "Päättyy",
            nowText: "Nyt",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Päiväys",
            timeText: "Aika",
            todayText: "Tänään",
            eventText: "Tapahtumia",
            eventsText: "Tapahtumia",
            allDayText: "Koko päivä",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} muu",
            moreEventsPluralText: "{count} muuta",
            weekText: "Viikko {count}",
            rangeStartLabel: "Alkaa",
            rangeEndLabel: "Päättyy",
            rangeStartHelp: "Valitse",
            rangeEndHelp: "Valitse",
            filterEmptyText: "Ei tuloksia",
            filterPlaceholderText: "Haku",
        },
        Ae = {
            setText: "Terminer",
            cancelText: "Annuler",
            clearText: "Effacer",
            closeText: "Fermer",
            selectedText: "{count} sélectionné",
            selectedPluralText: "{count} sélectionnés",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Démarrer",
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
            timeFormat: "HH:mm",
            toText: "Fin",
            nowText: "Maintenant",
            pmText: "pm",
            amText: "am",
            todayText: "Aujourd'hui",
            firstDay: 1,
            dateText: "Date",
            timeText: "Heure",
            allDayText: "Toute la journée",
            noEventsText: "Aucun événement",
            eventText: "Événement",
            eventsText: "Événements",
            moreEventsText: "{count} autre",
            moreEventsPluralText: "{count} autres",
            weekText: "Semaine {count}",
            rangeStartLabel: "Démarrer",
            rangeEndLabel: "Fin",
            rangeStartHelp: "Choisir",
            rangeEndHelp: "Choisir",
            filterEmptyText: "Aucun résultat",
            filterPlaceholderText: "Rechercher",
        },
        We = {
            rtl: !0,
            setText: "שמירה",
            cancelText: "ביטול",
            clearText: "נקה",
            closeText: "סגירה",
            selectedText: "{count} נבחר",
            selectedPluralText: "{count} נבחרו",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D בMMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
            dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
            fromText: "התחלה",
            monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            amText: "am",
            pmText: "pm",
            timeFormat: "H:mm",
            timeWheels: "mmH",
            toText: "סיום",
            nowText: "עכשיו",
            firstDay: 0,
            dateText: "תאריך",
            timeText: "זמן",
            todayText: "היום",
            allDayText: "כל היום",
            noEventsText: "אין אירועים",
            eventText: "מִקרֶה",
            eventsText: "מִקרֶה",
            moreEventsText: "אירוע אחד נוסף",
            moreEventsPluralText: "{count} אירועים נוספים",
            weekText: "{count} שבוע",
            rangeStartLabel: "התחלה",
            rangeEndLabel: "סיום",
            rangeStartHelp: "בחר",
            rangeEndHelp: "בחר",
            filterEmptyText: "אין תוצאוה",
            filterPlaceholderText: "לחפש",
        },
        Ue = {
            setText: "सैट करें",
            cancelText: "रद्द करें",
            clearText: "साफ़ को",
            closeText: "बंद",
            selectedText: "{count} चयनित",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            fromText: "से",
            monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            timeFormat: "H:mm",
            toText: "तक",
            nowText: "अब",
            pmText: "अपराह्न",
            amText: "पूर्वाह्न",
            firstDay: 1,
            dateText: "तिथि",
            timeText: "समय",
            todayText: "आज",
            eventText: "इवेट३",
            eventsText: "इवेट३",
            allDayText: "पूरे दिन",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} और",
            weekText: "सप्ताह {count}",
            rangeStartLabel: "से",
            rangeEndLabel: "तक",
            rangeStartHelp: "चुनें",
            rangeEndHelp: "चुनें",
            filterEmptyText: "कोई परिणाम नही",
            filterPlaceholderText: "खोज",
        },
        Be = {
            setText: "Postavi",
            cancelText: "Izlaz",
            clearText: "Izbriši",
            closeText: "Zatvori",
            selectedText: "{count} odabran",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D. MMM. YYYY.",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            fromText: "Počinje",
            monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            timeFormat: "H:mm",
            toText: "Završava",
            nowText: "Sada",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Vrijeme",
            todayText: "Danas",
            eventText: "Događaj",
            eventsText: "događaja",
            allDayText: "Cijeli dan",
            noEventsText: "Bez događaja",
            moreEventsText: "Još {count}",
            weekText: "{count}. tjedan",
            rangeStartLabel: "Počinje",
            rangeEndLabel: "Završava",
            rangeStartHelp: "Odaberite",
            rangeEndHelp: "Odaberite",
            filterEmptyText: "Bez rezultata",
            filterPlaceholderText: "Traži",
        },
        je = {
            setText: "OK",
            cancelText: "Mégse",
            clearText: "Törlés",
            closeText: "Bezár",
            selectedText: "{count} kiválasztva",
            dateFormat: "YYYY.MM.DD.",
            dateFormatLong: "YYYY. MMM. D., DDD",
            dateWheelFormat: "|MMM. D. DDD|",
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            fromText: "Eleje",
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Vége",
            nowText: "Most",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Dátum",
            timeText: "Idő",
            todayText: "Ma",
            eventText: "esemény",
            eventsText: "esemény",
            allDayText: "Egész nap",
            noEventsText: "Nincs esemény",
            moreEventsText: "{count} további",
            weekText: "{count}. hét",
            rangeStartLabel: "Eleje",
            rangeEndLabel: "Vége",
            rangeStartHelp: "Válasszon",
            rangeEndHelp: "Válasszon",
            filterEmptyText: "Nincs találat",
            filterPlaceholderText: "Keresés",
        },
        Ke = {
            setText: "OK",
            cancelText: "Annulla",
            clearText: "Chiarire",
            closeText: "Chiudere",
            selectedText: "{count} selezionato",
            selectedPluralText: "{count} selezionati",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
            fromText: "Inizio",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            timeFormat: "HH:mm",
            toText: "Fine",
            nowText: "Ora",
            pmText: "pm",
            amText: "am",
            todayText: "Oggi",
            firstDay: 1,
            dateText: "Data",
            timeText: "Volta",
            allDayText: "Tutto il giorno",
            noEventsText: "Nessun evento",
            eventText: "Evento",
            eventsText: "Eventi",
            moreEventsText: "{count} altro",
            moreEventsPluralText: "altri {count}",
            weekText: "Settimana {count}",
            rangeStartLabel: "Inizio",
            rangeEndLabel: "Fine",
            rangeStartHelp: "Scegli",
            rangeEndHelp: "Scegli",
            filterEmptyText: "Nessun risultato",
            filterPlaceholderText: "Cerca",
        },
        Xe = {
            setText: "セット",
            cancelText: "キャンセル",
            clearText: "クリア",
            closeText: "クローズ",
            selectedText: "{count} 選択",
            dateFormat: "YYYY年MM月DD日",
            dateFormatLong: "YYYY年MM月DD日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            fromText: "開始",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            timeFormat: "H:mm",
            toText: "終わり",
            nowText: "今",
            pmText: "午後",
            amText: "午前",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今日",
            dateText: "日付",
            timeText: "時間",
            allDayText: "終日",
            noEventsText: "イベントはありません",
            eventText: "イベント",
            eventsText: "イベント",
            moreEventsText: "他 {count} 件",
            weekText: "{count}週目",
            rangeStartLabel: "開始",
            rangeEndLabel: "終わり",
            rangeStartHelp: "選択",
            rangeEndHelp: "選択",
            filterEmptyText: "検索結果はありません",
            filterPlaceholderText: "探す",
        },
        Je = {
            setText: "설정",
            cancelText: "취소",
            clearText: "삭제",
            closeText: "닫기",
            selectedText: "{count} 선택된",
            dateFormat: "YYYY년MM월DD일",
            dateFormatLong: "YYYY년MM월DD일",
            dateWheelFormat: "|M월 D일 DDD|",
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            fromText: "시작",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            timeFormat: "H:mm",
            toText: "종료",
            nowText: "지금",
            pmText: "오후",
            amText: "오전",
            yearSuffix: "년",
            monthSuffix: "월",
            daySuffix: "일",
            firstDay: 0,
            dateText: "날짜",
            timeText: "시간",
            todayText: "오늘",
            eventText: "이벤트",
            eventsText: "이벤트",
            allDayText: "종일",
            noEventsText: "이벤트 없음",
            moreEventsText: "{count}개 더보기",
            weekText: "{count}주차",
            rangeStartLabel: "시작",
            rangeEndLabel: "종료",
            rangeStartHelp: "선택",
            rangeEndHelp: "선택",
            filterEmptyText: "결과가 없다",
            filterPlaceholderText: "찾다",
        },
        qe = {
            setText: "OK",
            cancelText: "Atšaukti",
            clearText: "Išvalyti",
            closeText: "Uždaryti",
            selectedText: "Pasirinktas {count}",
            selectedPluralText: "Pasirinkti {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "YYYY-MM-DD",
            dateWheelFormat: "|MM-DD DDD|",
            dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
            dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            fromText: "Nuo",
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH:mm",
            toText: "Iki",
            nowText: "Dabar",
            todayText: "Šiandien",
            firstDay: 1,
            dateText: "Data",
            timeText: "Laikas",
            allDayText: "Visą dieną",
            noEventsText: "Nėra įvykių",
            eventText: "Įvykių",
            eventsText: "Įvykiai",
            moreEventsText: "Dar {count}",
            weekText: "{count} savaitė",
            rangeStartLabel: "Nuo",
            rangeEndLabel: "Iki",
            rangeStartHelp: "Pasirinkti",
            rangeEndHelp: "Pasirinkti",
            filterEmptyText: "Nėra rezultatų",
            filterPlaceholderText: "Paieška",
        },
        Ge = {
            setText: "Instellen",
            cancelText: "Annuleren",
            clearText: "Leegmaken",
            closeText: "Sluiten",
            selectedText: "{count} gekozen",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DD-MM-YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            dayNamesMin: ["Z", "M", "D", "W", "D", "V", "Z"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Einde",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "Vandaag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tijd",
            allDayText: "Hele dag",
            noEventsText: "Geen activiteiten",
            eventText: "Activiteit",
            eventsText: "Activiteiten",
            moreEventsText: "nog {count}",
            weekText: "Week {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Einde",
            rangeStartHelp: "Kies",
            rangeEndHelp: "Kies",
            filterEmptyText: "Niets gevonden",
            filterPlaceholderText: "Zoek",
        },
        Ze = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Tømme",
            closeText: "Lukk",
            selectedText: "{count} valgt",
            dateFormat: "DD.MM.YYY",
            dateFormatLong: "DDD. D. MMM. YYYY",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            timeFormat: "HH:mm",
            toText: "End",
            nowText: "Nå",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen hendelser",
            eventText: "Hendelse",
            eventsText: "Hendelser",
            moreEventsText: "{count} mere",
            weekText: "Uke {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "End",
            rangeStartHelp: "Velg",
            rangeEndHelp: "Velg",
            filterEmptyText: "Ingen treff",
            filterPlaceholderText: "Søk",
        },
        Qe = {
            setText: "Zestaw",
            cancelText: "Anuluj",
            clearText: "Oczyścić",
            closeText: "Zakończenie",
            selectedText: "Wybór: {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D.MM|",
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Nie.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
            dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
            fromText: "Rozpoczęcie",
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            timeFormat: "HH:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dzisiaj",
            firstDay: 1,
            dateText: "Data",
            timeText: "Czas",
            allDayText: "Cały dzień",
            noEventsText: "Brak wydarzeń",
            eventText: "Wydarzeń",
            eventsText: "Wydarzenia",
            moreEventsText: "Jeszcze {count}",
            weekText: "Tydzień {count}",
            rangeStartLabel: "Rozpoczęcie",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Wybierz",
            rangeEndHelp: "Wybierz",
            filterEmptyText: "Brak wyników",
            filterPlaceholderText: "Szukaj",
        },
        $e = {
            setText: "Seleccionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            closeText: "Fechar",
            selectedText: "{count} selecionado",
            selectedPluralText: "{count} selecionados",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DDD, D MMM, YYYY",
            dateWheelFormat: "|DDD D de MMM|",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            fromText: "Início",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            timeFormat: "HH:mm",
            toText: "Fim",
            nowText: "Actualizar",
            pmText: "pm",
            amText: "am",
            todayText: "Hoje",
            firstDay: 1,
            dateText: "Data",
            timeText: "Tempo",
            allDayText: "Todo o dia",
            noEventsText: "Nenhum evento",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "Mais {count}",
            weekText: "Semana {count}",
            rangeStartLabel: "Início",
            rangeEndLabel: "Fim",
            rangeStartHelp: "Escolha",
            rangeEndHelp: "Escolha",
            filterEmptyText: "Nenhum resultado",
            filterPlaceholderText: "Pesquisa",
        },
        et = de($e, { setText: "Selecionar", dateFormat: "DD/MM/YYYY", nowText: "Agora", allDayText: "Dia inteiro", filterPlaceholderText: "Buscar" }),
        tt = {
            setText: "Setare",
            cancelText: "Anulare",
            clearText: "Ştergere",
            closeText: "Închidere",
            selectedText: "{count} selectat",
            selectedPluralText: "{count} selectate",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD., D MMM YYYY",
            dateWheelFormat: "|DDD. D MMM|",
            dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Start",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
            timeFormat: "HH:mm",
            toText: "Final",
            nowText: "Acum",
            amText: "am",
            pmText: "pm",
            todayText: "Astăzi",
            eventText: "Eveniment",
            eventsText: "Evenimente",
            allDayText: "Toată ziua",
            noEventsText: "Niciun eveniment",
            moreEventsText: "Încă unul",
            moreEventsPluralText: "Încă {count}",
            firstDay: 1,
            dateText: "Data",
            timeText: "Ora",
            weekText: "Săptămâna {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Final",
            rangeStartHelp: "Selectare",
            rangeEndHelp: "Selectare",
            filterEmptyText: "Niciun rezultat",
            filterPlaceholderText: "Căutare",
        },
        at = {
            setText: "Установить",
            cancelText: "Отмена",
            clearText: "Очистить",
            closeText: "Закрыть",
            selectedText: "{count} Выбрать",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            fromText: "Начало",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            timeFormat: "HH:mm",
            toText: "Конец",
            nowText: "Сейчас",
            amText: "am",
            pmText: "pm",
            todayText: "Cегодня",
            firstDay: 1,
            dateText: "Дата",
            timeText: "Время",
            allDayText: "Весь день",
            noEventsText: "Нет событий",
            eventText: "Мероприятия",
            eventsText: "Мероприятия",
            moreEventsText: "Ещё {count}",
            weekText: "Неделя {count}",
            rangeStartLabel: "Начало",
            rangeEndLabel: "Конец",
            rangeStartHelp: "выбирать",
            rangeEndHelp: "выбирать",
            filterEmptyText: "Нет результатов",
            filterPlaceholderText: "Поиск",
        },
        nt = de(at, {
            cancelText: "Отменить",
            clearText: "Очиститьr",
            selectedText: "{count} Вібрать",
            monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
            filterEmptyText: "Ніякага выніку",
            filterPlaceholderText: "Пошук",
        }),
        st = {
            setText: "Zadaj",
            cancelText: "Zrušiť",
            clearText: "Vymazať",
            closeText: "Zavrieť",
            selectedText: "Označený: {count}",
            dateFormat: "D.M.YYYY",
            dateFormatLong: "DDD D. MMM YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
            dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
            fromText: "Začiatok",
            monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý deň",
            noEventsText: "Žiadne udalosti",
            eventText: "Udalostí",
            eventsText: "Udalosti",
            moreEventsText: "{count} ďalšia",
            moreEventsPluralText: "{count} ďalšie",
            weekText: "{count}. týždeň",
            rangeStartLabel: "Začiatok",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Vybrať",
            rangeEndHelp: "Vybrať",
            filterEmptyText: "Žiadne výsledky",
            filterPlaceholderText: "Vyhľadávanie",
        },
        it = {
            setText: "Постави",
            cancelText: "Откажи",
            clearText: "Обриши",
            selectedText: "{count} изабрана",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D. MMM YYYY.",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            fromText: "Од",
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            timeFormat: "HH:mm",
            toText: "До",
            nowText: "сада",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Датум",
            timeText: "време",
            todayText: "Данас",
            closeText: "Затвори",
            eventText: "Догађај",
            eventsText: "Догађаји",
            allDayText: "Цео дан",
            noEventsText: "Нема догађаја",
            moreEventsText: "Још {count}",
            weekText: "{count}. недеља",
            rangeStartLabel: "Од",
            rangeEndLabel: "До",
            rangeStartHelp: "Изаберите",
            rangeEndHelp: "Изаберите",
            filterEmptyText: "Без резултата",
            filterPlaceholderText: "Претрага",
        },
        rt = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Klara",
            closeText: "Stäng",
            selectedText: "{count} vald",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Slut",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tid",
            allDayText: "Heldag",
            noEventsText: "Inga aktiviteter",
            eventText: "Händelse",
            eventsText: "Händelser",
            moreEventsText: "{count} till",
            weekText: "Vecka {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Välj",
            rangeEndHelp: "Välj",
            filterEmptyText: "Inga träffar",
            filterPlaceholderText: "Sök",
        },
        ot = {
            setText: "ตั้งค่า",
            cancelText: "ยกเลิก",
            clearText: "ล้าง",
            closeText: "ปิด",
            selectedText: "{count} เลือก",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "วันDDDที่ D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            fromText: "จาก",
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            timeFormat: "HH:mm",
            toText: "ถึง",
            nowText: "ตอนนี้",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "วัน",
            timeText: "เวลา",
            todayText: "วันนี้",
            eventText: "เหตุการณ์",
            eventsText: "เหตุการณ์",
            allDayText: "ตลอดวัน",
            noEventsText: "ไม่มีกิจกรรม",
            moreEventsText: "อีก {count} กิจกรรม",
            weekText: "สัปดาห์ที่ {count}",
            rangeStartLabel: "จาก",
            rangeEndLabel: "ถึง",
            rangeStartHelp: "เลือก",
            rangeEndHelp: "เลือก",
            filterEmptyText: "ไม่มีผลลัพธ์",
            filterPlaceholderText: "ค้นหา",
        },
        lt = {
            setText: "Seç",
            cancelText: "İptal",
            clearText: "Temizleyin",
            closeText: "Kapatmak",
            selectedText: "{count} seçilmiş",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "D MMMM DDD, YYYY",
            dateWheelFormat: "|D MMM DDD|",
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
            fromText: "Başla",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            timeFormat: "HH:mm",
            toText: "Son",
            nowText: "Şimdi",
            pmText: "pm",
            amText: "am",
            todayText: "Bugün",
            firstDay: 1,
            dateText: "Tarih",
            timeText: "Zaman",
            allDayText: "Tüm gün",
            noEventsText: "Etkinlik Yok",
            eventText: "Etkinlik",
            eventsText: "Etkinlikler",
            moreEventsText: "{count} tane daha",
            weekText: "{count}. Hafta",
            rangeStartLabel: "Başla",
            rangeEndLabel: "Son",
            rangeStartHelp: "Seç",
            rangeEndHelp: "Seç",
            filterEmptyText: "Sonuç Yok",
            filterPlaceholderText: "Arayın",
        },
        ct = {
            setText: "встановити",
            cancelText: "відміна",
            clearText: "очистити",
            closeText: "Закрити",
            selectedText: "{count} вибрані",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM.|",
            dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            fromText: "від",
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            timeFormat: "H:mm",
            toText: "кінець",
            nowText: "Зараз",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "дата",
            timeText: "Час",
            todayText: "Сьогодні",
            eventText: "подія",
            eventsText: "події",
            allDayText: "Увесь день",
            noEventsText: "Жодної події",
            moreEventsText: "та ще {count}",
            weekText: "{count} тиждень",
            rangeStartLabel: "від",
            rangeEndLabel: "кінець",
            rangeEndHelp: "Обрати",
            rangeStartHelp: "Обрати",
            filterEmptyText: "Ніякого результату",
            filterPlaceholderText: "Пошук",
        },
        dt = {
            setText: "Đặt",
            cancelText: "Hủy bò",
            clearText: "Xóa",
            closeText: "Đóng",
            selectedText: "{count} chọn",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D, MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            fromText: "Từ",
            monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            timeFormat: "H:mm",
            toText: "Tới",
            nowText: "Bây giờ",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "Ngày",
            timeText: "Hồi",
            todayText: "Hôm nay",
            eventText: "Sự kiện",
            eventsText: "Sự kiện",
            allDayText: "Cả ngày",
            noEventsText: "Không có sự kiện",
            moreEventsText: "{count} thẻ khác",
            weekText: "Tuần {count}",
            rangeStartLabel: "Từ",
            rangeEndLabel: "Tới",
            rangeStartHelp: "Chọn",
            rangeEndHelp: "Chọn",
            filterEmptyText: "Không kết quả",
            filterPlaceholderText: "Tìm kiếm",
        },
        ht = {
            setText: "确定",
            cancelText: "取消",
            clearText: "明确",
            closeText: "关闭",
            selectedText: "{count} 选",
            dateFormat: "YYYY年M月D日",
            dateFormatLong: "YYYY年M月D日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            fromText: "开始时间",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            timeFormat: "H:mm",
            toText: "结束时间",
            nowText: "当前",
            pmText: "下午",
            amText: "上午",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今天",
            dateText: "日",
            timeText: "时间",
            allDayText: "全天",
            noEventsText: "无事件",
            eventText: "活动",
            eventsText: "活动",
            moreEventsText: "他 {count} 件",
            weekText: "第 {count} 週",
            rangeStartLabel: "开始时间",
            rangeEndLabel: "结束时间",
            rangeStartHelp: "选取",
            rangeEndHelp: "选取",
            filterEmptyText: "没有结果",
            filterPlaceholderText: "搜索",
        };
    function ut(e) {
        return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7);
    }
    function mt(e, t, a) {
        var n,
            s,
            i = [0, 0, 0];
        n =
            e > 1582 || (1582 === e && t > 10) || (1582 === e && 10 === t && a > 14)
                ? ut((1461 * (e + 4800 + ut((t - 14) / 12))) / 4) + ut((367 * (t - 2 - 12 * ut((t - 14) / 12))) / 12) - ut((3 * ut((e + 4900 + ut((t - 14) / 12)) / 100)) / 4) + a - 32075
                : 367 * e - ut((7 * (e + 5001 + ut((t - 9) / 7))) / 4) + ut((275 * t) / 9) + a + 1729777;
        var r = ut(((s = n - 1948440 + 10632) - 1) / 10631),
            o = ut((10985 - (s = s - 10631 * r + 354)) / 5316) * ut((50 * s) / 17719) + ut(s / 5670) * ut((43 * s) / 15238);
        return (s = s - ut((30 - o) / 15) * ut((17719 * o) / 50) - ut(o / 16) * ut((15238 * o) / 43) + 29), (t = ut((24 * s) / 709)), (a = s - ut((709 * t) / 24)), (e = 30 * r + o - 30), (i[2] = a), (i[1] = t), (i[0] = e), i;
    }
    var _t = {
            getYear: function (e) {
                return mt(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --mt(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return mt(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, a, n, s, i, r) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                var o = (function (e, t, a) {
                    var n,
                        s,
                        i,
                        r,
                        o,
                        l = new Array(3),
                        c = ut((11 * e + 3) / 30) + 354 * e + 30 * t - ut((t - 1) / 2) + a + 1948440 - 385;
                    return (
                        c > 2299160
                            ? ((i = ut((4 * (n = c + 68569)) / 146097)),
                              (n -= ut((146097 * i + 3) / 4)),
                              (r = ut((4e3 * (n + 1)) / 1461001)),
                              (n = n - ut((1461 * r) / 4) + 31),
                              (s = ut((80 * n) / 2447)),
                              (a = n - ut((2447 * s) / 80)),
                              (t = s + 2 - 12 * (n = ut(s / 11))),
                              (e = 100 * (i - 49) + r + n))
                            : ((o = ut(((s = c + 1402) - 1) / 1461)),
                              (i = ut(((n = s - 1461 * o) - 1) / 365) - ut(n / 1461)),
                              (s = ut((80 * (r = n - 365 * i + 30)) / 2447)),
                              (a = r - ut((2447 * s) / 80)),
                              (t = s + 2 - 12 * (r = ut(s / 11))),
                              (e = 4 * o + i + r - 4716)),
                        (l[2] = a),
                        (l[1] = t),
                        (l[0] = e),
                        l
                    );
                })(e, +t + 1, a);
                return new Date(o[0], o[1] - 1, o[2], n || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] + (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0);
            },
        },
        pt = {},
        vt = {
            ar: G,
            bg: Z,
            ca: Q,
            cs: $,
            da: ee,
            de: te,
            el: ae,
            en: pt,
            "en-GB": ne,
            es: se,
            fa: Ve,
            fi: Re,
            fr: Ae,
            he: We,
            hi: Ue,
            hr: Be,
            hu: je,
            it: Ke,
            ja: Xe,
            ko: Je,
            lt: qe,
            nl: Ge,
            no: Ze,
            pl: Qe,
            "pt-BR": et,
            "pt-PT": $e,
            ro: tt,
            ru: at,
            "ru-UA": nt,
            sk: st,
            sr: it,
            sv: rt,
            th: ot,
            tr: lt,
            ua: ct,
            vi: dt,
            zh: ht,
        },
        ft = new Date(1970, 0, 1),
        gt = 6e4,
        yt = 36e5,
        bt = 864e5;
    function xt(e) {
        return !!e._mbsc;
    }
    function Dt(e, t, a) {
        var n = a || t.dataTimezone || t.displayTimezone,
            s = t.timezonePlugin;
        if (n && s && xt(e)) {
            var i = e.clone();
            return i.setTimezone(n), i.toISOString();
        }
        return e;
    }
    var Tt = {
            amText: "am",
            dateFormat: "MM/DD/YYYY",
            dateFormatFull: "DDDD, MMMM D, YYYY",
            dateFormatLong: "D DDD MMM YYYY",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daySuffix: "",
            firstDay: 0,
            fromText: "Start",
            getDate: Rt,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthSuffix: "",
            pmText: "pm",
            quarterText: "Q{count}",
            separator: " ",
            shortYearCutoff: "+10",
            timeFormat: "h:mm A",
            toText: "End",
            todayText: "Today",
            weekText: "Week {count}",
            yearSuffix: "",
            getMonth: function (e) {
                return e.getMonth();
            },
            getDay: function (e) {
                return e.getDate();
            },
            getYear: function (e) {
                return e.getFullYear();
            },
            getMaxDayOfMonth: function (e, t) {
                return 32 - new Date(e, t, 32, 12).getDate();
            },
            getWeekNumber: function (e) {
                var t = new Date(+e);
                t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var a = new Date(t.getFullYear(), 0, 1);
                return Math.ceil(((t - a) / 864e5 + 1) / 7);
            },
        },
        St = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[T\s](\d{2}):?(\d{2})(?::?(\d{2})(?:\.(\d{3}))?)?((Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/,
        Ct = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
    function wt(e, t, a) {
        var n,
            s,
            i = { y: 1, m: 2, d: 3, h: 4, i: 5, s: 6, u: 7, tz: 8 };
        if (a) for (var r = 0, o = Object.keys(i); r < o.length; r++) (s = e[i[(n = o[r])] - t]) && (a[n] = "tz" === n ? s : 1);
    }
    function kt(e) {
        return +new Date(1970, 0, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) - +ft;
    }
    function Mt(e, t, a, n, s) {
        var i = +e,
            r = +a;
        return i < (s && r === +n ? +n + 1 : +n) && (s && i === +t ? +t + 1 : +t) > r;
    }
    function Et(e, t) {
        var a = jt(e, t);
        return a.setHours(0, 0, 0, 0), a;
    }
    function Nt(e, t) {
        var a = jt(e, t);
        return a.setHours(23, 59, 59, 999), a;
    }
    function It(e, t, a, n, s) {
        return ((!t && !s) || e.exclusiveEndDates) && a && n && a < n ? jt(t ? ie : e, +n - 1) : n;
    }
    function Lt(e) {
        return e.getFullYear() + "-" + De(e.getMonth() + 1) + "-" + De(e.getDate());
    }
    function Ht(e, t) {
        return xt(e) && !t ? e.createDate(e.getFullYear(), e.getMonth(), e.getDate()) : Rt(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function Ot(e) {
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function Yt(e, t) {
        return Te((Ot(t) - Ot(e)) / bt);
    }
    function Pt(e, t, a, n) {
        for (var s = -1, i = Ht(e); i <= Ht(t); i.setDate(i.getDate() + 1)) ta(i.getDay(), a, n) && s++;
        return s;
    }
    function Ft(e, t, a) {
        var n = e.getFullYear(),
            s = e.getMonth(),
            i = e.getDay(),
            r = a === ie ? t.firstDay : a;
        return new Date(n, s, r - (r - i > 0 ? 7 : 0) - i + e.getDate());
    }
    function zt(e, t) {
        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
    }
    function Vt(e, t, a) {
        return a.getYear(e) === a.getYear(t) && a.getMonth(e) === a.getMonth(t);
    }
    function Rt(e, t, a, n, s, i, r) {
        var o = new Date(e, t, a, n || 0, s || 0, i || 0, r || 0);
        return 23 === o.getHours() && 0 === (n || 0) && o.setHours(o.getHours() + 2), o;
    }
    function At(e) {
        return e.getTime;
    }
    function Wt(e) {
        return _e(e) && Ct.test(e);
    }
    function Ut(e, t) {
        return jt(e, t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
    }
    function Bt(e) {
        return e ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) : e;
    }
    function jt(e, t, a, n, s, i, r, o) {
        return null === t
            ? null
            : t && (me(t) || _e(t)) && ve(a)
            ? Kt(t, e)
            : e && e.timezonePlugin
            ? e.timezonePlugin.createDate(e, t, a, n, s, i, r, o)
            : fe(t)
            ? new Date(t)
            : ve(t)
            ? new Date()
            : new Date(t, a || 0, n || 1, s || 0, i || 0, r || 0, o || 0);
    }
    function Kt(e, t, a, n, s) {
        var i;
        if ((_e(e) && (e = e.trim()), !e)) return null;
        var r = t && t.timezonePlugin;
        if (r && !s) {
            var o = xt(e) ? e : r.parse(e, t);
            return o.setTimezone(t.displayTimezone), o;
        }
        if (At(e)) return e;
        if (e._isAMomentObject) return e.toDate();
        if (me(e)) return new Date(e);
        i = Ct.exec(e);
        var l = t && t.defaultValue,
            c = Kt((he(l) ? l[0] : l) || new Date()),
            d = c.getFullYear(),
            h = c.getMonth(),
            u = c.getDate();
        return i
            ? (wt(i, 2, n), new Date(d, h, u, i[2] ? +i[2] : 0, i[3] ? +i[3] : 0, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0))
            : (i = St.exec(e))
            ? (wt(i, 0, n), new Date(i[1] ? +i[1] : d, i[2] ? i[2] - 1 : h, i[3] ? +i[3] : u, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0, i[6] ? +i[6] : 0, i[7] ? +i[7] : 0))
            : Gt(a, e, t);
    }
    function Xt(e, t, a, n, s) {
        var i = (v && window.moment) || t.moment,
            r = t.timezonePlugin && (t.dataTimezone || t.displayTimezone),
            o = r ? "iso8601" : t.returnFormat;
        if (r && s) return Dt(e, t);
        if (e) {
            if ("moment" === o && i) return i(e);
            if ("locale" === o) return qt(a, e, t);
            if ("iso8601" === o)
                return (function (e, t) {
                    var a = "",
                        n = "";
                    return (
                        e &&
                            (t.h && ((n += De(e.getHours()) + ":" + De(e.getMinutes())), t.s && (n += ":" + De(e.getSeconds())), t.u && (n += "." + De(e.getMilliseconds(), 3)), t.tz && (n += t.tz)),
                            t.y ? ((a += e.getFullYear()), t.m && ((a += "-" + De(e.getMonth() + 1)), t.d && (a += "-" + De(e.getDate())), t.h && (a += "T" + n))) : t.h && (a = n)),
                        a
                    );
                })(e, n);
        }
        return e;
    }
    function Jt(e, t, a) {
        return qt(e, t, c({}, Tt, C.locale, a));
    }
    function qt(e, t, a) {
        var n,
            s,
            i = "",
            r = !1,
            o = function (t) {
                for (var a = 0, s = n; s + 1 < e.length && e.charAt(s + 1) === t; ) a++, s++;
                return a;
            },
            l = function (e) {
                var t = o(e);
                return (n += t), t;
            },
            c = function (e, t, a) {
                var n = "" + t;
                if (l(e)) for (; n.length < a; ) n = "0" + n;
                return n;
            },
            d = function (e, t, a, n) {
                return 3 === l(e) ? n[t] : a[t];
            };
        for (n = 0; n < e.length; n++)
            if (r) "'" !== e.charAt(n) || l("'") ? (i += e.charAt(n)) : (r = !1);
            else
                switch (e.charAt(n)) {
                    case "D":
                        i += o("D") > 1 ? d("D", t.getDay(), a.dayNamesShort, a.dayNames) : c("D", a.getDay(t), 2);
                        break;
                    case "M":
                        i += o("M") > 1 ? d("M", a.getMonth(t), a.monthNamesShort, a.monthNames) : c("M", a.getMonth(t) + 1, 2);
                        break;
                    case "Y":
                        (s = a.getYear(t)), (i += 3 === l("Y") ? s : (s % 100 < 10 ? "0" : "") + (s % 100));
                        break;
                    case "h":
                        var h = t.getHours();
                        i += c("h", h > 12 ? h - 12 : 0 === h ? 12 : h, 2);
                        break;
                    case "H":
                        i += c("H", t.getHours(), 2);
                        break;
                    case "m":
                        i += c("m", t.getMinutes(), 2);
                        break;
                    case "s":
                        i += c("s", t.getSeconds(), 2);
                        break;
                    case "a":
                        i += t.getHours() > 11 ? a.pmText : a.amText;
                        break;
                    case "A":
                        i += t.getHours() > 11 ? a.pmText.toUpperCase() : a.amText.toUpperCase();
                        break;
                    case "'":
                        l("'") ? (i += "'") : (r = !0);
                        break;
                    default:
                        i += e.charAt(n);
                }
        return i;
    }
    function Gt(e, t, a) {
        var n = c({}, Tt, a),
            s = Kt(n.defaultValue || new Date());
        if (!t) return s;
        e || (e = n.dateFormat + n.separator + n.timeFormat);
        var i,
            r = n.shortYearCutoff,
            o = n.getYear(s),
            l = n.getMonth(s) + 1,
            d = n.getDay(s),
            h = s.getHours(),
            u = s.getMinutes(),
            m = 0,
            _ = -1,
            p = !1,
            v = 0,
            f = function (t) {
                for (var a = 0, n = i; n + 1 < e.length && e.charAt(n + 1) === t; ) a++, n++;
                return a;
            },
            g = function (e) {
                var t = f(e);
                return (i += t), t;
            },
            y = function (e) {
                var a = g(e),
                    n = new RegExp("^\\d{1," + (a >= 2 ? 4 : 2) + "}"),
                    s = t.substr(v).match(n);
                return s ? ((v += s[0].length), parseInt(s[0], 10)) : 0;
            },
            b = function (e, a, n) {
                for (var s = 3 === g(e) ? n : a, i = 0; i < s.length; i++) if (t.substr(v, s[i].length).toLowerCase() === s[i].toLowerCase()) return (v += s[i].length), i + 1;
                return 0;
            },
            x = function () {
                v++;
            };
        for (i = 0; i < e.length; i++)
            if (p) "'" !== e.charAt(i) || g("'") ? x() : (p = !1);
            else
                switch (e.charAt(i)) {
                    case "Y":
                        o = y("Y");
                        break;
                    case "M":
                        l = f("M") < 2 ? y("M") : b("M", n.monthNamesShort, n.monthNames);
                        break;
                    case "D":
                        f("D") < 2 ? (d = y("D")) : b("D", n.dayNamesShort, n.dayNames);
                        break;
                    case "H":
                        h = y("H");
                        break;
                    case "h":
                        h = y("h");
                        break;
                    case "m":
                        u = y("m");
                        break;
                    case "s":
                        m = y("s");
                        break;
                    case "a":
                        _ = b("a", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
                        break;
                    case "A":
                        _ = b("A", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
                        break;
                    case "'":
                        g("'") ? x() : (p = !0);
                        break;
                    default:
                        x();
                }
        if (o < 100) {
            var D = void 0;
            (D = o <= (_e(r) ? (new Date().getFullYear() % 100) + parseInt(r, 10) : +r) ? 0 : -100), (o += new Date().getFullYear() - (new Date().getFullYear() % 100) + D);
        }
        h = -1 === _ ? h : _ && h < 12 ? h + 12 : _ || 12 !== h ? h : 0;
        var T = n.getDate(o, l - 1, d, h, u, m);
        return n.getYear(T) !== o || n.getMonth(T) + 1 !== l || n.getDay(T) !== d ? s : T;
    }
    function Zt(e, t, a) {
        if (e === t) return !0;
        if ((he(e) && !e.length && null === t) || (he(t) && !t.length && null === e)) return !0;
        if (null === e || null === t || e === ie || t === ie) return !1;
        if (_e(e) && _e(t)) return e === t;
        var n = a && a.dateFormat;
        if (he(e) || he(t)) {
            if (e.length !== t.length) return !1;
            for (var s = 0; s < e.length; s++) {
                var i = e[s],
                    r = t[s];
                if (!(_e(i) && _e(r) ? i === r : +Kt(i, a, n) == +Kt(r, a, n))) return !1;
            }
            return !0;
        }
        return +Kt(e, a, n) == +Kt(t, a, n);
    }
    function Qt(e) {
        return xt(e) ? e.clone() : new Date(e);
    }
    function $t(e, t) {
        var a = Qt(e);
        return a.setDate(a.getDate() + t), a;
    }
    function ea(e, t, a) {
        var n = a.getYear(e),
            s = a.getMonth(e) + t,
            i = a.getMaxDayOfMonth(n, s);
        return Ut(a, a.getDate(n, s, Math.min(a.getDay(e), i), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    }
    function ta(e, t, a) {
        return t > a ? e <= a || e >= t : e >= t && e <= a;
    }
    function aa(e, t) {
        var a = gt * t,
            n = Qt(e).setHours(0, 0, 0, 0),
            s = n + Math.round((+e - +n) / a) * a;
        return xt(e) ? e.createDate(s) : new Date(s);
    }
    function na(e, t, a) {
        return t && e < t ? new Date(t) : a && e > a ? new Date(a) : e;
    }
    v && "undefined" == typeof Symbol && (window.Symbol = { toPrimitive: "toPrimitive" });
    var sa = { formatDate: Jt, parseDate: Gt },
        ia = v ? document : ie,
        ra = v ? window : ie,
        oa = ["Webkit", "Moz"],
        la = ia && ia.createElement("div").style,
        ca = ia && ia.createElement("canvas"),
        da = ca && ca.getContext && ca.getContext("2d", { willReadFrequently: !0 }),
        ha = ra && ra.CSS,
        ua = ha && ha.supports,
        ma = {},
        _a =
            (ra && ra.requestAnimationFrame) ||
            function (e) {
                return setTimeout(e, 20);
            },
        pa =
            (ra && ra.cancelAnimationFrame) ||
            function (e) {
                clearTimeout(e);
            },
        va = la && la.animationName !== ie,
        fa = "ios" === h && !D,
        ga = fa && ra && ra.webkit && ra.webkit.messageHandlers,
        ya = (la && la.touchAction === ie) || (fa && !ga),
        ba = (function () {
            if (!la || la.transform !== ie) return "";
            for (var e = 0, t = oa; e < t.length; e++) {
                var a = t[e];
                if (la[a + "Transform"] !== ie) return a;
            }
            return "";
        })(),
        xa = ba ? "-" + ba.toLowerCase() + "-" : "",
        Da = ua && ua("(transform-style: preserve-3d)"),
        Ta = ua && (ua("position", "sticky") || ua("position", "-webkit-sticky"));
    function Sa(e, t, a, n) {
        e && e.addEventListener(t, a, n);
    }
    function Ca(e, t, a, n) {
        e && e.removeEventListener(t, a, n);
    }
    function wa(e) {
        return v ? (e && e.ownerDocument ? e.ownerDocument : ia) : ie;
    }
    function ka(e, t) {
        return parseFloat(getComputedStyle(e)[t] || "0");
    }
    function Ma(e) {
        return e.scrollLeft !== ie ? e.scrollLeft : e.pageXOffset;
    }
    function Ea(e) {
        return e.scrollTop !== ie ? e.scrollTop : e.pageYOffset;
    }
    function Na(e) {
        return v ? (e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : ra) : ie;
    }
    function Ia(e, t) {
        var a = getComputedStyle(e),
            n = (ba ? a[ba + "Transform"] : a.transform).split(")")[0].split(", ");
        return +(t ? n[13] || n[5] : n[12] || n[4]) || 0;
    }
    function La(e) {
        if (!da || !e) return "#000";
        if (ma[e]) return ma[e];
        (da.fillStyle = e), da.fillRect(0, 0, 1, 1);
        var t = da.getImageData(0, 0, 1, 1),
            a = t ? t.data : [0, 0, 0],
            n = 0.299 * +a[0] + 0.587 * +a[1] + 0.114 * +a[2] < 130 ? "#fff" : "#000";
        return (ma[e] = n), n;
    }
    function Ha(e, t, a, n, s, i, r) {
        var o,
            l,
            c = Math.min(1, (+new Date() - t) / 468),
            d = 0.5 * (1 - Math.cos(Math.PI * c));
        s !== ie && ((o = Te(a + (s - a) * d)), (e.scrollLeft = o)),
            i !== ie && ((l = Te(n + (i - n) * d)), (e.scrollTop = l)),
            o !== s || l !== i
                ? _a(function () {
                      Ha(e, t, a, n, s, i, r);
                  })
                : r && r();
    }
    function Oa(e, t, a, n, s, i) {
        t !== ie && (t = Math.max(0, Te(t))),
            a !== ie && (a = Math.max(0, Te(a))),
            s && t !== ie && (t = -t),
            n ? Ha(e, +new Date(), e.scrollLeft, e.scrollTop, t, a, i) : (t !== ie && (e.scrollLeft = t), a !== ie && (e.scrollTop = a), i && i());
    }
    function Ya(e) {
        var t = e.getBoundingClientRect(),
            a = { left: t.left, top: t.top },
            n = Na(e);
        return n !== ie && ((a.top += Ea(n)), (a.left += Ma(n))), a;
    }
    function Pa(e, t) {
        var a = e && (e.matches || e.msMatchesSelector);
        return a && a.call(e, t);
    }
    function Fa(e, t, a) {
        for (; e && !Pa(e, t); ) {
            if (e === a || e.nodeType === e.DOCUMENT_NODE) return null;
            e = e.parentNode;
        }
        return e;
    }
    function za(e, t, a) {
        var n;
        try {
            n = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: a });
        } catch (e) {
            (n = document.createEvent("Event")).initEvent(t, !0, !0), (n.detail = a);
        }
        e.dispatchEvent(n);
    }
    function Va(e, t) {
        for (var a = 0; a < e.length; a++) t(e[a], a);
    }
    var Ra = 0;
    function Aa(e, t, a) {
        "jsonp" === a
            ? (function (e, t) {
                  if (ra) {
                      var a = ia.createElement("script"),
                          n = "mbscjsonp" + ++Ra;
                      (ra[n] = function (e) {
                          a.parentNode.removeChild(a), delete ra[n], e && t(e);
                      }),
                          (a.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + n),
                          ia.body.appendChild(a);
                  }
              })(e, t)
            : (function (e, t) {
                  var a = new XMLHttpRequest();
                  a.open("GET", e, !0),
                      (a.onload = function () {
                          a.status >= 200 && a.status < 400 && t(JSON.parse(a.response));
                      }),
                      (a.onerror = function () {}),
                      a.send();
              })(e, t);
    }
    var Wa = { getJson: Aa },
        Ua = {},
        Ba = [],
        ja = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function Ka(e, t) {
        for (var a in t) e[a] = t[a];
        return e;
    }
    function Xa(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    var Ja = {
        _catchError: function (e, t) {
            for (var a, n, s; (t = t._parent); )
                if ((a = t._component) && !a._processingException)
                    try {
                        if (((n = a.constructor) && null != n.getDerivedStateFromError && (a.setState(n.getDerivedStateFromError(e)), (s = a._dirty)), null != a.componentDidCatch && (a.componentDidCatch(e), (s = a._dirty)), s))
                            return (a._pendingError = a);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
        _vnodeId: 0,
    };
    function qa(e, t, a) {
        var n,
            s,
            i,
            r = {};
        for (i in t) "key" == i ? (n = t[i]) : "ref" == i ? (s = t[i]) : (r[i] = t[i]);
        if (arguments.length > 3) for (a = [a], i = 3; i < arguments.length; i++) a.push(arguments[i]);
        if ((null != a && (r.children = a), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === r[i] && (r[i] = e.defaultProps[i]);
        return Ga(e, r, n, s, null);
    }
    function Ga(e, t, a, n, s) {
        var i = { type: e, props: t, key: a, ref: n, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: null == s ? ++Ja._vnodeId : s };
        return null != Ja.vnode && Ja.vnode(i), i;
    }
    function Za(e) {
        return e.children;
    }
    function Qa(e, t) {
        (this.props = e), (this.context = t);
    }
    function $a(e, t) {
        if (null == t) return e._parent ? $a(e._parent, e._parent._children.indexOf(e) + 1) : null;
        for (var a; t < e._children.length; t++) if (null != (a = e._children[t]) && null != a._dom) return a._dom;
        return "function" == typeof e.type ? $a(e) : null;
    }
    function en(e) {
        var t = e._vnode,
            a = t._dom,
            n = e._parentDom;
        if (n) {
            var s = [],
                i = Ka({}, t);
            (i._original = t._original + 1), pn(n, t, i, e._globalContext, void 0 !== n.ownerSVGElement, null != t._hydrating ? [a] : null, s, null == a ? $a(t) : a, t._hydrating), vn(s, t), t._dom != a && tn(t);
        }
    }
    function tn(e) {
        if (null != (e = e._parent) && null != e._component) {
            e._dom = e._component.base = null;
            for (var t = 0; t < e._children.length; t++) {
                var a = e._children[t];
                if (null != a && null != a._dom) {
                    e._dom = e._component.base = a._dom;
                    break;
                }
            }
            return tn(e);
        }
    }
    (Qa.prototype.setState = function (e, t) {
        var a;
        (a = null != this._nextState && this._nextState !== this.state ? this._nextState : (this._nextState = Ka({}, this.state))),
            "function" == typeof e && (e = e(Ka({}, a), this.props)),
            e && Ka(a, e),
            null != e && this._vnode && (t && this._renderCallbacks.push(t), rn(this));
    }),
        (Qa.prototype.forceUpdate = function (e) {
            this._vnode && ((this._force = !0), e && this._renderCallbacks.push(e), rn(this));
        }),
        (Qa.prototype.render = Za);
    var an,
        nn = [],
        sn = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
    function rn(e) {
        ((!e._dirty && (e._dirty = !0) && nn.push(e) && !on._rerenderCount++) || an !== Ja.debounceRendering) && ((an = Ja.debounceRendering) || sn)(on);
    }
    function on() {
        for (var e; (on._rerenderCount = nn.length); )
            (e = nn.sort(function (e, t) {
                return e._vnode._depth - t._vnode._depth;
            })),
                (nn = []),
                e.some(function (e) {
                    e._dirty && en(e);
                });
    }
    function ln(e, t, a, n, s, i, r, o, l, c) {
        var d,
            h,
            u,
            m,
            _,
            p,
            v,
            f = (n && n._children) || Ba,
            g = f.length;
        for (a._children = [], d = 0; d < t.length; d++)
            if (
                null !=
                (m =
                    null == (m = t[d]) || "boolean" == typeof m
                        ? (a._children[d] = null)
                        : "string" == typeof m || "number" == typeof m || "bigint" == typeof m
                        ? (a._children[d] = Ga(null, m, null, null, m))
                        : Array.isArray(m)
                        ? (a._children[d] = Ga(Za, { children: m }, null, null, null))
                        : m._depth > 0
                        ? (a._children[d] = Ga(m.type, m.props, m.key, null, m._original))
                        : (a._children[d] = m))
            ) {
                if (((m._parent = a), (m._depth = a._depth + 1), null === (u = f[d]) || (u && m.key == u.key && m.type === u.type))) f[d] = void 0;
                else
                    for (h = 0; h < g; h++) {
                        if ((u = f[h]) && m.key == u.key && m.type === u.type) {
                            f[h] = void 0;
                            break;
                        }
                        u = null;
                    }
                pn(e, m, (u = u || Ua), s, i, r, o, l, c),
                    (_ = m._dom),
                    (h = m.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, m), v.push(h, m._component || _, m)),
                    null != _
                        ? (null == p && (p = _),
                          "function" == typeof m.type && null != m._children && m._children === u._children ? (m._nextDom = l = cn(m, l, e)) : (l = dn(e, m, u, f, _, l)),
                          c || "option" !== a.type ? "function" == typeof a.type && (a._nextDom = l) : (e.value = ""))
                        : l && u._dom == l && l.parentNode != e && (l = $a(u));
            }
        for (a._dom = p, d = g; d--; ) null != f[d] && ("function" == typeof a.type && null != f[d]._dom && f[d]._dom == a._nextDom && (a._nextDom = $a(n, d + 1)), gn(f[d], f[d]));
        if (v) for (d = 0; d < v.length; d++) fn(v[d], v[++d], v[++d]);
    }
    function cn(e, t, a) {
        for (var n = 0; n < e._children.length; n++) {
            var s = e._children[n];
            s && ((s._parent = e), (t = "function" == typeof s.type ? cn(s, t, a) : dn(a, s, s, e._children, s._dom, t)));
        }
        return t;
    }
    function dn(e, t, a, n, s, i) {
        var r;
        if (void 0 !== t._nextDom) (r = t._nextDom), (t._nextDom = void 0);
        else if (null == a || s != i || null == s.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(s), (r = null);
            else {
                for (var o = i, l = 0; (o = o.nextSibling) && l < n.length; l += 2) if (o == s) break e;
                e.insertBefore(s, i), (r = i);
            }
        return (i = void 0 !== r ? r : s.nextSibling);
    }
    function hn(e, t, a) {
        "-" === t[0] ? e.setProperty(t, a) : null == a ? (e[t] = "") : "number" != typeof a || ja.test(t) ? (e[t] = a) : (e[t] = a + "px");
    }
    function un(e, t, a, n, s) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof a) e.style.cssText = a;
            else {
                if (("string" == typeof n && (e.style.cssText = n = ""), n)) for (t in n) (a && t in a) || hn(e.style, t, "");
                if (a) for (t in a) (n && a[t] === n[t]) || hn(e.style, t, a[t]);
            }
        else if ("o" === t[0] && "n" === t[1])
            if (((i = t !== (t = t.replace(/Capture$/, ""))), (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)), e._listeners || (e._listeners = {}), (e._listeners[t + i] = a), a)) {
                if (!n) {
                    var r = i ? _n : mn;
                    e.addEventListener(t, r, i);
                }
            } else {
                var o = i ? _n : mn;
                e.removeEventListener(t, o, i);
            }
        else if ("dangerouslySetInnerHTML" !== t) {
            if (s) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                try {
                    e[t] = null == a ? "" : a;
                    break e;
                } catch (e) {}
            "function" == typeof a || (null != a && (!1 !== a || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, a) : e.removeAttribute(t));
        }
    }
    function mn(e) {
        this._listeners[e.type + !1](Ja.event ? Ja.event(e) : e);
    }
    function _n(e) {
        this._listeners[e.type + !0](Ja.event ? Ja.event(e) : e);
    }
    function pn(e, t, a, n, s, i, r, o, l) {
        var c,
            d = t.type;
        if (void 0 !== t.constructor) return null;
        null != a._hydrating && ((l = a._hydrating), (o = t._dom = a._dom), (t._hydrating = null), (i = [o])), (c = Ja._diff) && c(t);
        try {
            e: if ("function" == typeof d) {
                var h,
                    u,
                    m,
                    _,
                    p,
                    v,
                    f = t.props,
                    g = (c = d.contextType) && n[c._id],
                    y = c ? (g ? g.props.value : c._defaultValue) : n;
                if (
                    (a._component
                        ? (v = (h = t._component = a._component)._processingException = h._pendingError)
                        : ("prototype" in d && d.prototype.render ? (t._component = h = new d(f, y)) : ((t._component = h = new Qa(f, y)), (h.constructor = d), (h.render = yn)),
                          g && g.sub(h),
                          (h.props = f),
                          h.state || (h.state = {}),
                          (h.context = y),
                          (h._globalContext = n),
                          (u = h._dirty = !0),
                          (h._renderCallbacks = [])),
                    null == h._nextState && (h._nextState = h.state),
                    null != d.getDerivedStateFromProps && (h._nextState == h.state && (h._nextState = Ka({}, h._nextState)), Ka(h._nextState, d.getDerivedStateFromProps(f, h._nextState))),
                    (m = h.props),
                    (_ = h.state),
                    u)
                )
                    null == d.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h._renderCallbacks.push(h.componentDidMount);
                else {
                    if (
                        (null == d.getDerivedStateFromProps && f !== m && null != h.componentWillReceiveProps && h.componentWillReceiveProps(f, y),
                        (!h._force && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(f, h._nextState, y)) || t._original === a._original)
                    ) {
                        (h.props = f),
                            (h.state = h._nextState),
                            t._original !== a._original && (h._dirty = !1),
                            (h._vnode = t),
                            (t._dom = a._dom),
                            (t._children = a._children),
                            t._children.forEach(function (e) {
                                e && (e._parent = t);
                            }),
                            h._renderCallbacks.length && r.push(h);
                        break e;
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(f, h._nextState, y),
                        null != h.componentDidUpdate &&
                            h._renderCallbacks.push(function () {
                                h.componentDidUpdate(m, _, p);
                            });
                }
                (h.context = y),
                    (h.props = f),
                    (h.state = h._nextState),
                    (c = Ja._render) && c(t),
                    (h._dirty = !1),
                    (h._vnode = t),
                    (h._parentDom = e),
                    (c = h.render(h.props, h.state, h.context)),
                    (h.state = h._nextState),
                    null != h.getChildContext && (n = Ka(Ka({}, n), h.getChildContext())),
                    u || null == h.getSnapshotBeforeUpdate || (p = h.getSnapshotBeforeUpdate(m, _));
                var b = null != c && c.type === Za && null == c.key ? c.props.children : c;
                ln(e, Array.isArray(b) ? b : [b], t, a, n, s, i, r, o, l), (h.base = t._dom), (t._hydrating = null), h._renderCallbacks.length && r.push(h), v && (h._pendingError = h._processingException = null), (h._force = !1);
            } else
                null == i && t._original === a._original
                    ? ((t._children = a._children), (t._dom = a._dom))
                    : (t._dom = (function (e, t, a, n, s, i, r, o) {
                          var l = a.props,
                              c = t.props,
                              d = t.type,
                              h = 0;
                          "svg" === d && (s = !0);
                          if (null != i)
                              for (; h < i.length; h++) {
                                  var u = i[h];
                                  if (u && (u === e || (d ? u.localName == d : 3 == u.nodeType))) {
                                      (e = u), (i[h] = null);
                                      break;
                                  }
                              }
                          if (null == e) {
                              if (null === d) return document.createTextNode(c);
                              (e = s ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, c.is && c)), (i = null), (o = !1);
                          }
                          if (null === d) l === c || (o && e.data === c) || (e.data = c);
                          else {
                              i = i && Ba.slice.call(e.childNodes);
                              var m = (l = a.props || Ua).dangerouslySetInnerHTML,
                                  _ = c.dangerouslySetInnerHTML;
                              if (
                                  (o || (null != i && (l = {}), (_ || m) && ((_ && ((m && _.__html == m.__html) || _.__html === e.innerHTML)) || (e.innerHTML = (_ && _.__html) || ""))),
                                  (function (e, t, a, n, s) {
                                      var i;
                                      for (i in a) "children" === i || "key" === i || i in t || un(e, i, null, a[i], n);
                                      for (i in t) (s && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || a[i] === t[i] || un(e, i, t[i], a[i], n);
                                  })(e, c, l, s, o),
                                  _)
                              )
                                  t._children = [];
                              else if (((h = t.props.children), ln(e, Array.isArray(h) ? h : [h], t, a, n, s && "foreignObject" !== d, i, r, e.firstChild, o), null != i)) for (h = i.length; h--; ) null != i[h] && Xa(i[h]);
                              o ||
                                  ("value" in c && void 0 !== (h = c.value) && (h !== e.value || ("progress" === d && !h)) && un(e, "value", h, l.value, !1),
                                  "checked" in c && void 0 !== (h = c.checked) && h !== e.checked && un(e, "checked", h, l.checked, !1));
                          }
                          return e;
                      })(a._dom, t, a, n, s, i, r, l));
            (c = Ja.diffed) && c(t);
        } catch (e) {
            (t._original = null), (l || null != i) && ((t._dom = o), (t._hydrating = !!l), (i[i.indexOf(o)] = null)), Ja._catchError(e, t, a);
        }
    }
    function vn(e, t) {
        Ja._commit && Ja._commit(t, e),
            e.some(function (t) {
                try {
                    (e = t._renderCallbacks),
                        (t._renderCallbacks = []),
                        e.some(function (e) {
                            e.call(t);
                        });
                } catch (e) {
                    Ja._catchError(e, t._vnode);
                }
            });
    }
    function fn(e, t, a) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            Ja._catchError(e, a);
        }
    }
    function gn(e, t, a) {
        var n, s;
        if ((Ja.unmount && Ja.unmount(e), (n = e.ref) && ((n.current && n.current !== e._dom) || fn(n, null, t)), a || "function" == typeof e.type || (a = null != (s = e._dom)), (e._dom = e._nextDom = void 0), null != (n = e._component))) {
            if (n.componentWillUnmount)
                try {
                    n.componentWillUnmount();
                } catch (e) {
                    Ja._catchError(e, t);
                }
            n.base = n._parentDom = null;
        }
        if ((n = e._children)) for (var i = 0; i < n.length; i++) n[i] && gn(n[i], t, a);
        null != s && Xa(s);
    }
    function yn(e, t, a) {
        return this.constructor(e, a);
    }
    function bn(e, t, a) {
        Ja._root && Ja._root(e, t);
        var n = "function" == typeof a,
            s = n ? null : (a && a._children) || t._children,
            i = [];
        pn(t, (e = ((!n && a) || t)._children = qa(Za, null, [e])), s || Ua, Ua, void 0 !== t.ownerSVGElement, !n && a ? [a] : s ? null : t.firstChild ? Ba.slice.call(t.childNodes) : null, i, !n && a ? a : s ? s._dom : t.firstChild, n),
            vn(i, e);
    }
    on._rerenderCount = 0;
    var xn = 0;
    function Dn(e, t) {
        var a = {
            _id: (t = "__cC" + xn++),
            _defaultValue: e,
            Consumer: function (e, t) {
                return e.children(t);
            },
            Provider: function (e) {
                if (!this.getChildContext) {
                    var a = [],
                        n = {};
                    (n[t] = this),
                        (this.getChildContext = function () {
                            return n;
                        }),
                        (this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && a.some(rn);
                        }),
                        (this.sub = function (e) {
                            a.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                a.splice(a.indexOf(e), 1), t && t.call(e);
                            };
                        });
                }
                return e.children;
            },
        };
        return (a.Provider._contextRef = a.Consumer.contextType = a);
    }
    var Tn = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype.render = function () {}),
            (t.prototype.shouldComponentUpdate = function (e, t) {
                return Sn(e, this.props) || Sn(t, this.state);
            }),
            t
        );
    })(Qa);
    function Sn(e, t) {
        for (var a in e) if (e[a] !== t[a]) return !0;
        for (var a in t) if (!(a in e)) return !0;
        return !1;
    }
    Ja.vnode = function (e) {
        var t = e.props,
            a = {};
        if (_e(e.type)) {
            for (var n in t) {
                var s = t[n];
                /^onAni/.test(n) ? (n = n.toLowerCase()) : /ondoubleclick/i.test(n) && (n = "ondblclick"), (a[n] = s);
            }
            e.props = a;
        }
    };
    var Cn = {},
        wn = 0;
    function kn(e, t, a, n, s) {
        Pa(e, t)
            ? e.__mbscFormInst || Mn(a, e, s, n, !0)
            : Va(e.querySelectorAll(t), function (e) {
                  e.__mbscFormInst || Mn(a, e, s, n, !0);
              });
    }
    function Mn(e, t, a, n, s) {
        var i,
            r,
            o = [],
            l = [],
            d = {},
            h = n || {},
            u = h.renderToParent ? t.parentNode : t,
            m = u.parentNode,
            _ = h.useOwnChildren ? t : u,
            p = t.getAttribute("class"),
            v = t.value,
            f = c({ className: u.getAttribute("class") }, t.dataset, a, {
                ref: function (e) {
                    r = e;
                },
            });
        h.readProps &&
            h.readProps.forEach(function (e) {
                var a = t[e];
                a !== ie && (f[e] = a);
            }),
            h.readAttrs &&
                h.readAttrs.forEach(function (e) {
                    var a = t.getAttribute(e);
                    null !== a && (f[e] = a);
                });
        var g = h.slots;
        if (g)
            for (var y = 0, b = Object.keys(g); y < b.length; y++) {
                var x = b[y],
                    D = g[x],
                    T = u.querySelector("[mbsc-" + D + "]");
                T && ((d[x] = T), T.parentNode.removeChild(T), (f[x] = qa("span", { className: "mbsc-slot-" + D })));
            }
        if (
            (h.hasChildren &&
                (Va(_.childNodes, function (e) {
                    e !== t && 8 !== e.nodeType && (3 !== e.nodeType || (3 === e.nodeType && /\S/.test(e.nodeValue))) && o.push(e), l.push(e);
                }),
                Va(o, function (e) {
                    _.removeChild(e);
                }),
                o.length && (f.hasChildren = !0)),
            t.id || (t.id = "mbsc-control-" + wn++),
            h.before && h.before(t, f, o),
            bn(qa(e, f), m, u),
            p &&
                h.renderToParent &&
                (i = t.classList).add.apply(
                    i,
                    p
                        .replace(/^\s+|\s+$/g, "")
                        .replace(/\s+|^\s|\s$/g, " ")
                        .split(" ")
                ),
            h.hasChildren)
        ) {
            var S = "." + h.parentClass,
                C = Pa(u, S) ? u : u.querySelector(S);
            C &&
                Va(o, function (e) {
                    C.appendChild(e);
                });
        }
        if ((h.hasValue && (t.value = v), g))
            for (
                var w = function (e) {
                        var t = g[e],
                            a = d[e];
                        Va(u.querySelectorAll(".mbsc-slot-" + t), function (e, t) {
                            var n = t > 0 ? a.cloneNode(!0) : a;
                            e.appendChild(n);
                        });
                    },
                    k = 0,
                    M = Object.keys(d);
                k < M.length;
                k++
            ) {
                w((x = M[k]));
            }
        return (
            (r.destroy = function () {
                var e = u.parentNode,
                    a = ia.createComment("");
                e.insertBefore(a, u),
                    bn(null, u),
                    delete t.__mbscInst,
                    delete t.__mbscFormInst,
                    delete u._listeners,
                    (u.innerHTML = ""),
                    u.setAttribute("class", f.className),
                    e.replaceChild(u, a),
                    h.hasChildren &&
                        Va(l, function (e) {
                            _.appendChild(e);
                        }),
                    h.renderToParent && t.setAttribute("class", p || "");
            }),
            s ? (t.__mbscInst || (t.__mbscInst = r), (t.__mbscFormInst = r)) : (t.__mbscInst = r),
            r
        );
    }
    function En(e) {
        Cn[e._name] = e;
    }
    function Nn(e, t) {
        if (e)
            for (var a = 0, n = Object.keys(Cn); a < n.length; a++) {
                var s = n[a],
                    i = Cn[s];
                kn(e, i._selector, i, i._renderOpt, t);
            }
    }
    var In,
        Ln,
        Hn = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._newProps = {}),
                    (t._setEl = function (e) {
                        t._el = e ? e._el || e : null;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this.__value;
                    },
                    set: function (e) {
                        this.__value = e;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.componentDidMount = function () {
                    this.__init(), this._init(), this._mounted(), this._updated(), this._enhance();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this._updated(), this._enhance();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this._destroy(), this.__destroy();
                }),
                (t.prototype.render = function () {
                    return this._willUpdate(), this._template(this.s, this.state);
                }),
                (t.prototype.getInst = function () {
                    return this;
                }),
                (t.prototype.setOptions = function (e) {
                    for (var t in e) this.props[t] = e[t];
                    this.forceUpdate();
                }),
                (t.prototype._safeHtml = function (e) {
                    return { __html: e };
                }),
                (t.prototype._init = function () {}),
                (t.prototype.__init = function () {}),
                (t.prototype._emit = function (e, t) {}),
                (t.prototype._template = function (e, t) {}),
                (t.prototype._mounted = function () {}),
                (t.prototype._updated = function () {}),
                (t.prototype._destroy = function () {}),
                (t.prototype.__destroy = function () {}),
                (t.prototype._willUpdate = function () {}),
                (t.prototype._enhance = function () {
                    var e = this._shouldEnhance;
                    e && (Nn(!0 === e ? this._el : e), (this._shouldEnhance = !1));
                }),
                t
            );
        })(Tn),
        On = ra,
        Yn = +new Date(),
        Pn = {},
        Fn = {};
    function zn(e) {
        !e._logged &&
            "mbscdemo" !== t.apiKey &&
            ia &&
            ((e._logged = !0),
            (Pn.components = Pn.components || []),
            Pn.components.push(e.constructor._name.toLowerCase()),
            clearTimeout(Ln),
            (Ln = setTimeout(function () {
                if (!t.fwv) {
                    var a = void 0;
                    switch (t.fw) {
                        case "angular":
                            var n = ia.querySelector("[ng-version]");
                            a = n ? n.getAttribute("ng-version") : "N/A";
                            break;
                        case "jquery":
                            a = On.$.fn && On.$.fn.jquery;
                    }
                    t.fwv = a || "N/A";
                }
                (Pn.demo = !!On.isMbscDemo),
                    (Pn.fw = t.fw),
                    (Pn.fwv = t.fwv),
                    (Pn.theme = e.s.theme),
                    (Pn.trialCode = t.apiKey),
                    (Pn.v = e._v.version),
                    Rn("log", null, Pn, function () {
                        Pn = {};
                    });
            }, 5e3)));
    }
    function Vn(e) {
        if (e && ia && !ia.getElementById("trial-message")) {
            var t = ia.createElement("div");
            t.setAttribute("id", "trial-message"), t.setAttribute("style", ""), t.setAttribute("class", "mbsc-font");
            var a = ia.createElement("div");
            a.setAttribute("style", "padding: 15px 25px; max-width: 400px; margin: 0 auto 10px auto; border-radius: 16px; line-height: 25px; background: #cacaca59; font-size: 15px; color: #151515;"), (a.innerHTML = '' + " ");
            var n = ia.createElement("a");
            (n.innerHTML = e.button.text),
                n.setAttribute("style", "color: #FF4080;font-weight: 600;"),
                n.setAttribute("href", ""),
                a.appendChild(n),
                t.appendChild(a),
                ia.body.appendChild(t),
                setTimeout(function () {
                    ia.body.removeChild(t);
                }, 6e3);
        }
    }
    function Rn(e, a, n, s, i, r) {
        if (ra && ia) {
            var o = ia.createElement("script"),
                l = "mbsc_jsonp_" + (i || ++Yn);
            l = ra[l] ? "mbsc_jsonp_" + ++Yn : l;
            var c = r || 1;
            ra[l] = function (t, n) {
                clearTimeout(d),
                    o.parentNode.removeChild(o),
                    delete ra[l],
                    (t = t
                        ? JSON.parse(t, function (e, t) {
                              return "string" != typeof t ? t : "function_" === t.substring(0, 9) && a ? a[t.replace("function_", "")] : t.match(St) ? Kt(t) : t;
                          })
                        : {}),
                    "remote" === e && ((Fn.txt = t.__e), delete t.__e),
                    n || s(t);
            };
            var d = setTimeout(h, 6e3);
            (o.onerror = h), (o.src = t.apiUrl + t.apiKey + "/" + e + "?callback=" + l + "&data=" + encodeURIComponent(JSON.stringify(n))), ia.body.appendChild(o);
        } else s({});
        function h() {
            ra && ra[l] && ra[l](null, !0), "remote" === e && (c < 4 ? Rn(e, a, n, s, i, c + 1) : In || ((In = !0), An()));
        }
    }
    function An() {
        var e = ia.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*=\s*([^;]*).*$)|^.*$/, "$1");
        ia.cookie = "mobiscrollClientError=1; expires=" + new Date(new Date().getTime() + 864e5).toUTCString() + "; path=/; SameSite=Strict";
        try {
            ra.name = (ra.name || "") + ";mobiscrollClientError";
        } catch (e) {}
        Rn("error", null, { sessionID: e, trialCode: t.apiKey }, function () {
            ia.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                ra.name = (ra.name || "").replace(/;mobiscrollClientError/g, "");
            } catch (e) {}
        });
    }
    ia &&
        (ia.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(ra.name || "")) &&
        ia.addEventListener("DOMContentLoaded", function () {
            An();
        });
    var Wn,
        Un = new Function(
            "textParam,p",
            (function () {
                for (
                    var e = (function (e, t) {
                            for (
                                var a = (function (e) {
                                        for (var t = e[0], a = 0; a < 16; ++a) if ((t * a) % 16 == 1) return [a, e[1]];
                                    })(t),
                                    n = (function (e, t, a, n) {
                                        for (var s = "0123456789abcdef", i = t.length, r = "", o = 0; o < i; ++o) r += e ? s[(a * s.indexOf(t[o]) + n) % 16] : s[(((a * s.indexOf(t[o]) - a * n) % 16) + 16) % 16];
                                        return r;
                                    })(0, e, a[0], a[1]),
                                    s = n.length,
                                    i = [],
                                    r = 0;
                                r < s;
                                r += 2
                            )
                                i.push(n[r] + n[r + 1]);
                            return i;
                        })(
                            "d4ded3d9d4a7d0d478abdeabafe2daabac1f1b19dea7d4d7dea2e04fabd4a0e2deaba2a4a5afe0e31c4fabd4a0e2afabd0e018e2181aecd8e3eaeaebd4a7d0d478abdeabafe2d4d0d415ed1ca4a3dae8d1d4d3aca71feeede9aad7a2a1d4a3a5a2e0a7e3d9daabdee8d41fa7e2aca7a2add4a0eca2ecde19dda0a3aca7e018eb1f1fd4e3d9de1f4fabd4a0e2aaaca5a5dee04fabd4a0e2deaba2a4a5afe0e3e6d4e319d4ef1f1b19a21fa779d47f19a779d47f1fa779de7f19a779de7f1fa2dfdea7d4d7dea2e8a7dfe079edd8a5a3a2d4a7deefa7daa7a2d4d116a2a5a2a7edeceda4a3d1d8acabd316aeaca5a1a9eba3afd8a5ded4aba2d4edecedd8a5d1a3d4a3a5a216abaed1a5acd7d4a7eba3afd8a5ded4aba2d4edecedd4a5d81618eba3afd8a5ded4aba2d4edecedaca7aad41618eba3afd8a5ded4aba2d4edecedaea5d4d4a5af1618eba3afd8a5ded4aba2d4edeceddea3ada0d41618eba3afd8a5ded4aba2d4edecedafabdeada3a21618eba3afd8a5ded4aba2d4edecedd8aba4a4a3a2ad1618eba3afd8a5ded4aba2d4edecedaaa5a2d4efd1a3d6a71610d8d0eba3afd8a5ded4aba2d4edecedaca3a2a7efa0a7a3ada0d4161b1ed8d0edecedd4a7d0d4efabaca3ada216a1a7a2d4a7deedeceda5d8aba1a3d4d316ede9e04fabd4a0e2aaaca5a5dee04fabd4a0e2deaba2a4a5afe0e3e61e18e3e51b1818e918e210e3e9edeba3afd8a5ded4aba2d4ed7fe3e2a6a5a3a2e0ed19ede3e9edee127cd7181817147cd71818171e7cd7181814137cd71818141b7cd7181814a11ce5a4a3da12ed16edede3dfa1abd4a1a0e0a7e3d9dea7d4d7dea2e8ededdf6",
                            [3, 8]
                        ),
                        t = e.length,
                        a = "",
                        n = 0;
                    n < t;
                    n++
                )
                    a += String.fromCharCode(parseInt(e[n], 16));
                return a;
            })()
        ),
        Bn = "5.28.1",
        jn = 0,
        Kn = { large: 992, medium: 768, small: 576, xlarge: 1200, xsmall: 0 };
    f &&
        ((Wn = f.matches),
        f.addListener(function (e) {
            (Wn = e.matches), E.next();
        }));
    var Xn = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.s = {}),
                    (t.state = {}),
                    (t._mbsc = !0),
                    (t._v = { version: "5.28.1" }),
                    (t._uid = ++jn),
                    (t._textParamMulti = {}),
                    (t.__getText = Un),
                    (t._proxyHook = function (e) {
                        t._hook(e.type, e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "nativeElement", {
                    get: function () {
                        return this._el;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "__getTextParam", {
                    get: function () {
                        return Fn.val;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "textParam", {
                    get: function () {
                        return void 0 === this._textParam && (this._textParam = this.__getText(Fn, 0.15)), this._safeHtml(this._textParam);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.textParamMulti = function (e) {
                    return void 0 === this._textParamMulti[e] && (this._textParamMulti[e] = this.__getText(Fn, 0.15)), this._safeHtml(this._textParamMulti[e]);
                }),
                (t.prototype.destroy = function () {}),
                (t.prototype._hook = function (e, t) {
                    var a = this.s;
                    if (((t.inst = this), (t.type = e), a[e])) return a[e](t, this);
                    this._emit(e, t);
                }),
                (t.prototype.__init = function () {
                    var e = this;
                    if (this.constructor.defaults) {
                        this._optChange = E.subscribe(function () {
                            e.forceUpdate();
                        });
                        var t = this.props.modules;
                        if (t)
                            for (var a = 0, n = t; a < n.length; a++) {
                                var s = n[a];
                                s.init && s.init(this);
                            }
                    }
                    this._hook("onInit", {});
                }),
                (t.prototype.__destroy = function () {
                    this._optChange !== ie && E.unsubscribe(this._optChange), this._hook("onDestroy", {});
                }),
                (t.prototype._render = function (e, t) {}),
                (t.prototype._willUpdate = function () {
                    this._merge(), this._render(this.s, this.state);
                }),
                (t.prototype._resp = function (e) {
                    var t,
                        a = e.responsive,
                        n = -1,
                        s = this.state.width;
                    if ((s === ie && (s = 375), a && s))
                        for (var i = 0, r = Object.keys(a); i < r.length; i++) {
                            var o = r[i],
                                l = a[o],
                                c = l.breakpoint || Kn[o];
                            s >= c && c > n && ((t = l), (n = c));
                        }
                    return t;
                }),
                (t.prototype._merge = function () {
                    var e,
                        t,
                        a = this.constructor,
                        n = a.defaults,
                        s = this._opt || {},
                        i = {};
                    if (((this._prevS = this.s || {}), n)) {
                        for (var r in this.props) this.props[r] !== ie && (i[r] = this.props[r]);
                        var o = i.locale || s.locale || C.locale || {},
                            l = i.calendarSystem || o.calendarSystem || s.calendarSystem || C.calendarSystem,
                            d = i.theme || s.theme || C.theme,
                            u = i.themeVariant || s.themeVariant || C.themeVariant;
                        ("auto" !== d && d) || (d = M.theme || ""), ("dark" !== u && (!Wn || ("auto" !== u && u))) || !k[d + "-dark"] || (d += "-dark"), (i.theme = d);
                        var m = (t = k[d]) && t[a._name];
                        e = c({}, n, m, o, C, s, l, i);
                        var _ = this._resp(e);
                        (this._respProps = _), _ && (e = c({}, e, _));
                    } else (e = c({}, this.props)), (t = k[e.theme]);
                    var v = t && t.baseTheme;
                    (e.baseTheme = v),
                        (this.s = e),
                        (this._className = e.cssClass || e.class || e.className || ""),
                        (this._rtl = " mbsc-" + (e.rtl ? "rtl" : "ltr")),
                        (this._theme = " mbsc-" + e.theme + (v ? " mbsc-" + v : "")),
                        (this._touchUi = "auto" === e.touchUi || e.touchUi === ie ? p : e.touchUi),
                        (this._hb = "ios" !== h || ("ios" !== e.theme && "ios" !== v) ? "" : " mbsc-hb");
                }),
                (t.defaults = ie),
                (t._name = ""),
                t
            );
        })(Hn),
        Jn = { 0: "SU", 1: "MO", 2: "TU", 3: "WE", 4: "TH", 5: "FR", 6: "SA" },
        qn = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 },
        Gn = { byday: "weekDays", bymonth: "month", bymonthday: "day", bysetpos: "pos", dtstart: "from", freq: "repeat", wkst: "weekStart" };
    function Zn(e, t, a, n) {
        var s = Kt(t.start, t.allDay ? ie : a),
            i = Kt(t.end, t.allDay ? ie : a),
            r = i - s;
        for (n && ((t.start = s), (t.end = i)), s = Ht(s), i = a.exclusiveEndDates ? i : Ht($t(i, 1)); s < i || !r; ) Qn(e, s, t), (s = $t(s, 1)), (r = 1);
    }
    function Qn(e, t, a) {
        var n = Lt(t);
        e[n] || ((e[n] = []), (e[n].date = Ht(t, !0))), e[n].push(a);
    }
    function $n(e, t, a, n, s, i) {
        var r = {};
        if (s)
            for (var o = 0, l = os(s); o < l.length; o++) {
                r[Lt(Kt(l[o]))] = !0;
            }
        if (i)
            for (var c = 0, d = ls(i, e, e, t, a, n); c < d.length; c++) {
                r[Lt(d[c].d)] = !0;
            }
        return r;
    }
    function es(e) {
        return _e(e) || e.getTime || e.toDate ? e : e.start || e.date;
    }
    function ts(e, t, a) {
        var n = t.original ? t.original.start : t.start,
            s = t.allDay || !n,
            i = e.timezonePlugin,
            r = t.timezone || e.dataTimezone || e.displayTimezone;
        return i && !s ? { dataTimezone: r, displayTimezone: a ? r : e.displayTimezone, timezonePlugin: i } : ie;
    }
    function as(e) {
        for (var t = {}, a = 0, n = e.split(";"); a < n.length; a++) {
            var s = n[a].split("="),
                i = s[0].trim().toLowerCase(),
                r = s[1].trim();
            t[Gn[i] || i] = r;
        }
        return t;
    }
    function ns(e) {
        return _e(e) ? as(e) : c({}, e);
    }
    function ss(e, t, a) {
        var n = ns(e),
            s = Kt(t),
            i = Kt(a),
            r = Yt(i, s),
            o = (n.repeat || "").toLowerCase(),
            l = function (e, t, a) {
                var n = e.filter(function (e) {
                    return e !== t;
                });
                return -1 === n.indexOf(a) && n.push(a), n;
            },
            c = function (e, t, a) {
                var n = he(e)
                        ? e
                        : ((e || "") + "").split(",").map(function (e) {
                              return +e;
                          }),
                    s = l(n, t, a);
                return s.length > 1 ? s : s[0];
            },
            d = function () {
                if (n.weekDays) {
                    var e = n.weekDays.split(","),
                        t = Jn[i.getDay()],
                        a = Jn[s.getDay()],
                        r = l(e, t, a);
                    n.weekDays = r.join();
                }
            };
        return (
            "weekly" === o
                ? d()
                : "monthly" === o
                ? n.pos === ie
                    ? (n.day = c(n.day, i.getDate(), s.getDate()))
                    : d()
                : "yearly" === o && (n.pos === ie ? ((n.month = c(n.month, i.getMonth() + 1, s.getMonth() + 1)), (n.day = c(n.day, i.getDate(), s.getDate()))) : d()),
            n.from && (n.from = $t(Kt(n.from), r)),
            n.until && (n.until = $t(Kt(n.until), r)),
            n
        );
    }
    function is(e, t, a, n) {
        for (var s = null, i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = Kt(o.start || o.date),
                    c = ls(o.recurring, l, l, t, ie, a, o.reccurringException, o.recurringExceptionRule, "first");
                (!s || c < s) && (s = c);
            } else if (o.start && o.end) {
                var d = Kt(o.start, a, n);
                Kt(o.end, a, n) > t && (s = d <= t ? t : s && s < d ? s : d);
            } else {
                var h = Kt(es(o), a, n);
                h > t && (!s || h < s) && (s = h);
            }
        }
        return s;
    }
    function rs(e, t, a, n) {
        var s = t;
        e.sort(function (e, t) {
            return Kt(es(e), a, n) - Kt(es(t), a, n);
        });
        for (var i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = Kt(o.start || o.date),
                    c = ls(o.recurring, l, l, t, ie, a, o.reccurringException, o.recurringExceptionRule, "last");
                c > s && (s = c);
            } else if (o.start && o.end) {
                var d = Kt(o.start, a, n),
                    h = Kt(o.end, a, n);
                h > s && Yt(s, d) <= 1 && (s = h);
            } else {
                var u = Kt(es(o), a, n);
                u > s && Yt(s, u) <= 1 && (s = u);
            }
        }
        return s;
    }
    function os(e) {
        return e ? (he(e) ? e : _e(e) ? e.split(",") : [e]) : [];
    }
    function ls(e, t, a, n, s, i, r, o, l) {
        _e(e) && (e = as(e));
        for (
            var c,
                d,
                h = i.getYear,
                u = i.getMonth,
                m = i.getDay,
                _ = i.getDate,
                p = i.getMaxDayOfMonth,
                v = (e.repeat || "").toLowerCase(),
                f = e.interval || 1,
                g = e.count,
                y = e.from ? Kt(e.from) : t || (1 !== f || g !== ie ? new Date() : n),
                b = Ht(y),
                x = h(y),
                D = u(y),
                T = m(y),
                S = a ? a.getHours() : 0,
                C = a ? a.getMinutes() : 0,
                w = a ? a.getSeconds() : 0,
                k = e.until ? Kt(e.until) : 1 / 0,
                M = y < n,
                E = M ? n : Ht(y),
                N = "first" === l,
                I = "last" === l,
                L = N || I || !s || k < s ? k : s,
                H = g === ie ? 1 / 0 : g,
                O = (e.weekDays || Jn[y.getDay()]).split(","),
                Y = qn[(e.weekStart || "MO").trim().toUpperCase()],
                P = he(e.day) ? e.day : ((e.day || T) + "").split(","),
                F = he(e.month) ? e.month : ((e.month || D + 1) + "").split(","),
                z = [],
                V = e.pos !== ie,
                R = V ? +e.pos : 1,
                A = [],
                W = s ? $n(t, n, s, i, r, o) : {},
                U = !0,
                B = 0,
                j = 0,
                K = null,
                X = n,
                J = 0,
                q = O;
            J < q.length;
            J++
        ) {
            var G = q[J];
            A.push(qn[G.trim().toUpperCase()]);
        }
        var Z = function () {
                if ((s || (W = $n(d, d, $t(d, 1), i, r, o)), !W[Lt(d)] && d >= E))
                    if (N) (K = !K || d < K ? d : K), (U = !1);
                    else if (I) {
                        var e = Yt(X, d);
                        (X = d > X && e <= 1 ? d : X), (U = e <= 1);
                    } else z.push({ d: d, i: j });
                j++;
            },
            Q = function (e, t) {
                for (var a = [], n = 0, s = A; n < s.length; n++) for (var i = Ft(e, { firstDay: s[n] }); i < t; i.setDate(i.getDate() + 7)) i.getMonth() === e.getMonth() && a.push(+i);
                a.sort();
                var r = a[R < 0 ? a.length + R : R - 1];
                (d = r ? new Date(r) : t), (d = _(h(d), u(d), m(d), S, C, w)) >= y && (d <= L && j < H ? r && Z() : (U = !1));
            };
        switch (v) {
            case "daily":
                for (j = g && M ? Ce(Yt(y, n) / f) : 0; U; ) (d = _(x, D, T + j * f, S, C, w)) <= L && j < H ? Z() : (U = !1);
                break;
            case "weekly":
                var $ = A,
                    ee = Ft(y, { firstDay: Y }),
                    te = ee.getDay();
                for (
                    $.sort(function (e, t) {
                        return (e = (e -= te) < 0 ? e + 7 : e) - (t = (t -= te) < 0 ? t + 7 : t);
                    });
                    U;

                ) {
                    for (var ae = 0, ne = $; ae < ne.length; ae++) {
                        (c = $t(ee, (G = ne[ae]) < Y ? G - Y + 7 : G - Y)), (d = _(h(c), u(c), m(c) + 7 * B * f, S, C, w)) <= L && j < H ? d >= b && Z() : (U = !1);
                    }
                    B++;
                }
                break;
            case "monthly":
                for (; U; ) {
                    var se = p(x, D + B * f);
                    if (V) Q(_(x, D + B * f, 1), _(x, D + B * f + 1, 1));
                    else
                        for (var re = 0, oe = P; re < oe.length; re++) {
                            var le = oe[re];
                            (d = _(x, D + B * f, (ve = +le) < 0 ? se + ve + 1 : ve, S, C, w)) <= L && j < H ? se >= ve && d >= b && Z() : (U = !1);
                        }
                    B++;
                }
                break;
            case "yearly":
                for (; U; ) {
                    for (var ce = 0, de = F; ce < de.length; ce++) {
                        var ue = +de[ce];
                        se = p(x + B * f, ue - 1);
                        if (V) Q(_(x + B * f, ue - 1, 1), _(x + B * f, ue, 1));
                        else
                            for (var me = 0, pe = P; me < pe.length; me++) {
                                var ve;
                                le = pe[me];
                                (d = _(x + B * f, ue - 1, (ve = +le) < 0 ? se + ve + 1 : ve, S, C, w)) <= L && j < H ? se >= ve && d >= b && Z() : (U = !1);
                            }
                    }
                    B++;
                }
        }
        return N ? K : I ? X : z;
    }
    function cs(e, t, a, n, s) {
        var i = {};
        if (!e) return ie;
        for (var r = 0, o = e; r < o.length; r++) {
            var l = o[r],
                d = ts(n, l, !0),
                h = ts(n, l),
                u = es(l),
                m = Kt(u, h);
            if (l.recurring)
                for (
                    var _ = Ct.test(u) ? null : Kt(u),
                        p = jt(d, m),
                        v = l.end ? Kt(l.end, d) : p,
                        f = "00:00" === l.end ? $t(v, 1) : v,
                        g = +f - +p,
                        y = $t(t, -1),
                        b = $t(a, 1),
                        x = 0,
                        D = ls(l.recurring, _, p, y, b, n, l.recurringException, l.recurringExceptionRule);
                    x < D.length;
                    x++
                ) {
                    var T = D[x],
                        S = T.d,
                        C = c({}, l);
                    if ((l.start ? (C.start = jt(d, S.getFullYear(), S.getMonth(), S.getDate(), p.getHours(), p.getMinutes(), p.getSeconds())) : ((C.allDay = !0), (C.start = jt(ie, S.getFullYear(), S.getMonth(), S.getDate()))), l.end))
                        if (l.allDay) {
                            var w = $t(S, Yt(p, f));
                            C.end = new Date(w.getFullYear(), w.getMonth(), w.getDate(), f.getHours(), f.getMinutes(), f.getSeconds());
                        } else C.end = jt(d, +C.start + g);
                    (C.nr = T.i), (C.occurrenceId = C.id + "_" + Lt(C.start)), (C.original = l), C.start && C.end ? Zn(i, C, n, s) : Qn(i, S, C);
                }
            else l.start && l.end ? Zn(i, l, n, s) : m && Qn(i, m, l);
        }
        return i;
    }
    var ds = 1,
        hs = "multi-year",
        us = "year",
        ms = "month",
        _s = "page",
        ps = 296,
        vs = de(Tt, { dateText: "Date", eventText: "event", eventsText: "events", moreEventsText: "{count} more", nextPageText: "Next page", prevPageText: "Previous page", showEventTooltip: !0, showToday: !0, timeText: "Time" });
    function fs(e, t) {
        var a = t.refDate ? Kt(t.refDate) : ft,
            n = t.showCalendar ? t.calendarType : t.eventRange,
            s = (t.showCalendar ? ("year" === n ? 1 : "week" === n ? t.weeks : t.size) : t.eventRangeSize) || 1,
            i = t.getDate,
            r = "week" === n ? Ft(a, t) : a,
            o = t.getYear(r),
            l = t.getMonth(r),
            c = t.getDay(r);
        switch (n) {
            case "year":
                return i(o + e * s, 0, 1);
            case "week":
                return i(o, l, c + 7 * s * e);
            case "day":
                return i(o, l, c + s * e);
            default:
                return i(o, l + e * s, 1);
        }
    }
    function gs(e, t) {
        var a,
            n = t.refDate ? Kt(t.refDate) : ft,
            s = t.getYear,
            i = t.getMonth,
            r = t.showCalendar ? t.calendarType : t.eventRange,
            o = (t.showCalendar ? ("year" === r ? 1 : "week" === r ? t.weeks : t.size) : t.eventRangeSize) || 1;
        switch (r) {
            case "year":
                a = s(e) - s(n);
                break;
            case "week":
                a = Yt(Ft(n, t), Ft(e, t)) / 7;
                break;
            case "day":
                a = Yt(n, e);
                break;
            case "month":
                a = i(e) - i(n) + 12 * (s(e) - s(n));
                break;
            default:
                return ie;
        }
        return Ce(a / o);
    }
    function ys(e, t) {
        var a = t.refDate ? Kt(t.refDate) : ft;
        return Ce((t.getYear(e) - t.getYear(a)) / 12);
    }
    function bs(e, t) {
        var a = t.refDate ? Kt(t.refDate) : ft;
        return t.getYear(e) - t.getYear(a);
    }
    function xs(e, t) {
        var a = t.refDate ? Kt(t.refDate) : ft;
        return t.getMonth(e) - t.getMonth(a) + 12 * (t.getYear(e) - t.getYear(a));
    }
    function Ds(e, t) {
        var a = Kt(e.start || e.date),
            n = Kt(t.start || e.date),
            s = e.title || e.text,
            i = t.title || t.text,
            r = a ? +a * (e.allDay ? 1 : 10) : 0,
            o = n ? +n * (t.allDay ? 1 : 10) : 0;
        return r === o ? (s > i ? 1 : -1) : r - o;
    }
    function Ts(e, t) {
        return "auto" === e ? Math.max(1, Math.min(3, Math.floor(t ? t / ps : 1))) : e ? +e : 1;
    }
    function Ss(e, t, a, n, s, i, r, o, l, c, d, h, u, m) {
        t = t || {};
        for (var _ = {}, p = new Map(), v = {}, f = a, g = 0, y = s, b = n; f < n; ) {
            var x = Lt(f),
                D = f.getDay(),
                T = e.getDay(f),
                S = d && e.getDate(e.getYear(f), e.getMonth(f) + 1, 0),
                C = (l && (D === o || (1 === T && d))) || +f == +a,
                w = Ft(f, e),
                k = Cs(t[x] || [], c),
                M = void 0,
                E = void 0,
                N = void 0,
                I = 0,
                L = 0,
                H = 0;
            C && ((v = {}), (b = l ? $t(w, i) : n)),
                r &&
                    (k = k.filter(function (e) {
                        return e.allDay;
                    })),
                -1 === s && (y = k.length + 1);
            var O = k.length,
                Y = [];
            for (h && (Y.push({ id: "count_" + +f, count: O, placeholder: 0 === O }), (I = y)); O && I < y; ) {
                M = null;
                for (var P = 0; P < k.length; P++) v[I] === k[P] && ((M = k[P]), (N = P));
                if (((E = (M && p.get(M)) || []), I === y - 1 && (L < O - 1 || (H === O && !M)) && -1 !== s)) {
                    var F = O - L,
                        z = u || "",
                        V = ((F > 1 && m) || z).replace(/{count}/, F);
                    if ((F && Y.push({ id: "more_" + ++g, more: V, label: V }), M)) {
                        v[I] = null;
                        for (var R = 0, A = E; R < A.length; R++) {
                            var W = A[R],
                                U = z.replace(/{count}/, "1");
                            _[Lt(W)].data[I] = { id: "more_" + ++g, more: U, label: U };
                        }
                    }
                    L++, I++;
                } else if (M) N === H && H++, zt(f, Kt(M.end, ts(e, M))) && (v[I] = null), Y.push({ id: M.occurrenceId || M.id, event: M }), I++, L++, E.push(f);
                else if (H < O) {
                    var B = k[H],
                        j = B.allDay,
                        K = ts(e, B),
                        X = B.start && Kt(B.start, K);
                    if (!X || zt(f, X) || C) {
                        var J = It(e, j, X, B.end && Kt(B.end, K), !0),
                            q = J && !zt(X, J),
                            G = S && S < J ? S : J,
                            Z = X ? ", " + e.fromText + ": " + qt("DDDD, MMMM D, YYYY", X, e) : "",
                            Q = J ? ", " + e.toText + ": " + qt("DDDD, MMMM D, YYYY", J, e) : "";
                        B.id === ie && (B.id = "mbsc_" + ds++),
                            q && (v[I] = B),
                            p.set(B, [f]),
                            Y.push({ event: B, id: B.occurrenceId || B.id, label: (B.title || B.text || "") + Z + Q, lastDay: S ? $t(S, 1) : ie, multiDay: q, showText: !0, width: q ? 100 * Math.min(Yt(f, G) + 1, Yt(f, b)) : 100 }),
                            I++,
                            L++;
                    }
                    H++;
                } else L < O && Y.push({ id: "ph_" + ++g, placeholder: !0 }), I++;
            }
            (_[x] = { data: Y, events: k }), (f = Ht($t(f, 1)));
        }
        return _;
    }
    function Cs(e, t) {
        return e && e.slice(0).sort(t || Ds);
    }
    function ws(e, t, a) {
        return !(!1 === e || !1 === a || !t);
    }
    function ks(e, t, a) {
        return !1 !== e && !1 !== t && !1 !== a;
    }
    function Ms(e, t, a) {
        return !1 !== e && !1 !== t && !1 !== a;
    }
    function Es(e, t, a, n) {
        return !1 !== e && !1 !== t && !1 !== a && !1 !== n;
    }
    var Ns,
        Is,
        Ls = "animationstart",
        Hs = "blur",
        Os = "change",
        Ys = "click",
        Ps = "contextmenu",
        Fs = "dblclick",
        zs = "focus",
        Vs = "focusin",
        Rs = "input",
        As = "keydown",
        Ws = "mousedown",
        Us = "mousemove",
        Bs = "mouseup",
        js = "mouseenter",
        Ks = "mouseleave",
        Xs = "mousewheel",
        Js = "resize",
        qs = "scroll",
        Gs = "touchstart",
        Zs = "touchmove",
        Qs = "touchend",
        $s = "touchcancel",
        ei = "wheel",
        ti = 13,
        ai = 32,
        ni = 33,
        si = 34,
        ii = 35,
        ri = 36,
        oi = 37,
        li = 38,
        ci = 39,
        di = 40,
        hi = 0;
    function ui(e, t, a) {
        var n,
            s,
            i,
            r,
            o,
            l,
            c,
            d = 0;
        function h() {
            (s.style.width = "100000px"), (s.style.height = "100000px"), (n.scrollLeft = 1e5), (n.scrollTop = 1e5), (l.scrollLeft = 1e5), (l.scrollTop = 1e5);
        }
        function u() {
            var e = +new Date();
            (r = 0), c || (e - d > 200 && !n.scrollTop && !n.scrollLeft && ((d = e), h()), r || (r = _a(u)));
        }
        function m() {
            o || (o = _a(_));
        }
        function _() {
            (o = 0), h(), t();
        }
        return (
            ra && ra.ResizeObserver
                ? (Ns ||
                      (Ns = new ra.ResizeObserver(function (e) {
                          o ||
                              (o = _a(function () {
                                  for (var t = 0, a = e; t < a.length; t++) {
                                      var n = a[t];
                                      n.target.__mbscResize && n.target.__mbscResize();
                                  }
                                  o = 0;
                              }));
                      })),
                  hi++,
                  (e.__mbscResize = function () {
                      a ? a.run(t) : t();
                  }),
                  Ns.observe(e))
                : (i = ia && ia.createElement("div")),
            i &&
                ((i.innerHTML = '<div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-x"></div></div><div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-y"></div></div>'),
                (i.dir = "ltr"),
                (l = i.childNodes[1]),
                (n = i.childNodes[0]),
                (s = n.childNodes[0]),
                e.appendChild(i),
                Sa(n, "scroll", m),
                Sa(l, "scroll", m),
                a
                    ? a.runOutsideAngular(function () {
                          _a(u);
                      })
                    : _a(u)),
            {
                detach: function () {
                    Ns ? (hi--, delete e.__mbscResize, Ns.unobserve(e), hi || (Ns = ie)) : (i && (Ca(n, "scroll", m), Ca(l, "scroll", m), e.removeChild(i), pa(o), (i = ie)), (c = !0));
                },
            }
        );
    }
    var mi = "input,select,textarea,button",
        _i = 'textarea,button,input[type="button"],input[type="submit"]',
        pi = mi + ',[tabindex="0"]',
        vi = { enter: ti, esc: 27, space: ai },
        fi = v && /(iphone|ipod)/i.test(g) && T >= 7 && T < 15;
    function gi(e, t) {
        var a = e.s,
            n = [],
            s = {
                cancel: { cssClass: "mbsc-popup-button-close", name: "cancel", text: a.cancelText },
                close: { cssClass: "mbsc-popup-button-close", name: "close", text: a.closeText },
                ok: { cssClass: "mbsc-popup-button-primary", keyCode: ti, name: "ok", text: a.okText },
                set: { cssClass: "mbsc-popup-button-primary", keyCode: ti, name: "set", text: a.setText },
            };
        return t && t.length
            ? (t.forEach(function (t) {
                  var a = _e(t) ? s[t] || { text: t } : t;
                  (a.handler && !_e(a.handler)) ||
                      (_e(a.handler) && (a.name = a.handler),
                      (a.handler = function (t) {
                          e._onButtonClick({ domEvent: t, button: a });
                      })),
                      n.push(a);
              }),
              n)
            : ie;
    }
    function yi(e, t) {
        void 0 === t && (t = 0);
        var a = e._prevModal;
        return a && a !== e && t < 10 ? (a.isVisible() ? a : yi(a, t + 1)) : ie;
    }
    var bi = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._lastFocus = +new Date()),
                (t._setActive = function (e) {
                    t._active = e;
                }),
                (t._setContent = function (e) {
                    t._content = e;
                }),
                (t._setLimitator = function (e) {
                    t._limitator = e;
                }),
                (t._setPopup = function (e) {
                    t._popup = e;
                }),
                (t._setWrapper = function (e) {
                    t._wrapper = e;
                }),
                (t._onOverlayClick = function () {
                    t._isOpen && t.s.closeOnOverlayClick && !t._preventClose && t._close("overlay"), (t._preventClose = !1);
                }),
                (t._onDocClick = function (e) {
                    t.s.showOverlay || e.target === t.s.focusElm || Is !== t || t._onOverlayClick();
                }),
                (t._onMouseDown = function (e) {
                    t.s.showOverlay || (t._target = e.target);
                }),
                (t._onMouseUp = function (e) {
                    t._target && t._popup && t._popup.contains(t._target) && !t._popup.contains(e.target) && (t._preventClose = !0), (t._target = !1);
                }),
                (t._onPopupClick = function () {
                    t.s.showOverlay || (t._preventClose = !0);
                }),
                (t._onAnimationEnd = function (e) {
                    e.target === t._popup && (t._isClosing && (t._onClosed(), (t._isClosing = !1), t.state.isReady ? t.setState({ isReady: !1 }) : t.forceUpdate()), t._isOpening && (t._onOpened(), (t._isOpening = !1), t.forceUpdate()));
                }),
                (t._onButtonClick = function (e) {
                    var a = e.domEvent,
                        n = e.button;
                    t._hook("onButtonClick", { domEvent: a, button: n }), /cancel|close|ok|set/.test(n.name) && t._close(n.name);
                }),
                (t._onFocus = function (e) {
                    var a = +new Date();
                    Is === t && e.target.nodeType && t._ctx.contains(e.target) && t._popup && !t._popup.contains(e.target) && a - t._lastFocus > 100 && e.target !== t.s.focusElm && ((t._lastFocus = a), t._active.focus());
                }),
                (t._onKeyDown = function (e) {
                    var a = t.s,
                        n = e.keyCode,
                        s = a.focusElm && !a.focusOnOpen ? a.focusElm : ie;
                    if ((((n === ai && !Pa(e.target, mi)) || (t._lock && (n === li || n === di))) && e.preventDefault(), a.focusTrap && 9 === n)) {
                        var i = t._popup.querySelectorAll(pi),
                            r = [],
                            o = -1,
                            l = 0,
                            c = -1,
                            d = ie;
                        Va(i, function (e) {
                            e.disabled || (!e.offsetHeight && !e.offsetWidth) || (r.push(e), o++, e === t._doc.activeElement && (c = o));
                        }),
                            e.shiftKey && ((l = o), (o = 0)),
                            c === o ? (d = s || r[l]) : e.target === s && (d = r[l]),
                            d && (d.focus(), e.preventDefault());
                    }
                }),
                (t._onContentScroll = function (e) {
                    !t._lock || (e.type === Zs && "stylus" === e.touches[0].touchType) || e.preventDefault();
                }),
                (t._onScroll = function (e) {
                    var a = t.s;
                    a.closeOnScroll ? t._close("scroll") : (t._hasContext || "anchored" === a.display) && t.position();
                }),
                (t._onWndKeyDown = function (e) {
                    var a = t.s,
                        n = e.keyCode;
                    if (Is === t && n !== ie) {
                        if ((t._hook("onKeyDown", { keyCode: n }), a.closeOnEsc && 27 === n && t._close("esc"), n === ti && Pa(e.target, _i) && !e.shiftKey)) return;
                        if (t._buttons)
                            for (var s = 0, i = t._buttons; s < i.length; s++)
                                for (var r = i[s], o = 0, l = he(r.keyCode) ? r.keyCode : [r.keyCode]; o < l.length; o++) {
                                    var c = l[o];
                                    if (!r.disabled && c !== ie && (c === n || vi[c] === n)) return void r.handler(e);
                                }
                    }
                }),
                (t._onResize = function () {
                    var e = t._wrapper,
                        a = t._hasContext;
                    if (e) {
                        (t._vpWidth = Math.min(e.clientWidth, a ? 1 / 0 : t._win.innerWidth)),
                            (t._vpHeight = Math.min(e.clientHeight, a ? 1 / 0 : t._win.innerHeight)),
                            (t._maxWidth = t._limitator.offsetWidth),
                            (t._maxHeight = t.s.maxHeight !== ie || t._vpWidth < 768 || t._vpHeight < 650 ? t._limitator.offsetHeight : 600),
                            (t._round = !1 === t.s.touchUi || (t._popup.offsetWidth < t._vpWidth && t._vpWidth > t._maxWidth));
                        var n = { isLarge: t._round, maxPopupHeight: t._maxHeight, maxPopupWidth: t._maxWidth, target: e, windowHeight: t._vpHeight, windowWidth: t._vpWidth };
                        !1 === t._hook("onResize", n) || n.cancel || t.position();
                    }
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype.open = function () {
                this._isOpen || this.setState({ isOpen: !0 });
            }),
            (t.prototype.close = function () {
                this._close();
            }),
            (t.prototype.isVisible = function () {
                return !!this._isOpen;
            }),
            (t.prototype.position = function () {
                if (this._isOpen) {
                    var e = this.s,
                        t = this.state,
                        a = this._wrapper,
                        n = this._popup,
                        s = this._hasContext,
                        i = e.anchor,
                        r = e.anchorAlign,
                        o = e.rtl,
                        l = Ea(this._scrollCont),
                        c = Ma(this._scrollCont),
                        d = this._vpWidth,
                        h = this._vpHeight,
                        u = this._maxWidth,
                        m = this._maxHeight,
                        _ = Math.min(n.offsetWidth, u),
                        p = Math.min(n.offsetHeight, m),
                        v = e.showArrow;
                    (this._lock = e.scrollLock && this._content.scrollHeight <= this._content.clientHeight), s && ((a.style.top = l + "px"), (a.style.left = c + "px"));
                    var f = !1 === this._hook("onPosition", { isLarge: this._round, maxPopupHeight: m, maxPopupWidth: u, target: this._wrapper, windowHeight: h, windowWidth: d });
                    if ("anchored" !== e.display || f) this.setState({ height: h, isReady: !0, showArrow: v, width: d });
                    else {
                        var g = 0,
                            y = 0,
                            b = ce(t.modalLeft || 0, 8, d - _ - 8),
                            x = t.modalTop || 8,
                            D = "bottom",
                            T = {},
                            S = v ? 16 : 4,
                            C = (a.offsetWidth - d) / 2,
                            w = (a.offsetHeight - h) / 2;
                        if (s) {
                            var k = this._ctx.getBoundingClientRect();
                            (y = k.top), (g = k.left);
                        }
                        if (i && this._ctx.contains(i)) {
                            var M = i.getBoundingClientRect(),
                                E = M.top - y,
                                N = M.left - g,
                                I = i.offsetWidth,
                                L = i.offsetHeight;
                            if (
                                ((b = ce((b = ("start" === r && !o) || ("end" === r && o) ? N : ("end" === r && !o) || ("start" === r && o) ? N + I - _ : N - (_ - I) / 2), 8, d - _ - 8)),
                                (x = E + L + S),
                                (T = { left: ce(N + I / 2 - b - C, 30, _ - 30) + "px" }),
                                x + p + S > h)
                            )
                                if (E - p - S > 0) (D = "top"), (x = E - p - S);
                                else if (!e.disableLeftRight) {
                                    var H = N - _ - 8 > 0;
                                    (H || N + I + _ + 8 <= d) &&
                                        ((x = ce(E - (p - L) / 2, 8, h - p - 8)) + p + 8 > h && (x = Math.max(h - p - 8, 0)), (T = { top: ce(E + L / 2 - x - w, 30, p - 30) + "px" }), (D = H ? "left" : "right"), (b = H ? N - _ : N + I));
                                }
                        }
                        ("top" !== D && "bottom" !== D) || (x + p + S > h && ((x = Math.max(h - p - S, 0)), (v = !1))), this.setState({ arrowPos: T, bubblePos: D, height: h, isReady: !0, modalLeft: b, modalTop: x, showArrow: v, width: d });
                    }
                }
            }),
            (t.prototype._render = function (e, t) {
                "bubble" === e.display && (e.display = "anchored");
                var a = e.animation,
                    n = e.display,
                    s = this._prevS,
                    i = "anchored" === n,
                    r = "inline" !== n,
                    o = e.fullScreen && r,
                    l = !!r && (e.isOpen === ie ? t.isOpen : e.isOpen);
                if (
                    (l && (e.windowWidth !== s.windowWidth || e.display !== s.display || e.showArrow !== s.showArrow || (e.anchor !== s.anchor && "anchored" === e.display)) && (this._shouldPosition = !0),
                    (this._limits = { maxHeight: be(e.maxHeight), maxWidth: be(e.maxWidth) }),
                    (this._style = {
                        height: o ? "100%" : be(e.height),
                        left: i && t.modalLeft ? t.modalLeft + "px" : "",
                        maxHeight: be(this._maxHeight || e.maxHeight),
                        maxWidth: be(this._maxWidth || e.maxWidth),
                        top: i && t.modalTop ? t.modalTop + "px" : "",
                        width: o ? "100%" : be(e.width),
                    }),
                    (this._hasContext = "body" !== e.context && e.context !== ie),
                    (this._needsLock = fi && !this._hasContext && "anchored" !== n && e.scrollLock),
                    (this._isModal = r),
                    (this._flexButtons = "center" === n || (!this._touchUi && !o && ("top" === n || "bottom" === n))),
                    a !== ie && !0 !== a)
                )
                    this._animation = _e(a) ? a : "";
                else
                    switch (n) {
                        case "bottom":
                            this._animation = "slide-up";
                            break;
                        case "top":
                            this._animation = "slide-down";
                            break;
                        default:
                            this._animation = "pop";
                    }
                e.buttons ? e.buttons !== s.buttons && (this._buttons = gi(this, e.buttons)) : (this._buttons = ie),
                    e.headerText !== s.headerText && (this._headerText = e.headerText ? this._safeHtml(e.headerText) : ie),
                    e.context !== s.context && (this._contextChanged = !0),
                    l && !this._isOpen && this._onOpen(),
                    !l && this._isOpen && this._onClose(),
                    (this._isOpen = l),
                    (this._isVisible = l || this._isClosing);
            }),
            (t.prototype._updated = function () {
                var e = this,
                    t = this.s,
                    a = this._wrapper;
                if (ia && (this._contextChanged || !this._ctx) && ((n = _e(t.context) ? ia.querySelector(t.context) : t.context) || (n = ia.body), (this._ctx = n), (this._contextChanged = !1), this._justOpened))
                    return void Ee(this, function () {
                        e.forceUpdate();
                    });
                if (a) {
                    if (this._justOpened) {
                        var n = this._ctx,
                            s = this._hasContext,
                            i = (this._doc = wa(a)),
                            r = (this._win = Na(a)),
                            o = i.activeElement;
                        if (!this._hasWidth && t.responsive) {
                            var l = Math.min(a.clientWidth, s ? 1 / 0 : r.innerWidth),
                                c = Math.min(a.clientHeight, s ? 1 / 0 : r.innerHeight);
                            if (((this._hasWidth = !0), l !== this.state.width || c !== this.state.height))
                                return void Ee(this, function () {
                                    e.setState({ height: c, width: l });
                                });
                        }
                        if (((this._scrollCont = s ? n : r), (this._observer = ui(a, this._onResize, this._zone)), (this._prevFocus = t.focusElm || o), (n.__mbscModals = (n.__mbscModals || 0) + 1), this._needsLock)) {
                            if (!n.__mbscIOSLock) {
                                var d = Ea(this._scrollCont),
                                    h = Ma(this._scrollCont);
                                (n.style.left = -h + "px"), (n.style.top = -d + "px"), (n.__mbscScrollLeft = h), (n.__mbscScrollTop = d), n.classList.add("mbsc-popup-open-ios"), n.parentElement.classList.add("mbsc-popup-open-ios");
                            }
                            n.__mbscIOSLock = (n.__mbscIOSLock || 0) + 1;
                        }
                        s && n.classList.add("mbsc-popup-ctx"),
                            t.focusTrap && Sa(r, Vs, this._onFocus),
                            t.focusElm && !t.focusOnOpen && Sa(t.focusElm, As, this._onKeyDown),
                            Sa(this._scrollCont, Zs, this._onContentScroll, { passive: !1 }),
                            Sa(this._scrollCont, ei, this._onContentScroll, { passive: !1 }),
                            Sa(this._scrollCont, Xs, this._onContentScroll, { passive: !1 }),
                            setTimeout(function () {
                                t.focusOnOpen && o && o.blur(), (va && e._animation) || e._onOpened(), Sa(i, Ws, e._onMouseDown), Sa(i, Bs, e._onMouseUp), Sa(i, Ys, e._onDocClick);
                            }),
                            this._hook("onOpen", { target: this._wrapper });
                    }
                    this._shouldPosition &&
                        Ee(this, function () {
                            e._onResize();
                        }),
                        (this._justOpened = !1),
                        (this._justClosed = !1),
                        (this._shouldPosition = !1);
                }
            }),
            (t.prototype._destroy = function () {
                this._isOpen && (this._onClosed(), this._unlisten(), Is === this && (Is = yi(this)));
            }),
            (t.prototype._onOpen = function () {
                var e = this;
                va && this._animation && ((this._isOpening = !0), (this._isClosing = !1)),
                    (this._justOpened = !0),
                    (this._preventClose = !1),
                    this.s.setActive &&
                        Is !== this &&
                        setTimeout(function () {
                            (e._prevModal = Is), (Is = e);
                        });
            }),
            (t.prototype._onClose = function () {
                var e = this;
                va && this._animation
                    ? ((this._isClosing = !0), (this._isOpening = !1))
                    : setTimeout(function () {
                          e._onClosed(), e.setState({ isReady: !1 });
                      }),
                    (this._hasWidth = !1),
                    this._unlisten();
            }),
            (t.prototype._onOpened = function () {
                var e = this.s;
                if (e.focusOnOpen) {
                    var t = e.activeElm,
                        a = t ? (_e(t) ? this._popup.querySelector(t) || this._active : t) : this._active;
                    a && a.focus && a.focus();
                }
                Sa(this._win, As, this._onWndKeyDown), Sa(this._scrollCont, qs, this._onScroll);
            }),
            (t.prototype._onClosed = function () {
                var e = this,
                    t = this._ctx,
                    a = this._prevFocus,
                    n = this.s.focusOnClose && a && a.focus && a !== this._doc.activeElement;
                t.__mbscModals && t.__mbscModals--,
                    (this._justClosed = !0),
                    this._needsLock &&
                        (t.__mbscIOSLock && t.__mbscIOSLock--,
                        t.__mbscIOSLock ||
                            (t.classList.remove("mbsc-popup-open-ios"),
                            t.parentElement.classList.remove("mbsc-popup-open-ios"),
                            (t.style.left = ""),
                            (t.style.top = ""),
                            (function (e, t) {
                                e.scrollTo ? e.scrollTo(t, e.scrollY) : (e.scrollLeft = t);
                            })(this._scrollCont, t.__mbscScrollLeft || 0),
                            (function (e, t) {
                                e.scrollTo ? e.scrollTo(e.scrollX, t) : (e.scrollTop = t);
                            })(this._scrollCont, t.__mbscScrollTop || 0))),
                    this._hasContext && !t.__mbscModals && t.classList.remove("mbsc-popup-ctx"),
                    this._hook("onClosed", { focus: n }),
                    n && a.focus(),
                    setTimeout(function () {
                        Is === e && (Is = yi(e));
                    });
            }),
            (t.prototype._unlisten = function () {
                Ca(this._win, As, this._onWndKeyDown),
                    Ca(this._scrollCont, qs, this._onScroll),
                    Ca(this._scrollCont, Zs, this._onContentScroll, { passive: !1 }),
                    Ca(this._scrollCont, ei, this._onContentScroll, { passive: !1 }),
                    Ca(this._scrollCont, Xs, this._onContentScroll, { passive: !1 }),
                    Ca(this._doc, Ws, this._onMouseDown),
                    Ca(this._doc, Bs, this._onMouseUp),
                    Ca(this._doc, Ys, this._onDocClick),
                    this.s.focusTrap && Ca(this._win, Vs, this._onFocus),
                    this.s.focusElm && Ca(this.s.focusElm, As, this._onKeyDown),
                    this._observer && (this._observer.detach(), (this._observer = null));
            }),
            (t.prototype._close = function (e) {
                this._isOpen && (this.s.isOpen === ie && this.setState({ isOpen: !1 }), this._hook("onClose", { source: e }));
            }),
            (t.defaults = {
                buttonVariant: "flat",
                cancelText: "Cancel",
                closeOnEsc: !0,
                closeOnOverlayClick: !0,
                closeText: "Close",
                contentPadding: !0,
                display: "center",
                focusOnClose: !0,
                focusOnOpen: !0,
                focusTrap: !0,
                maxWidth: 600,
                okText: "Ok",
                scrollLock: !0,
                setActive: !0,
                setText: "Set",
                showArrow: !0,
                showOverlay: !0,
            }),
            t
        );
    })(Xn);
    function xi(e, t, a) {
        void 0 === a && (a = 0),
            a > 10
                ? (delete e.__mbscTimer, t(e))
                : (clearTimeout(e.__mbscTimer),
                  (e.__mbscTimer = setTimeout(function () {
                      e.getInputElement
                          ? e.getInputElement().then(function (n) {
                                n ? (delete e.__mbscTimer, t(n)) : xi(e, t, a + 1);
                            })
                          : xi(e, t, a + 1);
                  }, 10)));
    }
    function Di(e, t) {
        if (e)
            if (
                (function (e) {
                    return e.getInputElement || (e.tagName && "ion-input" === e.tagName.toLowerCase());
                })(e)
            )
                xi(e, t);
            else if (e.vInput) t(e.vInput.nativeElement);
            else if (e._el) t(e._el);
            else if (e.instance && e.instance._el) t(e.instance._el);
            else if (1 === e.nodeType) t(e);
            else if (_e(e)) {
                var a = ia.querySelector(e);
                a && t(a);
            }
    }
    function Ti(e, t, a, n) {
        if (!e || 1 !== e.nodeType) return xe;
        var s,
            i = function () {
                (t.s.showOnClick || t.s.showOnFocus) && _ && !t._allowTyping && (p.readOnly = !0);
            },
            r = function (a) {
                var s = t.s;
                i(),
                    n && n(a),
                    !s.showOnClick ||
                        s.disabled ||
                        (t._popup._isVisible && e === t._popup._prevFocus) ||
                        setTimeout(function () {
                            (t._focusElm = e), (t._anchor = s.anchor || e), t.open();
                        });
            },
            o = function (e) {
                t.s.showOnClick && (t.s.showOnFocus && (t._preventShow = !0), t._allowTyping || e.preventDefault());
            },
            l = function (e) {
                t.s.showOnClick && (t._isOpen ? e.keyCode === ti && t._allowTyping && e.stopPropagation() : (e.keyCode === ai && e.preventDefault(), (e.keyCode !== ti && e.keyCode !== ai) || r(e)));
            },
            c = function (e) {
                i(), t.s.showOnFocus && (t._preventShow ? (t._preventShow = !1) : r(e));
            },
            d = function () {
                _ && (p.readOnly = s);
            },
            h = function (e) {
                a && a(e);
            },
            u = function () {
                m.document.activeElement === e && (i(), (t._preventShow = !0));
            },
            m = Na(e),
            _ = Pa(e, "input,select"),
            p = e;
        return (
            _ && ((p.autocomplete = "off"), (s = p.readOnly)),
            Sa(e, Ys, r),
            Sa(e, Ws, o),
            Sa(e, As, l),
            Sa(e, zs, c),
            Sa(e, Hs, d),
            Sa(e, Os, h),
            Sa(m, zs, u),
            function () {
                _ && (p.readOnly = s), Ca(e, Ys, r), Ca(e, Ws, o), Ca(e, As, l), Ca(e, zs, c), Ca(e, Hs, d), Ca(e, Os, h), Ca(m, zs, u);
            }
        );
    }
    var Si = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._nullSupport = !0),
                (t._onInputChange = function (e, a) {
                    var n = e.detail || (a !== ie ? a : e.target.value);
                    if (n !== t._tempValueText && !t._preventChange) {
                        t._readValue(n, !0), (t._valueTextChange = n !== t._tempValueText);
                        var s = pe(n) ? null : t._get(t._tempValueRep);
                        (t.value = s), t._valueChange(s);
                    }
                    t._preventChange = !1;
                }),
                (t._onResize = function (e) {
                    t._hook("onResize", e);
                }),
                (t._onWrapperResize = function () {
                    t._wrapper && t._onResize({ windowWidth: t._wrapper.offsetWidth });
                }),
                (t._onPopupClose = function (e) {
                    /cancel|esc|overlay|scroll/.test(e.source) && t._hook("onCancel", { value: t.value, valueText: t._valueText }), t.close();
                }),
                (t._onPopupClosed = function (e) {
                    e.focus && (t._preventShow = !0), t._hook("onClosed", e), t._onClosed();
                }),
                (t._onPopupKey = function (e) {
                    13 === e.keyCode && t._onEnterKey(e);
                }),
                (t._onPopupOpen = function (e) {
                    (e.value = t.value), (e.valueText = t._valueText), t._hook("onOpen", e);
                }),
                (t._onButtonClick = function (e) {
                    var a = e.domEvent,
                        n = e.button;
                    "set" === n.name && t.set(), t._popup && t._popup._onButtonClick({ domEvent: a, button: n });
                }),
                (t._setInput = function (e) {
                    t._el = e && e.nativeElement ? e.nativeElement : e;
                }),
                (t._setPopup = function (e) {
                    t._popup = e;
                }),
                (t._setWrapper = function (e) {
                    t._wrapper = e;
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype.open = function () {
                this._inst ? this._inst.open() : this.s.isOpen === ie && this.setState({ isOpen: !0 });
            }),
            (t.prototype.close = function () {
                if ("inline" !== this.s.display)
                    if (this._inst) this._inst.close();
                    else {
                        var e = { value: this.value, valueText: this._valueText };
                        this.s.isOpen === ie && this.setState({ isOpen: !1 }), this._hook("onClose", e);
                    }
            }),
            (t.prototype.set = function () {
                (this._valueRep = this._copy(this._tempValueRep)), (this._valueText = this._tempValueText), (this._value = this.value = this._get(this._valueRep)), this._valueChange(this.value);
            }),
            (t.prototype.position = function () {
                this._inst ? this._inst.position() : this._popup && this._popup.position();
            }),
            (t.prototype.isVisible = function () {
                return this._inst ? this._inst.isVisible() : !!this._popup && this._popup.isVisible();
            }),
            (t.prototype.getVal = function () {
                return this._nullSupport && pe(this._value) ? null : this._get(this._valueRep);
            }),
            (t.prototype.setVal = function (e) {
                (this.value = e), this.setState({ value: e });
            }),
            (t.prototype.getTempVal = function () {
                return this._get(this._tempValueRep);
            }),
            (t.prototype.setTempVal = function (e) {
                (this._tempValueSet = !0), (this._tempValueRep = this._parse(e)), this._setOrUpdate(!0);
            }),
            (t.prototype._shouldValidate = function (e, t) {
                return !1;
            }),
            (t.prototype._valueEquals = function (e, t) {
                return e === t;
            }),
            (t.prototype._change = function (e) {}),
            (t.prototype._render = function (e, t) {
                var a = this,
                    n = this.props || {},
                    s = this._respProps || {},
                    i = this._prevS;
                this._touchUi || ((e.display = s.display || n.display || C.display || "anchored"), (e.showArrow = s.showArrow || n.showArrow || !1)), "bubble" === e.display && (e.display = "anchored"), (this._scrollLock = e.scrollLock);
                var r = e.isOpen !== ie ? e.isOpen : t.isOpen,
                    o = e.modelValue !== ie ? e.modelValue : e.value,
                    l = o !== ie ? o : t.value === ie ? e.defaultValue : t.value;
                if (
                    ((this._showInput = e.showInput !== ie ? e.showInput : "inline" !== e.display && e.element === ie),
                    (!this._buttons || e.buttons !== i.buttons || e.display !== i.display || e.setText !== i.setText || e.cancelText !== i.cancelText || e.closeText !== i.closeText || e.touchUi !== i.touchUi) &&
                        ((this._buttons = gi(this, e.buttons || ("inline" === e.display || ("anchored" === e.display && !this._touchUi) ? [] : ["cancel", "set"]))), (this._live = !0), this._buttons && this._buttons.length))
                )
                    for (var c = 0, d = this._buttons; c < d.length; c++) {
                        var h = d[c];
                        ("ok" !== h.name && "set" !== h.name) || (this._live = !1);
                    }
                if (!this._valueEquals(l, this._value) || this._tempValueRep === ie || this._shouldValidate(e, i) || e.defaultSelection !== i.defaultSelection || e.invalid !== i.invalid || e.valid !== i.valid) {
                    this._readValue(l);
                    var u = this._get(this._tempValueRep),
                        m = !(this._valueEquals(l, u) || (this._nullSupport && pe(l)));
                    this._setHeader(),
                        clearTimeout(this._handler),
                        (this._handler = setTimeout(function () {
                            (a.value = l), m && a._valueChange(u), a._valueEquals(a._tempValue, u) || a._inst !== ie || a._hook("onTempChange", { value: u });
                        }));
                }
                if ((e.headerText !== i.headerText && this._setHeader(), r && !this._isOpen)) {
                    if (!this._tempValueSet || this._live) {
                        var _ = this._get(this._tempValueRep),
                            v = this._get(this._valueRep);
                        (this._tempValueRep = this._copy(this._valueRep)),
                            (this._tempValueText = this._format(this._tempValueRep)),
                            (this._tempValue = _),
                            this._setHeader(),
                            this._valueEquals(_, v) ||
                                setTimeout(function () {
                                    a._hook("onTempChange", { value: v });
                                });
                    }
                    this._onOpen();
                }
                (this._allowTyping = e.inputTyping && !p && !this._touchUi),
                    (this._anchorAlign = e.anchorAlign || (this._touchUi ? "center" : "start")),
                    (this._cssClass = "mbsc-picker " + (e.cssClass || "")),
                    (this._isOpen = r),
                    (this._maxWidth = e.maxWidth),
                    (this._valueTextChange = this._valueTextChange || this._oldValueText !== this._valueText),
                    (this._oldValueText = this._valueText),
                    (this._value = l),
                    (this._shouldInitInput = this._shouldInitInput || i.display === ie || ("inline" === e.display && "inline" !== i.display) || ("inline" !== e.display && "inline" === i.display) || e.element !== i.element);
            }),
            (t.prototype._updated = function () {
                var e = this,
                    t = this.s,
                    a = this._input;
                this._shouldInitInput &&
                    !this._inst &&
                    (this._unlisten(),
                    this._wrapper && "inline" === t.display && (this._observer = ui(this._wrapper, this._onWrapperResize, this._zone)),
                    Di(t.element || this._el, function (a) {
                        (e._el = a), "inline" !== t.display && (e._resetEl = Ti(a, e, e._onInputChange)), Pa(a, "input,select") && ((e._input = a), e._write(a));
                    })),
                    this._valueTextChange && a && this._write(a),
                    setTimeout(function () {
                        t.responsive && "inline" !== t.display && ra && e.state.width === ie && e._onResize({ windowWidth: ra.innerWidth });
                    }),
                    (this._shouldInitInput = !1),
                    (this._valueTextChange = !1),
                    (this._anchor = t.anchor || this._focusElm || t.element || this._el);
            }),
            (t.prototype._writeValue = function (e, t, a) {
                var n = e.value;
                return (e.value = t), n !== t;
            }),
            (t.prototype._destroy = function () {
                this._unlisten(), (this._shouldInitInput = !0);
            }),
            (t.prototype._setHeader = function () {
                var e = this.s.headerText;
                this._headerText = e ? e.replace(/\{value\}/i, this._tempValueText || "&nbsp;") : ie;
            }),
            (t.prototype._setOrUpdate = function (e) {
                var t = this._get(this._tempValueRep);
                (this._tempValue = t), (this._tempValueText = this._format(this._tempValueRep)), this._setHeader(), e || this._hook("onTempChange", { value: t }), this._live ? this.set() : this.forceUpdate();
            }),
            (t.prototype._copy = function (e) {
                return e;
            }),
            (t.prototype._format = function (e) {
                return e;
            }),
            (t.prototype._get = function (e) {
                return e;
            }),
            (t.prototype._parse = function (e, t) {
                return e;
            }),
            (t.prototype._validate = function () {}),
            (t.prototype._onClosed = function () {}),
            (t.prototype._onOpen = function () {}),
            (t.prototype._onParse = function () {}),
            (t.prototype._onEnterKey = function (e) {
                this.set(), this.close();
            }),
            (t.prototype._valueChange = function (e) {
                this.s.value === ie && this.setState({ value: e }), this._change(e), this._hook("onChange", { value: e, valueText: this._tempValueText });
            }),
            (t.prototype._readValue = function (e, t) {
                (this._tempValueRep = this._parse(e, t)),
                    this._onParse(),
                    this._validate(),
                    (this._tempValueText = this._format(this._tempValueRep)),
                    (this._valueRep = this._copy(this._tempValueRep)),
                    (this._valueText = pe(e) ? "" : this._tempValueText);
            }),
            (t.prototype._unlisten = function () {
                this._resetEl && (this._resetEl(), (this._resetEl = ie)), this._observer && (this._observer.detach(), (this._observer = ie));
            }),
            (t.prototype._write = function (e) {
                var t = this,
                    a = this._value;
                this._writeValue(e, this._valueText || "", a) &&
                    setTimeout(function () {
                        (t._preventChange = !0), za(e, Rs), za(e, Os);
                    });
                var n = e.__mbscFormInst;
                n && n.setOptions({ pickerMap: this.s.valueMap, pickerValue: a });
            }),
            (t.defaults = { cancelText: "Cancel", closeText: "Close", focusOnClose: "android" !== h, okText: "Ok", setText: "Set", showOnFocus: p }),
            t
        );
    })(Xn);
    function Ci(e, t, a, n, s, i) {
        var r = Lt(t);
        if ((s && +t < s) || (i && +t > i)) return !0;
        if (n && n[r]) return !1;
        var o = a && a[r];
        if (o)
            for (var l = 0, c = o; l < c.length; l++) {
                var d = c[l],
                    h = d.start,
                    u = d.end,
                    m = d.allDay;
                if (!h || !u || m) return d;
                var _ = It(e, m, h, u),
                    p = Et(e, t),
                    v = Nt(e, _);
                if (!zt(h, u) && (+h == +p || +_ == +v || (!zt(t, h) && !zt(t, u) && t > h && t < u))) return d;
            }
        return !1;
    }
    function wi(e, t, a, n, s, i, r) {
        var o,
            l,
            c = !0,
            d = !0,
            h = 0,
            u = 0;
        +e < a && (e = jt(t, a)), +e > n && (e = jt(t, n));
        var m = t.getYear(e),
            _ = t.getMonth(e),
            p = t.getDate(m, _ - 1, 1),
            v = t.getDate(m, _ + 2, 1),
            f = +p > a ? +p : a,
            g = +v < n ? +v : n;
        if ((s || ((i = cs(t.valid, p, v, t, !0)), (s = cs(t.invalid, p, v, t, !0))), !Ci(t, e, s, i, a, n))) return e;
        for (o = e, l = e; c && +o < g && h < 100; ) (c = Ci(t, (o = $t(o, 1)), s, i, a, n)), h++;
        for (; d && +l > f && u < 100; ) (d = Ci(t, (l = $t(l, -1)), s, i, a, n)), u++;
        return c && d ? e : 1 !== r || c ? (-1 !== r || d ? (Vt(e, o, t) && !c ? o : Vt(e, l, t) && !d ? l : d || (u >= h && !c) ? o : l) : l) : o;
    }
    var ki = {},
        Mi = " - ",
        Ei = ["calendar"],
        Ni = [{ recurring: { repeat: "daily" } }];
    function Ii(e) {
        return "start" === e ? "end" : "start";
    }
    function Li(e, t) {
        var a = Ft(new Date(e), t, t.firstSelectDay !== ie ? t.firstSelectDay : t.firstDay),
            n = new Date(a.getFullYear(), a.getMonth(), a.getDate() + t.selectSize - 1);
        return { start: a, end: n };
    }
    var Hi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._iso = {}),
                    (t._remote = 0),
                    (t._onActiveChange = function (e) {
                        (t._active = e.date), t.forceUpdate();
                    }),
                    (t._onResize = function (e) {
                        var a = e.windowWidth;
                        (e.cancel = t.state.width !== a), t.setState({ isLarge: e.isLarge, maxPopupWidth: e.maxPopupWidth, width: a, widthType: a > 600 ? "md" : "sm" });
                    }),
                    (t._onDayHoverIn = function (e) {
                        var a = e.date,
                            n = e.hidden;
                        t.setState({ hoverDate: n ? ie : +a });
                    }),
                    (t._onDayHoverOut = function (e) {
                        var a = e.date;
                        t.state.hoverDate === +a && t.setState({ hoverDate: ie });
                    }),
                    (t._onCellClick = function (e) {
                        (t._lastSelected = Ut(t.s, e.date)), (e.active = t._activeSelect), t._hook("onCellClick", e);
                    }),
                    (t._onCalendarChange = function (e) {
                        t._tempValueSet = !1;
                        var a = t.s,
                            n = t._copy(t._tempValueRep),
                            s = He(e.value, function (e) {
                                return Ut(a, e);
                            }),
                            i = "preset-range" === a.select,
                            r = "range" === a.select,
                            o = r && t._newSelection,
                            l = (r || i) && a.exclusiveEndDates && !t._hasTime;
                        if ((l && n.end && (n.end = +Et(a, jt(a, n.end - 1))), t._hasTime && t._selectedTime && !r))
                            if (t.s.selectMultiple) {
                                var c = s[s.length - 1];
                                c && c.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                            } else s.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                        if (r || i) {
                            var d = t._getDate(n),
                                h = d.filter(function (e) {
                                    return null !== e;
                                }),
                                u = h.map(function (e) {
                                    return +e;
                                }),
                                m = h.map(function (e) {
                                    return +Ht(e);
                                }),
                                _ = s.filter(function (e) {
                                    return m.indexOf(+e) < 0;
                                })[0];
                            if (i) {
                                if (_) {
                                    var p = Li(+_, a),
                                        v = p.start,
                                        f = p.end;
                                    (n.start = +v), (n.end = +f);
                                }
                            } else {
                                var g = !t._hasTime,
                                    y = t._renderControls,
                                    b = t._activeSelect,
                                    x = Ii(b);
                                if (_) {
                                    switch ((t._hasTime && t._selectedTime && _.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), u.length)) {
                                        case 0:
                                            (n = {})[b] = +_;
                                            break;
                                        case 1:
                                            if (y) {
                                                n[b] = +_;
                                                break;
                                            }
                                            u[0] > +_ || "start" === t._activeSelect ? (t._hasTime ? (n[b] = +_) : ((n = { start: +_ }), (g = !1))) : (n.end = +_);
                                            break;
                                        case 2:
                                            if (y) {
                                                n[b] = +_;
                                                break;
                                            }
                                            u[0] > +_ || "start" === t._activeSelect ? (t._hasTime ? (n[b] = +_) : ((n = { start: +_ }), "end" === t._activeSelect && (g = !1))) : "end" === t._activeSelect && (n.end = +_);
                                    }
                                    y && n.start && n.end && n.start > n.end && ((n = { start: +_ }), t._setActiveSelect("end"));
                                } else {
                                    var D = void 0;
                                    (D = 1 === u.length ? jt(a, u[0]) : t._lastSelected),
                                        t._hasTime && t._selectedTime
                                            ? D.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                            : !a.exclusiveEndDates && !t._hasTime && "end" === t._activeSelect && d[0] && zt(D, d[0]) && D.setHours(23, 59, 59, 999),
                                        y || t._hasTime ? (n[b] = +D) : "start" === t._activeSelect ? (n = { start: +D }) : (n.end = +D);
                                }
                                if (n.start && n.end) {
                                    if (n.start > n.end) {
                                        var T = jt(a, n.start),
                                            S = jt(a, n.end);
                                        zt(T, S) ? (S.setHours(T.getHours(), T.getMinutes(), T.getSeconds(), T.getMilliseconds()), (n.end = +S)) : (n.end = ie);
                                    }
                                    if (a.minRange && n.end) {
                                        var C = t._hasTime ? n.start + a.minRange : +$t(jt(a, n.start), a.minRange - 1);
                                        n.end < C && (!t._hasTime || "start" === b) && (n.end = ie);
                                    }
                                    if (a.maxRange && n.end) {
                                        C = t._hasTime ? n.start + a.maxRange : +$t(jt(a, n.start), a.maxRange) - 1;
                                        n.end > C && (!t._hasTime || "start" === b) && (n.end = ie);
                                    }
                                    if (n.end && "start" === b && !a.inRangeInvalid) {
                                        var w = a.valid ? $t(rs(a.valid, jt(a, n.start), a), 1) : is(a.invalid || [], jt(a, n.start), a);
                                        null !== w && +w < n.end && (n.end = ie);
                                    }
                                }
                                g && (t._newSelection || !t._renderControls || (t._newSelection === ie && "inline" === t.s.display)) && (t._setActiveSelect(x), (t._newSelection = !1));
                            }
                        } else if (((n = { date: {} }), t.s.selectMultiple))
                            for (var k = 0, M = s; k < M.length; k++) {
                                var E = M[k];
                                n.date[+E] = E;
                            }
                        else {
                            if (t._hasTime) {
                                var N = t._selectedTime || new Date();
                                s.setHours(N.getHours(), N.getMinutes(), N.getSeconds(), N.getMilliseconds());
                            }
                            n.date[+s] = s;
                        }
                        (t._tempValueRep = n), l && n.end && (n.end = +Et(a, $t(jt(a, n.end), 1))), t._setOrUpdate(), !t._live || (t.s.selectMultiple && !r) || t._hasTime || (r && (!n.start || !n.end || o)) || t.close();
                    }),
                    (t._onDatetimeChange = function (e) {
                        var a = t.s,
                            n = "range" === a.select,
                            s = Ut(a, e.value),
                            i = t._hasTime ? s : Ht(s),
                            r = +i;
                        t._tempValueSet = !1;
                        var o = t._copy(t._tempValueRep),
                            l = n && a.exclusiveEndDates && !t._hasTime;
                        if ((l && o.end && (o.end = +Et(a, jt(a, o.end - 1))), n))
                            if ("start" === t._activeSelect) {
                                if ((t._hasTime && t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), (o.start = r), o.end)) {
                                    var c = a.minRange && !t._hasTime ? 24 * (a.minRange - 1) * 60 * 60 * 1e3 - 1 : a.minRange || 0;
                                    o.end - o.start < c && (o.end = ie);
                                }
                            } else
                                t._hasTime
                                    ? t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                    : o.start !== +Ht(i) || a.exclusiveEndDates || i.setHours(23, 59, 59, 999),
                                    (o.end = +i);
                        else {
                            if (t._hasTime && t._hasDate && a.controls.indexOf("datetime") < 0) {
                                var d = t._selectedTime || new Date();
                                i.setHours(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                            } else t._selectedTime = jt(a, i);
                            (o = { date: {} }).date[+i] = i;
                        }
                        (t._tempValueRep = o), l && o.end && (o.end = +Et(a, $t(jt(a, o.end), 1))), t._setOrUpdate();
                    }),
                    (t._onTimePartChange = function (e) {
                        t._tempValueSet = !1;
                        var a = t.s,
                            n = "range" === a.select,
                            s = Ut(a, e.value);
                        if (((t._selectedTime = s), n)) {
                            var i = t._getDate(t._tempValueRep),
                                r = "start" === t._activeSelect ? 0 : 1;
                            if (i[r]) (o = jt(a, i[r])).setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), (i[r] = o), "start" === t._activeSelect && +o > +i[1] && (i.length = 1), (t._tempValueRep = t._parse(i));
                            else t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds());
                        } else if (!a.selectMultiple) {
                            var o;
                            (o = t._getDate(t._tempValueRep))
                                ? (o.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), (t._tempValueRep = { date: {} }), (t._tempValueRep.date[+o] = o))
                                : (t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), t._live && t.forceUpdate());
                        }
                        t._setOrUpdate();
                    }),
                    (t._changeActiveTab = function (e) {
                        t.setState({ activeTab: e.target.value });
                    }),
                    (t._changeActiveSelect = function (e) {
                        var a = e.target.value;
                        t._setActiveSelect(a), t.setActiveDate(a);
                    }),
                    (t._clearEnd = function () {
                        (t._tempValueRep.end = ie), t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate();
                    }),
                    (t._clearStart = function () {
                        (t._tempValueRep = {}), (t._newSelection = !0), t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate();
                    }),
                    (t._onInputClickRange = function (e) {
                        var a = e.target === t._startInput || t._renderControls ? "start" : "end";
                        t._setActiveSelect(a);
                    }),
                    (t._onInputChangeRange = function (e) {
                        var a = t._startInput,
                            n = t._endInput,
                            s = (a ? a.value : "") + (n && n.value ? Mi + n.value : "");
                        t._onInputChange(e, s);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype.setActiveDate = function (e) {
                    var t = Ii(e);
                    this._activeSelect = e;
                    var a = this._tempValueRep[e],
                        n = this._tempValueRep[t];
                    (this._tempValueRep.start && this._tempValueRep.end) || (!a && n) ? (this._newSelection = !1) : a && !n && (this._newSelection = !0),
                        a && (this._active = a),
                        !a && this._hasTimegrid && (this._selectedTime = ie),
                        this.forceUpdate();
                }),
                (t.prototype.getTempVal = function () {
                    return e.prototype.getTempVal.call(this);
                }),
                (t.prototype.setTempVal = function (t) {
                    e.prototype.setTempVal.call(this, t);
                }),
                (t.prototype.navigate = function (e) {
                    (this._active = +Kt(e)), this.forceUpdate();
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return (
                        e.controls !== t.controls ||
                        e.dataTimezone !== t.dataTimezone ||
                        e.displayTimezone !== t.displayTimezone ||
                        e.dateFormat !== t.dateFormat ||
                        e.timeFormat !== t.timeFormat ||
                        e.locale !== t.locale ||
                        e.min !== t.min ||
                        e.max !== t.max
                    );
                }),
                (t.prototype._valueEquals = function (e, t) {
                    var a = (he(e) && 0 === e.length) || e === ie || null === e,
                        n = (he(t) && 0 === t.length) || t === ie || null === t;
                    return (a && a === n) || Zt(e, t, this.s);
                }),
                (t.prototype.setVal = function (t) {
                    if ("range" === this.s.select && t) {
                        var a = t[0],
                            n = t[1];
                        (this._savedStartValue = +Kt(a, this.s, this._valueFormat)), (this._savedEndValue = +Kt(n, this.s, this._valueFormat));
                    }
                    e.prototype.setVal.call(this, t);
                }),
                (t.prototype._init = function () {
                    this.props.modules &&
                        this.props.modules.forEach(function (e) {
                            ki[e._name] = e;
                        });
                }),
                (t.prototype._render = function (t, a) {
                    var n = this;
                    t.inRangeInvalid && (t.rangeEndInvalid = !1), "preset-range" === t.select && (t.controls = Ei), t.exclusiveEndDates === ie && (t.exclusiveEndDates = !!t.displayTimezone);
                    var s = this._hasTime,
                        i = (this._hasDate = !!Ne(t.controls, function (e) {
                            return /date|calendar/.test(e);
                        })),
                        r = (this._hasTime = !!Ne(t.controls, function (e) {
                            return /time/.test(e);
                        }));
                    r || (t.timezonePlugin = t.dataTimezone = t.displayTimezone = ie), !t.valid || (t.invalid && !r) || (t.invalid = Ni);
                    var o = this._prevS;
                    t.buttons;
                    var l = t.calendarSize;
                    t.children, t.className;
                    var h = t.controls;
                    t.cssClass, t.element, t.modelValue, t.onDestroy, t.onInit, t.onTempChange, t.responsive;
                    var u = t.select,
                        m = t.selectMultiple,
                        _ = t.tabs,
                        p = d(t, ["buttons", "calendarSize", "children", "className", "controls", "cssClass", "element", "modelValue", "onDestroy", "onInit", "onTempChange", "responsive", "select", "selectMultiple", "tabs"]),
                        v = a.widthType || "sm",
                        f = "date" !== u;
                    if (((this._renderTabs = h.length > 1 && ("auto" === _ ? "sm" === v : _)), u !== o.select && this._tempValueRep))
                        if (f && this._tempValueRep.date) {
                            var g = Object.keys(this._tempValueRep.date)
                                    .map(function (e) {
                                        return +e;
                                    })
                                    .sort(),
                                y = g[0],
                                b = g[1];
                            (this._tempValueRep.start = y),
                                (this._tempValueRep.end = b),
                                (this._tempValueRep.date = ie),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                setTimeout(function () {
                                    n.set();
                                });
                        } else if (!f && (this._tempValueRep.start || this._tempValueRep.end)) {
                            this._tempValueRep.date || (this._tempValueRep.date = {});
                            var x = this._tempValueRep.start || this._tempValueRep.end;
                            this._tempValueRep.date[x] = new Date(x);
                            var D = this._tempValueRep.end || this._tempValueRep.start;
                            D !== x && t.selectMultiple && (this._tempValueRep.date[D] = new Date(D)),
                                (this._tempValueRep.start = ie),
                                (this._tempValueRep.end = ie),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                setTimeout(function () {
                                    n.set();
                                });
                        }
                    t.min !== o.min && (this._min = pe(t.min) ? ie : Kt(t.min, t, t.dateFormat)),
                        t.max !== o.max && (this._max = pe(t.max) ? ie : Kt(t.max, t, t.dateFormat)),
                        t.minTime !== o.minTime && (this._minTime = pe(t.minTime) ? ie : Kt(t.minTime, t, t.timeFormat)),
                        t.maxTime !== o.maxTime && (this._maxTime = pe(t.maxTime) ? ie : Kt(t.maxTime, t, t.timeFormat));
                    var T = this._tempValueRep && this._tempValueRep.end,
                        S = this._tempValueRep && this._tempValueRep.start,
                        C = (i ? t.dateFormat : "") + (r ? (i ? t.separator : "") + t.timeFormat : ""),
                        w = JSON.stringify(h) !== JSON.stringify(o.controls);
                    if (w) {
                        (this._controls = []), (this._controlsClass = "");
                        var k = { c: "datepicker", controls: h, dateFormat: t.dateFormat, dateText: t.dateText, separator: t.separator, timeFormat: t.timeFormat, timeText: t.timeText, v: Bn };
                        this._remote++,
                            zn(this),
                            Rn(
                                "remote",
                                this,
                                k,
                                function (e) {
                                    if ((n._remote--, !n._remote)) {
                                        for (var a = 0, i = Object.keys(e); a < i.length; a++) {
                                            var o = i[a];
                                            n[o] = e[o];
                                        }
                                        for (var l = 0, d = n._controls; l < d.length; l++) {
                                            var h = d[l];
                                            (h.Component = ki["calendar" === h.name ? "Calendar" : "timegrid" === h.name ? "Timegrid" : "Datetime"]), (n._controlsClass += " mbsc-datepicker-control-" + h.name);
                                        }
                                        if ((Vn(e.notification), r || (n._selectedTime = ie), w && f && t.exclusiveEndDates && r !== s && (T || S))) {
                                            var u = n._savedStartValue,
                                                m = n._savedEndValue;
                                            setTimeout(function () {
                                                if (r) (n._tempValueRep.start = u || S), (n._tempValueRep.end = m || T);
                                                else {
                                                    (n._savedStartValue = S), (n._savedEndValue = T), (n._clearSaved = !1);
                                                    var e = c({}, t, { dataTimezone: n.props.dataTimezone, displayTimezone: n.props.displayTimezone, timezonePlugin: n.props.timezonePlugin });
                                                    if ((S && (n._tempValueRep.start = +Bt(Et(e, jt(e, S)))), T)) {
                                                        var a = jt(e, T - 1);
                                                        n._tempValueRep.end = +Bt(jt(e, +Nt(e, a) + 1));
                                                    }
                                                }
                                                (n._valueText = n._tempValueText = n._format(n._tempValueRep)), (n._valueTextChange = !0), n.set();
                                            }),
                                                (n._valueTextChange = !1);
                                        }
                                        n.forceUpdate();
                                    }
                                },
                                "comp_" + this._uid
                            ),
                            (this._hasCalendar = -1 !== h.indexOf("calendar"));
                    }
                    (this._renderControls = f && "preset-range" !== u && (t.showRangeLabels === ie || t.showRangeLabels)),
                        (this._nullSupport = "inline" !== t.display || "date" !== u || !0 === t.selectMultiple),
                        (this._valueFormat = C),
                        (this._activeTab = a.activeTab || h[0]),
                        e.prototype._render.call(this, t, a);
                    var M,
                        E = t.value !== ie ? t.value !== o.value : a.value !== this._prevStateValue;
                    if (
                        (f && this._clearSaved && E && (this._savedEndValue = this._savedStartValue = ie),
                        (this._clearSaved = !0),
                        (t.headerText === o.headerText && t.selectCounter === o.selectCounter && t.selectMultiple === o.selectMultiple) || this._setHeader(),
                        (this._scrollLock = t.scrollLock !== ie ? t.scrollLock : !this._hasTimegrid),
                        (this._showInput = t.showInput !== ie ? t.showInput : this._showInput && (!f || (!t.startInput && !t.endInput))),
                        (this._shouldInitInputs = this._shouldInitInputs || u !== o.select || t.startInput !== o.startInput || t.endInput !== o.endInput),
                        (this._shouldInitInput = this._shouldInitInput || this._shouldInitInputs),
                        w || t.dateWheels !== o.dateWheels || t.timeWheels !== o.timeWheels || t.dateFormat !== o.dateFormat || t.timeFormat !== o.timeFormat)
                    ) {
                        var N = t.dateWheels || t.dateFormat,
                            I = t.timeWheels || t.timeFormat,
                            L = (this._iso = {});
                        i && (/y/i.test(N) && (L.y = 1), /M/.test(N) && ((L.y = 1), (L.m = 1)), /d/i.test(N) && ((L.y = 1), (L.m = 1), (L.d = 1))), r && (/h/i.test(I) && (L.h = 1), /m/.test(I) && (L.i = 1), /s/i.test(I) && (L.s = 1));
                    }
                    if ((f ? (this._activeSelect === ie && this._setActiveSelect("start", !0), (M = this._selectionNotReady())) : ((this._activeSelect = ie), (M = !1)), this._buttons)) {
                        var H = Ne(this._buttons, function (e) {
                            return "set" === e.name;
                        });
                        H && H.disabled !== M && ((H.disabled = M), (this._buttons = this._buttons.slice()));
                    }
                    var O = this._activeSelect;
                    this._needsWidth = ("anchored" === t.display || "center" === t.display || ("inline" !== t.display && a.isLarge) || (h.length > 1 && !_)) && t.width === ie;
                    var Y = t.max !== ie ? Kt(t.max, t, C) : ie,
                        P = t.min !== ie ? Kt(t.min, t, C) : ie;
                    (this._maxLimited = Y), (this._minLimited = P);
                    var F = this._tempValueRep.start;
                    if (F && (this._prevStart !== F || o.valid !== t.valid || o.invalid !== t.invalid)) {
                        var z = jt(t, F);
                        this._nextInvalid = t.valid ? $t(rs(t.valid, z, t), 1) : is(t.invalid || [], z, t);
                    }
                    var V = "end" === O && F;
                    if (V) {
                        if (!t.inRangeInvalid) {
                            var R = this._nextInvalid;
                            R && (t.rangeEndInvalid ? (this._maxLimited = jt(t, +$t(R, 1) - 1)) : (this._maxLimited = jt(t, +R - 1)));
                        }
                        (this._hasCalendar && !r) || ((!this._minLimited || Kt(this._minLimited, t, C) < jt(t, F)) && (this._minLimited = jt(t, this._tempValueRep.start)));
                    }
                    if (((this._minTimeLimited = this._minLimited), V)) {
                        if (t.minRange) {
                            var A = r ? this._tempValueRep.start + t.minRange : +$t(jt(t, this._tempValueRep.start), t.minRange) - 1;
                            (!this._minLimited || +Kt(this._minLimited, t, C) < A) && ((this._minLimited = jt(t, A)), (this._minTimeLimited = this._minLimited));
                        }
                        if ((this._minTimeLimited === ie && this._tempValueRep.start && this._tempValueRep.end && (this._minTimeLimited = jt(t, +this._tempValueRep.start)), t.maxRange !== ie)) {
                            var W = r ? this._tempValueRep.start + t.maxRange : +$t(jt(t, this._tempValueRep.start), t.maxRange) - 1;
                            (!this._maxLimited || +Kt(this._maxLimited, t, C) > W) && (this._maxLimited = jt(t, W));
                        }
                    }
                    for (var U = 0, B = this._controls; U < B.length; U++) {
                        var j = B[U],
                            K = c({}, p, { display: "inline", isOpen: t.isOpen || a.isOpen, max: this._maxLimited, min: this._minLimited });
                        if ((t.rangeEndInvalid && V && this._nextInvalid && (K.valid = (K.valid || []).concat([this._nextInvalid])), "calendar" === j.name)) {
                            (K.min = this._minLimited ? Ht(this._minLimited) : ie),
                                (K.max = this._maxLimited ? Ht(this._maxLimited) : ie),
                                (K.selectRange = f),
                                (K.width = this._needsWidth ? ps * Ts(t.pages, a.maxPopupWidth) : ie),
                                "week" === t.calendarType && l ? (K.weeks = l) : (K.size = l);
                            var X = "auto" === t.pages ? 3 : t.pages || 1;
                            if (((this._maxWidth = t.maxWidth || (X > 2 ? ps * X : ie)), f)) {
                                var J = this._getDate(this._tempValueRep),
                                    q = J[1];
                                q && t.exclusiveEndDates && !r && (J[1] = jt(t, +q - 1));
                                var G = J.filter(function (e) {
                                    return null !== e;
                                })
                                    .map(function (e) {
                                        return +Ht(e);
                                    })
                                    .filter(function (e, t, a) {
                                        return a.indexOf(e) === t;
                                    })
                                    .map(function (e) {
                                        return new Date(e);
                                    });
                                if (((K.value = G), t.rangeHighlight))
                                    if (((K.rangeStart = J[0] && +Ht(Bt(J[0]))), (K.rangeEnd = J[1] && +Ht(Bt(J[1]))), (K.onDayHoverIn = this._onDayHoverIn), (K.onDayHoverOut = this._onDayHoverOut), "preset-range" === u)) {
                                        if (a.hoverDate) {
                                            var Z = Li(a.hoverDate, t);
                                            (y = Z.start), (b = Z.end);
                                            (K.hoverStart = +y), (K.hoverEnd = +b);
                                        }
                                    } else
                                        "end" === O && J[0] && ((K.hoverStart = K.rangeEnd || K.rangeStart), (K.hoverEnd = a.hoverDate)),
                                            "start" === O && J[1] && this._renderControls && ((K.hoverStart = a.hoverDate), (K.hoverEnd = K.rangeStart || K.rangeEnd));
                            } else (K.selectMultiple = m), (K.value = this._getDate(this._tempValueRep));
                            for (var Q = he(K.value) ? K.value : [K.value], $ = K.min ? +K.min : -1 / 0, ee = K.max ? +K.max : 1 / 0, te = void 0, ae = 0, ne = Q; ae < ne.length; ae++) {
                                var se = ne[ae];
                                !te && se >= $ && se <= ee && (te = +se);
                            }
                            !te && f && Q.length && (te = +Q[0]),
                                (te === this._selectedDate && this._active !== ie && t.min === o.min && t.max === o.max) || ((this._selectedDate = te), (this._active = te ? +Ht(new Date(te)) : ce(this._active || +Ht(new Date()), $, ee)));
                            var re = t.dateWheels || t.dateFormat,
                                oe = /d/i.test(re) ? _s : /m/i.test(re) ? us : /y/i.test(re) ? hs : _s;
                            (K.active = this._active),
                                (K.onActiveChange = this._onActiveChange),
                                (K.onChange = this._onCalendarChange),
                                (K.onCellClick = this._onCellClick),
                                (K.onCellHoverIn = this._proxyHook),
                                (K.onCellHoverOut = this._proxyHook),
                                (K.onLabelClick = this._proxyHook),
                                (K.onPageChange = this._proxyHook),
                                (K.onPageLoaded = this._proxyHook),
                                (K.onPageLoading = this._proxyHook),
                                (K.selectView = oe);
                        } else {
                            var le = Object.keys(this._tempValueRep.date || {});
                            if (((K.displayStyle = ("bottom" !== t.display && "top" !== t.display) || (!this._hasCalendar && !this._renderTabs) ? t.display : "center"), (K.mode = j.name), ("time" !== j.name && "timegrid" !== j.name) || !i))
                                if (((K.onChange = this._onDatetimeChange), f)) {
                                    var de = this._tempValueRep[O],
                                        ue = this._tempValueRep[Ii(O)];
                                    (K.value = de ? jt(t, de) : ue ? jt(t, ue) : null), "end" === O && t.exclusiveEndDates && !r && (K.value = jt(t, +K.value - 1));
                                } else {
                                    var me = this._tempValueRep.date && this._tempValueRep.date[le[0]],
                                        _e = me;
                                    me && (r || (_e = Ht(me))), (K.value = _e || null);
                                }
                            else {
                                if (((K.onChange = this._onTimePartChange), f)) {
                                    var ve = this._tempValueRep[O],
                                        fe = void 0;
                                    this._selectedTime &&
                                        (!this._minTimeLimited || this._selectedTime > this._minTimeLimited
                                            ? (fe = this._selectedTime)
                                            : (fe = jt(t, this._minTimeLimited)).setHours(this._selectedTime.getHours(), this._selectedTime.getMinutes(), this._selectedTime.getSeconds(), this._selectedTime.getMilliseconds()));
                                    var ge = jt(t);
                                    ge.setSeconds(0, 0), (this._selectedTime = ve ? jt(t, ve) : fe || ("time" === j.name ? ge : ie)), (K.value = this._selectedTime);
                                } else if (!t.selectMultiple) {
                                    var ye = (this._tempValueRep.date && this._tempValueRep.date[le[0]]) || this._selectedTime;
                                    this._selectedTime = K.value = ye;
                                }
                                (K.min = this._minTimeLimited), (K.max = this._maxLimited);
                            }
                            if ("time" === j.name || "timegrid" === j.name) {
                                var be = K.value || na(new Date(), K.min, K.max);
                                if (this._minTime) {
                                    var xe = this._minTime;
                                    $ = new Date(be.getFullYear(), be.getMonth(), be.getDate(), xe.getHours(), xe.getMinutes(), xe.getSeconds(), xe.getMilliseconds());
                                    (!K.min || $ > K.min) && (K.min = $);
                                }
                                if (this._maxTime) {
                                    var De = this._maxTime;
                                    ee = new Date(be.getFullYear(), be.getMonth(), be.getDate(), De.getHours(), De.getMinutes(), De.getSeconds(), De.getMilliseconds());
                                    (!K.max || ee < K.max) && (K.max = ee);
                                }
                            }
                        }
                        j.options = K;
                    }
                    (this._prevStart = this._tempValueRep.start), (this._prevStateValue = a.value);
                }),
                (t.prototype._updated = function () {
                    var t = this,
                        a = this.s;
                    if (this._shouldInitInputs) {
                        if ((this._resetInputs(), "range" === a.select)) {
                            var n = a.startInput;
                            n && this._setupInput("start", n);
                            var s = a.endInput;
                            s && this._setupInput("end", s), !a.element || (this._startInput !== a.element && this._endInput !== a.element) || ((this._shouldInitInput = !1), clearTimeout(a.element.__mbscTimer));
                        }
                        this._shouldInitInputs = !1;
                    }
                    var i = this._valueTextChange;
                    if ((e.prototype._updated.call(this), "range" === a.select && i)) {
                        var r = function (e, a) {
                            (e.value = a),
                                setTimeout(function () {
                                    (t._preventChange = !0), za(e, Rs), za(e, Os);
                                });
                        };
                        this._startInput && r(this._startInput, this._getValueText("start")), this._endInput && r(this._endInput, this._getValueText("end"));
                    }
                }),
                (t.prototype._onEnterKey = function (t) {
                    this._selectionNotReady() || e.prototype._onEnterKey.call(this, t);
                }),
                (t.prototype._setupInput = function (e, t) {
                    var a = this;
                    Di(t, function (t) {
                        var n = Ti(t, a, a._onInputChangeRange, a._onInputClickRange);
                        "start" === e ? ((a._startInput = t), (a._resetStartInput = n)) : ((a._endInput = t), (a._resetEndInput = n));
                        var s = a._getValueText(e),
                            i = s !== t.value;
                        (t.value = s),
                            i &&
                                setTimeout(function () {
                                    (a._preventChange = !0), za(t, Rs), za(t, Os);
                                });
                    });
                }),
                (t.prototype._destroy = function () {
                    this._resetInputs(), e.prototype._destroy.call(this);
                }),
                (t.prototype._setHeader = function () {
                    var t = this.s;
                    if (t.selectCounter && t.selectMultiple) {
                        var a = Object.keys((this._tempValueRep && this._tempValueRep.date) || {}).length;
                        this._headerText = ((a > 1 && t.selectedPluralText) || t.selectedText).replace(/{count}/, "" + a);
                    } else e.prototype._setHeader.call(this);
                }),
                (t.prototype._validate = function () {
                    if (!(this._max <= this._min)) {
                        var e = this.s,
                            t = this._min ? +this._min : -1 / 0,
                            a = this._max ? +this._max : 1 / 0;
                        if ("date" === e.select) {
                            var n = this._tempValueRep.date;
                            if (!e.selectMultiple)
                                for (var s = 0, i = Object.keys(n); s < i.length; s++) {
                                    var r = i[s],
                                        o = n[r],
                                        l = wi(o, e, t, a);
                                    +l != +o && (delete n[r], (n[+Ht(l)] = l));
                                }
                        } else {
                            var c = this._getDate(this._tempValueRep),
                                d = c[0],
                                h = c[1];
                            d && ((d = wi(d, e, t, a)), e.inRangeInvalid || (this._prevStart && this._prevStart === +d) || (this._nextInvalid = e.valid ? $t(rs(e.valid, d, e), 1) : is(e.invalid || [], d, e))),
                                h && (h = !e.inRangeInvalid && this._nextInvalid && this._nextInvalid <= h ? (e.rangeEndInvalid ? this._nextInvalid : $t(this._nextInvalid, -1)) : wi(h, e, t, a)),
                                d && h && d > h && ("end" === this._activeSelect ? (d = h) : (h = d)),
                                d && (this._prevStart = this._tempValueRep.start = +d),
                                h && (this._tempValueRep.end = +h);
                        }
                    }
                }),
                (t.prototype._copy = function (e) {
                    var t = e.date ? c({}, e.date) : e.date;
                    return c({}, e, { date: t });
                }),
                (t.prototype._format = function (e) {
                    var t = this.s,
                        a = [];
                    if (!t) return "";
                    if ("date" === t.select) {
                        var n = e.date;
                        for (var s in n) n[s] !== ie && null !== n[s] && a.push(qt(this._valueFormat, n[s], t));
                        return t.selectMultiple ? a.join(", ") : a[0];
                    }
                    if ((e.start && a.push(qt(this._valueFormat, jt(t, e.start), t)), e.end)) {
                        a.length || a.push("");
                        var i = jt(t, e.end - (t.exclusiveEndDates && !this._hasTime ? 1 : 0));
                        a.push(qt(this._valueFormat, i, t));
                    }
                    return (this._tempStartText = a[0] || ""), (this._tempEndText = a[1] || ""), a.join(Mi);
                }),
                (t.prototype._parse = function (e, t) {
                    var a = this.s,
                        n = {},
                        s = "date" !== a.select,
                        i = a.selectMultiple,
                        r = [];
                    if (pe(e)) {
                        var o = a.defaultSelection;
                        e = i || s ? o : null === o || (this._live && "inline" !== a.display) ? null : o || new Date();
                    }
                    if ((_e(e) && (s || i) ? (r = e.split(s ? Mi : ",")) : he(e) ? (r = e) : e && !he(e) && (r = [e]), s)) {
                        var l = r[0],
                            c = r[1],
                            d = Kt(l, a, this._valueFormat, this._iso),
                            h = Kt(c, a, this._valueFormat, this._iso);
                        (n.start = d ? +d : ie), (n.end = h ? +h : ie);
                    } else {
                        n.date = {};
                        for (var u = 0, m = r; u < m.length; u++) {
                            var _ = m[u];
                            if (!pe(_)) {
                                var p = Kt(_, a, this._valueFormat, this._iso, t);
                                if (p) {
                                    t && (p = Ut(a, p));
                                    var v = +Ht(p);
                                    (n.date[v] = p), this._hasTime && (this._selectedTime = new Date(p));
                                }
                            }
                        }
                    }
                    return n;
                }),
                (t.prototype._getDate = function (e) {
                    var t = this.s;
                    if ("date" !== t.select) {
                        var a = e.start ? jt(t, e.start) : null,
                            n = e.end ? jt(t, e.end) : null;
                        return a || n ? [a, n] : [];
                    }
                    if (t.selectMultiple) {
                        var s = [],
                            i = e.date;
                        if (i)
                            for (var r = 0, o = Object.keys(i); r < o.length; r++) {
                                var l = o[r];
                                s.push(jt(t, +l));
                            }
                        return s;
                    }
                    var c = Object.keys(e.date || {});
                    return c.length ? jt(t, e.date[c[0]]) : null;
                }),
                (t.prototype._get = function (e) {
                    var t = this,
                        a = this.s,
                        n = this._valueFormat,
                        s = this._iso,
                        i = this._getDate(e);
                    return he(i)
                        ? i.map(function (e) {
                              return e ? Xt(e, a, n, s, t._hasTime) : null;
                          })
                        : null === i
                        ? null
                        : Xt(i, a, n, s, this._hasTime);
                }),
                (t.prototype._onClosed = function () {
                    (this._active = this._activeSelect = ie), this._hasTimegrid && (this._selectedTime = ie);
                }),
                (t.prototype._onOpen = function () {
                    this._newSelection = !0;
                }),
                (t.prototype._resetInputs = function () {
                    this._resetStartInput && (this._resetStartInput(), (this._resetStartInput = ie)), this._resetEndInput && (this._resetEndInput(), (this._resetEndInput = ie));
                }),
                (t.prototype._getValueText = function (e) {
                    return this._valueText.split(Mi)["start" === e ? 0 : 1] || "";
                }),
                (t.prototype._selectionNotReady = function () {
                    var e = !1;
                    if ("range" === this.s.select) {
                        var t = (this._get(this._tempValueRep || {}) || []).filter(function (e) {
                            return e;
                        });
                        (e = !t.length) || (e = (this._hasCalendar && !this._hasTime) || this._renderControls ? t.length < 2 : !this._tempValueRep[this._activeSelect]);
                    }
                    return e;
                }),
                (t.prototype._setActiveSelect = function (e, t) {
                    var a = this;
                    this._activeSelect !== e &&
                        (t
                            ? setTimeout(function () {
                                  return a._hook("onActiveDateChange", { active: e });
                              })
                            : this._hook("onActiveDateChange", { active: e })),
                        (this._activeSelect = e);
                }),
                (t.defaults = c({}, Tt, Si.defaults, {
                    activeElm: '.mbsc-calendar-cell[tabindex="0"]',
                    controls: Ei,
                    dateText: "Date",
                    inRangeInvalid: !1,
                    inputTyping: !0,
                    rangeEndHelp: "Please select",
                    rangeEndLabel: "End",
                    rangeHighlight: !0,
                    rangeStartHelp: "Please select",
                    rangeStartLabel: "Start",
                    select: "date",
                    selectSize: 7,
                    selectedText: "{count} selected",
                    showOnClick: !0,
                    timeText: "Time",
                })),
                (t._name = "Datepicker"),
                t
            );
        })(Si),
        Oi = (function () {
            function e() {
                (this.pageSize = 0), (this._prevS = {}), (this._s = {});
            }
            return (
                (e.prototype.options = function (e, t) {
                    var a = (this._s = c({}, this._s, e)),
                        n = this._prevS,
                        s = a.getDate,
                        i = a.getYear,
                        r = a.getMonth,
                        o = a.showCalendar,
                        l = a.calendarType,
                        d = a.startDay,
                        h = a.endDay,
                        u = a.firstDay,
                        m = "week" === l,
                        _ = o ? (m ? a.weeks : 6) : 0,
                        p = a.min === n.min && this.minDate ? this.minDate : pe(a.min) ? -1 / 0 : Kt(a.min),
                        v = a.max === n.max && this.maxDate ? this.maxDate : pe(a.max) ? 1 / 0 : Kt(a.max),
                        f = a.activeDate || +new Date(),
                        g = ce(f, +p, +v),
                        y = this.forcePageChange || g !== f,
                        b = new Date(g),
                        x = g !== n.activeDate,
                        D =
                            a.calendarType !== n.calendarType ||
                            a.eventRange !== n.eventRange ||
                            a.firstDay !== n.firstDay ||
                            a.eventRangeSize !== n.eventRangeSize ||
                            a.refDate !== n.refDate ||
                            o !== n.showCalendar ||
                            a.size !== n.size ||
                            a.weeks !== n.weeks,
                        T = y || this.pageIndex === ie || D || (!this.preventPageChange && x && (g < +this.firstDay || g >= +this.lastDay)) ? gs(b, a) : this.pageIndex,
                        S = "year" === l ? 12 : a.size || 1,
                        C = S > 1 && !m,
                        w = C ? 1 : Ts(a.pages, this.pageSize),
                        k = "vertical" === a.calendarScroll && "auto" !== a.pages && (a.pages === ie || 1 === a.pages),
                        M = a.showOuterDays !== ie ? a.showOuterDays : !k && w < 2 && (m || !S || S < 2),
                        E = C ? 0 : 1,
                        N = fs(T, a),
                        I = fs(T + w, a);
                    o || "week" !== a.eventRange || d === ie || h === ie || ((N = $t(N, d - u + (d < u ? 7 : 0))), (I = $t(N, 7 * a.eventRangeSize + h - d + 1 - (h < d ? 0 : 7))));
                    var L = o && M ? Ft(N, a) : N,
                        H = C ? s(i(I), r(I) - 1, 1) : fs(T + w - 1, a),
                        O = o && M ? $t(Ft(H, a), 7 * _) : I,
                        Y = o ? Ft(fs(T - E, a), a) : N,
                        P = o ? Ft(fs(T + w + E - 1, a), a) : I,
                        F = o ? $t(C ? Ft(H, a) : P, 7 * _) : I,
                        z = this.pageIndex === ie,
                        V = Y,
                        R = F;
                    if (!o && "week" === a.resolution && ("year" === a.eventRange || "month" === a.eventRange)) {
                        var A = h - d + 1 + (h < d ? 7 : 0);
                        if (N.getDay() !== d) V = (U = $t((W = Ft(N, a, d)), A)) <= N ? $t(W, 7) : W;
                        if (I.getDay() !== d) {
                            var W,
                                U = $t((W = Ft(I, a, d)), A);
                            R = W > I ? $t(U, -7) : U;
                        }
                    }
                    var B = !1;
                    T !== ie && ((B = +V != +this.viewStart || +R != +this.viewEnd), (this.pageIndex = T)),
                        (this.firstDay = N),
                        (this.lastDay = I),
                        (this.firstPageDay = L),
                        (this.lastPageDay = O),
                        (this.viewStart = V),
                        (this.viewEnd = R),
                        (this.forcePageChange = !1),
                        (this.preventPageChange = !1),
                        (this.minDate = p),
                        (this.maxDate = v),
                        (this._prevS = a),
                        T !== ie && (B || t) && (B && !z && this.pageChange(), this.pageLoading(B));
                }),
                (e.prototype.pageChange = function () {
                    this._s.onPageChange &&
                        this._s.onPageChange({ firstDay: this.firstPageDay, lastDay: this.lastPageDay, month: "month" === this._s.calendarType ? this.firstDay : ie, type: "onPageChange", viewEnd: this.viewEnd, viewStart: this.viewStart });
                }),
                (e.prototype.pageLoading = function (e) {
                    this._s.onPageLoading &&
                        this._s.onPageLoading({
                            firstDay: this.firstPageDay,
                            lastDay: this.lastPageDay,
                            month: "month" === this._s.calendarType ? this.firstDay : ie,
                            type: "onPageLoading",
                            viewChanged: e,
                            viewEnd: this.viewEnd,
                            viewStart: this.viewStart,
                        });
                }),
                e
            );
        })(),
        Yi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._navService = new Oi()),
                    (t._update = 0),
                    (t._onDayClick = function (e) {
                        var a = t.s,
                            n = Ut(a, e.date),
                            s = +n;
                        if (!e.disabled) {
                            if (a.selectMultiple) {
                                var i = t._tempValueRep;
                                i[s] ? delete i[s] : (a.selectMax === ie || Object.keys(i).length < a.selectMax) && (i[s] = n), (t._tempValueRep = c({}, i));
                            } else a.selectRange || (t._tempValueRep = {}), (t._tempValueRep[s] = n);
                            (t._navService.preventPageChange = a.selectRange), t._hook("onCellClick", e), t._setOrUpdate();
                        }
                    }),
                    (t._onTodayClick = function () {
                        var e = new Date(),
                            a = +Ht(e);
                        t.s.selectRange || t.s.selectMultiple || ((t._tempValueRep = {}), (t._tempValueRep[a] = e), t._setOrUpdate());
                    }),
                    (t._onActiveChange = function (e) {
                        (t._navService.forcePageChange = e.pageChange), t._update++, t._hook("onActiveChange", e);
                    }),
                    (t._setCal = function (e) {
                        t._calendarView = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._valueEquals = function (e, t) {
                    return Zt(e, t, this.s);
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone;
                }),
                (t.prototype._render = function (t, a) {
                    e.prototype._render.call(this, t, a),
                        this._navService.options({
                            activeDate: t.active,
                            calendarType: t.calendarType,
                            firstDay: t.firstDay,
                            getDate: t.getDate,
                            getDay: t.getDay,
                            getMonth: t.getMonth,
                            getYear: t.getYear,
                            max: t.max,
                            min: t.min,
                            onPageChange: t.onPageChange,
                            onPageLoading: t.onPageLoading,
                            pages: t.pages,
                            refDate: t.refDate,
                            showCalendar: !0,
                            showOuterDays: t.showOuterDays,
                            size: t.size,
                            weeks: t.weeks,
                        });
                }),
                (t.prototype._copy = function (e) {
                    return c({}, e);
                }),
                (t.prototype._format = function (e) {
                    var t = this.s,
                        a = [];
                    for (var n in e) e[n] !== ie && null !== e[n] && a.push(qt(t.dateFormat, new Date(+e[n]), t));
                    return t.selectMultiple || t.selectRange ? a.join(", ") : a[0];
                }),
                (t.prototype._parse = function (e) {
                    var t = this.s,
                        a = t.selectRange,
                        n = {},
                        s = [];
                    _e(e) ? (s = e.split(",")) : he(e) ? (s = e) : e && !he(e) && (s = [e]);
                    for (var i = 0, r = s; i < r.length; i++) {
                        var o = r[i];
                        if (null !== o) {
                            var l = Kt(o, t, t.dateFormat);
                            n[a ? +l : +Ht(l)] = l;
                        }
                    }
                    return n;
                }),
                (t.prototype._get = function (e) {
                    var t = this.s,
                        a = t.selectRange;
                    if (this.s.selectMultiple || a) {
                        for (var n = [], s = 0, i = Object.keys(e); s < i.length; s++) {
                            var r = i[s];
                            n.push(jt(t, +e[r]));
                        }
                        return n;
                    }
                    var o = Object.keys(e || {});
                    return o.length ? jt(t, e[o[0]]) : null;
                }),
                (t.defaults = c({}, vs, { calendarScroll: "horizontal", calendarType: "month", selectedText: "{count} selected", showControls: !0, showOnClick: !0, weeks: 1 })),
                (t._name = "Calendar"),
                t
            );
        })(Si),
        Pi = (function () {
            function e() {
                (this.onInstanceReady = new m()), (this.onComponentChange = new m());
            }
            return (
                Object.defineProperty(e.prototype, "instance", {
                    get: function () {
                        return this.inst;
                    },
                    set: function (e) {
                        (this.inst = e), this.onInstanceReady.next(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                e
            );
        })(),
        Fi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    (this._hasChildren = !_e(e.name)),
                        (this._cssClass = this._className + " mbsc-icon" + this._theme + (e.name && !this._hasChildren ? (-1 !== e.name.indexOf(" ") ? " " + e.name : " mbsc-font-icon mbsc-icon-" + e.name) : "")),
                        (this._svg = e.svg ? this._safeHtml(e.svg) : ie);
                }),
                t
            );
        })(Xn);
    var zi,
        Vi,
        Ri = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return qa("span", { onClick: e.onClick, className: t._cssClass, dangerouslySetInnerHTML: t._svg, "v-html": ie }, t._hasChildren && e.name);
                    })(e, this);
                }),
                t
            );
        })(Fi),
        Ai = 0;
    function Wi(e, t, a) {
        var n = (a ? "page" : "client") + t;
        return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0][n] : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0][n] : e[n];
    }
    function Ui(e, t) {
        if (!t.mbscClick) {
            var a = (e.originalEvent || e).changedTouches[0],
                n = document.createEvent("MouseEvents");
            n.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null),
                (n.isMbscTap = !0),
                (n.isIonicTap = !0),
                (zi = !0),
                (t.mbscChange = !0),
                (t.mbscClick = !0),
                t.dispatchEvent(n),
                (zi = !1),
                Ai++,
                setTimeout(function () {
                    Ai--;
                }, 500),
                setTimeout(function () {
                    delete t.mbscClick;
                });
        }
    }
    function Bi(e) {
        !Ai || zi || e.isMbscTap || ("TEXTAREA" === e.target.nodeName && e.type === Ws) || (e.stopPropagation(), e.preventDefault());
    }
    function ji(e) {
        Na(e.target).__mbscFocusVisible = !1;
    }
    function Ki(e) {
        Na(e.target).__mbscFocusVisible = !0;
    }
    function Xi(e) {
        e &&
            setTimeout(function () {
                (e.style.opacity = "0"),
                    (e.style.transition = "opacity linear .4s"),
                    setTimeout(function () {
                        e && e.parentNode && e.parentNode.removeChild(e);
                    }, 400);
            }, 200);
    }
    function Ji(e, t) {
        var a,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            d,
            h,
            u,
            m,
            _,
            p,
            v,
            f = {},
            g = Na(e),
            y = wa(e);
        function b(e) {
            if (e.type === Gs) Vi = !0;
            else if (Vi) return e.type === Ws && (Vi = !1), !0;
            return !1;
        }
        function x() {
            l &&
                (Xi(i),
                (i = (function (e, t, a) {
                    var n = e.getBoundingClientRect(),
                        s = t - n.left,
                        i = a - n.top,
                        r = Math.max(s, e.offsetWidth - s),
                        o = Math.max(i, e.offsetHeight - i),
                        l = 2 * Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)),
                        c = ia.createElement("span");
                    c.classList.add("mbsc-ripple");
                    var d = c.style;
                    return (
                        (d.backgroundColor = getComputedStyle(e).color),
                        (d.width = l + "px"),
                        (d.height = l + "px"),
                        (d.top = a - n.top - l / 2 + "px"),
                        (d.left = t - n.left - l / 2 + "px"),
                        e.appendChild(c),
                        setTimeout(function () {
                            (d.opacity = ".2"), (d.transform = "scale(1)"), (d.transition = "opacity linear .1s, transform cubic-bezier(0, 0, 0.2, 1) .4s");
                        }, 30),
                        c
                    );
                })(e, u, m))),
                t.onPress(),
                (a = !0);
        }
        function D(e, i) {
            (n = !1),
                Xi(e),
                clearTimeout(s),
                (s = setTimeout(function () {
                    a && (t.onRelease(), (a = !1));
                }, i));
        }
        function T(e) {
            if (!b(e) && (e.type !== Ws || (0 === e.button && !e.ctrlKey))) {
                if (
                    ((d = Wi(e, "X")),
                    (h = Wi(e, "Y")),
                    (u = d),
                    (m = h),
                    (a = !1),
                    (n = !1),
                    (c = !1),
                    (v = !0),
                    (f.moved = c),
                    (f.startX = d),
                    (f.startY = h),
                    (f.endX = u),
                    (f.endY = m),
                    (f.deltaX = 0),
                    (f.deltaY = 0),
                    (f.domEvent = e),
                    (f.isTouch = Vi),
                    Xi(i),
                    t.onStart)
                ) {
                    var r = t.onStart(f);
                    l = r && r.ripple;
                }
                t.onPress && ((n = !0), clearTimeout(s), (s = setTimeout(x, 50))), e.type === Ws && (Sa(y, Us, S), Sa(y, Bs, C)), Sa(y, Ps, O);
            }
        }
        function S(e) {
            v &&
                ((u = Wi(e, "X")),
                (m = Wi(e, "Y")),
                (_ = u - d),
                (p = m - h),
                !c && (Math.abs(_) > 9 || Math.abs(p) > 9) && ((c = !0), D(i)),
                (f.moved = c),
                (f.endX = u),
                (f.endY = m),
                (f.deltaX = _),
                (f.deltaY = p),
                (f.domEvent = e),
                (f.isTouch = e.type === Zs),
                t.onMove && t.onMove(f));
        }
        function C(e) {
            v &&
                (n && !a && (clearTimeout(s), x()),
                (f.domEvent = e),
                (f.isTouch = e.type === Qs),
                t.onEnd && t.onEnd(f),
                D(i, 75),
                (v = !1),
                e.type === Qs && t.click && ya && !c && Ui(e, e.target),
                e.type === Bs && (Ca(y, Us, S), Ca(y, Bs, C)),
                Ca(y, Ps, O));
        }
        function w(e) {
            b(e) || ((o = !0), t.onHoverIn(e));
        }
        function k(e) {
            o && t.onHoverOut(e), (o = !1);
        }
        function M(e) {
            t.onKeyDown(e);
        }
        function E(e) {
            (t.keepFocus || g.__mbscFocusVisible) && ((r = !0), t.onFocus(e));
        }
        function N(e) {
            r && t.onBlur(e), (r = !1);
        }
        function I(e) {
            t.onChange(e);
        }
        function L(e) {
            t.onInput(e);
        }
        function H(e) {
            (f.domEvent = e), Vi || t.onDoubleClick(f);
        }
        function O(e) {
            Vi && e.preventDefault();
        }
        if (
            (Sa(e, Ws, T),
            Sa(e, Gs, T, { passive: !0 }),
            Sa(e, Zs, S, { passive: !1 }),
            Sa(e, Qs, C),
            Sa(e, $s, C),
            t.onChange && Sa(e, Os, I),
            t.onInput && Sa(e, Rs, L),
            t.onHoverIn && Sa(e, js, w),
            t.onHoverOut && Sa(e, Ks, k),
            t.onKeyDown && Sa(e, As, M),
            t.onFocus && g && (Sa(e, zs, E), !t.keepFocus))
        ) {
            var Y = g.__mbscFocusCount || 0;
            0 === Y && (Sa(g, Ws, ji, !0), Sa(g, As, Ki, !0)), (g.__mbscFocusCount = ++Y);
        }
        return (
            t.onBlur && Sa(e, Hs, N),
            t.onDoubleClick && Sa(e, Fs, H),
            function () {
                if ((clearTimeout(s), t.onFocus && g && !t.keepFocus)) {
                    var a = g.__mbscFocusCount || 0;
                    (g.__mbscFocusCount = --a), a <= 0 && (Ca(g, Ws, ji), Ca(g, As, Ki));
                }
                Ca(e, Rs, L),
                    Ca(e, Ws, T),
                    Ca(e, Gs, T, { passive: !0 }),
                    Ca(e, Zs, S, { passive: !1 }),
                    Ca(e, Qs, C),
                    Ca(e, $s, C),
                    Ca(y, Us, S),
                    Ca(y, Bs, C),
                    Ca(y, Ps, O),
                    Ca(e, Os, I),
                    Ca(e, js, w),
                    Ca(e, Ks, k),
                    Ca(e, As, M),
                    Ca(e, zs, E),
                    Ca(e, Hs, N),
                    Ca(e, Fs, H);
            }
        );
    }
    v &&
        (["mousedown", js, Ws, Bs, Ys].forEach(function (e) {
            ia.addEventListener(e, Bi, !0);
        }),
        "android" === h &&
            T < 5 &&
            ia.addEventListener(
                Os,
                function (e) {
                    var t = e.target;
                    Ai && "checkbox" === t.type && !t.mbscChange && (e.stopPropagation(), e.preventDefault()), delete t.mbscChange;
                },
                !0
            ));
    var qi = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._mounted = function () {
                var e = this;
                this._unlisten = Ji(this._el, {
                    click: !0,
                    onBlur: function () {
                        e.setState({ hasFocus: !1 });
                    },
                    onFocus: function () {
                        e.setState({ hasFocus: !0 });
                    },
                    onHoverIn: function () {
                        e.s.disabled || e.setState({ hasHover: !0 });
                    },
                    onHoverOut: function () {
                        e.setState({ hasHover: !1 });
                    },
                    onKeyDown: function (t) {
                        switch (t.keyCode) {
                            case ti:
                            case ai:
                                e._el.click(), t.preventDefault();
                        }
                    },
                    onPress: function () {
                        e.setState({ isActive: !0 });
                    },
                    onRelease: function () {
                        e.setState({ isActive: !1 });
                    },
                    onStart: function () {
                        return { ripple: e.s.ripple && !e.s.disabled };
                    },
                });
            }),
            (t.prototype._render = function (e, t) {
                var a = this,
                    n = e.disabled;
                (this._isIconOnly = !(!e.icon && !e.iconSvg)),
                    (this._hasStartIcon = !(!e.startIcon && !e.startIconSvg)),
                    (this._hasEndIcon = !(!e.endIcon && !e.endIconSvg)),
                    (this._tabIndex = n ? ie : e.tabIndex || 0),
                    (this._cssClass =
                        this._className +
                        " mbsc-reset mbsc-font mbsc-button" +
                        this._theme +
                        this._rtl +
                        " mbsc-button-" +
                        e.variant +
                        (this._isIconOnly ? " mbsc-icon-button" : "") +
                        (n ? " mbsc-disabled" : "") +
                        (e.color ? " mbsc-button-" + e.color : "") +
                        (t.hasFocus && !n ? " mbsc-focus" : "") +
                        (t.isActive && !n ? " mbsc-active" : "") +
                        (t.hasHover && !n ? " mbsc-hover" : "")),
                    (this._iconClass = "mbsc-button-icon" + this._rtl),
                    (this._startIconClass = this._iconClass + " mbsc-button-icon-start"),
                    (this._endIconClass = this._iconClass + " mbsc-button-icon-end"),
                    e.disabled &&
                        t.hasHover &&
                        setTimeout(function () {
                            a.setState({ hasHover: !1 });
                        });
            }),
            (t.prototype._destroy = function () {
                this._unlisten && this._unlisten();
            }),
            (t.defaults = { ripple: !1, role: "button", tag: "button", variant: "standard" }),
            (t._name = "Button"),
            t
        );
    })(Xn);
    var Gi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, a) {
                        var n = t.props,
                            s = n.ariaLabel;
                        n.children, n.className, n.color;
                        var i = n.endIcon;
                        n.endIconSrc;
                        var r = n.endIconSvg;
                        n.hasChildren;
                        var o = n.icon;
                        n.iconSrc;
                        var l = n.iconSvg;
                        n.ripple, n.rtl;
                        var h = n.role,
                            u = n.startIcon;
                        n.startIconSrc;
                        var m = n.startIconSvg;
                        n.tag, n.tabIndex, n.theme, n.themeVariant, n.variant;
                        var _ = d(n, [
                                "ariaLabel",
                                "children",
                                "className",
                                "color",
                                "endIcon",
                                "endIconSrc",
                                "endIconSvg",
                                "hasChildren",
                                "icon",
                                "iconSrc",
                                "iconSvg",
                                "ripple",
                                "rtl",
                                "role",
                                "startIcon",
                                "startIconSrc",
                                "startIconSvg",
                                "tag",
                                "tabIndex",
                                "theme",
                                "themeVariant",
                                "variant",
                            ]),
                            p = c({ "aria-label": s, className: t._cssClass, ref: t._setEl }, _),
                            v = qa(
                                Za,
                                null,
                                t._isIconOnly && qa(Ri, { className: t._iconClass, name: o, svg: l, theme: e.theme }),
                                t._hasStartIcon && qa(Ri, { className: t._startIconClass, name: u, svg: m, theme: e.theme }),
                                a,
                                t._hasEndIcon && qa(Ri, { className: t._endIconClass, name: i, svg: r, theme: e.theme })
                            );
                        return "span" === e.tag
                            ? qa("span", c({ role: h, "aria-disabled": e.disabled, tabIndex: t._tabIndex }, p), v)
                            : "a" === e.tag
                            ? qa("a", c({ "aria-disabled": e.disabled, tabIndex: t._tabIndex }, p), v)
                            : qa("button", c({ role: h, tabIndex: t._tabIndex }, p), v);
                    })(e, this, e.children);
                }),
                t
            );
        })(qi),
        Zi = {
            before: function (e, t) {
                t.tag = e.nodeName.toLowerCase();
            },
            hasChildren: !0,
            parentClass: "mbsc-button",
            readProps: ["disabled"],
            slots: { endIcon: "end-icon", icon: "icon", startIcon: "start-icon" },
        },
        Qi = Dn({}),
        $i = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype.componentWillUnmount = function () {
                    this._changes && this._changes.unsubscribe(this._handler);
                }),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        a = t.host,
                        n = t.component,
                        s = t.view,
                        i = d(t, ["host", "component", "view"]),
                        r = s || (a && a._calendarView);
                    return (
                        r &&
                            !this._changes &&
                            ((this._changes = r.s.instanceService.onComponentChange),
                            (this._handler = this._changes.subscribe(function () {
                                e.forceUpdate();
                            }))),
                        qa(Qi.Consumer, null, function (e) {
                            var t = e.instance || s || (a && a._calendarView);
                            return t && qa(n, c({ inst: t }, i));
                        })
                    );
                }),
                t
            );
        })(Tn),
        er = function (e) {
            var t = e.inst,
                a = e.className;
            return qa(Gi, {
                ariaLabel: t.s.prevPageText,
                className: "mbsc-calendar-button " + (a || ""),
                disabled: t._isPrevDisabled(),
                iconSvg: t._prevIcon,
                onClick: t.prevPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        tr = function (e) {
            var t = e.inst,
                a = e.className;
            return qa(Gi, {
                ariaLabel: t.s.nextPageText,
                disabled: t._isNextDisabled(),
                className: "mbsc-calendar-button " + (a || ""),
                iconSvg: t._nextIcon,
                onClick: t.nextPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        ar = function (e) {
            var t = e.inst,
                a = e.className;
            return qa(Gi, { className: "mbsc-calendar-button mbsc-calendar-button-today " + (a || ""), onClick: t._onTodayClick, theme: t.s.theme, themeVariant: t.s.themeVariant, type: "button", variant: "flat" }, t.s.todayText);
        },
        nr = function (e) {
            var t = e.inst,
                a = e.className,
                n = t.s,
                s = t._theme,
                i = t._view;
            return qa(
                "div",
                { "aria-live": "polite", className: (a || "") + s },
                t._title.map(function (e, a) {
                    return (
                        (1 === t._pageNr || 0 === a || t._hasPicker || i === _s) &&
                        qa(
                            Gi,
                            {
                                className: "mbsc-calendar-button" + (t._pageNr > 1 ? " mbsc-flex-1-1" : ""),
                                "data-index": a,
                                onClick: t._onPickerBtnClick,
                                key: a,
                                theme: n.theme,
                                themeVariant: n.themeVariant,
                                type: "button",
                                variant: "flat",
                            },
                            (t._hasPicker || i === _s) &&
                                (e.title
                                    ? qa("span", { className: "mbsc-calendar-title" + s }, e.title)
                                    : qa(
                                          Za,
                                          null,
                                          t._yearFirst && qa("span", { className: "mbsc-calendar-title mbsc-calendar-year" + s }, e.yearTitle),
                                          qa("span", { className: "mbsc-calendar-title mbsc-calendar-month" + s }, e.monthTitle),
                                          !t._yearFirst && qa("span", { className: "mbsc-calendar-title mbsc-calendar-year" + s }, e.yearTitle)
                                      )),
                            !t._hasPicker && i !== _s && qa("span", { className: "mbsc-calendar-title" + s }, t._viewTitle),
                            n.downIcon && 1 === t._pageNr ? qa(Ri, { svg: i === _s ? n.downIcon : n.upIcon, theme: n.theme }) : null
                        )
                    );
                })
            );
        },
        sr = function (e) {
            var t = e.calendar,
                a = e.view,
                n = d(e, ["calendar", "view"]);
            return qa($i, c({ component: er, host: t, view: a }, n));
        };
    sr._name = "CalendarPrev";
    var ir = function (e) {
        var t = e.calendar,
            a = e.view,
            n = d(e, ["calendar", "view"]);
        return qa($i, c({ component: tr, host: t, view: a }, n));
    };
    ir._name = "CalendarNext";
    var rr = function (e) {
        var t = e.calendar,
            a = e.view,
            n = d(e, ["calendar", "view"]);
        return qa($i, c({ component: ar, host: t, view: a }, n));
    };
    rr._name = "CalendarToday";
    var or = function (e) {
        var t = e.calendar,
            a = e.view,
            n = d(e, ["calendar", "view"]);
        return qa($i, c({ component: nr, host: t, view: a }, n));
    };
    or._name = "CalendarNav";
    var lr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.state = { height: "sm", pageSize: 0, pickerSize: 0, width: "sm" }),
                (t._dim = {}),
                (t._months = [1, 2, 3]),
                (t._title = []),
                (t.PAGE_VIEW = _s),
                (t.MONTH_VIEW = ms),
                (t.YEAR_VIEW = us),
                (t.MULTI_YEAR_VIEW = hs),
                (t.nextPage = function () {
                    switch ((t._prevDocClick(), t._view)) {
                        case ms:
                            t._activeMonthChange(1);
                            break;
                        case hs:
                            t._activeYearsChange(1);
                            break;
                        case us:
                            t._activeYearChange(1);
                            break;
                        default:
                            t._activeChange(1);
                    }
                }),
                (t.prevPage = function () {
                    switch ((t._prevDocClick(), t._view)) {
                        case ms:
                            t._activeMonthChange(-1);
                            break;
                        case hs:
                            t._activeYearsChange(-1);
                            break;
                        case us:
                            t._activeYearChange(-1);
                            break;
                        default:
                            t._activeChange(-1);
                    }
                }),
                (t._changeView = function (e) {
                    var a = t.s,
                        n = t._view,
                        s = t._hasPicker,
                        i = a.selectView,
                        r = a.navView,
                        o = a.showCalendar && "year" === a.calendarType;
                    if (!e) {
                        switch (n) {
                            case _s:
                                e = r || (o ? hs : us);
                                break;
                            case ms:
                                e = us;
                                break;
                            case hs:
                                e = o || r === hs ? _s : us;
                                break;
                            default:
                                e = (s && r === us) || i === us || t._prevView !== hs ? hs : r === ms ? ms : _s;
                        }
                        (i !== hs && r !== hs) || (e = hs);
                    }
                    n === _s && (t._activeMonth = t._active);
                    var l = s && e === i;
                    (t._prevView = n), t.setState({ view: e, viewClosing: l ? ie : n, viewOpening: l ? ie : e });
                }),
                (t._onDayHoverIn = function (e) {
                    t._disableHover ||
                        (t._hook("onDayHoverIn", e),
                        (t._hoverTimer = setTimeout(function () {
                            var a = Lt(e.date);
                            t._labels && (e.labels = t._labels[a]), t._marked && (e.marked = t._marked[a]), (t._isHover = !0), t._hook("onCellHoverIn", e);
                        }, 150)));
                }),
                (t._onDayHoverOut = function (e) {
                    if (!t._disableHover && (t._hook("onDayHoverOut", e), clearTimeout(t._hoverTimer), t._isHover)) {
                        var a = Lt(e.date);
                        t._labels && (e.labels = t._labels[a]), t._marked && (e.marked = t._marked[a]), (t._isHover = !1), t._hook("onCellHoverOut", e);
                    }
                }),
                (t._onLabelClick = function (e) {
                    (t._isLabelClick = !0), t._hook("onLabelClick", e);
                }),
                (t._onDayClick = function (e) {
                    (t._shouldFocus = !t._isLabelClick), (t._prevAnim = !1), (t._isLabelClick = !1), t._hook("onDayClick", e);
                }),
                (t._onTodayClick = function (e) {
                    (t._prevAnim = !1), t._hook("onActiveChange", { date: +Bt(jt(t.s)), today: !0 }), t._hook("onTodayClick", {});
                }),
                (t._onNavDayClick = function (e) {
                    if (!e.disabled) {
                        var a = e.date,
                            n = gs(a, t.s);
                        t._prevDocClick(), t._changeView(_s), (t._shouldFocus = !0), (t._prevAnim = !t._hasPicker), t._hook("onActiveChange", { date: +a, nav: !0, pageChange: n !== t._pageIndex, today: !0 });
                    }
                }),
                (t._onMonthClick = function (e) {
                    if (!e.disabled) {
                        var a = t.s,
                            n = new Date(e.date);
                        if (a.selectView === us) t._hook("onDayClick", e);
                        else if ((t._prevDocClick(), (t._shouldFocus = !0), (t._prevAnim = !t._hasPicker), (t._activeMonth = +n), a.navView === us || a.navView === ie)) {
                            var s = gs(n, a);
                            t._changeView(_s), t._hook("onActiveChange", { date: +n, nav: !0, pageChange: s !== t._pageIndex, today: !0 });
                        } else t._changeView(ms);
                    }
                }),
                (t._onYearClick = function (e) {
                    if (!e.disabled) {
                        var a = e.date,
                            n = t.s,
                            s = n.selectView;
                        if (s === hs) t._hook("onDayClick", e);
                        else if (((t._shouldFocus = !0), (t._prevAnim = s === us), (t._activeMonth = +a), t._prevDocClick(), n.navView === hs || "year" === n.calendarType)) {
                            var i = gs(a, n);
                            t._changeView(_s), t._hook("onActiveChange", { date: +a, pageChange: i !== t._pageIndex, today: !0 });
                        } else t._changeView(us);
                    }
                }),
                (t._onPageChange = function (e) {
                    (t._isSwipeChange = !0), t._activeChange(e.diff);
                }),
                (t._onMonthPageChange = function (e) {
                    t._activeMonthChange(e.diff);
                }),
                (t._onYearPageChange = function (e) {
                    t._activeYearChange(e.diff);
                }),
                (t._onYearsPageChange = function (e) {
                    t._activeYearsChange(e.diff);
                }),
                (t._onAnimationEnd = function (e) {
                    (t._disableHover = !1), t._isIndexChange && (t._pageLoaded(), (t._isIndexChange = !1));
                }),
                (t._onStart = function () {
                    clearTimeout(t._hoverTimer);
                }),
                (t._onGestureStart = function (e) {
                    (t._disableHover = !0), t._hook("onGestureStart", e);
                }),
                (t._onGestureEnd = function (e) {
                    t._prevDocClick();
                }),
                (t._onPickerClose = function () {
                    t.setState({ view: _s });
                }),
                (t._onPickerOpen = function () {
                    var e = t._pickerCont.clientHeight,
                        a = t._pickerCont.clientWidth;
                    t.setState({ pickerSize: t._isVertical ? e : a });
                }),
                (t._onPickerBtnClick = function (e) {
                    t._view === _s && (t._pickerBtn = e.currentTarget), t._prevDocClick(), t._changeView();
                }),
                (t._onDocClick = function () {
                    var e = t.s.selectView;
                    t._prevClick || t._hasPicker || t._view === e || t._changeView(e);
                }),
                (t._onViewAnimationEnd = function () {
                    t.state.viewClosing && t.setState({ viewClosing: ie }), t.state.viewOpening && t.setState({ viewOpening: ie });
                }),
                (t._onResize = function () {
                    if (t._body && v) {
                        var e = t.s,
                            a = t.state,
                            n = e.showCalendar,
                            s = n && t.__getTextParam ? t._body.querySelector(".mbsc-calendar-body-inner") : t._body,
                            i = t._el.offsetWidth,
                            r = t._el.offsetHeight,
                            o = s.clientHeight,
                            l = s.clientWidth,
                            c = t._isVertical ? o : l,
                            d = t._hasPicker ? a.pickerSize : c,
                            h = n !== ie,
                            u = "sm",
                            m = "sm",
                            _ = ie,
                            p = !1,
                            f = 0,
                            g = 0;
                        if ((e.responsiveStyle && !t._isGrid && (o > 300 && (m = "md"), l > 767 && (u = "md")), u !== a.width || m !== a.height)) (t._shouldCheckSize = !0), t.setState({ width: u, height: m });
                        else {
                            if (t._labels && n && t.__getTextParam) {
                                var y = s.querySelector(".mbsc-calendar-text"),
                                    b = s.querySelector(".mbsc-calendar-day-inner"),
                                    x = b.querySelector(".mbsc-calendar-labels"),
                                    D = y ? ka(y, "marginBottom") : 2,
                                    T = y ? y.offsetHeight : 18;
                                (f = x.offsetTop), (p = s.scrollHeight > s.clientHeight), (g = T + D), (_ = Math.max(1, Ce((b.clientHeight - f) / g)));
                            }
                            t._hook("onResize", { height: r, target: t._el, width: i }), (e.navService.pageSize = c);
                            var S = t._shouldPageLoad ? (a.update || 0) + 1 : a.update;
                            t.setState({ cellTextHeight: f, hasScrollY: p, labelHeight: g, maxLabels: _, pageSize: c, pickerSize: d, ready: h, update: S });
                        }
                    }
                }),
                (t._onKeyDown = function (e) {
                    var a,
                        n = t.s,
                        s = t._view,
                        i = s === _s ? t._active : t._activeMonth,
                        r = new Date(i),
                        o = n.getYear(r),
                        l = n.getMonth(r),
                        c = n.getDay(r),
                        d = n.getDate,
                        h = n.weeks,
                        u = "month" === n.calendarType;
                    if (s === hs) {
                        var m = void 0;
                        switch (e.keyCode) {
                            case oi:
                                m = o - 1 * t._rtlNr;
                                break;
                            case ci:
                                m = o + 1 * t._rtlNr;
                                break;
                            case li:
                                m = o - 3;
                                break;
                            case di:
                                m = o + 3;
                                break;
                            case ri:
                                m = t._getPageYears(t._yearsIndex);
                                break;
                            case ii:
                                m = t._getPageYears(t._yearsIndex) + 11;
                                break;
                            case ni:
                                m = o - 12;
                                break;
                            case si:
                                m = o + 12;
                        }
                        m && t._minYears <= m && t._maxYears >= m && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +d(m, 0, 1)), t.forceUpdate());
                    } else if (s === us) {
                        switch (e.keyCode) {
                            case oi:
                                a = d(o, l - 1 * t._rtlNr, 1);
                                break;
                            case ci:
                                a = d(o, l + 1 * t._rtlNr, 1);
                                break;
                            case li:
                                a = d(o, l - 3, 1);
                                break;
                            case di:
                                a = d(o, l + 3, 1);
                                break;
                            case ri:
                                a = d(o, 0, 1);
                                break;
                            case ii:
                                a = d(o, 11, 1);
                                break;
                            case ni:
                                a = d(o - 1, l, 1);
                                break;
                            case si:
                                a = d(o + 1, l, 1);
                        }
                        a && t._minYear <= a && t._maxYear >= a && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +a), t.forceUpdate());
                    } else {
                        switch (e.keyCode) {
                            case oi:
                                a = d(o, l, c - 1 * t._rtlNr);
                                break;
                            case ci:
                                a = d(o, l, c + 1 * t._rtlNr);
                                break;
                            case li:
                                a = d(o, l, c - 7);
                                break;
                            case di:
                                a = d(o, l, c + 7);
                                break;
                            case ri:
                                a = d(o, l, 1);
                                break;
                            case ii:
                                a = d(o, l + 1, 0);
                                break;
                            case ni:
                                a = e.altKey ? d(o - 1, l, c) : u ? d(o, l - 1, c) : d(o, l, c - 7 * h);
                                break;
                            case si:
                                a = e.altKey ? d(o + 1, l, c) : u ? d(o, l + 1, c) : d(o, l, c + 7 * h);
                        }
                        if (a && t._minDate <= a && t._maxDate >= a) {
                            e.preventDefault();
                            var _ = gs(a, n);
                            (t._shouldFocus = !0),
                                (t._prevAnim = !1),
                                s === ms ? ((t._activeMonth = +a), t.forceUpdate()) : ((t._pageChange = n.noOuterChange && _ !== t._pageIndex), t._hook("onActiveChange", { date: +a, pageChange: t._pageChange }));
                        }
                    }
                }),
                (t._setHeader = function (e) {
                    t._headerElement = e;
                }),
                (t._setBody = function (e) {
                    t._body = e;
                }),
                (t._setPickerCont = function (e) {
                    t._pickerCont = e;
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._getPageDay = function (e) {
                return +fs(e, this.s);
            }),
            (t.prototype._getPageStyle = function (e, t, a, n) {
                var s;
                return ((s = {})[(ba ? ba + "T" : "t") + "ransform"] = "translate" + this._axis + "(" + 100 * (e - t) * this._rtlNr + "%)"), (s.position = e === a ? "relative" : ""), (s.width = 100 / (n || 1) + "%"), s;
            }),
            (t.prototype._getPageMonth = function (e) {
                var t = this.s,
                    a = t.refDate ? Kt(t.refDate) : ft,
                    n = t.getYear(a),
                    s = t.getMonth(a);
                return +t.getDate(n, s + e, 1);
            }),
            (t.prototype._getPageYear = function (e) {
                var t = this.s,
                    a = t.refDate ? Kt(t.refDate) : ft;
                return t.getYear(a) + e;
            }),
            (t.prototype._getPageYears = function (e) {
                var t = this.s,
                    a = t.refDate ? Kt(t.refDate) : ft;
                return t.getYear(a) + 12 * e;
            }),
            (t.prototype._getPickerClass = function (e) {
                var t,
                    a = e === this.s.selectView ? " mbsc-calendar-picker-main" : "",
                    n = "mbsc-calendar-picker",
                    s = this._hasPicker,
                    i = this.state,
                    r = i.viewClosing,
                    o = i.viewOpening;
                switch (e) {
                    case _s:
                        t = s ? "" : (o === _s ? "in-down" : "") + (r === _s ? "out-down" : "");
                        break;
                    case ms:
                        t = s && r === _s ? "" : (o === ms ? "in-down" : "") + (r === ms ? "out-down" : "");
                        break;
                    case hs:
                        t = s && r === _s ? "" : (o === hs ? "in-up" : "") + (r === hs ? "out-up" : "");
                        break;
                    default:
                        t = !s || (o !== _s && r !== _s) ? (o === us ? (r === hs ? "in-down" : "in-up") : "") + (r === us ? (o === hs ? "out-down" : "out-up") : "") : "";
                }
                return n + a + (va && t ? " " + n + "-" + t : "");
            }),
            (t.prototype._isNextDisabled = function (e) {
                if (!this._hasPicker || e) {
                    var t = this._view;
                    if (t === hs) return this._yearsIndex + 1 > this._maxYearsIndex;
                    if (t === us) return this._yearIndex + 1 > this._maxYearIndex;
                    if (t === ms) return this._monthIndex + 1 > this._maxMonthIndex;
                }
                return this._pageIndex + 1 > this._maxIndex;
            }),
            (t.prototype._isPrevDisabled = function (e) {
                if (!this._hasPicker || e) {
                    var t = this._view;
                    if (t === hs) return this._yearsIndex - 1 < this._minYearsIndex;
                    if (t === us) return this._yearIndex - 1 < this._minYearIndex;
                    if (t === ms) return this._monthIndex - 1 < this._minMonthIndex;
                }
                return this._pageIndex - 1 < this._minIndex;
            }),
            (t.prototype._render = function (e, t) {
                var a = e.getDate,
                    n = e.getYear,
                    s = e.getMonth,
                    i = e.showCalendar,
                    r = e.calendarType,
                    o = e.eventRange,
                    l = e.eventRangeSize || 1,
                    c = e.firstDay,
                    d = "week" === r,
                    h = "month" === r,
                    u = "year" === r ? 12 : +(e.size || 1),
                    m = u > 1 && !d,
                    _ = i ? (d ? e.weeks : 6) : 0,
                    p = e.activeDate || this._active || +new Date(),
                    v = p !== this._active,
                    f = new Date(p),
                    g = this._prevS,
                    y = e.dateFormat,
                    b = e.monthNames,
                    x = e.yearSuffix,
                    D = ue(e.labelList) ? +e.labelList + 1 : "all" === e.labelList ? -1 : 0,
                    T = e.labelList !== g.labelList,
                    S = e.navService,
                    C = S.pageIndex,
                    w = S.firstDay,
                    k = S.lastDay,
                    M = S.viewStart,
                    E = S.viewEnd;
                if (((this._minDate = S.minDate), (this._maxDate = S.maxDate), pe(e.min)))
                    (this._minIndex = -1 / 0), (this._minYears = -1 / 0), (this._minYearsIndex = -1 / 0), (this._minYear = -1 / 0), (this._minYearIndex = -1 / 0), (this._minMonthIndex = -1 / 0);
                else {
                    var N = Ht(this._minDate);
                    (this._minDate = Ht(N)), (this._minYear = a(n(N), s(N), 1)), (this._minYears = n(N)), (this._minIndex = gs(N, e)), (this._minYearIndex = bs(N, e)), (this._minYearsIndex = ys(N, e)), (this._minMonthIndex = xs(N, e));
                }
                if (pe(e.max)) (this._maxIndex = 1 / 0), (this._maxYears = 1 / 0), (this._maxYearsIndex = 1 / 0), (this._maxYear = 1 / 0), (this._maxYearIndex = 1 / 0), (this._maxMonthIndex = 1 / 0);
                else {
                    var I = this._maxDate;
                    (this._maxYear = a(n(I), s(I) + 1, 1)), (this._maxYears = n(I)), (this._maxIndex = gs(I, e)), (this._maxYearIndex = bs(I, e)), (this._maxYearsIndex = ys(I, e)), (this._maxMonthIndex = xs(I, e));
                }
                var L = r !== g.calendarType || o !== g.eventRange || c !== g.firstDay || e.eventRangeSize !== g.eventRangeSize || e.refDate !== g.refDate || e.showCalendar !== g.showCalendar || e.weeks !== g.weeks;
                L && this._pageIndex !== ie && (this._prevAnim = !0),
                    v && (this._activeMonth = p),
                    (this._view = t.view || e.selectView),
                    (this._yearsIndex = ys(new Date(this._activeMonth), e)),
                    (this._yearIndex = bs(new Date(this._activeMonth), e)),
                    (this._monthIndex = xs(new Date(this._activeMonth), e));
                var H = m ? 1 : Ts(e.pages, t.pageSize),
                    O = "vertical" === e.calendarScroll && "auto" !== e.pages && (e.pages === ie || 1 === e.pages),
                    Y = e.showOuterDays !== ie ? e.showOuterDays : !O && H < 2 && (d || !u || u < 2),
                    P = y.search(/m/i),
                    F = y.search(/y/i);
                if (this._view === ms) {
                    var z = new Date(this._getPageMonth(this._monthIndex)),
                        V = b[s(z)],
                        R = n(z) + x;
                    this._viewTitle = F < P ? R + " " + V : V + " " + R;
                } else if (this._view === us) this._viewTitle = this._getPageYear(this._yearIndex) + "";
                else if (this._view === hs) {
                    var A = this._getPageYears(this._yearsIndex);
                    this._viewTitle = A + " - " + (A + 11);
                }
                if (m && ((this._monthsMulti = []), C !== ie)) {
                    for (var W = Ce((0.96 * t.pageSize) / 325.6) || 1; u % W; ) W--;
                    for (var U = 0; U < u / W; ++U) {
                        for (var B = [], j = 0; j < W; ++j) B.push(+a(n(w), s(w) + U * W + j, 1));
                        this._monthsMulti.push(B);
                    }
                }
                (r !== g.calendarType ||
                    e.theme !== g.theme ||
                    e.calendarScroll !== g.calendarScroll ||
                    e.hasContent !== g.hasContent ||
                    e.showCalendar !== g.showCalendar ||
                    e.showSchedule !== g.showSchedule ||
                    e.showWeekNumbers !== g.showWeekNumbers ||
                    e.weeks !== g.weeks ||
                    T) &&
                    (this._shouldCheckSize = !0),
                    (g.width === e.width && g.height === e.height) || (this._dim = { height: be(e.height), width: be(e.width) }),
                    (this._cssClass =
                        "mbsc-calendar mbsc-font mbsc-flex-col" +
                        this._theme +
                        this._rtl +
                        (t.ready ? "" : " mbsc-hidden") +
                        (m ? " mbsc-calendar-grid-view" : " mbsc-calendar-height-" + t.height + " mbsc-calendar-width-" + t.width) +
                        " " +
                        e.cssClass),
                    (this._dayNames = "sm" === t.width || m ? e.dayNamesMin : e.dayNamesShort),
                    (this._isSwipeChange = !1),
                    (this._yearFirst = F < P),
                    (this._pageNr = H),
                    (this._variableRow = D);
                var K = e.pageLoad !== g.pageLoad,
                    X = +M != +this._viewStart || +E != +this._viewEnd;
                if (
                    (this._pageIndex !== ie && X && (this._isIndexChange = !this._isSwipeChange && !L),
                    C !== ie && (this._pageIndex = C),
                    C !== ie && (e.marked !== g.marked || e.colors !== g.colors || e.labels !== g.labels || e.invalid !== g.invalid || e.valid !== g.valid || t.maxLabels !== this._maxLabels || X || T || K))
                ) {
                    (this._maxLabels = t.maxLabels), (this._viewStart = M), (this._viewEnd = E);
                    var J = e.labelsMap || cs(e.labels, M, E, e),
                        q = J && Ss(e, J, M, E, this._variableRow || this._maxLabels || 1, 7, !1, c, !0, e.eventOrder, !Y, e.showLabelCount, e.moreEventsText, e.moreEventsPluralText);
                    q && !this._labels && (this._shouldCheckSize = !0),
                        ((q && t.maxLabels) || !q) && (this._shouldPageLoad = !this._isIndexChange || this._prevAnim || !i || K),
                        (this._labelsLayout = q),
                        (this._labels = J),
                        (this._marked = J ? ie : e.marksMap || cs(e.marked, M, E, e)),
                        (this._colors = cs(e.colors, M, E, e)),
                        (this._valid = cs(e.valid, M, E, e, !0)),
                        (this._invalid = cs(e.invalid, M, E, e, !0));
                }
                if (X || v || o !== g.eventRange || l !== g.eventRangeSize || e.monthNames !== g.monthNames) {
                    this._title = [];
                    var G = $t(k, -1),
                        Z = C === ie ? f : w;
                    if (d) {
                        Z = f;
                        for (var Q = 0, $ = Object.keys(e.selectedDates); Q < $.length; Q++) {
                            var ee = $[Q];
                            if (+ee >= +w && +ee < +k) {
                                Z = new Date(+ee);
                                break;
                            }
                        }
                    }
                    if (this._pageNr > 1)
                        for (U = 0; U < H; U++) {
                            var te = a(n(w), s(w) + U, 1),
                                ae = n(te) + x,
                                ne = b[s(te)];
                            this._title.push({ yearTitle: ae, monthTitle: ne });
                        }
                    else {
                        var se = { yearTitle: n(Z) + x, monthTitle: b[s(Z)] },
                            re = e.showSchedule && 1 === l ? o : i ? r : o,
                            oe = o && !i && (!e.showSchedule || l > 1);
                        switch (re) {
                            case "year":
                                (se.title = n(w) + x), l > 1 && (se.title += " - " + (n(G) + x));
                                break;
                            case "month":
                                if (l > 1 && !i) {
                                    var le = b[s(w)],
                                        ce = n(w) + x,
                                        de = this._yearFirst ? ce + " " + le : le + " " + ce,
                                        he = b[s(G)],
                                        me = n(G) + x,
                                        _e = this._yearFirst ? me + " " + he : he + " " + me;
                                    se.title = de + " - " + _e;
                                } else m && (se.title = n(w) + x);
                                break;
                            case "day":
                            case "week":
                                if (oe) {
                                    var ve = y.search(/d/i) < P ? "D MMM, YYYY" : "MMM D, YYYY";
                                    (se.title = qt(ve, w, e)), ("week" === re || l > 1) && (se.title += " - " + qt(ve, G, e));
                                }
                        }
                        this._title.push(se);
                    }
                }
                (this._active = p),
                    (this._hasPicker = e.hasPicker || m || !h || !i || ("md" === t.width && !1 !== e.hasPicker)),
                    (this._axis = O ? "Y" : "X"),
                    (this._rtlNr = !O && e.rtl ? -1 : 1),
                    (this._weeks = _),
                    (this._nextIcon = O ? e.nextIconV : e.rtl ? e.prevIconH : e.nextIconH),
                    (this._prevIcon = O ? e.prevIconV : e.rtl ? e.nextIconH : e.prevIconH),
                    (this._mousewheel = e.mousewheel === ie ? O : e.mousewheel),
                    (this._isGrid = m),
                    (this._isVertical = O),
                    (this._showOuter = Y),
                    (this._showDaysTop = O || (!!D && 1 === u));
            }),
            (t.prototype._mounted = function () {
                (this._observer = ui(this._el, this._onResize, this._zone)), (this._doc = wa(this._el)), Sa(this._doc, Ys, this._onDocClick);
            }),
            (t.prototype._updated = function () {
                var e = this;
                if (
                    (this._shouldCheckSize
                        ? (setTimeout(function () {
                              e._onResize();
                          }),
                          (this._shouldCheckSize = !1))
                        : this._shouldPageLoad && (this._pageLoaded(), (this._shouldPageLoad = !1)),
                    this._shouldFocus &&
                        setTimeout(function () {
                            e._focusActive(), (e._shouldFocus = !1);
                        }),
                    this.s.instanceService && this.s.instanceService.onComponentChange.next({}),
                    (this._pageChange = !1),
                    this._variableRow && this.s.showCalendar)
                ) {
                    var t = this._body.querySelector(".mbsc-calendar-body-inner"),
                        a = t.scrollHeight > t.clientHeight;
                    a !== this.state.hasScrollY && ((this._shouldCheckSize = !0), this.setState({ hasScrollY: a }));
                }
            }),
            (t.prototype._destroy = function () {
                this._observer && this._observer.detach(), Ca(this._doc, Ys, this._onDocClick), clearTimeout(this._hoverTimer);
            }),
            (t.prototype._getActiveCell = function () {
                var e = this._view,
                    t = e === _s ? this._body : this._pickerCont,
                    a = e === hs ? "year" : e === us ? "month" : "cell";
                return t && t.querySelector(".mbsc-calendar-" + a + '[tabindex="0"]');
            }),
            (t.prototype._focusActive = function () {
                var e = this._getActiveCell();
                e && e.focus();
            }),
            (t.prototype._pageLoaded = function () {
                var e = this.s.navService;
                this._hook("onPageLoaded", { activeElm: this._getActiveCell(), firstDay: e.firstPageDay, lastDay: e.lastPageDay, month: "month" === this.s.calendarType ? e.firstDay : ie, viewEnd: e.viewEnd, viewStart: e.viewStart });
            }),
            (t.prototype._activeChange = function (e) {
                var t = this._pageIndex + e;
                this._minIndex <= t && this._maxIndex >= t && this.__getTextParam && ((this._prevAnim = !1), (this._pageChange = !0), this._hook("onActiveChange", { date: this._getPageDay(t), dir: e, pageChange: !0 }));
            }),
            (t.prototype._activeMonthChange = function (e) {
                var t = this._monthIndex + e;
                this._minMonthIndex <= t && this._maxMonthIndex >= t && ((this._prevAnim = !1), (this._activeMonth = this._getPageMonth(t)), this.forceUpdate());
            }),
            (t.prototype._activeYearsChange = function (e) {
                var t = this._yearsIndex + e;
                if (this._minYearsIndex <= t && this._maxYearsIndex >= t) {
                    var a = this._getPageYears(t);
                    (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(a, 0, 1)), this.forceUpdate();
                }
            }),
            (t.prototype._activeYearChange = function (e) {
                var t = this._yearIndex + e;
                if (this._minYearIndex <= t && this._maxYearIndex >= t) {
                    var a = this._getPageYear(t);
                    (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(a, 0, 1)), this.forceUpdate();
                }
            }),
            (t.prototype._prevDocClick = function () {
                var e = this;
                (this._prevClick = !0),
                    setTimeout(function () {
                        e._prevClick = !1;
                    });
            }),
            t
        );
    })(Xn);
    function cr(e) {
        return (
            (this.getChildContext = function () {
                return e.context;
            }),
            e.children
        );
    }
    function dr(e) {
        var t = this,
            a = e._container;
        (t.componentWillUnmount = function () {
            bn(null, t._temp), (t._temp = null), (t._container = null);
        }),
            t._container && t._container !== a && t.componentWillUnmount(),
            e._vnode
                ? (t._temp ||
                      ((t._container = a),
                      (t._temp = {
                          nodeType: 1,
                          parentNode: a,
                          childNodes: [],
                          appendChild: function (e) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          insertBefore: function (e, a) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          removeChild: function (e) {
                              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t._container.removeChild(e);
                          },
                      })),
                  bn(qa(cr, { context: t.context }, e._vnode), t._temp))
                : t._temp && t.componentWillUnmount();
    }
    function hr(e, t) {
        return qa(dr, { _vnode: e, _container: t });
    }
    var ur = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype.render = function () {
                    var e = this.props.context;
                    return e ? hr(this.props.children, e) : null;
                }),
                t
            );
        })(Qa),
        mr = ur;
    var _r = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, a, n) {
                        var s,
                            i,
                            r = a._hb,
                            o = a._rtl,
                            l = a._theme,
                            d = e.display,
                            h = (((s = {}).onKeyDown = a._onKeyDown), s),
                            u = (((i = {}).onAnimationEnd = a._onAnimationEnd), i);
                        return a._isModal
                            ? a._isVisible
                                ? qa(
                                      mr,
                                      { context: a._ctx },
                                      qa(
                                          "div",
                                          c(
                                              {
                                                  className:
                                                      "mbsc-font mbsc-flex mbsc-popup-wrapper mbsc-popup-wrapper-" +
                                                      d +
                                                      l +
                                                      o +
                                                      " " +
                                                      a._className +
                                                      (e.fullScreen ? " mbsc-popup-wrapper-" + d + "-full" : "") +
                                                      (a._touchUi ? "" : " mbsc-popup-pointer") +
                                                      (a._round ? " mbsc-popup-round" : "") +
                                                      (a._hasContext ? " mbsc-popup-wrapper-ctx" : "") +
                                                      (t.isReady ? "" : " mbsc-popup-hidden"),
                                                  ref: a._setWrapper,
                                              },
                                              h
                                          ),
                                          e.showOverlay &&
                                              qa("div", {
                                                  className: "mbsc-popup-overlay mbsc-popup-overlay-" + d + l + (a._isClosing ? " mbsc-popup-overlay-out" : "") + (a._isOpening && t.isReady ? " mbsc-popup-overlay-in" : ""),
                                                  onClick: a._onOverlayClick,
                                              }),
                                          qa("div", { className: "mbsc-popup-limits mbsc-popup-limits-" + d, ref: a._setLimitator, style: a._limits }),
                                          qa(
                                              "div",
                                              c(
                                                  {
                                                      className:
                                                          "mbsc-flex-col mbsc-popup mbsc-popup-" +
                                                          d +
                                                          l +
                                                          r +
                                                          (e.fullScreen ? "-full" : "") +
                                                          (t.bubblePos && t.showArrow && "anchored" === d ? " mbsc-popup-anchored-" + t.bubblePos : "") +
                                                          (a._isClosing ? " mbsc-popup-" + a._animation + "-out" : "") +
                                                          (a._isOpening && t.isReady ? " mbsc-popup-" + a._animation + "-in" : ""),
                                                      role: "dialog",
                                                      "aria-modal": "true",
                                                      ref: a._setPopup,
                                                      style: a._style,
                                                      onClick: a._onPopupClick,
                                                  },
                                                  u
                                              ),
                                              "anchored" === d &&
                                                  t.showArrow &&
                                                  qa(
                                                      "div",
                                                      { className: "mbsc-popup-arrow-wrapper mbsc-popup-arrow-wrapper-" + t.bubblePos + l },
                                                      qa("div", { className: "mbsc-popup-arrow mbsc-popup-arrow-" + t.bubblePos + l, style: t.arrowPos })
                                                  ),
                                              qa("div", { className: "mbsc-popup-focus", tabIndex: -1, ref: a._setActive }),
                                              qa(
                                                  "div",
                                                  {
                                                      className:
                                                          "mbsc-flex-col mbsc-flex-1-1 mbsc-popup-body mbsc-popup-body-" + d + l + r + (e.fullScreen ? " mbsc-popup-body-" + d + "-full" : "") + (a._round ? " mbsc-popup-body-round" : ""),
                                                  },
                                                  a._headerText &&
                                                      qa("div", {
                                                          className: "mbsc-flex-none mbsc-popup-header mbsc-popup-header-" + d + l + r + (a._buttons ? "" : " mbsc-popup-header-no-buttons"),
                                                          dangerouslySetInnerHTML: a._headerText,
                                                          "v-html": ie,
                                                      }),
                                                  qa("div", { className: "mbsc-flex-1-1 mbsc-popup-content" + (e.contentPadding ? " mbsc-popup-padding" : ""), ref: a._setContent }, n),
                                                  a._buttons &&
                                                      qa(
                                                          "div",
                                                          {
                                                              className:
                                                                  "mbsc-flex-none mbsc-popup-buttons mbsc-popup-buttons-" + d + l + o + r + (a._flexButtons ? " mbsc-flex" : "") + (e.fullScreen ? " mbsc-popup-buttons-" + d + "-full" : ""),
                                                          },
                                                          a._buttons.map(function (t, n) {
                                                              return qa(
                                                                  Gi,
                                                                  {
                                                                      color: t.color,
                                                                      className: "mbsc-popup-button mbsc-popup-button-" + d + o + r + (a._flexButtons ? " mbsc-popup-button-flex" : "") + " " + (t.cssClass || ""),
                                                                      icon: t.icon,
                                                                      disabled: t.disabled,
                                                                      key: n,
                                                                      theme: e.theme,
                                                                      themeVariant: e.themeVariant,
                                                                      variant: t.variant || e.buttonVariant,
                                                                      onClick: t.handler,
                                                                  },
                                                                  t.text
                                                              );
                                                          })
                                                      )
                                              )
                                          )
                                      )
                                  )
                                : null
                            : qa(Za, null, n);
                    })(e, t, this, e.children);
                }),
                t
            );
        })(bi),
        pr = {
            before: function (e, t) {
                var a,
                    n,
                    s = this;
                t.onOpen && (a = t.onOpen), t.onClosed && (n = t.onClosed);
                var i = wa(e),
                    r = i && i.createComment("popup");
                r && e.parentNode && e.parentNode.insertBefore(r, e),
                    (e.style.display = "none"),
                    (t.onOpen = function (t, n) {
                        (e.style.display = ""), t.target.querySelector(".mbsc-popup-content").appendChild(e), a && a.call(s, t, n);
                    }),
                    (t.onClosed = function (t, a) {
                        (e.style.display = "none"), r && r.parentNode && r.parentNode.insertBefore(e, r), n && n.call(s, t, a);
                    });
            },
        },
        vr = {},
        fr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        if (t._isDrag) e.stopPropagation();
                        else {
                            t._triggerEvent("onClick", e);
                            var a = t.s,
                                n = vr[a.id];
                            n && a.selected && n.next({ hasFocus: !1 });
                        }
                    }),
                    (t._onRightClick = function (e) {
                        t._triggerEvent("onRightClick", e);
                    }),
                    (t._onDocTouch = function (e) {
                        Ca(t._doc, Gs, t._onDocTouch), Ca(t._doc, Ws, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { domEvent: e, event: t.s.event });
                    }),
                    (t._updateState = function (e) {
                        t.s.showText && t.setState(e);
                    }),
                    (t._triggerEvent = function (e, a) {
                        t._hook(e, { domEvent: a, label: t.s.event, target: t._el });
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t = this,
                        a = this.s,
                        n = a.id,
                        s = a.isPicker,
                        i = vr[n];
                    i || ((i = new m()), (vr[n] = i)),
                        (this._unsubscribe = i.subscribe(this._updateState)),
                        (this._doc = wa(this._el)),
                        (this._unlisten = Ji(this._el, {
                            keepFocus: !0,
                            onBlur: function () {
                                s || i.next({ hasFocus: !1 });
                            },
                            onDoubleClick: function (e) {
                                e.domEvent.stopPropagation(), t._hook("onDoubleClick", { domEvent: e.domEvent, label: t.s.event, target: t._el });
                            },
                            onEnd: function (a) {
                                if (t._isDrag) {
                                    var n = t.s,
                                        s = c({}, a);
                                    s.domEvent.preventDefault(), (s.event = n.event), n.resize && e ? ((s.resize = !0), (s.direction = e)) : n.drag && (s.drag = !0), t._hook("onDragEnd", s), n.isUpdate || (t._isDrag = !1);
                                }
                                clearTimeout(t._touchTimer), (e = ie);
                            },
                            onFocus: function () {
                                s || i.next({ hasFocus: !0 });
                            },
                            onHoverIn: function (e) {
                                t._isDrag || s || (i.next({ hasHover: !0 }), t._triggerEvent("onHoverIn", e));
                            },
                            onHoverOut: function (e) {
                                i.next({ hasHover: !1 }), t._triggerEvent("onHoverOut", e);
                            },
                            onKeyDown: function (e) {
                                var a = t.s.event;
                                switch (e.keyCode) {
                                    case ti:
                                    case ai:
                                        t._el.click(), e.preventDefault();
                                        break;
                                    case 8:
                                    case 46:
                                        a && !1 !== a.editable && t._hook("onDelete", { domEvent: e, event: a, source: "calendar" });
                                }
                            },
                            onMove: function (a) {
                                var n = t.s,
                                    s = c({}, a);
                                if (((s.event = n.event), e)) (s.resize = !0), (s.direction = e);
                                else {
                                    if (!n.drag) return;
                                    s.drag = !0;
                                }
                                n.event &&
                                    !1 !== n.event.editable &&
                                    (t._isDrag
                                        ? (s.domEvent.preventDefault(), t._hook("onDragMove", s))
                                        : (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7) && (clearTimeout(t._touchTimer), s.isTouch || ((t._isDrag = !0), t._hook("onDragStart", s))));
                            },
                            onStart: function (a) {
                                var n = t.s,
                                    s = c({}, a),
                                    i = s.domEvent.target;
                                if (((s.event = n.event), n.resize && i.classList.contains("mbsc-calendar-label-resize"))) (e = i.classList.contains("mbsc-calendar-label-resize-start") ? "start" : "end"), (s.resize = !0), (s.direction = e);
                                else {
                                    if (!n.drag) return;
                                    s.drag = !0;
                                }
                                n.event &&
                                    !1 !== n.event.editable &&
                                    ((!t._isDrag && s.isTouch) || s.domEvent.stopPropagation(),
                                    t._isDrag
                                        ? t._hook("onDragStart", s)
                                        : s.isTouch &&
                                          (t._touchTimer = setTimeout(function () {
                                              t._hook("onDragModeOn", s), t._hook("onDragStart", s), (t._isDrag = !0);
                                          }, 350)));
                            },
                        })),
                        this._isDrag && (Sa(this._doc, Gs, this._onDocTouch), Sa(this._doc, Ws, this._onDocTouch));
                }),
                (t.prototype._destroy = function () {
                    if (this._unsubscribe) {
                        var e = this.s.id,
                            t = vr[e];
                        t && (t.unsubscribe(this._unsubscribe), t.nr || delete vr[e]);
                    }
                    this._unlisten && this._unlisten(), Ca(this._doc, Gs, this._onDocTouch), Ca(this._doc, Ws, this._onDocTouch);
                }),
                (t.prototype._render = function (e, t) {
                    var a,
                        n,
                        s,
                        i,
                        r,
                        o,
                        l = e.event,
                        c = new Date(e.date),
                        d = e.render || e.renderContent,
                        h = !1;
                    if (
                        ((this._isDrag = this._isDrag || e.isUpdate),
                        (this._content = ie),
                        (this._title =
                            e.more || e.count || !e.showEventTooltip
                                ? ie
                                : (function (e) {
                                      if (ia && e) {
                                          var t = ia.createElement("div");
                                          return (t.innerHTML = e), t.textContent.trim();
                                      }
                                      return e || "";
                                  })(l.tooltip || l.title || l.text)),
                        (this._tabIndex = e.isActiveMonth && e.showText && !e.count && !e.isPicker ? 0 : -1),
                        l)
                    ) {
                        var u = l.allDay,
                            m = u ? ie : e;
                        (a = l.start ? Kt(l.start, m) : null), (n = l.end ? Kt(l.end, m) : null);
                        var _ = a && n && It(e, u, a, n, !0),
                            p = $t(Ft(c, e), 7),
                            v = e.lastDay && e.lastDay < p ? e.lastDay : p;
                        (s = !(h = a && _ && !zt(a, _)) || (a && zt(a, c))), (i = !h || (_ && zt(_, c))), (r = !h || (e.showText ? _ < v : i)), (this._hasResizeStart = e.resize && s), (this._hasResizeEnd = e.resize && r);
                        var f = l.color;
                        if (!f && l.resource && e.resourcesMap) {
                            var g = e.resourcesMap[he(l.resource) ? l.resource[0] : l.resource];
                            f = g && g.color;
                        }
                        e.showText && (this._textColor = f ? La(f) : ie), (this._color = e.render || e.template ? ie : l.textColor && !f ? "transparent" : f);
                    }
                    if (l && e.showText && (d || e.contentTemplate || e.template)) {
                        var y = l.allDay || !a || (h && !s && !i);
                        if (((this._data = { end: !y && i && n ? qt(e.timeFormat, n, e) : "", id: l.id, isMultiDay: h, original: l, start: !y && s && a ? qt(e.timeFormat, a, e) : "", title: this._title }), d)) {
                            var b = d(this._data);
                            _e(b) ? (o = b) : (this._content = b);
                        }
                    } else o = e.more || e.count || (e.showText && (l.title || l.text)) || "";
                    o !== this._text && ((this._text = o), (this._html = o ? this._safeHtml(o) : ie), (this._shouldEnhance = o && l && e.showText && !!d)),
                        (this._cssClass =
                            "mbsc-calendar-text" +
                            this._theme +
                            this._rtl +
                            ((t.hasFocus && !e.inactive && !e.selected) || (e.selected && e.showText) ? " mbsc-calendar-label-active " : "") +
                            (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-calendar-label-hover") +
                            (e.more ? " mbsc-calendar-text-more" : e.render || e.template ? " mbsc-calendar-custom-label" : " mbsc-calendar-label") +
                            (e.inactive ? " mbsc-calendar-label-inactive" : "") +
                            (e.isUpdate ? " mbsc-calendar-label-dragging" : "") +
                            (e.hidden ? " mbsc-calendar-label-hidden" : "") +
                            (s ? " mbsc-calendar-label-start" : "") +
                            (r ? " mbsc-calendar-label-end" : "") +
                            (l && !1 === l.editable ? " mbsc-readonly-event" : "") +
                            (l && l.cssClass ? " " + l.cssClass : ""));
                }),
                t
            );
        })(Xn);
    var gr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var a,
                            n = e.event && !1 !== e.event.editable,
                            s = (((a = {}).onContextMenu = t._onRightClick), a);
                        return qa(
                            "div",
                            c(
                                {
                                    "aria-hidden": e.showText ? ie : "true",
                                    className: t._cssClass,
                                    "data-id": e.showText && e.event ? e.event.id : null,
                                    onClick: t._onClick,
                                    ref: t._setEl,
                                    role: e.showText ? "button" : ie,
                                    style: { color: t._color },
                                    tabIndex: t._tabIndex,
                                    title: t._title,
                                },
                                s
                            ),
                            t._hasResizeStart && n && qa("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-start" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-start-touch" : "") }),
                            t._hasResizeEnd && n && qa("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-end" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-end-touch" : "") }),
                            e.showText && !e.more && !e.render && qa("div", { className: "mbsc-calendar-label-background" + t._theme }),
                            e.showText && !e.more && e.render
                                ? t._html
                                    ? qa("div", { dangerouslySetInnerHTML: t._html }, ie)
                                    : t._content
                                : qa(
                                      "div",
                                      { className: "mbsc-calendar-label-inner" + t._theme, style: { color: t._textColor } },
                                      qa("div", { "aria-hidden": "true", className: "mbsc-calendar-label-text" + t._theme, dangerouslySetInnerHTML: t._html, style: { color: e.event && e.event.textColor } }, t._content),
                                      e.label && qa("div", { className: "mbsc-hidden-content" }, e.label)
                                  )
                        );
                    })(e, this);
                }),
                t
            );
        })(fr),
        yr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._cellClick("onDayClick", e);
                    }),
                    (t._onRightClick = function (e) {
                        t._cellClick("onDayRightClick", e);
                    }),
                    (t._onLabelClick = function (e) {
                        t._labelClick("onLabelClick", e);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        t._labelClick("onLabelDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        t._labelClick("onLabelRightClick", e);
                    }),
                    (t._onLabelHoverIn = function (e) {
                        t._labelClick("onLabelHoverIn", e);
                    }),
                    (t._onLabelHoverOut = function (e) {
                        t._labelClick("onLabelHoverOut", e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        a,
                        n = this;
                    this._unlisten = Ji(this._el, {
                        click: !0,
                        onBlur: function () {
                            n.setState({ hasFocus: !1 });
                        },
                        onDoubleClick: function (e) {
                            var t = n.s;
                            t.clickToCreate && "single" !== t.clickToCreate && t.labels && !t.disabled && t.display && (n._hook("onLabelUpdateStart", e), n._hook("onLabelUpdateEnd", e)), n._cellClick("onDayDoubleClick", e.domEvent);
                        },
                        onEnd: function (s) {
                            e && (s.domEvent.preventDefault(), n._hook("onLabelUpdateEnd", s), (e = !1)), clearTimeout(a), (e = !1), (t = !1);
                        },
                        onFocus: function () {
                            n.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function (e) {
                            var t = n.s;
                            t.disabled || n.setState({ hasHover: !0 }), n._hook("onHoverIn", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: n._el });
                        },
                        onHoverOut: function (e) {
                            var t = n.s;
                            n.setState({ hasHover: !1 }), n._hook("onHoverOut", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: n._el });
                        },
                        onKeyDown: function (e) {
                            switch (e.keyCode) {
                                case ti:
                                case ai:
                                    e.preventDefault(), n._onClick(e);
                            }
                        },
                        onMove: function (s) {
                            e && n.s.dragToCreate
                                ? (s.domEvent.preventDefault(), n._hook("onLabelUpdateMove", s))
                                : t && n.s.dragToCreate && (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7)
                                ? ((e = !s.isTouch), n._hook("onLabelUpdateStart", s))
                                : clearTimeout(a);
                        },
                        onStart: function (s) {
                            var i = n.s;
                            ((s.create = !0), i.disabled || (!i.dragToCreate && !i.clickToCreate) || !i.labels || e) ||
                                Fa(s.domEvent.target, ".mbsc-calendar-text", n._el) ||
                                (s.isTouch && i.dragToCreate
                                    ? (a = setTimeout(function () {
                                          n._hook("onLabelUpdateStart", s), n._hook("onLabelUpdateModeOn", s), (e = !0);
                                      }, 350))
                                    : "single" === i.clickToCreate
                                    ? (n._hook("onLabelUpdateStart", s), (e = !0))
                                    : (t = !s.isTouch));
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var a = jt(e),
                        n = e.date,
                        s = e.colors,
                        i = e.display,
                        r = e.dragData,
                        o = e.hoverEnd,
                        l = e.hoverStart,
                        c = e.labels,
                        d = e.rangeEnd,
                        h = e.rangeStart,
                        u = new Date(n),
                        m = Lt(u),
                        _ = zt(a, u),
                        p = c && c.events,
                        v = s && s[0],
                        f = v && v.background,
                        g = v && v.highlight,
                        y = "",
                        b = "";
                    (this._draggedLabel = r && r.draggedDates && r.draggedDates[m]),
                        (this._draggedLabelOrig = r && r.originDates && r.originDates[m]),
                        (this._todayClass = _ ? " mbsc-calendar-today" : ""),
                        (this._cellStyles = f && i ? { backgroundColor: f, color: La(f) } : ie),
                        (this._circleStyles = g ? { backgroundColor: g, color: La(v.highlight) } : ie),
                        (this._ariaLabel = "day" === e.type ? (_ ? e.todayText + ", " : "") + e.day + ", " + e.month + " " + e.text + ", " + e.year : "month" === e.type ? e.month : ""),
                        i &&
                            (((h && n >= h && n <= (d || h)) || (d && n <= d && n >= (h || d))) && (b = " mbsc-range-day" + (n === (h || d) ? " mbsc-range-day-start" : "") + (n === (d || h) ? " mbsc-range-day-end" : "")),
                            l && o && n >= l && n <= o && (b += " mbsc-range-hover" + (n === l ? " mbsc-range-hover-start mbsc-hover" : "") + (n === o ? " mbsc-range-hover-end mbsc-hover" : ""))),
                        e.marks &&
                            e.marks.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        s &&
                            s.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        p &&
                            p.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        (this._cssClass =
                            "mbsc-calendar-cell mbsc-flex-1-0-0 mbsc-calendar-" +
                            e.type +
                            this._theme +
                            this._rtl +
                            this._hb +
                            y +
                            (c ? " mbsc-calendar-day-labels" : "") +
                            (s ? " mbsc-calendar-day-colors" : "") +
                            (e.outer ? " mbsc-calendar-day-outer" : "") +
                            (e.hasMarks ? " mbsc-calendar-day-marked" : "") +
                            (e.disabled ? " mbsc-disabled" : "") +
                            (i ? "" : " mbsc-calendar-day-empty") +
                            (e.selected ? " mbsc-selected" : "") +
                            (t.hasFocus ? " mbsc-focus" : "") +
                            (!t.hasHover || (n !== l && n !== o && (l || o)) ? "" : " mbsc-hover") +
                            (this._draggedLabel ? " mbsc-calendar-day-highlight" : "") +
                            b),
                        (this._data = { date: u, events: e.events || [], selected: e.selected });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                (t.prototype._cellClick = function (e, t) {
                    var a = this.s;
                    a.display && this._hook(e, { date: new Date(a.date), disabled: a.disabled, domEvent: t, outer: a.outer, selected: a.selected, source: "calendar", target: this._el });
                }),
                (t.prototype._labelClick = function (e, t) {
                    var a = this.s;
                    (t.date = new Date(a.date)), (t.labels = a.labels.events), this._hook(e, t);
                }),
                t
            );
        })(Xn);
    function br(e, t, a, n, s, i, r) {
        return qa(gr, {
            key: r,
            amText: t.amText,
            count: a.count ? a.count + " " + (a.count > 1 ? t.eventsText : t.eventText) : ie,
            date: t.date,
            dataTimezone: t.dataTimezone,
            displayTimezone: t.displayTimezone,
            drag: t.dragToMove,
            resize: ws(a.event && a.event.resize, t.dragToResize),
            event: a.event,
            exclusiveEndDates: t.exclusiveEndDates,
            firstDay: t.firstDay,
            hidden: s,
            id: a.id,
            inactive: !i && a.event && t.dragData && t.dragData.draggedEvent && a.event.id === t.dragData.draggedEvent.id,
            isActiveMonth: t.isActiveMonth,
            isPicker: t.isPicker,
            isUpdate: i,
            label: a.label,
            lastDay: a.lastDay,
            more: a.more,
            pmText: t.pmText,
            resourcesMap: t.resourcesMap,
            rtl: t.rtl,
            selected: a.event && t.selectedEventsMap && !(!t.selectedEventsMap[a.id] && !t.selectedEventsMap[a.event.id]),
            showEventTooltip: t.showEventTooltip,
            showText: n,
            theme: t.theme,
            timeFormat: t.timeFormat,
            timezonePlugin: t.timezonePlugin,
            render: t.renderLabel,
            renderContent: t.renderLabelContent,
            onClick: e._onLabelClick,
            onDoubleClick: e._onLabelDoubleClick,
            onRightClick: e._onLabelRightClick,
            onHoverIn: e._onLabelHoverIn,
            onHoverOut: e._onLabelHoverOut,
            onDelete: t.onLabelDelete,
            onDragStart: t.onLabelUpdateStart,
            onDragMove: t.onLabelUpdateMove,
            onDragEnd: t.onLabelUpdateEnd,
            onDragModeOn: t.onLabelUpdateModeOn,
            onDragModeOff: t.onLabelUpdateModeOff,
        });
    }
    function xr(e, t) {
        var a,
            n,
            s = t._draggedLabel,
            i = t._draggedLabelOrig,
            r = t._theme,
            o = (((a = {}).onContextMenu = t._onRightClick), a);
        return (
            e.renderDay && (n = e.renderDay(t._data)),
            e.renderDayContent && (n = e.renderDayContent(t._data)),
            _e(n) && ((n = qa("div", { dangerouslySetInnerHTML: t._safeHtml(n) })), (t._shouldEnhance = !0)),
            qa(
                "div",
                c({ ref: t._setEl, className: t._cssClass, onClick: t._onClick, style: t._cellStyles, tabIndex: e.disabled ? ie : e.active ? 0 : -1 }, o),
                qa("div", { dangerouslySetInnerHTML: t.textParam }),
                qa(
                    "div",
                    { className: "mbsc-calendar-cell-inner mbsc-calendar-" + e.type + "-inner" + r + ("day" === e.type ? "" : t._hb) + (e.display ? "" : " mbsc-calendar-day-hidden") },
                    e.renderDay
                        ? n
                        : qa(
                              Za,
                              null,
                              1 === e.text && qa("div", { "aria-hidden": "true", className: "mbsc-calendar-month-name" + r + t._rtl }, e.monthShort),
                              qa("div", { "aria-label": t._ariaLabel, role: "button", "aria-pressed": e.selected, className: "mbsc-calendar-cell-text mbsc-calendar-" + e.type + "-text" + r + t._todayClass, style: t._circleStyles }, e.text),
                              e.marks &&
                                  qa(
                                      "div",
                                      null,
                                      qa(
                                          "div",
                                          { className: "mbsc-calendar-marks" + r + t._rtl },
                                          e.marks.map(function (e, t) {
                                              return qa("div", { className: "mbsc-calendar-mark " + (e.markCssClass || "") + r, key: t, style: { background: e.color } });
                                          })
                                      )
                                  ),
                              e.renderDayContent && n
                          ),
                    e.labels &&
                        qa(
                            "div",
                            null,
                            i &&
                                i.event &&
                                qa(
                                    "div",
                                    { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                    qa("div", { style: { width: i.width + "%" || "100%" } }, br(t, e, { id: 0, event: i.event }, !0, !!e.dragData.draggedDates, !0))
                                ),
                            s &&
                                s.event &&
                                qa(
                                    "div",
                                    { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                    qa("div", { className: "mbsc-calendar-label-wrapper", style: { width: s.width + "%" || "100%" } }, br(t, e, { id: 0, event: s.event }, !0, !1, !0))
                                ),
                            qa(
                                "div",
                                { className: "mbsc-calendar-labels" },
                                e.labels.data.map(function (a) {
                                    return (function (e, t, a) {
                                        var n = a.id;
                                        return a.placeholder
                                            ? qa("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder", key: n })
                                            : a.more || a.count
                                            ? br(e, t, a, !0, !1, !1, n)
                                            : a.multiDay
                                            ? [qa("div", { className: "mbsc-calendar-label-wrapper", style: { width: a.width + "%" }, key: n }, br(e, t, a, !0)), br(e, t, a, !1, !1, !1, "-" + n)]
                                            : br(e, t, a, a.showText, !1, !1, n);
                                    })(t, e, a);
                                })
                            ),
                            qa("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder" })
                        )
                )
            )
        );
    }
    var Dr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return xr(e, this);
                }),
                t
            );
        })(yr),
        Tr = function (e) {
            var t = e.firstDay,
                a = e.hidden,
                n = e.rtl,
                s = e.theme,
                i = e.dayNamesShort,
                r = e.showWeekNumbers,
                o = e.hasScroll;
            return qa(
                "div",
                { "aria-hidden": "true", className: "mbsc-calendar-week-days mbsc-flex" + (a ? " mbsc-hidden" : "") },
                r && qa("div", { className: "mbsc-calendar-week-day mbsc-flex-none mbsc-calendar-week-nr" + s + n }),
                le.map(function (e, a) {
                    return qa("div", { className: "mbsc-calendar-week-day mbsc-flex-1-0-0" + s + n, key: a }, i[(a + t) % 7]);
                }),
                o && qa("div", { className: "mbsc-schedule-fake-scroll-y" })
            );
        },
        Sr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._isActive = function (e) {
                    return this.s.isActive && e === this.s.activeDate;
                }),
                (t.prototype._isInvalid = function (e) {
                    var t = this.s;
                    return Ci(t, Ut(t, new Date(e)), t.invalid, t.valid, +t.min, +t.max);
                }),
                (t.prototype._isSelected = function (e) {
                    var t = new Date(e),
                        a = Ut(this.s, t);
                    return !!this.s.selectedDates[+a];
                }),
                (t.prototype._getWeekNr = function (e, t) {
                    var a = new Date(t);
                    return "" + e.getWeekNumber(e.getDate(a.getFullYear(), a.getMonth(), a.getDate() + ((7 - e.firstDay + 1) % 7)));
                }),
                (t.prototype._render = function (e) {
                    var t = e.weeks || 6,
                        a = e.firstDay,
                        n = new Date(e.firstPageDay),
                        s = e.getYear(n),
                        i = e.getMonth(n),
                        r = e.getDay(n),
                        o = e.getDate(s, i, r).getDay(),
                        l = a - o > 0 ? 7 : 0,
                        c = [],
                        d = 0;
                    (this._rowHeights = []), (this._rows = []), (this._days = le);
                    for (var h = 0; h < 7 * t; h++) {
                        var u = e.getDate(s, i, h + a - l - o + r),
                            m = Lt(u),
                            _ = e.getMonth(u),
                            p = _ !== i && "week" !== e.calendarType,
                            v = e.marked && e.marked[m],
                            f = v ? (e.showSingleMark ? [{}] : v) : null,
                            g = e.labels && e.labels[m],
                            y = g ? g.data.length : 0,
                            b = h % 7 == 0;
                        if (e.variableRow) {
                            if (b && p && h) break;
                            y > d && (d = y), h % 7 == 6 && (this._rowHeights.push(d * (e.labelHeight || 20) + (e.cellTextHeight || 0) + 3), (d = 0));
                        }
                        b && ((c = []), this._rows.push(c)),
                            c.push({
                                colors: e.colors && e.colors[m],
                                date: +u,
                                day: e.dayNames[u.getDay()],
                                display: !p || e.showOuter,
                                events: e.events && e.events[m],
                                labels: g,
                                marks: f,
                                month: e.monthNames[_],
                                monthShort: e.monthNamesShort[_],
                                outer: p,
                                text: e.getDay(u),
                                year: e.getYear(u),
                            });
                    }
                }),
                t
            );
        })(Xn);
    var Cr = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return (function (e, t) {
                    var a = e.showWeekNumbers,
                        n = e.showWeekDays ? qa(Tr, { dayNamesShort: e.dayNamesShort, firstDay: e.firstDay, rtl: t._rtl, showWeekNumbers: a, theme: t._theme }) : null;
                    return qa(
                        "div",
                        { "aria-hidden": e.isActive ? ie : "true", className: "mbsc-calendar-table mbsc-flex-col mbsc-flex-1-1" + (e.isActive ? " mbsc-calendar-table-active" : "") },
                        n,
                        t._rows.map(function (n, s) {
                            var i = a ? t._getWeekNr(e, n[0].date) : "";
                            return qa(
                                "div",
                                { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: s, style: { minHeight: t._rowHeights[s] } },
                                a &&
                                    qa(
                                        "div",
                                        { className: "mbsc-calendar-cell mbsc-flex-none mbsc-calendar-day mbsc-calendar-week-nr" + t._theme },
                                        qa("div", { "aria-hidden": "true" }, i),
                                        qa("div", { className: "mbsc-hidden-content" }, e.weekText.replace("{count}", i))
                                    ),
                                n.map(function (a, n) {
                                    return qa(Dr, {
                                        active: a.display && t._isActive(a.date),
                                        amText: e.amText,
                                        clickToCreate: e.clickToCreate,
                                        colors: a.colors,
                                        date: a.date,
                                        day: a.day,
                                        disabled: t._isInvalid(a.date),
                                        display: a.display,
                                        dataTimezone: e.dataTimezone,
                                        displayTimezone: e.displayTimezone,
                                        dragData: e.dragData,
                                        dragToCreate: e.dragToCreate,
                                        dragToResize: e.dragToResize,
                                        dragToMove: e.dragToMove,
                                        eventText: e.eventText,
                                        events: a.events,
                                        eventsText: e.eventsText,
                                        exclusiveEndDates: e.exclusiveEndDates,
                                        firstDay: e.firstDay,
                                        hasMarks: e.hasMarks,
                                        hoverEnd: e.hoverEnd,
                                        hoverStart: e.hoverStart,
                                        isActiveMonth: e.isActive,
                                        isPicker: e.isPicker,
                                        key: a.date,
                                        labels: a.labels,
                                        pmText: e.pmText,
                                        marks: a.marks,
                                        month: a.month,
                                        monthShort: a.monthShort,
                                        onDayClick: e.onDayClick,
                                        onDayDoubleClick: e.onDayDoubleClick,
                                        onDayRightClick: e.onDayRightClick,
                                        onLabelClick: e.onLabelClick,
                                        onLabelDoubleClick: e.onLabelDoubleClick,
                                        onLabelRightClick: e.onLabelRightClick,
                                        onLabelHoverIn: e.onLabelHoverIn,
                                        onLabelHoverOut: e.onLabelHoverOut,
                                        onLabelDelete: e.onLabelDelete,
                                        onLabelUpdateStart: e.onLabelUpdateStart,
                                        onLabelUpdateMove: e.onLabelUpdateMove,
                                        onLabelUpdateEnd: e.onLabelUpdateEnd,
                                        onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                        onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                        outer: a.outer,
                                        renderDay: e.renderDay,
                                        renderDayContent: e.renderDayContent,
                                        renderLabel: e.renderLabel,
                                        renderLabelContent: e.renderLabelContent,
                                        rangeEnd: e.rangeEnd,
                                        rangeStart: e.rangeStart,
                                        resourcesMap: e.resourcesMap,
                                        selectedEventsMap: e.selectedEventsMap,
                                        rtl: e.rtl,
                                        showEventTooltip: e.showEventTooltip,
                                        selected: t._isSelected(a.date),
                                        text: a.text,
                                        theme: e.theme,
                                        timeFormat: e.timeFormat,
                                        timezonePlugin: e.timezonePlugin,
                                        todayText: e.todayText,
                                        type: "day",
                                        year: a.year,
                                        onHoverIn: e.onDayHoverIn,
                                        onHoverOut: e.onDayHoverOut,
                                    });
                                })
                            );
                        })
                    );
                })(e, this);
            }),
            t
        );
    })(Sr);
    function wr(e, t, a, n) {
        var s;
        if (!(t < a || t > n)) {
            if (he(e)) {
                var i = e.length,
                    r = t % i;
                s = e[r >= 0 ? r : r + i];
            } else s = e(t);
            return s;
        }
    }
    var kr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._currPos = 0),
                (t._delta = 0),
                (t._endPos = 0),
                (t._lastRaf = 0),
                (t._maxSnapScroll = 0),
                (t._margin = 0),
                (t._scrollEnd = ke(function () {
                    pa(t._raf), (t._raf = !1), t._onEnd(), (t._hasScrolled = !1);
                }, 200)),
                (t._setInnerEl = function (e) {
                    t._innerEl = e;
                }),
                (t._setScrollEl = function (e) {
                    t._scrollEl = e;
                }),
                (t._setScrollEl3d = function (e) {
                    t._scrollEl3d = e;
                }),
                (t._setScrollbarEl = function (e) {
                    t._scrollbarEl = e;
                }),
                (t._setScrollbarContEl = function (e) {
                    t._scrollbarContEl = e;
                }),
                (t._onStart = function (e) {
                    var a = t.s;
                    t._hook("onStart", {}),
                        (a.changeOnEnd && t._isScrolling) ||
                            (!a.mouseSwipe && !e.isTouch) ||
                            !a.swipe ||
                            ((t._started = !0),
                            (t._hasScrolled = t._isScrolling),
                            (t._currX = e.startX),
                            (t._currY = e.startY),
                            (t._delta = 0),
                            (t._velocityX = 0),
                            (t._velocityY = 0),
                            (t._startPos = Ia(t._scrollEl, t._isVertical)),
                            (t._timestamp = +new Date()),
                            t._isScrolling && (pa(t._raf), (t._raf = !1), t._scroll(t._startPos)));
                }),
                (t._onMove = function (e) {
                    var a = e.domEvent,
                        n = t.s;
                    t._isVertical || n.scrollLock || t._hasScrolled ? a.cancelable && a.preventDefault() : a.type === Zs && (Math.abs(e.deltaY) > 7 || !n.swipe) && (t._started = !1),
                        t._started &&
                            ((t._delta = t._isVertical ? e.deltaY : e.deltaX),
                            (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                                (t._hasScrolled || t._hook("onGestureStart", {}),
                                (t._hasScrolled = !0),
                                (t._isScrolling = !0),
                                t._raf ||
                                    (t._raf = _a(function () {
                                        return t._move(e);
                                    }))));
                }),
                (t._onEnd = function () {
                    if (((t._started = !1), t._hasScrolled)) {
                        var e,
                            a = t.s,
                            n = 17 * (t._isVertical ? t._velocityY : t._velocityX),
                            s = t._maxSnapScroll,
                            i = t._delta;
                        (i += n * n * 0.5 * (n < 0 ? -1 : 1)), s && (i = ce(i, -t._round * s, t._round * s));
                        var r = ce(Te((t._startPos + i) / t._round) * t._round, t._min, t._max),
                            o = Te((-r * t._rtlNr) / a.itemSize) + t._offset,
                            l = i > 0 ? (t._isVertical ? 270 : 360) : t._isVertical ? 90 : 180,
                            c = o - a.selectedIndex;
                        (e = a.time || Math.max(1e3, 3 * Math.abs(r - t._currPos))),
                            t._hook("onGestureEnd", { direction: l, index: o }),
                            (t._delta = 0),
                            t._scroll(r, e),
                            c && !a.changeOnEnd && (t._hook("onIndexChange", { index: o, diff: c }), a.selectedIndex === t._prevIndex && a.selectedIndex !== o && t.forceUpdate());
                    }
                }),
                (t._onClick = function (e) {
                    t._hasScrolled && ((t._hasScrolled = !1), e.stopPropagation(), e.preventDefault());
                }),
                (t._onScroll = function (e) {
                    (e.target.scrollTop = 0), (e.target.scrollLeft = 0);
                }),
                (t._onMouseWheel = function (e) {
                    var a = t._isVertical ? (e.deltaY === ie ? e.wheelDelta || e.detail : e.deltaY) : e.deltaX;
                    if (a && t.s.mousewheel) {
                        if (
                            (e.preventDefault(),
                            t._hook("onStart", {}),
                            t._started || ((t._delta = 0), (t._velocityX = 0), (t._velocityY = 0), (t._startPos = t._currPos), t._hook("onGestureStart", {})),
                            e.deltaMode && 1 === e.deltaMode && (a *= 15),
                            (a = ce(-a, -t._scrollSnap, t._scrollSnap)),
                            (t._delta += a),
                            t._maxSnapScroll && Math.abs(t._delta) > t._round * t._maxSnapScroll && (a = 0),
                            t._startPos + t._delta < t._min && ((t._startPos = t._min), (t._delta = 0), (a = 0)),
                            t._startPos + t._delta > t._max && ((t._startPos = t._max), (t._delta = 0), (a = 0)),
                            t._raf ||
                                (t._raf = _a(function () {
                                    return t._move();
                                })),
                            !a && t._started)
                        )
                            return;
                        (t._hasScrolled = !0), (t._isScrolling = !0), (t._started = !0), t._scrollEnd();
                    }
                }),
                (t._onTrackStart = function (e) {
                    e.stopPropagation();
                    var a = { domEvent: e, startX: Wi(e, "X", !0), startY: Wi(e, "Y", !0) };
                    if ((t._onStart(a), (t._trackStartX = a.startX), (t._trackStartY = a.startY), e.target === t._scrollbarEl)) Sa(t._doc, Bs, t._onTrackEnd), Sa(t._doc, Us, t._onTrackMove);
                    else {
                        var n = Ya(t._scrollbarContEl).top,
                            s = (a.startY - n) / t._barContSize;
                        (t._startPos = t._currPos = t._max + (t._min - t._max) * s), (t._hasScrolled = !0), t._onEnd();
                    }
                }),
                (t._onTrackMove = function (e) {
                    var a = t._barContSize,
                        n = Wi(e, "X", !0),
                        s = Wi(e, "Y", !0),
                        i = (t._isVertical ? s - t._trackStartY : n - t._trackStartX) / a;
                    t._isInfinite ? (t._delta = -(t._maxSnapScroll * t._round * 2 + a) * i) : (t._delta = (t._min - t._max - a) * i),
                        (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                            (t._hasScrolled || t._hook("onGestureStart", {}),
                            (t._hasScrolled = !0),
                            (t._isScrolling = !0),
                            t._raf ||
                                (t._raf = _a(function () {
                                    return t._move({ endX: n, endY: s }, !t._isInfinite);
                                })));
                }),
                (t._onTrackEnd = function () {
                    (t._delta = 0), (t._startPos = t._currPos), t._onEnd(), Ca(t._doc, Bs, t._onTrackEnd), Ca(t._doc, Us, t._onTrackMove);
                }),
                (t._onTrackClick = function (e) {
                    e.stopPropagation();
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._render = function (e, t) {
                var a = this._prevS,
                    n = e.batchSize,
                    s = e.batchSize3d,
                    i = e.itemNr || 1,
                    r = e.itemSize,
                    o = e.selectedIndex,
                    l = a.selectedIndex,
                    c = t.index === ie ? o : t.index,
                    d = [],
                    h = [],
                    u = o - l,
                    m = c - this._currIndex,
                    _ = e.minIndex,
                    p = e.maxIndex,
                    v = e.items,
                    f = e.offset;
                (this._currIndex = c), (this._isVertical = "Y" === e.axis), (this._threshold = this._isVertical ? e.thresholdY : e.thresholdX), (this._rtlNr = !this._isVertical && e.rtl ? -1 : 1), (this._round = e.snap ? r : 1);
                for (var g = this._round; g > 44; ) g /= 2;
                if (((this._scrollSnap = Te(44 / g) * g), v)) {
                    for (var y = c - n; y < c + i + n; y++) d.push({ key: y, data: wr(v, y, _, p) });
                    if (e.scroll3d) for (y = c - s; y < c + i + s; y++) h.push({ key: y, data: wr(v, y, _, p) });
                    (this.visibleItems = d), (this.visible3dItems = h), (this._maxSnapScroll = n), (this._isInfinite = "function" == typeof v);
                }
                this._offset === ie && (this._offset = o);
                var b = -(o - this._offset) * r * this._rtlNr;
                if (Math.abs(u) > n && b !== this._endPos) {
                    var x = u + n * (u > 0 ? -1 : 1);
                    (this._offset += x), (this._margin -= x);
                }
                if (
                    (f && f !== a.offset && ((this._offset += f), (this._margin -= f)),
                    m && (this._margin += m),
                    (this._max = _ !== ie ? -(_ - this._offset) * r * this._rtlNr : 1 / 0),
                    (this._min = p !== ie ? -(p - this._offset - (e.spaceAround ? 0 : i - 1)) * r * this._rtlNr : -1 / 0),
                    -1 === this._rtlNr)
                ) {
                    var D = this._min;
                    (this._min = this._max), (this._max = D);
                }
                this._min > this._max && (this._min = this._max);
                var T = e.visibleSize * r;
                (this._barContSize = T), (this._barSize = Math.max(20, (T * T) / (this._max - this._min + T))), (this._cssClass = this._className + " mbsc-ltr");
            }),
            (t.prototype._mounted = function () {
                var e = this._el,
                    t = this._scrollbarContEl;
                (this._doc = wa(e)),
                    Sa(this.s.scroll3d ? this._innerEl : e, qs, this._onScroll),
                    Sa(e, Ys, this._onClick, !0),
                    Sa(e, Xs, this._onMouseWheel, { passive: !1 }),
                    Sa(e, ei, this._onMouseWheel, { passive: !1 }),
                    Sa(t, Ws, this._onTrackStart),
                    Sa(t, Ys, this._onTrackClick),
                    (this._unlisten = Ji(e, {
                        onEnd: this._onEnd,
                        onHoverIn: function () {
                            t.classList.add("mbsc-scroller-bar-hover");
                        },
                        onHoverOut: function () {
                            t.classList.remove("mbsc-scroller-bar-hover");
                        },
                        onMove: this._onMove,
                        onStart: this._onStart,
                        prevDef: !0,
                    }));
            }),
            (t.prototype._updated = function () {
                var e = this.s,
                    t = e.batchSize,
                    a = e.itemSize,
                    n = e.selectedIndex,
                    s = this._prevIndex,
                    i = !e.prevAnim && ((s !== ie && s !== n) || this._isAnimating),
                    r = -(n - this._offset) * a * this._rtlNr;
                e.margin && (this._scrollEl.style.marginTop = this._isVertical ? (this._margin - t) * a + "px" : ""), this._started || this._scroll(r, i ? this._isAnimating || e.time || 1e3 : 0), (this._prevIndex = n);
            }),
            (t.prototype._destroy = function () {
                Ca(this.s.scroll3d ? this._innerEl : this._el, qs, this._onScroll),
                    Ca(this._el, Ys, this._onClick, !0),
                    Ca(this._el, Xs, this._onMouseWheel, { passive: !1 }),
                    Ca(this._el, ei, this._onMouseWheel, { passive: !1 }),
                    Ca(this._scrollbarContEl, Ws, this._onTrackStart),
                    Ca(this._scrollbarContEl, Ys, this._onTrackClick),
                    pa(this._raf),
                    (this._raf = !1),
                    this._scroll(0),
                    this._unlisten();
            }),
            (t.prototype._anim = function (e) {
                var t = this;
                return (this._raf = _a(function () {
                    var a = t.s,
                        n = +new Date();
                    if (t._raf) {
                        if ((t._currPos - t._endPos) * -e < 4)
                            return (
                                (t._currPos = t._endPos),
                                (t._raf = !1),
                                (t._isAnimating = 0),
                                (t._isScrolling = !1),
                                t._infinite(t._currPos),
                                t._hook("onAnimationEnd", {}),
                                void t._scrollbarContEl.classList.remove("mbsc-scroller-bar-started")
                            );
                        n - t._lastRaf > 100 && ((t._lastRaf = n), (t._currPos = Ia(t._scrollEl, t._isVertical)), a.changeOnEnd || t._infinite(t._currPos)), (t._raf = t._anim(e));
                    }
                }));
            }),
            (t.prototype._infinite = function (e) {
                var t = this.s;
                if (t.itemSize) {
                    var a = Te((-e * this._rtlNr) / t.itemSize) + this._offset,
                        n = a - this._currIndex;
                    n && (t.changeOnEnd ? this._hook("onIndexChange", { index: a, diff: n }) : this.setState({ index: a }));
                }
            }),
            (t.prototype._scroll = function (e, t) {
                var a = this.s,
                    n = a.itemSize,
                    s = this._isVertical,
                    i = this._scrollEl.style,
                    r = ba ? ba + "T" : "t",
                    o = t ? xa + "transform " + Te(t) + "ms " + a.easing : "";
                if (((i[r + "ransform"] = "translate3d(" + (s ? "0," + e + "px," : e + "px,0,") + "0)"), (i[r + "ransition"] = o), (this._endPos = e), a.scroll3d)) {
                    var l = this._scrollEl3d.style,
                        c = 360 / (2 * a.batchSize3d);
                    (l[r + "ransform"] = "translateY(-50%) rotateX(" + (-e / n) * c + "deg)"), (l[r + "ransition"] = o);
                }
                if (this._scrollbarEl) {
                    var d = this._scrollbarEl.style,
                        h = this._isInfinite ? (this._maxSnapScroll * this._round - this._delta) / (this._maxSnapScroll * this._round * 2) : (e - this._max) / (this._min - this._max),
                        u = ce((this._barContSize - this._barSize) * h, 0, this._barContSize - this._barSize);
                    (d[r + "ransform"] = "translate3d(" + (s ? "0," + u + "px," : u + "px,0,") + "0)"), (d[r + "ransition"] = o);
                }
                t
                    ? (pa(this._raf), (this._isAnimating = t), this._scrollbarContEl.classList.add("mbsc-scroller-bar-started"), (this._raf = this._anim(e > this._currPos ? 1 : -1)))
                    : ((this._currPos = e), a.changeOnEnd || this._infinite(e));
            }),
            (t.prototype._move = function (e, t) {
                var a = this._currX,
                    n = this._currY,
                    s = this._timestamp,
                    i = this._maxSnapScroll;
                if (e) {
                    (this._currX = e.endX), (this._currY = e.endY), (this._timestamp = +new Date());
                    var r = this._timestamp - s;
                    if (r > 0 && r < 100) {
                        var o = (this._currX - a) / r,
                            l = (this._currY - n) / r;
                        (this._velocityX = 0.7 * o + 0.3 * this._velocityX), (this._velocityY = 0.7 * l + 0.3 * this._velocityY);
                    }
                }
                i && !t && (this._delta = ce(this._delta, -this._round * i, this._round * i)), this._scroll(ce(this._startPos + this._delta, this._min - this.s.itemSize, this._max + this.s.itemSize)), (this._raf = !1);
            }),
            (t.defaults = {
                axis: "Y",
                batchSize: 40,
                easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                mouseSwipe: !0,
                mousewheel: !0,
                prevDef: !0,
                selectedIndex: 0,
                spaceAround: !0,
                stopProp: !0,
                swipe: !0,
                thresholdX: 10,
                thresholdY: 5,
            }),
            t
        );
    })(Xn);
    var Mr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, a) {
                        var n;
                        return (
                            e.itemRenderer &&
                                ((a = t.visibleItems.map(function (a) {
                                    return e.itemRenderer(a, t._offset);
                                })),
                                e.scroll3d &&
                                    (n = t.visible3dItems.map(function (a) {
                                        return e.itemRenderer(a, t._offset, !0);
                                    }))),
                            qa(
                                "div",
                                { ref: t._setEl, className: t._cssClass, style: e.styles },
                                qa("div", { ref: t._setInnerEl, className: e.innerClass, style: e.innerStyles }, qa("div", { ref: t._setScrollEl, className: "mbsc-scrollview-scroll" + t._rtl }, a)),
                                e.scroll3d && qa("div", { ref: t._setScrollEl3d, style: { height: e.itemSize + "px" }, className: "mbsc-scroller-items-3d" }, n),
                                qa(
                                    "div",
                                    {
                                        ref: t._setScrollbarContEl,
                                        className: "mbsc-scroller-bar-cont " + t._rtl + (e.scrollBar && t._barSize !== t._barContSize ? "" : " mbsc-scroller-bar-hidden") + (t._started ? " mbsc-scroller-bar-started" : ""),
                                    },
                                    qa("div", { className: "mbsc-scroller-bar" + t._theme, ref: t._setScrollbarEl, style: { height: t._barSize + "px" } })
                                )
                            )
                        );
                    })(e, this, e.children);
                }),
                t
            );
        })(kr),
        Er = 0;
    var Nr = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e, t) {
                return (function (e, t, a, n) {
                    var s, i;
                    Er++;
                    var r = a._variableRow,
                        o = a._view !== _s,
                        l = (((s = {}).onAnimationEnd = a._onViewAnimationEnd), s),
                        d = (((i = {}).onKeyDown = a._onKeyDown), i),
                        h = function (n, s) {
                            return qa(
                                Cr,
                                c({}, s, {
                                    activeDate: a._active,
                                    amText: e.amText,
                                    calendarType: e.calendarType,
                                    cellTextHeight: t.cellTextHeight,
                                    clickToCreate: e.clickToCreate,
                                    colors: a._colors,
                                    dayNames: e.dayNames,
                                    dayNamesShort: a._dayNames,
                                    dataTimezone: e.dataTimezone,
                                    displayTimezone: e.displayTimezone,
                                    eventText: e.eventText,
                                    events: e.eventMap,
                                    eventsText: e.eventsText,
                                    exclusiveEndDates: e.exclusiveEndDates,
                                    firstDay: e.firstDay,
                                    firstPageDay: n,
                                    getDate: e.getDate,
                                    getDay: e.getDay,
                                    getMonth: e.getMonth,
                                    getWeekNumber: e.getWeekNumber,
                                    getYear: e.getYear,
                                    hasMarks: !!a._marked,
                                    hoverEnd: e.hoverEnd,
                                    hoverStart: e.hoverStart,
                                    isPicker: e.isPicker,
                                    invalid: a._invalid,
                                    labels: a._labelsLayout,
                                    labelHeight: t.labelHeight,
                                    marked: a._marked,
                                    max: a._maxDate,
                                    min: a._minDate,
                                    monthNames: e.monthNames,
                                    monthNamesShort: e.monthNamesShort,
                                    onDayClick: a._onDayClick,
                                    onDayDoubleClick: e.onDayDoubleClick,
                                    onDayRightClick: e.onDayRightClick,
                                    onDayHoverIn: a._onDayHoverIn,
                                    onDayHoverOut: a._onDayHoverOut,
                                    onLabelClick: a._onLabelClick,
                                    onLabelDoubleClick: e.onLabelDoubleClick,
                                    onLabelRightClick: e.onLabelRightClick,
                                    onLabelHoverIn: e.onLabelHoverIn,
                                    onLabelHoverOut: e.onLabelHoverOut,
                                    onLabelDelete: e.onLabelDelete,
                                    pmText: e.pmText,
                                    rangeEnd: e.rangeEnd,
                                    rangeStart: e.rangeStart,
                                    resourcesMap: e.resourcesMap,
                                    rtl: e.rtl,
                                    selectedDates: e.selectedDates,
                                    selectedEventsMap: e.selectedEventsMap,
                                    showEventTooltip: e.showEventTooltip,
                                    showOuter: a._showOuter,
                                    showWeekDays: !a._showDaysTop,
                                    showWeekNumbers: e.showWeekNumbers,
                                    showSingleMark: !!e.marksMap,
                                    todayText: e.todayText,
                                    theme: e.theme,
                                    timeFormat: e.timeFormat,
                                    timezonePlugin: e.timezonePlugin,
                                    valid: a._valid,
                                    weeks: a._weeks,
                                    weekText: e.weekText,
                                    renderDay: e.renderDay,
                                    renderDayContent: e.renderDayContent,
                                    renderLabel: e.renderLabel,
                                    renderLabelContent: e.renderLabelContent,
                                    variableRow: a._variableRow,
                                })
                            );
                        },
                        u =
                            a._showDaysTop && e.showCalendar
                                ? qa(Tr, { dayNamesShort: a._dayNames, rtl: a._rtl, theme: a._theme, firstDay: e.firstDay, hasScroll: t.hasScrollY, hidden: a._view !== _s && !a._hasPicker, showWeekNumbers: e.showWeekNumbers })
                                : null,
                        m = {
                            axis: a._axis,
                            batchSize: 1,
                            changeOnEnd: !0,
                            className: "mbsc-calendar-scroll-wrapper" + a._theme,
                            data: Er,
                            easing: "ease-out",
                            itemSize: t.pickerSize,
                            items: a._months,
                            mousewheel: a._mousewheel,
                            prevAnim: a._prevAnim,
                            rtl: e.rtl,
                            snap: !0,
                            time: 200,
                        },
                        _ = qa(
                            "div",
                            { ref: a._setPickerCont, className: a._hasPicker ? "mbsc-calendar-picker-wrapper" : "" },
                            (t.view === hs || t.viewClosing === hs || e.selectView === hs) &&
                                qa(
                                    "div",
                                    c({ className: a._getPickerClass(hs) }, l),
                                    qa(
                                        Mr,
                                        c(
                                            {
                                                key: "years",
                                                itemRenderer: function (t, n) {
                                                    var s = t.key,
                                                        i = a._getPageYears(s),
                                                        r = e.getYear(new Date(a._active)),
                                                        o = e.getYear(new Date(a._activeMonth));
                                                    return qa(
                                                        "div",
                                                        {
                                                            "aria-hidden": a._yearsIndex === s ? ie : "true",
                                                            className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + a._theme + a._rtl,
                                                            key: s,
                                                            style: a._getPageStyle(s, n, a._yearsIndex),
                                                        },
                                                        qa(
                                                            "div",
                                                            { className: "mbsc-calendar-table mbsc-flex-col" },
                                                            oe.map(function (t, n) {
                                                                return qa(
                                                                    "div",
                                                                    { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: n },
                                                                    re.map(function (t, s) {
                                                                        var l = i + 3 * n + s,
                                                                            c = +e.getDate(l, 0, 1);
                                                                        return qa(Dr, {
                                                                            active: l === o,
                                                                            date: c,
                                                                            display: !0,
                                                                            selected: l === r,
                                                                            disabled: l < a._minYears || l > a._maxYears,
                                                                            rtl: e.rtl,
                                                                            text: l + e.yearSuffix,
                                                                            theme: e.theme,
                                                                            type: "year",
                                                                            onDayClick: a._onYearClick,
                                                                            key: l,
                                                                        });
                                                                    })
                                                                );
                                                            })
                                                        )
                                                    );
                                                },
                                                maxIndex: a._maxYearsIndex,
                                                minIndex: a._minYearsIndex,
                                                onGestureEnd: a._onGestureEnd,
                                                onIndexChange: a._onYearsPageChange,
                                                selectedIndex: a._yearsIndex,
                                            },
                                            m
                                        )
                                    )
                                ),
                            (t.view === us || t.viewClosing === us || e.selectView === us) &&
                                qa(
                                    "div",
                                    c({ className: a._getPickerClass(us) }, l),
                                    qa(
                                        Mr,
                                        c(
                                            {
                                                key: "year",
                                                itemRenderer: function (t, n) {
                                                    var s = t.key,
                                                        i = a._getPageYear(s),
                                                        r = new Date(a._activeMonth),
                                                        o = e.getYear(r),
                                                        l = e.getMonth(r),
                                                        c = new Date(a._active),
                                                        d = e.getYear(c),
                                                        h = e.getMonth(c);
                                                    return qa(
                                                        "div",
                                                        {
                                                            "aria-hidden": a._yearIndex === s ? ie : "true",
                                                            className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + a._theme + a._rtl,
                                                            key: s,
                                                            style: a._getPageStyle(s, n, a._yearIndex),
                                                        },
                                                        qa(
                                                            "div",
                                                            { className: "mbsc-calendar-table mbsc-flex-col" },
                                                            oe.map(function (t, n) {
                                                                return qa(
                                                                    "div",
                                                                    { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: n },
                                                                    re.map(function (t, s) {
                                                                        var r = e.getDate(i, 3 * n + s, 1),
                                                                            c = e.getYear(r),
                                                                            u = e.getMonth(r);
                                                                        return qa(Dr, {
                                                                            active: c === o && u === l,
                                                                            date: +r,
                                                                            display: !0,
                                                                            selected: c === d && u === h,
                                                                            disabled: r < a._minYear || r >= a._maxYear,
                                                                            month: e.monthNames[u],
                                                                            rtl: e.rtl,
                                                                            text: e.monthNamesShort[u],
                                                                            theme: e.theme,
                                                                            type: "month",
                                                                            onDayClick: a._onMonthClick,
                                                                            key: +r,
                                                                        });
                                                                    })
                                                                );
                                                            })
                                                        )
                                                    );
                                                },
                                                maxIndex: a._maxYearIndex,
                                                minIndex: a._minYearIndex,
                                                onGestureEnd: a._onGestureEnd,
                                                onIndexChange: a._onYearPageChange,
                                                selectedIndex: a._yearIndex,
                                            },
                                            m
                                        )
                                    )
                                ),
                            a._hasPicker &&
                                (t.view === ms || t.viewClosing === ms) &&
                                qa(
                                    "div",
                                    c({ className: a._getPickerClass(ms) }, l),
                                    qa(
                                        Mr,
                                        c(
                                            {
                                                key: "month",
                                                itemRenderer: function (t, n) {
                                                    var s = t.key;
                                                    return qa(
                                                        "div",
                                                        { className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + a._theme + a._rtl, key: s, style: a._getPageStyle(s, n, 1) },
                                                        qa(Cr, {
                                                            activeDate: a._activeMonth,
                                                            dataTimezone: e.dataTimezone,
                                                            dayNames: e.dayNames,
                                                            dayNamesShort: e.dayNamesMin,
                                                            displayTimezone: e.displayTimezone,
                                                            firstDay: e.firstDay,
                                                            firstPageDay: a._getPageMonth(s),
                                                            getDate: e.getDate,
                                                            getDay: e.getDay,
                                                            getMonth: e.getMonth,
                                                            getYear: e.getYear,
                                                            isActive: s >= a._monthIndex && s < a._monthIndex + 1,
                                                            max: a._maxDate,
                                                            min: a._minDate,
                                                            monthNames: e.monthNames,
                                                            monthNamesShort: e.monthNamesShort,
                                                            onDayClick: a._onNavDayClick,
                                                            rtl: e.rtl,
                                                            selectedDates: e.selectedDates,
                                                            showOuter: !0,
                                                            showWeekDays: !a._showDaysTop,
                                                            theme: e.theme,
                                                            timezonePlugin: e.timezonePlugin,
                                                            todayText: e.todayText,
                                                        })
                                                    );
                                                },
                                                maxIndex: a._maxMonthIndex,
                                                minIndex: a._minMonthIndex,
                                                onGestureEnd: a._onGestureEnd,
                                                onIndexChange: a._onMonthPageChange,
                                                selectedIndex: a._monthIndex,
                                            },
                                            m
                                        )
                                    )
                                )
                        );
                    return qa(
                        "div",
                        { className: a._cssClass, ref: a._setEl, style: a._dim, onClick: xe },
                        qa(
                            "div",
                            { className: "mbsc-calendar-wrapper mbsc-flex-col" + a._theme + a._hb + (e.hasContent || !e.showCalendar ? " mbsc-calendar-wrapper-fixed mbsc-flex-none" : " mbsc-flex-1-1") },
                            qa(
                                "div",
                                { className: "mbsc-calendar-header" + a._theme + a._hb + (a._showDaysTop ? " mbsc-calendar-header-vertical" : ""), ref: a._setHeader },
                                e.showControls &&
                                    (function () {
                                        var t, n;
                                        if (e.renderHeader) _e((t = e.renderHeader())) && (t !== a._headerHTML && ((a._headerHTML = t), (a._shouldEnhanceHeader = !0)), (n = a._safeHtml(t)));
                                        else {
                                            var s = a._pageNr > 1;
                                            t = qa(
                                                Za,
                                                null,
                                                qa(or, { className: "mbsc-flex mbsc-flex-1-1 mbsc-calendar-title-wrapper" }),
                                                qa(sr, { className: "mbsc-calendar-button-prev" + (s ? " mbsc-calendar-button-prev-multi" : "") }),
                                                e.showToday && qa(rr, { className: "mbsc-calendar-header-today" }),
                                                qa(ir, { className: "mbsc-calendar-button-next" + (s ? " mbsc-calendar-button-next-multi" : "") })
                                            );
                                        }
                                        var i = qa("div", { className: "mbsc-calendar-controls mbsc-flex" + a._theme, dangerouslySetInnerHTML: n }, t);
                                        return qa(Qi.Provider, { children: i, value: { instance: a } });
                                    })(),
                                u
                            ),
                            qa(
                                "div",
                                c({ className: "mbsc-calendar-body mbsc-flex-col mbsc-flex-1-1" + a._theme, ref: a._setBody }, d),
                                e.showCalendar &&
                                    qa(
                                        "div",
                                        { className: "mbsc-calendar-body-inner mbsc-flex-col mbsc-flex-1-1" + (r ? " mbsc-calendar-body-inner-variable" : "") },
                                        a._isGrid
                                            ? qa(
                                                  "div",
                                                  { "aria-hidden": o ? "true" : ie, className: "mbsc-calendar-grid mbsc-flex-1-1 mbsc-flex-col" + a._theme + a._hb },
                                                  a._monthsMulti.map(function (t, n) {
                                                      return qa(
                                                          "div",
                                                          { key: n, className: "mbsc-calendar-grid-row mbsc-flex mbsc-flex-1-1" },
                                                          t.map(function (t, n) {
                                                              return qa(
                                                                  "div",
                                                                  { key: n, className: "mbsc-calendar-grid-item mbsc-flex-col mbsc-flex-1-1" + a._theme },
                                                                  qa("div", { className: "mbsc-calendar-month-title" + a._theme }, e.monthNames[new Date(t).getMonth()]),
                                                                  h(t, { isActive: !0 })
                                                              );
                                                          })
                                                      );
                                                  })
                                              )
                                            : r
                                            ? qa(
                                                  "div",
                                                  { "aria-hidden": o ? "true" : ie, className: "mbsc-calendar-slide mbsc-calendar-slide-active " + a._getPickerClass(_s) },
                                                  h(+e.navService.firstDay, {
                                                      dragData: e.dragData,
                                                      dragToCreate: e.dragToCreate,
                                                      dragToMove: e.dragToMove,
                                                      dragToResize: e.dragToResize,
                                                      isActive: !0,
                                                      onLabelUpdateEnd: e.onLabelUpdateEnd,
                                                      onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                                      onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                                      onLabelUpdateMove: e.onLabelUpdateMove,
                                                      onLabelUpdateStart: e.onLabelUpdateStart,
                                                  })
                                              )
                                            : e.selectView === _s &&
                                              qa(
                                                  "div",
                                                  c({ "aria-hidden": o ? "true" : ie, className: a._getPickerClass(_s) }, l),
                                                  qa(
                                                      Mr,
                                                      c({}, m, {
                                                          itemNr: a._pageNr,
                                                          itemSize: t.pageSize / a._pageNr,
                                                          itemRenderer: function (t, n) {
                                                              var s = t.key,
                                                                  i = s >= a._pageIndex && s < a._pageIndex + a._pageNr && a._view === _s,
                                                                  r = {
                                                                      dragData: e.dragData,
                                                                      dragToCreate: e.dragToCreate,
                                                                      dragToMove: e.dragToMove,
                                                                      dragToResize: e.dragToResize,
                                                                      isActive: i,
                                                                      onLabelUpdateEnd: e.onLabelUpdateEnd,
                                                                      onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                                                      onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                                                      onLabelUpdateMove: e.onLabelUpdateMove,
                                                                      onLabelUpdateStart: e.onLabelUpdateStart,
                                                                  };
                                                              return qa(
                                                                  "div",
                                                                  { className: "mbsc-calendar-slide" + (i ? " mbsc-calendar-slide-active" : "") + a._theme + a._rtl, key: s, style: a._getPageStyle(s, n, a._pageIndex, a._pageNr) },
                                                                  h(a._getPageDay(s), r)
                                                              );
                                                          },
                                                          maxIndex: a._maxIndex,
                                                          minIndex: a._minIndex,
                                                          mouseSwipe: e.mouseSwipe,
                                                          onAnimationEnd: a._onAnimationEnd,
                                                          onGestureStart: a._onGestureStart,
                                                          onIndexChange: a._onPageChange,
                                                          onStart: a._onStart,
                                                          selectedIndex: a._pageIndex,
                                                          swipe: e.swipe,
                                                      })
                                                  )
                                              ),
                                        !a._hasPicker && _
                                    )
                            )
                        ),
                        n,
                        a._hasPicker &&
                            qa(
                                _r,
                                {
                                    anchor: a._pickerBtn,
                                    closeOnScroll: !0,
                                    contentPadding: !1,
                                    context: e.context,
                                    cssClass: "mbsc-calendar-popup",
                                    display: "anchored",
                                    isOpen: a._view !== _s,
                                    locale: e.locale,
                                    onClose: a._onPickerClose,
                                    onOpen: a._onPickerOpen,
                                    rtl: e.rtl,
                                    scrollLock: !1,
                                    showOverlay: !1,
                                    theme: e.theme,
                                    themeVariant: e.themeVariant,
                                },
                                qa(
                                    "div",
                                    c({}, d),
                                    qa(
                                        "div",
                                        { className: "mbsc-calendar-controls mbsc-flex" + a._theme },
                                        qa(
                                            "div",
                                            { "aria-live": "polite", className: "mbsc-calendar-picker-button-wrapper mbsc-calendar-title-wrapper mbsc-flex mbsc-flex-1-1" + a._theme },
                                            qa(Gi, { className: "mbsc-calendar-button", onClick: a._onPickerBtnClick, theme: e.theme, themeVariant: e.themeVariant, type: "button", variant: "flat" }, a._viewTitle)
                                        ),
                                        qa(Gi, {
                                            className: "mbsc-calendar-button",
                                            ariaLabel: e.prevPageText,
                                            disabled: a._isPrevDisabled(!0),
                                            iconSvg: a._prevIcon,
                                            onClick: a.prevPage,
                                            theme: e.theme,
                                            themeVariant: e.themeVariant,
                                            type: "button",
                                            variant: "flat",
                                        }),
                                        qa(Gi, {
                                            className: "mbsc-calendar-button",
                                            ariaLabel: e.nextPageText,
                                            disabled: a._isNextDisabled(!0),
                                            iconSvg: a._nextIcon,
                                            onClick: a.nextPage,
                                            theme: e.theme,
                                            themeVariant: e.themeVariant,
                                            type: "button",
                                            variant: "flat",
                                        })
                                    ),
                                    _
                                )
                            )
                    );
                })(e, t, this, e.children);
            }),
            (t.prototype._updated = function () {
                e.prototype._updated.call(this), this._shouldEnhanceHeader && (Nn(this._headerElement, { view: this }), (this._shouldEnhanceHeader = !1));
            }),
            t
        );
    })(lr);
    var Ir = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._instanceService = new Pi()), t;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return (function (e, t) {
                    return qa(Nr, {
                        ref: t._setCal,
                        refDate: e.refDate,
                        activeDate: e.active,
                        amText: e.amText,
                        cssClass: t._className + " mbsc-flex-1-1 mbsc-calendar-" + e.display,
                        calendarScroll: e.calendarScroll,
                        calendarType: e.calendarType,
                        colors: e.colors,
                        context: e.context,
                        dataTimezone: e.dataTimezone,
                        displayTimezone: e.displayTimezone,
                        timezonePlugin: e.timezonePlugin,
                        downIcon: e.downIcon,
                        exclusiveEndDates: e.exclusiveEndDates,
                        hoverEnd: e.hoverEnd,
                        hoverStart: e.hoverStart,
                        invalid: e.invalid,
                        instanceService: t._instanceService,
                        isPicker: !0,
                        labels: e.labels,
                        marked: e.marked,
                        max: e.max,
                        min: e.min,
                        mousewheel: e.mousewheel,
                        navService: t._navService,
                        nextIconH: e.nextIconH,
                        nextIconV: e.nextIconV,
                        nextPageText: e.nextPageText,
                        noOuterChange: e.selectRange,
                        onActiveChange: t._onActiveChange,
                        onCellHoverIn: e.onCellHoverIn,
                        onCellHoverOut: e.onCellHoverOut,
                        onDayClick: t._onDayClick,
                        onDayHoverIn: e.onDayHoverIn,
                        onDayHoverOut: e.onDayHoverOut,
                        onLabelClick: e.onLabelClick,
                        onPageChange: e.onPageChange,
                        onPageLoaded: e.onPageLoaded,
                        onPageLoading: e.onPageLoading,
                        onTodayClick: t._onTodayClick,
                        pages: e.pages,
                        pmText: e.pmText,
                        prevIconH: e.prevIconH,
                        prevIconV: e.prevIconV,
                        prevPageText: e.prevPageText,
                        renderDay: e.renderDay,
                        renderDayContent: e.renderDayContent,
                        renderHeader: e.renderCalendarHeader,
                        rangeEnd: e.rangeEnd,
                        rangeStart: e.rangeStart,
                        rtl: e.rtl,
                        selectedDates: t._tempValueRep,
                        selectView: e.selectView,
                        showCalendar: !0,
                        showControls: e.showControls,
                        showOuterDays: e.showOuterDays,
                        showToday: !1,
                        showWeekNumbers: e.showWeekNumbers,
                        size: e.size,
                        theme: e.theme,
                        themeVariant: e.themeVariant,
                        update: t._update,
                        upIcon: e.upIcon,
                        valid: e.valid,
                        weeks: e.weeks,
                        width: e.width,
                        getDate: e.getDate,
                        getDay: e.getDay,
                        getMaxDayOfMonth: e.getMaxDayOfMonth,
                        getMonth: e.getMonth,
                        getWeekNumber: e.getWeekNumber,
                        getYear: e.getYear,
                        dateFormat: e.dateFormat,
                        dayNames: e.dayNames,
                        dayNamesMin: e.dayNamesMin,
                        dayNamesShort: e.dayNamesShort,
                        eventText: e.eventText,
                        eventsText: e.eventsText,
                        firstDay: e.firstDay,
                        fromText: e.fromText,
                        monthNames: e.monthNames,
                        monthNamesShort: e.monthNamesShort,
                        moreEventsPluralText: e.moreEventsPluralText,
                        moreEventsText: e.moreEventsText,
                        todayText: e.todayText,
                        toText: e.toText,
                        weekText: e.weekText,
                        yearSuffix: e.yearSuffix,
                    });
                })(e, this);
            }),
            t
        );
    })(Yi);
    function Lr(e, t, a, n) {
        var s = e.min === ie ? -1 / 0 : e.min,
            i = e.max === ie ? 1 / 0 : e.max,
            r = Yr(e, t),
            o = Pr(e, r),
            l = o,
            c = o,
            d = 0,
            h = 0;
        if (a && a.get(o)) {
            for (; r - d >= s && a.get(l) && d < 100; ) l = Pr(e, r - ++d);
            for (; r + h < i && a.get(c) && h < 100; ) c = Pr(e, r + ++h);
            if (a.get(l) && a.get(c)) return o;
            o = ((h < d && h && -1 !== n) || !d || r - d < 0 || 1 === n) && !a.get(c) ? c : l;
        }
        return o;
    }
    function Hr(e) {
        return e !== ie ? (e.value !== ie ? e.value : e.display !== ie ? e.display : e) : e;
    }
    function Or(e, t) {
        if (e.getItem) return e.getItem(t);
        var a = e.data || [],
            n = a.length,
            s = t % n;
        return e._circular ? a[s >= 0 ? s : s + n] : a[ce(t, 0, n - 1)];
    }
    function Yr(e, t) {
        var a = e.multiple ? (t && t.length && t[0]) || ie : t;
        return (e.getIndex ? +e.getIndex(t) : e._map.get(a)) || 0;
    }
    function Pr(e, t) {
        return Hr(Or(e, t));
    }
    var Fr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._indexes = []),
                    (t._activeIndexes = []),
                    (t._wheels = []),
                    (t._batches = []),
                    (t._lastIndexes = []),
                    (t._onSet = function () {
                        t._setOrUpdate();
                    }),
                    (t._onActiveChange = function (e) {
                        var a = e.wheel,
                            n = e.index,
                            s = a._key;
                        t._activeIndexes[s] = n;
                        var i = t._indexes,
                            r = i[s];
                        t._scroll3d ? (r = n) : n - r >= t._rows ? r++ : n < r && r--, (i[s] = r), t.forceUpdate();
                    }),
                    (t._onWheelIndexChange = function (e) {
                        var a = t.s,
                            n = e.wheel,
                            s = n._key,
                            i = n.multiple,
                            r = Pr(n, e.index),
                            o = t._disabled && t._disabled[s] && t._disabled[s].get(r),
                            l = [],
                            c = a.selectOnScroll;
                        (c || !e.click) &&
                            ((t._lastIndexes[s] = t._indexes[s] = e.index),
                            t._indexes.forEach(function (e, a) {
                                var n = t._wheelMap[a],
                                    s = n.data ? n.data.length : 0;
                                (t._batches[a] = s ? Ce(e / s) : 0), (l[a] = s);
                            })),
                            (t._activeIndexes[s] = e.index);
                        var d = t._get(t._tempValueRep),
                            h = !!e.click && !o,
                            u = c || h;
                        if (i) {
                            if (h) {
                                var m = (t._tempValueRep[s] || []).slice();
                                !1 === e.selected ? m.push(r) : !0 === e.selected && m.splice(m.indexOf(r), 1), (t._tempValueRep[s] = m);
                            }
                        } else u && (t._tempValueRep[s] = r);
                        if (a.onWheelMove && e.index !== ie) {
                            var _ = a.onWheelMove({ dataItem: Or(n, e.index), selection: u, wheelIndex: s });
                            _ &&
                                _.forEach(function (e, a) {
                                    if ((e !== ie && (t._tempValueRep[a] = e), !u)) {
                                        var n = t._wheelMap[a],
                                            s = Yr(n, e);
                                        t._constrainIndex(s, n);
                                    }
                                });
                        }
                        u && t._validate(s, e.diff > 0 ? 1 : -1),
                            c &&
                                t._tempValueRep.forEach(function (e, a) {
                                    var n = t._wheelMap[a],
                                        s = n.data ? n.data.length : 0,
                                        i = t._indexes[a],
                                        r = Yr(n, e) + t._batches[a] * s;
                                    (t._activeIndexes[a] = t._lastIndexes[a] = t._indexes[a] = r), (n._offset = s !== l[a] ? r - i : 0);
                                });
                        var p = t._get(t._tempValueRep),
                            v = !t._valueEquals(d, p);
                        v || (e.click && t._live && !t._valueEquals(t.value, p)) ? t._setOrUpdate(!v) : t.forceUpdate(), t._live && h && n.closeOnTap && t.close();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._initWheels = function () {
                    var e = this,
                        t = 0,
                        a = this.s.wheels || [];
                    (this._wheelMap = []),
                        a.forEach(function (a) {
                            a.forEach(function (a) {
                                e._initWheel(a, t), (e._wheelMap[t] = a), t++;
                            });
                        }),
                        (this._wheels = a);
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return !!e.shouldValidate && e.shouldValidate(e, t);
                }),
                (t.prototype._valueEquals = function (e, t) {
                    return this.s.valueEquality ? this.s.valueEquality(e, t) : e === t;
                }),
                (t.prototype._render = function (t, a) {
                    var n = this,
                        s = this.props || {},
                        i = this._respProps || {},
                        r = this._prevS,
                        o = !!this._touchUi && t.circular,
                        l = this._touchUi ? t.rows : i.rows || s.rows || 7;
                    if (
                        ((this._displayStyle = t.displayStyle || t.display),
                        (this._scroll3d = t.scroll3d && this._touchUi && Da),
                        (t.itemHeight !== r.itemHeight || l !== this._rows) && ((this._rows = l), (this._lineStyle = { height: t.itemHeight + "px" }), this._scroll3d))
                    ) {
                        var c = "translateZ(" + ((t.itemHeight * l) / 2 + 3) + "px";
                        (this._overlayStyle = {}), (this._overlayStyle[xa + "transform"] = c), (this._lineStyle[xa + "transform"] = "translateY(-50%) " + c);
                    }
                    (t.wheels === r.wheels && o === this._circular) || ((this._batches = []), (this._shouldSetIndex = !0), (this._circular = o), this._initWheels()),
                        e.prototype._render.call(this, t, a),
                        this._shouldSetIndex && (this._setIndexes(), (this._shouldSetIndex = this._indexFromValue = !1)),
                        t.wheels !== r.wheels &&
                            r.wheels !== ie &&
                            setTimeout(function () {
                                for (var e = 0, t = n._wheelMap; e < t.length; e++) {
                                    var a = t[e];
                                    n._onWheelIndexChange({ diff: 0, index: n._indexes[a._key], wheel: a });
                                }
                            });
                }),
                (t.prototype._writeValue = function (t, a, n) {
                    return this.s.writeValue ? this.s.writeValue(t, a, n) : e.prototype._writeValue.call(this, t, a, n);
                }),
                (t.prototype._copy = function (e) {
                    return e.slice(0);
                }),
                (t.prototype._format = function (e) {
                    return this.s.formatValue ? this.s.formatValue(e) : e.join(" ");
                }),
                (t.prototype._get = function (e) {
                    return this.s.getValue ? this.s.getValue(e) : e;
                }),
                (t.prototype._parse = function (e) {
                    if (this.s.parseValue) return this.s.parseValue(e);
                    var t = [],
                        a = [],
                        n = 0;
                    return (
                        null !== e && e !== ie && (a = (e + "").split(" ")),
                        this._wheels.forEach(function (e) {
                            e.forEach(function (e) {
                                for (var s = e.data || [], i = s.length, r = Hr(s[0]), o = 0; r != a[n] && o < i; ) (r = Hr(s[o])), o++;
                                t.push(r), n++;
                            });
                        }),
                        t
                    );
                }),
                (t.prototype._validate = function (e, t) {
                    var a = this;
                    if (this.s.validate) {
                        var n = this.s.validate.call(this._el, { direction: t, index: e, values: this._tempValueRep.slice(0), wheels: this._wheelMap });
                        (this._disabled = n.disabled),
                            n.init && this._initWheels(),
                            n.indexes &&
                                n.indexes.forEach(function (e, t) {
                                    if (e !== ie) {
                                        var n = a._wheelMap[t],
                                            s = Yr(n, e);
                                        a._constrainIndex(s, n);
                                    }
                                }),
                            n.valid
                                ? (this._tempValueRep = n.valid.slice(0))
                                : this._wheelMap.forEach(function (e, n) {
                                      a._tempValueRep[n] = Lr(e, a._tempValueRep[n], a._disabled && a._disabled[n], t);
                                  });
                    }
                }),
                (t.prototype._onOpen = function () {
                    (this._batches = []), (this._shouldSetIndex = !0), (this._indexFromValue = !0);
                }),
                (t.prototype._onParse = function () {
                    this._shouldSetIndex = !0;
                }),
                (t.prototype._initWheel = function (e, t) {
                    var a = this._circular;
                    (e._key = t),
                        (e._map = new Map()),
                        (e._circular = a === ie ? (e.circular === ie ? e.data && e.data.length > this._rows : e.circular) : he(a) ? a[t] : a),
                        e.data &&
                            ((e.min = e._circular ? ie : 0),
                            (e.max = e._circular ? ie : e.data.length - 1),
                            e.data.forEach(function (t, a) {
                                e._map.set(Hr(t), a);
                            }));
                }),
                (t.prototype._setIndexes = function () {
                    var e = this,
                        t = this._indexes || [];
                    (this._indexes = []),
                        (this._activeIndexes = []),
                        this._tempValueRep.forEach(function (a, n) {
                            var s = e._wheelMap[n],
                                i = s.data ? s.data.length : 0,
                                r = Yr(s, a);
                            if (e.s.selectOnScroll) e._activeIndexes[n] = e._indexes[n] = r + (e._batches[n] || 0) * i;
                            else {
                                var o = r;
                                e._indexFromValue ||
                                    ((o = e._prevS.wheels !== e.s.wheels ? 0 : t[n]) !== ie &&
                                        (o =
                                            (function (e, t) {
                                                if (e.getItem && e.getIndex) return e.getIndex(Hr(e.getItem(t)));
                                                var a = (e.data || []).length,
                                                    n = t % a;
                                                return a ? (n >= 0 ? n : n + a) : 0;
                                            })(s, o) +
                                            (e._batches[n] || 0) * i)),
                                    e._constrainIndex(o, s);
                            }
                        });
                }),
                (t.prototype._constrainIndex = function (e, t) {
                    var a = t._key;
                    e !== ie && t.data ? (t.spaceAround || (e = ce(e, 0, Math.max(t.data.length - this._rows, 0))), (this._activeIndexes[a] = this._indexes[a] = e)) : (this._activeIndexes[a] = this._indexes[a] = this._lastIndexes[a] || 0);
                }),
                (t.defaults = { itemHeight: 40, rows: 5, selectOnScroll: !0, showOnClick: !0 }),
                (t._name = "Scroller"),
                t
            );
        })(Si),
        zr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function () {
                        var e = t.s;
                        e.text === ie || e.isGroup || t._hook("onClick", { index: e.index, selected: e.selected, disabled: e.disabled });
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._el, {
                        click: !0,
                        keepFocus: !1,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function () {
                            e.s.text !== ie && e.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            e.s.text !== ie && e.setState({ hasHover: !1 });
                        },
                        onKeyDown: function (t) {
                            (t.keyCode === ai || (!e.s.multiple && t.keyCode === ti)) && e._onClick();
                        },
                        onPress: function () {
                            e.s.text !== ie && e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.s.text !== ie && e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                (t.prototype._render = function (e, t) {
                    var a = e.height;
                    (this._cssClass =
                        "mbsc-scroller-wheel-" +
                        (e.isGroup ? "header" : "item") +
                        this._theme +
                        this._rtl +
                        (e.checkmark && !e.isGroup ? " mbsc-wheel-item-checkmark" : "") +
                        (e.is3d ? " mbsc-scroller-wheel-item-3d" : "") +
                        (e.scroll3d && !e.is3d ? " mbsc-scroller-wheel-item-2d" : "") +
                        (e.selected && !e.is3d ? " mbsc-selected" : "") +
                        (e.selected && e.is3d ? " mbsc-selected-3d" : "") +
                        (e.disabled ? " mbsc-disabled" : "") +
                        (e.multiple && !e.isGroup ? " mbsc-wheel-item-multi" : "") +
                        (t.hasHover ? " mbsc-hover" : "") +
                        (t.hasFocus ? " mbsc-focus" : "") +
                        (t.isActive ? " mbsc-active" : "")),
                        (this._style = { height: a + "px", lineHeight: a + "px" }),
                        (this._checkmarkClass = this._theme + this._rtl + " mbsc-wheel-checkmark" + (e.selected ? " mbsc-selected" : "")),
                        e.is3d && ((this._transform = "rotateX(" + (((e.offset - e.index) * e.angle3d) % 360) + "deg) translateZ(" + (a * e.rows) / 2 + "px)"), (this._style[xa + "transform"] = this._transform));
                }),
                t
            );
        })(Xn);
    var Vr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var a;
                        if (e.renderItem && e.data !== ie) {
                            var n = e.renderItem(e.data),
                                s = _e(n) ? { __html: n } : ie;
                            a = s ? qa("div", { dangerouslySetInnerHTML: s }) : qa("div", null, n);
                        } else a = e.text;
                        return qa(
                            "div",
                            {
                                "aria-disabled": e.disabled ? "true" : ie,
                                "aria-hidden": a === ie || e.is3d ? "true" : ie,
                                "aria-selected": e.selected ? "true" : ie,
                                ref: t._setEl,
                                tabIndex: e.active ? 0 : ie,
                                className: t._cssClass,
                                role: "option",
                                style: t._style,
                                onClick: t._onClick,
                            },
                            qa("div", { dangerouslySetInnerHTML: t.textParam }),
                            e.checkmark && qa("span", { className: t._checkmarkClass }),
                            a
                        );
                    })(e, this);
                }),
                t
            );
        })(zr),
        Rr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onIndexChange = function (e) {
                        (e.wheel = t.s.wheel), t._hook("onIndexChange", e);
                    }),
                    (t._onItemClick = function (e) {
                        t._hook("onIndexChange", { click: !0, index: e.index, wheel: t.s.wheel, selected: e.selected });
                    }),
                    (t._onKeyDown = function (e) {
                        var a = 0;
                        e.keyCode === li ? (a = -1) : e.keyCode === di && (a = 1);
                        var n = t.s,
                            s = n.activeIndex + a,
                            i = !(s < n.minIndex || s > n.maxIndex);
                        if ((a && e.preventDefault(), a && i)) {
                            var r = n.selectOnScroll ? "onIndexChange" : "onActiveChange";
                            (t._shouldFocus = !0), t._hook(r, { diff: a, index: s, wheel: n.wheel });
                        } else e.keyCode === ti && n.multiple && t._hook("onSet", {});
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._getText = function (e) {
                    return e !== ie ? (e.display !== ie ? e.display : e) : ie;
                }),
                (t.prototype._getValue = function (e) {
                    return e ? (e.value !== ie ? e.value : e.display !== ie ? e.display : e) : e;
                }),
                (t.prototype._isActive = function (e, t, a) {
                    var n = this.s,
                        s = n.scroll3d && n.multiple ? a : !a;
                    return n.activeIndex === e.key && t && s;
                }),
                (t.prototype._isSelected = function (e) {
                    var t = this.s,
                        a = t.selectedValues,
                        n = this._getValue(e.data);
                    return t.multiple ? !(!a || !a.indexOf) && a.indexOf(n) >= 0 : t.selectOnScroll ? e.key === t.selectedIndex : n !== ie && n === a;
                }),
                (t.prototype._isDisabled = function (e) {
                    var t = this.s.disabled,
                        a = e && e.disabled,
                        n = this._getValue(e);
                    return !!(a || (t && t.get(n)));
                }),
                (t.prototype._render = function (e) {
                    var t = e.rows,
                        a = e.itemHeight,
                        n = e.wheel._key,
                        s = 2 * Te((a - 0.03 * ((a * t) / 2 + 3)) / 2);
                    (this._items = e.wheel.getItem || e.wheel.data || []),
                        (this._batchSize3d = Te(1.8 * t)),
                        (this._angle3d = 360 / (2 * this._batchSize3d)),
                        (this._style = { height: 2 * Te((t * a * (e.scroll3d ? 1.1 : 1)) / 2) + "px" }),
                        (this._itemNr = e.wheel.spaceAround ? 1 : t),
                        (this._innerStyle = { height: (e.scroll3d ? s : e.wheel.spaceAround ? a : a * t) + "px" }),
                        (this._wheelStyle = e.wheelWidth
                            ? { width: (he(e.wheelWidth) ? e.wheelWidth[n] : e.wheelWidth) + "px" }
                            : { maxWidth: (he(e.maxWheelWidth) ? e.maxWheelWidth[n] : e.maxWheelWidth) + "px", minWidth: (he(e.minWheelWidth) ? e.minWheelWidth[n] : e.minWheelWidth) + "px" }),
                        e.scroll3d && (this._innerStyle[xa + "transform"] = "translateY(-50%) translateZ(" + ((a * t) / 2 + 3) + "px");
                }),
                (t.prototype._updated = function () {
                    if (this._shouldFocus) {
                        var e = this._el.querySelector('[tabindex="0"]');
                        e &&
                            setTimeout(function () {
                                e.focus();
                            }),
                            (this._shouldFocus = !1);
                    }
                }),
                t
            );
        })(Xn);
    var Ar,
        Wr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var a,
                            n = (((a = {}).onKeyDown = t._onKeyDown), a);
                        return qa(
                            "div",
                            c(
                                {
                                    "aria-multiselectable": e.multiple ? "true" : ie,
                                    className: "mbsc-scroller-wheel-wrapper mbsc-scroller-wheel-wrapper-" + e.wheel._key + " " + (e.wheel.cssClass || "") + (e.scroll3d ? " mbsc-scroller-wheel-wrapper-3d" : "") + t._theme + t._rtl,
                                    ref: t._setEl,
                                    role: "listbox",
                                    style: t._wheelStyle,
                                },
                                n
                            ),
                            qa(Mr, {
                                batchSize3d: t._batchSize3d,
                                className: "mbsc-scroller-wheel" + (e.scroll3d ? " mbsc-scroller-wheel-3d" : "") + t._theme,
                                innerClass: "mbsc-scroller-wheel-cont mbsc-scroller-wheel-cont-" + e.display + (e.scroll3d ? " mbsc-scroller-wheel-cont-3d" : "") + (e.multiple ? " mbsc-scroller-wheel-multi" : "") + t._theme,
                                innerStyles: t._innerStyle,
                                items: t._items,
                                itemSize: e.itemHeight,
                                itemRenderer: function (a, n, s) {
                                    if (a !== ie) {
                                        var i = t._getText(a.data);
                                        return qa(Vr, {
                                            active: t._isActive(a, i, s),
                                            angle3d: t._angle3d,
                                            data: a.data,
                                            disabled: t._isDisabled(a.data),
                                            height: e.itemHeight,
                                            index: a.key,
                                            is3d: s,
                                            isGroup: a.data && a.data.isGroup,
                                            key: a.key,
                                            multiple: e.multiple,
                                            onClick: t._onItemClick,
                                            offset: n,
                                            checkmark: e.wheel.checkmark,
                                            renderItem: e.renderItem,
                                            rows: e.rows,
                                            rtl: e.rtl,
                                            scroll3d: e.scroll3d,
                                            selected: t._isSelected(a),
                                            text: i,
                                            theme: e.theme,
                                        });
                                    }
                                    return null;
                                },
                                itemNr: t._itemNr,
                                margin: !0,
                                maxIndex: e.maxIndex,
                                minIndex: e.minIndex,
                                onIndexChange: t._onIndexChange,
                                offset: e.wheel._offset,
                                rtl: e.rtl,
                                scroll3d: e.scroll3d,
                                scrollBar: !t._touchUi,
                                selectedIndex: e.selectedIndex,
                                snap: !0,
                                spaceAround: e.wheel.spaceAround,
                                styles: t._style,
                                visibleSize: e.rows,
                            })
                        );
                    })(e, this);
                }),
                t
            );
        })(Rr),
        Ur = new m(),
        Br = 0;
    function jr() {
        clearTimeout(Ar),
            (Ar = setTimeout(function () {
                Ur.next();
            }, 100));
    }
    function Kr(e) {
        try {
            return Pa(e, "*:-webkit-autofill");
        } catch (e) {
            return !1;
        }
    }
    var Xr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._tag = "input"),
                (t._onClick = function () {
                    t._hidePass = !t._hidePass;
                }),
                (t._onMouseDown = function (e) {
                    t.s.tags && (t._preventFocus = !0);
                }),
                (t._onTagClear = function (e, a) {
                    if ((e.stopPropagation(), e.preventDefault(), !t.s.disabled)) {
                        var n = t.s.pickerValue.slice();
                        n.splice(a, 1), za(t._el, Os, n);
                    }
                }),
                (t._sizeTextArea = function () {
                    var e,
                        a,
                        n,
                        s = t._el,
                        i = t.s.rows;
                    s.offsetHeight &&
                        ((s.style.height = ""),
                        (n = s.scrollHeight - s.offsetHeight),
                        (e = s.offsetHeight + (n > 0 ? n : 0)),
                        (a = Math.round(e / 24)) > i ? ((e = 24 * i + (e - 24 * a)), (s.style.overflow = "auto")) : (s.style.overflow = ""),
                        e && (s.style.height = e + "px"));
                }),
                (t._onAutoFill = function () {
                    "floating" === t.s.labelStyle && Kr(t._el) && t.setState({ isFloatingActive: !0 });
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._change = function (e) {}),
            (t.prototype._checkFloating = function () {
                var e = this,
                    t = this._el,
                    a = this.s,
                    n = Kr(t),
                    s = this.state.hasFocus || n || !pe(this.value);
                if (t && "floating" === a.labelStyle) {
                    if ("select" === this._tag) {
                        var i = t,
                            r = i.options[0];
                        s = !!(s || i.multiple || i.value || (i.selectedIndex > -1 && r && r.label));
                    } else if (this.value === ie) {
                        s = !(!s && !t.value);
                    }
                    (this._valueChecked = !0),
                        Ee(this, function () {
                            e.setState({ isFloatingActive: s });
                        });
                }
            }),
            (t.prototype._mounted = function () {
                var e,
                    t = this,
                    a = this.s,
                    n = this._el;
                Sa(n, Ls, this._onAutoFill),
                    "textarea" === this._tag && (Sa(n, Rs, this._sizeTextArea), (this._unsubscribe = ((e = this._sizeTextArea), Br || Sa(ra, Js, jr), Br++, Ur.subscribe(e)))),
                    (this._unlisten = Ji(n, {
                        keepFocus: !0,
                        onBlur: function () {
                            t.setState({ hasFocus: !1, isFloatingActive: !!n.value });
                        },
                        onChange: function (e) {
                            if ("file" === a.type) {
                                for (var n = [], s = 0, i = e.target.files; s < i.length; s++) {
                                    var r = i[s];
                                    n.push(r.name);
                                }
                                t.setState({ files: n.join(", ") });
                            }
                            a.tags && a.value === ie && a.defaultValue === ie && t.setState({ value: e.target.value }), t._checkFloating(), t._change(e.target.value), t._emit("onChange", e);
                        },
                        onFocus: function () {
                            t._preventFocus || t.setState({ hasFocus: !0, isFloatingActive: !0 }), (t._preventFocus = !1);
                        },
                        onHoverIn: function () {
                            t._disabled || t.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            t.setState({ hasHover: !1 });
                        },
                        onInput: function (e) {
                            t._change(e.target.value);
                        },
                    }));
            }),
            (t.prototype._render = function (e, t) {
                var a = !(!e.endIconSvg && !e.endIcon),
                    n = e.pickerValue,
                    s = !(!e.startIconSvg && !e.startIcon),
                    i = e.label !== ie || e.hasChildren,
                    r = e.error,
                    o = e.rtl ? "right" : "left",
                    l = e.rtl ? "left" : "right",
                    c = e.inputStyle,
                    d = e.labelStyle,
                    h = "floating" === d,
                    u = !(!h || !i || (!t.isFloatingActive && pe(e.value))),
                    m = e.disabled === ie ? t.disabled : e.disabled,
                    _ = this._prevS,
                    p = e.modelValue !== ie ? e.modelValue : e.value,
                    v = p !== ie ? p : t.value !== ie ? t.value : e.defaultValue,
                    f = this._theme + this._rtl + (r ? " mbsc-error" : "") + (m ? " mbsc-disabled" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus && !m ? " mbsc-focus" : "");
                "file" !== e.type ||
                    a ||
                    ((e.endIconSvg =
                        '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>'),
                    (a = !0)),
                    e.tags &&
                        (pe(n) && (n = []),
                        he(n) || (n = [n]),
                        (this._tagsArray = e.pickerMap
                            ? n.map(function (t) {
                                  return e.pickerMap.get(t);
                              })
                            : pe(v)
                            ? []
                            : v.split(", "))),
                    e.passwordToggle &&
                        ((a = !0),
                        (this._passIconClass = f + " mbsc-toggle-icon mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : "")),
                        (this._hidePass = this._hidePass === ie ? "password" === e.type : this._hidePass)),
                    (this._hasStartIcon = s),
                    (this._hasEndIcon = a),
                    (this._hasError = r),
                    (this._disabled = m),
                    (this._value = v),
                    (this._cssClass =
                        this._className +
                        this._hb +
                        f +
                        " mbsc-form-control-wrapper mbsc-textfield-wrapper mbsc-font mbsc-textfield-wrapper-" +
                        c +
                        (m ? " mbsc-disabled" : "") +
                        (i ? " mbsc-textfield-wrapper-" + d : "") +
                        (s ? " mbsc-textfield-wrapper-has-icon-" + o + " " : "") +
                        (a ? " mbsc-textfield-wrapper-has-icon-" + l + " " : "")),
                    i &&
                        (this._labelClass =
                            f +
                            " mbsc-label mbsc-label-" +
                            d +
                            " mbsc-label-" +
                            c +
                            "-" +
                            d +
                            (s ? " mbsc-label-" + c + "-" + d + "-has-icon-" + o + " " : "") +
                            (a ? " mbsc-label-" + c + "-" + d + "-has-icon-" + l + " " : "") +
                            (h && this._animateFloating ? " mbsc-label-floating-animate" : "") +
                            (u ? " mbsc-label-floating-active" : "")),
                    (this._innerClass = f + " mbsc-textfield-inner mbsc-textfield-inner-" + c + (i ? " mbsc-textfield-inner-" + d : "")),
                    s && (this._startIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + o + " mbsc-textfield-icon-" + c + "-" + o + (i ? " mbsc-textfield-icon-" + d : "")),
                    a && (this._endIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : "")),
                    (this._nativeElmClass =
                        f +
                        " " +
                        (e.inputClass || "") +
                        " mbsc-textfield mbsc-textfield-" +
                        c +
                        (e.dropdown ? " mbsc-select" : "") +
                        (i ? " mbsc-textfield-" + d + " mbsc-textfield-" + c + "-" + d : "") +
                        (u ? " mbsc-textfield-floating-active" : "") +
                        (s ? " mbsc-textfield-has-icon-" + o + " mbsc-textfield-" + c + "-has-icon-" + o + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + o : "") : "") +
                        (a ? " mbsc-textfield-has-icon-" + l + " mbsc-textfield-" + c + "-has-icon-" + l + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + l : "") : "")),
                    ("select" === this._tag || e.dropdown) &&
                        (this._selectIconClass = "mbsc-select-icon mbsc-select-icon-" + c + this._rtl + this._theme + (i ? " mbsc-select-icon-" + d : "") + (s ? " mbsc-select-icon-" + o : "") + (a ? " mbsc-select-icon-" + l : "")),
                    ("textarea" === this._tag || e.tags) &&
                        ((this._cssClass += " mbsc-textarea-wrapper"),
                        (this._innerClass += " mbsc-textarea-inner"),
                        (this._nativeElmClass += " mbsc-textarea"),
                        "textarea" !== this._tag || (v === this._prevValue && e.inputStyle === _.inputStyle && e.labelStyle === _.labelStyle && e.rows === _.rows && e.theme === _.theme) || (this._shouldSize = !0),
                        (this._prevValue = v)),
                    e.tags && (this._innerClass += " mbsc-textfield-tags-inner"),
                    "file" === e.type && ((this._dummyElmClass = this._nativeElmClass), (this._nativeElmClass += " mbsc-textfield-file")),
                    (this._errorClass =
                        this._theme + this._rtl + " mbsc-error-message mbsc-error-message-" + c + (i ? " mbsc-error-message-" + d : "") + (s ? " mbsc-error-message-has-icon-" + o : "") + (a ? " mbsc-error-message-has-icon-" + l : "")),
                    e.notch &&
                        "outline" === c &&
                        ((this._fieldSetClass = "mbsc-textfield-fieldset" + f + (s ? " mbsc-textfield-fieldset-has-icon-" + o : "") + (a ? " mbsc-textfield-fieldset-has-icon-" + l : "")),
                        (this._legendClass = "mbsc-textfield-legend" + this._theme + (u || (i && "stacked" === d) ? " mbsc-textfield-legend-active" : ""))),
                    e.ripple && "outline" !== e.inputStyle && (this._rippleClass = "mbsc-textfield-ripple" + this._theme + (r ? " mbsc-error" : "") + (t.hasFocus ? " mbsc-textfield-ripple-active" : "")),
                    this._valueChecked && (this._animateFloating = !0);
            }),
            (t.prototype._updated = function () {
                var e = this;
                this._shouldSize &&
                    ((this._shouldSize = !1),
                    Ee(this, function () {
                        e._sizeTextArea();
                    })),
                    this._checkFloating();
            }),
            (t.prototype._destroy = function () {
                Ca(this._el, Ls, this._onAutoFill),
                    Ca(this._el, Rs, this._sizeTextArea),
                    this._unsubscribe &&
                        (function (e) {
                            Br--, Ur.unsubscribe(e), Br || Ca(ra, Js, jr);
                        })(this._unsubscribe),
                    this._unlisten && this._unlisten();
            }),
            (t.defaults = { dropdown: !1, dropdownIcon: n, hideIcon: "eye-blocked", inputStyle: "underline", labelStyle: "stacked", placeholder: "", ripple: !1, rows: 6, showIcon: "eye", type: "text" }),
            (t._name = "Input"),
            t
        );
    })(Xn);
    var Jr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._el && this._el.value;
                    },
                    set: function (e) {
                        (this._el.value = e), this._checkFloating(), "textarea" === this._tag && this._sizeTextArea();
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, a, n, s) {
                        var i,
                            r = a.props;
                        r.children;
                        var o = r.dropdown;
                        r.dropdownIcon, r.endIcon, r.endIconSrc, r.endIconSvg, r.error;
                        var l = r.errorMessage,
                            h = r.hasChildren;
                        r.hideIcon,
                            r.hideIconSvg,
                            r.inputClass,
                            r.inputStyle,
                            r.label,
                            r.labelStyle,
                            r.modelValue,
                            r.notch,
                            r.passwordToggle,
                            r.pickerMap,
                            r.pickerValue,
                            r.ripple,
                            r.rows,
                            r.rtl,
                            r.showIcon,
                            r.showIconSvg,
                            r.startIcon,
                            r.startIconSrc,
                            r.startIconSvg;
                        var u = r.tags;
                        r.theme, r.themeVariant;
                        var m = r.type,
                            _ = d(r, [
                                "children",
                                "dropdown",
                                "dropdownIcon",
                                "endIcon",
                                "endIconSrc",
                                "endIconSvg",
                                "error",
                                "errorMessage",
                                "hasChildren",
                                "hideIcon",
                                "hideIconSvg",
                                "inputClass",
                                "inputStyle",
                                "label",
                                "labelStyle",
                                "modelValue",
                                "notch",
                                "passwordToggle",
                                "pickerMap",
                                "pickerValue",
                                "ripple",
                                "rows",
                                "rtl",
                                "showIcon",
                                "showIconSvg",
                                "startIcon",
                                "startIconSrc",
                                "startIconSvg",
                                "tags",
                                "theme",
                                "themeVariant",
                                "type",
                            ]),
                            p = e.label,
                            v = (((i = {}).onMouseDown = a._onMouseDown), i),
                            f = _;
                        return qa(
                            "label",
                            c({ className: a._cssClass }, v),
                            (p || h) && qa("span", { className: a._labelClass }, h ? "" : p),
                            qa(
                                "span",
                                { className: a._innerClass },
                                "input" === a._tag &&
                                    qa("input", c({}, f, { ref: a._setEl, className: a._nativeElmClass + (e.tags ? " mbsc-textfield-hidden" : ""), disabled: a._disabled, type: e.passwordToggle ? (a._hidePass ? "password" : "text") : m })),
                                "file" === m && qa("input", { className: a._dummyElmClass, disabled: a._disabled, placeholder: e.placeholder, readOnly: !0, type: "text", value: t.files || "" }),
                                "select" === a._tag && qa("select", c({}, f, { ref: a._setEl, className: "mbsc-select" + a._nativeElmClass, disabled: a._disabled }), n),
                                "textarea" === a._tag && qa("textarea", c({}, f, { ref: a._setEl, className: a._nativeElmClass, disabled: a._disabled })),
                                u &&
                                    qa(
                                        "span",
                                        { className: "mbsc-textfield-tags" + a._nativeElmClass },
                                        a._tagsArray.length
                                            ? a._tagsArray.map(function (t, n) {
                                                  return (
                                                      t &&
                                                      qa(
                                                          "span",
                                                          { key: n, className: "mbsc-textfield-tag" + a._theme + a._rtl },
                                                          qa("span", { className: "mbsc-textfield-tag-text" + a._theme }, t),
                                                          qa(Ri, {
                                                              className: "mbsc-textfield-tag-clear",
                                                              onClick: function (e) {
                                                                  return a._onTagClear(e, n);
                                                              },
                                                              svg: e.clearIcon,
                                                              theme: e.theme,
                                                          })
                                                      )
                                                  );
                                              })
                                            : qa("span", { className: "mbsc-textfield-tags-placeholder" + a._theme }, e.placeholder)
                                    ),
                                ("select" === a._tag || o) && qa(Ri, { className: a._selectIconClass, svg: e.dropdownIcon, theme: e.theme }),
                                a._hasStartIcon && qa(Ri, { className: a._startIconClass, name: e.startIcon, svg: e.startIconSvg, theme: e.theme }),
                                a._hasEndIcon && !e.passwordToggle && qa(Ri, { className: a._endIconClass, name: e.endIcon, svg: e.endIconSvg, theme: e.theme }),
                                e.passwordToggle && qa(Ri, { onClick: a._onClick, className: a._passIconClass, name: a._hidePass ? e.showIcon : e.hideIcon, svg: a._hidePass ? e.showIconSvg : e.hideIconSvg, theme: e.theme }),
                                a._hasError && qa("span", { className: a._errorClass }, l),
                                e.notch && "outline" === e.inputStyle && qa("fieldset", { "aria-hidden": "true", className: a._fieldSetClass }, qa("legend", { className: a._legendClass }, p && "inline" !== e.labelStyle ? p : "&nbsp;")),
                                e.ripple && "outline" !== e.inputStyle && qa("span", { className: a._rippleClass })
                            )
                        );
                    })(e, t, this, e.children);
                }),
                t
            );
        })(Xr),
        qr = {
            hasChildren: !0,
            parentClass: "mbsc-label",
            readAttrs: ["placeholder", "rows"],
            readProps: ["disabled", "type"],
            renderToParent: !0,
            slots: { endIcon: "end-icon", label: "label", startIcon: "start-icon" },
            before: function (e, t, a) {
                var n = e.parentNode,
                    s = ia.createElement("span");
                if ((n.insertBefore(s, e), s.appendChild(e), (t.inputClass = e.getAttribute("class") || ""), "SELECT" === e.nodeName && delete t.hasChildren, !t.label && t.hasChildren && (t.label = a[0].textContent), t.label)) {
                    var i = ia.createElement("span");
                    n.insertBefore(i, s);
                }
            },
        },
        Gr = c({}, qr, { hasValue: !0, parentClass: "mbsc-select", useOwnChildren: !0 }),
        Zr = c({}, qr, { hasValue: !0 });
    function Qr(e, t, a) {
        var n = t.inputComponent,
            s = c({ defaultValue: (e._value && e._valueText) || "", placeholder: t.placeholder, ref: e._setInput }, t.inputProps);
        t.inputComponent ||
            ((n = Jr),
            (s = c(
                {
                    "aria-expanded": !!e._isOpen,
                    "aria-haspopup": "dialog",
                    "aria-label": t.ariaLabel,
                    disabled: t.disabled,
                    dropdown: t.dropdown,
                    endIcon: t.endIcon,
                    endIconSrc: t.endIconSrc,
                    endIconSvg: t.endIconSvg,
                    error: t.error,
                    errorMessage: t.errorMessage,
                    inputStyle: t.inputStyle,
                    label: t.label,
                    labelStyle: t.labelStyle,
                    name: t.name,
                    pickerMap: t.valueMap,
                    pickerValue: e._value,
                    placeholder: t.placeholder,
                    role: "combobox",
                    rtl: t.rtl,
                    startIcon: t.startIcon,
                    startIconSrc: t.startIconSrc,
                    startIconSvg: t.startIconSvg,
                    tags: t.tagInput === ie ? t.selectMultiple : t.tagInput,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                },
                s
            )));
        var i = qa(n, s);
        return qa(
            Za,
            null,
            e._showInput && i,
            qa(
                _r,
                {
                    activeElm: t.activeElm,
                    anchor: e._anchor,
                    anchorAlign: e._anchorAlign,
                    animation: t.animation,
                    buttons: e._buttons,
                    cancelText: t.cancelText,
                    closeOnEsc: t.closeOnEsc,
                    closeOnOverlayClick: t.closeOnOverlayClick,
                    closeOnScroll: t.closeOnScroll,
                    closeText: t.closeText,
                    contentPadding: !1,
                    context: t.context,
                    cssClass: e._cssClass,
                    disableLeftRight: !0,
                    display: t.display,
                    focusElm: e._focusElm,
                    focusOnClose: t.focusOnClose,
                    focusOnOpen: !e._allowTyping,
                    focusTrap: t.focusTrap,
                    fullScreen: t.fullScreen,
                    headerText: e._headerText,
                    height: t.height,
                    isOpen: e._isOpen,
                    maxHeight: t.maxHeight,
                    maxWidth: e._maxWidth,
                    onClose: e._onPopupClose,
                    onClosed: e._onPopupClosed,
                    onKeyDown: e._onPopupKey,
                    onOpen: e._onPopupOpen,
                    onResize: e._onResize,
                    setText: t.setText,
                    showArrow: t.showArrow,
                    showOverlay: !e._allowTyping && t.showOverlay,
                    ref: e._setPopup,
                    rtl: t.rtl,
                    scrollLock: e._scrollLock,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                    touchUi: e._touchUi,
                    windowWidth: e.state.width,
                    width: t.width,
                },
                a
            )
        );
    }
    var $r = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return Qr(
                        this,
                        e,
                        (function (e, t) {
                            var a = e.renderPreContent ? e.renderPreContent(e.preContentData) : "",
                                n = e.renderInContent ? e.renderInContent(e.preContentData) : "";
                            return qa(
                                Za,
                                null,
                                a,
                                qa(
                                    "div",
                                    {
                                        className:
                                            "mbsc-scroller mbsc-scroller-" +
                                            t._displayStyle +
                                            t._theme +
                                            t._rtl +
                                            (t._touchUi ? " mbsc-scroller-touch" : " mbsc-scroller-pointer") +
                                            ("inline" === e.display ? " mbsc-font " : " ") +
                                            t._className,
                                    },
                                    n,
                                    t._wheels.map(function (a, n) {
                                        return qa(
                                            "div",
                                            { key: n, className: "mbsc-scroller-wheel-group-cont" + (e.scroll3d ? " mbsc-scroller-wheel-group-cont-3d" : "") + t._theme },
                                            e.selectOnScroll && qa("div", { className: "mbsc-scroller-wheel-line" + t._theme, style: t._lineStyle }),
                                            qa(
                                                "div",
                                                { className: "mbsc-flex mbsc-scroller-wheel-group" + (e.scroll3d ? " mbsc-scroller-wheel-group-3d" : "") + t._theme },
                                                qa("div", { className: "mbsc-scroller-wheel-overlay mbsc-scroller-wheel-overlay-" + t._displayStyle + t._theme, style: t._overlayStyle }),
                                                a.map(function (a, n) {
                                                    return qa(Wr, {
                                                        activeIndex: t._activeIndexes[a._key],
                                                        disabled: t._disabled && t._disabled[a._key],
                                                        display: t._displayStyle,
                                                        key: n,
                                                        itemHeight: e.itemHeight,
                                                        onActiveChange: t._onActiveChange,
                                                        onIndexChange: t._onWheelIndexChange,
                                                        onSet: t._onSet,
                                                        maxIndex: a.max,
                                                        maxWheelWidth: e.maxWheelWidth,
                                                        minIndex: a.min,
                                                        minWheelWidth: e.minWheelWidth,
                                                        multiple: a.multiple,
                                                        renderItem: e.renderItem,
                                                        rows: t._rows,
                                                        scroll3d: t._scroll3d,
                                                        selectedIndex: t._indexes[a._key],
                                                        selectedValues: t._tempValueRep[a._key],
                                                        selectOnScroll: e.selectOnScroll,
                                                        theme: e.theme,
                                                        touchUi: e.touchUi,
                                                        rtl: e.rtl,
                                                        wheel: a,
                                                        wheelWidth: e.wheelWidth,
                                                    });
                                                })
                                            )
                                        );
                                    })
                                )
                            );
                        })(e, this)
                    );
                }),
                t
            );
        })(Fr),
        eo = { ios: 50, material: 46, windows: 50 },
        to = ["a", "h", "i", "s", "tt"];
    function ao(e, t, a, n, s, i, r, o, l, c, d, h, u, m, _, p) {
        for (var v = zt(u, m), f = v || !zt(h, m) ? u : Et(e, u), g = v || !zt(h, u) ? m : Nt(e, m), y = i.a(f), b = i.a(g), x = !0, D = !0, T = !1, S = 0, C = 0, w = 0; w < a; w++) {
            var k = n[s[(N = to[w])]];
            if (k !== ie) {
                var M = x ? i[N](f) : 0,
                    E = D ? i[N](g) : r[N];
                t && 1 === w && ((M += y ? 12 : 0), (E += b ? 12 : 0), (k += n[s.a] ? 12 : 0)), (x || D) && M < k && k < E && (T = !0), k !== M && (x = !1), k !== E && (D = !1);
            }
        }
        if (!_) {
            for (w = a + 1; w < 4; w++) {
                var N;
                s[(N = to[w])] !== ie && (i[N](f) > 0 && x && (S = o[l]), i[N](g) < r[N] && D && (C = o[l]));
            }
            D && p && !C && (C = 999 !== g.getMilliseconds() ? o[l] : 0);
        }
        if (x || D || T) for (M = x && !T ? i[l](f) + S : 0, E = D && !T ? i[l](g) - C : r[l], w = M; w <= E; w += o[l]) c[d].set(w, !_);
    }
    function no(e, t) {
        var a = new Date(e);
        return t ? Ce(+a / 864e5) : a.getMonth() + 12 * (a.getFullYear() - 1970);
    }
    function so(e) {
        return e.getFullYear() + "-" + De(e.getMonth() + 1) + "-" + De(e.getDate());
    }
    function io(e) {
        return e.getMilliseconds();
    }
    function ro(e) {
        return e.getHours() > 11 ? 1 : 0;
    }
    var oo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._preset = "date"),
                (t._innerValues = {}),
                (t._onChange = function (e) {
                    t.s.value === ie && t.setState({ value: e.value }), t._hook("onChange", e);
                }),
                (t._parseDate = function (e) {
                    var a = t.s;
                    return e || (t._innerValues = {}), t._getArray(Kt(e || a.defaultSelection || new Date(), a, t._format), !!e);
                }),
                (t._formatDate = function (e) {
                    var a = t._getDate(e);
                    return a ? qt(t._format, a, t.s) : "";
                }),
                (t._getDate = function (e) {
                    var a,
                        n,
                        s = t.s,
                        i = t._getArrayPart,
                        r = t._wheelOrder,
                        o = new Date(new Date().setHours(0, 0, 0, 0));
                    if (null === e || e === ie) return null;
                    if (r.dd !== ie) {
                        var l = e[r.dd].split("-");
                        a = new Date(l[0], l[1] - 1, l[2]);
                    }
                    r.tt !== ie && ((n = a || o), (n = new Date(n.getTime() + (e[r.tt] % 86400) * 1e3)));
                    var c = i(e, "y", a, o),
                        d = i(e, "m", a, o),
                        h = Math.min(i(e, "d", a, o), s.getMaxDayOfMonth(c, d)),
                        u = i(e, "h", n, o);
                    return s.getDate(c, d, h, t._hasAmPm && i(e, "a", n, o) ? u + 12 : u, i(e, "i", n, o), i(e, "s", n, o), i(e, "u", n, o));
                }),
                (t._validate = function (e) {
                    var a = e.direction,
                        n = e.index,
                        s = e.values,
                        i = e.wheels,
                        r = [],
                        o = t.s,
                        l = o.stepHour,
                        c = o.stepMinute,
                        d = o.stepSecond,
                        h = o.mode || t._preset,
                        u = t._wheelOrder,
                        m = t._getDatePart,
                        _ = t._max,
                        p = t._min,
                        v = Ut(o, t._getDate(s)),
                        f = o.getYear(v),
                        g = o.getMonth(v),
                        y = o.getDate(f, g - 1, 1),
                        b = o.getDate(f, g + 2, 1);
                    (n !== u.y && n !== u.m && n !== u.d && n !== u.dd && n !== ie) || ((t._valids = cs(o.valid, y, b, o, !0)), (t._invalids = cs(o.invalid, y, b, o, !0)));
                    var x = t._valids,
                        D = t._invalids,
                        T = wi(v, o, p ? +p : -1 / 0, _ ? +_ : 1 / 0, D, x, a),
                        S = t._getArray(T),
                        C = t._wheels && t._wheels[0][u.d],
                        w = m.y(T),
                        k = m.m(T),
                        M = o.getMaxDayOfMonth(w, k),
                        E = { y: p ? p.getFullYear() : -1 / 0, m: 0, d: 1, h: 0, i: 0, s: 0, a: 0, tt: 0 },
                        N = { y: _ ? _.getFullYear() : 1 / 0, m: 11, d: 31, h: Se(t._hasAmPm ? 11 : 23, l), i: Se(59, c), s: Se(59, d), a: 1, tt: 86400 },
                        I = { y: 1, m: 1, d: 1, h: l, i: c, s: d, a: 1, tt: t._timeStep },
                        L = !1,
                        H = !0,
                        O = !0;
                    if (
                        (["dd", "y", "m", "d", "tt", "a", "h", "i", "s"].forEach(function (e) {
                            var t = E[e],
                                a = N[e],
                                n = m[e](T),
                                s = u[e];
                            if ((H && p && (t = m[e](p)), O && _ && (a = m[e](_)), n < t && (n = t), n > a && (n = a), "dd" === e || "tt" === e || ("a" === e && s === ie) || (H && (H = n === t), O && (O = n === a)), s !== ie)) {
                                if (((r[s] = new Map()), "y" !== e && "dd" !== e)) for (var i = E[e]; i <= N[e]; i += I[e]) (i < t || i > a) && r[s].set(i, !0);
                                if ("d" === e && D)
                                    for (var l in D)
                                        if (!x || !x[l]) {
                                            var c = Kt(l, o),
                                                d = o.getYear(c),
                                                h = o.getMonth(c);
                                            d === w && h === k && Ci(o, c, D, x) && r[s].set(o.getDay(c), !0);
                                        }
                            }
                        }),
                        /time/i.test(h))
                    ) {
                        var Y = D && D[Lt(T)],
                            P = x && x[Lt(T)];
                        to.forEach(function (e, n) {
                            var s = u[e];
                            if (s !== ie) {
                                var l = o.valid ? P : Y;
                                if (l) {
                                    if (o.valid) for (var c = 0; c <= N[e]; c++) r[s].set(c, !0);
                                    for (var d = 0, h = l; d < h.length; d++) {
                                        var _ = h[d],
                                            p = _.start,
                                            v = _.end;
                                        p && v && ao(o, t._hasAmPm, n, S, u, m, N, I, e, r, s, T, p, v, !!o.valid, o.exclusiveEndDates);
                                    }
                                }
                                S[s] = Lr(i[s], m[e](T), r[s], a);
                            }
                        });
                    }
                    var F = t._dateDisplay;
                    if (C && (C.data.length !== M || /DDD/.test(F))) {
                        for (var z = [], V = F.replace(/[my|]/gi, "").replace(/DDDD/, "{dddd}").replace(/DDD/, "{ddd}").replace(/DD/, "{dd}").replace(/D/, "{d}"), R = 1; R <= M; R++) {
                            var A = o.getDate(w, k, R).getDay(),
                                W = V.replace(/{dddd}/, o.dayNames[A])
                                    .replace(/{ddd}/, o.dayNamesShort[A])
                                    .replace(/{dd}/, De(R) + o.daySuffix)
                                    .replace(/{d}/, R + o.daySuffix);
                            z.push({ display: W, value: R });
                        }
                        (C.data = z), (L = !0);
                    }
                    return { disabled: r, init: L, valid: S };
                }),
                (t._shouldValidate = function (e, t) {
                    return !!((e.min && +e.min != +t.min) || (e.max && +e.max != +t.max)) || e.wheels !== t.wheels || e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone;
                }),
                (t._setScroller = function (e) {
                    t._scroller = e;
                }),
                (t._getYearValue = function (e) {
                    return { display: (/yy/i.test(t._dateDisplay) ? e : (e + "").substr(2, 2)) + t.s.yearSuffix, value: e };
                }),
                (t._getYearIndex = function (e) {
                    return +e;
                }),
                (t._getDateIndex = function (e) {
                    return no(e, t._hasDay);
                }),
                (t._getDateItem = function (e) {
                    var a = t.s,
                        n = t._hasDay,
                        s = new Date(new Date().setHours(0, 0, 0, 0)),
                        i = n ? new Date(864e5 * e) : new Date(1970, e, 1);
                    return (
                        n && (i = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())),
                        { disabled: n && Ci(a, i, t._invalids, t._valids), display: s.getTime() === i.getTime() ? a.todayText : qt(t._dateTemplate, i, a), value: so(i) }
                    );
                }),
                (t._getArrayPart = function (e, a, n, s) {
                    var i;
                    return t._wheelOrder[a] === ie || ((i = +e[t._wheelOrder[a]]), isNaN(i)) ? (n ? t._getDatePart[a](n) : t._innerValues[a] !== ie ? t._innerValues[a] : t._getDatePart[a](s)) : i;
                }),
                (t._getHours = function (e) {
                    var a = e.getHours();
                    return Se((a = t._hasAmPm && a >= 12 ? a - 12 : a), t.s.stepHour);
                }),
                (t._getMinutes = function (e) {
                    return Se(e.getMinutes(), t.s.stepMinute);
                }),
                (t._getSeconds = function (e) {
                    return Se(e.getSeconds(), t.s.stepSecond);
                }),
                (t._getFullTime = function (e) {
                    return Se(Te((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), t._timeStep || 1);
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype.getVal = function () {
                return this._value;
            }),
            (t.prototype.setVal = function (e) {
                (this._value = e), this.setState({ value: e });
            }),
            (t.prototype.position = function () {
                this._scroller && this._scroller.position();
            }),
            (t.prototype.isVisible = function () {
                return this._scroller && this._scroller.isVisible();
            }),
            (t.prototype._valueEquals = function (e, t) {
                return Zt(e, t, this.s);
            }),
            (t.prototype._render = function (e, t) {
                var a = !1,
                    n = this._prevS,
                    s = e.dateFormat,
                    i = e.timeFormat,
                    r = e.mode || this._preset,
                    o = "datetime" === r ? s + e.separator + i : "time" === r ? i : s;
                (this._value = e.value === ie ? t.value : e.value),
                    (this._minWheelWidth = e.minWheelWidth || ("datetime" === r ? eo[e.baseTheme || e.theme] : ie)),
                    (this._dateWheels = e.dateWheels || ("datetime" === r ? e.dateWheelFormat : s)),
                    (this._dateDisplay = e.dateWheels || e.dateDisplay),
                    (this._timeWheels = e.timeWheels || i),
                    (this._timeDisplay = this._timeWheels),
                    (this._format = o),
                    (this._hasAmPm = /h/.test(this._timeDisplay)),
                    (this._getDatePart = { y: e.getYear, m: e.getMonth, d: e.getDay, h: this._getHours, i: this._getMinutes, s: this._getSeconds, u: io, a: ro, dd: so, tt: this._getFullTime }),
                    +Kt(n.min) != +Kt(e.min) && ((a = !0), (this._min = pe(e.min) ? ie : Kt(e.min, e, o))),
                    +Kt(n.max) != +Kt(e.max) && ((a = !0), (this._max = pe(e.max) ? ie : Kt(e.max, e, o))),
                    (e.theme !== n.theme || e.mode !== n.mode || e.locale !== n.locale || e.dateWheels !== n.dateWheels || e.timeWheels !== n.timeWheels || a) && (this._wheels = this._getWheels());
            }),
            (t.prototype._getWheels = function () {
                this._wheelOrder = {};
                var e,
                    t = this.s,
                    a = t.mode || this._preset,
                    n = this._hasAmPm,
                    s = this._dateDisplay,
                    i = this._timeDisplay,
                    r = this._wheelOrder,
                    o = [],
                    l = [],
                    c = [],
                    d = 0;
                if (/date/i.test(a)) {
                    for (var h = 0, u = this._dateWheels.split(/\|/.test(this._dateWheels) ? "|" : ""); h < u.length; h++) {
                        var m = 0;
                        if ((y = u[h]).length)
                            if ((/y/i.test(y) && m++, /m/i.test(y) && m++, /d/i.test(y) && m++, m > 1 && r.dd === ie)) (r.dd = d), d++, l.push(this._getDateWheel(y)), (c = l);
                            else if (/y/i.test(y) && r.y === ie)
                                (r.y = d),
                                    d++,
                                    l.push({
                                        cssClass: "mbsc-datetime-year-wheel",
                                        getIndex: this._getYearIndex,
                                        getItem: this._getYearValue,
                                        max: this._max ? t.getYear(this._max) : ie,
                                        min: this._min ? t.getYear(this._min) : ie,
                                        spaceAround: !0,
                                    });
                            else if (/m/i.test(y) && r.m === ie) {
                                (r.m = d), (e = []), d++;
                                for (var _ = s.replace(/[dy|]/gi, "").replace(/MMMM/, "{mmmm}").replace(/MMM/, "{mmm}").replace(/MM/, "{mm}").replace(/M/, "{m}"), p = 0; p < 12; p++) {
                                    var v = _.replace(/{mmmm}/, t.monthNames[p])
                                        .replace(/{mmm}/, t.monthNamesShort[p])
                                        .replace(/{mm}/, De(p + 1) + (t.monthSuffix || ""))
                                        .replace(/{m}/, p + 1 + (t.monthSuffix || ""));
                                    e.push({ display: v, value: p });
                                }
                                l.push({ cssClass: "mbsc-datetime-month-wheel", data: e, spaceAround: !0 });
                            } else if (/d/i.test(y) && r.d === ie) {
                                (r.d = d), (e = []), d++;
                                for (p = 1; p < 32; p++) e.push({ display: (/dd/i.test(s) ? De(p) : p) + t.daySuffix, value: p });
                                l.push({ cssClass: "mbsc-datetime-day-wheel", data: e, spaceAround: !0 });
                            }
                    }
                    o.push(l);
                }
                if (/time/i.test(a)) {
                    for (var f = 0, g = this._timeWheels.split(/\|/.test(this._timeWheels) ? "|" : ""); f < g.length; f++) {
                        var y;
                        m = 0;
                        if (((y = g[f]).length && (/h/i.test(y) && m++, /m/i.test(y) && m++, /s/i.test(y) && m++, /a/i.test(y) && m++), m > 1 && r.tt === ie)) (r.tt = d), d++, c.push(this._getTimeWheel(y));
                        else if (/h/i.test(y) && r.h === ie) {
                            (e = []), (r.h = d), d++;
                            for (p = 0; p < (n ? 12 : 24); p += t.stepHour) e.push({ display: n && 0 === p ? 12 : /hh/i.test(i) ? De(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-hour-wheel", data: e, spaceAround: !0 });
                        } else if (/m/i.test(y) && r.i === ie) {
                            (e = []), (r.i = d), d++;
                            for (p = 0; p < 60; p += t.stepMinute) e.push({ display: /mm/i.test(i) ? De(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-minute-wheel", data: e, spaceAround: !0 });
                        } else if (/s/i.test(y) && r.s === ie) {
                            (e = []), (r.s = d), d++;
                            for (p = 0; p < 60; p += t.stepSecond) e.push({ display: /ss/i.test(i) ? De(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-second-wheel", data: e, spaceAround: !0 });
                        } else
                            /a/i.test(y) &&
                                r.a === ie &&
                                ((r.a = d),
                                d++,
                                c.push({
                                    cssClass: "mbsc-dt-whl-a",
                                    data: /A/.test(y)
                                        ? [
                                              { display: t.amText.toUpperCase(), value: 0 },
                                              { display: t.pmText.toUpperCase(), value: 1 },
                                          ]
                                        : [
                                              { display: t.amText, value: 0 },
                                              { display: t.pmText, value: 1 },
                                          ],
                                    spaceAround: !0,
                                }));
                    }
                    c !== l && o.push(c);
                }
                return o;
            }),
            (t.prototype._getDateWheel = function (e) {
                var t = /d/i.test(e);
                return (
                    (this._hasDay = t),
                    (this._dateTemplate = e),
                    { cssClass: "mbsc-datetime-date-wheel", getIndex: this._getDateIndex, getItem: this._getDateItem, label: "", max: this._max ? no(so(this._max), t) : ie, min: this._min ? no(so(this._min), t) : ie, spaceAround: !0 }
                );
            }),
            (t.prototype._getTimeWheel = function (e) {
                var t = this.s,
                    a = [],
                    n = 1;
                /s/i.test(e) ? (n = t.stepSecond) : /m/i.test(e) ? (n = 60 * t.stepMinute) : /h/i.test(e) && (n = 3600 * t.stepHour), (this._timeStep = n);
                for (var s = 0; s < 86400; s += n) {
                    var i = new Date(new Date().setHours(0, 0, 0, 0) + 1e3 * s);
                    a.push({ display: qt(e, i, t), value: s });
                }
                return { data: a, label: "", spaceAround: !0 };
            }),
            (t.prototype._getArray = function (e, t) {
                var a = [],
                    n = this._wheelOrder;
                if (null === e || e === ie) return a;
                for (var s = 0, i = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"]; s < i.length; s++) {
                    var r = i[s],
                        o = this._getDatePart[r](e);
                    n[r] !== ie && (a[n[r]] = o), t && (this._innerValues[r] = o);
                }
                return a;
            }),
            (t.defaults = c({}, Tt, { dateDisplay: "MMMMDDYYYY", dateWheelFormat: "|DDD MMM D|", stepHour: 1, stepMinute: 1, stepSecond: 1 })),
            (t._name = "Datetime"),
            t
        );
    })(Xn);
    var lo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return qa(
                            $r,
                            {
                                disabled: e.disabled,
                                endIcon: e.endIcon,
                                endIconSrc: e.endIconSrc,
                                endIconSvg: e.endIconSvg,
                                error: e.error,
                                errorMessage: e.errorMessage,
                                inputStyle: e.inputStyle,
                                label: e.label,
                                labelStyle: e.labelStyle,
                                placeholder: e.placeholder,
                                name: e.name,
                                startIcon: e.startIcon,
                                startIconSrc: e.startIconSrc,
                                startIconSvg: e.startIconSvg,
                                anchor: e.anchor,
                                animation: e.animation,
                                buttons: e.buttons,
                                cancelText: e.cancelText,
                                clearText: e.clearText,
                                closeOnOverlayClick: e.closeOnOverlayClick,
                                context: e.context,
                                display: e.display,
                                focusOnClose: e.focusOnClose,
                                focusTrap: e.focusTrap,
                                headerText: e.headerText,
                                height: e.height,
                                setText: e.setText,
                                showArrow: e.showArrow,
                                showOverlay: e.showOverlay,
                                width: e.width,
                                circular: e.circular,
                                displayStyle: e.displayStyle,
                                formatValue: t._formatDate,
                                getValue: t._getDate,
                                itemHeight: e.itemHeight,
                                maxWheelWidth: e.maxWheelWidth,
                                minWheelWidth: t._minWheelWidth,
                                parseValue: t._parseDate,
                                ref: t._setScroller,
                                rows: e.rows,
                                rtl: e.rtl,
                                shouldValidate: t._shouldValidate,
                                showOnClick: e.showOnClick,
                                showOnFocus: e.showOnFocus,
                                theme: e.theme,
                                themeVariant: e.themeVariant,
                                touchUi: t._touchUi,
                                validate: t._validate,
                                value: t._value,
                                valueEquality: t._valueEquals,
                                wheels: t._wheels,
                                wheelWidth: e.wheelWidth,
                                onChange: t._onChange,
                            },
                            e.children
                        );
                    })(e, this);
                }),
                t
            );
        })(oo),
        co = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._preset = "datetime"), t;
            }
            return l(t, e), t;
        })(lo),
        ho = Dn({}),
        uo = {};
    function mo(e, t) {
        return uo[e] || (uo[e] = { change: new m(), selectedIndex: -1 }), uo[e].change.subscribe(t);
    }
    function _o(e, t) {
        var a = uo[e];
        a && (a.change.unsubscribe(t), a.change.nr || delete uo[e]);
    }
    function po(e, t, a) {
        var n = uo[e];
        n && (a !== ie && (n.selectedIndex = a), t !== ie && (n.value = t), n.change.next(n.value));
    }
    function vo(e) {
        return uo[e] && uo[e].selectedIndex;
    }
    var fo = 1,
        go = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._id = "mbsc-segmented-group" + fo++),
                    (t._onChange = function (e, a) {
                        var n = t.s,
                            s = n.modelValue !== ie ? n.modelValue : t.value;
                        if ("multiple" === n.select) {
                            if (s !== ie) {
                                var i = (s = s || []).indexOf(a);
                                -1 !== i ? s.splice(i, 1) : s.push(a), (t.value = s.slice());
                            }
                        } else t.value = a;
                        t._change(t.value), n.onChange && n.onChange(e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._render = function (e) {
                    (this._name = e.name === ie ? this._id : e.name),
                        (this._groupClass = "mbsc-segmented mbsc-flex " + this._className + this._theme + this._rtl + (e.color ? " mbsc-segmented-" + e.color : "") + (this.state.dragging ? " mbsc-segmented-dragging" : "")),
                        (this._groupOpt = { color: e.color, disabled: e.disabled, name: this._name, onChange: this._onChange, select: e.select, value: e.modelValue !== ie ? e.modelValue : e.value });
                }),
                (t.prototype._updated = function () {
                    this.s.drag && "multiple" !== this.s.select ? this._unlisten || this._setupDrag() : this._cleanupDrag();
                }),
                (t.prototype._destroy = function () {
                    this._cleanupDrag();
                }),
                (t.prototype._setupDrag = function () {
                    var e,
                        t,
                        a,
                        n,
                        s,
                        i,
                        r = this,
                        o = [],
                        l = [];
                    this._unlisten = Ji(this._el, {
                        onEnd: function () {
                            a && n !== s && !o[n] && r._el.querySelectorAll(".mbsc-segmented-input")[n].click();
                            (a = !1), r.setState({ dragging: !1 });
                        },
                        onMove: function (s) {
                            if (a) {
                                for (var c = Math.min(Math.max(s.endX - t, 0), e), d = 0, h = l[0]; c > h && l.length > d + 1; ) d++, (h += l[d]);
                                (d = r.s.rtl ? l.length - 1 - d : d) === n || o[d] || po(i, ie, (n = d));
                            }
                        },
                        onStart: function (c) {
                            var d = Fa(c.domEvent.target, ".mbsc-segmented-item", r._el);
                            if (d) {
                                var h = d.querySelector(".mbsc-segmented-input");
                                if (h.classList.contains("mbsc-selected")) {
                                    (o = []),
                                        Va(r._el.querySelectorAll(".mbsc-segmented-button"), function (e) {
                                            o.push(e.classList.contains("mbsc-disabled"));
                                        }),
                                        (l = []),
                                        Va(r._el.querySelectorAll(".mbsc-segmented-item"), function (e) {
                                            l.push(e.clientWidth);
                                        });
                                    (e = r._el.clientWidth - 30), (t = Ya(r._el).left + 15), (i = h.name), (n = vo(i)), (s = n), l.length && "radio" === h.type && ((a = !0), r.setState({ dragging: !0 }));
                                }
                            }
                        },
                    });
                }),
                (t.prototype._cleanupDrag = function () {
                    this._unlisten && (this._unlisten(), (this._unlisten = null));
                }),
                (t.defaults = { select: "single" }),
                (t._name = "SegmentedGroup"),
                t
            );
        })(Xn);
    var yo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return qa(ho.Provider, { children: ((t = this), (a = e.children), qa("div", { className: t._groupClass, ref: t._setEl }, a)), value: this._groupOpt });
                    var t, a;
                }),
                t
            );
        })(go),
        bo = 1,
        xo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var a = t.s,
                            n = e.target.checked;
                        n !== t._checked && (t._change(n), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(n), a.onChange && a.onChange(e));
                    }),
                    (t._onValueChange = function (e) {
                        var a = t.s,
                            n = t._isMultiple ? e && -1 !== e.indexOf(t._value) : e === t._value;
                        a.checked === ie && n !== t.state.selected ? t.setState({ selected: n }) : t.forceUpdate(), t._change(n);
                    }),
                    (t._setBox = function (e) {
                        t._box = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._groupOptions = function (e) {
                    var t = this,
                        a = e.color,
                        n = e.disabled,
                        s = e.name,
                        i = e.onChange,
                        r = e.select,
                        o = e.value,
                        l = this.s,
                        c = this.state,
                        d = this._checked,
                        h = l.modelValue !== ie ? l.modelValue === l.value : l.checked,
                        u = h !== ie ? ge(h) : c.selected === ie ? ge(l.defaultChecked) : c.selected;
                    (this._id = l.id === ie ? this._id || "mbsc-segmented-" + bo++ : l.id),
                        (this._value = l.value === ie ? this._id : l.value),
                        (this._onGroupChange = i),
                        (this._isMultiple = "multiple" === (r || l.select)),
                        (this._name = s === ie ? l.name : s),
                        (this._disabled = n === ie ? (l.disabled === ie ? c.disabled : ge(l.disabled)) : ge(n)),
                        (this._color = a === ie ? l.color : a),
                        (this._checked = o === ie ? u : this._isMultiple ? o && -1 !== o.indexOf(this._value) : o === this._value),
                        this._isMultiple ||
                            d ||
                            !this._checked ||
                            setTimeout(function () {
                                t._checked && po(t._name, t._value, t._index);
                            }),
                        (this._selectedIndex = vo(this._name)),
                        (this._cssClass =
                            "mbsc-segmented-item " +
                            this._className +
                            this._theme +
                            this._rtl +
                            (this._checked ? " mbsc-segmented-item-checked" : "") +
                            (c.hasFocus ? " mbsc-focus" : "") +
                            (this._index === this._selectedIndex || (this._index === ie && this._checked) || (this._isMultiple && this._checked) ? " mbsc-segmented-item-selected" : ""));
                }),
                (t.prototype._toggle = function (e) {
                    this.s.checked === ie && this.setState({ selected: e });
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    Sa(this._el, Ys, this._onChange),
                        (this._unlisten = Ji(this._el, {
                            onBlur: function () {
                                e.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                e.setState({ hasFocus: !0 });
                            },
                        }));
                }),
                (t.prototype._updated = function () {
                    if ((this._name && !this._unsubscribe && (this._unsubscribe = mo(this._name, this._onValueChange)), !this._isMultiple)) {
                        var e = Fa(this._el, ".mbsc-segmented"),
                            t = -1,
                            a = -1;
                        if (e) for (var n = e.querySelectorAll('.mbsc-segmented-input[name="' + this._name + '"]'), s = 0; s < n.length; s++) n[s] === this._el && (t = s), n[s].checked && (a = s);
                        this._index !== t &&
                            -1 !== a &&
                            (function (e, t) {
                                uo[e] && (uo[e].selectedIndex = t);
                            })(this._name, a),
                            -1 !== this._selectedIndex && ((this._box.style.transform = "translateX(" + (this.s.rtl ? -1 : 1) * (this._selectedIndex - t) * 100 + "%)"), (this._animate = !0)),
                            -1 !== t && (this._index = t);
                    }
                }),
                (t.prototype._destroy = function () {
                    Ca(this._el, Ys, this._onChange), this._unsubscribe && (_o(this._name, this._unsubscribe), (this._unsubscribe = ie)), this._unlisten && this._unlisten();
                }),
                (t.defaults = { select: "single" }),
                (t._name = "Segmented"),
                t
            );
        })(Xn);
    var Do = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        this._toggle(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    var a = this;
                    return qa(ho.Consumer, null, function (n) {
                        return (function (e, t, a, n, s) {
                            return (
                                a._groupOptions(s),
                                qa(
                                    "label",
                                    { className: a._cssClass },
                                    qa("input", {
                                        ref: a._setEl,
                                        "aria-labelledby": a._id,
                                        checked: a._checked,
                                        className: "mbsc-segmented-input mbsc-reset " + (e.inputClass || "") + a._theme + (a._checked ? " mbsc-selected" : ""),
                                        disabled: a._disabled,
                                        name: a._isMultiple ? e.name : a._name,
                                        onChange: xe,
                                        type: a._isMultiple ? "checkbox" : "radio",
                                        value: a._value,
                                    }),
                                    qa(
                                        "div",
                                        { ref: a._setBox, className: "mbsc-segmented-selectbox" + a._theme + (a._animate ? " mbsc-segmented-selectbox-animate" : "") + (a._checked ? " mbsc-selected" : "") },
                                        qa("div", {
                                            className: "mbsc-segmented-selectbox-inner" + a._theme + (a._index === a._selectedIndex || a._checked ? " mbsc-segmented-selectbox-inner-visible" : "") + (a._checked ? " mbsc-selected" : ""),
                                        })
                                    ),
                                    qa(
                                        Gi,
                                        {
                                            "aria-hidden": !0,
                                            ariaLabel: e.ariaLabel,
                                            className: "mbsc-segmented-button" + (a._checked ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : ""),
                                            color: a._color,
                                            disabled: a._disabled,
                                            endIcon: e.endIcon,
                                            endIconSrc: e.endIconSrc,
                                            endIconSvg: e.endIconSvg,
                                            icon: e.icon,
                                            iconSrc: e.iconSrc,
                                            iconSvg: e.iconSvg,
                                            id: a._id,
                                            ripple: e.ripple,
                                            rtl: e.rtl,
                                            startIcon: e.startIcon,
                                            startIconSrc: e.startIconSrc,
                                            startIconSvg: e.startIconSvg,
                                            tag: "span",
                                            tabIndex: -1,
                                            theme: e.theme,
                                            themeVariant: e.themeVariant,
                                        },
                                        n
                                    )
                                )
                            );
                        })(e, t, a, e.children, n);
                    });
                }),
                t
            );
        })(xo),
        To = {
            hasChildren: !0,
            parentClass: "mbsc-segmented-button",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                (t.select = "checkbox" === e.type ? "multiple" : "single"), (t.defaultChecked = e.checked), (t.inputClass = e.getAttribute("class") || "");
                var a = e.parentNode,
                    n = a.parentNode;
                if (null === n.getAttribute("mbsc-segmented-group")) {
                    var s = ia.createElement("div");
                    s.setAttribute("mbsc-segmented-group", ""),
                        n.insertBefore(s, a),
                        s.appendChild(a),
                        Va(n.querySelectorAll('input[name="' + e.name + '"]'), function (e) {
                            s.appendChild(e.parentNode);
                        });
                }
            },
        },
        So = { hasChildren: !0, parentClass: "mbsc-segmented" };
    var Co = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._setTime = function (e) {
                    t._hook("onChange", { value: jt(t.s, e.value) });
                }),
                (t._isDisabled = function (e) {
                    if (e) {
                        var a = Lt(jt(t.s, e)),
                            n = t._invalids && t._invalids[a],
                            s = t._valids && t._valids[a],
                            i = t.s.exclusiveEndDates;
                        if (s) {
                            for (var r = 0, o = s; r < o.length; r++) {
                                var l = o[r],
                                    c = l.end && (i ? e < +l.end : e <= +l.end);
                                if ((l.start && e >= +l.start && c) || l.allDay) return !1;
                            }
                            return !0;
                        }
                        if (n) {
                            for (var d = 0, h = n; d < h.length; d++) {
                                var u = h[d];
                                c = u.end && (i ? e < +u.end : e <= +u.end);
                                if ((u.start && e >= +u.start && c) || u.allDay) return !0;
                            }
                            return !1;
                        }
                    }
                    return !1;
                }),
                (t._onKeyDown = function (e) {
                    if (e.keyCode === ai) e.target.click(), e.preventDefault();
                }),
                (t._setCont = function (e) {
                    t._gridContEl = e && e.parentElement;
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._render = function (e, t) {
                var a = this,
                    n = this._prevS;
                this._cssClass = "mbsc-timegrid-container mbsc-font" + this._theme + this._rtl;
                var s = e.min !== n.min,
                    i = e.max !== n.max,
                    r = e.timeFormat,
                    o = (n.value && !e.value) || (e.value && +e.value !== this._value);
                s && (this._min = pe(e.min) ? ie : Kt(e.min, e, r)), i && (this._max = pe(e.max) ? ie : Kt(e.max, e, r));
                var l = Ht(e.value || jt(e)),
                    c = $t(l, 1),
                    d = this._selectedDate !== +l,
                    h = e.invalid !== n.invalid,
                    u = e.valid !== n.valid;
                (h || d) && (this._invalids = cs(e.invalid, l, c, e, !0)), (u || d) && (this._valids = cs(e.valid, l, c, e, !0)), o && (this._value = e.value && +e.value);
                var m = d || h || s || i || r !== n.timeFormat;
                if (m) {
                    this._selectedDate = +l;
                    var _ = Math.max(+l, +(this._min || -1 / 0)),
                        p = Math.min(+c, +(this._max || 1 / 0) + 1),
                        v = 36e5 * e.stepHour + 6e4 * e.stepMinute;
                    (this._timeSlots = []), (this._validTimes = []);
                    for (var f = [], g = 0, y = +l; y < +c; y += v)
                        if (p >= _ ? y >= _ && y < p : y >= _ || y < p) {
                            var b = { formattedValue: qt(r, jt(e, y), e), value: y };
                            f.push(b), 2 === g && (this._timeSlots.push(f), (f = []), (g = -1)), this._isDisabled(y) || this._validTimes.push(b), g++;
                        }
                    f.length && this._timeSlots.push(f);
                }
                if (
                    this._isDisabled(this._value) ||
                    ((o || m) &&
                        -1 ===
                            Ie(this._validTimes, function (e) {
                                return e.value === a._value;
                            }))
                ) {
                    var x = (function (e, t) {
                        if (null == t || !e.length) return null;
                        for (var a = 0; a < e.length && t >= e[a]; ) a++;
                        if (a === e.length) return e[a - 1];
                        if (0 === a) return e[0];
                        var n = e[a - 1],
                            s = e[a];
                        return t - n < s - t ? n : s;
                    })(
                        this._validTimes.map(function (e) {
                            return e.value;
                        }),
                        this._value
                    );
                    x &&
                        (clearTimeout(this._validationHandle),
                        (this._validationHandle = setTimeout(function () {
                            var e = Ne(a._validTimes, function (e) {
                                return e.value === x;
                            });
                            a._setTime(e);
                        })));
                } else m && clearTimeout(this._validationHandle);
                this._valueChanged = this._valueChanged || o;
            }),
            (t.prototype._updated = function () {
                if (this._value !== ie && (this._valueChanged || (this._isOpen !== this.s.isOpen && this.s.isOpen))) {
                    var e = this._lastValue !== ie,
                        t = this._gridContEl,
                        a = t.querySelector('[data-timeslot="' + this._value + '"]');
                    a &&
                        setTimeout(function () {
                            var n = a.getBoundingClientRect(),
                                s = n.top,
                                i = n.height,
                                r = t.getBoundingClientRect(),
                                o = r.top,
                                l = r.height,
                                c = Ea(t);
                            (s + i > o + l || s < o) && Oa(t, ie, s - o + c - 5, e);
                        }),
                        (this._valueChanged = !1),
                        (this._lastValue = this._value);
                }
                this._isOpen = this.s.isOpen;
            }),
            (t.defaults = c({}, Tt, { stepHour: 0, stepMinute: 30 })),
            (t._name = "Timegrid"),
            t
        );
    })(Xn);
    var wo = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return (
                    ((a = {}).onKeyDown = (t = this)._onKeyDown),
                    (n = a),
                    qa(
                        "div",
                        { className: t._cssClass, ref: t._setCont },
                        t._timeSlots.map(function (e, a) {
                            return qa(
                                "div",
                                { className: "mbsc-timegrid-row", key: a },
                                e.map(function (e, s) {
                                    var i = t._isDisabled(e.value);
                                    return qa(
                                        "div",
                                        { className: "mbsc-timegrid-cell" + (i ? " mbsc-disabled" : ""), key: s },
                                        qa("div", { dangerouslySetInnerHTML: t.textParamMulti(3 * a + s) }),
                                        qa(
                                            "div",
                                            c(
                                                {
                                                    className: "mbsc-timegrid-item" + (t._value === e.value ? " mbsc-selected" : "") + (i ? " mbsc-disabled" : "") + t._theme,
                                                    onClick: function () {
                                                        return t._setTime(e);
                                                    },
                                                    tabIndex: i ? ie : 0,
                                                    "data-timeslot": e.value,
                                                },
                                                n
                                            ),
                                            e.formattedValue
                                        )
                                    );
                                })
                            );
                        })
                    )
                );
                var t, a, n;
            }),
            t
        );
    })(Co);
    var ko = (function (e) {
        function t(t) {
            return (ki[co._name] = co), (ki[Ir._name] = Ir), (ki[wo._name] = wo), e.call(this, t) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e) {
                return Qr(
                    this,
                    e,
                    (function (e, t, a, n) {
                        var s = t._renderTabs,
                            i = t._controls,
                            r = t._activeSelect,
                            o = t._rtl,
                            l = t._theme;
                        return qa(
                            Za,
                            null,
                            qa(
                                "div",
                                { className: "mbsc-datepicker mbsc-flex-col mbsc-datepicker-" + e.display + l + ("inline" === e.display ? " " + t._className + t._hb : "") + t._controlsClass },
                                t._headerText && "inline" === e.display && qa("div", { className: "mbsc-picker-header" + l + t._hb }, t._headerText),
                                s &&
                                    qa(
                                        yo,
                                        { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: t._activeTab, onChange: t._changeActiveTab },
                                        i.map(function (t, a) {
                                            return qa(Do, { key: a, rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: t.name }, t.title);
                                        })
                                    ),
                                t._renderControls &&
                                    qa(
                                        "div",
                                        { className: "mbsc-range-control-wrapper" + l },
                                        qa(
                                            yo,
                                            { theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, value: r, onChange: t._changeActiveSelect },
                                            qa(
                                                Do,
                                                { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "start", className: "mbsc-range-start" + (t._tempStartText ? " mbsc-range-value-nonempty" : "") },
                                                qa("div", { className: "mbsc-range-control-label" + l + o + ("start" === r ? " active" : "") }, e.rangeStartLabel),
                                                qa(
                                                    "div",
                                                    { className: "mbsc-range-control-value" + l + o + ("start" === r ? " active" : "") + (t._tempStartText ? "" : " mbsc-range-control-text-empty") },
                                                    t._tempStartText || e.rangeStartHelp
                                                ),
                                                "start" === r && t._tempStartText && qa(Ri, { className: "mbsc-range-label-clear" + o, onClick: t._clearStart, svg: e.clearIcon, theme: e.theme })
                                            ),
                                            qa(
                                                Do,
                                                { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "end", className: "mbsc-range-end" + (t._tempEndText ? " mbsc-range-value-nonempty" : "") },
                                                qa("div", { className: "mbsc-range-control-label" + l + o + ("end" === r ? " active" : "") }, e.rangeEndLabel),
                                                qa("div", { className: "mbsc-range-control-value" + l + o + ("end" === r ? " active" : "") + (t._tempEndText ? "" : " mbsc-range-control-text-empty") }, t._tempEndText || e.rangeEndHelp),
                                                "end" === r && t._tempEndText && qa(Ri, { className: "mbsc-range-label-clear" + o, onClick: t._clearEnd, svg: e.clearIcon, theme: e.theme })
                                            )
                                        )
                                    ),
                                qa(
                                    "div",
                                    { className: "mbsc-datepicker-tab-wrapper mbsc-flex mbsc-flex-1-1" + l, ref: t._setWrapper },
                                    i.map(function (e, a) {
                                        var r = e.options;
                                        return (
                                            n && ((r.renderCalendarHeader = n.header), (r.renderDay = n.day), (r.renderDayContent = n.dayContent)),
                                            qa(
                                                "div",
                                                {
                                                    key: a,
                                                    className:
                                                        "mbsc-flex mbsc-datepicker-tab mbsc-datepicker-tab-" +
                                                        e.name +
                                                        l +
                                                        ((s && e.name === t._activeTab) || !s ? " mbsc-datepicker-tab-active" : "") +
                                                        (s && "time" === e.name ? " mbsc-datepicker-time-modal" : "") +
                                                        (s || 1 === i.length ? " mbsc-datepicker-tab-expand mbsc-flex-1-1" : ""),
                                                },
                                                qa(e.Component, c({}, r))
                                            )
                                        );
                                    })
                                )
                            ),
                            a
                        );
                    })(e, this, e.children)
                );
            }),
            t
        );
    })(Hi);
    function Mo(e) {
        return _e(e) ? ia.querySelector(e) : e;
    }
    var Eo,
        No = {
            before: function (e, t) {
                var a = t.select,
                    n = t.startInput,
                    s = t.endInput;
                if ("range" === a && n && s) {
                    var i = Mo(n),
                        r = Mo(s),
                        o = i && i.value,
                        l = r && r.value;
                    o && l && (t.defaultValue = o + Mi + l);
                } else t.defaultValue = e.value;
                t.element = e;
            },
        };
    function Io(e, t) {
        return function (a, n) {
            var s = {};
            if (_e(a)) {
                var i,
                    r = ia.querySelectorAll(a);
                return (
                    Va(r, function (a) {
                        var r = Mn(e, a, n, t);
                        (s[a.id] = r), i || (i = r);
                    }),
                    1 === r.length ? i : s
                );
            }
            return Mn(e, a, n, t);
        };
    }
    function Lo(e) {
        return Eo || (Eo = Oo.luxon.DateTime.local().zoneName), e && "local" !== e ? e : Eo;
    }
    v &&
        (ia.addEventListener("DOMContentLoaded", function () {
            Nn(ia);
        }),
        ia.addEventListener("mbsc-enhance", function (e) {
            Nn(e.target);
        }));
    var Ho = (function () {
            function e(e, t) {
                void 0 === t && (t = "utc"), (this._mbsc = !0), (t = Lo(t));
                var a = Oo.luxon.DateTime,
                    n = { zone: t };
                if (((this.zone = t), ve(e))) this.dt = a.utc().setZone(t);
                else if (At(e) || me(e)) this.dt = a.fromMillis(+e, n);
                else if (_e(e)) this.dt = a.fromISO(e, n);
                else if (he(e)) {
                    for (var s = ["year", "month", "day", "hour", "minute", "second", "millisecond"], i = {}, r = 0; r < e.length && r < 7; r++) i[s[r]] = e[r] + (1 === r ? 1 : 0);
                    (Oo.version =
                        Oo.version ||
                        (function (e) {
                            var t = e.fromObject.toString().trim();
                            return /^(function )?\w*\(\w+\)/.test(t) ? 1 : 2;
                        })(a)),
                        1 === Oo.version ? (this.dt = a.fromObject(c({}, i, n))) : (this.dt = a.fromObject(i, n));
                }
            }
            return (
                (e.prototype.clone = function () {
                    return new e(this, this.zone);
                }),
                (e.prototype.createDate = function (e, t, a, n, s, i, r) {
                    return Oo.createDate({ displayTimezone: this.zone }, e, t, a, n, s, i, r);
                }),
                (e.prototype[Symbol.toPrimitive] = function (e) {
                    return this.dt.toJSDate()[Symbol.toPrimitive](e);
                }),
                (e.prototype.toDateString = function () {
                    return this.dt.toFormat("ccc MMM dd yyyy");
                }),
                (e.prototype.toISOString = function () {
                    return this.dt.toISO();
                }),
                (e.prototype.toJSON = function () {
                    return this.dt.toISO();
                }),
                (e.prototype.valueOf = function () {
                    return this.dt.valueOf();
                }),
                (e.prototype.getDate = function () {
                    return this.dt.day;
                }),
                (e.prototype.getDay = function () {
                    return this.dt.weekday % 7;
                }),
                (e.prototype.getFullYear = function () {
                    return this.dt.year;
                }),
                (e.prototype.getHours = function () {
                    return this.dt.hour;
                }),
                (e.prototype.getMilliseconds = function () {
                    return this.dt.millisecond;
                }),
                (e.prototype.getMinutes = function () {
                    return this.dt.minute;
                }),
                (e.prototype.getMonth = function () {
                    return this.dt.month - 1;
                }),
                (e.prototype.getSeconds = function () {
                    return this.dt.second;
                }),
                (e.prototype.getTime = function () {
                    return this.valueOf();
                }),
                (e.prototype.getTimezoneOffset = function () {
                    return -this.dt.offset;
                }),
                (e.prototype.getUTCDate = function () {
                    return this.dt.toUTC().day;
                }),
                (e.prototype.getUTCDay = function () {
                    return this.dt.toUTC().weekday % 7;
                }),
                (e.prototype.getUTCFullYear = function () {
                    return this.dt.toUTC().year;
                }),
                (e.prototype.getUTCHours = function () {
                    return this.dt.toUTC().hour;
                }),
                (e.prototype.getUTCMilliseconds = function () {
                    return this.dt.toUTC().millisecond;
                }),
                (e.prototype.getUTCMinutes = function () {
                    return this.dt.toUTC().minute;
                }),
                (e.prototype.getUTCMonth = function () {
                    return this.dt.toUTC().month - 1;
                }),
                (e.prototype.getUTCSeconds = function () {
                    return this.dt.toUTC().second;
                }),
                (e.prototype.setMilliseconds = function (e) {
                    return this.setter({ millisecond: e });
                }),
                (e.prototype.setSeconds = function (e, t) {
                    return this.setter({ second: e, millisecond: t });
                }),
                (e.prototype.setMinutes = function (e, t, a) {
                    return this.setter({ minute: e, second: t, millisecond: a });
                }),
                (e.prototype.setHours = function (e, t, a, n) {
                    return this.setter({ hour: e, minute: t, second: a, millisecond: n });
                }),
                (e.prototype.setDate = function (e) {
                    return this.setter({ day: e });
                }),
                (e.prototype.setMonth = function (e, t) {
                    return e++, this.setter({ month: e, day: t });
                }),
                (e.prototype.setFullYear = function (e, t, a) {
                    return this.setter({ year: e, month: t, day: a });
                }),
                (e.prototype.setTime = function (e) {
                    return (this.dt = Oo.luxon.DateTime.fromMillis(e)), this.dt.valueOf();
                }),
                (e.prototype.setTimezone = function (e) {
                    (e = Lo(e)), (this.zone = e), (this.dt = this.dt.setZone(e));
                }),
                (e.prototype.setUTCMilliseconds = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCSeconds = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCMinutes = function (e, t, a) {
                    return 0;
                }),
                (e.prototype.setUTCHours = function (e, t, a, n) {
                    return 0;
                }),
                (e.prototype.setUTCDate = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCMonth = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCFullYear = function (e, t, a) {
                    return 0;
                }),
                (e.prototype.toUTCString = function () {
                    return "";
                }),
                (e.prototype.toTimeString = function () {
                    return "";
                }),
                (e.prototype.toLocaleDateString = function () {
                    return "";
                }),
                (e.prototype.toLocaleTimeString = function () {
                    return "";
                }),
                (e.prototype.setter = function (e) {
                    return (this.dt = this.dt.set(e)), this.dt.valueOf();
                }),
                e
            );
        })(),
        Oo = {
            luxon: ie,
            version: ie,
            parse: function (e, t) {
                return new Ho(e, t.dataTimezone || t.displayTimezone);
            },
            createDate: function (e, t, a, n, s, i, r, o) {
                var l = e.displayTimezone;
                return fe(t) || _e(t) || ve(a) ? new Ho(t, l) : new Ho([t || 1970, a || 0, n || 1, s || 0, i || 0, r || 0, o || 0], l);
            },
        };
    function Yo(e) {
        return e && "local" !== e ? e : Fo.moment.tz.guess();
    }
    var Po = (function () {
            function e(e, t) {
                (this._mbsc = !0), (this.timezone = Yo(t)), this.init(e);
            }
            return (
                (e.prototype.clone = function () {
                    return new e(this, this.timezone);
                }),
                (e.prototype.createDate = function (e, t, a, n, s, i, r) {
                    return Fo.createDate({ displayTimezone: this.timezone }, e, t, a, n, s, i, r);
                }),
                (e.prototype[Symbol.toPrimitive] = function (e) {
                    return this.m.toDate()[Symbol.toPrimitive](e);
                }),
                (e.prototype.toDateString = function () {
                    return this.m.format("ddd MMM DD YYYY");
                }),
                (e.prototype.toISOString = function () {
                    return this.m.toISOString(!0);
                }),
                (e.prototype.toJSON = function () {
                    return this.m.toISOString();
                }),
                (e.prototype.valueOf = function () {
                    return this.m.valueOf();
                }),
                (e.prototype.getDate = function () {
                    return this.m.date();
                }),
                (e.prototype.getDay = function () {
                    return this.m.day();
                }),
                (e.prototype.getFullYear = function () {
                    return this.m.year();
                }),
                (e.prototype.getHours = function () {
                    return this.m.hours();
                }),
                (e.prototype.getMilliseconds = function () {
                    return this.m.milliseconds();
                }),
                (e.prototype.getMinutes = function () {
                    return this.m.minutes();
                }),
                (e.prototype.getMonth = function () {
                    return this.m.month();
                }),
                (e.prototype.getSeconds = function () {
                    return this.m.seconds();
                }),
                (e.prototype.getTime = function () {
                    return this.m.valueOf();
                }),
                (e.prototype.getTimezoneOffset = function () {
                    return -this.m.utcOffset();
                }),
                (e.prototype.getUTCDate = function () {
                    return this.utc().date();
                }),
                (e.prototype.getUTCDay = function () {
                    return this.utc().day();
                }),
                (e.prototype.getUTCFullYear = function () {
                    return this.utc().year();
                }),
                (e.prototype.getUTCHours = function () {
                    return this.utc().hours();
                }),
                (e.prototype.getUTCMilliseconds = function () {
                    return this.utc().milliseconds();
                }),
                (e.prototype.getUTCMinutes = function () {
                    return this.utc().minutes();
                }),
                (e.prototype.getUTCMonth = function () {
                    return this.utc().month();
                }),
                (e.prototype.getUTCSeconds = function () {
                    return this.utc().seconds();
                }),
                (e.prototype.setMilliseconds = function (e) {
                    return +this.m.set({ millisecond: e });
                }),
                (e.prototype.setSeconds = function (e, t) {
                    return +this.m.set({ seconds: e, milliseconds: t });
                }),
                (e.prototype.setMinutes = function (e, t, a) {
                    return +this.m.set({ minutes: e, seconds: t, milliseconds: a });
                }),
                (e.prototype.setHours = function (e, t, a, n) {
                    return +this.m.set({ hours: e, minutes: t, seconds: a, milliseconds: n });
                }),
                (e.prototype.setDate = function (e) {
                    return +this.m.set({ date: e });
                }),
                (e.prototype.setMonth = function (e, t) {
                    return +this.m.set({ month: e, date: t });
                }),
                (e.prototype.setFullYear = function (e, t, a) {
                    return +this.m.set({ year: e, month: t, date: a });
                }),
                (e.prototype.setTime = function (e) {
                    return this.init(e), this.m.valueOf();
                }),
                (e.prototype.setTimezone = function (e) {
                    (this.timezone = Yo(e)), this.m.tz(this.timezone);
                }),
                (e.prototype.setUTCMilliseconds = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCSeconds = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCMinutes = function (e, t, a) {
                    return 0;
                }),
                (e.prototype.setUTCHours = function (e, t, a, n) {
                    return 0;
                }),
                (e.prototype.setUTCDate = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCMonth = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCFullYear = function (e, t, a) {
                    return 0;
                }),
                (e.prototype.toUTCString = function () {
                    return "";
                }),
                (e.prototype.toTimeString = function () {
                    return "";
                }),
                (e.prototype.toLocaleDateString = function () {
                    return "";
                }),
                (e.prototype.toLocaleTimeString = function () {
                    return "";
                }),
                (e.prototype.init = function (e) {
                    var t = Fo.moment.tz,
                        a = ve(e) || _e(e) || me(e) || he(e) ? e : +e,
                        n = _e(e) && Ct.test(e);
                    this.m = n ? t(a, "HH:mm:ss", this.timezone) : t(a, this.timezone);
                }),
                (e.prototype.utc = function () {
                    return this.m.clone().utc();
                }),
                e
            );
        })(),
        Fo = {
            moment: ie,
            parse: function (e, t) {
                return new Po(e, t.dataTimezone || t.displayTimezone);
            },
            createDate: function (e, t, a, n, s, i, r, o) {
                var l = e.displayTimezone;
                return fe(t) || _e(t) || ve(a) ? new Po(t, l) : new Po([t || 1970, a || 0, n || 1, s || 0, i || 0, r || 0, o || 0], l);
            },
        },
        zo = ((ir._selector = "[mbsc-calendar-next]"), or),
        Vo = ((sr._selector = "[mbsc-calendar-prev]"), ir),
        Ro = ((rr._selector = "[mbsc-calendar-today]"), sr),
        Ao = ((or._selector = "[mbsc-calendar-nav]"), rr),
        Wo = Io(Vo),
        Uo = Io(Ro),
        Bo = Io(Ao),
        jo = Io(zo),
        Ko = Io(ko, No),
        Xo = ", ",
        Jo = "group_0";
    var qo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._options = []),
                (t._selectMap = new Map()),
                (t._onFilterChange = function (e) {
                    var a = e.target.value;
                    clearTimeout(t._debounce),
                        (t._filterInput.value = a),
                        (t._debounce = setTimeout(function () {
                            t._filter(a);
                        }, 300));
                }),
                (t._onFilterClear = function () {
                    var e = t._filterInput;
                    e && (e.value = ""), t._filter("");
                }),
                (t._onResize = function (e) {
                    t.setState({ width: e.windowWidth });
                }),
                (t._onChange = function (e) {
                    var a = e.value;
                    (t._parsedValue = a), t._saveSelected(a), t._change(a), t._hook("onChange", e);
                }),
                (t._onClose = function (e) {
                    t._hook("onClose", e),
                        t._filterText &&
                            setTimeout(function () {
                                return t._onFilterClear();
                            }, 100);
                }),
                (t._onWheelMove = function (e) {
                    var a = e.wheelIndex,
                        n = e.selection,
                        s = e.dataItem;
                    if (!t._selectOnScroll && !n && 1 === a) {
                        var i = Ne(t._options, function (e) {
                            return e.value === s.value;
                        });
                        return [s.isGroup ? s.value : i.group];
                    }
                    return ie;
                }),
                (t._shouldValidate = function (e, a) {
                    var n = e.selectMultiple !== a.selectMultiple || (!e.filter && e.data !== a.data) || t._groupChanged;
                    return (t._groupChanged = !1), n;
                }),
                (t._writeValue = function (e, a, n) {
                    var s = e.value;
                    if (((e.value = a), t._isSelect)) {
                        he(n) || (n = [n]);
                        for (var i = t.s.selectElement, r = i.options, o = !1, l = 0; l < r.length; l++) {
                            var c = r[l],
                                d = c.selected;
                            (c.selected = n.indexOf(c.value) > -1), d !== c.selected && (o = !0);
                        }
                        return o && za(i, Os), o;
                    }
                    return s !== a;
                }),
                (t._format = function (e) {
                    var a = e[t.s.showGroupWheel ? 1 : 0],
                        n = t.s.selectMultiple ? a : [a];
                    return (
                        (n.map &&
                            n.map(function (e) {
                                return t._map ? t._map.get(e) : ie;
                            })) ||
                        []
                    ).join(Xo);
                }),
                (t._parse = function (e) {
                    var a,
                        n = t._map,
                        s = t._reMap,
                        i = t.s.selectMultiple,
                        r = t.s.defaultSelection,
                        o = i ? (r ? (r.length !== ie ? r : r.slice()) : []) : r !== ie ? r : null;
                    if (((t._parsedValue = e), n))
                        if (i && !pe(e)) {
                            var l = [];
                            if (e.length === ie) l.push(e);
                            else if (_e(e))
                                for (var c = 0, d = e.split(Xo); c < d.length; c++) {
                                    var h = d[c],
                                        u = s.get(h);
                                    u !== ie && l.push(u);
                                }
                            else
                                for (var m = 0, _ = e; m < _.length; m++) {
                                    var p = _[m];
                                    n.has(p) && l.push(p);
                                }
                            a = l;
                        } else n.has(e) ? (a = e) : _e(e) && s.has(e) && (a = s.get(e));
                    if ((a === ie && (a = o), t.s.showGroupWheel)) {
                        var v = i ? a[0] : a,
                            f = Ne(t._options, function (e) {
                                return e.value === v;
                            });
                        return [f && f.group, a];
                    }
                    return [a];
                }),
                (t._get = function (e) {
                    var a = e[t.s.showGroupWheel ? 1 : 0];
                    return t.s.selectMultiple ? a || [] : a;
                }),
                (t._valueEquals = function (e, a) {
                    return t.s.selectMultiple ? Me(e || [], a || []) : e === a;
                }),
                (t._validate = function (e) {
                    var a = e.values,
                        n = e.direction,
                        s = e.wheels,
                        i = e.index,
                        r = t._disabled,
                        o = t._selectOnScroll,
                        l = t.s.selectMultiple,
                        c = t.s.showGroupWheel,
                        d = c ? [t._disabledGroups, r] : [r],
                        h = c ? 1 : 0,
                        u = t._get(a),
                        m = { disabled: d };
                    if (i === h || i === ie)
                        if (l) {
                            var _ = [];
                            u.forEach(function (e) {
                                r.get(e) || _.push(e);
                            }),
                                (m.valid = t._parse(_)),
                                i !== ie && (m.valid[0] = a[0]);
                        } else {
                            if (pe(u) && !o) return (m.valid = c ? [null, null] : [null]), m;
                            var p = Lr(s[h], a[h], r, n);
                            if (c) {
                                var v = Ne(t._options, function (e) {
                                    return e.value === p;
                                });
                                m.valid = [v.group, p];
                            } else m.valid = [p];
                        }
                    else {
                        var f = Lr(s[0], a[0], d[0], n),
                            g = Ne(t._options, function (e) {
                                return !(e.group !== f || (o && r.get(e.value)));
                            }),
                            y = t._touchUi || g.group === ie ? g.value : g.group;
                        if (o) m.valid = [f, y];
                        else {
                            m.valid = [f, a[1]];
                            var b = l ? [y] : y,
                                x = t._touchUi ? f : ie;
                            m.indexes = [x, b];
                        }
                    }
                    return m;
                }),
                (t._setScroller = function (e) {
                    t._scroller = e;
                }),
                (t._setInput = function (e) {
                    t._filterInput = e && e.nativeElement;
                }),
                (t._saveSelected = function (e) {
                    if (t.s.selectMultiple) {
                        var a = new Map();
                        Va(e, function (e) {
                            var n = t._map.get(e);
                            a.set(e, n);
                        }),
                            (t._selectMap = a);
                    }
                }),
                t
            );
        }
        return (
            l(t, e),
            (t.prototype._change = function (e) {}),
            (t.prototype.reloadOptionElements = function () {
                var e = this;
                (this._optionsReloaded = !0),
                    this._setOptionsFromElm(),
                    setTimeout(function () {
                        e.forceUpdate();
                    });
            }),
            (t.prototype.setVal = function (e) {
                this._proxy("setVal", [e]);
            }),
            (t.prototype.getVal = function () {
                return pe(this._parsedValue) ? this._parsedValue : this._proxy("getVal");
            }),
            (t.prototype.setTempVal = function (e) {
                this._proxy("setTempVal", [e]);
            }),
            (t.prototype.getTempVal = function () {
                return this._proxy("getTempVal");
            }),
            (t.prototype.open = function () {
                this._proxy("open");
            }),
            (t.prototype.close = function () {
                this._proxy("close");
            }),
            (t.prototype._render = function (e) {
                var t = this._prevS,
                    a = this._touchUi && (!e.selectMultiple || "ios" === (e.baseTheme || e.theme)),
                    n = this._touchUi && !e.selectMultiple,
                    s = e.element !== t.element || e.selectElement !== t.selectElement,
                    i = e.data !== t.data,
                    r = i || this._optionsReloaded,
                    o = e.placeholder,
                    l = e.display !== t.display || o !== t.placeholder || n !== this._selectOnScroll,
                    c = r || s || e.invalid !== t.invalid || this._selectOnScroll !== n;
                if (
                    ((this._selectOnScroll = n),
                    e.showGroupWheel !== t.showGroupWheel && (this._groupChanged = !0),
                    (s || l) && ((this._isSelect = e.selectElement !== ie), this._isSelect ? this._setOptionsFromElm() : e.element || (this._options = [])),
                    (i || l) && e.data && this._createOptionList(e.data),
                    c &&
                        ((this._disabled = (function (e, t) {
                            var a = new Map();
                            return (
                                e &&
                                    e.forEach(function (e) {
                                        e.disabled && a.set(e.value, !0);
                                    }),
                                t &&
                                    t.forEach(function (e) {
                                        a.set(e, !0);
                                    }),
                                a
                            );
                        })(this._options, e.invalid)),
                        (this._disabledGroups = (function (e, t) {
                            var a = new Map();
                            return (
                                t &&
                                    t.forEach(function (t) {
                                        var n = t.group,
                                            s = t.value;
                                        n && (a.has(n) || a.set(n, !0), e.get(s) || a.set(n, !1));
                                    }),
                                a
                            );
                        })(this._disabled, n ? this._options : ie))),
                    (c || a !== this._spaceAround || this._groupChanged || e.filter !== t.filter || e.selectMultiple !== t.selectMultiple) && this._createWheels(this._filterText, a),
                    r || e.filter !== t.filter || e.touchUi !== t.touchUi || e.rows !== t.rows)
                ) {
                    var d = e.filter ? 1 / 0 : this._wheels[0][e.showGroupWheel ? 1 : 0].data.length,
                        h = (this._respProps || {}).rows,
                        u = this.props.rows,
                        m = this._touchUi ? e.rows : Math.min(h || u || 7, d);
                    this._rows = u || m;
                }
                (this._groupChanged || e.wheelWidth !== t.wheelWidth || e.filter !== t.filter) && (this._wheelWidth = e.wheelWidth || (e.filter ? (e.showGroupWheel ? [150, 250] : 400) : ie)),
                    (this._spaceAround = a),
                    (this._optionsReloaded = !1);
            }),
            (t.prototype._createOptionList = function (e) {
                var t = this.s,
                    a = t.placeholder,
                    n = [],
                    s = new Map(),
                    i = new Map();
                this._selectMap.forEach(function (e, t) {
                    s.set(t, e);
                });
                var r = !1,
                    o = function (e, a) {
                        (e && e.value !== ie) || (e = { text: e, value: e }), pe(e.value) && (r = !0), t.showGroupWheel && e.group === ie && (e.group = Jo), s.set(e.value, e.text), i.set(e.text, e.value), n.splice(a, 0, e);
                    };
                e.forEach(o), "inline" === t.display && this._selectOnScroll && a && !r && o({ value: "", text: a }, 0), (this._map = s), (this._reMap = i), (this._options = n);
            }),
            (t.prototype._proxy = function (e, t) {
                var a = this._inst || this._scroller;
                if (a) return a[e].apply(a, t);
            }),
            (t.prototype._createWheels = function (e, t) {
                var a = this,
                    n = this.s,
                    s = n.selectMultiple,
                    i =
                        n.filter && e
                            ? (function (e, t) {
                                  if (!t) return e;
                                  var a = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                                      n = new RegExp(a, "i");
                                  return e.filter(function (e) {
                                      return n.test(e.text);
                                  });
                              })(this._options, e)
                            : this._options,
                    r = [],
                    o = [],
                    l = new Map();
                i.forEach(function (e) {
                    var t = e.group,
                        n = t && t !== Jo ? t : "",
                        s = l.get(n),
                        i = { display: e.text, value: e.value, data: e, disabled: a._disabled.get(e.value) };
                    s ? s.push(i) : l.set(n, [i]);
                });
                var c = l.get("");
                c && (r.push.apply(r, c), this._selectOnScroll && o.push({ display: "", value: Jo })),
                    l.forEach(function (e, t) {
                        t && (r.push({ display: t, isGroup: !0, value: t }), r.push.apply(r, e), o.push({ display: t, value: t }), a._disabled.set(t, !0));
                    });
                var d = { checkmark: !0, circular: !1, closeOnTap: !s, data: r, multiple: s, spaceAround: t },
                    h = { checkmark: !1, circular: !1, cssClass: "mbsc-select-group-wheel" + (s ? " mbsc-select-group-wheel-multi" : ""), data: o, multiple: !1, spaceAround: t };
                (this._noResults = n.filter && !i.length), (this._wheels = n.showGroupWheel ? [[h, d]] : [[d]]);
            }),
            (t.prototype._setOptionsFromElm = function () {
                for (var e = this.s.selectElement, t = e.options, a = [], n = !1, s = !1, i = 0; i < t.length; i++) {
                    var r = t[i],
                        o = r.parentElement,
                        l = "optgroup" === o.nodeName.toLowerCase() ? o.label : ie;
                    "" !== r.value ? a.push({ disabled: r.disabled, group: l, text: r.text, value: r.value }) : (n = !0), r.defaultSelected && (s = !0);
                }
                n || (e.insertBefore(new Option(""), e.childNodes[0] || null), s || (e.value = "")), this._createOptionList(a);
            }),
            (t.prototype._filter = function (e) {
                !1 !== this._hook("onFilter", { filterText: e }) && ((this._filterText = e), this._createWheels(e, this._spaceAround)), this.forceUpdate();
            }),
            (t.defaults = c({}, Si.defaults, { dropdown: !0, filterEmptyText: "No results", filterPlaceholderText: "Search", rows: 5 })),
            (t._name = "Select"),
            t
        );
    })(Xn);
    function Go(e) {
        var t = e.s;
        return qa(
            "div",
            { className: "mbsc-select-filter-cont" + e._theme + e._rtl },
            qa(Jr, {
                ref: e._setInput,
                autoComplete: "off",
                className: "mbsc-select-filter",
                inputClass: "mbsc-select-filter-input",
                placeholder: t.filterPlaceholderText,
                onInput: e._onFilterChange,
                theme: t.theme,
                themeVariant: t.themeVariant,
                rtl: t.rtl,
                inputStyle: "box",
            }),
            e._filterText ? qa(Ri, { className: "mbsc-select-filter-clear" + e._rtl, onClick: e._onFilterClear, svg: t.clearIcon, theme: t.theme }) : null
        );
    }
    function Zo(e) {
        return e._noResults ? qa("div", { className: "mbsc-select-empty-text mbsc-flex" + e._theme }, e.s.filterEmptyText) : null;
    }
    var Qo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._filterRenderer = function () {
                        return Go(t);
                    }),
                    (t._filterEmptyRenderer = function () {
                        return Zo(t);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, a, n) {
                        return qa(
                            $r,
                            {
                                ariaLabel: e.ariaLabel,
                                activeElm: e.filter ? ".mbsc-select-filter-input" : ie,
                                anchor: e.anchor,
                                animation: e.animation,
                                buttons: e.buttons,
                                cancelText: e.cancelText,
                                circular: e.circular,
                                className: (e.cssClass || "") + (t._noResults ? " mbsc-select-empty" : "") + " mbsc-select-scroller mbsc-select-scroller-" + e.display,
                                clearText: e.clearText,
                                closeOnEsc: e.closeOnEsc,
                                closeOnOverlayClick: e.closeOnOverlayClick,
                                closeText: e.closeText,
                                context: e.context,
                                defaultValue: e.defaultValue,
                                disabled: e.disabled,
                                display: e.display,
                                dropdown: e.dropdown,
                                element: e.element,
                                endIcon: e.endIcon,
                                endIconSrc: e.endIconSrc,
                                endIconSvg: e.endIconSvg,
                                error: e.error,
                                errorMessage: e.errorMessage,
                                focusOnClose: e.focusOnClose,
                                focusOnOpen: e.focusOnOpen,
                                focusTrap: e.focusTrap,
                                formatValue: t._format,
                                getValue: t._get,
                                headerText: e.headerText,
                                height: e.height,
                                inputComponent: e.inputComponent,
                                inputProps: e.inputProps,
                                inputStyle: e.inputStyle,
                                invalid: e.invalid,
                                itemHeight: e.itemHeight,
                                isOpen: e.isOpen,
                                label: e.label,
                                labelStyle: e.labelStyle,
                                maxHeight: e.maxHeight,
                                maxWheelWidth: e.maxWheelWidth,
                                maxWidth: e.maxWidth,
                                minWheelWidth: e.minWheelWidth,
                                modelValue: e.modelValue,
                                name: e.name,
                                onCancel: t._proxyHook,
                                onChange: t._onChange,
                                onClose: t._onClose,
                                onOpen: t._proxyHook,
                                onResize: t._onResize,
                                onTempChange: t._proxyHook,
                                onWheelMove: t._onWheelMove,
                                parseValue: t._parse,
                                placeholder: e.placeholder,
                                ref: t._setScroller,
                                renderInContent: t._filterEmptyRenderer,
                                renderItem: n ? n.item : e.renderItem,
                                renderPreContent: e.filter ? t._filterRenderer : ie,
                                rows: t._rows,
                                rtl: e.rtl,
                                selectMultiple: e.selectMultiple,
                                selectOnScroll: t._selectOnScroll,
                                setText: e.setText,
                                shouldValidate: t._shouldValidate,
                                showArrow: e.showArrow,
                                showInput: e.showInput,
                                showOnClick: e.showOnClick,
                                showOnFocus: e.showOnFocus,
                                showOverlay: e.showOverlay,
                                startIcon: e.startIcon,
                                startIconSrc: e.startIconSrc,
                                startIconSvg: e.startIconSvg,
                                tagInput: e.tagInput,
                                theme: e.theme,
                                themeVariant: e.themeVariant,
                                touchUi: t._touchUi,
                                validate: t._validate,
                                value: e.value,
                                valueEquality: t._valueEquals,
                                valueMap: t._map,
                                wheelWidth: t._wheelWidth,
                                wheels: t._wheels,
                                width: e.width,
                                writeValue: t._writeValue,
                            },
                            a
                        );
                    })(e, this, e.children);
                }),
                t
            );
        })(qo),
        $o = {
            before: function (e, t) {
                if ("select" === e.nodeName.toLowerCase()) {
                    var a = e;
                    (e.style.display = "none"),
                        t.inputElement || "inline" === t.display ? (t.element = t.inputElement || e) : ((t.inputComponent = "input"), (t.showInput = !0)),
                        (t.selectElement = a),
                        t.selectMultiple !== ie ? (a.multiple = t.selectMultiple) : (t.selectMultiple = a.multiple);
                    for (var n = [], s = a.options, i = 0; i < s.length; i++) {
                        var r = s[i];
                        r.defaultSelected && n.push(r.value);
                    }
                    n.length && (t.defaultValue = t.selectMultiple ? n : n[0]);
                } else (t.element = e), (t.defaultValue = e.value);
            },
        },
        el = Io(Qo, $o),
        tl = new m();
    function al(e) {
        return tl.subscribe(e);
    }
    function nl(e) {
        tl.unsubscribe(e);
    }
    function sl(e, t) {
        (t.style.left = e.endX + "px"), (t.style.top = e.endY + "px");
    }
    var il = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    e.dragData !== this._prevS.dragData && (this._dragData = _e(e.dragData) ? JSON.parse(e.dragData.toString()) : e.dragData);
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s.element || this._el;
                    if (this._unlisten === ie && t) {
                        var a, n, s;
                        t.classList.add("mbsc-draggable");
                        var i = wa(t).body;
                        this._unlisten = Ji(t, {
                            onEnd: function (t) {
                                if (n) {
                                    var r = c({}, t);
                                    r.domEvent.preventDefault(), (r.action = "externalDrop"), (r.dragData = e._dragData), (r.create = !0), (r.external = !0), (r.eventName = "onDragEnd"), tl.next(r), (n = !1), i.removeChild(a);
                                }
                                clearTimeout(s);
                            },
                            onMove: function (t) {
                                var r = c({}, t);
                                (r.dragData = e._dragData),
                                    (r.clone = a),
                                    (r.create = !0),
                                    (r.external = !0),
                                    (!n && r.isTouch) || r.domEvent.preventDefault(),
                                    n
                                        ? (sl(t, a), (r.eventName = "onDragMove"), tl.next(r))
                                        : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(s), r.isTouch || (sl(t, a), i.appendChild(a), (r.eventName = "onDragStart"), tl.next(r), (n = !0)));
                            },
                            onStart: function (r) {
                                var o = c({}, r);
                                n ||
                                    ((a = t.cloneNode(!0)).classList.add("mbsc-drag-clone"),
                                    (o.dragData = e._dragData),
                                    (o.create = !0),
                                    (o.external = !0),
                                    o.isTouch &&
                                        (s = setTimeout(function () {
                                            sl(r, a), i.appendChild(a), (o.clone = a), (o.eventName = "onDragModeOn"), tl.next(o), (o.eventName = "onDragStart"), tl.next(o), (n = !0);
                                        }, 350)));
                            },
                        });
                    }
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && (this._unlisten(), (this._unlisten = ie));
                }),
                (t._name = "Draggable"),
                t
            );
        })(Xn),
        rl = 1;
    function ol(e, t, a, n, s, i) {
        var r = a,
            o = n,
            l = new Map(),
            d = [];
        s && (r = Kt(s, t)), i ? (o = Kt(i, t)) : s && (o = $t(r, 1));
        var h = cs(e, r, o, t);
        for (var u in h)
            if (u)
                for (var m = 0, _ = h[u]; m < _.length; m++) {
                    var p = _[m];
                    if (p.start) {
                        if (!l.has(p)) {
                            var v = Kt(p.start, t),
                                f = Kt(p.end, t) || v;
                            if ((p.allDay && ((v = jt(t, v.getFullYear(), v.getMonth(), v.getDate())), (f = jt(t, (f = It(t, !0, v, f)).getFullYear(), f.getMonth(), f.getDate(), 23, 59, 59, 999))), Mt(r, o, v, f))) {
                                var g = c({}, p);
                                (t.dataTimezone || t.displayTimezone) && ((g.start = v.toISOString()), (g.end = f.toISOString())), l.set(p, !0), d.push(g);
                            }
                        }
                    } else d.push(p);
                }
        return d;
    }
    function ll() {
        return "mbsc_" + rl++;
    }
    function cl(e, t, a, n, s, i, r, o, l, c) {
        var d = t.color || (s && s.color),
            h = t.start || t.date,
            u = t.recurring ? t.original.start : t.start,
            m = t.allDay || !u,
            _ = ts(e, t),
            p = h ? Kt(h, _) : null,
            v = t.end ? Kt(t.end, _) : null,
            f = It(e, t.allDay, p, v, i),
            g = p && f && !zt(p, f),
            y = !g || zt(p, a),
            b = !g || zt(f, a),
            x = !c && (m || (r && g && !y && !b)),
            D = "",
            T = "";
        if (!l)
            if (c) {
                var S = e.dateFormat + (m ? "" : e.separator + e.timeFormat);
                (D = p ? qt(S, p, e) : ""), (T = v ? qt(S, m ? f : v, e) : "");
            } else r || o ? m || ((D = p ? qt(e.timeFormat, p, e) : ""), (T = v ? qt(e.timeFormat, v, e) : "")) : ((D = p ? qt(e.dateFormat, p, e) : ""), (T = v ? qt(e.dateFormat, f, e) : ""));
        var C = x || (!y && r && !c) ? "" : D,
            w = x || (!b && r && !c) ? "" : T,
            k = t.title || t.text || "",
            M = k,
            E = M + (x ? "" : ", " + C + " - " + w),
            N = e.dateFormatFull,
            I = !l && p ? ", " + e.fromText + ": " + qt(N, p, e) + (m ? "" : ", " + D) : "",
            L = !l && v ? ", " + e.toText + ": " + qt(N, v, e) + (m ? "" : ", " + T) : "",
            H = s && s.name ? ", " + s.name : "";
        return {
            allDay: m,
            allDayText: x ? e.allDayText : "",
            ariaLabel: M + H + I + L,
            color: d,
            currentResource: s,
            date: +a,
            end: w,
            endDate: v || (p ? new Date(p) : null),
            html: k,
            id: t.id,
            isMultiDay: g,
            lastDay: !x && g && b ? e.toText : "",
            original: t,
            position: {},
            resource: t.resource,
            slot: t.slot,
            start: C,
            startDate: p,
            style: { background: d, color: n && d ? La(d) : "" },
            title: M,
            tooltip: e.showEventTooltip ? t.tooltip || E : ie,
            uid: t.occurrenceId ? t.occurrenceId : t.id,
        };
    }
    function dl(e) {
        var t = [];
        if (e)
            for (var a = 0, n = e; a < n.length; a++) {
                var s = n[a];
                s.id === ie && (s.id = ll()), t.push(s);
            }
        return t;
    }
    function hl(e, t, a, n, s, i, r, o, l) {
        if ("start-end" === o) {
            var c = Ci(e, n, t, a, i, r),
                d = Ci(e, s, t, a, i, r);
            if (c) return c;
            if (d) return d;
        } else
            for (var h = l ? s : Ht($t(s, 1)), u = Ht(n); u < h; u.setDate(u.getDate() + 1)) {
                var m = Ci(e, u, t, a, i, r);
                if (m) return m;
            }
        return !1;
    }
    function ul(e, t, a, n, s) {
        for (var i = s.exclusiveEndDates ? a : Ht($t(a, 1)), r = Ht(t); r < i; r.setDate(r.getDate() + 1)) {
            var o = (n[Lt(r)] || []).filter(function (t) {
                return t.id !== e.id;
            });
            if (o.length) {
                if (!1 === s.eventOverlap || !1 === e.overlap) return o[0];
                for (var l = 0, c = o; l < c.length; l++) {
                    var d = c[l];
                    if (!1 === d.overlap) return d;
                }
            }
        }
        return !1;
    }
    var ml = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.print = xe),
                    (t._checkSize = 0),
                    (t._navService = new Oi()),
                    (t._pageLoad = 0),
                    (t._selectedDates = {}),
                    (t._shouldScrollSchedule = 0),
                    (t._update = 0),
                    (t._onScroll = we(function () {
                        if (!t._isListScrolling && !t._viewChanged)
                            for (var e in t._listDays)
                                if (t._listDays[e]) {
                                    var a = t._listDays[e];
                                    if (a.offsetTop + a.offsetHeight - t._list.scrollTop > 0) {
                                        +e !== t._selected && ((t._shouldSkipScroll = !0), t._selectedChange(+e));
                                        break;
                                    }
                                }
                    })),
                    (t._isListScrolling = 0),
                    (t._remote = 0),
                    (t._tempViewChanged = !1),
                    (t._onWeekDayClick = function (e) {
                        e !== t._selected && ((t._skipScheduleScroll = !0), t._selectedChange(e));
                    }),
                    (t._onDayClick = function (e) {
                        var a = e.date,
                            n = +a,
                            s = Lt(a),
                            i = Cs(t._eventMap[s], t.s.eventOrder),
                            r = t._showEventPopover,
                            o = r === ie ? !t._showEventLabels && !t._showEventList && !t._showSchedule : r,
                            l = !1 !== r && t._moreLabelClicked,
                            c = (o || l) && i && i.length > 0;
                        (e.events = i),
                            t._isEventClick || t._resetSelection(),
                            t._hook("onCellClick", e),
                            (t._moreLabelClicked = !1),
                            e.disabled || n === t._selected || ((t._navService.preventPageChange = !t._showEventList), (t._skipScheduleScroll = !0), t._selectedChange(n)),
                            c &&
                                t._showPopover(
                                    n,
                                    n,
                                    i.map(function (e) {
                                        return t._getEventData(e, a);
                                    }),
                                    e.target
                                ),
                            (t._isEventClick = !1);
                    }),
                    (t._onActiveChange = function (e) {
                        if (e.scroll) t._viewDate = +e.date;
                        else {
                            var a = t._getValidDay(e.date, e.dir),
                                n = { activeDate: a };
                            (t._active = a),
                                (t._viewDate = a),
                                t._update++,
                                (t._skipScheduleScroll = e.pageChange && !e.nav),
                                (e.pageChange || e.today) && ((n.selectedDate = a), t._selectedChange(a, !0), (t._navService.forcePageChange = !0)),
                                t.setState(n);
                        }
                    }),
                    (t._onGestureStart = function (e) {
                        t._hidePopover();
                    }),
                    (t._onDayDoubleClick = function (e) {
                        t._dayClick("onCellDoubleClick", e);
                    }),
                    (t._onDayRightClick = function (e) {
                        t._dayClick("onCellRightClick", e);
                    }),
                    (t._onCellHoverIn = function (e) {
                        (e.events = t._eventMap[Lt(e.date)]), t._hook("onCellHoverIn", e);
                    }),
                    (t._onCellHoverOut = function (e) {
                        (e.events = t._eventMap[Lt(e.date)]), t._hook("onCellHoverOut", e);
                    }),
                    (t._onEventHoverIn = function (e) {
                        t._hoverTimer = setTimeout(function () {
                            (t._isHover = !0), t._eventClick("onEventHoverIn", e);
                        }, 150);
                    }),
                    (t._onEventHoverOut = function (e) {
                        clearTimeout(t._hoverTimer), t._isHover && ((t._isHover = !1), t._eventClick("onEventHoverOut", e));
                    }),
                    (t._onEventClick = function (e) {
                        var a = t.s;
                        t._handleMultipleSelect(e), !1 === t._eventClick("onEventClick", e) || a.selectMultipleEvents || a.eventDelete || ((a.dragToCreate || a.clickToCreate) && !1 !== a.eventDelete) || t._hidePopover();
                    }),
                    (t._onEventDoubleClick = function (e) {
                        t._eventClick("onEventDoubleClick", e);
                    }),
                    (t._onEventRightClick = function (e) {
                        t._eventClick("onEventRightClick", e);
                    }),
                    (t._onEventDragEnd = function (e) {
                        t._hook("onEventDragEnd", e);
                    }),
                    (t._onEventDragStart = function (e) {
                        t._hook("onEventDragStart", e);
                    }),
                    (t._onEventDragEnter = function (e) {
                        t._hook("onEventDragEnter", e);
                    }),
                    (t._onEventDragLeave = function (e) {
                        t._hook("onEventDragLeave", e);
                    }),
                    (t._onLabelHoverIn = function (e) {
                        t._hoverTimer = setTimeout(function () {
                            (t._isHover = !0), t._labelClick("onEventHoverIn", e);
                        }, 150);
                    }),
                    (t._onLabelHoverOut = function (e) {
                        clearTimeout(t._hoverTimer), t._isHover && ((t._isHover = !1), t._labelClick("onEventHoverOut", e));
                    }),
                    (t._onLabelClick = function (e) {
                        t._handleMultipleSelect(e), t._hook("onLabelClick", e), t._labelClick("onEventClick", e), (t._isEventClick = !0), e.label || (t._moreLabelClicked = !0);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        t._labelClick("onEventDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        t._labelClick("onEventRightClick", e);
                    }),
                    (t._onCellClick = function (e) {
                        t._resetSelection(), t._cellClick("onCellClick", e);
                    }),
                    (t._onCellDoubleClick = function (e) {
                        t._cellClick("onCellDoubleClick", e);
                    }),
                    (t._onCellRightClick = function (e) {
                        t._cellClick("onCellRightClick", e);
                    }),
                    (t._proxy = function (e) {
                        t._hook(e.type, e);
                    }),
                    (t._onPageChange = function (e) {
                        setTimeout(function () {
                            t._hidePopover();
                        }),
                            (t._isPageChange = !0),
                            t._hook("onPageChange", e);
                    }),
                    (t._onPageLoading = function (e) {
                        var a = t.s,
                            n = cs(t._events, e.viewStart, e.viewEnd, a);
                        (t._colorsMap = cs(a.colors, e.viewStart, e.viewEnd, a)),
                            (t._invalidsMap = cs(a.invalid, e.viewStart, e.viewEnd, a, !0)),
                            (t._validsMap = cs(a.valid, e.viewStart, e.viewEnd, a, !0)),
                            (t._eventMap = n),
                            (t._firstDay = Ft(e.firstDay, a, t._firstWeekDay)),
                            (t._lastDay = e.lastDay),
                            (t._labelsMap = t._marksMap = ie),
                            a.labels || (!t._showEventLabels && !t._showEventCount) ? a.marked || (t._marksMap = n) : (t._labelsMap = n),
                            e.viewChanged && t._hook("onPageLoading", e);
                    }),
                    (t._onPageLoaded = function (e) {
                        (t._shouldAnimateScroll = t._isPageChange), (t._isPageChange = !1);
                        var a = t._eventListType;
                        if (t._showEventList && (!t._showCalendar || "day" !== a)) {
                            var n = t.s,
                                s = e.month,
                                i = t._showEventList && s && "month" === a,
                                r = i ? s : e.firstDay,
                                o = i ? n.getDate(n.getYear(s), n.getMonth(s) + t._eventListSize, 1) : e.lastDay;
                            t._setEventList(r, o);
                        }
                        t._hook("onPageLoaded", e);
                    }),
                    (t._onMoreClick = function (e) {
                        t._showPopover(
                            e.key,
                            +e.date,
                            e.list.map(function (a) {
                                return t._getEventData(a.original, new Date(e.date), a.currentResource, !0);
                            }),
                            e.target,
                            e.context,
                            e.inst
                        );
                    }),
                    (t._onPopoverClose = function (e) {
                        var a = t.state;
                        a.popoverHost && "dragStart" === e.source ? t.setState({ popoverDrag: !0, popoverHidden: !0 }) : (a.popoverHost && "scroll" === e.source && a.popoverDrag) || t._hidePopover();
                    }),
                    (t._onResize = function (e) {
                        var a;
                        if (t._showEventList && v) {
                            var n = e.target,
                                s = n.offsetHeight,
                                i = n.getBoundingClientRect().top;
                            a = s - t._list.getBoundingClientRect().top + i > 170;
                        }
                        t.setState({ height: e.height, isListScrollable: a, width: e.width });
                    }),
                    (t._onSelectedEventsChange = function (e) {
                        t._emit("selectedEventsChange", e), t._hook("onSelectedEventsChange", { events: e });
                    }),
                    (t._getDragDates = function (e, a, n) {
                        for (var s = {}, i = t._firstWeekDay, r = It(t.s, n.allDay, e, a, !0), o = Ht($t(r, 1)), l = Ht(e); l < o; l.setDate(l.getDate() + 1)) {
                            var c = l.getDay(),
                                d = i - c > 0 ? 7 : 0;
                            zt(e, l) || c === i ? (s[Lt(l)] = { event: n, width: 100 * Math.min(Yt(l, r) + 1, 7 + i - c - d) }) : (s[Lt(l)] = {});
                        }
                        return s;
                    }),
                    (t._onLabelUpdateModeOn = function (e) {
                        var a = e.create ? t._tempEvent : e.event,
                            n = Kt(a.start),
                            s = Kt(a.end || n);
                        t.setState({ isTouchDrag: !0, labelDragData: { draggedEvent: a, originDates: e.external ? ie : t._getDragDates(n, s, a) } });
                    }),
                    (t._onLabelUpdateModeOff = function (e) {
                        t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.create ? t._tempEvent : e.event, source: "calendar" }), t.setState({ isTouchDrag: !1, labelDragData: ie });
                    }),
                    (t._onLabelUpdateStart = function (e) {
                        var a = t.s,
                            n = t._el;
                        if (a.externalDrag && e.drag && !e.create) {
                            var s = n.querySelector(".mbsc-calendar-label[data-id='" + e.event.id + "']") || Fa(e.domEvent.target, ".mbsc-list-item");
                            if (s) {
                                var i = s.cloneNode(!0),
                                    r = i.classList;
                                (i.style.display = "none"),
                                    r.add("mbsc-drag-clone", "mbsc-schedule-drag-clone", "mbsc-font"),
                                    r.remove("mbsc-calendar-label-hover", "mbsc-hover", "mbsc-focus", "mbsc-active"),
                                    (t._clone = i),
                                    (t._body = wa(n).body),
                                    t._body.appendChild(i),
                                    (t._eventDropped = !1),
                                    tl.next(c({}, e, { create: !0, dragData: e.event, eventName: "onDragStart", external: !0, from: t }));
                            }
                        }
                        var o = t._showWeekNumbers ? n.querySelector(".mbsc-calendar-week-nr").getBoundingClientRect().width : 0,
                            l = n.querySelectorAll(".mbsc-calendar-slide-active")[0],
                            d = l.getBoundingClientRect(),
                            h = n.querySelector(".mbsc-calendar-week-days"),
                            u = l.querySelectorAll(".mbsc-calendar-row"),
                            m = /click/.test(e.domEvent.type);
                        if (((t._areaTop = 0), h)) {
                            var _ = h.getBoundingClientRect();
                            t._areaTop = _.top + _.height;
                        }
                        (t._areaLeft = d.left + (a.rtl ? 0 : o)), (t._areaBottom = d.top + d.height), (t._areaRight = t._areaLeft + d.width - (a.rtl ? o : 0)), (t._calCellWidth = (t._areaRight - t._areaLeft) / 7);
                        var p = 0;
                        if (
                            ((t._rowTops = []),
                            u.forEach(function (a, n) {
                                var s = a.getBoundingClientRect().top - t._areaTop;
                                t._rowTops.push(s), e.endY - t._areaTop > s && (p = n);
                            }),
                            e.create)
                        ) {
                            var v = Ce((a.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                                f = $t(t._firstDay, 7 * p + v),
                                g = new Date(f.getFullYear(), f.getMonth(), f.getDate()),
                                y = $t(g, 1),
                                b = a.exclusiveEndDates ? y : new Date(+y - 1),
                                x = a.extendDefaultEvent ? a.extendDefaultEvent({ start: g }) : ie;
                            t._tempEvent = c({ allDay: !0, end: b, id: ll(), start: g, title: a.newEventText }, e.dragData, x);
                        }
                        m || t._hook("onEventDragStart", { action: e.create ? "create" : e.resize ? "resize" : "move", domEvent: e.domEvent, event: e.create ? t._tempEvent : e.event, source: "calendar" });
                    }),
                    (t._onLabelUpdateMove = function (e) {
                        var a = t.s,
                            n = e.create ? t._tempEvent : e.event,
                            s = c({}, n),
                            i = t.state.labelDragData,
                            r = n.allDay ? ie : a;
                        if (a.externalDrag && e.drag && !e.create && t._clone && (tl.next(c({}, e, { clone: t._clone, create: !0, dragData: e.event, eventName: "onDragMove", external: !0, from: t })), !t._onCalendar))
                            return sl(e, t._clone), void ((i && i.draggedEvent) || t.setState({ labelDragData: { draggedEvent: s } }));
                        if (e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight) {
                            var o = Ce((a.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                                l = Ce((a.rtl ? t._areaRight - e.startX : e.startX - t._areaLeft) / t._calCellWidth),
                                d = 0,
                                h = 0;
                            t._rowTops.forEach(function (a, n) {
                                e.startY - t._areaTop > a && (h = n), e.endY - t._areaTop > a && (d = n);
                            });
                            var u = 7 * (d - h) + (o - l);
                            if (o !== t._tempDay || d !== t._tempWeek) {
                                var m = Kt(n.start, r),
                                    _ = Kt(n.end, r) || m,
                                    p = ks(n.dragInTime, ie, a.dragInTime),
                                    v = m,
                                    f = _;
                                if (e.external) {
                                    var g = kt(m),
                                        y = +_ - +m;
                                    p && ((v = jt(a, +$t(t._firstDay, 7 * d + o) + g)), (f = jt(a, +v + y)));
                                } else if (e.drag) {
                                    if (!p) return;
                                    (v = $t(m, u)), (f = $t(_, u));
                                } else {
                                    var b = a.rtl ? -1 : 1,
                                        x = e.create ? (d === h ? e.deltaX * b > 0 : u > 0) : "end" === e.direction,
                                        D = Yt(m, _);
                                    x ? (f = $t(_, Math.max(-D, u))) : (v = $t(m, Math.min(D, u))), f < v && (x ? (f = jt(r, v)) : (v = jt(r, f)));
                                }
                                (s.start = v), (s.end = f), t.setState({ labelDragData: { draggedDates: t._getDragDates(v, f, s), draggedEvent: s, originDates: i && i.originDates }, popoverHidden: !0 }), (t._tempDay = o), (t._tempWeek = d);
                            }
                        }
                    }),
                    (t._onLabelUpdateEnd = function (e) {
                        var a = t.s,
                            n = t.state,
                            s = e.create,
                            i = n.labelDragData || {},
                            r = s ? t._tempEvent : e.event,
                            o = i.draggedEvent || r,
                            l = Kt(r.start),
                            d = Kt(r.end),
                            h = Kt(o.start),
                            u = Kt(o.end),
                            m = s || +l != +h || +d != +u,
                            _ = { allDay: r.allDay, endDate: u, original: r, startDate: h },
                            p = !1;
                        a.externalDrag &&
                            e.drag &&
                            !e.create &&
                            t._clone &&
                            (tl.next(c({}, e, { action: "externalDrop", create: !0, dragData: e.event, eventName: "onDragEnd", external: !0, from: t })),
                            t._body.removeChild(t._clone),
                            (t._clone = ie),
                            t._onCalendar || ((p = !0), t._eventDropped && t._onEventDelete(e)));
                        var v = e.action || (i.draggedEvent ? "drag" : "click"),
                            f =
                                !p &&
                                (!m ||
                                    t._onEventDragStop({
                                        action: v,
                                        collision: hl(a, t._invalidsMap, t._validsMap, h, u, t._minDate, t._maxDate, a.invalidateEvent, a.exclusiveEndDates),
                                        create: s,
                                        domEvent: e.domEvent,
                                        event: _,
                                        from: e.from,
                                        overlap: ul(r, h, u, t._eventMap, a),
                                        source: "calendar",
                                    })),
                            g = n.isTouchDrag && !p && (!s || f);
                        g || "click" === v || t._hook("onEventDragEnd", { domEvent: e.domEvent, event: r, source: "calendar" }),
                            t.setState({ isTouchDrag: g, labelDragData: g ? { draggedEvent: f ? o : c({}, r), originDates: f ? t._getDragDates(h, u, _.original) : i.originDates } : {} }),
                            e.drag && t._hidePopover(),
                            (t._tempWeek = -1),
                            (t._tempDay = -1);
                    }),
                    (t._onEventDragStop = function (e) {
                        var a = t.s,
                            n = e.action,
                            s = e.resource,
                            i = e.slot,
                            r = e.collision,
                            o = e.overlap,
                            l = e.create,
                            d = e.source,
                            h = e.event,
                            u = h.original,
                            m = u.recurring ? u.original : u,
                            _ = a.immutableData ? c({}, m) : m,
                            p = c({}, _),
                            v = c({}, _),
                            f = u.timezone,
                            g = Dt(u.start, a, f),
                            y = Dt(h.startDate, a, f),
                            b = Dt(h.endDate, a, f),
                            x = h.allDay,
                            D = v.recurring;
                        D ? (v.recurringException = os(v.recurringException).concat([g])) : ((v.allDay = x), (v.start = y), (v.end = b), s !== ie && (v.resource = s), i !== ie && (v.slot = i));
                        var T = !1,
                            S = D ? c({}, _) : _;
                        return (
                            (l || D) &&
                                (D && delete S.recurring,
                                (D || S.id === ie) && (S.id = ll()),
                                s !== ie && (S.resource = s),
                                i !== ie && (S.slot = i),
                                (S.start = y),
                                (S.end = b),
                                (S.allDay = x),
                                (T = !1 !== t._hook("onEventCreate", c({ action: n, domEvent: e.domEvent, event: S, source: d }, D && { originEvent: u }))),
                                (!1 === r && !1 === o) || ((T = !1), t._hook("onEventCreateFailed", c({ action: n, event: S, invalid: r, overlap: o, source: d }, D && { originEvent: u })))),
                            (l && !D) ||
                                ((T = !1 !== t._hook("onEventUpdate", c({ domEvent: e.domEvent, event: v, oldEvent: p, source: d }, D && { newEvent: S, oldEventOccurrence: u }))),
                                (!1 === r && !1 === o) || ((T = !1), t._hook("onEventUpdateFailed", c({ event: v, invalid: r, oldEvent: p, overlap: o, source: d }, D && { newEvent: S, oldEventOccurrence: u })))),
                            T
                                ? (e.from && (e.from._eventDropped = !0),
                                  (l || D) && (t._events.push(S), (t._triggerCreated = { action: n, event: S, source: d })),
                                  (l && !D) ||
                                      (D ? ((h.id = S.id), (h.original = S), (_.recurringException = v.recurringException)) : ((_.start = y), (_.end = b), (_.allDay = x), s !== ie && (_.resource = s), i !== ie && (_.slot = i)),
                                      (t._triggerUpdated = { event: _, oldEvent: p, source: d })),
                                  (t._refresh = !0),
                                  "calendar" !== d && t.forceUpdate())
                                : t._hidePopover(),
                            T
                        );
                    }),
                    (t._onExternalDrag = function (e) {
                        var a = t.s,
                            n = e.clone,
                            s = e.from === t,
                            i = !s && a.externalDrop,
                            r = s && a.externalDrag && !a.dragToMove,
                            o = t.state.labelDragData;
                        if (t._showCalendar && (i || a.externalDrag)) {
                            var l = !r && e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight;
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    i && t._onLabelUpdateModeOff(e);
                                    break;
                                case "onDragModeOn":
                                    i && t._onLabelUpdateModeOn(e);
                                    break;
                                case "onDragStart":
                                    i ? t._onLabelUpdateStart(e) : s && (t._onCalendar = !0);
                                    break;
                                case "onDragMove":
                                    if (!s && !i) return;
                                    l
                                        ? (t._onCalendar || t._hook("onEventDragEnter", { domEvent: e.domEvent, event: e.dragData, source: "calendar" }),
                                          (s || i) && (n.style.display = "none"),
                                          i && t._onLabelUpdateMove(e),
                                          (t._onCalendar = !0))
                                        : t._onCalendar &&
                                          (t._hook("onEventDragLeave", { domEvent: e.domEvent, event: e.dragData, source: "calendar" }),
                                          (n.style.display = "table"),
                                          (!s || (o && o.draggedEvent)) && t.setState({ labelDragData: { draggedDates: {}, draggedEvent: s ? o && o.draggedEvent : ie, originDates: s ? o && o.originDates : ie } }),
                                          (t._tempWeek = -1),
                                          (t._tempDay = -1),
                                          (t._onCalendar = !1));
                                    break;
                                case "onDragEnd":
                                    i && (l ? t._onLabelUpdateEnd(e) : (t.setState({ labelDragData: ie }), t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.dragData, source: "calendar" })));
                            }
                        }
                    }),
                    (t._onEventDelete = function (e) {
                        var a,
                            n = t.s;
                        if ((n.eventDelete !== ie || n.dragToCreate || n.clickToCreate) && !1 !== n.eventDelete) {
                            for (
                                var s, i, r, o = !1, l = !1, d = !1, h = e.event, u = h, m = n.selectMultipleEvents, _ = m ? t._selectedEventsMap : (((a = {})[h.id] = h), a), p = [], v = [], f = [], g = {}, y = [], b = 0, x = Oe(_);
                                b < x.length;
                                b++
                            ) {
                                var D = x[b];
                                if (D.recurring) {
                                    (u = D), (l = !0);
                                    var T = (s = D.original).id;
                                    g[T] ? (r = g[T]) : ((i = c({}, s)), (r = c({}, s)), v.push(s), p.push(i), f.push(r), (g[T] = r));
                                    var S = Dt(D.start, n);
                                    r.recurringException = os(r.recurringException).concat([S]);
                                } else (d = !0), (h = D), y.push(D);
                            }
                            if (l)
                                if (!1 !== t._hook("onEventUpdate", { domEvent: e.domEvent, event: r, events: m ? f : ie, isDelete: !0, oldEvent: m ? ie : i, oldEventOccurrence: u, oldEvents: m ? p : ie, source: e.source })) {
                                    o = !0;
                                    for (var C = 0, w = v; C < w.length; C++) {
                                        var k = w[C],
                                            M = g[k.id];
                                        k.recurringException = M.recurringException;
                                    }
                                    t._triggerUpdated = { event: s, events: m ? v : ie, oldEvent: m ? ie : i, oldEvents: m ? p : ie, source: e.source };
                                }
                            if (d)
                                !1 !== t._hook("onEventDelete", { domEvent: e.domEvent, event: h, events: m ? y : ie, source: e.source }) &&
                                    ((o = !0),
                                    (t._events = t._events.filter(function (e) {
                                        return !_[e.id];
                                    })),
                                    (t._selectedEventsMap = {}),
                                    (t._triggerDeleted = { event: h, events: m ? y : ie, source: e.source }));
                            o && (t._hidePopover(), t.refresh());
                        }
                    }),
                    (t._setEl = function (e) {
                        (t._el = e ? e._el || e : null), (t._calendarView = e);
                    }),
                    (t._setList = function (e) {
                        t._list = e;
                    }),
                    (t._setPopoverList = function (e) {
                        t._popoverList = e && e._el;
                    }),
                    (t._onKeyDown = function (e) {
                        9 === e.keyCode && t._resetSelection();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype.addEvent = function (e) {
                    for (var t = [], a = 0, n = dl(he(e) ? e : [e]); a < n.length; a++) {
                        var s = n[a];
                        t.push("" + s.id), this._events.push(s);
                    }
                    return this.refresh(), t;
                }),
                (t.prototype.getEvents = function (e, t) {
                    return ol(this._events, this.s, this._firstDay, this._lastDay, e, t);
                }),
                (t.prototype.getInvalids = function (e, t) {
                    return ol(this.s.invalid, this.s, this._firstDay, this._lastDay, e, t);
                }),
                (t.prototype.getSelectedEvents = function () {
                    return Oe(this._selectedEventsMap);
                }),
                (t.prototype.setEvents = function (e) {
                    for (var t = [], a = dl(e), n = 0, s = a; n < s.length; n++) {
                        var i = s[n];
                        t.push("" + i.id);
                    }
                    return (this._events = a), this.refresh(), t;
                }),
                (t.prototype.setSelectedEvents = function (e) {
                    (this._selectedEventsMap = (e || []).reduce(function (e, t) {
                        return t.occurrenceId ? (e[t.occurrenceId] = t) : (e[t.id] = t), e;
                    }, {})),
                        this.forceUpdate();
                }),
                (t.prototype.removeEvent = function (e) {
                    for (var t = he(e) ? e : [e], a = this._events, n = a.length, s = 0, i = t; s < i.length; s++)
                        for (var r = i[s], o = !1, l = 0; !o && l < n; ) {
                            var c = a[l];
                            (c.id !== r && c.id !== r.id) || ((o = !0), a.splice(l, 1)), l++;
                        }
                    this.refresh();
                }),
                (t.prototype.navigateToEvent = function (e) {
                    (this._navigateToEvent = e), this._shouldScrollSchedule++, this.navigate(e.start, !0);
                }),
                (t.prototype.navigate = function (e, t) {
                    var a = +Kt(e),
                        n = this._navigateToEvent !== ie,
                        s = a !== this._selectedDateTime;
                    (s || n) && (this._shouldAnimateScroll = !!t),
                        this.s.selectedDate === ie ? ((!this._showSchedule && !this._showTimeline) || s ? this.setState({ selectedDate: a }) : (this._shouldScrollSchedule++, this.forceUpdate())) : (s || n) && this._selectedChange(a);
                }),
                (t.prototype.updateEvent = function (e) {
                    for (var t = he(e) ? e : [e], a = this._events, n = a.length, s = 0, i = t; s < i.length; s++)
                        for (var r = i[s], o = !1, l = 0; !o && l < n; ) {
                            a[l].id === r.id && ((o = !0), a.splice(l, 1, c({}, r))), l++;
                        }
                    this.refresh();
                }),
                (t.prototype.refresh = function () {
                    (this._refresh = !0), this.forceUpdate();
                }),
                (t.prototype._render = function (e, t) {
                    var a,
                        n = this,
                        s = this._prevS,
                        i = this._showDate,
                        r = e.displayTimezone !== s.displayTimezone || e.dataTimezone !== s.dataTimezone,
                        o = !1,
                        l = !1,
                        c = this._tempViewChanged;
                    if (
                        ((this._tempViewChanged = !1),
                        (this._colorEventList = e.eventTemplate === ie && e.renderEvent === ie && e.colorEventList),
                        e.exclusiveEndDates === ie && (e.exclusiveEndDates = !!e.displayTimezone),
                        pe(e.min) ? (this._minDate = -1 / 0) : s.min !== e.min && (this._minDate = +Kt(e.min)),
                        pe(e.max) ? (this._maxDate = 1 / 0) : s.max !== e.max && (this._maxDate = +Kt(e.max)),
                        e.selectedDate !== ie
                            ? (a = +Kt(e.selectedDate))
                            : (this._defaultDate || (this._defaultDate = +(e.defaultSelectedDate !== ie ? Kt(e.defaultSelectedDate) : Bt(jt(e)))), (a = t.selectedDate || this._selectedDateTime || this._defaultDate)),
                        (this.eventList = t.eventList || []),
                        e.data !== s.data && ((this._events = e.immutableData ? (e.data || []).slice() : dl(e.data)), (this._refresh = !0)),
                        (e.invalid !== s.invalid || e.colors !== s.colors || r) && (this._refresh = !0),
                        JSON.stringify(e.view) !== JSON.stringify(s.view) || e.firstDay !== s.firstDay || e.dragTimeStep !== s.dragTimeStep)
                    ) {
                        var d = {
                            c: "eventcalendar",
                            dragTimeStep: e.dragTimeStep,
                            eventListSize: this._eventListSize,
                            eventListType: this._eventListType,
                            firstDay: e.firstDay,
                            resourcesLength: e.resources ? e.resources.length : 0,
                            scheduleEndDay: this._scheduleEndDay,
                            scheduleEndTime: this._scheduleEndTime,
                            scheduleMaxEventStack: this._scheduleMaxEventStack,
                            scheduleMinEventWidth: this._scheduleMinEventWidth,
                            scheduleSize: this._scheduleSize,
                            scheduleStartDay: this._scheduleStartDay,
                            scheduleStartTime: this._scheduleStartTime,
                            scheduleTimeCellStep: this._scheduleTimeCellStep,
                            scheduleTimeLabelStep: this._scheduleTimeLabelStep,
                            scheduleTimezones: this._scheduleTimezones,
                            scheduleType: this._scheduleType,
                            showCalendar: this._showCalendar,
                            showEventCount: this._showEventCount,
                            showEventLabels: this._showEventLabels,
                            showEventList: this._showEventList,
                            showMarked: !!e.marked,
                            showSchedule: this._showSchedule,
                            showScheduleDays: this._showScheduleDays,
                            showTimeline: this._showTimeline,
                            slotsLength: e.slots ? e.slots.length : 0,
                            timelineEndDay: this._timelineEndDay,
                            timelineEndTime: this._timelineEndTime,
                            timelineListing: this._timelineListing,
                            timelineResolution: this._timelineResolution,
                            timelineResolutionVertical: this._timelineResolutionVertical,
                            timelineSize: this._timelineSize,
                            timelineStartDay: this._timelineStartDay,
                            timelineStartTime: this._timelineStartTime,
                            timelineTimeCellStep: this._timelineTimeCellStep,
                            timelineTimeLabelStep: this._timelineTimeLabelStep,
                            timelineType: this._timelineType,
                            v: Bn,
                            view: e.view,
                        };
                        this._remote++,
                            zn(this),
                            Rn(
                                "remote",
                                this,
                                d,
                                function (e) {
                                    if ((n._remote--, !n._remote)) {
                                        for (var t = 0, a = Object.keys(e); t < a.length; t++) {
                                            var s = a[t];
                                            n[s] = e[s];
                                        }
                                        Vn(e.notification), (n._tempViewChanged = e._viewChanged), n.forceUpdate();
                                    }
                                },
                                "comp_" + this._uid
                            );
                    }
                    this._showDate = !this._showScheduleDays && ((this._showSchedule && "day" === this._scheduleType) || (this._showEventList && "day" === this._eventListType && this._eventListSize < 2));
                    var h = this._pageLoad;
                    if (
                        ((this._refresh || e.locale !== s.locale || e.theme !== s.theme) && ((o = !0), this._pageLoad++),
                        e.resources !== s.resources &&
                            (this._resourcesMap = (e.resources || []).reduce(function (e, t) {
                                return (e[t.id] = t), e;
                            }, {})),
                        e.selectMultipleEvents &&
                            e.selectedEvents !== s.selectedEvents &&
                            (this._selectedEventsMap = (e.selectedEvents || []).reduce(function (e, t) {
                                return t.occurrenceId ? (e[t.occurrenceId] = t) : (e[t.id] = t), e;
                            }, {})),
                        this._selectedEventsMap === ie && (this._selectedEventsMap = {}),
                        e.refDate !== s.refDate && (this._refDate = Kt(e.refDate)),
                        this._refDate || this._showCalendar || (!this._showSchedule && !this._showTimeline) || (this._refDate = Ht(new Date())),
                        a !== this._selectedDateTime && (this._viewDate = a),
                        (e.cssClass === s.cssClass && e.className === s.className && e.class === s.class) || (this._checkSize++, (this._viewChanged = c = !0)),
                        c && this._viewDate && a !== this._viewDate && ((l = !0), (a = this._viewDate)),
                        a !== this._selectedDateTime || c)
                    ) {
                        var u = this._showCalendar && (this._showSchedule || this._showTimeline || this._showEventList) ? +wi(new Date(a), e, this._minDate, this._maxDate, ie, ie, 1) : ce(a, this._minDate, this._maxDate);
                        (u = this._getValidDay(u)),
                            (a !== u || l) &&
                                ((a = u),
                                setTimeout(function () {
                                    n._selectedChange(a);
                                })),
                            this._skipScheduleScroll || this._shouldScrollSchedule++,
                            (this._selectedDateTime = a);
                    }
                    var m = Ht(new Date(a)),
                        _ = +m;
                    (_ === this._selected && i === this._showDate && e.locale === s.locale && s.dateFormatLong === e.dateFormatLong) || (this._selectedDateHeader = this._showDate ? qt(e.dateFormatLong, m, e) : ""),
                        (_ === this._selected && e.dataTimezone === s.dataTimezone && e.displayTimezone === s.displayTimezone) ||
                            ((this._shouldAnimateScroll = this._shouldAnimateScroll !== ie ? this._shouldAnimateScroll : this._selected !== ie),
                            (this._selected = _),
                            (this._selectedDates = {}),
                            (this._selectedDates[+Ut(e, new Date(_))] = !0),
                            (this._active = _),
                            (o = !0),
                            (l = !0)),
                        o && this._showCalendar && ("day" === this._eventListType || "day" === this._scheduleType || "day" === this._timelineType) && this._setEventList(m, $t(m, 1)),
                        this._refresh &&
                            t.showPopover &&
                            setTimeout(function () {
                                n._hidePopover();
                            }),
                        (this._refresh = !1),
                        (this._cssClass =
                            this._className +
                            " mbsc-eventcalendar" +
                            (this._showEventList ? " mbsc-eventcalendar-agenda" : "") +
                            (this._showSchedule ? " mbsc-eventcalendar-schedule" : "") +
                            (this._showTimeline ? " mbsc-eventcalendar-timeline" : "")),
                        this._navService.options(
                            {
                                activeDate: this._active,
                                calendarType: this._calendarType,
                                endDay: this._showSchedule ? this._scheduleEndDay : this._showTimeline ? this._timelineEndDay : this._rangeEndDay,
                                eventRange: this._rangeType,
                                eventRangeSize: this._showSchedule ? this._scheduleSize : this._showTimeline ? this._timelineSize : this._eventListSize,
                                firstDay: e.firstDay,
                                getDate: e.getDate,
                                getDay: e.getDay,
                                getMonth: e.getMonth,
                                getYear: e.getYear,
                                max: e.max,
                                min: e.min,
                                onPageChange: this._onPageChange,
                                onPageLoading: this._onPageLoading,
                                refDate: this._refDate,
                                resolution: this._timelineResolution,
                                showCalendar: this._showCalendar,
                                showOuterDays: this._showOuterDays,
                                size: this._calendarSize,
                                startDay: this._rangeStartDay,
                                weeks: this._calendarSize,
                            },
                            this._pageLoad !== h
                        ),
                        l && (this._shouldScroll = !this._isPageChange && !this._shouldSkipScroll);
                }),
                (t.prototype._mounted = function () {
                    (this._unsubscribe = al(this._onExternalDrag)), Sa(this._el, As, this._onKeyDown);
                }),
                (t.prototype._updated = function () {
                    var e = this;
                    if (
                        (this._shouldScroll &&
                            this.state.eventList &&
                            this.state.isListScrollable &&
                            (Ee(this, function () {
                                e._scrollToDay(), (e._shouldAnimateScroll = ie);
                            }),
                            (this._shouldScroll = !1)),
                        this._shouldLoadDays &&
                            ((this._shouldLoadDays = !1),
                            Va(this._list.querySelectorAll("[mbsc-timestamp]"), function (t) {
                                e._listDays[t.getAttribute("mbsc-timestamp")] = t;
                            })),
                        this._shouldEnhance && (this._shouldEnhance = "popover" === this._shouldEnhance ? this._popoverList : this._list),
                        this._triggerCreated)
                    ) {
                        var t = this._triggerCreated,
                            a =
                                "calendar" === t.source
                                    ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + t.event.id + '"]')
                                    : this._el.querySelector('.mbsc-schedule-event[data-id="' + t.event.id + '"]');
                        this._hook("onEventCreated", c({}, this._triggerCreated, { target: a })), (this._triggerCreated = null);
                    }
                    if (this._triggerUpdated) {
                        var n = this._triggerUpdated;
                        a =
                            "calendar" === n.source
                                ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + n.event.id + '"]')
                                : this._el.querySelector('.mbsc-schedule-event[data-id="' + n.event.id + '"]');
                        this._hook("onEventUpdated", c({}, this._triggerUpdated, { target: a })), (this._triggerUpdated = null);
                    }
                    this._triggerDeleted && (this._hook("onEventDeleted", c({}, this._triggerDeleted)), (this._triggerDeleted = null)),
                        this._viewChanged &&
                            setTimeout(function () {
                                e._viewChanged = !1;
                            }, 10),
                        this._shouldSkipScroll &&
                            setTimeout(function () {
                                e._shouldSkipScroll = !1;
                            }),
                        this._navigateToEvent &&
                            setTimeout(function () {
                                e._navigateToEvent = ie;
                            }),
                        (this._skipScheduleScroll = !1);
                }),
                (t.prototype._destroy = function () {
                    this._unsubscribe && nl(this._unsubscribe), Ca(this._el, As, this._onKeyDown);
                }),
                (t.prototype._resetSelection = function () {
                    this.s.selectMultipleEvents && Object.keys(this._selectedEventsMap).length > 0 && ((this._selectedEventsMap = {}), this._onSelectedEventsChange([]), this.forceUpdate());
                }),
                (t.prototype._getAgendaEvents = function (e, t, a) {
                    var n = this,
                        s = [],
                        i = this.s;
                    if (a && this._showEventList)
                        for (
                            var r = function (e) {
                                    var t = a[Lt(e)];
                                    if (t && t.length) {
                                        var r = Cs(t, i.eventOrder);
                                        s.push({
                                            date: qt(i.dateFormatLong, e, i),
                                            events: r.map(function (t) {
                                                return n._getEventData(t, e);
                                            }),
                                            timestamp: +e,
                                        });
                                    }
                                },
                                o = Ht(e);
                            o < t;
                            o.setDate(o.getDate() + 1)
                        )
                            r(o);
                    return s;
                }),
                (t.prototype._getEventData = function (e, t, a, n) {
                    var s = this.s;
                    return !e.color && e.resource && a === ie && (a = (this._resourcesMap || {})[he(e.resource) ? e.resource[0] : e.resource]), cl(s, e, t, this._colorEventList, a, !0, !0, !1, !1, n);
                }),
                (t.prototype._getValidDay = function (e, t) {
                    void 0 === t && (t = 1);
                    var a = this._rangeStartDay,
                        n = this._rangeEndDay;
                    if (!this._showCalendar && "day" === this._rangeType && a !== ie && n !== ie) {
                        var s = new Date(e),
                            i = s.getDay(),
                            r = 0;
                        if (((n < a ? i > n && i < a : i > n || i < a) && (r = t < 0 ? n - i : a - i), r)) return +$t(s, (r += t < 0 ? (r > 0 ? -7 : 0) : r < 0 ? 7 : 0));
                    }
                    return e;
                }),
                (t.prototype._setEventList = function (e, t) {
                    var a = this;
                    setTimeout(function () {
                        (a._eventListHTML = ie), (a._shouldScroll = !0), (a._listDays = null), a._scrollToDay(0), a.setState({ eventList: a._getAgendaEvents(e, t, a._eventMap) });
                    });
                }),
                (t.prototype._showPopover = function (e, t, a, n, s, i) {
                    var r = this;
                    (this.state.showPopover && e === this.state.popoverKey) ||
                        setTimeout(function () {
                            (r._anchor = n), r.setState({ popoverContext: s, popoverDate: t, popoverHidden: !1, popoverHost: i, popoverKey: e, popoverList: a, showPopover: !0 });
                        });
                }),
                (t.prototype._hidePopover = function () {
                    this.state.showPopover && this.setState({ popoverDrag: !1, showPopover: !1 });
                }),
                (t.prototype._scrollToDay = function (e) {
                    var t = this;
                    if (this._list) {
                        var a = e,
                            n = void 0;
                        if (e === ie && this._listDays) {
                            var s = this._listDays[this._selected],
                                i = this._navigateToEvent && this._navigateToEvent.id;
                            if (s)
                                if (i !== ie) {
                                    var r = s.querySelector('.mbsc-event[data-id="' + i + '"]'),
                                        o = s.querySelector(".mbsc-event-day");
                                    r && (a = r.offsetTop - (o ? o.offsetHeight : 0) + 1);
                                } else a = s.offsetTop;
                            a !== ie && (n = this._shouldAnimateScroll);
                        }
                        a !== ie &&
                            (this._isListScrolling++,
                            Oa(this._list, ie, a, n, !1, function () {
                                setTimeout(function () {
                                    t._isListScrolling--;
                                }, 150);
                            }));
                    }
                }),
                (t.prototype._selectedChange = function (e, t) {
                    var a = new Date(e);
                    this.s.selectedDate !== ie || t || this.setState({ selectedDate: +e }), this._emit("selectedDateChange", a), this._hook("onSelectedDateChange", { date: a });
                }),
                (t.prototype._cellClick = function (e, t) {
                    this._hook(e, c({ target: t.domEvent.currentTarget }, t));
                }),
                (t.prototype._dayClick = function (e, t) {
                    var a = Lt(t.date),
                        n = Cs(this._eventMap[a], this.s.eventOrder);
                    (t.events = n), this._hook(e, t);
                }),
                (t.prototype._labelClick = function (e, t) {
                    t.label && this._hook(e, { date: t.date, domEvent: t.domEvent, event: t.label, source: "calendar" });
                }),
                (t.prototype._eventClick = function (e, t) {
                    return (t.date = new Date(t.date)), this._hook(e, t);
                }),
                (t.prototype._handleMultipleSelect = function (e) {
                    var t = e.label || e.event;
                    if (t && this.s.selectMultipleEvents) {
                        var a = e.domEvent,
                            n = a.shiftKey || a.ctrlKey || a.metaKey ? this._selectedEventsMap : {},
                            s = t.occurrenceId || t.id;
                        n[s] ? delete n[s] : (n[s] = t), (this._selectedEventsMap = c({}, n)), this._onSelectedEventsChange(Oe(n)), this.s.selectedEvents === ie && this.forceUpdate();
                    }
                }),
                (t.defaults = c({}, vs, { actionableEvents: !0, allDayText: "All-day", data: [], newEventText: "New event", noEventsText: "No events", showControls: !0, showEventTooltip: !0, view: { calendar: { type: "month" } } })),
                (t._name = "Eventcalendar"),
                t
            );
        })(Xn),
        _l = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    this._cssClass = this._className + this._rtl + " mbsc-font mbsc-list" + this._theme;
                }),
                t
            );
        })(Xn);
    var pl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (t = this), (a = e.children), qa("div", { ref: t._setEl, className: t._cssClass }, a);
                    var t, a;
                }),
                t
            );
        })(_l),
        vl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._render = function (e) {
                    this._cssClass = this._className + " mbsc-list-header" + this._theme + this._hb;
                }),
                t
            );
        })(Xn);
    var fl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (t = this), (a = e.children), qa("div", { ref: t._setEl, className: t._cssClass }, a);
                    var t, a;
                }),
                t
            );
        })(vl),
        gl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._hook("onClick", { domEvent: e }), t.s.selected && t.setState({ hasFocus: !1 });
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        a = this;
                    this._unlisten = Ji(this._el, {
                        click: !0,
                        keepFocus: !0,
                        onBlur: function () {
                            a.setState({ hasFocus: !1 });
                        },
                        onEnd: function (n) {
                            if (e) {
                                var s = a.s,
                                    i = c({}, n),
                                    r = s.eventData;
                                i.domEvent.preventDefault(), (i.drag = !0), (i.event = s.event), (i.eventData = r), (i.resource = r && r.currentResource && r.currentResource.id), a._hook("onDragEnd", i), (e = !1);
                            }
                            clearTimeout(t);
                        },
                        onFocus: function () {
                            a.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function (e) {
                            a.s.actionable && a.setState({ hasHover: !0 }), a._hook("onHoverIn", { domEvent: e });
                        },
                        onHoverOut: function (e) {
                            a.setState({ hasHover: !1 }), a._hook("onHoverOut", { domEvent: e });
                        },
                        onKeyDown: function (e) {
                            var t = a.s.event;
                            switch (e.keyCode) {
                                case ti:
                                case ai:
                                    a._el.click(), e.preventDefault();
                                    break;
                                case 8:
                                case 46:
                                    t && !1 !== t.editable && a._hook("onDelete", { domEvent: e, event: t, source: "agenda" });
                            }
                        },
                        onMove: function (n) {
                            var s = a.s,
                                i = c({}, n),
                                r = s.eventData;
                            (i.drag = !0),
                                (i.event = s.event),
                                (i.eventData = r),
                                (i.external = !0),
                                (i.resource = r && r.currentResource && r.currentResource.id),
                                (!e && i.isTouch) || i.domEvent.preventDefault(),
                                e ? a._hook("onDragMove", i) : (Math.abs(i.deltaX) > 7 || Math.abs(i.deltaY) > 7) && (clearTimeout(t), !i.isTouch && s.drag && !1 !== s.event.editable && ((e = !0), a._hook("onDragStart", i)));
                        },
                        onPress: function () {
                            a.s.actionable && a.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            a.setState({ isActive: !1 });
                        },
                        onStart: function (n) {
                            var s = a.s;
                            return (
                                n.isTouch &&
                                    s.drag &&
                                    !1 !== s.event.editable &&
                                    !e &&
                                    (t = setTimeout(function () {
                                        var t = c({}, n),
                                            i = s.eventData;
                                        (t.drag = !0), (t.event = s.event), (t.eventData = i), (t.resource = i && i.currentResource && i.currentResource.id), a._hook("onDragModeOn", t), a._hook("onDragStart", t), (e = !0);
                                    }, 350)),
                                { ripple: s.actionable && s.ripple }
                            );
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    this._cssClass =
                        this._className +
                        " mbsc-list-item" +
                        this._theme +
                        this._hb +
                        this._rtl +
                        (e.actionable ? " mbsc-list-item-actionable" : "") +
                        (t.hasFocus ? " mbsc-focus" : "") +
                        (t.hasHover ? " mbsc-hover" : "") +
                        (t.isActive ? " mbsc-active" : "") +
                        (e.selected ? " mbsc-selected" : "");
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                (t.defaults = { actionable: !0, ripple: !1 }),
                (t._name = "ListItem"),
                t
            );
        })(Xn);
    var yl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, a) {
                        var n = t.props;
                        n.actionable, n.children, n.className, n.drag, n.event, n.eventData, n.ripple, n.rtl;
                        var s = n.theme;
                        n.themeVariant, n.onHoverIn, n.onHoverOut, n.onDragEnd, n.onDragMove, n.onDragStart, n.onDragModeOn, n.onDragModeOff, n.onDelete, n.onClick;
                        var i = d(n, [
                            "actionable",
                            "children",
                            "className",
                            "drag",
                            "event",
                            "eventData",
                            "ripple",
                            "rtl",
                            "theme",
                            "themeVariant",
                            "onHoverIn",
                            "onHoverOut",
                            "onDragEnd",
                            "onDragMove",
                            "onDragStart",
                            "onDragModeOn",
                            "onDragModeOff",
                            "onDelete",
                            "onClick",
                        ]);
                        return qa(
                            "div",
                            c({ tabIndex: 0, ref: t._setEl, onClick: t._onClick, className: t._cssClass }, i),
                            qa("div", { dangerouslySetInnerHTML: t.textParam }),
                            a,
                            qa("div", { className: "mbsc-list-item-background mbsc-" + s })
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(gl),
        bl = "mbsc-def";
    function xl(e, t, a, n, s, i, r) {
        for (var o = "start-end" === i, l = r ? a : Ht($t(a, 1)), c = 0, d = Object.keys(e); c < d.length; c++)
            for (var h = e[d[c]], u = Ht(t); u < l; u.setDate(u.getDate() + 1)) {
                var m = h[Lt(u)];
                if (m) {
                    if ((n || s) && m.allDay[0] && (!o || zt(u, t) || zt(u, a))) return m.allDay[0].original;
                    if (!n)
                        for (var _ = 0, p = m.data; _ < p.length; _++) {
                            var v = p[_];
                            if (o) {
                                if (Mt(v.startDate, v.endDate, t, t, !0)) return v.original;
                                if (Mt(v.startDate, v.endDate, a, a)) return v.original;
                            } else if (Mt(v.startDate, v.endDate, t, a)) return v.original;
                        }
                }
            }
        return !1;
    }
    function Dl(e, t, a, n, s, i, r, o) {
        var l = e.allDay || a,
            c = e.startDate;
        if (n && a && !s) {
            var d = o[Lt(c)];
            return c < i ? i : r[d + (ta(c.getDay(), t.startDay, t.endDay) ? 0 : 1)].date;
        }
        return l ? jt(t, c.getFullYear(), c.getMonth(), c.getDate()) : c;
    }
    function Tl(e, t, a, n, s, i, r, o) {
        var l = e.allDay || a,
            c = e.endDate;
        if (n && a && !s) {
            var d = o[Lt(It(t, e.allDay, e.startDate, c))],
                h = c >= i || d >= r.length - 1 ? i : r[d + 1].date;
            return It(t, !1, e.startDate, h);
        }
        var u = l ? It(t, e.allDay, e.startDate, c) : c;
        return l ? jt(t, u.getFullYear(), u.getMonth(), u.getDate(), 23, 59, 59, 999) : u;
    }
    function Sl(e, t, a, n, s, i, r, o, l, c, d, h, u, m) {
        for (var _ = a.allDay ? l : c, p = a.allDay ? d : h, v = Dl(a, e, i, r, o, _, u, m), f = Tl(a, e, i, r, o, p, u, m), g = !1, y = 0, b = t; y < b.length; y++) {
            for (var x = b[y], D = 0, T = !1, S = void 0, C = 0, w = x.stacks; C < w.length; C++) {
                for (var k = w[C], M = !1, E = 0, N = k; E < N.length; E++) {
                    var I = N[E],
                        L = I.allDay ? l : c,
                        H = I.allDay ? d : h;
                    Mt(Dl(I, e, i, r, o, L, u, m), Tl(I, e, i, r, o, H, u, m), v, f, !0) && ((M = !0), (T = !0), S ? (n[a.uid] = n[a.uid] || D) : (n[I.uid] = D + 1));
                }
                M || S || (S = k), D++;
            }
            T && (S ? S.push(a) : "all" === s || x.stacks.length < +s ? x.stacks.push([a]) : ((a.position = ie), x.more.push(a)), (g = !0));
        }
        g || ((n[a.uid] = 0), t.push({ stacks: [[a]], more: [] }));
    }
    function Cl(e) {
        return (e = Math.abs(Te(e))) > 60
            ? 60 * Te(e / 60)
            : 60 % e == 0
            ? e
            : [6, 10, 12, 15, 20, 30].reduce(function (t, a) {
                  return Math.abs(a - e) < Math.abs(t - e) ? a : t;
              });
    }
    function wl(e, t, a, n, s, i) {
        n && n > e && (e = n);
        var r = kt(e);
        return (t > r || (s !== ie && i !== ie && !ta(e.getDay(), s, i))) && (r = t), (100 * (r - t)) / a;
    }
    function kl(e, t, a, n, s) {
        e = e || {};
        var i = Object.keys(e),
            r = {},
            o = t.map(function (e) {
                return e.id;
            }),
            l = a.map(function (e) {
                return e.id;
            });
        o.forEach(function (e) {
            (r[e] = {}),
                l.forEach(function (t) {
                    r[e][t] = {};
                });
        });
        for (
            var c = function (t) {
                    for (
                        var a = function (e) {
                                var a = e.resource,
                                    i = e.slot,
                                    c = a !== ie && n ? (he(a) ? a : [a]) : o,
                                    d = i !== ie && s ? [i] : l;
                                c.forEach(function (a) {
                                    var n = r[a];
                                    n &&
                                        d.forEach(function (a) {
                                            var s = n[a];
                                            s && (s[t] || (s[t] = []), s[t].push(e));
                                        });
                                });
                            },
                            i = 0,
                            c = e[t];
                        i < c.length;
                        i++
                    ) {
                        a(c[i]);
                    }
                },
                d = 0,
                h = i;
            d < h.length;
            d++
        ) {
            c(h[d]);
        }
        return r;
    }
    function Ml(e, t) {
        var a = new Date(e),
            n = new Date(+ft + t);
        return new Date(a.getFullYear(), a.getMonth(), a.getDate(), n.getHours(), n.getMinutes());
    }
    var El = {},
        Nl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._triggerClick("onClick", e);
                        var a = t.s,
                            n = El[a.event.uid];
                        n && a.selected && n.next({ hasFocus: !1 });
                    }),
                    (t._onRightClick = function (e) {
                        t._triggerClick("onRightClick", e);
                    }),
                    (t._onDocTouch = function (e) {
                        Ca(t._doc, Gs, t._onDocTouch), Ca(t._doc, Ws, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { domEvent: e, event: t.s.event.original });
                    }),
                    (t._updateState = function (e) {
                        t.setState(e);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._render = function (e, t) {
                    var a = e.event,
                        n = new Date(a.date),
                        s = a.position,
                        i = a.startDate,
                        r = It(e, a.allDay, i, a.endDate),
                        o = e.isTimeline,
                        l = e.isListing,
                        d = a.original.more,
                        h = (d && o) || l || a.allDay,
                        u = !zt(i, r),
                        m = u && zt(i, n),
                        _ = u && zt(r, n),
                        p = h && (!o || l || d),
                        v = o ? "timeline" : "schedule",
                        f = e.gridStartTime,
                        g = e.gridEndTime,
                        y = kt(i),
                        b = kt(r),
                        x = o && e.slot !== bl,
                        D = ta(r.getDay(), e.startDay, e.endDay),
                        T = e.singleDay ? $t(n, 1) : new Date(e.lastDay);
                    a.allDay || (T = Ut(e, T)),
                        (this._isStart = x || !u || m),
                        (this._isEnd = x || !u || (h || (o && !e.hasResY) ? r < T && D : _)),
                        x || h || !(f > y || g < y) || (this._isStart = !1),
                        x || h || !(g < b || f > b) || (this._isEnd = !1),
                        (this._isMore = d),
                        (this._isDrag = this._isDrag || e.isDrag),
                        (this._content = ie),
                        (this._rangeText = a.start + " - " + a.end),
                        (this._isAllDay = p),
                        (this._host = v),
                        (!a.allDay && ((o && !e.hasResY) || !u || m || _)) || (this._rangeText = a.allDayText || " "),
                        (this._cssClass =
                            "mbsc-schedule-event" +
                            this._theme +
                            this._rtl +
                            (e.render || e.template ? " mbsc-schedule-event-custom" : "") +
                            (o ? " mbsc-timeline-event" : "") +
                            (l || d ? " mbsc-timeline-event-listing" : "") +
                            (this._isStart ? " mbsc-" + v + "-event-start" : "") +
                            (this._isEnd ? " mbsc-" + v + "-event-end" : "") +
                            (p ? " mbsc-schedule-event-all-day" : "") +
                            (x ? " mbsc-timeline-event-slot" : "") +
                            ((t.hasFocus && !e.inactive && !e.selected) || e.selected ? " mbsc-schedule-event-active" : "") +
                            (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-schedule-event-hover") +
                            (e.isDrag ? " mbsc-schedule-event-dragging" + (o ? " mbsc-timeline-event-dragging" : "") : "") +
                            (e.hidden ? " mbsc-schedule-event-hidden" : "") +
                            (e.inactive ? " mbsc-schedule-event-inactive" : "") +
                            (!1 === a.original.editable ? " mbsc-readonly-event" : "") +
                            (a.original.cssClass ? " " + a.original.cssClass : "")),
                        (this._style = c({}, s, { color: a.color, top: e.eventHeight && s.top !== ie ? s.top * e.eventHeight + "px" : s.top }));
                    var S,
                        C = e.render || e.renderContent;
                    if (C && !d) {
                        var w = C(a);
                        _e(w) ? (S = w) : (this._content = w);
                    } else (e.contentTemplate && !d) || (S = a.html);
                    S !== this._text && ((this._text = S), (this._html = S ? this._safeHtml(S) : ie), (this._shouldEnhance = S && !!C));
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        a,
                        n = this,
                        s = this.s.event.uid,
                        i = El[s];
                    i || ((i = new m()), (El[s] = i)),
                        (this._unsubscribe = i.subscribe(this._updateState)),
                        (this._doc = wa(this._el)),
                        (this._unlisten = Ji(this._el, {
                            keepFocus: !0,
                            onBlur: function () {
                                i.next({ hasFocus: !1 });
                            },
                            onDoubleClick: function (e) {
                                e.domEvent.stopPropagation(), n._triggerClick("onDoubleClick", e.domEvent);
                            },
                            onEnd: function (t) {
                                if (n._isDrag) {
                                    var s = n.s,
                                        i = c({}, t);
                                    i.domEvent.preventDefault(),
                                        (i.eventData = s.event),
                                        (i.resource = s.resource),
                                        (i.slot = s.slot),
                                        s.resize && e ? ((i.resize = !0), (i.direction = e)) : s.drag && (i.drag = !0),
                                        n._hook("onDragEnd", i),
                                        s.isDrag || (n._isDrag = !1),
                                        n._el && i.moved && n._el.blur();
                                }
                                clearTimeout(a), (e = ie);
                            },
                            onFocus: function () {
                                i.next({ hasFocus: !0 });
                            },
                            onHoverIn: function (e) {
                                i.next({ hasHover: !0 }), n._triggerClick("onHoverIn", e);
                            },
                            onHoverOut: function (e) {
                                i.next({ hasHover: !1 }), n._triggerClick("onHoverOut", e);
                            },
                            onKeyDown: function (e) {
                                var t = n.s.event.original;
                                switch (e.keyCode) {
                                    case ti:
                                    case ai:
                                        n._el.click(), e.preventDefault();
                                        break;
                                    case 8:
                                    case 46:
                                        !1 !== t.editable && n._hook("onDelete", { domEvent: e, event: t, source: n._host });
                                }
                            },
                            onMove: function (s) {
                                var i = n.s,
                                    r = c({}, s);
                                if (((r.eventData = i.event), (r.resource = i.resource), (r.slot = i.slot), e)) (r.resize = !0), (r.direction = e);
                                else {
                                    if (!i.drag) return;
                                    r.drag = !0;
                                }
                                !1 !== i.event.original.editable &&
                                    ((!n._isDrag && r.isTouch) || r.domEvent.preventDefault(),
                                    n._isDrag ? n._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(a), r.isTouch || ((r.domEvent = t), (n._isDrag = !0), n._hook("onDragStart", r))));
                            },
                            onStart: function (s) {
                                t = s.domEvent;
                                var i = n.s,
                                    r = c({}, s),
                                    o = t.target;
                                if (((r.eventData = i.event), (r.resource = i.resource), (r.slot = i.slot), i.resize && o.classList.contains("mbsc-schedule-event-resize")))
                                    (e = o.classList.contains("mbsc-schedule-event-resize-start") ? "start" : "end"), (r.resize = !0), (r.direction = e);
                                else {
                                    if (!i.drag) return;
                                    r.drag = !0;
                                }
                                !1 !== i.event.original.editable &&
                                    (n._isDrag
                                        ? (t.stopPropagation(), n._hook("onDragStart", r))
                                        : r.isTouch &&
                                          (a = setTimeout(function () {
                                              n._hook("onDragModeOn", r), n._hook("onDragStart", r), (n._isDrag = !0);
                                          }, 350)));
                            },
                        })),
                        this._isDrag && (Sa(this._doc, Gs, this._onDocTouch), Sa(this._doc, Ws, this._onDocTouch));
                }),
                (t.prototype._destroy = function () {
                    if ((this._el && this._el.blur(), this._unsubscribe)) {
                        var e = this.s.event.uid,
                            t = El[e];
                        t && (t.unsubscribe(this._unsubscribe), t.nr || delete El[e]);
                    }
                    this._unlisten && this._unlisten(), Ca(this._doc, Gs, this._onDocTouch), Ca(this._doc, Ws, this._onDocTouch);
                }),
                (t.prototype._triggerClick = function (e, t) {
                    var a = this.s;
                    this._hook(e, { date: a.event.date, domEvent: t, event: a.event.original, resource: a.resource, slot: a.slot, source: this._host });
                }),
                t
            );
        })(Xn);
    var Il = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var a,
                            n = e.event,
                            s = t._isAllDay,
                            i = e.isTimeline,
                            r = t._theme,
                            o = e.resize && !1 !== n.original.editable,
                            l = (((a = {}).onContextMenu = t._onRightClick), a);
                        return qa(
                            "div",
                            c({ tabIndex: 0, className: t._cssClass, "data-id": n.id, style: t._style, ref: t._setEl, title: n.tooltip, onClick: t._onClick }, l),
                            t._isStart &&
                                o &&
                                qa("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-start" + (i ? " mbsc-timeline-event-resize" : "") + t._rtl + (e.isDrag ? " mbsc-schedule-event-resize-start-touch" : "") }),
                            t._isEnd &&
                                o &&
                                qa("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-end" + (i ? " mbsc-timeline-event-resize" : "") + t._rtl + (e.isDrag ? " mbsc-schedule-event-resize-end-touch" : "") }),
                            e.render && !t._isMore
                                ? t._html
                                    ? qa("div", { style: { height: "100%" }, dangerouslySetInnerHTML: t._html })
                                    : t._content
                                : qa(
                                      Za,
                                      null,
                                      !s && !i && !t._isMore && qa("div", { className: "mbsc-schedule-event-bar" + r + t._rtl }),
                                      qa("div", {
                                          className: "mbsc-schedule-event-background" + (i ? " mbsc-timeline-event-background" : "") + (s ? " mbsc-schedule-event-all-day-background" : "") + r,
                                          style: { background: n.style.background },
                                      }),
                                      qa(
                                          "div",
                                          { "aria-hidden": "true", className: "mbsc-schedule-event-inner" + r + (s ? " mbsc-schedule-event-all-day-inner" : "") + (n.cssClass || ""), style: { color: n.style.color } },
                                          qa("div", { className: "mbsc-schedule-event-title" + (s ? " mbsc-schedule-event-all-day-title" : "") + r, dangerouslySetInnerHTML: t._html }, t._content),
                                          !s && !t._isMore && qa("div", { className: "mbsc-schedule-event-range" + r }, t._rangeText)
                                      ),
                                      n.ariaLabel && qa("div", { className: "mbsc-hidden-content" }, n.ariaLabel)
                                  ),
                            qa("div", { dangerouslySetInnerHTML: t.textParam })
                        );
                    })(e, this);
                }),
                t
            );
        })(Nl),
        Ll = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    var e = this;
                    clearInterval(this._timer),
                        (this._timer = setInterval(function () {
                            e._zone
                                ? e._zone.runOutsideAngular(function () {
                                      e.forceUpdate();
                                  })
                                : e.forceUpdate();
                        }, 1e4));
                }),
                (t.prototype._destroy = function () {
                    clearInterval(this._timer);
                }),
                (t.prototype._render = function (e) {
                    var t = jt(e),
                        a = e.rtl,
                        n = e.displayedDays,
                        s = e.displayedTime,
                        i = e.startTime,
                        r = Ce(kt(t) / gt) * gt,
                        o = e.timezones,
                        l = { amText: e.amText, pmText: e.pmText };
                    if (o && xt(t)) {
                        this._times = [];
                        for (var c = 0, d = o; c < d.length; c++) {
                            var h = d[c],
                                u = t.clone();
                            u.setTimezone(h.timezone), this._times.push(qt(e.timeFormat, u, l));
                        }
                    } else this._time = qt(e.timeFormat, t, l);
                    this._cssClass = "mbsc-schedule-time-indicator mbsc-schedule-time-indicator-" + e.orientation + this._theme + this._rtl + " " + (r < i || r > i + s || !ta(t.getDay(), e.startDay, e.endDay) ? " mbsc-hidden" : "");
                    var m = e.hasResY ? 0 : Pt(e.firstDay, t, e.startDay, e.endDay);
                    if ("x" === e.orientation) {
                        var _ = (100 * m) / n + "%",
                            p = o && 4.25 * o.length + "em";
                        (this._pos = { left: o && !a ? p : ie, right: o && a ? p : ie, top: (100 * (r - i)) / s + "%" }), (this._dayPos = { left: a ? "" : _, right: a ? _ : "", width: 100 / n + "%" });
                    } else {
                        var v = (100 * (m * s + r - i)) / (n * s) + "%";
                        this._pos = { left: a ? "" : v, right: a ? v : "" };
                    }
                }),
                t
            );
        })(Xn);
    var Hl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var a = e.timezones;
                        return qa(
                            "div",
                            { "aria-hidden": "true", className: t._cssClass, style: t._pos },
                            qa(
                                "div",
                                { className: (a ? "mbsc-flex " : "") + "mbsc-schedule-time-indicator-time mbsc-schedule-time-indicator-time-" + e.orientation + t._theme + t._rtl },
                                a
                                    ? a.map(function (e, a) {
                                          return qa("div", { key: a, className: "mbsc-schedule-time-indicator-tz" + t._theme + t._rtl }, t._times[a]);
                                      })
                                    : t._time
                            ),
                            e.showDayIndicator && qa("div", { className: "mbsc-schedule-time-indicator-day" + t._theme + t._rtl, style: t._dayPos })
                        );
                    })(e, this);
                }),
                t
            );
        })(Ll),
        Ol = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function () {
                        var e = t.s;
                        e.selectable && e.onClick(e.timestamp);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._render = function (e, t) {
                    var a = new Date(e.timestamp);
                    (this._cssClass =
                        "mbsc-schedule-header-item " +
                        this._className +
                        this._theme +
                        this._rtl +
                        this._hb +
                        (e.largeNames ? " mbsc-schedule-header-item-large" : "") +
                        (e.selected ? " mbsc-selected" : "") +
                        (t.hasHover ? " mbsc-hover" : "")),
                        (this._data = { date: a, events: e.events || [], resource: e.resource, selected: e.selected }),
                        (this._day = a.getDay());
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._el, {
                        onHoverIn: function () {
                            e.s.selectable && e.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            e.s.selectable && e.setState({ hasHover: !1 });
                        },
                    });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                t
            );
        })(Xn);
    var Yl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, a) {
                        var n;
                        return (
                            e.renderDay && (n = e.renderDay(a._data)),
                            e.renderDayContent && (n = e.renderDayContent(a._data)),
                            _e(n) && ((n = qa("div", { dangerouslySetInnerHTML: a._safeHtml(n) })), (a._shouldEnhance = !0)),
                            qa(
                                "div",
                                { ref: a._setEl, className: a._cssClass, onClick: a._onClick },
                                e.renderDay
                                    ? n
                                    : qa(
                                          Za,
                                          null,
                                          qa(
                                              "div",
                                              { "aria-hidden": "true", className: "mbsc-schedule-header-dayname" + a._theme + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-dayname-curr" : "") },
                                              e.dayNames[a._day]
                                          ),
                                          qa(
                                              "div",
                                              {
                                                  "aria-hidden": "true",
                                                  className: "mbsc-schedule-header-day" + a._theme + a._rtl + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-day-today" : "") + (t.hasHover ? " mbsc-hover" : ""),
                                              },
                                              e.day
                                          ),
                                          e.label && qa("div", { className: "mbsc-hidden-content", "aria-pressed": e.selectable ? (e.selected ? "true" : "false") : ie, role: e.selectable ? "button" : ie }, e.label),
                                          e.renderDayContent && n
                                      )
                            )
                        );
                    })(e, t, this);
                }),
                t
            );
        })(Ol),
        Pl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._isScrolling = 0),
                    (t._onScroll = function () {}),
                    (t._onMouseLeave = function (e, a) {
                        !t._cursorTimeCont || (t.state.dragData && !a) || ((t._cursorTimeCont.style.visibility = "hidden"), (t._isCursorTimeVisible = !1));
                    }),
                    (t._onMouseMove = function (e) {
                        if (t._showCursorTime) {
                            var a = t.s,
                                n = a.rtl,
                                s = t._isTimeline,
                                i = t._cursorTimeCont;
                            if (
                                (!t._isTouch || t._tempStart ? !t._isCursorTimeVisible && e && ((i.style.visibility = "visible"), (t._isCursorTimeVisible = !0)) : ((i.style.visibility = "hidden"), (t._isCursorTimeVisible = !1)),
                                t._isCursorTimeVisible && t._colWidth)
                            ) {
                                var r = t._gridCont.getBoundingClientRect(),
                                    o = e ? e.clientX : t._cursorX || 0,
                                    l = e ? e.clientY : t._cursorY || 0,
                                    c = n ? r.right - o : o - r.left,
                                    d = ce(l - r.top, 8, t._colHeight),
                                    h = void 0,
                                    u = void 0,
                                    m = void 0;
                                if (t._dragDelta !== ie) (u = jt(a, t._dragDelta < 0 ? t._tempStart : t._tempEnd)), (h = s && !t._hasResY ? t._dayIndexMap[Lt(u)] : 0), (m = 0 === (m = kt(u)) ? (t._dragDelta < 0 ? m : bt) : m);
                                else {
                                    (h = s && !t._hasResY ? ce(Ce(c / t._colWidth), 0, t._daysNr - 1) : 0),
                                        (m = t._startTime + Se(Ce(s ? (t._time * (c - h * t._colWidth)) / t._colWidth : (t._time * (d - 8)) / (t._colHeight - 16)), a.dragTimeStep * gt));
                                    var _ = t._days[h].date,
                                        p = new Date(+ft + m);
                                    u = jt(a, _.getFullYear(), _.getMonth(), _.getDate(), p.getHours(), p.getMinutes());
                                }
                                var v = t._time * (s ? t._daysNr : 1),
                                    f = s ? (n ? "right" : "left") : "top",
                                    g = i.style;
                                (g[f] = (100 * (h * t._time + m - t._startTime)) / v + "%"), (g[n ? "left" : "right"] = ""), (i.textContent = qt(a.timeFormat, u, a)), (t._cursorX = o), (t._cursorY = l);
                            }
                        }
                    }),
                    (t._onEventClick = function (e) {
                        var a = e.event.more;
                        a ? t._hook("onMoreClick", { context: t._scrollCont, date: e.date, key: e.event.id, list: a, target: e.domEvent.target }) : t._hook("onEventClick", e);
                    }),
                    (t._onEventDragModeOn = function (e) {
                        t.s.externalDrag && e.drag && !e.create && tl.next(c({}, e, { create: !0, eventName: "onDragModeOn", external: !0, from: t }));
                        var a = e.create ? t._tempEvent : e.eventData,
                            n = e.create ? t._tempResource : e.resource,
                            s = e.create ? t._tempSlot : e.slot;
                        t.setState({ dragData: { draggedEvent: a, originDates: e.external ? ie : t._getDragDates(a, n, s), resource: n }, isTouchDrag: !0 });
                    }),
                    (t._onEventDragModeOff = function (e) {
                        t._hook("onEventDragEnd", {
                            domEvent: e.domEvent,
                            event: e.create ? t._tempEvent.original : e.event,
                            resource: t._tempResource !== bl ? t._tempResource : ie,
                            slot: t._tempSlot !== bl ? t._tempSlot : ie,
                            source: t._isTimeline ? "timeline" : "schedule",
                        }),
                            t.setState({ dragData: ie, isTouchDrag: !1 });
                    }),
                    (t._onEventDragStart = function (e) {
                        var a = t.s,
                            n = e.click,
                            s = a.eventList,
                            i = t._isTimeline,
                            r = t._visibleResources,
                            o = t._slots,
                            l = a.dragTimeStep,
                            d = e.startX,
                            h = e.startY;
                        (t._isTouch = e.isTouch), (t._scrollY = 0), (t._scrollX = 0), t._calcGridSizes();
                        var u = a.rtl ? t._gridRight - d : d - t._gridLeft,
                            m = ce(h - t._gridTop, 8, t._colHeight - 9),
                            _ = s ? t._cols : t._days,
                            p = _.length,
                            v = t._colWidth,
                            f = v ? Ce(u / v) : 1,
                            g = t._resourceTops,
                            y = t._scrollCont.scrollTop,
                            b = 0,
                            x = f,
                            D = 0;
                        if (a.externalDrag && e.drag && !e.create) {
                            var T = Fa(e.domEvent.target, ".mbsc-schedule-event", t._el).cloneNode(!0),
                                S = T.classList;
                            (T.style.display = "none"),
                                S.add("mbsc-drag-clone", "mbsc-schedule-drag-clone", "mbsc-font"),
                                S.remove("mbsc-schedule-event-hover"),
                                (t._clone = T),
                                (t._body = wa(t._el).body),
                                t._body.appendChild(T),
                                (t._eventDropped = !1),
                                tl.next(c({}, e, { create: !0, dragData: e.eventData.original, eventName: "onDragStart", external: !0, from: t }));
                        }
                        if (i) {
                            if (((D = v ? Ce(u / (v / o.length)) % o.length : 0), t._hasResY))
                                _.forEach(function (e, t) {
                                    r.forEach(function (a, n) {
                                        m > g[e.dateKey + "-" + a.id] && ((x = t), (b = n));
                                    });
                                });
                            else {
                                r.forEach(function (e, t) {
                                    m > g[e.id] && (b = t);
                                });
                                var C = m - y + t.state.headerHeight;
                                if (y && C < t._fixedHeight && m - y > 0)
                                    for (var w = 0, k = t._fixedResources; w < k.length; w++) {
                                        var M = k[w];
                                        C > t._fixedResourceTops[M.key] && (b = M.index);
                                    }
                            }
                            t._startSlotIndex = D;
                        } else {
                            var E = t._groupByResource,
                                N = E ? p : t._hasSlots ? t._slots.length : r.length;
                            (b = E ? Ce(f / N) : f % N), (x = E ? f % N : Ce(f / N));
                        }
                        var I = e.external ? ie : r[b],
                            L = I ? I.id : ie,
                            H = e.external ? ie : o[D],
                            O = H ? H.id : ie;
                        if (I && !1 === I.eventCreation) return !1;
                        if (e.create) {
                            x = ce(x, 0, p - 1);
                            var Y = !i && a.showAllDay && e.endY < t._gridContTop,
                                P = "day" === a.type && 1 === a.size ? t._firstDay : _[x].date,
                                F = s || (!e.external && !n) ? l * gt : t._stepCell,
                                z = t._getGridTime(P, u, m, x, n ? t._stepCell / gt : l),
                                V = !t._isDailyResolution || Y || s ? (Y ? P : Ut(a, P)) : z,
                                R =
                                    "year" === a.resolution
                                        ? ea(V, 12, a)
                                        : "quarter" === a.resolution
                                        ? ea(V, 3, a)
                                        : "month" === a.resolution
                                        ? ea(V, 1, a)
                                        : "week" === a.resolution
                                        ? $t(V, a.endDay - a.startDay + 1 + (a.endDay < a.startDay ? 7 : 0))
                                        : $t(V, 1),
                                A = a.exclusiveEndDates ? R : new Date(+R - 1),
                                W = Y || s ? A : aa(jt(a, +V + F), n ? 1 : l),
                                U = a.extendDefaultEvent ? a.extendDefaultEvent({ resource: L, slot: O, start: V }) : ie,
                                B = c({ allDay: Y, end: W, id: ll(), resource: I && L !== bl ? L : ie, slot: H && O !== bl ? O : ie, start: V, title: a.newEventText }, U, e.dragData),
                                j = t._getEventData(B, P, I);
                            if ((i && L !== ie && t._setRowHeight && (j.position.top = ce(Ce((m - (t._fixedResourceTops[L] ? y : 0) - g[L]) / t._eventHeight), 0, t._eventRows[L] - 1)), e.dragData)) {
                                var K = +j.endDate - +j.startDate;
                                ks(e.dragData.dragInTime, ie, a.dragInTime) && ((j.startDate = P), (j.endDate = new Date(+P + K)));
                            }
                            (t._tempEvent = j), (t._tempResource = L), (t._tempSlot = O);
                        }
                        return (
                            t._hook("onPopoverClose", { source: "dragStart" }),
                            n ||
                                t._hook("onEventDragStart", {
                                    action: e.create ? "create" : e.resize ? "resize" : "move",
                                    domEvent: e.domEvent,
                                    event: (e.create ? t._tempEvent : e.eventData).original,
                                    resource: L !== bl ? L : ie,
                                    slot: O !== bl ? O : ie,
                                    source: i ? "timeline" : "schedule",
                                }),
                            !0
                        );
                    }),
                    (t._onEventDragMove = function (e) {
                        clearTimeout(t._scrollTimer);
                        var a = t.s,
                            n = a.rtl,
                            s = n ? -1 : 1,
                            i = t._isTimeline,
                            r = a.eventList,
                            o = "month" === a.resolution || "year" === a.resolution,
                            l = r ? t._cols : t._days,
                            d = t._colWidth,
                            h = l.length,
                            u = t._slots,
                            m = t._groupByResource,
                            _ = t._visibleResources,
                            p = t.state.dragData,
                            v = a.dragTimeStep,
                            f = a.timeFormat,
                            g = e.startX,
                            y = ce(e.endX, t._gridContLeft, t._gridContRight - 1),
                            b = ce(e.endY, t._gridContTop, t._gridContBottom - 1),
                            x = b - e.startY + t._scrollY,
                            D = n ? g - y + t._scrollX : y - g + t._scrollX,
                            T = i ? D : x,
                            S = i ? d : t._colHeight - 16,
                            C = t._gridRight - t._gridLeft - 1,
                            w = ce(e.startY - t._gridTop, 8, t._colHeight - 9),
                            k = ce(n ? t._gridRight + t._scrollX - y : y - t._gridLeft + t._scrollX, 0, C),
                            M = ce(b - t._gridTop + t._scrollY, 8, t._colHeight - 9),
                            E = Ce((n ? t._gridRight - g : g - t._gridLeft) / d),
                            N = Ce(k / d),
                            I = a.showAllDay && e.endY < t._gridContTop,
                            L = t._resourceTops,
                            H = t._hasResY,
                            O = t._scrollCont,
                            Y = O.scrollTop,
                            P = e.create ? t._tempEvent : e.eventData,
                            F = c({}, P),
                            z = E,
                            V = N,
                            R = 0,
                            A = 0,
                            W = !1,
                            U = t._gridContBottom - e.endY,
                            B = e.endY - t._gridContTop,
                            j = e.endX - t._gridContLeft,
                            K = t._gridContRight - e.endX,
                            X = (O.scrollWidth - O.clientWidth) * s,
                            J = n ? 0 : X,
                            q = n ? X : 0;
                        if (a.externalDrag && e.drag && !e.create && (tl.next(c({}, e, { clone: t._clone, create: !0, dragData: P.original, eventName: "onDragMove", external: !0, from: t })), !t._onCalendar))
                            return sl(e, t._clone), void (p || t.setState({ dragData: { draggedEvent: F } }));
                        if (
                            (U < 30 && Y < O.scrollHeight - O.clientHeight && ((O.scrollTop += 5), (t._scrollY += 5), (W = !0)),
                            B < 30 && !I && Y > 0 && ((O.scrollTop -= 5), (t._scrollY -= 5), (W = !0)),
                            j < 30 && O.scrollLeft > q && ((O.scrollLeft -= 5), (t._scrollX -= 5 * s), (W = !0)),
                            K < 30 && O.scrollLeft < J && ((O.scrollLeft += 5), (t._scrollX += 5 * s), (W = !0)),
                            W &&
                                (t._scrollTimer = setTimeout(function () {
                                    t._onEventDragMove(e);
                                }, 20)),
                            i)
                        )
                            if (((A = Ce(k / (d / u.length)) % u.length), H))
                                l.forEach(function (e, t) {
                                    _.forEach(function (a, n) {
                                        w > L[e.dateKey + "-" + a.id] && (z = t), M > L[e.dateKey + "-" + a.id] && ((V = t), (R = n));
                                    });
                                });
                            else {
                                _.forEach(function (e, t) {
                                    M > L[e.id] && (R = t);
                                });
                                var G = M - Y + t.state.headerHeight;
                                if (Y && G < t._fixedHeight && M - Y > 0)
                                    for (var Z = 0, Q = t._fixedResources; Z < Q.length; Z++) {
                                        var $ = Q[Z];
                                        G > t._fixedResourceTops[$.key] && (R = $.index);
                                    }
                            }
                        else {
                            var ee = m ? h : t._resources.length;
                            (z = m ? E % ee : Ce(E / ee)), (V = m ? N % ee : Ce(N / ee)), (R = m ? Ce(N / ee) : N % ee);
                        }
                        (z = ce(z, 0, h - 1)), (V = ce(V, 0, h - 1));
                        var te = P.startDate,
                            ae = P.endDate,
                            ne = +ae - +te,
                            se = t._time,
                            re = Ce((se * T) / S),
                            oe = _[R],
                            le = e.create ? t._tempResource : e.resource,
                            de = e.create ? t._tempSlot : e.slot;
                        if (!1 === oe.eventCreation && t._tempResource === ie) return !1;
                        var he,
                            ue = u[A].id,
                            me = !1 !== oe.eventCreation ? oe.id : t._tempResource,
                            _e = P.allDay,
                            pe = _e ? ie : a,
                            ve = _e || r,
                            fe = te,
                            ge = ae,
                            ye = !0,
                            be = !0,
                            xe = !0,
                            De = l[z].date,
                            Te = l[V].date,
                            Se = "day" === a.type && 1 === a.size ? 0 : Yt(De, Te),
                            we = V - z,
                            ke = "year" === a.resolution ? 12 : 1,
                            Me = Se - we;
                        if (
                            (((e.drag && !e.create) || e.external) &&
                                (e.external ||
                                    ((ye = Ms(P.original.dragBetweenResources, t._resourcesMap[le].eventDragBetweenResources, a.dragBetweenResources)),
                                    (be = Es(P.original.dragBetweenSlots, t._resourcesMap[le].eventDragBetweenSlots, u[t._startSlotIndex || 0].eventDragBetweenSlots, a.dragBetweenSlots))),
                                (xe = ks(P.original.dragInTime, e.external || t._resourcesMap[le].eventDragInTime, a.dragInTime))),
                            e.drag || e.external)
                        )
                            if ((i || ye || le === me || (Se = t._dragDayDelta), i && r && o)) (fe = ea(te, we * ke, a)), (ge = ea(ae, we * ke, a));
                            else {
                                if (((ve = (_e = I || (i && P.allDay)) || r), (pe = _e ? ie : a), (!i && !I && (P.allDay || e.external)) || (i && e.external && !P.allDay && !r))) {
                                    var Ee = Ht($t(te, Se));
                                    fe = t._getGridTime(Ee, k, M, V, v);
                                } else !i || ve || H ? ((he = $t(te, Se)), (fe = ve ? he : aa(jt(pe, +he + re), v))) : (fe = aa(jt(a, +te + re + (bt - se) * Se + se * Me), v));
                                !1 !== oe.eventCreation || i || (fe = jt(a, t._tempStart)), (ge = jt(pe, +fe + ne));
                            }
                        else {
                            var Ne = i ? we : N - E,
                                Ie = e.create ? (Ne ? Ne > 0 : T > 0) : "end" === e.direction,
                                Le = Yt(te, ae);
                            !i && m && le !== me && (Se = t._dragDayDelta),
                                Ie
                                    ? i && r && o
                                        ? (ge = ea(ae, we * ke, a))
                                        : !i || ve || H
                                        ? ((he = $t(ae, Math.max(-Le, Se))), (ge = ve ? he : aa(jt(pe, +he + re), v)), !ve && (kt(ge) > t._endTime + 1 || ge >= $t(Ht(he), 1)) && (ge = jt(a, +Ht(he) + t._endTime + 1)))
                                        : (ge = aa(jt(a, +ae + re + Se * (bt - se) + se * Me), v))
                                    : i && r && o
                                    ? (fe = ea(te, we * ke, a))
                                    : !i || ve || H
                                    ? ((he = $t(te, Math.min(Le, Se))), (fe = ve ? he : aa(jt(pe, +he + re), v)), !ve && (kt(fe) < t._startTime || fe < Ht(he)) && (fe = jt(a, +Ht(he) + t._startTime)))
                                    : (fe = aa(jt(a, +te + re + Se * (bt - se) + se * Me), v)),
                                (me = le),
                                ve && ge < fe && (Ie ? (ge = jt(a, fe)) : (fe = jt(a, ge))),
                                !ve && (ge < fe || Math.abs(+ge - +fe) < v * gt) && (Ie ? (ge = jt(a, +fe + v * gt)) : (fe = jt(a, +ge - v * gt)));
                        }
                        if (
                            ((e.drag || e.external) && (xe || ((fe = te), (ge = ae), (_e = t._tempAllDay)), ye || (me = le), be || (ue = de)),
                            t._tempStart !== +fe || t._tempEnd !== +ge || t._tempAllDay !== _e || t._tempResource !== me || t._tempSlot !== ue)
                        ) {
                            var He = void 0,
                                Oe = void 0;
                            t._isDailyResolution ? ((He = qt(f, fe, a)), (Oe = qt(f, ge, a))) : ((He = qt(a.dateFormat, fe, a)), (Oe = qt(a.dateFormat, It(a, _e, fe, ge), a))),
                                (F.startDate = fe),
                                (F.endDate = ge),
                                (F.start = He),
                                (F.end = Oe),
                                (F.allDay = _e),
                                (F.date = +Te),
                                (t._tempStart = +fe),
                                (t._tempEnd = +ge),
                                (t._tempAllDay = _e),
                                (t._tempResource = me),
                                (t._tempSlot = ue),
                                (t._dragDelta = e.drag || e.external ? -1 : e.direction ? ("end" === e.direction ? 1 : -1) : T),
                                (t._dragDayDelta = Se),
                                _e || t._onMouseMove(e.domEvent),
                                t.setState({ dragData: { draggedDates: t._getDragDates(F, me, ue), draggedEvent: F, originDate: P.date, originDates: p && p.originDates, originResource: e.external ? ie : le, resource: me, slot: ue } });
                        }
                        return !0;
                    }),
                    (t._onEventDragEnd = function (e) {
                        clearTimeout(t._scrollTimer);
                        var a = t.s,
                            n = e.create,
                            s = t.state,
                            i = s.dragData,
                            r = !1;
                        if (
                            (a.externalDrag &&
                                e.drag &&
                                !e.create &&
                                (tl.next(c({}, e, { action: "externalDrop", create: !0, dragData: e.eventData.original, eventName: "onDragEnd", external: !0, from: t })),
                                t._body.removeChild(t._clone),
                                t._onCalendar || ((r = !0), t._eventDropped && ((e.event = e.eventData.original), a.onEventDelete(e)))),
                            n && !i && ((i = {}).draggedEvent = t._tempEvent),
                            i && i.draggedEvent)
                        ) {
                            var o = e.eventData,
                                l = i.draggedEvent,
                                d = l.startDate,
                                h = l.endDate,
                                u = l.allDay,
                                m = l.original,
                                _ = n && !e.external ? t._tempResource : e.resource,
                                p = i.resource === ie ? _ : i.resource,
                                v = m.resource === ie ? p : m.resource,
                                f = n ? t._tempSlot : e.slot,
                                g = i.slot === ie ? f : i.slot,
                                y = {},
                                b = {},
                                x = t._isTimeline,
                                D = x ? "timeline" : "schedule",
                                T = n || +d != +o.startDate || +h != +o.endDate || u !== o.allDay || _ !== p || f !== g,
                                S = v,
                                C = void 0;
                            if (_ !== p && (!n || e.external) && !t._isSingleResource)
                                if (he(v) && v.length && p) {
                                    var w = v.indexOf(_);
                                    -1 === v.indexOf(p) && (S = v.slice()).splice(w, 1, p);
                                } else S = p;
                            C =
                                S && a.resources
                                    ? he(S)
                                        ? S
                                        : [S]
                                    : t._resources.map(function (e) {
                                          return e.id;
                                      });
                            for (var k = t._resourcesMap[p], M = !1 !== m.overlap && !1 !== k.eventOverlap && !1 !== a.eventOverlap, E = 0, N = C; E < N.length; E++) {
                                var I = N[E];
                                if ((t._invalids[I] && (y[I] = t._invalids[I][g]), t._events[I])) {
                                    for (var L = {}, H = t._events[I][g], O = 0, Y = Object.keys(H); O < Y.length; O++) {
                                        var P = Y[O],
                                            F = H[P];
                                        L[P] = {
                                            allDay: F.allDay.filter(function (e) {
                                                return e.id !== l.id && (!M || !1 === e.original.overlap);
                                            }),
                                            data: F.data.filter(function (e) {
                                                return e.id !== l.id && (!M || !1 === e.original.overlap);
                                            }),
                                        };
                                    }
                                    b[I] = L;
                                }
                            }
                            var z = e.action || (s.dragData ? "drag" : "click"),
                                V =
                                    !r &&
                                    (!T ||
                                        a.eventDragEnd({
                                            action: z,
                                            collision: xl(y, d, h, u, x, a.invalidateEvent, a.exclusiveEndDates),
                                            create: n,
                                            domEvent: e.domEvent,
                                            event: l,
                                            from: e.from,
                                            overlap: xl(b, d, h, u, x, "strict", a.exclusiveEndDates),
                                            resource: S !== bl ? S : ie,
                                            slot: g !== bl ? g : ie,
                                            source: D,
                                        })),
                                R = s.isTouchDrag && !r && (!n || V);
                            if (V && R && _ !== p && !m.color) {
                                var A = k && k.color;
                                A ? ((l.color = A), (l.style.background = A), (l.style.color = La(A))) : ((l.color = ie), (l.style = {}));
                            }
                            R || "click" === z || t._hook("onEventDragEnd", { domEvent: e.domEvent, event: (n ? t._tempEvent : o).original, resource: p !== bl ? p : ie, slot: g !== bl ? g : ie, source: D }),
                                t.setState({
                                    dragData: R ? { draggedEvent: V ? l : c({}, o), originDate: V ? l.date : o.date, originDates: V ? t._getDragDates(l, p, g) : i.originDates, originResource: V ? p : i.originResource } : ie,
                                    isTouchDrag: R,
                                }),
                                (t._tempStart = 0),
                                (t._tempEnd = 0),
                                (t._tempAllDay = ie),
                                (t._dragDelta = ie),
                                t._onMouseMove(e.domEvent),
                                (t._isTouch = !1);
                        }
                    }),
                    (t._onExternalDrag = function (e) {
                        var a = t.s,
                            n = e.clone,
                            s = e.from === t,
                            i = !s && a.externalDrop,
                            r = s && a.externalDrag && !a.dragToMove,
                            o = t.state.dragData;
                        if (i || a.externalDrag) {
                            var l = !r && e.endY < t._gridContBottom && e.endY > t._allDayTop && e.endX > t._gridContLeft && e.endX < t._gridContRight;
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    i && t._onEventDragModeOff(e);
                                    break;
                                case "onDragModeOn":
                                    i && t._onEventDragModeOn(e);
                                    break;
                                case "onDragStart":
                                    i ? t._onEventDragStart(e) : s && (t._onCalendar = !0);
                                    break;
                                case "onDragMove":
                                    if (!s && !i) return;
                                    l
                                        ? (t._onCalendar || t._hook("onEventDragEnter", { domEvent: e.domEvent, event: e.dragData, source: t._isTimeline ? "timeline" : "schedule" }),
                                          (s || (i && !1 !== t._onEventDragMove(e))) && (n.style.display = "none"),
                                          (t._onCalendar = !0))
                                        : t._onCalendar &&
                                          (t._hook("onEventDragLeave", { domEvent: e.domEvent, event: e.dragData, source: t._isTimeline ? "timeline" : "schedule" }),
                                          clearTimeout(t._scrollTimer),
                                          (n.style.display = "table"),
                                          (s && !o) || t.setState({ dragData: { draggedDates: {}, draggedEvent: s ? o && o.draggedEvent : ie, originDates: s ? o && o.originDates : ie } }),
                                          (t._tempStart = 0),
                                          (t._tempEnd = 0),
                                          (t._tempAllDay = ie),
                                          (t._tempResource = ie),
                                          (t._dragDelta = ie),
                                          (t._onCalendar = !1),
                                          t._onMouseLeave(ie, !0));
                                    break;
                                case "onDragEnd":
                                    i &&
                                        (l && t._tempResource !== ie
                                            ? t._onEventDragEnd(e)
                                            : (t.setState({ dragData: ie, isTouchDrag: !1 }), t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.dragData, resource: e.resource, slot: e.slot, source: e.source })));
                            }
                        }
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._isToday = function (e) {
                    return zt(new Date(e), jt(this.s));
                }),
                (t.prototype._formatTime = function (e, t) {
                    var a = this.s,
                        n = a.timeFormat,
                        s = /a/i.test(n) && this._stepLabel === yt && e % yt == 0 ? n.replace(/.[m]+/i, "") : n,
                        i = new Date(+ft + e),
                        r = jt(a, i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes());
                    return xt(r) && t && r.setTimezone(t), qt(s, r, a);
                }),
                (t.prototype._getEventPos = function (e, t, a, n) {
                    var s = this.s,
                        i = e.allDay ? ie : s,
                        r = jt(i, t.getFullYear(), t.getMonth(), t.getDate()),
                        o = Ht($t(r, 1)),
                        l = i ? this._firstDayTz : this._firstDay,
                        c = i ? this._lastDayTz : this._lastDay,
                        d = this._isTimeline,
                        h = !d && !this._groupByResource,
                        u = e.allDay,
                        m = this._startTime,
                        _ = this._endTime + 1,
                        p = this._time,
                        v = this._hasSlots,
                        f = this._hasResY,
                        g = this._isDailyResolution,
                        y = s.eventList,
                        b = f ? 0 : this._dayIndexMap[a],
                        x = e.start,
                        D = e.end,
                        T = Dl(e, s, y, d, g, l, this._cols, this._colIndexMap),
                        S = Tl(e, s, y, d, g, c, this._cols, this._colIndexMap),
                        C = +T == +S ? 1 : 0;
                    if ((((!u && !d) || (f && !v)) && (T < r && ((x = ""), (T = jt(s, r))), S >= o && ((D = ""), (S = jt(s, +o - 1))), S >= o && (S = jt(s, +o - 1))), u || d)) {
                        if (!n.get(e.original) || v || f || h) {
                            var w = s.startDay,
                                k = s.endDay,
                                M = u || y,
                                E = !zt(T, S),
                                N = this._daysNr;
                            d && E && kt(T) >= _ && (T = jt(s, +Ht(T) + _));
                            var I = wl(T, m, p, l, w, k),
                                L = (function (e, t, a, n, s, i, r, o, l, c) {
                                    var d = e,
                                        h = t,
                                        u = $t(Ht(h), 1);
                                    d < n && (d = n), h > s && (h = u = s);
                                    var m = kt(d),
                                        _ = kt(h);
                                    i > m && (m = i), r < _ && (_ = r), zt(d, h) || (m > r && (m = r), _ < i && (_ = i));
                                    var p = 0;
                                    if (zt(d, h)) p = c ? a : _ - m;
                                    else for (var v = Ht(d); v < u; v.setDate(v.getDate() + 1)) ta(v.getDay(), o, l) && (!c && zt(v, d) ? (p += a - m + i) : !c && zt(v, h) ? (p += _ - i) : (p += a));
                                    return (100 * p) / a;
                                })(T, S, p, l, c, m, _, w, k, M);
                            if (d) {
                                var H = 0;
                                if ((y && !g && (b = this._dayIndexMap[Lt(T)]), "month" === s.resolution || "quarter" === s.resolution)) {
                                    var O = this._days[b].dayDiff,
                                        Y = Lt(S >= c ? $t(c, -1) : S),
                                        P = this._dayIndexMap[Y];
                                    H = this._days[P].dayDiff - O;
                                }
                                (L = (L + 100 * H) / N), (I = (I + 100 * b) / N);
                            }
                            var F = d
                                    ? M
                                        ? { left: s.rtl ? "" : (v ? "" : (100 * b) / N) + "%", right: s.rtl ? (v ? "" : (100 * b) / N) + "%" : "", width: (v ? "" : L) + "%" }
                                        : { height: this._setRowHeight ? "" : "100%", left: s.rtl ? "" : I + "%", right: s.rtl ? I + "%" : "", top: "0", width: L + "%" }
                                    : { width: (E && !h ? L : 100) + "%" },
                                z = kt(T) < _ && S > l,
                                V = kt(S) + C > m;
                            if (M || (E && L > 0) || (z && V)) return n.set(e.original, !0), { end: D, endDate: S, position: F, start: x, startDate: T };
                        }
                    } else if (kt(T) < _ && kt(S) + C > m && S >= T) {
                        var R = (function (e, t, a, n, s) {
                            var i = kt(e),
                                r = kt(t);
                            return n > i && (i = n), s < r && (r = s), (100 * (r - i)) / a;
                        })(T, S, p, m, _);
                        return { cssClass: R < 2 ? " mbsc-schedule-event-small-height" : "", end: D, endDate: S, position: { height: R + "%", top: wl(T, m, p) + "%", width: "100%" }, start: x, startDate: T };
                    }
                    return ie;
                }),
                (t.prototype._getEventData = function (e, t, a, n) {
                    var s = this.s,
                        i = cl(s, e, t, !0, a, !1, !this._isTimeline || this._hasResY, this._isDailyResolution, n);
                    return e.allDay && s.exclusiveEndDates && +i.endDate == +i.startDate && (i.endDate = Ht($t(i.startDate, 1))), i;
                }),
                (t.prototype._getEvents = function (e) {
                    var t = this,
                        a = this.s,
                        n = this._resources,
                        s = this._slots,
                        i = this._hasSlots,
                        r = this._hasResY,
                        o = this._isTimeline,
                        l = !o,
                        c = {},
                        d = kl(e, n, s, !!a.resources, !!a.slots),
                        h = {},
                        u = this._firstDay,
                        m = this._lastDay,
                        _ = this._setRowHeight,
                        p = {},
                        v = this._cols,
                        f =
                            this._createEventMaps ||
                            a.renderHour ||
                            a.renderHourFooter ||
                            a.renderDay ||
                            a.renderDayFooter ||
                            a.renderWeek ||
                            a.renderWeekFooter ||
                            a.renderMonth ||
                            a.renderMonthFooter ||
                            a.renderQuarter ||
                            a.renderQuarterFooter ||
                            a.renderYear ||
                            a.renderYearFooter;
                    if (
                        (f &&
                            v.forEach(function (e) {
                                return (e.eventMap = { all: [] });
                            }),
                        a.connections)
                    )
                        for (var g = 0, y = a.connections; g < y.length; g++) {
                            var b = y[g];
                            (p[b.from] = !0), (p[b.to] = !0);
                        }
                    for (
                        var x = function (n) {
                                var g = n.id,
                                    y = new Map(),
                                    b = 0,
                                    x = [],
                                    T = {},
                                    S = function (e, s) {
                                        for (var d = 0; d < x.length; d++) {
                                            var h = x[d],
                                                u = h.stacks.length,
                                                m = h.more.length;
                                            if ((_ && u > b && (b = u), !i))
                                                for (var p = 0; p < u; p++)
                                                    for (var v = 0, f = h.stacks[p]; v < f.length; v++) {
                                                        var D = f[v],
                                                            S = o && m && !_ ? 1 : 0,
                                                            C = (((T[D.uid] || u + S) - p) / (u + S)) * 100;
                                                        l
                                                            ? ((D.position.width = C + "%"), (D.position[a.rtl ? "right" : "left"] = (100 * p) / u + "%"), (D.position[a.rtl ? "left" : "right"] = "auto"))
                                                            : ((D.position.height = _ ? "" : C + "%"), (D.position.top = _ ? p : (100 * p) / (u + S) + "%"));
                                                    }
                                            if (m) {
                                                for (var w = void 0, k = void 0, M = 0, E = h.more; M < E.length; M++) {
                                                    var N = E[M];
                                                    (!w || N.startDate < w) && (w = N.startDate), (!k || N.endDate > k) && (k = N.endDate);
                                                }
                                                var I = s || new Date(h.more[0].date),
                                                    L = Lt(I),
                                                    H = "more-" + (l || r ? L + "-" : "") + g,
                                                    O = a.moreEventsText || "",
                                                    Y = ((m > 1 && a.moreEventsPluralText) || O).replace(/{count}/, m),
                                                    P = t._getEventData(
                                                        {
                                                            color: "#ddd",
                                                            cssClass: "mbsc-schedule-event-more",
                                                            editable: !1,
                                                            end: k,
                                                            id: H + (i ? (r ? "" : "-" + L) + "-" + e : "") + "-" + d,
                                                            more: h.more,
                                                            start: w,
                                                            text: (l ? "+" : "") + (o ? Y : m),
                                                        },
                                                        I,
                                                        n
                                                    ),
                                                    F = t._getEventPos(P, I, L, y);
                                                F &&
                                                    ((P.position = F.position),
                                                    o
                                                        ? ((P.position.height = _ ? "" : 100 / (u + 1) + "%"), (P.position.top = i ? "" : _ ? u : (100 * u) / (u + 1) + "%"), c[g][e][r || i ? L : "all"].data.push(P))
                                                        : ((P.showText = !0),
                                                          (P.position.width = "24px"),
                                                          (P.position[a.rtl ? "right" : "left"] = "auto"),
                                                          (P.position[a.rtl ? "left" : "right"] = "-24px"),
                                                          (c[g][e][L].hasMore = !0),
                                                          c[g][e][L].data.push(P))),
                                                    (t._eventRows[H] = 1);
                                            }
                                        }
                                    };
                                c[g] = {};
                                for (
                                    var C = function (s) {
                                            var _ = s.id,
                                                C = d[g][_],
                                                w = Object.keys(C).sort();
                                            (c[g][_] = { all: { allDay: [], data: [] } }), l && (h[_] = Ss(a, C, u, m, -1, D._daysNr, !0, a.startDay, !1, a.eventOrder));
                                            for (
                                                var k = function (s) {
                                                        var d = e[s].date;
                                                        if (D._dayIndexMap[s] !== ie && ta(d.getDay(), a.startDay, a.endDay)) {
                                                            var w = Cs(C[s]) || [];
                                                            (l || r || i) && ((x = []), (T = {})), (c[g][_][s] = { allDay: [], data: [] }), r && (b = D._eventRows[s + "-" + g] || 0);
                                                            for (var k = 0, M = w; k < M.length; k++) {
                                                                var E = M[k];
                                                                if (!E.allDay || o) {
                                                                    var N = D._getEventData(E, d, n),
                                                                        I = D._getEventPos(N, d, s, y);
                                                                    if (
                                                                        ((N.position = ie),
                                                                        I &&
                                                                            ((N.cssClass = I.cssClass),
                                                                            (N.position = I.position),
                                                                            (l || r) && (N.showText = !0),
                                                                            Sl(a, x, N, T, D._maxEventStack || 1, a.eventList, o, D._isDailyResolution, u, D._firstDayTz, m, D._lastDayTz, D._cols, D._colIndexMap),
                                                                            c[g][_].all.data.push(N),
                                                                            (D._eventMap[N.id] = N),
                                                                            f))
                                                                    )
                                                                        for (
                                                                            var L = D._stepCell, H = D._isDailyResolution && L < 864e5, O = E.allDay ? u : Ut(a, u), Y = N.startDate > O ? N.startDate : O, P = D._colIndexMap[Lt(Y)], F = !0;
                                                                            F && P < v.length;

                                                                        ) {
                                                                            for (var z = v[P], V = z.date, R = P < v.length - 1 ? v[P + 1].date : m, A = V, W = !1; A < R; ) {
                                                                                var U = +A,
                                                                                    B = H ? new Date(U + L) : R,
                                                                                    j = E.allDay ? V : Ut(a, A),
                                                                                    K = E.allDay ? R : Ut(a, B);
                                                                                Mt(N.startDate, N.endDate, j, K, !0)
                                                                                    ? (z.eventMap[U] || (z.eventMap[U] = []), W || (z.eventMap.all.push(N.original), (W = !0)), z.eventMap[U].push(N.original), (F = !0))
                                                                                    : (F = !1),
                                                                                    (A = B);
                                                                            }
                                                                            P++;
                                                                        }
                                                                    c[g][_][s].data.push(N), o && E.allDay && c[g][_][s].allDay.push(N);
                                                                }
                                                            }
                                                            l &&
                                                                h[_][s] &&
                                                                h[_][s].data.forEach(function (e) {
                                                                    var a = e.event,
                                                                        i = e.width;
                                                                    if (a) {
                                                                        var r = t._getEventData(a, d, n),
                                                                            o = t._getEventPos(r, d, s, y);
                                                                        (r.position = { width: o ? o.position.width : i }), (r.showText = !!o), c[g][_][s].allDay.push(r);
                                                                    }
                                                                }),
                                                                (l || r || i) && S(_, d),
                                                                r && (D._eventRows[s + "-" + g] = b || 1);
                                                        } else if (a.connections)
                                                            for (var X = 0, J = (w = C[s] || []); X < J.length; X++) {
                                                                var q = J[X],
                                                                    G = q.id;
                                                                !D._eventMap[G] && p[G] && (D._eventMap[G] = D._getEventData(q, d, n));
                                                            }
                                                    },
                                                    M = 0,
                                                    E = w;
                                                M < E.length;
                                                M++
                                            ) {
                                                k(E[M]);
                                            }
                                        },
                                        w = 0,
                                        k = s;
                                    w < k.length;
                                    w++
                                ) {
                                    C(k[w]);
                                }
                                !o || i || r || S(bl), r || (D._eventRows[g] = b || 1);
                            },
                            D = this,
                            T = 0,
                            S = n;
                        T < S.length;
                        T++
                    ) {
                        x(S[T]);
                    }
                    return c;
                }),
                (t.prototype._getInvalids = function (e) {
                    var t,
                        a = this.s,
                        n = a.eventList,
                        s = e || {},
                        i = {},
                        r = n ? Ht(new Date(a.minDate)) : new Date(a.minDate),
                        o = n ? Ht($t(new Date(a.maxDate), 1)) : new Date(a.maxDate),
                        l = this._isTimeline;
                    if (a.minDate)
                        for (var c = Ht(this._firstDay); c < r; c.setDate(c.getDate() + 1)) {
                            (S = s[(T = Lt(c))] || []).push({ end: r, start: new Date(c) }), (s[T] = S);
                        }
                    if (a.maxDate)
                        for (c = Ht(o); c < this._lastDay; c.setDate(c.getDate() + 1)) {
                            (S = s[(T = Lt(c))] || []).push({ end: new Date(this._lastDay), start: o }), (s[T] = S);
                        }
                    for (var d = kl(s, this._resources, this._slots, !!a.resources, !!a.slots), h = Object.keys(s).sort(), u = 0, m = this._resources; u < m.length; u++) {
                        var _ = m[u],
                            p = _.id,
                            v = new Map();
                        i[p] = {};
                        for (var f = 0, g = this._slots; f < g.length; f++) {
                            var y = g[f].id,
                                b = { allDay: [], data: [] };
                            i[p][y] = { all: b };
                            for (var x = 0, D = h; x < D.length; x++) {
                                var T;
                                c = Kt((T = D[x]));
                                if (this._dayIndexMap[T] !== ie && ta(c.getDay(), a.startDay, a.endDay)) {
                                    var S = d[p][y][T] || [],
                                        C = { allDay: [], data: [] },
                                        w = [];
                                    i[p][y][T] = C;
                                    for (var k = 0, M = S; k < M.length; k++) {
                                        var E = M[k];
                                        if (_e(E) || At(E)) {
                                            var N = Kt(E);
                                            E = { allDay: !0, end: new Date(N), start: N };
                                        }
                                        var I = this._getEventData(E, c, _, !0);
                                        (I.cssClass = E.cssClass ? " " + E.cssClass : ""), (I.position = ie);
                                        var L = this._getEventPos(I, c, T, v);
                                        if (
                                            (L &&
                                                (!l && 0 === kt(L.startDate) && new Date(+L.endDate + 1) >= $t(c, 1)
                                                    ? (I.allDay = !0)
                                                    : ((I.position = L.position),
                                                      kt(L.startDate) <= this._startTime && (I.cssClass += " mbsc-schedule-invalid-start"),
                                                      kt(L.endDate) >= this._endTime && (I.cssClass += " mbsc-schedule-invalid-end")),
                                                w.push(I)),
                                            C.data.push(I),
                                            I.allDay)
                                        ) {
                                            l || ((I.position = {}), L && +I.startDate == +I.endDate && (I.endDate = L.endDate)), (C.allDay = [I]), (C.data = [I]), (w = [I]);
                                            break;
                                        }
                                    }
                                    (t = b.data).push.apply(t, w);
                                }
                            }
                        }
                    }
                    return i;
                }),
                (t.prototype._getColors = function (e) {
                    for (
                        var t = this.s, a = {}, n = kl(e, this._resources, this._slots, !!t.resources, !!t.slots), s = Object.keys(e || {}).sort(), i = this._hasSlots, r = this._isTimeline, o = this._hasResY, l = 0, c = this._resources;
                        l < c.length;
                        l++
                    ) {
                        var d = c[l],
                            h = d.id,
                            u = new Map();
                        a[h] = {};
                        for (var m = 0, _ = this._slots; m < _.length; m++) {
                            var p = _[m].id;
                            a[h][p] = { all: { allDay: [], data: [] } };
                            for (var v = 0, f = s; v < f.length; v++) {
                                var g = f[v],
                                    y = Kt(g);
                                if (this._dayIndexMap[g] !== ie && ta(y.getDay(), t.startDay, t.endDay)) {
                                    var b = n[h][p][g] || [],
                                        x = o || i || !r ? g : "all";
                                    (!r || i || o) && (a[h][p][x] = { allDay: [], data: [] });
                                    for (var D = a[h][p][x], T = 0, S = b; T < S.length; T++) {
                                        var C = S[T],
                                            w = this._getEventData(C, y, d, !0);
                                        if (((w.cssClass = C.cssClass ? " " + C.cssClass : ""), w.allDay && !r)) D.allDay = [w];
                                        else {
                                            var k = this._getEventPos(w, y, g, u);
                                            k &&
                                                ((w.position = k.position),
                                                kt(k.startDate) <= this._startTime && (w.cssClass += " mbsc-schedule-color-start"),
                                                kt(k.endDate) >= this._endTime && (w.cssClass += " mbsc-schedule-color-end"),
                                                D.data.push(w));
                                        }
                                        (w.position.background = C.background), (w.position.color = C.textColor ? C.textColor : La(C.background));
                                    }
                                }
                            }
                        }
                    }
                    return a;
                }),
                (t.prototype._flattenResources = function (e, t, a, n, s) {
                    for (var i = e && e.length ? e : [{ id: bl }], r = this.s.immutableData, o = 0, l = i; o < l.length; o++) {
                        var d = l[o],
                            h = n && r ? c({}, d) : d,
                            u = h.children;
                        r && (h.original = d),
                            (h.depth = a),
                            (h.isParent = !(!u || !u.length)),
                            (h.fixed = h.fixed || s),
                            t.push(h),
                            (this._resourcesMap[h.id] = h),
                            !n || (!r && a) || n.push(h),
                            h.isParent && ((this._hasHierarchy = !0), (h.collapsed && !n) || (n && r && (h.children = []), this._flattenResources(u, t, a + 1, n && h.children, h.fixed)));
                    }
                    return t;
                }),
                (t.prototype._render = function (e, t) {
                    var a = this,
                        n = this._prevS,
                        s = this._isTimeline,
                        i = new Date(e.selected),
                        r = +e.size,
                        o = Cl(e.timeLabelStep),
                        l = Cl(e.timeCellStep),
                        c = e.firstDay,
                        d = e.startDay,
                        h = e.endDay,
                        u = e.resources,
                        m = e.slots,
                        _ = !1 === e.virtualScroll,
                        p = e.resolution,
                        f = "day" === p || "hour" === p || !s,
                        g = "day" === e.resolutionVertical,
                        y = !1,
                        b = !1,
                        x = this._startTime,
                        D = this._endTime;
                    if (
                        ((d === n.startDay &&
                            h === n.endDay &&
                            e.checkSize === n.checkSize &&
                            e.eventList === n.eventList &&
                            e.refDate === n.refDate &&
                            e.size === n.size &&
                            e.type === n.type &&
                            e.resolution === n.resolution &&
                            e.resolutionVertical === n.resolutionVertical &&
                            e.displayTimezone === n.displayTimezone &&
                            e.weekNumbers === n.weekNumbers) ||
                            ((y = !0), (this._viewChanged = !0)),
                        (y || e.rtl !== n.rtl || e.dateFormat !== n.dateFormat || e.getDay !== n.getDay || e.rowHeight !== n.rowHeight || e.maxEventStack !== n.maxEventStack) && (b = !0),
                        e.startTime !== n.startTime || e.endTime !== n.endTime || e.timeLabelStep !== n.timeLabelStep || e.timeCellStep !== n.timeCellStep || e.timeFormat !== n.timeFormat || this._startTime === ie || this._endTime === ie)
                    ) {
                        var T = Kt(e.startTime || "00:00"),
                            S = new Date(+Kt(e.endTime || "00:00") - 1);
                        (this._startTime = x = kt(T)), (this._endTime = D = kt(S)), (this._time = D - x + 1), (this._timesBetween = ye(Ce(l / o) - 1)), (this._times = []), (this._timeLabels = {}), (this._viewChanged = !0);
                        for (
                            var C = l * gt,
                                w = Ce(x / C) * C,
                                k = function (e) {
                                    if ((M._times.push(e), s)) {
                                        var t = e === w;
                                        (M._timeLabels[e] = t || e % (o * gt) == 0 ? M._formatTime(t ? x : e) : ""),
                                            M._timesBetween.forEach(function (t, n) {
                                                var s = e + (n + 1) * o * gt;
                                                a._timeLabels[s] = a._formatTime(s);
                                            });
                                    }
                                },
                                M = this,
                                E = w;
                            E <= D;
                            E += C
                        )
                            k(E);
                        b = !0;
                    }
                    if (
                        ((e.slots === n.slots && this._slots !== ie) || ((this._hasSlots = s && !!m && m.length > 0), (this._slots = m && m.length ? m : [{ id: bl }]), (b = !0)),
                        (u === n.resources && this._resources !== ie) ||
                            ((this._hasResources = !!u && u.length > 0),
                            (this._hasHierarchy = !1),
                            (this._resourcesMap = {}),
                            (this._resourcesCopy = []),
                            (this._resources = this._flattenResources(u, [], 0, this._resourcesCopy)),
                            (this._visibleResources = this._flattenResources(this._resourcesCopy, [], 0)),
                            (this._isSingleResource = 1 === this._resources.length),
                            (b = !0)),
                        y || e.selected !== n.selected || e.getDay !== n.getDay || e.monthNames !== n.monthNames || e.dateFormat !== n.dateFormat || e.currentTimeIndicator !== n.currentTimeIndicator)
                    ) {
                        var N = Bt(jt(e)),
                            I = "day" === e.type,
                            L = "month" === e.type,
                            H = "year" === e.type,
                            O = I && r < 2,
                            Y = e.navService,
                            P = e.dateFormat.search(/m/i),
                            F = e.dateFormat.search(/y/i) < P,
                            z = e.dateFormat.search(/d/i) < P,
                            V = void 0,
                            R = void 0,
                            A = void 0,
                            W = void 0;
                        if (r > 1 || H || L) (A = V = Y.firstDay), (W = R = Y.lastDay);
                        else (A = $t(Ft(i, e), d - c + (d < c ? 7 : 0))), I && (i < A && (A = $t(A, -7)), i >= $t(A, 7) && (A = $t(A, 7))), (W = $t(A, h - d + 1 + (h < d ? 7 : 0))), (V = I ? Ht(i) : A), (R = I ? $t(V, 1) : W);
                        if (
                            (s && "week" === p && (H || L) && ((V = Y.viewStart), (R = Y.viewEnd)),
                            e.selected !== n.selected && I && r < 2 && (b = !0),
                            (this._isMulti = r > 1 || H),
                            (this._isDailyResolution = f),
                            (this._hasResY = g),
                            (this._firstDayTz = jt(e, V.getFullYear(), V.getMonth(), V.getDate())),
                            (this._lastDayTz = jt(e, R.getFullYear(), R.getMonth(), R.getDate())),
                            (this._selectedDay = +Ht(i)),
                            (this._setRowHeight = e.eventList || "equal" !== e.rowHeight),
                            (this._shouldAnimateScroll = n.selected !== ie && e.selected !== n.selected && !this._viewChanged),
                            (this._showTimeIndicator = !e.eventList && (e.currentTimeIndicator === ie ? !s || (f && l < 1440) : e.currentTimeIndicator) && (I && r < 2 ? zt(N, i) : V <= N && R >= N)),
                            b || +V != +this._firstDay || +R != +this._lastDay)
                        ) {
                            (this._firstDay = V), (this._lastDay = R), (this._colIndexMap = {}), (this._cols = []), (this._dayIndexMap = {}), (this._days = []), (this._headerDays = []);
                            var U = 0,
                                B = -1,
                                j = 0,
                                K = 0,
                                X = -1,
                                J = "",
                                q = -1,
                                G = -1,
                                Z = "",
                                Q = -1,
                                $ = -1,
                                ee = "",
                                te = V,
                                ae = R,
                                ne = 0,
                                se = ie,
                                re = 0;
                            !s && O && ((te = A), (ae = W));
                            for (E = Ht(te); E < Ht(ae); E.setDate(E.getDate() + 1)) {
                                var oe = Lt(E),
                                    le = E.getDay();
                                if (((this._dayIndexMap[oe] = U), ta(le, d, h))) {
                                    var de = void 0,
                                        he = "",
                                        ue = "",
                                        me = f;
                                    if (s && !g) {
                                        re = e.getWeekNumber($t(E, (7 - c + 1) % 7));
                                        var _e = e.getDay(E),
                                            pe = e.getMonth(E),
                                            ve = e.getYear(E),
                                            fe = e.monthNames[pe];
                                        if ((X !== ve && ((X = ve), "year" === p && ((me = !0), (J = "" + X))), q !== pe)) {
                                            if ("month" === p) (J = H && r < 2 ? fe : F ? ve + " " + fe : fe + " " + ve), (me = !0);
                                            else if ("quarter" === p && pe % 3 == 0) {
                                                var ge = pe / 3 + 1,
                                                    be = e.quarterText.replace("{count}", "" + ge);
                                                (J = H && r < 2 ? be : F ? ve + " " + be : be + " " + ve), (me = !0);
                                            } else f && (he = Z = F ? ve + " " + fe : fe + " " + ve);
                                            (G = U), (q = pe), (K = e.getMaxDayOfMonth(X, q));
                                        }
                                        if ((Q !== re && (($ = U), (Q = re), (ue = ee = e.weekText.replace(/{count}/, Q)), U > 0 && (this._days[U - 1].lastOfWeek = !0)), (le === d || !U) && "week" === p)) {
                                            var xe = z ? "D MMM" : "MMM D";
                                            (se = $t(E, h - d + (h < d ? 7 : 0))), (J = qt(xe, E, e) + " - " + qt(xe, se, e)), (me = !0);
                                        }
                                        !(de = _e === K || (le === h && (d - h - 1 + 7) % 7 >= K - _e)) || ("month" !== p && "quarter" !== p) || (j += 31 - K);
                                    }
                                    var De = {
                                        columnTitle: J,
                                        date: new Date(E),
                                        dateIndex: U,
                                        dateKey: oe,
                                        dateText: qt(g ? (L && !this._isMulti ? "D DDD" : u ? e.dateFormatLong : e.dateFormat) : L || this._isMulti ? "D DDD" : e.dateFormatLong, E, e),
                                        day: e.getDay(E),
                                        dayDiff: j,
                                        endDate: se,
                                        eventMap: { all: [] },
                                        label: qt("DDDD, MMMM D, YYYY", E, e),
                                        lastOfMonth: de,
                                        monthIndex: G,
                                        monthText: Z,
                                        monthTitle: he,
                                        timestamp: +Ht(E),
                                        weekIndex: $,
                                        weekNr: re,
                                        weekText: ee,
                                        weekTitle: ue,
                                    };
                                    if (
                                        (me && ((De.isActive = E <= N && N < ae), ne && (this._cols[B].isActive = ne <= +N && N < E), (ne = +E), this._cols.push(De), B++),
                                        O && this._headerDays.push(De),
                                        (O && this._selectedDay !== +E) || this._days.push(De),
                                        de && ("month" === p || "quarter" === p))
                                    )
                                        for (var Se = K; Se < 31; Se++) this._days.push(De), U++;
                                    U++;
                                }
                                this._colIndexMap[oe] = B < 0 ? 0 : B;
                            }
                            (this._colsNr = g ? 1 : B + 1), (this._daysNr = g || O ? 1 : U);
                        }
                    }
                    (this._groupByResource = ("date" !== e.groupBy && !("day" === e.type && r < 2)) || this._isSingleResource),
                        (this._stepCell = l * gt),
                        (this._stepLabel = o * gt),
                        (this._dayNames = t.dayNameWidth > 49 ? e.dayNamesShort : e.dayNamesMin),
                        (this._displayTime = o < 1440 && f),
                        (this._eventHeight = t.eventHeight || (e.eventList ? 24 : 46)),
                        (this._showCursorTime = this._displayTime && !!(e.dragToCreate || e.dragToMove || e.dragToResize)),
                        "auto" !== e.maxEventStack && (this._maxEventStack = e.maxEventStack || "all"),
                        (e.colorsMap !== n.colorsMap || b) && (this._colors = this._getColors(e.colorsMap)),
                        (e.eventMap !== n.eventMap || b || !this._events || this._reloadEvents) && ((this._eventMap = {}), (this._eventRows = {}), (this._events = this._getEvents(e.eventMap)), (this._reloadEvents = !1)),
                        (e.invalidsMap !== n.invalidsMap || b) && (this._invalids = this._getInvalids(e.invalidsMap));
                    var we = s && e.eventMap !== n.eventMap;
                    if (
                        ((e.height !== n.height || e.width !== n.width || we || b) && (this._shouldCheckSize = v && !!e.height && !!e.width),
                        e.scroll !== n.scroll && (this._shouldScroll = !0),
                        e.height !== ie && ((this._hasSideSticky = Ta && !e.rtl), (this._hasSticky = Ta)),
                        s)
                    ) {
                        var ke = this._cols,
                            Me = this._colsNr,
                            Ee = [],
                            Ne = this._daysBatchNr === ie ? ce(Ce(this._stepCell / (this._time / 30)), 1, 30) : this._daysBatchNr,
                            Ie = this._dayIndexMap[Lt(i)] || 0,
                            Le = t.batchIndexX !== ie ? t.batchIndexX : Te(Ie / Ne),
                            He = Math.min(Le * Ne, Me - 1),
                            Oe = _ ? 0 : Math.max(0, He - Ce((3 * Ne) / 2)),
                            Ye = _ ? Me : Math.min(Oe + 3 * Ne, Me),
                            Pe = ke[Oe].date,
                            Fe = Ye < Me ? ke[Ye].date : this._lastDay,
                            ze = {};
                        for (U = Oe; U < Ye; U++) (ze[ke[U].dateKey] = !0), Ee.push(ke[U]);
                        (this._batchStart = jt(e, Pe.getFullYear(), Pe.getMonth(), Pe.getDate())),
                            (this._batchEnd = jt(e, Fe.getFullYear(), Fe.getMonth(), Fe.getDate())),
                            (this._daysBatch = Ee),
                            (this._daysBatchNr = Ne),
                            (this._placeholderSizeX = _ ? 0 : t.dayWidth * Te(Math.max(0, He - (3 * Ne) / 2)) || 0),
                            (this._rowHeights = {}),
                            (this._dragCol = ""),
                            (this._dragRow = ""),
                            (this._fixedResources = []),
                            (this._fixedResourceTops = {}),
                            (this._fixedHeight = t.headerHeight || 0);
                        var Ve = (t.scrollContHeight || 0) - (t.headerHeight || 0) - (t.footerHeight || 0),
                            Re = t.rowHeight || 52,
                            Ae = t.parentRowHeight || 52,
                            We = t.gutterHeight !== ie ? t.gutterHeight : 16,
                            Ue = t.batchIndexY || 0,
                            Be = this._visibleResources,
                            je = g ? this._days : [{}],
                            Ke = Be.length * je.length,
                            Xe = [],
                            Je = [],
                            qe = {},
                            Ge = {},
                            Ze = {},
                            Qe = [],
                            $e = 0,
                            et = 0;
                        t.hasScrollY && (this._resourceTops = {}),
                            je.forEach(function (e, n) {
                                Be.forEach(function (s, i) {
                                    var r = (g ? e.dateKey + "-" : "") + s.id;
                                    if (((Ze[r] = s), Ve)) {
                                        var o = s.children ? Ae : Re,
                                            l = a._eventRows["more-" + r] ? 24 : 0,
                                            c = a._setRowHeight ? (!1 === s.eventCreation ? o : Math.max((a._eventRows[r] || 1) * a._eventHeight + We + l, o)) : o;
                                        (a._rowHeights[r] = a._setRowHeight ? c + "px" : ie),
                                            !g && s.fixed && ((a._fixedResourceTops[r] = a._fixedHeight), (a._fixedHeight += c), a._fixedResources.push({ height: c, index: i, key: r, resource: s })),
                                            t.hasScrollY && (a._resourceTops[r] = $e),
                                            et || Qe.push({ startIndex: n * Be.length + i, top: $e }),
                                            ($e += c),
                                            (et += c) > Ve && (et = 0);
                                    }
                                    Xe.push({ dayIndex: n, key: r, resource: s });
                                });
                            });
                        var tt = Qe[Ue - 1],
                            at = Qe[Ue + 2],
                            nt = tt ? tt.startIndex : 0,
                            st = at ? at.startIndex : $e ? Ke : 30;
                        (_ || ($e && $e <= Ve)) && ((nt = 0), (st = Ke));
                        var it = [],
                            rt = -1;
                        for (U = nt; U < st; U++) {
                            var ot = Xe[U];
                            if (ot) {
                                var lt = ot.dayIndex;
                                rt !== lt && ((it = []), Je.push({ day: g ? this._days[lt] : ie, rows: it }), (rt = lt), (qe[lt] = Je[Je.length - 1])), (Ge[ot.key] = !0), it.push(ot.resource);
                            }
                        }
                        for (var ct = 0, dt = 0, ht = this._fixedResources; dt < ht.length; dt++) {
                            var ut = ht[dt];
                            Ge[ut.key] || (it.unshift(ut.resource), (Ge[ut.key] = !0), (ct += ut.height));
                        }
                        if (t.dragData && t.dragData.originResource !== ie) {
                            var mt = t.dragData.originResource,
                                _t = ((oe = Lt(new Date(t.dragData.originDate))), (g ? oe + "-" : "") + mt),
                                pt = g ? this._dayIndexMap[oe] : 0,
                                vt = g ? this._colIndexMap[oe] : 0,
                                ft = ke[vt].dateKey;
                            if (!Ge[_t]) {
                                var yt = qe[pt];
                                yt || ((yt = { day: g ? this._days[pt] : ie, hidden: !0, rows: [] }), Je.push(yt)), yt.rows.push(Ze[_t]), (this._dragRow = _t);
                            }
                            g || ze[ft] || ((this._dragCol = ft), Ee.push(ke[vt]));
                        }
                        (this._gridHeight = $e),
                            (this._virtualPagesY = Qe),
                            (this._colClass = u || !g ? "mbsc-timeline-resource-col" : "mbsc-timeline-date-col"),
                            (this._hasRows = this._hasResources || g),
                            (this._rows = Xe),
                            (this._rowBatch = Je),
                            (this._placeholderSizeY = tt && !_ ? tt.top - ct : 0);
                    }
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        a,
                        n = this;
                    (this._unlisten = Ji(this._el, {
                        onDoubleClick: function (e) {
                            var t = n.s;
                            a && t.clickToCreate && "single" !== t.clickToCreate && ((e.click = !0), n._onEventDragStart(e) && n._onEventDragEnd(e));
                        },
                        onEnd: function (a) {
                            !e && t && "single" === n.s.clickToCreate && ((a.click = !0), n._onEventDragStart(a) && (e = !0)), e && (a.domEvent.preventDefault(), n._onEventDragEnd(a)), clearTimeout(n._touchTimer), (e = !1), (t = !1);
                        },
                        onMove: function (a) {
                            var s = n.s;
                            e && s.dragToCreate
                                ? (a.domEvent.preventDefault(), n._onEventDragMove(a))
                                : t && s.dragToCreate && (Math.abs(a.deltaX) > 7 || Math.abs(a.deltaY) > 7)
                                ? n._onEventDragStart(a)
                                    ? (e = !0)
                                    : (t = !1)
                                : clearTimeout(n._touchTimer);
                        },
                        onStart: function (s) {
                            var i = n.s;
                            if (((s.create = !0), (s.click = !1), (n._isTouch = s.isTouch), !e && (i.dragToCreate || i.clickToCreate))) {
                                var r = s.domEvent.target && s.domEvent.target.classList;
                                (a = r && (r.contains("mbsc-schedule-item") || r.contains("mbsc-schedule-all-day-item") || r.contains("mbsc-timeline-column"))) &&
                                    (s.isTouch && i.dragToCreate
                                        ? (n._touchTimer = setTimeout(function () {
                                              n._onEventDragStart(s) && (n._onEventDragModeOn(s), (e = !0));
                                          }, 350))
                                        : (t = !s.isTouch));
                            }
                        },
                    })),
                        (this._unsubscribe = al(this._onExternalDrag));
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s,
                        a = this.state;
                    this._scrollAfterResize && (this._onScroll(), (this._scrollAfterResize = !1)),
                        this._shouldCheckSize &&
                            Ee(this, function () {
                                var n,
                                    s,
                                    i,
                                    r,
                                    o,
                                    l,
                                    c,
                                    d,
                                    h = e._resCont,
                                    u = e._headerCont,
                                    m = e._footerCont,
                                    _ = e._sidebarCont,
                                    p = e._stickyFooter,
                                    v = u.offsetHeight,
                                    f = h ? h.offsetWidth : 0,
                                    g = _ ? _.offsetWidth : 0,
                                    y = m ? m.offsetHeight : 0,
                                    b = e._scrollCont,
                                    x = b.offsetWidth,
                                    D = b.offsetHeight,
                                    T = b.clientWidth,
                                    S = b.clientHeight,
                                    C = T - f - g,
                                    w = S - v - y,
                                    k = e._gridHeight,
                                    M = x - T,
                                    E = D - S,
                                    N = b.scrollHeight > S,
                                    I = b.scrollWidth > T,
                                    L = a.eventHeight;
                                if ((e._calcGridSizes(), e._isTimeline)) {
                                    var H = b.querySelector(".mbsc-timeline-day"),
                                        O = b.querySelector(".mbsc-timeline-empty-row"),
                                        Y = b.querySelector(".mbsc-timeline-empty-parent"),
                                        P = b.querySelector(".mbsc-timeline-row-gutter"),
                                        F = e._colsNr;
                                    if (
                                        ((i = H ? H.offsetWidth : 64),
                                        (l = O ? O.offsetHeight : 52),
                                        (c = Y ? Y.offsetHeight : 52),
                                        (d = P ? P.offsetHeight : 16),
                                        i * F < C && ((I = !1), (E = 0)),
                                        k && k < w && ((N = !1), (M = 0)),
                                        (i = I ? i : Te(C / F)),
                                        (o = I ? i * F : C),
                                        (s = (e._stepCell * i) / e._time),
                                        (e._gridWidth = o),
                                        (e._daysBatchNr = Math.max(1, Math.ceil(C / (i || 1)))),
                                        e._hasSticky || ((u.style[t.rtl ? "left" : "right"] = M + "px"), m && ((m.style[t.rtl ? "left" : "right"] = M + "px"), (m.style.bottom = E + "px"))),
                                        e._hasSideSticky || (h && (h.style.bottom = E + "px"), _ && (_.style[t.rtl ? "left" : "right"] = M + "px")),
                                        p && (p.style.bottom = E + "px"),
                                        e._setRowHeight)
                                    ) {
                                        var z = b.querySelector(".mbsc-schedule-event");
                                        L = z ? z.clientHeight : L || (t.eventList ? 24 : 46);
                                    }
                                    if (!N && a.rowHeight) {
                                        e._resourceTops = {};
                                        var V = e._gridCont,
                                            R = V.getBoundingClientRect();
                                        V.querySelectorAll(".mbsc-timeline-row").forEach(function (t, a) {
                                            e._resourceTops[e._rows[a].key] = t.getBoundingClientRect().top - R.top;
                                        });
                                    }
                                } else {
                                    var A = e._el.querySelector(".mbsc-schedule-column-inner"),
                                        W = e._el.querySelector(".mbsc-schedule-header-item");
                                    if (((n = A ? (e._stepCell * A.offsetHeight) / e._time : 0), (r = W ? W.offsetWidth : 0), "auto" === t.maxEventStack)) {
                                        var U = Ce(A.offsetWidth / (t.minEventWidth || 50));
                                        (e._reloadEvents = e._maxEventStack !== U), (e._maxEventStack = U);
                                    }
                                }
                                b.scrollTop > k - w ? (b.scrollTop = k - w) : e._onScroll(),
                                    (e._calcConnections = !!t.connections && (e._isParentClick || e._calcConnections || !N)),
                                    (e._shouldCheckSize = l !== a.rowHeight || L !== a.eventHeight),
                                    (e._scrollAfterResize = t.virtualScroll && !e._shouldCheckSize),
                                    (e._isCursorTimeVisible = !1),
                                    e.setState({
                                        cellHeight: n,
                                        cellWidth: s,
                                        dayNameWidth: r,
                                        dayWidth: i,
                                        eventHeight: L,
                                        footerHeight: y,
                                        gridContWidth: C,
                                        gridWidth: o,
                                        gutterHeight: d,
                                        hasScrollX: I,
                                        hasScrollY: N,
                                        headerHeight: v,
                                        parentRowHeight: c,
                                        rowHeight: l,
                                        scrollContHeight: I ? S : D,
                                        update: e._calcConnections || e._reloadEvents ? (a.update || 0) + 1 : a.update,
                                    });
                            }),
                        !this._shouldScroll ||
                            (!a.dayWidth && this._isTimeline) ||
                            (setTimeout(function () {
                                e._scrollToTime(e._shouldAnimateScroll), (e._shouldAnimateScroll = !1);
                            }),
                            (this._shouldScroll = !1)),
                        this._viewChanged &&
                            setTimeout(function () {
                                e._viewChanged = !1;
                            }, 10);
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten(), this._unsubscribe && nl(this._unsubscribe);
                }),
                (t.prototype._calcGridSizes = function () {
                    var e = this.s,
                        t = this._resources,
                        a = this._isTimeline,
                        n = this._daysNr * (a ? 1 : t.length),
                        s = this._gridCont,
                        i = this._scrollCont,
                        r = !a && this._el.querySelector(".mbsc-schedule-all-day-wrapper"),
                        o = r && r.getBoundingClientRect(),
                        l = s.getBoundingClientRect(),
                        c = i.getBoundingClientRect(),
                        d = a ? l.width : s.scrollWidth,
                        h = this._resCont ? this._resCont.offsetWidth : 0;
                    (this._gridLeft = e.rtl ? l.right - d : l.left),
                        (this._gridRight = e.rtl ? l.right : l.left + d),
                        (this._gridTop = l.top),
                        (this._gridContTop = c.top),
                        (this._gridContBottom = c.bottom),
                        (this._gridContLeft = c.left + (e.rtl ? 0 : h)),
                        (this._gridContRight = c.right - (e.rtl ? h : 0)),
                        (this._allDayTop = o ? o.top : this._gridContTop),
                        (this._colWidth = d / (e.eventList ? this._colsNr : n)),
                        (this._colHeight = l.height);
                }),
                (t.prototype._getDragDates = function (e, t, a) {
                    var n = this.s,
                        s = {},
                        i = new Map(),
                        r = e.allDay ? this._firstDay : this._firstDayTz,
                        o = e.startDate,
                        l = e.endDate;
                    for (o = (o = Ht(o)) < r ? r : o, l = It(n, e.allDay || n.eventList, o, l); o <= l; ) {
                        var d = c({}, e),
                            h = Lt(o),
                            u = ta(o.getDay(), n.startDay, n.endDay) && this._getEventPos(e, o, h, i);
                        if (u) {
                            var m = d.resource;
                            this._isTimeline && this._setRowHeight && -1 !== (he(m) ? m : [m]).indexOf(this._tempResource) && (u.position.top = d.position.top);
                            var _ = !this._isTimeline || this._hasSlots || this._hasResY ? h : "all";
                            (d.date = +Ht(o, !0)), (d.cssClass = u.cssClass), (d.start = u.start), (d.end = u.end), (d.position = u.position), (s[t + "__" + (this._isTimeline ? a + "__" : "") + _] = d);
                        }
                        o = $t(o, 1);
                    }
                    return s;
                }),
                (t.prototype._getGridTime = function (e, t, a, n, s) {
                    var i = this._hasResY ? 0 : n,
                        r = Se(this._isTimeline ? Ce((this._time * (t - i * this._colWidth)) / this._colWidth) : Ce((this._time * (a - 8)) / (this._colHeight - 16)), s * gt),
                        o = new Date(+ft + this._startTime + r);
                    return jt(this.s, e.getFullYear(), e.getMonth(), e.getDate(), o.getHours(), o.getMinutes());
                }),
                (t.prototype._scrollToTime = function (e) {
                    var t = this,
                        a = this._scrollCont,
                        n = this._gridCont,
                        s = this._isTimeline;
                    if (a) {
                        var i = this.s,
                            r = this._hasResY,
                            o = i.navigateToEvent,
                            l = o && o.start ? aa(new Date(+Kt(o.start, i) - this._stepCell), this._stepCell / gt) : new Date(i.selected),
                            c = this._colIndexMap[Lt(l)];
                        c === ie || !s || r || ("hour" === i.resolution && this._stepCell !== bt && !i.eventList) ? l.setHours(i.eventList ? 0 : l.getHours(), 0) : (l = this._cols[c].date);
                        var d = wl(l, this._startTime, this._time * (s ? this._daysNr : 1)),
                            h = r ? 0 : Pt(this._firstDay, l, i.startDay, i.endDay),
                            u = ((s ? n.offsetWidth : n.scrollWidth) * ((100 * h) / this._daysNr + (s ? d : 0))) / 100 + 1,
                            m = void 0;
                        if (o || r) {
                            var _ = this._visibleResources,
                                p = o ? o.resource : _[0].id,
                                v = he(p) ? p[0] : p;
                            if (v)
                                if (s) {
                                    var f = (r ? Lt(l) + "-" : "") + v;
                                    m = this._resourceTops && this._resourceTops[f];
                                } else {
                                    var g = this._colWidth,
                                        y =
                                            Ie(_, function (e) {
                                                return e.id === v;
                                            }) || 0;
                                    u = this._groupByResource && !this._isSingleResource ? this._daysNr * g * y + g * h : _.length * h * g + y * g;
                                }
                        }
                        if (!s) {
                            var b = a.querySelector(".mbsc-schedule-column-inner");
                            (m = b ? (b.offsetHeight * d) / 100 : 0), !this._groupByResource || this._isSingleResource || o || (u = ie);
                        }
                        this._isScrolling++,
                            Oa(a, u, m, e, i.rtl, function () {
                                setTimeout(function () {
                                    t._isScrolling--;
                                }, 150);
                            });
                    }
                }),
                t
            );
        })(Xn),
        Fl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onScroll = function () {
                        var e = t._scrollCont;
                        if (e) {
                            var a = e.scrollTop,
                                n = "translateX(" + -e.scrollLeft + "px)",
                                s = t._timeCont,
                                i = t._allDayCont,
                                r = t._headerCont,
                                o = (ba ? ba + "T" : "t") + "ransform";
                            i && (i.style[o] = n), s && (s.style.marginTop = -a + "px"), r && (r.style[o] = n), 0 === a ? t.setState({ showShadow: !1 }) : t.state.showShadow || t.setState({ showShadow: !0 }), t._onMouseMove();
                        }
                    }),
                    (t._setCont = function (e) {
                        t._scrollCont = e;
                    }),
                    (t._setTimeCont = function (e) {
                        t._timeCont = e;
                    }),
                    (t._setAllDayCont = function (e) {
                        t._allDayCont = e;
                    }),
                    (t._setGridCont = function (e) {
                        t._gridCont = e;
                    }),
                    (t._setHeaderCont = function (e) {
                        t._headerCont = e;
                    }),
                    (t._setCursorTimeCont = function (e) {
                        t._cursorTimeCont = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._render = function (t, a) {
                    e.prototype._render.call(this, t, a);
                    var n = this._prevS,
                        s = t.timezones,
                        i = this._stepCell / gt,
                        r = Ce(this._startTime / gt) % i,
                        o = (Ce(this._endTime / gt) % i) + 1;
                    if (s !== n.timezones && ((this._timeWidth = s ? { width: 4.25 * s.length + "em" } : ie), (this._timezones = ie), s)) {
                        for (var l = [], c = 0, d = s; c < d.length; c++) {
                            var h = d[c],
                                u = void 0;
                            if (_e(h)) {
                                var m = jt(t, 1970, 0, 1);
                                xt(m) && m.setTimezone(h);
                                var _ = (m.getTimezoneOffset() / 60) * -1;
                                u = { label: "UTC" + (_ > 0 ? "+" : "") + _, timezone: h };
                            } else u = h;
                            l.push(u);
                        }
                        this._timezones = l;
                    }
                    (this._largeDayNames = a.dayNameWidth > 99),
                        (this._startCellStyle = r % i != 0 ? { height: (a.cellHeight || 50) * (((i - r) % i) / i) + "px" } : ie),
                        (this._endCellStyle = o % i != 0 ? { height: ((a.cellHeight || 50) * (o % i)) / i + "px" } : ie);
                }),
                t
            );
        })(Pl);
    var zl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, a) {
                        var n,
                            s = a._colors,
                            i = t.dragData,
                            r = i && i.draggedEvent && i.draggedEvent.id,
                            o = a._events,
                            l = a._invalids,
                            d = a._hb,
                            h = a._rtl,
                            u = a._times,
                            m = a._startTime,
                            _ = a._endTime,
                            p = a._startCellStyle,
                            v = a._endCellStyle,
                            f = a._stepLabel,
                            g = a._theme,
                            y = a._isSingleResource,
                            b = e.eventMap || {},
                            x = "schedule",
                            D = " mbsc-flex-1-0 mbsc-schedule-resource-group" + g + h,
                            T = a._timezones,
                            S = a._groupByResource,
                            C = a._days,
                            w = a._resources,
                            k = (((n = {}).onMouseMove = a._onMouseMove), (n.onMouseLeave = a._onMouseLeave), n),
                            M = { dayNames: a._dayNames, largeNames: a._largeDayNames, onClick: e.onWeekDayClick, renderDay: e.renderDay, renderDayContent: e.renderDayContent, rtl: e.rtl, theme: e.theme },
                            E = function (t) {
                                var n,
                                    s = t.name;
                                return (
                                    e.renderResource && _e((s = e.renderResource(t))) && ((n = a._safeHtml(s)), (a._shouldEnhance = !0)),
                                    s &&
                                        qa(
                                            "div",
                                            { key: t.id, className: "mbsc-schedule-resource" + g + h + d + (!S || ("day" === e.type && 1 === e.size) ? " mbsc-flex-1-0 mbsc-schedule-col-width" : "") },
                                            qa("div", { dangerouslySetInnerHTML: n, className: "mbsc-schedule-resource-title" }, s)
                                        )
                                );
                            },
                            N = function (t, n, s, o) {
                                var l = a._resourcesMap[s].eventResize,
                                    d = s + "__" + n,
                                    h = ws(i && i.draggedEvent && i.draggedEvent.original.resize, e.dragToResize, l),
                                    u = {
                                        displayTimezone: e.displayTimezone,
                                        drag: e.dragToMove || e.externalDrag,
                                        endDay: e.endDay,
                                        exclusiveEndDates: e.exclusiveEndDates,
                                        gridEndTime: _,
                                        gridStartTime: m,
                                        lastDay: +a._lastDay,
                                        render: e.renderEvent,
                                        renderContent: e.renderEventContent,
                                        resource: s,
                                        rtl: e.rtl,
                                        singleDay: !S,
                                        slot: bl,
                                        startDay: e.startDay,
                                        theme: e.theme,
                                        timezonePlugin: e.timezonePlugin,
                                    };
                                return qa(
                                    Za,
                                    null,
                                    t.map(function (t) {
                                        return t.showText
                                            ? t.position &&
                                                  qa(
                                                      Il,
                                                      c({}, u, {
                                                          event: t,
                                                          key: t.uid,
                                                          inactive: r === t.id,
                                                          resize: ws(t.original.resize, e.dragToResize, l),
                                                          selected: !(!e.selectedEventsMap[t.uid] && !e.selectedEventsMap[t.id]),
                                                          onClick: a._onEventClick,
                                                          onDoubleClick: e.onEventDoubleClick,
                                                          onRightClick: e.onEventRightClick,
                                                          onDelete: e.onEventDelete,
                                                          onHoverIn: e.onEventHoverIn,
                                                          onHoverOut: e.onEventHoverOut,
                                                          onDragStart: a._onEventDragStart,
                                                          onDragMove: a._onEventDragMove,
                                                          onDragEnd: a._onEventDragEnd,
                                                          onDragModeOn: a._onEventDragModeOn,
                                                          onDragModeOff: a._onEventDragModeOff,
                                                      })
                                                  )
                                            : qa(
                                                  "div",
                                                  { key: t.uid, className: "mbsc-schedule-event mbsc-schedule-event-all-day mbsc-schedule-event-all-day-placeholder" },
                                                  qa("div", { className: "mbsc-schedule-event-all-day-inner" + g })
                                              );
                                    }),
                                    i &&
                                        i.originDates &&
                                        i.originDates[d] &&
                                        !!i.originDates[d].allDay == !!o &&
                                        qa(
                                            Il,
                                            c({}, u, {
                                                event: i.originDates[d],
                                                hidden: i && !!i.draggedDates,
                                                isDrag: !0,
                                                resize: h,
                                                onDragStart: a._onEventDragStart,
                                                onDragMove: a._onEventDragMove,
                                                onDragEnd: a._onEventDragEnd,
                                                onDragModeOff: a._onEventDragModeOff,
                                            })
                                        ),
                                    i && i.draggedDates && i.draggedDates[d] && !!i.draggedDates[d].allDay == !!o && qa(Il, c({}, u, { event: i.draggedDates[d], isDrag: !0, resize: h }))
                                );
                            },
                            I = function (e) {
                                return u.map(function (t, n) {
                                    var s = !n,
                                        i = n === u.length - 1;
                                    return qa(
                                        "div",
                                        {
                                            key: n,
                                            className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-time-wrapper" + g + h + (i ? " mbsc-schedule-time-wrapper-end" : "") + ((s && !i && p) || (i && !s && v) ? " mbsc-flex-none" : ""),
                                            style: s && !i ? p : i && !s ? v : ie,
                                        },
                                        qa("div", { className: "mbsc-flex-1-1 mbsc-schedule-time" + g + h }, s || t % f == 0 ? a._formatTime(s ? m : t, e) : ""),
                                        a._timesBetween.map(function (n, s) {
                                            var i = t + (s + 1) * f;
                                            return i > m && i < _ && qa("div", { key: s, className: "mbsc-flex-1-1 mbsc-schedule-time" + g + h }, a._formatTime(i, e));
                                        }),
                                        i && qa("div", { className: "mbsc-schedule-time mbsc-schedule-time-end" + g + h }, a._formatTime(_ + 1, e))
                                    );
                                });
                            },
                            L = function (e, t, a, n) {
                                var i = l[e][bl][t] && l[e][bl][t].allDay[0],
                                    r = s[e][bl][t] && s[e][bl][t].allDay[0],
                                    c = o[e][bl][t] && o[e][bl][t].allDay;
                                return qa(
                                    "div",
                                    { key: a + "-" + n, className: "mbsc-schedule-all-day-item mbsc-schedule-col-width mbsc-flex-1-0" + g + h + d },
                                    N(c || [], t, e, !0),
                                    i && qa("div", { className: "mbsc-schedule-invalid mbsc-schedule-invalid-all-day" + i.cssClass + g }, qa("div", { className: "mbsc-schedule-invalid-text" }, i.title)),
                                    r && qa("div", { className: "mbsc-schedule-color mbsc-schedule-color-all-day" + r.cssClass + g, style: r.position }, qa("div", { className: "mbsc-schedule-color-text" }, r.title))
                                );
                            },
                            H = function (t, a, n, i) {
                                var r = l[t][bl][a] && l[t][bl][a].data,
                                    m = s[t][bl][a] && s[t][bl][a].data,
                                    _ = o[t][bl][a],
                                    f = _ && _.data;
                                return qa(
                                    "div",
                                    { key: n + "-" + i, className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-column mbsc-schedule-col-width" + g + h + d },
                                    qa(
                                        "div",
                                        { className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-column-inner" + g + h + d },
                                        qa("div", { className: "mbsc-schedule-events" + (_ && _.hasMore ? " mbsc-schedule-events-more" : "") + h }, N(f || [], a, t)),
                                        r &&
                                            r.map(function (e, t) {
                                                return (
                                                    e.position &&
                                                    qa("div", { key: t, className: "mbsc-schedule-invalid" + e.cssClass + g, style: e.position }, qa("div", { className: "mbsc-schedule-invalid-text" }, e.allDay ? "" : e.title || ""))
                                                );
                                            }),
                                        m &&
                                            m.map(function (e, t) {
                                                return qa("div", { key: t, className: "mbsc-schedule-color" + e.cssClass + g, style: e.position }, qa("div", { className: "mbsc-schedule-color-text" }, e.title));
                                            }),
                                        u.map(function (a, n) {
                                            var s,
                                                r = Ml(i, a),
                                                o = !n,
                                                l = n === u.length - 1,
                                                h =
                                                    (((s = {}).onDoubleClick = function (a) {
                                                        return e.onCellDoubleClick({ date: r, domEvent: a, resource: t, source: x });
                                                    }),
                                                    (s.onContextMenu = function (a) {
                                                        return e.onCellRightClick({ date: r, domEvent: a, resource: t, source: x });
                                                    }),
                                                    s);
                                            return qa(
                                                "div",
                                                c(
                                                    {
                                                        key: n,
                                                        className: "mbsc-schedule-item mbsc-flex-1-0" + g + d + (l ? " mbsc-schedule-item-last" : "") + ((o && !l && p) || (l && !o && v) ? " mbsc-flex-none" : ""),
                                                        onClick: function (a) {
                                                            return e.onCellClick({ date: r, domEvent: a, resource: t, source: x });
                                                        },
                                                        style: o && !l ? p : l && !o ? v : ie,
                                                    },
                                                    h
                                                )
                                            );
                                        })
                                    )
                                );
                            };
                        return qa(
                            "div",
                            { ref: a._setEl, className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-wrapper" + g + (a._daysNr > 7 ? " mbsc-schedule-wrapper-multi" : "") },
                            qa(
                                "div",
                                { className: "mbsc-schedule-header mbsc-flex mbsc-flex-none" + g + d },
                                qa("div", { className: "mbsc-schedule-time-col mbsc-schedule-time-col-empty" + g + h + d, style: a._timeWidth }),
                                qa(
                                    "div",
                                    { className: "mbsc-flex-1-1 mbsc-schedule-header-wrapper" },
                                    qa(
                                        "div",
                                        { ref: a._setHeaderCont, className: "mbsc-flex" },
                                        "day" === e.type && 1 === e.size
                                            ? qa(
                                                  "div",
                                                  { className: D },
                                                  qa(
                                                      "div",
                                                      { className: "mbsc-flex" },
                                                      e.showDays &&
                                                          a._headerDays.map(function (e) {
                                                              var t = e.timestamp;
                                                              return qa(
                                                                  Yl,
                                                                  c({}, M, {
                                                                      key: t,
                                                                      cssClass: "mbsc-flex-1-1",
                                                                      day: e.day,
                                                                      events: b[e.dateKey],
                                                                      isToday: a._isToday(t),
                                                                      label: e.label,
                                                                      selectable: !0,
                                                                      selected: a._selectedDay === t,
                                                                      timestamp: t,
                                                                  })
                                                              );
                                                          })
                                                  ),
                                                  e.resources && qa("div", { className: "mbsc-flex" }, w.map(E))
                                              )
                                            : S
                                            ? w.map(function (t, n) {
                                                  return qa(
                                                      "div",
                                                      { key: n, className: D },
                                                      E(t),
                                                      qa(
                                                          "div",
                                                          { className: "mbsc-flex" },
                                                          e.showDays &&
                                                              C.map(function (e) {
                                                                  var n = e.timestamp;
                                                                  return qa(
                                                                      Yl,
                                                                      c({}, M, {
                                                                          key: n,
                                                                          cssClass: "mbsc-flex-1-0 mbsc-schedule-col-width",
                                                                          day: e.day,
                                                                          events: b[e.dateKey],
                                                                          isToday: y && a._isToday(n),
                                                                          label: e.label,
                                                                          resource: t.id,
                                                                          selectable: !1,
                                                                          selected: y && a._isToday(n),
                                                                          timestamp: n,
                                                                      })
                                                                  );
                                                              })
                                                      )
                                                  );
                                              })
                                            : C.map(function (t, n) {
                                                  var s = t.timestamp;
                                                  return qa(
                                                      "div",
                                                      { key: n, className: D },
                                                      e.showDays && qa(Yl, c({}, M, { key: s, day: t.day, events: b[t.dateKey], isToday: y && a._isToday(s), label: t.label, selectable: !1, selected: a._isToday(s), timestamp: s })),
                                                      e.resources && qa("div", { className: "mbsc-flex" }, w.map(E))
                                                  );
                                              })
                                    )
                                ),
                                qa("div", { className: "mbsc-schedule-fake-scroll-y" })
                            ),
                            qa(
                                "div",
                                { className: "mbsc-schedule-all-day-cont" + (t.showShadow ? " mbsc-schedule-all-day-wrapper-shadow" : "") + g },
                                T &&
                                    qa(
                                        "div",
                                        { className: "mbsc-flex mbsc-schedule-timezone-labels", style: a._timeWidth },
                                        T.map(function (e, t) {
                                            return qa("div", { key: t, className: "mbsc-flex-1-0-0 mbsc-schedule-timezone-label" + g + h }, e.label);
                                        })
                                    ),
                                e.showAllDay &&
                                    qa(
                                        "div",
                                        { className: "mbsc-schedule-all-day-wrapper mbsc-flex-none" + g + d },
                                        qa(
                                            "div",
                                            { className: "mbsc-flex mbsc-schedule-all-day" + g },
                                            qa("div", { className: "mbsc-schedule-time-col" + g + h, style: a._timeWidth }, !T && qa("div", { className: "mbsc-schedule-all-day-text" + g + h }, e.allDayText)),
                                            qa(
                                                "div",
                                                { className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-all-day-group-wrapper" },
                                                qa(
                                                    "div",
                                                    { ref: a._setAllDayCont, className: "mbsc-flex mbsc-flex-1-1" },
                                                    S
                                                        ? w.map(function (e, t) {
                                                              return qa(
                                                                  "div",
                                                                  { key: t, className: "mbsc-flex" + D },
                                                                  C.map(function (t, a) {
                                                                      return L(e.id, t.dateKey, a, t.timestamp);
                                                                  })
                                                              );
                                                          })
                                                        : C.map(function (e, t) {
                                                              return qa(
                                                                  "div",
                                                                  { key: t, className: "mbsc-flex" + D },
                                                                  w.map(function (t, a) {
                                                                      return L(t.id, e.dateKey, a, e.timestamp);
                                                                  })
                                                              );
                                                          })
                                                )
                                            )
                                        )
                                    )
                            ),
                            qa(
                                "div",
                                { className: "mbsc-flex mbsc-flex-1-1 mbsc-schedule-grid-wrapper" + g },
                                qa("div", { dangerouslySetInnerHTML: a.textParam }),
                                qa(
                                    "div",
                                    { "aria-hidden": "true", className: "mbsc-flex-col mbsc-schedule-time-col mbsc-schedule-time-cont" + g + h, style: a._timeWidth, ref: a._setTimeCont },
                                    qa(
                                        "div",
                                        { className: "mbsc-flex mbsc-schedule-time-cont-inner" },
                                        qa(
                                            "div",
                                            { className: "mbsc-flex-col mbsc-flex-1-1" },
                                            qa(
                                                "div",
                                                { className: "mbsc-flex-1-1 mbsc-schedule-time-cont-pos" + g + (T ? " mbsc-flex" : " mbsc-flex-col mbsc-schedule-time-col-last") },
                                                T
                                                    ? T.map(function (e, t) {
                                                          return qa("div", { key: t, className: "mbsc-flex-col" + g + (t === T.length - 1 ? " mbsc-schedule-time-col-last" : "") }, I(e.timezone));
                                                      })
                                                    : I(),
                                                a._showTimeIndicator &&
                                                    qa(Hl, {
                                                        amText: e.amText,
                                                        displayedTime: a._time,
                                                        displayedDays: a._daysNr,
                                                        displayTimezone: e.displayTimezone,
                                                        endDay: e.endDay,
                                                        firstDay: a._firstDayTz,
                                                        orientation: "x",
                                                        pmText: e.pmText,
                                                        rtl: e.rtl,
                                                        showDayIndicator: y && !a._isMulti && "week" === e.type,
                                                        startDay: e.startDay,
                                                        startTime: m,
                                                        theme: e.theme,
                                                        timeFormat: e.timeFormat,
                                                        timezones: T,
                                                        timezonePlugin: e.timezonePlugin,
                                                    }),
                                                a._showCursorTime && qa("div", { ref: a._setCursorTimeCont, className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-x" + g + h })
                                            ),
                                            t.hasScrollX && qa("div", { className: "mbsc-schedule-fake-scroll-x" })
                                        ),
                                        qa("div", { className: "mbsc-schedule-fake-scroll-y" })
                                    )
                                ),
                                qa(
                                    "div",
                                    { ref: a._setCont, className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-grid-scroll" + g, onScroll: a._onScroll },
                                    qa(
                                        "div",
                                        { className: "mbsc-flex mbsc-flex-1-1" },
                                        qa(
                                            "div",
                                            c({ className: "mbsc-flex mbsc-flex-1-0 mbsc-schedule-grid", ref: a._setGridCont }, k),
                                            S
                                                ? w.map(function (e, t) {
                                                      return qa(
                                                          "div",
                                                          { key: t, className: "mbsc-flex" + D },
                                                          C.map(function (t, a) {
                                                              return H(e.id, t.dateKey, a, t.timestamp);
                                                          })
                                                      );
                                                  })
                                                : C.map(function (e, t) {
                                                      return qa(
                                                          "div",
                                                          { key: t, className: "mbsc-flex" + D },
                                                          w.map(function (t, a) {
                                                              return H(t.id, e.dateKey, a, e.timestamp);
                                                          })
                                                      );
                                                  })
                                        )
                                    )
                                )
                            ),
                            i && !t.isTouchDrag && qa("div", { className: "mbsc-calendar-dragging" })
                        );
                    })(e, t, this);
                }),
                t
            );
        })(Fl),
        Vl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._isTimeline = !0),
                    (t._onScroll = function () {
                        for (
                            var e = t.s.rtl,
                                a = t.state,
                                n = t._gridWidth,
                                s = t._scrollCont,
                                i = s.scrollTop,
                                r = s.scrollLeft,
                                o = t._resCont,
                                l = t._sidebarCont,
                                c = t._footerCont,
                                d = t._headerCont,
                                h = t._stickyHeader,
                                u = t._stickyFooter,
                                m = t._days,
                                _ = t._daysNr,
                                p = t._cols.length,
                                v = e ? -1 : 1,
                                f = e ? "marginRight" : "marginLeft",
                                g = Te((r * v * (p / t._daysBatchNr)) / n),
                                y = n / _,
                                b = y ? ce(Ce((r * v) / y), 0, _ - 1) : 0,
                                x = t._virtualPagesY || [],
                                D = 0,
                                T = 0;
                            T < x.length && x[T].top - a.scrollContHeight / 2 <= i;

                        )
                            (D = T), T++;
                        if (((Ta && !e) || (o && (o.scrollTop = i), l && (l.scrollTop = i)), h && Ta)) {
                            var S = h.style;
                            (S.marginTop = i < 0 ? -i + "px" : ""), (S[f] = r * v < 0 ? -r * v + "px" : "");
                        }
                        if (u && Ta) {
                            var C = u.style;
                            (C.marginTop = i < 0 ? -i + "px" : ""), (C[f] = r * v < 0 ? -r * v + "px" : "");
                        }
                        if (n) {
                            if ((d || c) && t._isDailyResolution) {
                                var w = function (e, t) {
                                    if (e && y) {
                                        var a = e.offsetWidth,
                                            n = e.style,
                                            s = ce(Ce((r * v + a) / y), 0, _ - 1);
                                        m[b][t + "Index"] !== m[s][t + "Index"] ? (n[f] = -(r * v + a - m[s][t + "Index"] * y + 1) + "px") : (n[f] = "");
                                    }
                                };
                                w(t._stickyDate, "date"), w(t._stickyMonth, "month"), w(t._stickyWeek, "week"), Ta || (c && (c.scrollLeft = r), d && (d.scrollLeft = r));
                            }
                            (g !== a.batchIndexX || D !== a.batchIndexY || ((t._stickyDate || t._stickyMonth || t._stickyWeek) && b !== a.dayIndex)) && t.setState({ batchIndexX: g, batchIndexY: D, dayIndex: b }),
                                clearTimeout(t._scrollDebounce),
                                (t._scrollDebounce = setTimeout(function () {
                                    if (!t._isScrolling && !t._viewChanged && !t._hasResY) {
                                        var e = m[b].date,
                                            a = (t._time * (r * v - b * y)) / y;
                                        t._hook("onActiveChange", { date: new Date(+e + t._startTime + a), scroll: !0 });
                                    }
                                }, 100)),
                                t._onMouseMove();
                        }
                    }),
                    (t._setStickyHeader = function (e) {
                        t._stickyHeader = e;
                    }),
                    (t._setStickyFooter = function (e) {
                        t._stickyFooter = e;
                    }),
                    (t._setStickyDay = function (e) {
                        t._stickyDate = e;
                    }),
                    (t._setStickyMonth = function (e) {
                        t._stickyMonth = e;
                    }),
                    (t._setStickyWeek = function (e) {
                        t._stickyWeek = e;
                    }),
                    (t._setCont = function (e) {
                        t._scrollCont = e;
                    }),
                    (t._setResCont = function (e) {
                        t._resCont = e;
                    }),
                    (t._setSidebarCont = function (e) {
                        t._sidebarCont = e;
                    }),
                    (t._setGridCont = function (e) {
                        t._gridCont = e;
                    }),
                    (t._setHeaderCont = function (e) {
                        t._headerCont = e;
                    }),
                    (t._setFooterCont = function (e) {
                        t._footerCont = e;
                    }),
                    (t._setCursorTimeCont = function (e) {
                        t._cursorTimeCont = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._onParentClick = function (e, t) {
                    (t.collapsed = !t.collapsed),
                        this._hook(t.collapsed ? "onResourceCollapse" : "onResourceExpand", { domEvent: e, resource: t.id }),
                        (this._visibleResources = this._flattenResources(this._resourcesCopy, [], 0)),
                        (this._shouldCheckSize = !0),
                        (this._isParentClick = !0),
                        this.forceUpdate();
                }),
                (t.prototype._render = function (t, a) {
                    e.prototype._render.call(this, t, a), clearTimeout(this._scrollDebounce);
                    var n = this._prevS,
                        s = this._eventMap,
                        i = this._resourceTops,
                        r = this._stepCell / gt,
                        o = Ce(this._startTime / gt) % r,
                        l = (Ce(this._endTime / gt) % r) + 1;
                    if (
                        ((this._stickyDay = this._days[a.dayIndex || 0] || this._days[0]),
                        (this._startCellStyle = o % r != 0 ? { width: (a.cellWidth || 64) * (((r - o) % r) / r) + "px" } : ie),
                        (this._endCellStyle = l % r != 0 ? { width: ((a.cellWidth || 64) * (l % r)) / r + "px" } : ie),
                        (t.connections === n.connections && t.eventMap === n.eventMap && t.theme === n.theme && t.rtl === n.rtl) || (this._calcConnections = !0),
                        this._hasSlots && (this._connections = ie),
                        this._calcConnections && !this._hasSlots && !this._shouldCheckSize && i)
                    ) {
                        for (
                            var c = [],
                                d = this._eventHeight,
                                h = this._gridWidth,
                                u = a.hasScrollY ? this._gridHeight : a.scrollContHeight - a.headerHeight,
                                m = 1500 / h,
                                _ = !0 === t.rtl,
                                p = _ ? -1 : 1,
                                v = (750 / h) * p,
                                f = (400 / u) * p,
                                g = (100 * d) / u,
                                y = 0,
                                b = t.connections || [];
                            y < b.length;
                            y++
                        ) {
                            var x = b[y],
                                D = s[x.from],
                                T = s[x.to],
                                S = x.arrow,
                                C = x.color,
                                w = x.cssClass || "",
                                k = x.from + "__" + x.to,
                                M = x.type || "fs";
                            if (D && T) {
                                var E = D.position,
                                    N = T.position,
                                    I = E.width !== ie,
                                    L = N.width !== ie,
                                    H = D.resource,
                                    O = T.resource;
                                if ((I || L) && i[H] >= 0 && i[O] >= 0) {
                                    var Y = "fs" === M || "ff" === M,
                                        P = "fs" === M || "ss" === M,
                                        F = Y ? D.endDate : D.startDate,
                                        z = P ? T.startDate : T.endDate,
                                        V = z < F,
                                        R = V ? z : F,
                                        A = V ? F : z,
                                        W = E.top || 0,
                                        U = N.top || 0,
                                        B = _ ? "right" : "left",
                                        j = I ? +E[B].replace("%", "") : V ? 100 : 0,
                                        K = L ? +N[B].replace("%", "") : V ? 0 : 100,
                                        X = I ? +E.width.replace("%", "") : 0,
                                        J = I ? +N.width.replace("%", "") : 0,
                                        q = i[O] - i[H],
                                        G = !q && (("fs" === M && V) || ("sf" === M && !V) || "ff" === M || "ss" === M) && U === W,
                                        Z = Y && P ? K - j - X - 2 * m : Y && !P ? K - j + (J - X) : !Y && P ? K - j : K - j + J + 2 * m,
                                        Q = q < 0 || (!q && U < W) ? -1 : 1,
                                        $ = (100 * (q - W * d + U * d + (G ? d : 0))) / u,
                                        ee = ("fs" === M && Z < 0) || (("ff" === M || "ss" === M) && G) || "sf" === M,
                                        te = ("ss" === M && V && !ee) || ("ff" === M && !V && !ee) || ("sf" === M && Z < 0),
                                        ae = (_ ? 100 - j : j) + (Y ? X * p : 0),
                                        ne = (100 * (i[H] + W * d + 3 + d / 2)) / u;
                                    if (I && ("from" === S || "bidirectional" === S)) {
                                        var se = Y ? v : -1 * v;
                                        c.push({
                                            color: C,
                                            cssClass: "mbsc-connection-arrow " + w,
                                            endDate: A,
                                            fill: C,
                                            id: k + "__start",
                                            pathD: "M " + ae + ", " + ne + " L " + (ae + se) + " " + (ne - f) + " L " + (ae + se) + " " + (ne + f) + " Z",
                                            startDate: R,
                                        });
                                    }
                                    var re = "M " + ae + ", " + ne;
                                    if (
                                        ((ae += Y ? m * p : -m * p),
                                        te && (ae += Z * p),
                                        $ && ((re += " H " + ae), te || (re += " V " + (ne += $ - (ee ? g / 2 : 0) * Q))),
                                        te || (ae += Z * p),
                                        $ && ((re += " H " + ae), te && (re += " V " + (ne += $ - (ee ? g / 2 : 0) * Q))),
                                        $ && ee && (re += " V " + (ne += (g / 2) * Q * (G ? -1 : 1))),
                                        (re += " H " + (ae += P ? m * p : -m * p)),
                                        c.push({ color: C, cssClass: w, id: k, pathD: re, startDate: R, endDate: A }),
                                        L && ("to" === S || "bidirectional" === S || !0 === S))
                                    ) {
                                        se = P ? -1 * v : v;
                                        c.push({
                                            color: C,
                                            cssClass: "mbsc-connection-arrow " + w,
                                            endDate: A,
                                            fill: C,
                                            id: k + "__end",
                                            pathD: "M " + ae + ", " + ne + " L " + (ae + se) + " " + (ne - f) + " L " + (ae + se) + " " + (ne + f) + " Z",
                                            startDate: R,
                                        });
                                    }
                                }
                            }
                        }
                        (this._connections = c), (this._calcConnections = !1);
                    }
                }),
                t
            );
        })(Pl);
    function Rl(e, t, a) {
        var n,
            s,
            i,
            r,
            o = t.dragData,
            l = o && o.draggedEvent && o.draggedEvent.id,
            d = a._hasSlots,
            h = a._hb,
            u = a._rtl,
            m = a._times,
            _ = a._theme,
            p = a._startTime,
            v = a._endTime,
            f = a._stepLabel,
            g = a._slots,
            y = "timeline",
            b = e.eventList,
            x = "month" === e.type,
            D = a._stepCell < bt,
            T = a._startCellStyle,
            S = a._endCellStyle,
            C = a._daysBatch,
            w = { height: t.headerHeight + "px" },
            k = { height: t.footerHeight + "px" },
            M = a._days,
            E = a._daysNr,
            N = t.dayIndex || 0,
            I = a._isDailyResolution,
            L = a._hasResY,
            H = a._hasResources,
            O = e.renderHourFooter || e.renderDayFooter || e.renderQuarterFooter || e.renderWeekFooter || e.renderMonthFooter || e.renderYearFooter,
            Y = a._hasRows,
            P = a._colClass,
            F = a._dragCol,
            z = (((n = {}).className = "mbsc-connections" + _), n),
            V = (((s = {}).onMouseMove = a._onMouseMove), (s.onMouseLeave = a._onMouseLeave), s),
            R = function (t, n) {
                var s, i;
                if (a._displayTime && a._timeLabels[n])
                    if (e.renderHour) {
                        var r = +t.date + n;
                        _e((s = e.renderHour({ date: new Date(r), events: t.eventMap[r] || [], isActive: t.isActive }))) && ((i = a._safeHtml(s)), (a._shouldEnhance = !0));
                    } else s = a._timeLabels[n];
                return qa("div", { key: n, "aria-hidden": "true", className: "mbsc-timeline-header-time mbsc-flex-1-1" + _, dangerouslySetInnerHTML: i }, s);
            },
            A = function (t, n) {
                var s, i;
                if (e.renderHourFooter && a._displayTime && a._timeLabels[n]) {
                    var r = +t.date + n;
                    _e((s = e.renderHourFooter({ date: new Date(r), events: t.eventMap[r] || [], isActive: t.isActive }))) && ((i = a._safeHtml(s)), (a._shouldEnhance = !0));
                }
                return qa("div", { key: n, className: "mbsc-timeline-footer-time mbsc-flex-1-1 " + _, dangerouslySetInnerHTML: i }, s);
            },
            W = function (t, n) {
                var s, i;
                return (
                    e.renderDay ? _e((s = e.renderDay({ date: t.date, events: t.eventMap.all, isActive: t.isActive }))) && ((i = a._safeHtml(s)), (a._shouldEnhance = !0)) : (s = t.dateText),
                    qa(
                        "div",
                        {
                            ref: n ? a._setStickyDay : ie,
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: i,
                            className: (n ? "mbsc-timeline-header-text" : "") + (t.isActive && !e.renderDay ? " mbsc-timeline-header-active" : "") + (e.renderDay ? " mbsc-timeline-header-date-cont" : " mbsc-timeline-header-date-text") + _,
                        },
                        s
                    )
                );
            },
            U = function (t, n) {
                var s, i;
                return (
                    e.renderWeek
                        ? _e((s = e.renderWeek({ date: t.date, endDate: t.endDate, events: t.eventMap[t.timestamp] || [], isActive: t.isActive, startDate: t.date, weekNr: t.weekNr }))) && ((i = a._safeHtml(s)), (a._shouldEnhance = !0))
                        : (s = t.weekText),
                    qa(
                        "div",
                        {
                            ref: n ? a._setStickyWeek : ie,
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: i,
                            className: (n ? "mbsc-timeline-header-text" : "") + (e.renderWeek ? " mbsc-timeline-header-week-cont" : " mbsc-timeline-header-week-text") + (t.lastOfWeek ? "  mbsc-timeline-header-week-text-last" : "") + _,
                        },
                        s
                    )
                );
            },
            B = function (t) {
                var n, s;
                return (
                    e.renderWeekFooter &&
                        _e((n = e.renderWeekFooter({ date: t.date, endDate: t.endDate, events: t.eventMap[t.timestamp] || [], isActive: t.isActive, startDate: t.date, weekNr: t.weekNr }))) &&
                        ((s = a._safeHtml(n)), (a._shouldEnhance = !0)),
                    qa("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-week-cont" }, n)
                );
            },
            j = function (t, n) {
                var s, i;
                return (
                    e.renderMonth ? _e((s = e.renderMonth({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((i = a._safeHtml(s)), (a._shouldEnhance = !0)) : (s = t.monthText),
                    qa(
                        "div",
                        {
                            ref: n ? a._setStickyMonth : ie,
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: i,
                            className: (n ? "mbsc-timeline-header-text" : "") + (e.renderMonth ? " mbsc-timeline-header-month-cont" : " mbsc-timeline-header-month-text") + (t.lastOfMonth ? " mbsc-timeline-header-month-text-last" : "") + _,
                        },
                        s
                    )
                );
            },
            K = function (t) {
                var n, s;
                return (
                    e.renderMonthFooter && _e((n = e.renderMonthFooter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = a._safeHtml(n)), (a._shouldEnhance = !0)),
                    qa("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-month-cont" }, n)
                );
            },
            X = function (t) {
                var n, s;
                return (
                    e.renderQuarter && _e((n = e.renderQuarter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = a._safeHtml(n)), (a._shouldEnhance = !0)),
                    qa("div", { "aria-hidden": "true", dangerouslySetInnerHTML: s, className: (e.renderQuarter ? " mbsc-timeline-header-month-cont" : " mbsc-timeline-header-month-text") + _ }, n)
                );
            },
            J = function (t) {
                var n, s;
                return (
                    e.renderQuarterFooter && _e((n = e.renderQuarterFooter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = a._safeHtml(n)), (a._shouldEnhance = !0)),
                    qa("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-month-cont" }, n)
                );
            },
            q = function (t) {
                var n, s;
                return (
                    e.renderYear ? _e((n = e.renderYear({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = a._safeHtml(n)), (a._shouldEnhance = !0)) : (n = t.columnTitle),
                    qa(
                        "div",
                        {
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: s,
                            className: (t.isActive && !e.renderYear ? " mbsc-timeline-header-active" : "") + (e.renderYear ? " mbsc-timeline-header-year-cont" : " mbsc-timeline-header-year-text") + _,
                        },
                        n
                    )
                );
            },
            G = function (t) {
                var n, s;
                return (
                    e.renderYearFooter && _e((n = e.renderYearFooter({ date: t.date, events: t.eventMap[t.timestamp] || [], isActive: t.isActive }))) && ((s = a._safeHtml(n)), (a._shouldEnhance = !0)),
                    qa("div", { dangerouslySetInnerHTML: s, className: "mbsc-timeline-footer-year-cont" }, n)
                );
            },
            Z = function (t, n) {
                var s,
                    i,
                    r = t.isParent,
                    o = (n ? n + "-" : "") + t.id,
                    l = t.fixed && !L,
                    c = { minHeight: a._rowHeights[o], top: l ? a._fixedResourceTops[o] : ie };
                return (
                    e.renderSidebar && _e((s = e.renderSidebar(t))) && ((i = a._safeHtml(s)), (a._shouldEnhance = !0)),
                    o !== a._dragRow &&
                        qa(
                            "div",
                            { key: o, className: "mbsc-timeline-sidebar-resource mbsc-timeline-row mbsc-flex-1-0" + (r ? " mbsc-timeline-parent mbsc-flex" : "") + (l ? "  mbsc-timeline-row-fixed" : "") + _ + u + h, style: c },
                            qa("div", { className: "mbsc-timeline-sidebar-resource-title", dangerouslySetInnerHTML: i }, s)
                        )
                );
            },
            Q = function (t, n) {
                var s,
                    i = t.isParent,
                    r = a._hasHierarchy ? 1.75 * t.depth + "em" : ie,
                    o = (n ? n + "-" : "") + t.id,
                    l = t.fixed && !L,
                    c = { minHeight: a._rowHeights[o], paddingLeft: e.rtl ? ie : r, paddingRight: e.rtl ? r : ie, top: l ? a._fixedResourceTops[o] + "px" : ie },
                    d = t.name;
                return (
                    e.renderResource && _e((d = e.renderResource(t))) && ((s = a._safeHtml(d)), (a._shouldEnhance = !0)),
                    o !== a._dragRow &&
                        qa(
                            "div",
                            { key: o, className: "mbsc-timeline-resource mbsc-timeline-row mbsc-flex-1-0" + (i ? " mbsc-timeline-parent mbsc-flex" : "") + (l ? " mbsc-timeline-row-fixed" : "") + _ + u + h, style: c },
                            i &&
                                qa(Ri, {
                                    className: "mbsc-timeline-resource-icon" + u + h,
                                    svg: t.collapsed ? (e.rtl ? e.nextIconRtl : e.nextIcon) : e.downIcon,
                                    theme: e.theme,
                                    onClick: function (e) {
                                        return a._onParentClick(e, t);
                                    },
                                }),
                            qa("div", { className: "mbsc-timeline-resource-title" + (i ? " mbsc-flex-1-1" : ""), dangerouslySetInnerHTML: s }, d)
                        )
                );
            },
            $ = function (e, t, n, s, i) {
                var r = e[t][bl][i || "all"],
                    o = [];
                if (r)
                    for (var c = 0, d = r.data; c < d.length; c++) {
                        var h = d[c];
                        ((s && l === h.id) || (a._batchStart <= h.endDate && a._batchEnd > h.startDate)) && o.push(h);
                    }
                return n(o, i || "all", t, bl);
            },
            ee = function (e) {
                return e.map(function (e, t) {
                    return qa("div", { key: t, className: "mbsc-schedule-color mbsc-timeline-color" + e.cssClass + _, style: e.position }, qa("div", { className: "mbsc-schedule-color-text" }, e.title));
                });
            },
            te = function (e) {
                return e.map(function (e, t) {
                    return e.position && qa("div", { key: t, className: "mbsc-schedule-invalid mbsc-timeline-invalid" + e.cssClass + _, style: e.position }, qa("div", { className: "mbsc-schedule-invalid-text" }, e.title));
                });
            },
            ae = function (t, n, s, i) {
                var r = a._resourcesMap[s].eventResize,
                    d = s + "__" + i + "__" + n,
                    h = ws(o && o.draggedEvent && o.draggedEvent.original.resize, e.dragToResize, r),
                    u = {
                        displayTimezone: e.displayTimezone,
                        drag: e.dragToMove || e.externalDrag,
                        endDay: e.endDay,
                        eventHeight: a._setRowHeight ? a._eventHeight : ie,
                        exclusiveEndDates: e.exclusiveEndDates,
                        gridEndTime: v,
                        gridStartTime: p,
                        hasResY: L,
                        isListing: b,
                        isTimeline: !0,
                        lastDay: +a._lastDay,
                        render: e.renderEvent,
                        renderContent: e.renderEventContent,
                        resource: s,
                        rtl: e.rtl,
                        slot: i,
                        startDay: e.startDay,
                        theme: e.theme,
                        timezonePlugin: e.timezonePlugin,
                    };
                return qa(
                    Za,
                    null,
                    t.map(function (t) {
                        return (
                            t.position &&
                            qa(
                                Il,
                                c({}, u, {
                                    event: t,
                                    inactive: l === t.id,
                                    key: t.uid,
                                    resize: ws(t.original.resize, e.dragToResize, r),
                                    selected: !(!e.selectedEventsMap[t.uid] && !e.selectedEventsMap[t.id]),
                                    onClick: a._onEventClick,
                                    onDoubleClick: e.onEventDoubleClick,
                                    onRightClick: e.onEventRightClick,
                                    onHoverIn: e.onEventHoverIn,
                                    onHoverOut: e.onEventHoverOut,
                                    onDelete: e.onEventDelete,
                                    onDragStart: a._onEventDragStart,
                                    onDragMove: a._onEventDragMove,
                                    onDragEnd: a._onEventDragEnd,
                                    onDragModeOn: a._onEventDragModeOn,
                                    onDragModeOff: a._onEventDragModeOff,
                                })
                            )
                        );
                    }),
                    o &&
                        o.originDates &&
                        o.originDates[d] &&
                        qa(
                            Il,
                            c({}, u, {
                                event: o.originDates[d],
                                hidden: o && !!o.draggedDates,
                                isDrag: !0,
                                resize: h,
                                onDragStart: a._onEventDragStart,
                                onDragMove: a._onEventDragMove,
                                onDragEnd: a._onEventDragEnd,
                                onDragModeOff: a._onEventDragModeOff,
                            })
                        ),
                    o && o.draggedDates && o.draggedDates[d] && qa(Il, c({}, u, { event: o.draggedDates[d], isDrag: !0, resize: h }))
                );
            },
            ne = function (n, s) {
                var i = n.id,
                    r = (s ? s + "-" : "") + i,
                    o = n.fixed && !L;
                return qa(
                    "div",
                    {
                        key: r,
                        className: "mbsc-timeline-row mbsc-flex mbsc-flex-1-0" + (n.isParent ? " mbsc-timeline-parent" : "") + (o ? " mbsc-timeline-row-fixed" : "") + (r === a._dragRow ? " mbsc-timeline-hidden" : "") + _ + h,
                        style: { minHeight: a._rowHeights[r], top: o ? a._fixedResourceTops[r] + "px" : ie },
                    },
                    !d && qa(Za, null, qa("div", { className: "mbsc-timeline-events" }, $(a._events, i, ae, !0, s)), $(a._invalids, i, te, void 0, s), $(a._colors, i, ee, void 0, s)),
                    qa("div", { style: { width: a._placeholderSizeX + "px" }, className: "mbsc-flex-none" }),
                    C.map(function (n) {
                        var r = n.timestamp,
                            o = s || n.dateKey;
                        return I
                            ? qa(
                                  "div",
                                  {
                                      key: r,
                                      className:
                                          "mbsc-timeline-day mbsc-flex" +
                                          _ +
                                          u +
                                          h +
                                          (o === F ? " mbsc-timeline-hidden" : "") +
                                          (n.dateIndex < E - 1 && (D || n.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                          (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0") +
                                          (x || a._isMulti ? " mbsc-timeline-day-month" : ""),
                                  },
                                  g.map(function (t) {
                                      var n = t.id,
                                          s = a._events[i][n][o],
                                          l = a._colors[i][n][o],
                                          p = a._invalids[i][n][o];
                                      return qa(
                                          "div",
                                          { key: n, className: "mbsc-flex mbsc-flex-1-1" + (d ? " mbsc-timeline-slot" : "") },
                                          d && qa(Za, null, qa("div", { className: "mbsc-timeline-events" }, ae(s ? s.data : [], o, i, n)), p && te(p.data), l && ee(l.data)),
                                          m.map(function (t, a) {
                                              var s,
                                                  o = Ml(r, t),
                                                  l = !a,
                                                  d = a === m.length - 1,
                                                  p =
                                                      (((s = {}).onDoubleClick = function (t) {
                                                          return e.onCellDoubleClick({ date: o, domEvent: t, resource: i, slot: n, source: y });
                                                      }),
                                                      (s.onContextMenu = function (t) {
                                                          return e.onCellRightClick({ date: o, domEvent: t, resource: i, slot: n, source: y });
                                                      }),
                                                      s);
                                              return qa(
                                                  "div",
                                                  c(
                                                      {
                                                          key: a,
                                                          className: "mbsc-timeline-column mbsc-flex-1-1" + _ + u + h + ((l && !d && T) || (d && !l && S) ? " mbsc-flex-none" : ""),
                                                          onClick: function (t) {
                                                              return e.onCellClick({ date: o, domEvent: t, resource: i, slot: n, source: y });
                                                          },
                                                          style: l && !d ? T : d && !l ? S : ie,
                                                      },
                                                      p
                                                  )
                                              );
                                          })
                                      );
                                  })
                              )
                            : qa("div", { key: r, className: "mbsc-timeline-day mbsc-timeline-column" + _ + u + h + (o === F ? " mbsc-timeline-hidden" : "") + (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0") });
                    })
                );
            };
        return qa(
            "div",
            {
                ref: a._setEl,
                className: "mbsc-timeline mbsc-flex-1-1 mbsc-flex-col" + (t.cellWidth ? "" : " mbsc-hidden") + (a._hasSticky ? " mbsc-has-sticky" : "") + (Y ? "" : " mbsc-timeline-no-rows") + (H ? "" : " mbsc-timeline-no-resource") + _ + u,
            },
            qa("div", { dangerouslySetInnerHTML: a.textParam }),
            qa(
                "div",
                { ref: a._setStickyHeader, className: "mbsc-timeline-header-sticky mbsc-flex" + _ },
                Y &&
                    qa(
                        "div",
                        { className: "mbsc-timeline-resource-header-cont " + P + _ + u + h, style: w },
                        (e.renderResourceHeader && _e((i = e.renderResourceHeader())) && ((r = a._safeHtml(i)), (a._shouldEnhance = !0)), qa("div", { className: "mbsc-timeline-resource-header", dangerouslySetInnerHTML: r }, i))
                    ),
                I &&
                    qa(
                        "div",
                        { className: "mbsc-flex-1-1" },
                        !L &&
                            qa(
                                Za,
                                null,
                                a._isMulti && qa("div", { className: "mbsc-timeline-header-month mbsc-flex" + _ + u + h }, j(M[N] || M[0], !0)),
                                e.weekNumbers && qa("div", { className: "mbsc-timeline-header-week mbsc-flex" + _ + u + h }, U(M[N] || M[0], !0)),
                                (d || D) && qa("div", { className: "mbsc-timeline-header-date mbsc-flex" + _ + u + h }, W(M[N] || M[0], !0))
                            )
                    ),
                Y &&
                    e.renderSidebar &&
                    qa(
                        "div",
                        { className: "mbsc-timeline-sidebar-header-cont mbsc-timeline-sidebar-col" + _ + u + h, style: w },
                        (function () {
                            var t, n;
                            return e.renderSidebarHeader && _e((t = e.renderSidebarHeader())) && ((n = a._safeHtml(t)), (a._shouldEnhance = !0)), qa("div", { className: "mbsc-timeline-sidebar-header", dangerouslySetInnerHTML: n }, t);
                        })()
                    ),
                t.hasScrollY && qa("div", { className: "mbsc-schedule-fake-scroll-y" })
            ),
            O &&
                qa(
                    "div",
                    { ref: a._setStickyFooter, className: "mbsc-timeline-footer-sticky mbsc-flex" + _ },
                    Y &&
                        qa(
                            "div",
                            { className: "mbsc-timeline-resource-footer-cont " + P + _ + u + h, style: k },
                            (function () {
                                var t, n;
                                return (
                                    e.renderResourceFooter && _e((t = e.renderResourceFooter())) && ((n = a._safeHtml(t)), (a._shouldEnhance = !0)), qa("div", { className: "mbsc-timeline-resource-footer", dangerouslySetInnerHTML: n }, t)
                                );
                            })()
                        ),
                    I && qa("div", { className: "mbsc-flex-1-1" }),
                    Y &&
                        e.renderSidebar &&
                        qa(
                            "div",
                            { className: "mbsc-timeline-sidebar-footer-cont mbsc-timeline-sidebar-col" + _ + u + h, style: k },
                            (function () {
                                var t, n;
                                return e.renderSidebarFooter && _e((t = e.renderSidebarFooter())) && ((n = a._safeHtml(t)), (a._shouldEnhance = !0)), qa("div", { className: "mbsc-timeline-sidebar-footer", dangerouslySetInnerHTML: n }, t);
                            })()
                        ),
                    t.hasScrollY && qa("div", { className: "mbsc-schedule-fake-scroll-y" })
                ),
            qa(
                "div",
                { ref: a._setCont, className: "mbsc-timeline-grid-scroll mbsc-flex-col mbsc-flex-1-1" + _ + u + h, onScroll: a._onScroll },
                qa("div", { className: "mbsc-flex-none", style: a._hasSticky ? ie : w }),
                qa(
                    "div",
                    { className: "mbsc-timeline-header mbsc-flex" + _ + u + h, ref: a._setHeaderCont },
                    Y && qa("div", { className: "mbsc-timeline-resource-header-cont " + P + _ + u + h }),
                    qa(
                        "div",
                        { className: "mbsc-timeline-header-bg mbsc-flex-1-0 mbsc-flex" + _ },
                        qa(
                            "div",
                            { className: "mbsc-timeline-time-indicator-cont", style: { height: (t.scrollContHeight || 0) - (t.headerHeight || 0) + "px", width: t.hasScrollX ? a._gridWidth + "px" : ie } },
                            a._showTimeIndicator &&
                                qa(Hl, {
                                    amText: e.amText,
                                    displayedTime: a._time,
                                    displayedDays: E,
                                    displayTimezone: e.displayTimezone,
                                    endDay: e.endDay,
                                    firstDay: a._firstDayTz,
                                    orientation: "y",
                                    pmText: e.pmText,
                                    rtl: e.rtl,
                                    startDay: e.startDay,
                                    startTime: p,
                                    theme: e.theme,
                                    timeFormat: e.timeFormat,
                                    timezonePlugin: e.timezonePlugin,
                                    hasResY: L,
                                }),
                            a._showCursorTime && qa("div", { ref: a._setCursorTimeCont, className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-y" + _ })
                        ),
                        qa("div", { className: "mbsc-flex-none", style: { width: a._placeholderSizeX + "px" } }),
                        qa(
                            "div",
                            { className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1" },
                            I
                                ? qa(
                                      Za,
                                      null,
                                      a._isMulti &&
                                          !L &&
                                          qa(
                                              "div",
                                              { className: "mbsc-flex" },
                                              C.map(function (e) {
                                                  var t = e.lastOfMonth;
                                                  return e.dateKey === F
                                                      ? ie
                                                      : qa(
                                                            "div",
                                                            { key: e.timestamp, className: "mbsc-timeline-month mbsc-flex-1-0-0" + _ + u + h + (e.dateIndex < E - 1 && t ? " mbsc-timeline-day mbsc-timeline-day-border" : "") },
                                                            qa("div", { className: "mbsc-timeline-header-month" + _ + u + h + (t ? " mbsc-timeline-header-month-last" : "") }, e.monthTitle && j(e, !1))
                                                        );
                                              })
                                          ),
                                      e.weekNumbers &&
                                          qa(
                                              "div",
                                              { className: "mbsc-flex" },
                                              C.map(function (e) {
                                                  var t = e.lastOfWeek;
                                                  return e.dateKey === F
                                                      ? ie
                                                      : qa(
                                                            "div",
                                                            {
                                                                key: e.timestamp,
                                                                className: "mbsc-timeline-month mbsc-flex-1-0-0" + _ + u + h + (e.dateIndex < E - 1 && t && (D || e.lastOfMonth) ? " mbsc-timeline-day mbsc-timeline-day-border" : ""),
                                                            },
                                                            qa("div", { className: "mbsc-timeline-header-week" + _ + u + h + (t ? " mbsc-timeline-header-week-last" : "") }, e.weekTitle && U(e, !1))
                                                        );
                                              })
                                          ),
                                      qa(
                                          "div",
                                          { className: "mbsc-flex" },
                                          C.map(function (t) {
                                              return t.dateKey === F
                                                  ? ie
                                                  : qa(
                                                        "div",
                                                        {
                                                            key: t.timestamp,
                                                            className:
                                                                "mbsc-timeline-day mbsc-flex-1-0-0" +
                                                                _ +
                                                                u +
                                                                h +
                                                                (t.dateIndex < E - 1 && (D || t.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                                                (x || a._isMulti ? " mbsc-timeline-day-month" : ""),
                                                        },
                                                        !L && qa("div", { className: "mbsc-timeline-header-date" + _ + u + h }, W(t), t.label && qa("div", { className: "mbsc-hidden-content" }, t.label)),
                                                        d &&
                                                            qa(
                                                                "div",
                                                                { className: "mbsc-flex mbsc-timeline-slots" + _ },
                                                                g.map(function (n) {
                                                                    return qa(
                                                                        "div",
                                                                        { key: n.id, className: "mbsc-timeline-slot mbsc-timeline-slot-header mbsc-flex-1-1" + u + _ },
                                                                        n.name &&
                                                                            (function (t) {
                                                                                var n,
                                                                                    s = t.slot,
                                                                                    i = s.name;
                                                                                return (
                                                                                    e.renderSlot && _e((i = e.renderSlot(t))) && ((n = a._safeHtml(i)), (a._shouldEnhance = !0)),
                                                                                    qa("div", { key: s.id, className: "mbsc-timeline-slot-title", dangerouslySetInnerHTML: n }, i)
                                                                                );
                                                                            })({ slot: n, date: t.date })
                                                                    );
                                                                })
                                                            ),
                                                        qa(
                                                            "div",
                                                            { "aria-hidden": "true", className: "mbsc-flex" },
                                                            m.map(function (e, n) {
                                                                var s = !n,
                                                                    i = n === m.length - 1;
                                                                return qa(
                                                                    "div",
                                                                    {
                                                                        key: n,
                                                                        style: s && !i ? T : i && !s ? S : ie,
                                                                        className:
                                                                            "mbsc-flex mbsc-flex-1-1 mbsc-timeline-header-column" +
                                                                            _ +
                                                                            u +
                                                                            h +
                                                                            (!a._displayTime || d ? " mbsc-timeline-no-height" : "") +
                                                                            (f > a._stepCell && m[n + 1] % f ? " mbsc-timeline-no-border" : "") +
                                                                            ((s && T) || (i && S) ? " mbsc-flex-none" : ""),
                                                                    },
                                                                    R(t, e),
                                                                    a._timesBetween.map(function (a, n) {
                                                                        var s = e + (n + 1) * f;
                                                                        return s > p && s < v && R(t, s);
                                                                    })
                                                                );
                                                            })
                                                        )
                                                    );
                                          })
                                      )
                                  )
                                : qa(
                                      "div",
                                      { className: "mbsc-flex" },
                                      C.map(function (t) {
                                          return t.dateKey === F
                                              ? ie
                                              : qa(
                                                    "div",
                                                    { key: t.timestamp, className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h },
                                                    qa(
                                                        "div",
                                                        { className: "mbsc-timeline-header-week mbsc-timeline-header-week-last" + _ + u + h },
                                                        qa(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mbsc-timeline-header-week-text mbsc-timeline-header-week-text-last" +
                                                                    (t.isActive && !(e.renderWeek || e.renderMonth || e.renderQuarter || e.renderYear) ? " mbsc-timeline-header-active" : "") +
                                                                    _,
                                                            },
                                                            (function (t) {
                                                                switch (e.resolution) {
                                                                    case "week":
                                                                        if (e.renderWeek) return U(t, !1);
                                                                        break;
                                                                    case "month":
                                                                        if (e.renderMonth) return j(t, !1);
                                                                        break;
                                                                    case "quarter":
                                                                        if (e.renderQuarter) return X(t);
                                                                        break;
                                                                    case "year":
                                                                        if (e.renderYear) return q(t);
                                                                }
                                                                return t.columnTitle;
                                                            })(t)
                                                        )
                                                    )
                                                );
                                      })
                                  )
                        )
                    ),
                    Y && e.renderSidebar && qa("div", { className: "mbsc-timeline-sidebar-header-cont mbsc-timeline-sidebar-col" + _ + u + h })
                ),
                qa(
                    "div",
                    { className: "mbsc-flex mbsc-flex-1-1" },
                    qa(
                        "div",
                        { className: "mbsc-flex mbsc-flex-1-1" },
                        Y &&
                            qa(
                                "div",
                                { className: "mbsc-timeline-resources mbsc-flex-col " + P + _ + u, ref: a._setResCont },
                                qa("div", { className: "mbsc-flex-none", style: a._hasSideSticky ? ie : w }),
                                qa(
                                    "div",
                                    { className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (a._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + _ },
                                    qa("div", { style: { height: a._placeholderSizeY + "px" }, className: "mbsc-flex-none" }),
                                    a._rowBatch.map(function (e) {
                                        var t = e.day,
                                            n = t ? t.dateKey : "";
                                        return !e.hidden && t
                                            ? H
                                                ? qa(
                                                      "div",
                                                      { key: n, className: "mbsc-timeline-row-group mbsc-flex mbsc-flex-1-0" + _ + h },
                                                      qa("div", { className: "mbsc-timeline-row-date mbsc-timeline-row-date-col mbsc-flex-none" + u + _ + h }, W(t)),
                                                      qa(
                                                          "div",
                                                          { className: "mbsc-timeline-row-resource-col mbsc-flex-1-1 mbsc-flex-col" },
                                                          e.rows.map(function (e) {
                                                              return Q(e, n);
                                                          })
                                                      )
                                                  )
                                                : qa("div", { key: n, className: "mbsc-timeline-row-date mbsc-flex-1-0" + u + _ + h, style: { minHeight: a._rowHeights[n + "-" + bl] } }, W(t))
                                            : e.rows.map(function (e) {
                                                  return Q(e, n);
                                              });
                                    })
                                ),
                                qa("div", { className: "mbsc-flex-none", style: a._hasSideSticky ? ie : k })
                            ),
                        Y && qa("div", { className: a._hasSideSticky ? "" : P }),
                        qa(
                            "div",
                            { className: "mbsc-timeline-hidden" },
                            qa("div", { className: "mbsc-timeline-row mbsc-timeline-empty-row" + _ }),
                            qa("div", { className: "mbsc-timeline-row mbsc-timeline-parent mbsc-timeline-empty-parent" + _ }),
                            qa("div", { className: "mbsc-timeline-row-gutter" + _ })
                        ),
                        qa(
                            "div",
                            c(
                                {
                                    className: "mbsc-timeline-grid mbsc-flex-1-0" + (a._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col"),
                                    ref: a._setGridCont,
                                    style: { height: t.hasScrollY ? a._gridHeight + "px" : ie, width: t.hasScrollX ? a._gridWidth + "px" : ie },
                                },
                                V
                            ),
                            qa("div", { style: { height: a._placeholderSizeY + "px" }, className: "mbsc-flex-none" }),
                            a._rowBatch.map(function (e) {
                                var t = e.day,
                                    a = t ? t.dateKey : "";
                                return t && H
                                    ? qa(
                                          "div",
                                          { key: a, className: "mbsc-timeline-row-group mbsc-flex-col mbsc-flex-1-0" + _ + h },
                                          e.rows.map(function (e) {
                                              return ne(e, a);
                                          })
                                      )
                                    : qa(
                                          Za,
                                          { key: a },
                                          e.rows.map(function (e) {
                                              return ne(e, a);
                                          })
                                      );
                            }),
                            a._connections &&
                                qa(
                                    "svg",
                                    c({ viewBox: "0 0 100 100", preserveAspectRatio: "none" }, z),
                                    a._connections.map(function (e) {
                                        var t,
                                            n = (((t = {}).className = "mbsc-connection " + e.cssClass + _), (t.d = e.pathD), (t.style = { stroke: e.color, fill: e.fill }), (t["vector-effect"] = "non-scaling-stroke"), t);
                                        return Mt(a._batchStart, a._batchEnd, e.startDate, e.endDate, !0) && qa("path", c({ key: e.id }, n));
                                    })
                                )
                        ),
                        Y &&
                            e.renderSidebar &&
                            qa(
                                "div",
                                { className: "mbsc-timeline-sidebar mbsc-timeline-sidebar-col mbsc-flex-col" + _ + u, ref: a._setSidebarCont },
                                qa("div", { className: "mbsc-flex-none", style: a._hasSideSticky ? ie : w }),
                                qa(
                                    "div",
                                    { className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (a._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + _ },
                                    qa("div", { style: { height: a._placeholderSizeY + "px" }, className: "mbsc-flex-none" }),
                                    a._rowBatch.map(function (e) {
                                        var t = e.day,
                                            a = t ? t.dateKey : "";
                                        return t && H
                                            ? qa(
                                                  "div",
                                                  { key: a, className: "mbsc-timeline-row-group mbsc-flex-col mbsc-flex-1-0" + _ + h },
                                                  e.rows.map(function (e) {
                                                      return Z(e, a);
                                                  })
                                              )
                                            : e.rows.map(function (e) {
                                                  return Z(e, a);
                                              });
                                    })
                                ),
                                qa("div", { className: "mbsc-flex-none", style: a._hasSideSticky ? ie : k })
                            ),
                        Y && e.renderSidebar && qa("div", { className: a._hasSideSticky ? "" : "mbsc-timeline-sidebar-col" })
                    )
                ),
                O &&
                    qa(
                        Za,
                        null,
                        qa("div", { className: "mbsc-flex-none", style: a._hasSticky ? ie : k }),
                        qa(
                            "div",
                            { className: "mbsc-timeline-footer mbsc-flex" + _ + u + h, ref: a._setFooterCont },
                            Y && qa("div", { className: "mbsc-timeline-resource-footer-cont " + P + _ + u + h }),
                            qa(
                                "div",
                                { className: "mbsc-timeline-footer-bg mbsc-flex-1-0 mbsc-flex" + _ },
                                qa("div", { className: "mbsc-flex-none", style: { width: a._placeholderSizeX + "px" } }),
                                qa(
                                    "div",
                                    { className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1" },
                                    qa(
                                        "div",
                                        { className: "mbsc-flex" },
                                        C.map(function (t) {
                                            return t.dateKey === F
                                                ? ie
                                                : I
                                                ? qa(
                                                      "div",
                                                      {
                                                          key: t.timestamp,
                                                          className:
                                                              "mbsc-timeline-day mbsc-flex-1-0-0" +
                                                              _ +
                                                              u +
                                                              h +
                                                              (t.dateIndex < E - 1 && (D || t.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                                              (x || a._isMulti ? " mbsc-timeline-day-month" : ""),
                                                      },
                                                      qa(
                                                          "div",
                                                          { className: "mbsc-flex" },
                                                          m.map(function (e, n) {
                                                              var s = !n,
                                                                  i = n === m.length - 1;
                                                              return qa(
                                                                  "div",
                                                                  {
                                                                      key: n,
                                                                      style: s && !i ? T : i && !s ? S : ie,
                                                                      className:
                                                                          "mbsc-flex mbsc-flex-1-1 mbsc-timeline-column mbsc-timeline-footer-column" +
                                                                          _ +
                                                                          u +
                                                                          h +
                                                                          (!a._displayTime || d ? " mbsc-timeline-no-height" : "") +
                                                                          (f > a._stepCell && m[n + 1] % f ? "mbsc-timeline-no-border" : "") +
                                                                          ((s && !i && T) || (i && !s && S) ? " mbsc-flex-none" : ""),
                                                                  },
                                                                  A(t, e),
                                                                  a._timesBetween.map(function (a, n) {
                                                                      var s = e + (n + 1) * f;
                                                                      return s > p && s < v && A(t, s);
                                                                  })
                                                              );
                                                          })
                                                      ),
                                                      e.renderDayFooter &&
                                                          qa(
                                                              "div",
                                                              { className: "mbsc-timeline-footer-date" + _ + u + h },
                                                              (function (t) {
                                                                  var n, s;
                                                                  return (
                                                                      e.renderDayFooter && _e((n = e.renderDayFooter({ date: t.date, events: t.eventMap.all }))) && ((s = a._safeHtml(n)), (a._shouldEnhance = !0)),
                                                                      qa("div", { className: "mbsc-timeline-footer-date-cont", dangerouslySetInnerHTML: s }, n)
                                                                  );
                                                              })(t)
                                                          ),
                                                      d &&
                                                          qa(
                                                              "div",
                                                              { className: "mbsc-flex" },
                                                              g.map(function (e) {
                                                                  return qa("div", { key: e.id, className: "mbsc-timeline-slot mbsc-flex-1-1" + u + _ });
                                                              })
                                                          )
                                                  )
                                                : qa(
                                                      "div",
                                                      { key: t.timestamp, className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h },
                                                      qa(
                                                          "div",
                                                          { className: "mbsc-timeline-footer-week mbsc-timeline-footer-week-last" + _ + u + h },
                                                          qa(
                                                              "div",
                                                              { className: "mbsc-timeline-footer-week-text" + _ },
                                                              (function (t) {
                                                                  switch (e.resolution) {
                                                                      case "week":
                                                                          if (e.renderWeekFooter) return B(t);
                                                                          break;
                                                                      case "month":
                                                                          if (e.renderMonthFooter) return K(t);
                                                                          break;
                                                                      case "quarter":
                                                                          if (e.renderQuarterFooter) return J(t);
                                                                          break;
                                                                      case "year":
                                                                          if (e.renderYearFooter) return G(t);
                                                                  }
                                                              })(t)
                                                          )
                                                      )
                                                  );
                                        })
                                    )
                                )
                            ),
                            Y && e.renderSidebar && qa("div", { className: "mbsc-timeline-sidebar-footer-cont mbsc-timeline-sidebar-col" + _ + u + h })
                        )
                    )
            ),
            o && !t.isTouchDrag && qa("div", { className: "mbsc-calendar-dragging" })
        );
    }
    var Al = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._template = function (e, t) {
                return Rl(e, t, this);
            }),
            t
        );
    })(Vl);
    function Wl(e, t, a, n, s, i, r) {
        var o,
            l = !e._colorEventList,
            c = i ? "popover" : "agenda",
            d = !i || e.state.showPopover,
            h = e._theme,
            u = r ? r.eventContent : s.renderEventContent,
            m = r ? r.event : s.renderEvent,
            _ = i ? e.state.popoverHost : ie,
            p = t.original,
            v = { __html: t.html },
            f = u ? u(t) : qa("div", { className: "mbsc-event-text " + h, title: t.tooltip, dangerouslySetInnerHTML: v }, ie);
        _e(f) ? ((f = qa("div", { className: "mbsc-event-content mbsc-flex-1-1 " + h, dangerouslySetInnerHTML: { __html: f } })), (e._shouldEnhance = d && c)) : (f = qa("div", { className: "mbsc-event-content mbsc-flex-1-1 " + h }, f));
        var g = m
            ? m(t)
            : qa(
                  Za,
                  null,
                  qa("div", { className: "mbsc-event-color" + h + e._rtl, style: t.style }),
                  f,
                  qa(
                      "div",
                      { className: "mbsc-event-time" + (_ ? " mbsc-event-date" : "") + h + e._rtl },
                      t.allDayText && qa("div", { className: "mbsc-event-all-day" + h }, t.allDayText),
                      t.lastDay && qa("div", { className: "mbsc-event-until" + h }, t.lastDay),
                      t.start && qa("div", { className: "mbsc-event-start" + h }, t.start),
                      t.start && t.end && qa("div", { className: "mbsc-event-sep" + h }, "-"),
                      t.end && qa("div", { className: "mbsc-event-end" + h }, t.end)
                  )
              );
        return (
            _e(g) && ((o = { __html: g }), (g = ie), (e._shouldEnhance = d && c)),
            qa(
                yl,
                {
                    className: "mbsc-event" + (l ? "" : " mbsc-colored-event") + (p.cssClass ? " " + p.cssClass : ""),
                    "data-id": p.id,
                    key: a,
                    actionable: s.actionableEvents,
                    dangerouslySetInnerHTML: o,
                    drag: i && (e._showEventLabels || _) && (s.dragToMove || s.externalDrag),
                    event: p,
                    eventData: t,
                    rtl: s.rtl,
                    selected: !(!e._selectedEventsMap[t.uid] && !e._selectedEventsMap[t.id]),
                    style: l ? ie : t.style,
                    theme: s.theme,
                    themeVariant: s.themeVariant,
                    onClick: function (t) {
                        return e._onEventClick({ date: n, domEvent: t.domEvent, event: p, source: c });
                    },
                    onDoubleClick: function (t) {
                        return e._onEventDoubleClick({ date: n, domEvent: t, event: p, source: c });
                    },
                    onContextMenu: function (t) {
                        return e._onEventRightClick({ date: n, domEvent: t, event: p, source: c });
                    },
                    onHoverIn: function (t) {
                        var a = t.domEvent;
                        return e._onEventHoverIn({ date: n, domEvent: a, event: p, source: c });
                    },
                    onHoverOut: function (t) {
                        var a = t.domEvent;
                        return e._onEventHoverOut({ date: n, domEvent: a, event: p, source: c });
                    },
                    onDelete: e._onEventDelete,
                    onDragEnd: _ ? _._onEventDragEnd : e._onLabelUpdateEnd,
                    onDragModeOff: _ ? _._onEventDragModeOff : e._onLabelUpdateModeOff,
                    onDragModeOn: _ ? _._onEventDragModeOn : e._onLabelUpdateModeOn,
                    onDragMove: _ ? _._onEventDragMove : e._onLabelUpdateMove,
                    onDragStart: _ ? _._onEventDragStart : e._onLabelUpdateStart,
                },
                g
            )
        );
    }
    function Ul(e, t, a, n) {
        var s;
        a._listDays || (a._listDays = {}),
            a._showEventList &&
                ((s = (function (e, t, a) {
                    var n,
                        s = e.theme,
                        i = t._listDays,
                        r = t.state.eventList || [],
                        o = a ? a.agenda : e.renderAgenda,
                        l = a ? a.agendaEmpty : e.renderAgendaEmpty;
                    if (o && t._eventListHTML === ie) return o(r, e, i);
                    if (!r.length) {
                        var c = l && l(),
                            d = _e(c) && { __html: c };
                        d ? ((n = qa("div", { dangerouslySetInnerHTML: d })), (t._shouldEnhance = t._list)) : (n = qa("div", { className: c ? "" : "mbsc-event-list-empty" + t._theme }, c || e.noEventsText));
                    }
                    return qa(
                        pl,
                        { theme: s, themeVariant: e.themeVariant, rtl: e.rtl },
                        !r.length && n,
                        r.map(function (n, r) {
                            return qa(
                                "div",
                                {
                                    className: "mbsc-event-group" + t._theme,
                                    key: r,
                                    ref: function (e) {
                                        return (i[n.timestamp] = e);
                                    },
                                },
                                ("day" !== t._eventListType || t._eventListSize > 1) && qa(fl, { theme: s, themeVariant: e.themeVariant, className: "mbsc-event-day" }, n.date),
                                n.events.map(function (s, i) {
                                    return Wl(t, s, i, n.timestamp, e, ie, a);
                                })
                            );
                        })
                    );
                })(e, a, n)),
                _e(s) && ((a._eventListHTML = { __html: s }), (a._shouldLoadDays = !0), (a._shouldEnhance = !0), (s = ie)));
        var i = {
                amText: e.amText,
                clickToCreate: e.clickToCreate,
                dataTimezone: e.dataTimezone,
                dateFormat: e.dateFormat,
                dayNames: e.dayNames,
                dayNamesMin: e.dayNamesMin,
                dayNamesShort: e.dayNamesShort,
                displayTimezone: e.displayTimezone,
                dragBetweenResources: e.dragBetweenResources,
                dragInTime: e.dragInTime,
                dragToCreate: e.dragToCreate,
                dragToResize: e.dragToResize,
                eventMap: a._eventMap,
                eventOrder: e.eventOrder,
                exclusiveEndDates: e.exclusiveEndDates,
                firstDay: e.firstDay,
                fromText: e.fromText,
                getDate: e.getDate,
                getDay: e.getDay,
                getMaxDayOfMonth: e.getMaxDayOfMonth,
                getMonth: e.getMonth,
                getWeekNumber: e.getWeekNumber,
                getYear: e.getYear,
                monthNames: e.monthNames,
                monthNamesShort: e.monthNamesShort,
                onActiveChange: a._onActiveChange,
                onEventDragEnter: a._onEventDragEnter,
                onEventDragLeave: a._onEventDragLeave,
                pmText: e.pmText,
                refDate: a._refDate,
                renderDay: n ? n.day : e.renderDay,
                rtl: e.rtl,
                selectedEventsMap: a._selectedEventsMap,
                showEventTooltip: e.showEventTooltip,
                theme: e.theme,
                themeVariant: e.themeVariant,
                timeFormat: e.timeFormat,
                timezonePlugin: e.timezonePlugin,
                toText: e.toText,
            },
            r = c({}, i, {
                allDayText: e.allDayText,
                checkSize: a._checkSize,
                colorsMap: a._colorsMap,
                currentTimeIndicator: a._currentTimeIndicator,
                dateFormatFull: e.dateFormatFull,
                dateFormatLong: e.dateFormatLong,
                dragTimeStep: a._dragTimeStep,
                dragToMove: e.dragToMove,
                eventDragEnd: a._onEventDragStop,
                eventOverlap: e.eventOverlap,
                extendDefaultEvent: e.extendDefaultEvent,
                externalDrag: e.externalDrag,
                externalDrop: e.externalDrop,
                groupBy: e.groupBy,
                height: t.height,
                immutableData: e.immutableData,
                invalidateEvent: e.invalidateEvent,
                invalidsMap: a._invalidsMap,
                maxDate: a._maxDate,
                minDate: a._minDate,
                moreEventsPluralText: e.moreEventsPluralText,
                moreEventsText: e.moreEventsText,
                navService: a._navService,
                navigateToEvent: a._navigateToEvent,
                newEventText: e.newEventText,
                onCellClick: a._onCellClick,
                onCellDoubleClick: a._onCellDoubleClick,
                onCellRightClick: a._onCellRightClick,
                onEventClick: a._onEventClick,
                onEventDelete: a._onEventDelete,
                onEventDoubleClick: a._onEventDoubleClick,
                onEventDragEnd: a._onEventDragEnd,
                onEventDragStart: a._onEventDragStart,
                onEventHoverIn: a._onEventHoverIn,
                onEventHoverOut: a._onEventHoverOut,
                onEventRightClick: a._onEventRightClick,
                onMoreClick: a._onMoreClick,
                onPopoverClose: a._onPopoverClose,
                renderEvent: n ? n.scheduleEvent : e.renderScheduleEvent,
                renderEventContent: n ? n.scheduleEventContent : e.renderScheduleEventContent,
                renderResource: n ? n.resource : e.renderResource,
                resources: e.resources,
                scroll: a._shouldScrollSchedule,
                selected: a._selectedDateTime,
                width: t.width,
            });
        return qa(
            Nr,
            c({ ref: a._setEl }, i, {
                activeDate: a._active,
                calendarScroll: a._calendarScroll,
                calendarType: a._calendarType,
                colors: e.colors,
                context: e.context,
                cssClass: a._cssClass,
                downIcon: e.downIcon,
                dragData: t.labelDragData,
                dragToMove: e.dragToMove || e.externalDrag,
                endDay: a._rangeEndDay,
                eventRange: a._rangeType,
                eventRangeSize: a._showSchedule ? a._scheduleSize : a._showTimeline ? a._timelineSize : a._eventListSize,
                hasContent: a._showEventList || a._showSchedule || a._showTimeline,
                hasPicker: !0,
                height: e.height,
                invalid: e.invalid,
                instanceService: a._instanceService,
                labels: e.labels,
                labelList: a._calendarLabelList,
                labelsMap: a._labelsMap,
                marked: e.marked,
                marksMap: a._marksMap,
                max: e.max,
                min: e.min,
                mouseSwipe: (!e.dragToCreate && "single" !== e.clickToCreate) || (!a._showEventLabels && !a._showEventCount),
                mousewheel: e.mousewheel,
                navService: a._navService,
                navView: a._navView,
                nextIconH: e.nextIconH,
                nextIconV: e.nextIconV,
                nextPageText: e.nextPageText,
                noOuterChange: !a._showEventList,
                onCellHoverIn: a._onCellHoverIn,
                onCellHoverOut: a._onCellHoverOut,
                onDayClick: a._onDayClick,
                onDayDoubleClick: a._onDayDoubleClick,
                onDayRightClick: a._onDayRightClick,
                onGestureStart: a._onGestureStart,
                onLabelClick: a._onLabelClick,
                onLabelDoubleClick: a._onLabelDoubleClick,
                onLabelRightClick: a._onLabelRightClick,
                onLabelHoverIn: a._onLabelHoverIn,
                onLabelHoverOut: a._onLabelHoverOut,
                onLabelDelete: a._onEventDelete,
                onLabelUpdateStart: a._onLabelUpdateStart,
                onLabelUpdateMove: a._onLabelUpdateMove,
                onLabelUpdateEnd: a._onLabelUpdateEnd,
                onLabelUpdateModeOn: a._onLabelUpdateModeOn,
                onLabelUpdateModeOff: a._onLabelUpdateModeOff,
                onPageChange: a._onPageChange,
                onPageLoaded: a._onPageLoaded,
                onPageLoading: a._onPageLoading,
                onResize: a._onResize,
                pageLoad: a._pageLoad,
                prevIconH: e.prevIconH,
                prevIconV: e.prevIconV,
                prevPageText: e.prevPageText,
                resourcesMap: a._resourcesMap,
                responsiveStyle: !0,
                renderHeader: n ? n.header : e.renderHeader,
                renderDayContent: n ? n.dayContent : e.renderDayContent,
                renderLabel: n ? n.label : e.renderLabel,
                renderLabelContent: n ? n.labelContent : e.renderLabelContent,
                selectedDates: a._selectedDates,
                selectView: _s,
                showCalendar: a._showCalendar,
                showControls: e.showControls,
                showLabelCount: a._showEventCount,
                showOuterDays: a._showOuterDays,
                showSchedule: a._showSchedule || a._showTimeline,
                showToday: e.showToday,
                showWeekNumbers: a._showWeekNumbers,
                size: a._calendarSize,
                startDay: a._rangeStartDay,
                swipe: !t.isTouchDrag,
                upIcon: e.upIcon,
                valid: e.valid,
                weeks: a._calendarSize,
                width: e.width,
                eventText: e.eventText,
                eventsText: e.eventsText,
                fromText: e.fromText,
                moreEventsPluralText: e.moreEventsPluralText,
                moreEventsText: e.moreEventsText,
                todayText: e.todayText,
                toText: e.toText,
                weekText: e.weekText,
                yearSuffix: e.yearSuffix,
            }),
            a._showDate &&
                qa(
                    "div",
                    { className: "mbsc-schedule-date-header mbsc-flex" + a._theme + a._hb },
                    a._showSchedule && !a._showCalendar && e.resources && qa("div", { className: "mbsc-schedule-time-col" }),
                    qa("div", { className: "mbsc-schedule-date-header-text mbsc-flex-1-1" + a._theme }, a._selectedDateHeader),
                    a._showSchedule && !a._showCalendar && e.resources && qa("div", { className: "mbsc-schedule-fake-scroll-y" })
                ),
            a._showEventList && qa("div", { className: "mbsc-flex-1-1 mbsc-event-list" + (t.isListScrollable ? " mbsc-event-list-scroll" : ""), dangerouslySetInnerHTML: a._eventListHTML, onScroll: a._onScroll, ref: a._setList }, s),
            a._showSchedule &&
                qa(
                    zl,
                    c({}, r, {
                        endDay: a._scheduleEndDay,
                        endTime: a._scheduleEndTime,
                        maxEventStack: a._scheduleMaxEventStack,
                        minEventWidth: a._scheduleMinEventWidth,
                        renderDayContent: n ? n.dayContent : e.renderDayContent,
                        showAllDay: a._showScheduleAllDay,
                        showDays: a._showScheduleDays,
                        size: a._scheduleSize,
                        startDay: a._scheduleStartDay,
                        startTime: a._scheduleStartTime,
                        timeCellStep: a._scheduleTimeCellStep,
                        timeLabelStep: a._scheduleTimeLabelStep,
                        timezones: a._scheduleTimezones,
                        type: a._scheduleType,
                        onWeekDayClick: a._onWeekDayClick,
                    })
                ),
            a._showTimeline &&
                qa(
                    Al,
                    c({}, r, {
                        connections: e.connections,
                        downIcon: e.chevronIconDown,
                        dragBetweenSlots: e.dragBetweenSlots,
                        dragToCreate: !e.slots && e.dragToCreate,
                        dragToResize: !e.slots && e.dragToResize,
                        endDay: a._timelineEndDay,
                        endTime: a._timelineEndTime,
                        eventList: a._timelineListing,
                        maxEventStack: a._timelineMaxEventStack,
                        nextIcon: e.nextIconH,
                        nextIconRtl: e.prevIconH,
                        onResourceCollapse: a._proxy,
                        onResourceExpand: a._proxy,
                        quarterText: e.quarterText,
                        renderDayFooter: n ? n.dayFooter : e.renderDayFooter,
                        renderHour: n ? n.hour : e.renderHour,
                        renderHourFooter: n ? n.hourFooter : e.renderHourFooter,
                        renderMonth: n ? n.month : e.renderMonth,
                        renderMonthFooter: n ? n.monthFooter : e.renderMonthFooter,
                        renderQuarter: n ? n.quarter : e.renderQuarter,
                        renderQuarterFooter: n ? n.quarterFooter : e.renderQuarterFooter,
                        renderWeek: n ? n.week : e.renderWeek,
                        renderWeekFooter: n ? n.weekFooter : e.renderWeekFooter,
                        renderYear: n ? n.year : e.renderYear,
                        renderYearFooter: n ? n.yearFooter : e.renderYearFooter,
                        renderResourceFooter: n ? n.resourceFooter : e.renderResourceFooter,
                        renderResourceHeader: n ? n.resourceHeader : e.renderResourceHeader,
                        renderSidebar: n ? n.sidebar : e.renderSidebar,
                        renderSidebarFooter: n ? n.sidebarFooter : e.renderSidebarFooter,
                        renderSidebarHeader: n ? n.sidebarHeader : e.renderSidebarHeader,
                        renderSlot: n ? n.slot : e.renderSlot,
                        resolution: a._timelineResolution,
                        resolutionVertical: a._timelineResolutionVertical,
                        rowHeight: a._timelineRowHeight,
                        weekNumbers: a._showTimelineWeekNumbers,
                        weekText: e.weekText,
                        size: a._timelineSize,
                        slots: e.slots,
                        startDay: a._timelineStartDay,
                        startTime: a._timelineStartTime,
                        timeCellStep: a._timelineTimeCellStep,
                        timeLabelStep: a._timelineTimeLabelStep,
                        type: a._timelineType,
                        virtualScroll: !a._print && a._timelineVirtualScroll,
                    })
                ),
            qa(
                _r,
                {
                    anchor: a._anchor,
                    closeOnScroll: !0,
                    contentPadding: !1,
                    context: t.popoverContext || e.context,
                    cssClass: "mbsc-calendar-popup " + (t.popoverHidden ? "mbsc-popover-hidden " : "") + a._popoverClass,
                    display: "anchored",
                    isOpen: t.showPopover,
                    locale: e.locale,
                    maxHeight: "24em",
                    onClose: a._onPopoverClose,
                    rtl: e.rtl,
                    scrollLock: !1,
                    showOverlay: !1,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                },
                t.popoverList &&
                    qa(
                        pl,
                        { ref: a._setPopoverList, theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, className: "mbsc-popover-list" },
                        t.popoverList.map(function (s, i) {
                            return Wl(a, s, i, t.popoverDate, e, !0, n);
                        })
                    )
            ),
            t.labelDragData && t.labelDragData.draggedEvent && !t.isTouchDrag && qa("div", { className: "mbsc-calendar-dragging" })
        );
    }
    var Bl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._instanceService = new Pi()), t;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e, t) {
                    return Ul(e, t, this);
                }),
                t
            );
        })(ml),
        jl = {
            before: function (e, t) {
                t.selectedDate && ((t.defaultSelectedDate = t.selectedDate), delete t.selectedDate);
            },
        };
    var Kl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return e.children || "";
                }),
                t
            );
        })(il),
        Xl = {
            before: function (e, t) {
                t.element = e;
            },
        },
        Jl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-draggable]"), (t._renderOpt = Xl), t;
        })(Kl),
        ql = Io(Jl, Xl),
        Gl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onExternalDrag = function (e) {
                        var a,
                            n = t.s.element || t._el,
                            s = function () {
                                return e.endY < t._elBottom && e.endY > t._elTop && e.endX > t._elLeft && e.endX < t._elRight;
                            };
                        switch (e.eventName) {
                            case "onDragStart":
                                if (n) {
                                    var i = n.getBoundingClientRect();
                                    (t._elTop = i.top), (t._elBottom = i.bottom), (t._elLeft = i.left), (t._elRight = i.right), (t._isItemIn = t._isOwner = s());
                                }
                                break;
                            case "onDragMove":
                                (a = s()) && !t._isItemIn
                                    ? t._hook("onItemDragEnter", { clone: e.clone, data: e.dragData, domEvent: e.domEvent })
                                    : !a && t._isItemIn && t._hook("onItemDragLeave", { clone: e.clone, data: e.dragData, domEvent: e.domEvent }),
                                    (t._isItemIn = a);
                                break;
                            case "onDragEnd":
                                t._isItemIn && !t._isOwner && (e.from && (e.from._eventDropped = !0), t._hook("onItemDrop", { clone: e.clone, data: e.dragData, domEvent: e.domEvent })), (t._isItemIn = !1);
                        }
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._mounted = function () {
                    this._unsubscribe = al(this._onExternalDrag);
                }),
                (t.prototype._destroy = function () {
                    this._unsubscribe && nl(this._unsubscribe);
                }),
                (t._name = "Dropcontainer"),
                t
            );
        })(Xn);
    var Zl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return e.children || "";
                }),
                t
            );
        })(Gl),
        Ql = {
            before: function (e, t) {
                t.element = e;
            },
        },
        $l = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-dropcontainer]"), (t._renderOpt = Ql), t;
        })(Zl),
        ec = Io($l, Ql),
        tc = Io(Bl, jl),
        ac = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-button]"), (t._renderOpt = Zi), t;
        })(Gi),
        nc = Io(ac, Zi),
        sc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var a = t.s,
                            n = e.target.checked;
                        a.checked === ie && t.setState({ checked: n }), t._change(n), a.onChange && a.onChange(e);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._input, {
                        click: !0,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onPress: function () {
                            e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var a = e.disabled === ie ? t.disabled : ge(e.disabled),
                        n = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right",
                        s = e.modelValue !== ie ? e.modelValue : e.checked;
                    (this._disabled = a),
                        (this._checked = s !== ie ? ge(s) : t.checked === ie ? ge(e.defaultChecked) : t.checked),
                        (this._cssClass = "mbsc-checkbox mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-checkbox-" + n + (a ? " mbsc-disabled" : "")),
                        (this._boxClass =
                            "mbsc-checkbox-box" +
                            this._theme +
                            " mbsc-checkbox-box-" +
                            n +
                            (t.hasFocus && !a ? " mbsc-focus" : "") +
                            (t.isActive && !a ? " mbsc-active" : "") +
                            (e.color ? " mbsc-checkbox-box-" + e.color : "") +
                            (a ? " mbsc-disabled" : "") +
                            (this._checked ? " mbsc-checked" : ""));
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                (t.defaults = { position: "start" }),
                (t._name = "Checkbox"),
                t
            );
        })(Xn);
    var ic = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this.setState({ checked: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t, a) {
                        var n = t.props;
                        n.children, n.className, n.color, n.defaultChecked;
                        var s = n.description,
                            i = n.hasChildren;
                        n.inputStyle;
                        var r = n.label;
                        n.modelValue, n.onChange, n.position, n.rtl, n.theme, n.themeVariant;
                        var o = d(n, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return qa(
                            "label",
                            { className: t._cssClass },
                            qa("input", c({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: t._onChange, disabled: t._disabled, checked: t._checked, ref: t._setInput }, o)),
                            qa("span", { className: t._boxClass }),
                            (r || i) && qa("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, r),
                            s && qa("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, s),
                            a
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(sc),
        rc = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        oc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-checkbox]"), (t._renderOpt = rc), t;
        })(ic),
        lc = Io(oc, rc),
        cc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "select"), t;
            }
            return l(t, e), (t._name = "Dropdown"), t;
        })(Jr),
        dc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "textarea"), t;
            }
            return l(t, e), (t._name = "Textarea"), t;
        })(Jr),
        hc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-input]"), (t._renderOpt = qr), t;
        })(Jr),
        uc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-dropdown]"), (t._renderOpt = Gr), t;
        })(cc),
        mc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-textarea]"), (t._renderOpt = Zr), t;
        })(dc),
        _c = Io(hc, qr),
        pc = Io(uc, Gr),
        vc = Io(mc, qr),
        fc = [],
        gc = [],
        yc = v && !!ra.Promise;
    function bc(e, t, a, n, s) {
        return c(
            {
                closeOnOverlayClick: !1,
                context: t.context,
                cssClass: "mbsc-alert",
                display: t.display || "center",
                onClose: function () {
                    e.shift();
                },
                onClosed: function () {
                    Dc(t, n, s);
                },
                theme: t.theme,
                themeVariant: t.themeVariant,
            },
            a
        );
    }
    function xc(e, t, a, n) {
        return bc(
            gc,
            e,
            {
                animation: e.animation || (n ? "pop" : ie),
                buttons: [],
                closeOnOverlayClick: !1,
                contentPadding: n,
                cssClass: "mbsc-" + (n ? "toast" : "snackbar") + " mbsc-" + (e.color ? e.color : "color-none") + " " + (e.cssClass || ""),
                display: e.display || "bottom",
                focusOnClose: !1,
                focusOnOpen: !1,
                focusTrap: !1,
                onOpen: function (t, a) {
                    !(function (e, t) {
                        !1 !== e.duration &&
                            setTimeout(function () {
                                t.close();
                            }, e.duration || 3e3);
                    })(e, a);
                },
                scrollLock: !1,
                setActive: !1,
                showOverlay: !1,
                touchUi: !0,
            },
            t,
            a
        );
    }
    function Dc(e, t, a, n) {
        a && a(n), e.callback && e.callback(n), e.onClose && e.onClose(n), fc.length ? fc[0].open() : gc.length && gc[0].open(), t && t();
    }
    function Tc(e, t, a) {
        return xc(e, t, a, !0);
    }
    function Sc(e, t, a) {
        return xc(e, t, a, !1);
    }
    function Cc(e, t, a) {
        return bc(fc, e, { buttons: ["ok"], cssClass: "mbsc-alert " + (e.cssClass || ""), okText: e.okText || "OK" }, t, a);
    }
    function wc(e, t, a) {
        var n = !1;
        return bc(
            fc,
            e,
            {
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-confirm " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (n = !0);
                },
                onClosed: function () {
                    Dc(e, t, a, n);
                },
            },
            t,
            a
        );
    }
    function kc(e, t, a, n) {
        var s;
        return bc(
            fc,
            e,
            {
                activeElm: "input",
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-prompt " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (s = !0);
                },
                onClosed: function () {
                    Dc(e, t, a, s && n ? n() : null);
                },
            },
            t,
            a
        );
    }
    function Mc(e) {
        fc.length || e.open(), fc.push(e);
    }
    function Ec(e) {
        var t = gc[0];
        gc.push(e), fc.length || (t ? t.close() : e.open());
    }
    function Nc(e, t) {
        var a;
        return (
            yc
                ? (a = new Promise(function (a) {
                      e(t, a);
                  }))
                : e(t, xe),
            a
        );
    }
    function Ic(e) {
        return qa("div", { className: "mbsc-alert-content" }, e.title && qa("h2", { className: "mbsc-alert-title" }, e.title), qa("p", { className: "mbsc-alert-message" }, " ", e.message || "", " "));
    }
    function Lc(e, t, a, n, s, i, r) {
        if (ia) {
            var o = ia.createElement("div"),
                l = a(
                    t,
                    function () {
                        setTimeout(function () {
                            var e;
                            (e = o)._children && bn(null, e);
                        });
                    },
                    s,
                    r
                );
            bn(
                qa(
                    _r,
                    c(
                        {
                            onInit: function (e, t) {
                                i && i(t), n(t);
                            },
                        },
                        l
                    ),
                    e
                ),
                o
            );
        }
    }
    function Hc(e, t) {
        Lc(
            (function (e) {
                return qa("div", { className: "mbsc-toast-background mbsc-toast-message" }, e.message || "");
            })(e),
            e,
            Tc,
            Ec,
            t
        );
    }
    function Oc(e, t) {
        var a,
            n = (function (e, t) {
                return qa(
                    "div",
                    { className: "mbsc-toast-background mbsc-snackbar-cont mbsc-flex" },
                    qa("div", { className: "mbsc-snackbar-message mbsc-flex-1-1" }, e.message || ""),
                    e.button && qa(Gi, { className: "mbsc-snackbar-button", icon: e.button.icon, onClick: t, theme: e.theme, themeVariant: e.themeVariant, variant: "flat" }, e.button.text)
                );
            })(e, function () {
                a && (a.close(), e.button && e.button.action && e.button.action());
            });
        Lc(n, e, Sc, Ec, t, function (e) {
            a = e;
        });
    }
    function Yc(e, t) {
        Lc(Ic(e), e, Cc, Mc, t);
    }
    function Pc(e, t) {
        Lc(Ic(e), e, wc, Mc, t);
    }
    function Fc(e, t) {
        var a = e.value || "",
            n = function () {
                return a;
            };
        Lc(
            (function (e, t, a) {
                return qa(
                    "div",
                    { className: "mbsc-alert-content" },
                    e.title && qa("h2", { className: "mbsc-alert-title" }, e.title),
                    qa("p", { className: "mbsc-alert-message" }, " ", e.message || ""),
                    qa(Jr, { className: "mbsc-prompt-input", label: e.label, onInput: t, placeholder: e.placeholder || "", type: e.inputType, theme: e.theme, themeVariant: e.themeVariant, defaultValue: a() })
                );
            })(
                e,
                function (e) {
                    a = e.target.value;
                },
                n
            ),
            e,
            kc,
            Mc,
            t,
            ie,
            n
        );
    }
    var zc = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            l(t, e),
            (t.prototype._render = function (e) {
                this._cssClass = "mbsc-page mbsc-font " + this._className + this._theme + this._rtl;
            }),
            (t.defaults = {}),
            (t._name = "Page"),
            t
        );
    })(Xn);
    var Vc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, a) {
                        return qa(e.tag || "div", { className: t._cssClass, ref: t._setEl }, a);
                    })(e, this, e.children);
                }),
                t
            );
        })(zc),
        Rc = {
            hasChildren: !0,
            parentClass: "mbsc-page",
            before: function (e, t) {
                t.tag = e.nodeName.toLowerCase();
            },
        },
        Ac = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-page]"), (t._renderOpt = Rc), t;
        })(Vc),
        Wc = Io(Ac, Rc),
        Uc = 1,
        Bc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._onChange = function (e) {
                        var a = t.s,
                            n = e.target.checked;
                        t._change(n), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(n), a.onChange && a.onChange(e);
                    }),
                    (t._onValueChange = function (e) {
                        var a = t.s,
                            n = e === t._value;
                        a.checked === ie && t.setState({ checked: n }), t._change(n);
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._groupOptions = function (e) {
                    var t = e.color,
                        a = e.disabled,
                        n = e.name,
                        s = e.onChange,
                        i = e.position,
                        r = e.rtl,
                        o = e.value,
                        l = this.s,
                        c = this.state,
                        d = r === ie ? l.rtl : r,
                        h = t === ie ? l.color : t,
                        u = "start" === (i === ie ? l.position : i) ? (l.rtl ? "right" : "left") : l.rtl ? "left" : "right",
                        m = a === ie ? (l.disabled === ie ? c.disabled : ge(l.disabled)) : ge(a),
                        _ = l.modelValue !== ie ? l.modelValue === l.value : l.checked,
                        p = _ !== ie ? ge(_) : c.checked === ie ? ge(l.defaultChecked) : c.checked;
                    (this._id = l.id === ie ? this._id || "mbsc-radio-" + Uc++ : l.id),
                        (this._value = l.value === ie ? this._id : l.value),
                        (this._onGroupChange = s),
                        (this._name = n === ie ? l.name : n),
                        (this._rtl = d ? " mbsc-rtl" : " mbsc-ltr"),
                        (this._checked = o === ie ? p : o === this._value),
                        (this._disabled = m),
                        (this._cssClass = "mbsc-radio mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-radio-" + u + (m ? " mbsc-disabled" : "")),
                        (this._boxClass =
                            "mbsc-radio-box" +
                            this._theme +
                            " mbsc-radio-box-" +
                            u +
                            (c.hasFocus && !m ? " mbsc-focus" : "") +
                            (c.isActive && !m ? " mbsc-active" : "") +
                            (h ? " mbsc-radio-box-" + h : "") +
                            (m ? " mbsc-disabled" : "") +
                            (this._checked ? " mbsc-checked" : ""));
                }),
                (t.prototype._toggle = function (e) {
                    this.s.checked === ie && this.setState({ checked: e }), e && po(this._name, this._value);
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ji(this._input, {
                        click: !0,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onPress: function () {
                            e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._updated = function () {
                    this._name && !this._unsubscribe && (this._unsubscribe = mo(this._name, this._onValueChange));
                }),
                (t.prototype._destroy = function () {
                    this._unsubscribe && (_o(this._name, this._unsubscribe), (this._unsubscribe = ie)), this._unlisten && this._unlisten();
                }),
                (t.defaults = { position: "start" }),
                (t._name = "Radio"),
                t
            );
        })(Xn);
    var jc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this._toggle(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    var a = this;
                    return qa(ho.Consumer, null, function (t) {
                        return (function (e, t, a, n) {
                            var s = t.props;
                            s.children, s.className, s.color, s.defaultChecked;
                            var i = s.description,
                                r = s.hasChildren,
                                o = s.label;
                            s.modelValue, s.onChange, s.position, s.rtl, s.theme, s.themeVariant;
                            var l = d(s, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                            return (
                                t._groupOptions(n),
                                qa(
                                    "label",
                                    { className: t._cssClass },
                                    qa("input", c({ checked: t._checked, className: "mbsc-form-control-input mbsc-reset", disabled: t._disabled, name: t._name, onChange: t._onChange, type: "radio", value: t._value, ref: t._setInput }, l)),
                                    qa("span", { className: t._boxClass }),
                                    (o || r) && qa("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, o),
                                    i && qa("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, i),
                                    a
                                )
                            );
                        })(0, a, e.children, t);
                    });
                }),
                t
            );
        })(Bc),
        Kc = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        Xc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-radio]"), (t._renderOpt = Kc), t;
        })(jc),
        Jc = Io(Xc, Kc),
        qc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-segmented]"), (t._renderOpt = To), t;
        })(Do),
        Gc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-segmented-group]"), (t._renderOpt = So), t;
        })(yo),
        Zc = Io(qc, To),
        Qc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var a = t.s,
                            n = t._round(+e.target.value);
                        (e.target.value = n + ""), a.value === ie && t.setState({ value: n }), t._change(n), a.onChange && a.onChange(e);
                    }),
                    (t._onMinusClick = function () {
                        t._setValue(t._value - t._step);
                    }),
                    (t._onPlusClick = function () {
                        t._setValue(t._value + t._step);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._onLabelClick = function (e) {
                        e.preventDefault();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._mounted = function () {
                    Sa(this._input, Os, this._onChange);
                }),
                (t.prototype._render = function (e, t) {
                    (this._max = pe(e.max) ? 100 : +e.max), (this._min = pe(e.min) ? 0 : +e.min), (this._step = pe(e.step) ? 1 : +e.step);
                    var a = e.disabled === ie ? t.disabled : ge(e.disabled),
                        n = e.defaultValue !== ie ? e.defaultValue : this._min || 0,
                        s = e.modelValue !== ie ? e.modelValue : e.value,
                        i = s !== ie ? s : t.value !== ie ? t.value : n;
                    (this._value = this._round(i)),
                        (this._changed = this._value !== +i),
                        (this._disabled = a),
                        (this._disabledMinus = this._value === this._min || a),
                        (this._disabledPlus = this._value === this._max || a),
                        (this._cssClass = "mbsc-stepper mbsc-form-control-wrapper mbsc-font mbsc-" + (e.color || "color-none") + this._theme + this._rtl + this._hb + " mbsc-stepper-" + e.inputPosition + (a ? " mbsc-disabled" : ""));
                }),
                (t.prototype._updated = function () {
                    (this._input.value = this._value + ""), this._changed && (za(this._input, Os), (this._changed = !1));
                }),
                (t.prototype._destroy = function () {
                    Ca(this._input, Os, this._onChange);
                }),
                (t.prototype._round = function (e) {
                    var t = this._step,
                        a = Math.abs(t) < 1 ? (t + "").split(".")[1].length : 0;
                    return +Math.min(this._max, Math.max(Math.round(e / t) * t, this._min)).toFixed(a);
                }),
                (t.prototype._setValue = function (e) {
                    var t = +this._input.value,
                        a = this._round(e);
                    t !== a && ((this._input.value = a + ""), za(this._input, Os));
                }),
                (t.defaults = { inputPosition: "center" }),
                (t._name = "Stepper"),
                t
            );
        })(Xn);
    var $c = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (e) {
                        (this._value = e), this.setState({ value: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var a = t.props;
                        a.children, a.className, a.color, a.defaultValue;
                        var n = a.description;
                        a.inputClass, a.inputPosition;
                        var s = a.label;
                        a.onChange, a.rtl, a.theme, a.themeVariant, a.value;
                        var i = d(a, ["children", "className", "color", "defaultValue", "description", "inputClass", "inputPosition", "label", "onChange", "rtl", "theme", "themeVariant", "value"]),
                            r = t._theme;
                        return qa(
                            "label",
                            { className: t._cssClass, onClick: t._onLabelClick },
                            qa(
                                "div",
                                { className: "mbsc-stepper-content" },
                                s && qa("span", { className: "mbsc-stepper-label" + r + (t._disabled ? " mbsc-disabled" : "") }, s),
                                n && qa("span", { className: "mbsc-description" + r + (t._disabled ? " mbsc-disabled" : "") }, n)
                            ),
                            qa(
                                "div",
                                { className: "mbsc-stepper-control mbsc-flex" + r + t._rtl },
                                qa(
                                    Gi,
                                    { className: "mbsc-stepper-minus mbsc-stepper-button", disabled: t._disabledMinus, onClick: t._onMinusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    qa("span", { className: "mbsc-stepper-inner" + r }, "–")
                                ),
                                qa(
                                    "input",
                                    c(
                                        {
                                            className: "mbsc-stepper-input" + (t._disabled ? " mbsc-disabled" : "") + " " + (e.inputClass || "") + r,
                                            disabled: t._disabled,
                                            max: t._max,
                                            min: t._min,
                                            ref: t._setInput,
                                            step: t._step,
                                            type: "number",
                                        },
                                        i
                                    )
                                ),
                                qa(
                                    Gi,
                                    { className: "mbsc-stepper-plus mbsc-stepper-button", disabled: t._disabledPlus, onClick: t._onPlusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    qa("span", { className: "mbsc-stepper-inner" + r }, "+")
                                )
                            )
                        );
                    })(e, this);
                }),
                t
            );
        })(Qc),
        ed = {
            readProps: ["disabled", "type", "min", "max", "step"],
            renderToParent: !0,
            before: function (e, t) {
                var a = e.parentNode,
                    n = ia.createElement("div");
                a.insertBefore(n, e), n.appendChild(e), (t.defaultValue = +e.value), (t.inputClass = e.getAttribute("class") || "");
                var s = ia.createElement("div");
                a.insertBefore(s, n);
            },
        },
        td = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-stepper]"), (t._renderOpt = ed), t;
        })($c),
        ad = Io(td, ed),
        nd = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var a = t.s,
                            n = e.target.checked;
                        e.stopPropagation(), a.checked === ie && t.setState({ checked: n }), t._change(n), a.onChange && a.onChange(e);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._setHandleCont = function (e) {
                        t._handleCont = e;
                    }),
                    (t._setHandle = function (e) {
                        t._handle = e;
                    }),
                    (t._onLabelClick = function (e) {
                        e.preventDefault();
                    }),
                    t
                );
            }
            return (
                l(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._setHandleLeft = function (e) {
                    this._handle.style.left = e + "%";
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        a,
                        n,
                        s,
                        i = this;
                    Sa(this._input, Ys, this._onChange),
                        (this._inputUnlisten = Ji(this._input, {
                            onBlur: function () {
                                i.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                i._disabled || i.setState({ hasFocus: !0 });
                            },
                        })),
                        (this._unlisten = Ji(this._el, {
                            click: !1,
                            onEnd: function (e) {
                                if (!i._disabled && !s) {
                                    if (n) {
                                        var t = Math.abs(e.deltaX) < 3 && Math.abs(e.deltaY) < 3,
                                            r = +new Date() - a > 300,
                                            o = t && !r ? !i._checked : i._handleLeft >= 50;
                                        o !== i._checked && (i._input.click(), i._change(o)), (n = !1);
                                    }
                                    i.setState({ dragging: !1, isActive: !1 });
                                }
                            },
                            onMove: function (a) {
                                var r = a.domEvent,
                                    o = i.state.dragging;
                                if (!i._disabled && !s && n && e && (Math.abs(a.deltaX) > 5 && ((o = !0), i.setState({ dragging: !0 })), o)) {
                                    r.cancelable && r.preventDefault();
                                    var l = ((a.startX - t) / e) * 100,
                                        c = Math.max(Math.min(l, 100), 0) + (a.deltaX / e) * 100,
                                        d = Math.max(Math.min(c, 100), 0);
                                    (i._handleLeft = d), i._setHandleLeft(d);
                                }
                                !o && !s && Math.abs(a.deltaY) > 7 && r.type === Zs && ((s = !0), i.setState({ isActive: !1 }));
                            },
                            onStart: function (r) {
                                i._disabled ||
                                    ((s = !1),
                                    (e = i._handleCont.clientWidth),
                                    (t = Ya(i._handleCont).left),
                                    (a = +new Date()),
                                    (r.domEvent.target === i._handleCont || i._handleCont.contains(r.domEvent.target)) && (n = !0),
                                    i.setState({ isActive: !0 }));
                            },
                        })),
                        this._setHandleLeft(this._handleLeft);
                }),
                (t.prototype._render = function (e, t) {
                    var a = e.disabled === ie ? t.disabled : ge(e.disabled),
                        n = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right",
                        s = e.color !== ie ? " mbsc-switch-" + e.color : "",
                        i = e.modelValue !== ie ? e.modelValue : e.checked;
                    if (
                        ((this._disabled = a),
                        (this._checked = i !== ie ? ge(i) : t.checked === ie ? ge(e.defaultChecked) : t.checked),
                        (this._cssClass = "mbsc-switch mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-switch-" + n + (a ? " mbsc-disabled" : "")),
                        !t.dragging)
                    ) {
                        var r = this._checked ? 100 : 0;
                        r !== this._handleLeft && this._handle && this._setHandleLeft(r), (this._handleLeft = r);
                    }
                    (this._handleContClass =
                        "mbsc-switch-track mbsc-switch-track-" + n + this._theme + s + (this._checked ? " mbsc-checked" : "") + (a ? " mbsc-disabled" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : "")),
                        (this._handleClass =
                            "mbsc-switch-handle" +
                            this._theme +
                            s +
                            (t.dragging ? "" : " mbsc-switch-handle-animate") +
                            (this._checked ? " mbsc-checked" : "") +
                            (this.state.isActive ? " mbsc-active" : "") +
                            (a ? " mbsc-disabled" : "") +
                            (this.state.hasFocus ? " mbsc-focus" : ""));
                }),
                (t.prototype._destroy = function () {
                    Ca(this._input, Ys, this._onChange), this._unlisten && this._unlisten(), this._inputUnlisten && this._inputUnlisten();
                }),
                (t.defaults = { position: "end" }),
                (t._name = "Switch"),
                t
            );
        })(Xn);
    var sd = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                l(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this.setState({ checked: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t, a) {
                        var n = t.props;
                        n.children, n.className, n.color, n.defaultChecked;
                        var s = n.description,
                            i = n.hasChildren;
                        n.inputStyle;
                        var r = n.label;
                        n.modelValue, n.onChange, n.position, n.rtl, n.theme, n.themeVariant;
                        var o = d(n, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return qa(
                            "label",
                            { className: t._cssClass, ref: t._setEl, onClick: t._onLabelClick },
                            qa("input", c({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: xe, disabled: t._disabled, checked: t._checked, ref: t._setInput }, o)),
                            qa("span", { className: t._handleContClass, ref: t._setHandleCont }, qa("span", { className: t._handleClass, ref: t._setHandle })),
                            (r || i) && qa("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, r),
                            s && qa("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, s),
                            a
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(nd),
        id = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        rd = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return l(t, e), (t._selector = "[mbsc-switch]"), (t._renderOpt = id), t;
        })(sd),
        od = Io(rd, id),
        ld = Io(_r, pr);
    En(ac),
        En(oc),
        En(hc),
        En($l),
        En(uc),
        En(Jl),
        En(mc),
        En(Ac),
        En(Xc),
        En(qc),
        En(Gc),
        En(td),
        En(rd),
        En(Vo),
        En(Ro),
        En(Ao),
        En(zo),
        (t.fw = "javascript"),
        (w.datetime = sa),
        (w.http = Wa),
        (e.Button = ac),
        (e.CalendarNav = zo),
        (e.CalendarNext = Vo),
        (e.CalendarPrev = Ro),
        (e.CalendarToday = Ao),
        (e.Checkbox = oc),
        (e.Datepicker = ko),
        (e.Draggable = Jl),
        (e.Dropcontainer = $l),
        (e.Dropdown = uc),
        (e.Eventcalendar = Bl),
        (e.Input = hc),
        (e.Page = Ac),
        (e.Popup = _r),
        (e.Radio = Xc),
        (e.Segmented = qc),
        (e.SegmentedGroup = Gc),
        (e.Select = Qo),
        (e.Stepper = td),
        (e.Switch = rd),
        (e.Textarea = mc),
        (e.alert = function (e) {
            return Nc(Yc, e);
        }),
        (e.autoDetect = M),
        (e.button = nc),
        (e.calendarNav = jo),
        (e.calendarNext = Wo),
        (e.calendarPrev = Uo),
        (e.calendarToday = Bo),
        (e.checkbox = lc),
        (e.confirm = function (e) {
            return Nc(Pc, e);
        }),
        (e.createCustomTheme = I),
        (e.datepicker = Ko),
        (e.datetime = sa),
        (e.draggable = ql),
        (e.dropcontainer = ec),
        (e.dropdown = pc),
        (e.enhance = Nn),
        (e.eventcalendar = tc),
        (e.formSwitch = od),
        (e.formatDate = Jt),
        (e.getAutoTheme = N),
        (e.getInst = function (e, t) {
            return t ? e.__mbscFormInst : e.__mbscInst;
        }),
        (e.getJson = Aa),
        (e.globalChanges = E),
        (e.hijriCalendar = _t),
        (e.http = Wa),
        (e.input = _c),
        (e.jalaliCalendar = ze),
        (e.locale = vt),
        (e.localeAr = G),
        (e.localeBg = Z),
        (e.localeCa = Q),
        (e.localeCs = $),
        (e.localeDa = ee),
        (e.localeDe = te),
        (e.localeEl = ae),
        (e.localeEn = pt),
        (e.localeEnGB = ne),
        (e.localeEs = se),
        (e.localeFa = Ve),
        (e.localeFi = Re),
        (e.localeFr = Ae),
        (e.localeHe = We),
        (e.localeHi = Ue),
        (e.localeHr = Be),
        (e.localeHu = je),
        (e.localeIt = Ke),
        (e.localeJa = Xe),
        (e.localeKo = Je),
        (e.localeLt = qe),
        (e.localeNl = Ge),
        (e.localeNo = Ze),
        (e.localePl = Qe),
        (e.localePtBR = et),
        (e.localePtPT = $e),
        (e.localeRo = tt),
        (e.localeRu = at),
        (e.localeRuUA = nt),
        (e.localeSk = st),
        (e.localeSr = it),
        (e.localeSv = rt),
        (e.localeTh = ot),
        (e.localeTr = lt),
        (e.localeUa = ct),
        (e.localeVi = dt),
        (e.localeZh = ht),
        (e.luxonTimezone = Oo),
        (e.momentTimezone = Fo),
        (e.options = C),
        (e.page = Wc),
        (e.parseDate = Gt),
        (e.platform = L),
        (e.popup = ld),
        (e.prompt = function (e) {
            return Nc(Fc, e);
        }),
        (e.radio = Jc),
        (e.registerComponent = En),
        (e.remote = t),
        (e.segmented = Zc),
        (e.select = el),
        (e.setOptions = function (e) {
            for (var t = 0, a = Object.keys(e); t < a.length; t++) {
                var n = a[t];
                C[n] = e[n];
            }
            v && E.next(C);
        }),
        (e.snackbar = function (e) {
            return Nc(Oc, e);
        }),
        (e.stepper = ad),
        (e.textarea = vc),
        (e.themes = k),
        (e.toast = function (e) {
            return Nc(Hc, e);
        }),
        (e.updateRecurringEvent = function (e, t, a, n, s, i, r) {
            var o,
                l = c({}, e),
                d = null,
                h = a && a.start,
                u = a && a.end,
                m = t && t.start,
                _ = ns(e.recurring);
            switch (s) {
                case "following":
                    if ((n ? (n.recurring && (o = ns(n.recurring)), delete (d = c({}, n)).id) : h && m && ((o = ss(_, h, m)), (d = c({}, a))), (_.until = Lt(Kt(m))), _.count)) {
                        var p = (t && t.nr) || 0;
                        o && (o.count = _.count - p), (_.count = p);
                    }
                    h && o && (o.from = h), d && o && (d.recurring = o), (l.recurring = _);
                    break;
                case "all":
                    if ((n ? ((h = n.start), (u = n.end), (l = c({}, n))) : a && h && u && m && ((l.allDay = a.allDay), (l.recurring = ss(_, h, m))), h && u)) {
                        var v = i && r ? { displayTimezone: i, timezonePlugin: r } : ie,
                            f = l.allDay ? ie : v,
                            g = e.allDay ? ie : v,
                            y = Kt(h, f),
                            b = Kt(u, f),
                            x = e.start,
                            D = e.end,
                            T = e.allDay && !l.allDay,
                            S = x && Kt(x, g),
                            C = m && Kt(m, g),
                            w = b - y,
                            k = S && C ? jt(f, +S + (C ? y - C : 0)) : y,
                            M = jt(f, +k + w);
                        Wt(x) || (!x && T) ? (l.start = Jt("HH:mm", y)) : x && (l.start = f ? k.toISOString() : k), Wt(D) || (!D && T) ? (l.end = Jt("HH:mm", b)) : D && (l.end = f ? M.toISOString() : M);
                    }
                    break;
                default:
                    var E = e.recurringException,
                        N = he(E) ? E.slice() : E ? [E] : [];
                    m && N.push(m), (l.recurringException = N), (d = n || a);
            }
            return { updatedEvent: l, newEvent: d };
        }),
        (e.util = w),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
