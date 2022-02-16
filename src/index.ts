

const trim = (input: string) => input.replace(/\r?\n|\r/g, ' ').replace(/ +/g, ' ');

const htmlToText = (html: string | null | undefined) => isBlank(html) ? '' : trim(html.replace(/<[^>]*>/g, ''));

const delay = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const isNullOrUndefined = (input: any) => input === undefined || input === null;

const isBlank = (input: string | null | undefined) => isNullOrUndefined(input) || /^[\s\xa0]*$/.test(input);

const isUrl = (input: string | null | undefined) => /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(input);

const isImage = (input: string | null | undefined) => (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i).test(input);

const isObjectID = (id: string | null | undefined) => /^[0-9a-fA-F]{24}$/.test(id);

const now = () => Math.floor(Date.now() / 1000);


const tt = (t: any = null, unix: boolean = true) => {

    var d = unix ? now() : Date.now();

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

const objectID = (id: string | null | undefined) => {
    if (isObjectID(id)) return id;
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
}

const LINK = (link: string, params: object = {}) => {
    try {
        let url = new URL(link);
        let query = url.searchParams;
        for (const key in params) {
            query.set(key, params[key]);
        }
        url.search = query.toString();
        return url;
    } catch (_) {
        return null;
    }
}

const host = (link: string) => {
    const url = LINK(link);
    return url ? url.hostname : null
};

const numberFormat = (number: any, padding: number = 2, dsep: string = '.', tsep: string = ',') => {

    if (isNaN(number) || number == null) return 0;

    number = number.toFixed(~~padding);
    tsep = typeof tsep == 'string' ? tsep : ',';

    var parts = number.split('.'),
        fnums = parts[0],
        decimals = parts[1] ? (dsep || '.') + parts[1] : '';

    return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;

}


const toKb = (num: number | null | undefined, suffix: any = undefined, decimal: number = 2) => {

    if (!isNaN(suffix) && !!suffix) {
        decimal = suffix;
        suffix = undefined;
    }

    if (isNaN(num) || num == null) return 0;
    var sizes = ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"];
    var k = 1000, dm = decimal || 2;

    if (num < k) return num;

    var i = suffix ? sizes.indexOf(suffix) : Math.floor(Math.log(num) / Math.log(k));
    //return parseFloat((num / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    return numberFormat((num / Math.pow(k, i)), dm) + sizes[i];

};

const debounce = (func: Function, wait: number) => {
    let timeout;
    return (...args) => {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


export { now, trim, htmlToText, isBlank, isImage, isUrl, isNullOrUndefined, isObjectID, objectID, debounce, delay, toKb, numberFormat, LINK, host }