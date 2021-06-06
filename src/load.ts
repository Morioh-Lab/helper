export default function (url, callback, location = document.head) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var script = document.createElement('script');
    // script.type = 'text/javascript';
    script.src = url;
    script.async = true;

    script.onload = callback;
    // script.onreadystatechange = callback;

    location.appendChild(script);
    // document.head.appendChild(scriptTag);
};