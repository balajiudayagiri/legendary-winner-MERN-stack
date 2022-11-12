
Promise.allSettled([
    fetch('https://dummyjson.com/products').then(res => res.json()),
    fetch('https://fakestoreapi.com/products').then(res => res.json()),
    fetch('https://reqres.in/api/users').then(res => res.json()),
    fetch('https://reqres.in/api/products').then(res => res.json()),
    fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json').then(res => res.json()),
    fetch('https://rickandmortyapi.com/api/').then(res => res.json()),
    fetch('https://api.publicapis.org/entries').then(res => res.json())
])
    .then(response => console.log(response))