const http=new easyHTTP;

//get posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
if(err){
    console.log(err);
}
else{
    console.log(response);
}
});

//create data
//pravimo podatke za slanje, simuliramo novi post koji je napravljen
const data={
    title:'Custom post',
    body:'This is custom post'
};
//create post
//koristimo metodu iz nase biblioteke, callback funkcija proverava da li je doslo do greske
// po defoultu je null, ako ima neke vrednosti onda ce ispisati gresku, ako nema, ispisace post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log(post);
//   }
// });
//put post
// http.put('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log(post);
//   }
// });

//delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
if(err){
    console.log(err);
}
else{
    console.log(response);
}
});
