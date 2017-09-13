var url = "URL";
var form = document.querySelector('my-form');

fetch(url, {
    method: 'POST',
    body: new FormData(form)
}).then(function(response){
    //
});
