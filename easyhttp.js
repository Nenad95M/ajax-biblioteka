//biblioteka koja koristi prototipsko nasledjivanje


function easyHTTP(){
    this.http=new XMLHttpRequest();
}

//Make an HTTP GET Request
easyHTTP.prototype.get=function(url, callback){
 this.http.open('GET', url, true);
 let self=this;
 this.http.onload=function(){
     if(self.http.status===200){
         callback(null, self.http.responseText);
     } else{
         callback('error: '+self.http.status);
     }
 }
 this.http.send();
}
//Make an HTTP POST Request
//parametri su url, podaci koje saljemo i callback funkcija
easyHTTP.prototype.post=function(url, data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self=this;
  this.http.onload=function(){
      //drugi parametar je novi post koji smo napravili
    callback(null, self.http.responseText);
 }
 //podaci se pretvaraju u string pre slanja
  this.http.send(JSON.stringify(data))
}
//Make an HTTP PUT Request
easyHTTP.prototype.put=function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
  
    let self=this;
    this.http.onload=function(){
        //drugi parametar je novi post koji smo napravili
      callback(null, self.http.responseText);
   }
   //podaci se pretvaraju u string pre slanja
    this.http.send(JSON.stringify(data))
  }
//Make an HTTP DELETE Request
easyHTTP.prototype.delete=function(url, callback){
 this.http.open('DELETE', url, true);

 let self=this;
 this.http.onload=function(){
     if(self.http.status===200){
         callback(null, 'post deleted');
     }
     else{
         callback('error: '+self.http.status);
     }
 }
 this.http.send();
}