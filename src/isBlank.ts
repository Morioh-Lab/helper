export default function (s) {
    return s === undefined || s === null || /^[\s\xa0]*$/.test(s);
}
