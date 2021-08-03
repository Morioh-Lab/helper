export default function (tag: string, attrs: any) {
    return new Promise((resolve, reject) => {
        let el; el = attrs.id ? document.getElementById(attrs.id) : null;

        if (el) return resolve(el);

        el = document.createElement(tag);
        Object.assign(el, attrs);

        el.onload = () => { resolve(el) };
        document.head.appendChild(el);

    });
};