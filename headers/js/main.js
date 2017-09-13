var headers = new Headers({ 'Content-Type': 'text/plain', 'X-Custom-Header': 'value' });

// add header properties
headers.append('X-Custom-Header', 'value');

// get a value
headers.get('Content-Type');

// "text/plain"
headers.set('Content-Type', 'application/json');
headers.has('Content-Type'); // true

// delete header properties
headers.delete('X-Custom-Header');

