export default (lnk) => {
    try {
       return new URL(lnk).hostname;
    } catch (_) {
        return '';
    }
}