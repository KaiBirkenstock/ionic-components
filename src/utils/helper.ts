import {List} from 'immutable';
import {moment, rangeMoment} from './momentConfig';

export function toNumber(string: String) {
  return Number(string.replace(',', '.'));
}

export function toArray(iterable, start?, end?) {
  if (!iterable || !iterable.length) {
    return [];
  }
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }
  if (Array.prototype.slice) {
    return Array.prototype.slice.call(iterable, start || 0, end || iterable.length);
  }

  var array = [],
    i;
  start = start || 0;
  end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;
  for (i = start; i < end; i++) {
    array.push(iterable[i]);
  }
  return array;
}

export function objectToArray(object: object, keyName: string = 'label', valueName: string = 'value') {
  return Object.keys(object).map((key) => {
    let o = {};
    o[keyName] = object[key];
    o[valueName] = key;
    return o;
  })
}

export function decimalAdjust(type, value, exp = -2) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}


export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function addToList(state: List<any>, entities: List<any>) {
  return state.push(...entities.toArray());
}

export function deUmlaut(value) {
  value = value.toLowerCase();
  value = value.replace(/ä/g, 'ae');
  value = value.replace(/ö/g, 'oe');
  value = value.replace(/ü/g, 'ue');
  value = value.replace(/ß/g, 'ss');
  value = value.replace(/ /g, '_');
  value = value.replace(/\./g, '');
  value = value.replace(/,/g, '');
  value = value.replace(/\(/g, '');
  value = value.replace(/\)/g, '');
  return value;
}

export function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

export function getMoment(timeString: string) {
  let t = timeString.split(':');

  return moment().hours(Number(t[0])).minutes(Number(t[1])).seconds(0).milliseconds(0);
}

export function formatTime(time) {
  time = time || '00:00';
  return time.substr(0, 5);
}

export function calcDiffPercentage(value1: number, value2: number) {
  let diff = (((value1 / value2) * 100) - 100);
  diff = diff == Infinity ? 0 : diff;

  return decimalAdjust('round', diff);
}

/*
 @param1 value1 e.g. worklog.workedDuration
 @param2 value2 e.g. worklog.planneDuration
 */
export function getGoodWillValue(value1: number, value2: number, settings): boolean {
  let goodWillAbove = settings.get('approval_goodwill_above');
  let goodWillBelow = settings.get('approval_goodwill_below');

  let retVal = false;
  let diff = calcDiffPercentage(value1, value2);

  if (Math.sign(diff) == 1) {
    retVal = diff <= goodWillAbove;
  } else {
    retVal = Math.abs(diff) <= goodWillBelow;
  }
  return retVal;
}

export function reduce(entries, field = 'duration') {
  let value = entries.map(entry => entry[field]).reduce((sum: number, duration: number) => sum + duration);
  value = Math.round(value * 100) / 100;

  return isNaN(value) ? 0 : value;
}

export function getWorklogBorderColor(worklog, settings: any) {
  if (worklog.type !== 'Work') {
    return 'yellow';
  } else {
    let alerts = worklog.alerts.map(alert => alert.get('Type')).toSet();
    let hasAlerts = alerts.some(v => settings.get('alerts').includes(v));

    return getGoodWillValue(worklog.workedDuration, worklog.plannedDuration, settings) && !hasAlerts ? 'green' : 'red';
  }
}

export function detectIE() {
  const ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  const msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  // other browser
  return false;
}
