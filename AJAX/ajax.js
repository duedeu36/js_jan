var getPingObj = document.getElementById('get-ping');

getPingObj.onclick = function(){
   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://cileria.com:3050/ping');
   xhr.onload = function() {
   if(xhr.status === 200){
       console.log('success, status code is 200');
       
       var data = xhr.responseText;
       var dataobj = JSON.parse(data);

       console.log(data);
       console.log(dataobj);
   }
}

xhr.send();

}

var postpinObj = document.getElementById('post-ping');


postpinObj.onclick = function(){
   var xhr = new XMLHttpRequest();
   xhr.open('POST', 'http://cileria.com:3050/ping');
   xhr.setRequestHeader('Content-Type', 'application/json'); // type of body
   xhr.onload = function() {
   if(xhr.status === 200){
       console.log('success, status code is 200');
       
       var data = xhr.responseText;
       var dataobj = JSON.parse(data);

       console.log(data);
       console.log(dataobj);
   }
}
   
   var body = {
       message: 'hallo world',
       weather: 'not so hot today'
   };

xhr.send(JSON.stringify(body));
    
};

var login = document.getElementById('login-btn');

login.onclick = function () {
   var xhr = new XMLHttpRequest();
   xhr.open('POST', 'http://cileria.com:3050/fakelogin');
   xhr.setRequestHeader('Content-Type', 'application/json'); // type of body
    
   xhr.onload = function() {
   if(xhr.status === 200){
       console.log('success, status code is 200');
       var data = xhr.responseText;
       var dataobj = JSON.parse(data);

       console.log(data);
       console.log(dataobj);
       
       if(dataobj.error === 'username and password found') {
           alert('Incorrect login');
       }
   }
}
    
   var usernameObj = { username: document.getElementById('username') };
   var passwordObj = { password: document.getElementById('password') };
    
    var body = {
        username: usernameObj.value,
        password: passwordObj.value
    };

  
    xhr.send(JSON.stringify(body));
       
}


///Task Users










