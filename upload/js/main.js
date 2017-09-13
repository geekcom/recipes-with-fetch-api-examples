var url = "URL";

var input = document.querySelector('input[type="file"]')

var data = new FormData()
data.append('file', input.files[0])
data.append('user', 'hubot')

fetch(url, {
    method: 'POST',
    body: data
})