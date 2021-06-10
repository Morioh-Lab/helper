export default function (t = null, unix = true) {

    var d = unix ? Math.floor(Date.now() / 1000) : Date.now();

    if (!t) return d;

    if (typeof t == 'number') return d + t;

    var regex = /^(?:\-?\d+\.?\d*|\d*\.?\d+)(y|d|h|m|s)$/i;

    if (regex.test(t)) {

        var num = parseInt(t.replace(/^(\-?\d+\.?\d*|\d*\.?\d+)(?:y|d|h|m|s)$/i, "$1")) * (unix ? 1 : 1000);
        var s = t.replace(regex, '$1').toLowerCase();

        switch (s) {

            case 'y': return d + num * 31104000; // 60 * 60 * 24 * 30 * 12                
            case 'd': return d + num * 86400;  // 60 * 60 * 24
            case 'h': return d + num * 3600;  // 60 * 60
            case 'm': return d + num * 60;  // 60
            case 's': return d + num;
            default: new Error("unknown exception of 'set operation'");
        }
    }

}