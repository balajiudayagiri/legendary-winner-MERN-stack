fetch('https://example.com/', {
    credentials: 'include',
    headers: {
        'Access-Control-Allow-Origin': 'https://example.com/'
    }
})
    .then(res => res.json())
    .then(res => console.log(res))