const http=new EasyHTTP;

// //ispisivanje niza korisnika
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

//pravljenje podatka koji saljemo u post i put zahtevu
const data={
    name:'John Doe',
    username:'johndoe',
    email:'jdoe@gmail.com'
}
// slanje post zahteva
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// //slanje put zahteva
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

//slanje delete zahteva
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));