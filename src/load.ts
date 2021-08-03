export default function (url: string, id: string) {
    return new Promise((resolve, reject) => {
        let el; el = document.getElementById(id);
        if (el) {
            return resolve(el);
        }
        if ((/\.(js)$/i).test(url)) {
            el = document.createElement("script");
            el.id = id;
            el.src = url;
            el.async = true;
            el.type = "text/javascript";

        } else {
            el = document.createElement('link');
            el.id = id;
            el.type = 'text/css';
            el.rel = 'stylesheet';
            el.href = url;
        }

        el.onload = () => { resolve(el) };
        document.head.appendChild(el);

    });
};