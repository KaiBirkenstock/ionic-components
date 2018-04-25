import * as moment from 'moment';
import {monkey} from 'moment-round';
import {extendMoment} from 'moment-range';

// let moment = rawMoment;

moment.updateLocale('de', {
  months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  monthsShort: "Jan_Feb_Mrz_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Dez".split("_"),
  weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
  weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  week: {
    dow: 1,
    doy: 4
  }
});

moment.updateLocale('en', {
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  week: {
    dow: 1,
    doy: 4
  }
});

moment.locale(localStorage.getItem('lang'));

const rangeMoment: any = extendMoment(moment);

monkey(moment);

export {moment, rangeMoment};
