export default function (s) {
    return /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(s);
}

