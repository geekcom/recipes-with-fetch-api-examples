var url = "URL";

fetch(url, {
    method: 'POST',
    mode: 'cors', // cors or basic
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
    })
}).then(function (response) {
    // response
});
