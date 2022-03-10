/*Savremena sintaksa za HTTP zahtev */

class EasyHTTP{
    //unutar klase pravimo get, post, put i delete metode
    //get zahtev
    get(url){
        //pravimo novo obecanje koje vraca get metoda
        //ima dva parametra, resolve i reject
        return new Promise((resolve, reject)=>{    
            //fecujemo url  
            fetch(url)
            //string pretvaramo u json
            //ne koristim return unutar strelicaste f
            .then(res=>res.json())
            //kao ispunjenje obecanja dajemo podatke
            .then(data=>resolve(data))
            //hvatamo gresku ako je ima
            .catch(err=>reject(err));
        });
    }
    //post zahtev
    //drugi parametar je podatak koji saljemo
    post(url, data){
        return new Promise((resolve, reject)=>{      
            fetch(url, {
                method:'POST',
                headers:{'Content-type': 'application/json'}
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }
    //put zahtev
    //drugi parametar je podatak koji saljemo
    put(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                //definisemo metodu
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                //pretvaramo podatak u string i saljemo
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }
    //pravljenje delete zahteva
    delete(url){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                },
            })
            .then(res=>res.json())
            //posto brisemo nas odgovor ce biti samo string poruka 
            .then(data=>resolve('deleted'))
            .catch(err=>reject(err));
        });
    }
}