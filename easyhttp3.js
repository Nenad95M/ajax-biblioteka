/*Savremena sintaksa za HTTP zahtev */

class EasyHTTP{
    //unutar klase pravimo get, post, put i delete metode
    //get zahtev
    //umesto obecanja, metode pretvaramo u asinhrone funkcije
   async get(url){
     
    const response=await fetch(url);
    const resData=await response.json();
    return resData;
   
    }
    //post zahtev
    //drugi parametar je podatak koji saljemo
  async post(url, data){
     const response=await fetch(url, {
         method:'POST',
         headers:{
             'Content-type':'application/json'
         },
         body: JSON.stringify(data)
     });
     const resData=await response.json();
     return resData;
    }
    //put zahtev
    //drugi parametar je podatak koji saljemo
   async put(url, data){
         const response= await fetch(url, {
                //definisemo metodu
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                //pretvaramo podatak u string i saljemo
                body:JSON.stringify(data)
            })
            const resData=await response.json();
            return resData;
        
    }
    //pravljenje delete zahteva
    async delete(url){
         const response= await fetch(url, {
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            });
        const resData= await 'Deleted...';
        return resData;
    }
}