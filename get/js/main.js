var url = "URL";

fetch(url)
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    })
    .catch(function (err) {
        console.error('Failed retrieving information', err);
    });
