export default function (link, key, value) {
    try {
        var url = new URL(link);
        var params = url.searchParams;
        params.set(key, value);
        url.search = params.toString();
        return url.toString();
    } catch (_) {
        return link;
    }


}