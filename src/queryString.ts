export default function (link: string, ...params: string[]) {
    try {
        let url = new URL(link);
        let query = url.searchParams;
        for (let i = 0; i < params.length; i++) {
            const p = params[i];
            query.set(p[0], p[1]);            
        }
       
        url.search = query.toString();
        return url.toString();
    } catch (_) {
        return link;
    }


}

// export default function (link, key, value) {
//     try {
//         var url = new URL(link);
//         var params = url.searchParams;
//         params.set(key, value);
//         url.search = params.toString();
//         return url.toString();
//     } catch (_) {
//         return link;
//     }


// }

