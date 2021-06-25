export default function (url: string) {
    return new Promise((resolve, reject) => {
        let el;
        if ((/\.(js)$/i).test(url)) {
            el = document.createElement("script");
            el.src = url;
            el.async = true;
            el.type = "text/javascript";

        } else {
            el = document.createElement('link');
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el.href = url;
        }

        el.onload = () => { resolve(el) };
        document.head.appendChild(el);

    });
};