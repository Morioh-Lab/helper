
import numberFormat from './numberFormat';

export default function (num, suffix, decimal) {

    if (!isNaN(suffix) && !!suffix) {
        decimal = suffix;
        suffix = undefined;
    }

    if (isNaN(num) || num == null) return '';
    var sizes = ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"];
    var k = 1000, dm = decimal || 2;

    if (num < k) return num;

    var i = suffix ? sizes.indexOf(suffix) : Math.floor(Math.log(num) / Math.log(k));
    //return parseFloat((num / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    return numberFormat((num / Math.pow(k, i)), dm) + sizes[i];

};