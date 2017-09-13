var url = "URL";

fetch(url, {
    method: 'POST',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        "login": "my_login",
        "password": "my_password"
    })
})
    .then(json)
    .then(function (data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });