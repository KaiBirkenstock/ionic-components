import { toArray } from '../utils/helper';
var AndavisValidator = /** @class */ (function () {
    function AndavisValidator() {
    }
    AndavisValidator.nonEmptySelect = function (control) {
        if (control.value === 'please_choose') {
            return {
                selectAnItem: true
            };
        }
        return null;
    };
    AndavisValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    AndavisValidator.blinkId = function (control) {
        var toCheck = control.value.substring(0, control.value.length - 1).replace(/-/gi, ''), checkNo = Number(control.value.substring(control.value.length - 1));
        var sum = 0, multiplicator = 3, intArray = toArray(toCheck);
        intArray.reverse();
        intArray.forEach(function (i) {
            sum += i * multiplicator;
            multiplicator = multiplicator == 3 ? 1 : 3;
        });
        var retval = Number((10 - (sum % 10)) % 10);
        if (retval !== checkNo) {
            return { "incorrectBlinkIdFormat": true };
        }
        return null;
    };
    return AndavisValidator;
}());
export { AndavisValidator };
//# sourceMappingURL=validators.js.map