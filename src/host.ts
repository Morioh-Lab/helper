export default (lnk) => {
    try {
        new URL(lnk).hostname;
    } catch (_) {
        return '';
    }
}